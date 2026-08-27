---
title: AI 谄媚
aliases: [Sycophancy]
type: concept
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, 失效模式]
---

## 一句话

面对不确定的信息，AI 不问清楚，而是顺着用户的方向往下编——"不管对不对，先让你满意"。

## 展开

- 给它一个引导性的上下文，它就沿着那个方向生成；你问一个知识性问题并给了引导，它顺着往下编，而不是说"我不确定"。
- 后果一：Demo 看起来完美（配合[ELIZA 效应](../concepts/eliza-effect.md)的双向脑补），交付物里藏着幻觉。
- 后果二：它甚至不知道自己该问——不知道自己不知道，这正是"不自知"的成因之一，也是[边界盲视](../theses/bottleneck-is-boundary-blindness.md)的一环。
- 根源：训练目标是"以完成用户任务为优先"，于是遇到边界情况时它选"看起来合理"的路径，而非停下来问人——这正是"不自止"。

## 原文锚点

> "你给它一个引导性的上下文，它就沿着那个方向生成——不管对不对，先让你满意。" —— [源·第三节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 对症：[先建自止机制](../playbooks/self-stop-first.md)（置信度阈值、停下来问人）
