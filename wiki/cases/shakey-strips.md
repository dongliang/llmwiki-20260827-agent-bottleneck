---
title: Shakey 与 STRIPS
aliases: [Shakey, STRIPS]
type: case
era: 1969–1972
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [case, robotics]
---

## 一句话

SRI 的移动机器人 Shakey——第一个撞上[框架问题](../concepts/frame-problem.md)的系统，也是"中央规划器"路线失败的实证。

## 展开

- SRI 国际研究中心造的机器人，用 STRIPS 算法规划行动。
- 症状与今天的 Agent 一模一样：执行动作后世界状态变了，系统不知道哪些变了、哪些没变。
- 解法是"帧公理"（显式声明动作后什么不变），但帧公理会随动作链指数膨胀——见 [框架问题](../concepts/frame-problem.md)。
- 结局对照：Brooks 后来用[分层架构](../concepts/subsumption-architecture.md)造的机器人能在办公室里自由导航，而"中央规划型前辈 Shakey 连走出一个房间都费劲"。

## 原文锚点

> "它的问题和今天的 Agent 一模一样。" —— [源·第一节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 概念：[框架问题](../concepts/frame-problem.md) · [Subsumption 架构](../concepts/subsumption-architecture.md)
