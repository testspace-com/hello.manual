---
testspace:
title: Vars and Includes
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{% include example-intro.md %}

## Test Case One
Some description here.

* check this  
* check that


{% include example-case.md name="Test Case Two" %}
