---
layout: post
title: Moving From Google Analytics to Piwik
headline:
sub-heading: Why I gave up on Google Analytics in favor of Piwik and how I made the move.
description:
category: geekery
category-url: geekery
featured-image:
og-image:
permalink:
---
## Why would I leave the most dominant analytics program on the web?

Spam

## The Setup

Move the install files to the server.
Setup the database in phpMyAdmin
Run the program install
Add the domain to the dashboard
Add the tracking code to the site
  Test
   - DOMContentLoaded and window.onload are taking too long for comfort.
Switch to CDN hosted piwik.js file
  Test
   - DOMContentLoaded, i.e. the time until the page becomes usable has improved, but the window.onload is still too slow for my liking (it looks to the user like the page is still loading because of the browser's loading indicator is still spinning). My shared hosting is taking 3-6 seconds to serve the piwik.php file.
Changed the window.addEventListener from the option given by Piwik to the async option shared by [Christian Pekeler](https://twitter.com/pekeler) on the [Piwik Forums](http://forum.piwik.org/t/piwik-is-slowing-down-my-website-load-speed-but-why/15257/9).
  Test
   - Significant speed increase. In two tests following the change the piwik.php file loaded in .6 and .7 seconds. In the second test the DOM loaded in 1.56 seconds and the page in 2.46 seconds.


## Results

Already getting referral spam. Tweeted to Piwik team. Waiting for response.



## The Biggest Drawbacks

Dashboard Widgets are less robust. (screenshots)

Google won't let you much keyword data, but it's even worse with third party analytics. In Google Analytics you are able to connect your Web Master Tools and get slightly more data, but as of yet, there is no connection option for Piwik.


## Original "block spam in Google Analytics body"

I should probably add something about how most analytics data is not useful. At least I don't find any use in it. What can you do with pageview and bounce rate data? Since what gets measured improves, wouldn't it be better to measure engagement? But what type of engagement? Emails? Tweets? Re-Tweets? As far as I know, no analytics program measures these things. But maybe one day I'll find a use for the bulk data of pageviews and such, so with that in mind, I still keep Google Analytics installed. And while that data isn't useful to me now, it will never be useful if I don't filter the spam.

I spent many months trying to block referrer spam in my Google Analytics. I knew these webpages didn't have links pointing to my site so they shouldn't have been showing in my analytics as a referrer. I tried blocking them with plugins and via the .htaccess file. It wasn't till [Mike Sullivan](//twitter.com/AnalyticsEdge) introduced me to "ghost referrals" that I was able to clean my analytics and get real data about my visitors.

Most of the "referrers" never actually visit your site. They run Google Analytics IDs through some software to make it look like they've visited and register a visit in your reports. [Mike's article](//www.analyticsedge.com/2014/12/removing-referral-spam-google-analytics/) says all that really needs to be said on how to use filters to block the bad referrers, but I'll repeat the relevant parts since you're here.

... some instructions.

It's a near daily battle to keep filters updated, so I've setup a git repo with the ever growing list. It's really specific to me and also has IP addresses I'd like to block which will do you no good, but it will get you started. You can keep your own file if you like by forking this one or simply downloading it and updating it with you own data.
