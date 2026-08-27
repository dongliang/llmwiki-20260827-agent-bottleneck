---
title: 规则脆性
aliases: [Rule Brittleness]
type: concept
era: 1976
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, ai-history, 架构]
---

## 一句话

规则越多，系统不是越强而是越脆——"约束加多了退化成工作流"在 1976 年的原名。

## 展开

斯坦福的 [MYCIN](../cases/mycin.md)（600 条规则的医疗诊断专家系统）：每条规则单独看都对，组合起来却会冲突、遗漏边界、遇到训练分布外的输入就崩。每加一条规则，就多一个潜在冲突点——**你以为在加固，实际在增加脆弱性**。

**今日映射**：结构化输出、超时重试、模型路由、沙箱隔离、人工确认——每一条都是合理工程约束，叠在一起就是 MYCIN 困境：约束的边际效益递减，冲突的边际成本递增，最终系统变成需要人维护的工作流，而不是自主 Agent。

**结构性矛盾**：这个困境不是工程能解决的——你无法用"加约束"让系统同时拥有自主性和可靠性，两个目标在结构上互斥。出路是换架构：[分层抑制](../concepts/subsumption-architecture.md)，而不是继续堆规则。

## 原文锚点

> "规则越多，系统不是越强，而是越脆。" —— [源·第二节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 案例：[MYCIN](../cases/mycin.md)
- 反叛之路：[Subsumption 架构](../concepts/subsumption-architecture.md) · [分层架构落地](../playbooks/layered-subsumption-design.md)
- 总览：[历史→今天映射表](../maps/history-to-today.md)
