---
title: 最大瓶颈 = 边界盲视（自知·自觉·自止）
aliases: [边界盲视, 自知自觉自止]
type: thesis
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, thesis, 生产化]
---

## 一句话

Agent 当前最大的瓶颈既不是模型能力、也不是工程基础设施或业务场景，而是：**我们造了一个不知道自己边界的系统，然后把它放进了容错率为零的生产环境。**

## 三字诊断：自知 · 自觉 · 自止

三个历史原型（[框架问题](../concepts/frame-problem.md)、[规则脆性](../concepts/rule-brittleness.md)、[ELIZA 效应](../concepts/eliza-effect.md)）指向同一个根因：

### 不自知 —— 感知有边界
Agent 住在电脑里，不知道自己在哪家公司、做什么业务。例：发票开专票还是普票，人走一趟财务问一嘴就行的事，AI 很难获取。叠加[谄媚](../concepts/sycophancy.md)，它甚至不知道要问清楚——**不知道自己不知道**。

### 不自觉 —— 推理链不可审计
你问它"为什么这么做"，它给一个看起来合理的解释——但那是**事后生成的说辞，不是决策过程的真实记录**。所以要用 Claude Code 这类工具做大型项目时，最关键的动作是亲自审查关键代码逻辑：真能跑还是在编。老板可以接受 Agent 犯错，不能接受犯错了还说不出为什么。

### 不自止 —— 不知道什么时候该停（最核心）
训练目标是"以完成用户任务为优先"：
- 用户说"往左移两米"，直接执行，甚至揣测偏好；
- 用户给引导性提问，顺着编而不是说"我不确定"；
- 边界情况选"看起来合理"的路径而非停下问人。

一个不知道何时停的系统，没人敢放进生产环境——**生产环境和 Demo 的最大区别不是输入更复杂，而是犯错的代价更高**。

## 判断与押注

模型会进化、工程会成熟、场景会出现；但从 1960 年 Bar-Hillel 到 2026 年的幻觉问题，边界问题 70 年未解。这不是悲观——**谁能先解决"自止"，谁就先把 Agent 从 Demo 推到生产**。

## 原文锚点

> "最大的瓶颈是：我们造了一个不知道自己边界的系统，然后把它放到了容错率为零的生产环境里。" —— [源·第七节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 怎么做：[先建自止再建自主](../playbooks/self-stop-first.md) · [分层架构替代中央规划](../playbooks/layered-subsumption-design.md) · [审查能力>提示词工程](../playbooks/review-over-prompting.md)
- 历史脉络：[历史→今天映射表](../maps/history-to-today.md)
