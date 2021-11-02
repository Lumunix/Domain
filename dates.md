---
layout: Main
title: By Date
permalink: /dates/
---
<div>
  <main>
      {% assign postsByDay =
      site.posts | group_by_exp:"post", "post.date | date: '%d-%B-%Y'" %}

      {% for day in postsByDay %}
        <h3 id="{{ day.name }}">{{ day.name }}</h3>
            {% for post in day.items %}
              <li id="date-content" style="padding-bottom: 0.6em; list-style: none;"><a href="{{ post.url }}">{{ post.title }}</a></li>
            {% endfor %}
      {% endfor %}

          <br/>
          <br/>
  </main>
</div>
