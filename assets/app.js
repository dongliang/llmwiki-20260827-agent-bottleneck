/* llmwiki SPA — 直接渲染仓库内的 markdown，免构建 */
const REPO = 'dongliang/llmwiki-20260827-agent-bottleneck';
const DEFAULT_PAGE = 'wiki/index.md';
const content = document.getElementById('content');
const crumb = document.getElementById('crumb');

function resolvePath(current, href) {
  // 以当前文件所在目录为基准解析相对链接
  const dir = current.includes('/') ? current.slice(0, current.lastIndexOf('/') + 1) : '';
  const parts = (dir + href).split('/');
  const out = [];
  for (const p of parts) {
    if (p === '' || p === '.') continue;
    if (p === '..') out.pop(); else out.push(p);
  }
  return out.join('/');
}

function parseFrontmatter(text) {
  const meta = {};
  let body = text;
  if (text.startsWith('---')) {
    const end = text.indexOf('\n---', 3);
    if (end !== -1) {
      const fm = text.slice(3, end);
      body = text.slice(end + 4);
      let lastKey = null;
      for (const line of fm.split('\n')) {
        const m = line.match(/^(\w[\w-]*):\s*(.*)$/);
        if (m && !line.startsWith(' ')) {
          lastKey = m[1];
          let v = m[2].replace(/^["'\[]+|["'\],]+$/g, '').trim();
          if (v) meta[lastKey] = v;
        } else if (lastKey && line.match(/^\s*-\s+/)) {
          (meta[lastKey] = meta[lastKey] || []).push(
            line.replace(/^\s*-\s+/, '').replace(/^["'\[]|["'\],]$/g, ''));
        }
      }
    }
  }
  return { meta, body };
}

function renderMeta(meta) {
  const chips = [];
  if (meta.type) chips.push(meta.type);
  if (meta.era) chips.push(meta.era);
  if (meta.created) chips.push(meta.created);
  const rawTags = Array.isArray(meta.tags) ? meta.tags : (meta.tags ? String(meta.tags).split(',') : []);
  const tags = rawTags.map(t => t.replace(/[\[\]'" ]/g, '')).filter(Boolean);
  tags.forEach(t => chips.push('#' + t));
  if (!chips.length) return '';
  return '<div class="meta">' + chips.map(c => '<span>' + c + '</span>').join('') + '</div>';
}

async function showPage(path) {
  content.innerHTML = '<p class="muted">加载中…</p>';
  crumb.innerHTML = '<a href="#/wiki/index.md">llmwiki</a> / ' + path;
  try {
    const res = await fetch(encodeURI(path));
    if (!res.ok) throw new Error(res.status);
    const text = await res.text();
    const { meta, body: rawBody } = parseFrontmatter(text);
    let body = rawBody;
    let title = meta.title || path.split('/').pop().replace(/\.md$/, '');
    document.title = title + ' · llmwiki';
    const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    const aliases = Array.isArray(meta.aliases) ? meta.aliases : [];
    const aliasLine = aliases.length
      ? '<p class="aliases muted">别名：' + aliases.map(esc).join(' · ') + '</p>' : '';
    // 正文自带 H1 时直接用它当卡片标题（避免重复）
    const h1 = body.match(/^#\s+(.+)\r?\n?/);
    if (h1) { title = h1[1].trim(); body = body.slice(h1[0].length); }
    marked.setOptions({ gfm: true, breaks: false });
    content.innerHTML = '<h1 class="card-title">' + esc(title) + '</h1>' + aliasLine +
      renderMeta(meta) + marked.parse(body) +
      '<div class="backtop"><a href="#/wiki/index.md">← 返回全局目录</a></div>';
    window.scrollTo(0, 0);
  } catch (e) {
    content.innerHTML = '<h2>加载失败</h2><p class="muted">' + (e && e.message) + '</p><p><a href="#/wiki/index.md">← 返回全局目录</a></p>';
    console.error(e);
  }
}

async function showAll() {
  content.innerHTML = '<p class="muted">加载中…</p>';
  crumb.textContent = '全部页面';
  document.title = '全部页面 · llmwiki';
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/git/trees/main?recursive=1`);
    const data = await res.json();
    const files = data.tree.filter(t => t.path.endsWith('.md')).map(t => t.path).sort();
    const groups = {};
    files.forEach(f => {
      const d = f.includes('/') ? f.slice(0, f.lastIndexOf('/')) : '/';
      (groups[d] = groups[d] || []).push(f);
    });
    let html = '<h1>全部页面</h1><p class="muted">来自仓库文件树，随推送自动更新</p>';
    for (const d of Object.keys(groups).sort()) {
      html += `<h3>${d}</h3><ul class="filelist">` + groups[d].map(f => {
        const name = f.split('/').pop().replace(/\.md$/, '');
        return `<li><span class="dir">${d}/</span><br><a href="#/${f}">${name}</a></li>`;
      }).join('') + '</ul>';
    }
    content.innerHTML = html;
  } catch (e) {
    content.innerHTML = '<h1>全部页面</h1><p class="muted">文件列表加载失败（GitHub API 受限？），请从<a href="#/wiki/index.md">全局目录</a>浏览。</p>';
  }
}

function route() {
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  if (!h || h === '/') return showPage(DEFAULT_PAGE);
  if (h === '__all__') return showAll();
  if (h.endsWith('.md')) return showPage(h);
  return showPage(h.endsWith('/') ? h + 'index.md' : h + '.md');
}

// 拦截 .md 相对链接 → hash 路由
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (/^https?:|^mailto:/.test(href)) { a.target = '_blank'; return; }
  if (href.endsWith('.md')) {
    e.preventDefault();
    const cur = decodeURIComponent(location.hash.replace(/^#\/?/, '')) || DEFAULT_PAGE;
    location.hash = '#/' + (href.startsWith('/') ? href.slice(1) : resolvePath(cur, href));
  }
});

window.addEventListener('hashchange', route);
route();
