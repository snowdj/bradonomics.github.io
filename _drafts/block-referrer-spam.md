---
layout: post
title: How to Block Referrer Spam in Google Analytics
headline:
sub-heading:
description:
category:     #Should be lower case or links won't work.
featured-image:
permalink:
---
I should probably add something about how most analytics data is not useful. At least I don't find any use in it. What can you do with pageview and bounce rate data? Since what gets measured improves, wouldn't it be better to measure engagement? But what type of engagement? Emails? Tweets? Re-Tweets? As far as I know, no analytics program measures these things. But maybe one day I'll find a use for the bulk data of pageviews and such, so with that in mind, I still keep Google Analytics installed. And while that data isn't useful to me now, it will never be useful if I don't filter the spam.

I spent many months trying to block referrer spam in my Google Analytics. I knew these webpages didn't have links pointing to my site so they shouldn't have been showing in my analytics that someone had left their site to visit mine. I tried blocking them with plugins and via the .htaccess file. It wasn't till <a href="https://twitter.com/AnalyticsEdge">Mike Sullivan</a> introduced me to "ghost referrals" that I was able to clean my analytics and get real data about my visitors.

Most of the "referrers" never actually visit your site. They run Google Analytics IDs through some software to make it look like they've visited and register a visit in your reports. <a href="http://www.analyticsedge.com/2014/12/removing-referral-spam-google-analytics/">Mike's article</a> says all that really needs to be said on how to use filters to block the bad referrers, but I'll repeat the relevant parts since you're here.

... some instructions.

It's a near daily battle to keep filters updated, so I've setup a git repo with the ever growing list. It's really specific to me and also has IP addresses I'd like to block which will do you no good, but it will get you started. You can keep your own file if you like by forking this one or simply downloading it and updating it with you own data.