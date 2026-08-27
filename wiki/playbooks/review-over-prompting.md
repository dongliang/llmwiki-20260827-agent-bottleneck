---
title: 投资审查能力，而非提示词工程
aliases: [审查>提示词, AI 团队小领导]
type: playbook
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, playbook, 工作方法]
---

## 一句话

在与 AI 协作的大型项目里，最值钱的能力不是写好提示词，而是审查产出——判断是真的能跑，还是 AI 在编。

## 展开

作者的分工模式：千问当画师、智谱当代码工程师、DeepSeek 当极速实习生，自己成了"AI 团队的小领导"。

这个角色最重要的动作：**审查关键代码逻辑**。因为 AI 面对不确定的部分，默认行为不是停下来问你，而是编一个看起来合理的实现（见[不自觉：推理链不可审计](../theses/bottleneck-is-boundary-blindness.md)与[谄媚](../concepts/sycophancy.md)）。

规律：**模型越强，产出越逼真，审查越值钱**。这条与 [ELIZA 效应](../concepts/eliza-effect.md)同源——产出越流畅，人越容易停止校验。

## 原文锚点

> "这个角色最重要的能力不是'写好提示词'——是审查关键代码逻辑，判断是真的能跑还是 AI 在编。" —— [源·第六节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 同源风险：[ELIZA 效应](../concepts/eliza-effect.md)
- 制度化版本：[分层架构中的审查层](../playbooks/layered-subsumption-design.md)
