---
layout: Post
title: Comment Systems
date: 2021-12-03
thumbnail: comment-systems.png
header: banner.png
tags: [Comments, Documentation]
comments: true
---
Domain has two comment systems available. You can choose either Disqus or staticman comments.


# Staticman Comments
[Staticman](https://github.com/eduardoboucas/staticman) API, which allows for the integration of comments into static web pages.

1. Ensure that **site.preferences.comments.system** is set to **staticman**

2. Ensure that **site.preferences.comments.system**


# Disqus Comments
[Disqus](https://disqus.com) is a comment system that can be easily integrated, it is a paid service.

In your [_config.yml](https://github.com/Lumunix/Domain/blob/main/_config.yml), do the following:

1. Ensure that **site.preferences.comments.system** is set to **disqus**
2. Set **site.prefrences.comments.disqus.shortname** to your disqus shortname.





    site.preferences.comments.system
