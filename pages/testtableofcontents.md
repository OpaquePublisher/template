---
permalink: /test
layout: page
title: Test Table of Contents
---

# {{site.title}}
## {{site.subtitle}}

### [Preface]({{ site.baseful }}/narrative/preface)

{% for chapterloop in site.narrative %}
{% if chapterloop.section == "0" %}
{% if chapterloop.subsection == "0" %}

### [{{ chapterloop.sectiontitle }}]({{ site.baseurl }}/narrative/{{ chapterloop.chapter }}_{{ chapterloop.section }}_{{ chapterloop.subsection }})

{{ chapterloop.info }}
{% assign chapnumber = chapterloop.chapter %}
{% for sectionloop in site.narrative %}
{%- if sectionloop.chapter == chapnumber -%}
{% if sectionloop.subsection == "0" %}
{% if sectionloop.section != "0" %}

#### {{ sectionloop.sectiontitle }}
{% if sectionloop.info != "nil" %}{{ sectionloop.info }}<br>{% endif %}

##### Subsections:

{% endif %}{% endif %}
{%- if sectionloop.subsection != "0" -%}{% if sectionloop.subsection != "1" %} | {% endif %}<a href="{{ site.baseurl }}/narrative/{{ sectionloop.chapter }}_{{ sectionloop.section }}_{{ sectionloop.subsection }}">{{ sectionloop.chapter }}.{{ sectionloop.section }}.{{ sectionloop.subsection }}</a>{%- endif -%}{%- endif -%}
{% endfor %}
{% endif %}
{% endif %}
{% endfor %}
