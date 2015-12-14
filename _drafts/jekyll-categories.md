---
layout: post
title: Jekyll Categories on GitHub Pages
headline:
sub-heading:
description: How I implemented categories in Jekyll for GitHub Pages.
category: code
category-url: code
featured-image:
og-image:
permalink:
---
Categories in Jekyll had me stymied for months. I looked for tutorials and dug trough theme files on GitHub, but couldn't get it to work.

Well, finally I've got it. I hope category and tag support will be added to Jekyll core one day, but in the meanwhile here is a hack-around:

## Post Meta Data

First let's create the link to the category archive for your post's meta data. I've called this file post-categories.html and added it in my _includes directory.

If your posts will have a single category:
<script src="https://gist.github.com/bradonomics/f889f7ad4e765b9060c2.js"></script>

If you want multiple categories you'll need to loop trough them:
<script src="https://gist.github.com/bradonomics/3cce65356f85bb5cb3bb.js"></script>

In either case you can call them in your post layout like so:

{% highlight html %}
{% raw %}{% include post-categories.html %}{% endraw %}
{% endhighlight %}

## Category Layout

Next we'll need to create the category archives page. First we'll need a layout to do the loop. This will go in your _layouts directory:

<script src="https://gist.github.com/bradonomics/df7702f72f8a3b1a3db9.js"></script>

This is the loop from my blog, but you can create any type of loop you want. Look around the web, there are many examples.

Then there's "type" in the front matter, this is used to add a body class to my category archives pages for CSS styles. I've added it this way:

{% highlight html %}
{% raw %}{% if page.type %} class="{{ page.type }}"{% endraw %}
{% endhighlight %}

## Category Page

Next you'll need to add a page for every category. This is the tedious part I hope will one day be added to Jekyll core. But for now I'm adding the category name (in lowercase) and category permalink in the front matter, and the body of the file is my archive intro text.

One note on your permalinks, if you're moving from WordPress and you want your links to have /category/category-name/, add exactly that. I prefer not to use the /category/ sub-directory.

<script src="https://gist.github.com/bradonomics/dff78eb4a1754bccae96.js"></script>

Don't forget to include the _pages directory in your _config.yml file:

{% highlight yaml %}
{% raw %}include: ["_pages"]{% endraw %}
{% endhighlight %}

## Styles

Since your category names need to be in lowercase for the category pages, you'll probably want to "override" this on the front end. You can add text-transform to your archive titles like so:

<script src="https://gist.github.com/bradonomics/b8684d1fd09913a2493f.js"></script>
