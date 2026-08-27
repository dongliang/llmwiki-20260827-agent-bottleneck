---
title: ELIZA 效应
aliases: [ELIZA Effect]
type: concept
era: 1966
created: 2026-08-27
sources:
  - "[2026-08-27-agent-maximum-bottleneck](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)"
tags: [agent, ai-history, 认知偏差]
---

## 一句话

当系统的输出足够流畅时，人会自动补全"理解"这个环节——你看到的"理解"，有一部分是你自己投射的。

## 展开

1966 年 MIT 的 Weizenbaum 用 200 行代码写了聊天程序 [ELIZA](../cases/eliza-weizenbaum.md)——纯关键词匹配，连他的秘书都信以为真。核心不是"程序太聪明"，而是**人的脑补机制**。

**今日映射**：Demo 里 Agent 自主规划、调用工具、生成交付物，流畅连贯、看起来像在思考；上了生产线，上下文变长、输入变脏、边缘案例变多，那个"理解"的幻觉就碎了。

**放大器**：[AI 谄媚](../concepts/sycophancy.md) 让幻觉更隐蔽——Demo 完美，交付物里藏着顺着用户编出来的错误。

## 原文锚点

> "当系统的输出足够流畅时，人会自动补全'理解'这个环节。" —— [源·第三节](../../raw/agent-bottlenecks/2026-08-27-agent-maximum-bottleneck.md)

## 相关

- 案例：[ELIZA](../cases/eliza-weizenbaum.md)
- 放大器：[AI 谄媚](../concepts/sycophancy.md)
- 对症药：[投资审查能力而非提示词工程](../playbooks/review-over-prompting.md)
