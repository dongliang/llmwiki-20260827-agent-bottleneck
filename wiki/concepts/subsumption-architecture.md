---
title: Subsumption 架构
aliases: [包容架构, 包容体系结构]
type: concept
era: 1986–1991
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, 架构, robotics]
---

## 一句话

"世界自身即是它最好的模型"——不造中央规划器，让系统分层运作，高层只在必要时抑制低层；对三次历史困境的反叛。

## 展开

Brooks（1986–1991）给出的不同于"加约束"的路线：

- **低层**有完整的感知-行动闭环，可以独立运行；
- **高层**只在必要时抑制或重定向低层行动；
- 核心特征是**优雅降级**：高层失效时，低层照常运转。

**今日翻译**：不是给 Agent 加更多约束，而是把约束设计成"只在必要时介入"的抑制层。低层 Agent 自主执行，高层只在边界被触碰时抑制；低层出错，降级而非崩溃。

**实证**：这不是理论——Brooks 用这套架构造出了能真正在办公室里导航的机器人，而中央规划型的前辈 [Shakey](../cases/shakey-strips.md) 连走出一个房间都费劲。

## 原文锚点

> "世界自身即是它最好的模型。" —— [源·第五节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 落地：[用分层架构替代中央规划](../playbooks/layered-subsumption-design.md)
- 被它打败的：[框架问题](../concepts/frame-problem.md) · [规则脆性](../concepts/rule-brittleness.md)
