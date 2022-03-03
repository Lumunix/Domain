---
layout: Post
title: Code Sections
author: lumunix
date: 2021-10-03
thumbnail: codesections.png
tags: [Code,Documentation]
comments: false
---
This page has examples of syntax highlighting in different languages, as well as the code copy header that can be applied to code sections that allows readers to quickly copy the code snippet to the clipboard (come on everyone has copy and pasted code from the internet every once in awhile)


{% include codeHeader.html %}
```javascript
function sayHello(name) {
  if (!name) {
    console.log('Hello World');
  } else {
    console.log(`Hello ${name}`);
  }
}
```

{% include codeHeader.html %}
```java

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

{% include codeHeader.html %}
```html
<p>Here's some HTML for you.</p>
```
