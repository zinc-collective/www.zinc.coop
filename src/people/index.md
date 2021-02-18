---
layout: default
title: People
---

{% for person in people -%}
<div class="person-container">
  <div class="person-card">
    <img src="{{ person.image }}" />
    <div>
      <h3>{{ person.name }}</h3>
      {{ person.type }}<br/>
      {{ person.location }}
      <ul>
        {% for name, url in person.links -%}
        <li><a href="{{ url }}">{{ name }}</a></li>
        {% endfor -%}
      </ul>
    </div>
  </div>
  <p><strong>Specialties:</strong> <em>{{ person.specialties }}</em></p>
  <p><strong>Interests:</strong> <em>{{ person.interests }}</em></p>
  <p>{{ person.bio }}</p>
</div>
{% endfor -%}
