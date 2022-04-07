---
layout: Post
title: Comment Systems
author: lumunix
date: 2021-12-03
thumbnail: comment-systems.png
tags: [Comments, Documentation]
comments: true
---

## Staticman Comments
[Staticman](https://github.com/eduardoboucas/staticman) API, which allows for the integration of comments into static web pages. Note that this comment system requires that you to configure your own staticman instance, please see documentation [[here]](https://github.com/eduardoboucas/staticman#setting-up-the-server-on-your-own-infrastructure) then complete the following steps.

In your [_config.yml](https://github.com/Lumunix/Domain/blob/main/_config.yml), do the following:

1. Ensure the comment system is preferences is set to **staticman**
```
preferences:
  comments:
    system: staticman
```
2. Ensure that the staticman branch property is set to the same branch your [[Github pages]](https://pages.github.com) repository is hosted from. Ensure that the staticman url is set to the endpoint of the staticman service you have deployed.

  ```
  preferences:
      staticman:
        branch: "main"
        staticman_url:  <Staticman URL Here>
  ```

4. Configure options in **Staticman.yml** file in this repository, this configuration file is used to control different operation with staticman.

5. (Optional) The Staticman comments system in this Jeykll theme supports reCaptcha v2 for spam protection. In **Staticman.yml** and **config.yml** add the entries for **siteKey** and **secret** from your [[reCaptcha dashboard]](https://www.google.com/recaptcha/admin).

## Disqus Comments
[Disqus](https://disqus.com) is a comment system that can be easily integrated, it is a paid service.

In your [_config.yml](https://github.com/Lumunix/Domain/blob/main/_config.yml), do the following:

1. Ensure that **site.preferences.comments.system** is set to **disqus**
2. Set **site.prefrences.comments.disqus.shortname** to your disqus shortname.
