---
title: Markdown 基本语法
date: 2019/11/12
categories:
	- Markdown
tags:
thumbnail: /gallery/Markdown/macdown-logo.png
---

文章來源：[Markdown 基本语法](https://wizardforcel.gitbooks.io/markdown-simple-world/2.html)

<!-- more -->

# 段落

这是一个段落。

如果你需要另起一段，请在两个段落之间隔一个空行。

# 粗体、斜体

可以使用星号*或下划线_指定粗体或者斜体。

> *这是斜体*
> _这也是斜体_
> **这是粗体**
> ***这是粗体+斜体***

# 删除线

> ~~就像这样~~

# 标题

> # 这是 H1 #
> ## 这是 H2 ##
> ### 这是 H3 ###


# 引用

通过在行首加上大于号>来添加引用格式。

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.

> ## 这是一个标题。
>
> 1.   这是第一行列表项。
> 2.   这是第二行列表项。

# 列表

无序列表使用星号、加号或是减号作为列表标记：

*   Red
*   Green
*   Blue

有序列表则使用数字接着一个英文句点：

1.  Bird
2.  McHale
3.  Parish

# 内联代码

用反引号` 来标记内联代码。

可以穿插在 `這是内联代码` 一般文字

# 代码区域

```
这是一个代码区块。
```

# 分隔线

你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：

* * *
***
*****
- - -
---------------------------------------

# 链接

[an example](http://example.com/)
[an example](http://example.com/ "Optional Title")

# 图像

![Alt text](../../gallery/default_thumbnail.jpg)
![Alt text](../../gallery/default_thumbnail.jpg "Optional Title")

# 转义

markdown支持在以下字符前面插入反斜杠

\\   反斜线

\`   反引号

\*   星号

\_   底线

\{}  花括号

\[]  方括号

\()  括弧

\#   井字号

\+   加号

\-   减号

\.   英文句点

\!   惊叹号

# 表格

要注意第二行的冒号决定了居左居右还是居中，如果你不加冒号，默认是居左的

> 如果第二行不加冒号，此 Hexo 樣式預設居中。

| Item     | Value | Qty   |
| :------- | ----: | :---: |
| Computer | $1600 |  5    |
| Phone    | $12   |  12   |
| Pipe     | $1    |  234  |

| Item     | Value | Qty   |
| -------- | ----- | ----- |
| Computer | $1600 |  5    |
| Phone    | $12   |  12   |
| Pipe     | $1    |  234  |
