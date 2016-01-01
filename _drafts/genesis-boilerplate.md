---
layout: post
title: How I Create Custom Genesis Child Themes
headline:
sub-heading:
description:
category: geekery
category-url: geekery
featured-image:
og-image:
permalink:
---
I started working with Genesis early in my development career and quickly became annoyed at how Brian Gardner and company wrote CSS. I started looking for a simplified way to get a new project built as quickly as possible. I started a functions.php file to include things that made it into most of my child themes. I then based my CSS on Skeleton adding the Genesis and WordPress specific bits.

It wasn't too long before I wanted more control and more speed and started using Gulp with a variety of plugins. As my processes and preferred technologies change, I'll update this document, but for now this is my work flow for building a Genesis child theme with my Genesis Boilerplate code.

## Setup Theme Directory

Clone the boilerplate repo into the /themes directory.
Rename the directory and change origin
npm init
gulp install
Add project name (directory name) to gulpfile
Run gulp css to build the style.css file for the WordPress setup.

## Setup WordPress

Since I usually build my child themes in an existing WordPress install, I sometimes need to change some settings for the project. The most obvious change being activation of the new theme.

## Development process

With a designer:

 - Look through the PSD files to get a feel for the design.
 - Have a call with the designer to discuss functionality and other things a static design doc can't explain. Also discuss how the site is to be built; are templates sufficient, or would it be better to make widget areas or use a plugin like Toolset to allow for content editing?
 - Start with simplest page---whatever has the least amount of custom styling.
 - Once the HTML/CSS have been created upload the static files to a dev server so the designer can verify things are as they should be.

 - Start adding to functions.php the elements that need moving or changing. Things like the navigation menu, header, or footer.

## Testing

In browser emulator


## Finishing

 - Zip the appropriate files so the theme can be installed and send them to the client (or designer).
