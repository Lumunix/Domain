---
layout: Tutorial
title: Sample Tutorial
description: Sample tutorial to show the display of multiple posts under a tutorial collection.
author: lumunix
date: 2021-11-01
thumbnail: /assets/img/tutorial.png
image: /assets/img/tutorial.png
header: /assets/img/banner.png
tutorial_tag: Sample_Tutorial
comments: false
---
The Tutorials collection feature that allows you to create a sequential list of posts linked together with relative urls pointing to the next post in the series. This is useful if you want to create multiple segments with posts in a defined order.


Tutorials each have their own home page with a list of all the posts in the tutorial. This page is an example of the usage of the tutorial collection. Note that the tutorial_tag frontmatter refers to a specific tag, the tutorials are defined by all posts sharing a specific unique tag. Make sure all your posts have the tag that you define.

{% include CodeHeader.html %}
```javascript
# Frontmatter tag that is used to
tutorial_tag: Sample_Tutorial
```
