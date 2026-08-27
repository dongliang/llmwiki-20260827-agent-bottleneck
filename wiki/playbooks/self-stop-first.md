---
title: 先建"自止"，再建自主
aliases: [自止机制, 何时停下来问人]
type: playbook
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, playbook, 生产化]
---

## 一句话

Agent 系统第一个该有的不是"自主规划"，而是"什么时候该停下来问人"——这是从 Demo 走向生产的入场券。

## 三个机制

1. **置信度阈值**：对输出的每一步标注置信度，低于阈值就暂停问人。（[MYCIN](../cases/mycin.md) 50 年前就在做）
2. **关键节点人工确认**：不是每步都确认，只在**不可逆操作**前确认——发消息、删数据、花钱。
3. **超时兜底**：长链路任务设全局超时，超时回退到人工。

## 为什么这不是"约束太多"

[Agent 不是法律实体](../theses/bottleneck-is-boundary-blindness.md)：写错了数据，你无法向它追责，责任永远落在人身上。所以——

- 涉及**钱**的决策，人必须确认；
- 涉及**对外输出**，人必须审查；
- 涉及**不可逆操作**，人必须批准。

这不是 MYCIN 式的过度约束退化，这是法律要求的底线，绕不开。

## 原文锚点

> "你的 Agent 系统第一个该有的不是'自主规划'，而是'什么时候该停下来问人'。" —— [源·第六节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 诊断依据：[不自止](../theses/bottleneck-is-boundary-blindness.md)
- 配套：[分层架构](../playbooks/layered-subsumption-design.md)（审查层负责边界判断）
