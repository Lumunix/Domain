---
layout: Page
permalink: /posts/
---
<div>
  <main>
      {% assign postsByDay =
      site.posts | group_by_exp:"post", "post.date | date: '%d-%B-%Y'" %}

      {% for day in postsByDay %}
        <h2 id="{{ day.name }}">{{ day.name }}</h2>
            {% for post in day.items %}
              <li id="date-content" style="padding-bottom: 0.6em; list-style: none;"><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a></li>
            {% endfor %}
      {% endfor %}

          <br/>
          <br/>
  </main>
</div>
