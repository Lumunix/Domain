---
layout: Tutorials
permalink: /tutorials/
---
{% for tutorials in site.tutorials %}
  <h2>
    <a href="{{ tutorials.url }}">
      {{ tutorials.name }} - {{ tutorials.position }}
    </a>
  </h2>
  <p>{{ tutorials.content | markdownify }}</p>
{% endfor %}
