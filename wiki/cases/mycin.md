---
title: MYCIN
aliases: [MYCIN 专家系统]
type: case
era: 1976
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [case, expert-system]
---

## 一句话

斯坦福 600 条规则的医疗诊断专家系统——[规则脆性](../concepts/rule-brittleness.md)的代名词，却也是"置信度阈值"的鼻祖。

## 展开

- **脆性证据**：每条规则单独看都对，组合起来会冲突、遗漏边界、遇到训练分布外的输入就崩。规则越多越脆，每条规则多一个潜在冲突点。
- **正向遗产**：50 年前它就在做置信度阈值（对输出标注置信度、低于阈值暂停）——今天 Agent 的"停下来问人"机制可以直接抄它，见 [先建自止机制](../playbooks/self-stop-first.md)。
- 教训对今天的映射：结构化输出、超时重试、模型路由、沙箱隔离、人工确认——单看都合理，叠加后边际效益递减、冲突成本递增。

## 原文锚点

> "MYCIN 的教训是：规则越多，系统不是越强，而是越脆。" —— [源·第二节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 概念：[规则脆性](../concepts/rule-brittleness.md)
- 遗产沿用：[先建自止，再建自主](../playbooks/self-stop-first.md)
