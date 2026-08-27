---
title: 用分层架构替代中央规划
aliases: [分层设计, 三层失效模型]
type: playbook
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, playbook, 架构]
---

## 一句话

别让一个 Agent 管全局——拆成三层，每层独立运作，高层失效时低层不崩，这是 [Subsumption 架构](../concepts/subsumption-architecture.md)的工程落地。

## 三层失效模型

| 层 | 职责 | 失效后果 |
| --- | --- | --- |
| 执行层 | 工具调用、代码生成 | 单步失败，可重试 |
| 规划层 | 任务分解、链路编排 | 规划失败，降级到执行层单步 |
| 审查层 | 结果校验、边界判断 | 审查失败，回退到人工 |

关键设计：把约束做成"**只在必要时介入**"的抑制层——低层自主执行，高层只在边界被触碰时抑制；低层出错，降级而非崩溃。

## 原文锚点

> "每一层独立运作，高层失效时低层不崩。这就是 Brooks 的 subsumption 思路。" —— [源·第六节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 理论出处：[Subsumption 架构](../concepts/subsumption-architecture.md)
- 为什么不堆约束：[规则脆性](../concepts/rule-brittleness.md)
- 审查层的人间版本：[投资审查能力](../playbooks/review-over-prompting.md)
