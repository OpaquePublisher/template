---
permalink: /
layout: page
title: Table of Contents
---

<div align="center">
<h1>{{site.title}}</h1>
<h2>{{site.subtitle}}</h2>
</div>
<hr>

<h1><a href="{{ site.baseful }}/narrative/preface">Preface</a></h1>
{% for chapterloop in site.narrative %}
{% if chapterloop.section == "0" %}
{% if chapterloop.subsection == "0" %}
<h1><a href="{{ site.baseurl }}/narrative/{{ chapterloop.chapter }}_{{ chapterloop.section }}_{{ chapterloop.subsection }}">{{ chapterloop.sectiontitle }}</a></h1>
{{ chapterloop.info }}
{% assign chapnumber = chapterloop.chapter %}
{% for sectionloop in site.narrative %}
{%- if sectionloop.chapter == chapnumber -%}
{% if sectionloop.subsection == "0" %}
{% if sectionloop.section != "0" %}
<h4>{{ sectionloop.sectiontitle }}</h4>
{% if sectionloop.info != "nil" %}{{ sectionloop.info }}<br>{% endif %}
<b>Subsections:</b>
{% endif %}{% endif %}
{%- if sectionloop.subsection != "0" -%}{% if sectionloop.subsection != "1" %} | {% endif %}<a href="{{ site.baseurl }}/narrative/{{ sectionloop.chapter }}_{{ sectionloop.section }}_{{ sectionloop.subsection }}">{{ sectionloop.chapter }}.{{ sectionloop.section }}.{{ sectionloop.subsection }}</a>{%- endif -%}{%- endif -%}
{% endfor %}
{% endif %}
{% endif %}
{% endfor %}
