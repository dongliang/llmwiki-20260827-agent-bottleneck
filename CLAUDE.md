# LLM Wiki Schema — llmwiki/

遵循 Andrej Karpathy 提出的 LLM Knowledge Base 工作流（2026-04 推文 "LLM Knowledge Bases" 及其 gist）。任何 agent（Claude Code / Codex / Minis 等）在本目录工作前必读本文件。

## 三层结构

| 层 | 位置 | 纪律 |
| --- | --- | --- |
| 原始资料 | `raw/<topic>/YYYY-MM-DD-slug.md` | **不可变**。只进不改；修订永远另存新文件 |
| 知识卡片 | `wiki/**` | 由 LLM 增量维护，全部互链；含 `index.md` 全局目录与 `log.md` 追加式日志 |
| 编译规则 | 本文件（及同内容 `AGENTS.md`） | schema，不改 `/raw` 的前提下可演进 |

## 三种操作

### 1. Ingest（喂料 → 编译）
输入：URL / 文件 / 粘贴文本。
1. 存入 `raw/<topic>/YYYY-MM-DD-slug.md`，附元数据头，正文逐字保留，声明 immutable。
2. 通读，提取**实体**（概念、案例、人物、系统）与**主张**（论断、方法）。
3. 落点判断：
   - 新实体/新主张 → 新建卡片（放对应子目录）；
   - 已有卡片相关 → 更新该页 + 强化双向互链；
   - 与既有卡片冲突 → 不要静默覆盖，在相关页追加"**矛盾记录**"段落，注明两个来源各自说法。
4. 有结构性变化才动 `wiki/index.md`；然后向 `wiki/log.md` 追加一行日志。
5. 若材料没有任何新知识：只存 raw，log 里记 `triaged, no wiki change`。

### 2. Query（提问）
先用 grep 检索 `wiki/`（可先读 `index.md` 定位），**基于已编译卡片作答**；
回答必须给出所引卡片的相对链接。卡片未覆盖时才读 raw/，并在答案末尾注明"该知识点尚未入库"。不走向量库——wiki 体量 <100K tokens 时 grep 是最优检索。

### 3. Lint（体检）
检查四项：死链、`index.md` 与实际文件不一致、孤儿页（无入链）、`log.md` 断档。
输出报告 + 只自动修复明确项（如补 index 条目），语义改动留给 Ingest。

## 卡片规范

- 文件名英文 kebab-case，放在类型子目录：`theses/` `maps/` `concepts/` `cases/` `playbooks/`
- Frontmatter：`title / aliases / type / created / sources / tags`
- 正文小节顺序：`## 一句话` → 论证展开 → `## 今日映射` → `## 原文锚点`（块引 + 相对链接到 raw） → `## 相关`
- **原子性**：一张卡讲清一件事，常规 150–400 字；`maps/` 与 `theses/` 可放宽。
- **所有主张都有出处**：块引 raw 源文件（如 `> “……” —— [源](../../raw/topic/file.md)`）或链接到另一张卡。
- 中英双词术语，正文中文为主。
- 链接一律相对路径 `.md`（GitHub / Obsidian / Minis 预览均可点击）。
- 明确不做：向量/embedding 检索、数值置信度打分、定时复查页——由 lint 与人来兜底。
