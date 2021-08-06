---
testspace:
title: Fixture Automation
before:
  name: github::setup
  description: example input
  input: 
    p1: one
    p2: two
---

{% if page %} {% assign spec = page %} {% endif %}


# {{ spec.title }}
This is a manual test.

## Test Case One
Some description here.

* check this  
* check that

## Test Case Two
Some description here.

* check this
* check that