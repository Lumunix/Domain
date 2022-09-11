---
layout: Post
title: Welcome To Domain
description: Introducing the Domain theme features.
author: lumunix
date: 2022-01-02
thumbnail: /assets/img/welcome-to-domain.png
image: /assets/img/welcome-to-domain.png
header: /assets/img/banner.png
tags: [Welcome, Documentation]
comments: false
---

**Domain - a specified sphere of activity or knowledge, your personal knowledge repository and blog.**
Domain, like its definition implies is a collection of information. The design focus of this Jeykll theme was to create a personal wiki, inspiration was draw from the philosophy of [[Zettelkasten::https://zettelkasten.de/posts/overview/]].

Theme features include:
- **Wiki Styled Links**: Links can be external links or internal links with auto generated previews.  
    - Internal Link: [[Welcome To Domain]]
    - External Link: [[Zettelkasten::https://zettelkasten.de/posts/overview/]]

- **Context Menu**: on main feed that shows linked and related posts.

- **SideNotes**: Images, transclusions, excepts or just random thoughts can be added in the left and right side margins. These components are also responsive.[[<br><img src="{{site.baseurl}}/assets/img/hi.png">::lsn]]


    - **SideNote:** **[​[**Some Text**::keyword-of-the-type-of-the-sidenote/marginote/transclusion]]**

    > |Type of the sidenote/marginnote|keyword|
      |:--|:--|
      |Left Sidenote| `lsn` |
      |Right Sidenote | `rsn` |
      |Left Marginnote| `lmn` |
      |Right Marginnote | `rmn` |
      |Left Sidenote Transclusion | `lsn-transclude` |
      |Right Sidenote Transclusion | `rsn-transclude` |
      |Left Marginnote Transclusion | `lmn-transclude` |
      |Right Marginnote Transclusion | `rmn-transclude` |


     - **Examples**

    > **Raw Syntax:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum tortor in pharetra vehicula. Fusce gravida lacus ac sem luctus congue at id justo. Ut sed tempus ante. **[​[**Phasellus mollis lectus id efficitur mollis.**::rsn]]** Suspendisse sit amet diam nec justo rhoncus tristique. Ut blandit faucibus nisi vitae rutrum. Vivamus fermentum efficitur justo non facilisis.
    >
    > **Rendered Text:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum tortor in pharetra vehicula. Fusce gravida lacus ac sem luctus congue at id justo. Ut sed tempus ante. [[Phasellus mollis lectus id efficitur mollis.::rsn]] Suspendisse sit amet diam nec justo rhoncus tristique. Ut blandit faucibus nisi vitae rutrum. Vivamus fermentum efficitur justo non facilisis.
    >

- **Flashcards**: useful for presenting information as part of question or answer or to create simple blurbs of information seperated from normal content.


     - **Examples**

  > **Raw Syntax:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. **[​[**Donec rutrum tortor in pharetra vehicula**::srs]]**. Fusce gravida lacus ac sem luctus congue at id justo. Ut sed tempus ante. Suspendisse sit amet diam nec justo rhoncus tristique. Ut blandit faucibus nisi vitae rutrum. Vivamus fermentum efficitur justo non facilisis.
  >
  > **Rendered Text:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. [[Donec rutrum tortor in pharetra vehicula::srs]]. Fusce gravida lacus ac sem luctus congue at id justo. Ut sed tempus ante. Suspendisse sit amet diam nec justo rhoncus tristique. Ut blandit faucibus nisi vitae rutrum. Vivamus fermentum efficitur justo non facilisis.

- **Comment System**: [[To see comment systems available, please see the [[Comment Systems]] post for additional documentation.]]

- **RSS Feed**: Allows users to keep up to date with your posts!

- **Highlighting**: highlighting can be used on pieces of text to draw attention.

  - **Examples**

  > **Raw Syntax:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum tortor in pharetra vehicula. Fusce gravida lacus ac sem luctus congue at id justo. Ut sed tempus ante. **[​[**Phasellus mollis lectus id efficitur mollis.**::highlight]]** Suspendisse sit amet diam nec justo rhoncus tristique. Ut blandit faucibus nisi vitae rutrum. Vivamus fermentum efficitur justo non facilisis.
  >
  > **Rendered Text:** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum tortor in pharetra vehicula. Fusce gravida lacus ac sem luctus congue at id justo. Ut sed tempus ante. [[Phasellus mollis lectus id efficitur mollis.::highlight]] Suspendisse sit amet diam nec justo rhoncus tristique. Ut blandit faucibus nisi vitae rutrum. Vivamus fermentum efficitur justo non facilisis.

- **Code Syntax Highlighting / Code Copy** : [[Code Sections]] with full syntax highlighting with support for many popular programming languages and allow users to easily copy sections with one clip copy to clipboard functionality.

{% include CodeHeader.html %}
```html
<p>Here's some HTML for you.</p>
```

- **Mermaid Diagrams** : [[Mermaid]] can be used to create class diagrams, interaction diagrams, sequence diagrams and more.

- **Multiple Authors Support** : Multiple [[Authors]] are supported, perfect for hosting guest articles or being part of a larger wiki.

- **Link Collections** : [[Link Library]] allows you to list link in one place and reuse links across all your posts, update links in one place.

- **Jekyll Admin CMS** : [[Jekyll Admin]] have a cms like experience similar to wordpress to write posts.
