---
title: 框架问题
aliases: [Frame Problem, 帧问题]
type: concept
era: 1971
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, ai-history, 规划]
---

## 一句话

执行一个动作后，系统不知道世界哪些变了、哪些没变——这就是 Agent"长链路误差累积"在 1971 年的原名。

## 展开

SRI 国际研究中心造了移动机器人 [Shakey](../cases/shakey-strips.md)，用 STRIPS 算法规划行动，症状与今天的 Agent 一模一样。STRIPS 的解法是**帧公理（frame axioms）**：显式声明"执行这个动作后，什么不变"。

**今日映射**：你写的"工具调用后的状态校验""上下文窗口管理""记忆压缩策略"——本质上全是帧公理。70 年换了技术栈，没换问题。

**为什么 Demo 能跑、真实业务不能**：短链路（三五个步骤）帧公理负担还扛得住；链路拉到二十步，需要跟踪的"不变项"指数级增长，状态空间爆炸，误差累积，结果不可复现。这不是模型不够聪明，是问题本身在数学上就很难。

## 原文锚点

> "随着动作链变长，需要跟踪的'不变项'数量指数级增长，最终不可计算。" —— [源·第一节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 案例：[Shakey 与 STRIPS](../cases/shakey-strips.md)
- 对症思路：[Subsumption 架构](../concepts/subsumption-architecture.md)（放弃完美世界模型）
- 总览：[历史→今天映射表](../maps/history-to-today.md)
