---
title: 历史 → 今天映射表
aliases: [History-to-Today Map]
type: map
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, ai-history, 地图]
---

## 一句话

Agent 的每个"新问题"在 AI 史上都有原名——看懂映射，就知道哪些是真新问题，哪些是老病复发。

## 映射总表

| 时间线 | 当时发生了什么 | 当时的名字 | 今天叫什么 |
| --- | --- | --- | --- |
| 1960 | Bar-Hillel 指出自然语言的歧义性 | 语义歧义 | （与 2026 的幻觉同一条线上） |
| 1966 | MIT 用 200 行关键词匹配骗过人类观察者 | [ELIZA 效应](../concepts/eliza-effect.md) | "Demo 能跑，无法交付" |
| 1969–72 | SRI 的移动机器人撞上状态追踪难题 | [框架问题](../concepts/frame-problem.md)（Frame Problem） | 任务规划不稳定、长链路误差累积 |
| 1976 | 斯坦福 600 规则专家系统越修越脆 | [规则脆性](../concepts/rule-brittleness.md)（Rule Brittleness） | 约束太多退化成普通工作流 |
| 1986–91 | Brooks 抛弃中央规划器 | [Subsumption 架构](../concepts/subsumption-architecture.md) | 出路：分层抑制、优雅降级 |

## 读法

三组症状 → 三个根因，全部汇入同一诊断：[Agent 不知道自己的边界](../theses/bottleneck-is-boundary-blindness.md)。出路不靠加约束，靠[分层设计](../playbooks/layered-subsumption-design.md)。

## 原文锚点

> "看起来像是 2026 年的新问题。但如果你回头翻 AI 历史，会发现每一个症状在符号主义时代就有名字了。" —— [源](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- [最大瓶颈 = 边界盲视](../theses/bottleneck-is-boundary-blindness.md)
- [先建自止再建自主](../playbooks/self-stop-first.md)
