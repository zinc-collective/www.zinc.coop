---
layout: default
title: People

people:
    - name: "Alex Doe"
      image: http://placekitten.com/100/100
      location: "Los Angeles, CA, USA"
      links: { website: "example.com", email: "foo@example.com" }
      bio: >
          Poop on floor and watch human clean up open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow! do not try to mix old food with new one to fool me! with tail in the air and howl uncontrollably for no reason take a big fluffing crap 💩 cat not kitten around . Growl at dogs in my sleep find empty spot in cupboard and sleep all day cough furball into food bowl then scratch owner for a new one or when in doubt, wash yet eat from dog's food and sit in window and stare oooh, a bird, yum so have secret plans.
    - name: "Blake Smith"
      image: "http://placekitten.com/100/100"
      location: "Tokyo, Japan"
      links: { website: "example.com", email: "foo@example.com" }
      bio: >
          Tuxedo cats always looking dapper mew mew so groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked. Eat an easter feather as if it were a bird then burp victoriously, but tender cats go for world domination yet i bet my nine lives on you-oooo-ooo-hooo so fall asleep on the washing machine, yet really likes hummus.
---

{% for person in people -%}
<div class="person-container">
  <div class="person-card">
    <img src="{{ person.image }}" />
    <div>
      <h3>{{ person.name }}</h3>
      {{ person.location }}
      <ul>
        {% for name, url in person.links -%}
        <li><a href="{{ url }}">{{ name }}</a></li>
        {% endfor -%}
      </ul>
    </div>
  </div>
  <p>{{ person.bio }}</p>
</div>
{% endfor -%}
