# Agent 瓶颈知识库 — 全局目录

> 起点页。当前主题：**AI Agent 为什么 Demo 能跑、生产难交付**。
> 方法：Karpathy LLM Wiki（raw 不可变 → LLM 编译互链卡片 → 带出处问答）。

## 核心论断

- [最大瓶颈 = 边界盲视，不是模型不是工程](theses/bottleneck-is-boundary-blindness.md) —— 自知·自觉·自止三字诊断

## 概念地图

- [历史→今天映射表](maps/history-to-today.md) —— 一张表看完 1966/1971/1976 症状与 2026 Agent 的对应

## 概念卡

| 卡片 | 年代 | 对应今天的症状 |
| --- | --- | --- |
| [框架问题](concepts/frame-problem.md) | 1971 | 长链路误差累积、规划不稳定 |
| [规则脆性](concepts/rule-brittleness.md) | 1976 | 约束加多了退化成工作流 |
| [ELIZA 效应](concepts/eliza-effect.md) | 1966 | Demo 流畅≠能交付 |
| [AI 谄媚](concepts/sycophancy.md) | 当代放大器 | 顺着用户编，不知要问 |
| [Subsumption 架构](concepts/subsumption-architecture.md) | 1986–91 | 出路：分层抑制、优雅降级 |

## 案例卡

- [Shakey 与 STRIPS](cases/shakey-strips.md) —— 第一个撞上框架问题的机器人
- [MYCIN](cases/mycin.md) —— 600 条规则的专家系统；也是置信度阈值的鼻祖
- [ELIZA](cases/eliza-weizenbaum.md) —— 200 行代码骗过秘书的聊天程序

## 行动指南

1. [先建"自止"，再建自主](playbooks/self-stop-first.md) —— 置信度阈值 / 关键节点人工确认 / 超时兜底 + 法律底线
2. [用分层架构替代中央规划](playbooks/layered-subsumption-design.md) —— 执行/规划/审查三层失效后果表
3. [投资审查能力而非提示词工程](playbooks/review-over-prompting.md) —— 模型越强，审查越值钱

## 入口

- 操作日志：[log.md](log.md)
- 编译规则：[../CLAUDE.md](../CLAUDE.md)
