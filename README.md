# llmwiki — Agent 瓶颈知识库

照 Andrej Karpathy 的 "LLM Knowledge Base"（LLM Wiki）方法搭的个人知识库：
原始资料丢进 `raw/` 后不再改动；LLM 把它"增量编译"成一堆互链的知识卡片（`wiki/`）；人只负责挑料和提问。

来自首篇文章《Agent 当前最大的瓶颈》（2026-08-27 入库）编译出 14 张卡片。

```text
raw/            不可变原始资料
wiki/
├── index.md    全局目录（从这里开始逛）
├── log.md      追加式操作日志
├── theses/     核心论断卡
├── maps/       历史映射地图
├── concepts/   概念卡
├── cases/      历史案例卡
└── playbooks/  行动指南卡
CLAUDE.md / AGENTS.md   编译规则（Ingest / Query / Lint）
```

三种用法（对任意支持读文件的 AI 说）：

1. **Ingest**：「把这个 URL/文件喂进 llmwiki」
2. **Query**：「用我的 wiki 回答……」
3. **Lint**：「帮我 lint 一下 llmwiki」

## 在线阅读

https://dongliang.github.io/llmwiki-20260827-agent-bottleneck/

站点免构建：index.html 直接渲染仓库内的 .md，**推送 main 即自动重新部署**。
改 assets/style.css 或 app.js 后需把 index.html 里的 `?v=N` 加一，绕过 WebView 缓存。

