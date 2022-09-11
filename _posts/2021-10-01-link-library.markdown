---
layout: Post
title: Link Library
description: Information on adding common links.
author: lumunix
date: 2021-10-01
thumbnail: /assets/img/linklibrary.png
image: /assets/img/linklibrary.png
header: /assets/img/banner.png
tags: [Links,Documentation]
comments: false
---
This page shows how to add common links in markdown to the link library, which is a collection of commonly used urls to resources that allows you to add links in articles without retyping the same link over and over with a complete url. In addition these commonly used links can be updated in one file and not have to make changes to other posts.

 Add links to the **_includes/LinkLibrary.md** in the following format.
 ```markdown
 [Name]:<url link here>
 [GitHub]: https://github.com
 [Jekyll]: http://jekyllrb.com/
 [Lumunix]: https://lumunix.github.io
 ```

Then add the LinkLibrary liquid include to your post page.
```markdown
{% raw %}{% include LinkLibrary.md %}{% endraw %}
```
You can reference a LinkLibrary entry using the following syntax.
```markdown
//LinkLibrary
[Link to Github][Github]

//Syntax
[Enter Label Text Here][LinkLibrary Key Entry]
```

Traditional Link:

[[Link To Github::https://github.com]]

LinkLibrary:

[Link to Github][Github]


{% include LinkLibrary.md %}
