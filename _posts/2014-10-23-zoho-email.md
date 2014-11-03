---
layout: noimage
title: Ditching Gmail for Zoho and Mailbird
headline: Ditching Gmail for Zoho and Mailbird
modified: 2014-10-30
excerpt: After breaking my email I decided to setup with Zoho and Mailbird.
category: Article
tags: [Zoho, Email]
teaser: Zoho-Logo.jpg
---

## Setting up GitHub For Hosting

After [moving Bradonomics to GitHub Pages](http://bradonomics.com/jekyll/), I realalized—later than I'd like to admit—I'd need a new solution for email. My old web host had SMTP servers, but GitHub doesn't, so I looked around at a few providers till I noticed that Zoho had everything I needed for free.

[Zoho Mail](https://www.zoho.com/mail/zohomail-pricing.html) will host 10 users of 1 domain for free. If you need multiple domains, their first paid plan is cheaper than most other options I researched.

It might be worth mentioning that before all this switch-over, my setup was to forward all my mail to my gmail account and used either Google's SMTP servers or my webhost's servers for outbound mail. I've been wanting to de-couple from the Google Mothership for a while so this seemed a perfect time to try a different approach.

## Setting up Zoho Mail

The first thing I did was create an account at at [zoho.com/mail](https://www.zoho.com/mail/), and then head over to the [mail app](https://mail.zoho.com/) to add my domain. Once bradonomics.com was added in the account Zoho required me to [verify that I owned the domain](https://www.zoho.com/mail/help/adminconsole/domain-verification.html).

## MX Records for Mail Delivery

After my domain was verified I updated my MX records in CloudFlare with [my new Zoho information](https://www.zoho.com/mail/help/adminconsole/configure-email-delivery.html).

<figure>
<a href="http://bradonomics.com/images/CloudFlare-MX-Records-Zoho.jpg"><img src="http://bradonomics.com/images/CloudFlare-MX-Records-Zoho.jpg" alt="CloudFlare MX Records for Zoho"></a>
</figure>

## Forwarding to Gmail

In the case that you're not ready to leave Gmail you can setup a forward in your Zoho settings. Click on Control Panel, User Details and then Mail Accounts and you'll see Mail Forwarding.

<figure>
<a href="http://bradonomics.com/images/Zoho-Mail-Forwarding.jpg"><img src="http://bradonomics.com/images/Zoho-Mail-Forwarding.jpg" alt="Forwarding Zoho Mail"></a>
</figure>

## Sending From Gmail using Zoho SMTP Servers

The above will cover your inbound, but to send email you'll need to setup the ["send mail as" option in Gmail](https://mail.google.com/mail/u/0/#settings/accounts). You can find the [Zoho SMTP settings here](https://www.zoho.com/mail/help/zoho-smtp.html).

## Ditching Google and Using Mailbird

Even though there might [not be much reason to do so](http://mako.cc/copyrighteous/google-has-most-of-my-email-because-it-has-all-of-yours), I decided to leave Gmail since 90% of my mail was coming in via other domains anyway.

So far I'm digging [Mailbird](http://www.getmailbird.com/), but if you need something more powerful you might check out [eM Client](http://www.emclient.com/).

**Update: 30 Oct 2014:** Well, that didn't even last a week. I've been using Gmail since 2004. All my mail since then is stored there. Their calender and contacts and general interface are superior to anything I've found yet. I'd still like to move away from Google, but at least for now, Mailbird isn't it. If you know of any mail clients that have a great design, come with an import option and have a calendar and contacts feature, [please get in touch](https://twitter.com/bradonomics).

## SPF Configuration

Lastly, let's make sure you're emails aren't going to SPAM by setting up [Sender Policy Framework](http://www.openspf.org/Introduction). You can find the Zoho portion of the instructions [here](https://www.zoho.com/mail/help/adminconsole/spf-configuration.html) and the CloudFlare part of the instructions [here](https://support.cloudflare.com/hc/en-us/articles/200168626-How-do-I-add-a-SPF-record-).

Here's what mine looks like:
<figure>
<a href="http://bradonomics.com/images/SPF-Record-CloudFlare.jpg"><img src="http://bradonomics.com/images/SPF-Record-CloudFlare.jpg" alt="SPF Records with CloudFlare"></a>
</figure>