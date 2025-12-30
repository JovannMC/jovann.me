---
title: "JovannMC Update #6"
date: "2025-12-30"
description: "update #6.. at 17? come on, you know you want to say it."
published: true
---

It's been a while since the last update, many things have happened since then--this is the first update to be on my new blog on [jovann.me](https://jovann.me) (you're on here right now!) and the biggest update I've written! After this one, I plan for a 2025 "year in review"-like blog post to summarize this pretty insane year.

## General & personal stuff

From the last update, I've "leveled" up again on November 27 and am 17 now - one more year till I'm a crippling adult :pensive:

Hope you all have had a Merry Christmas if you celebrate it, Happy Holidays, and a Happy New Year when it comes!! I started writing this near the beginning of this month and only finished this now, so uh yeah! I got a few things for myself and from others:

- [Amazfit Bip 6](https://www.amazon.com/gp/product/B0F9J1JR8G)
- [ESP32-S3-WROOM](https://www.amazon.com/gp/product/B0F269QW71) starter kit
- 3x [nRF52840](https://www.amazon.com/gp/product/B0CYLNZ6V4) development boards
- [Matte screen protector](https://www.amazon.com/gp/product/B01N68HI9S) for my MacBook Pro 13"

<img src="/images/blogs/jovannmc-update-6/stuff.webp" alt="Amazfit Bip 6, ESP32 kit, 3 nRF52840, and matte MacBook Pro screen protector" class="w-full md:w-3/4" />

As I've said in previous announcements, I go to an international school that follows the British curriculum where I am currently in Year 12 doing my AS levels, with my parents planning to make me graduate this year and head straight for university - locally I can go to a few universities with just AS levels (and not the full A level / A2), but there are some options I want to consider abroad like in ɐᴉlɐɹʇsn∀ which would be safer for me given my identity 😅

## Projects

This girl has been really busy working on a few projects, some new and blowing up, and some more established projects! Uhh, I don't know what else to write to fill up this space so yap yap yap, lorem ipsum dolor sit amet, you lost the game, explode.

\<3

### VERT.sh

The file converter you'll love has been exploding in popularity, with lots of media outlets featuring VERT (including GitHub themselves on [Twitter](https://twitter.com/github/status/1993662391276441681), [YouTube](https://www.youtube.com/watch?v=wc2y1HS2a4I), [YouTube Shorts](https://www.youtube.com/watch?v=L5BJGEZnLv8), and [Instagram](https://www.instagram.com/reel/DRiWC0NEuPi/)!) and over `12.9k+` stars on the GitHub - it has been such a blast to work on and grateful to see you all loving it. **An interesting situation involving VERT happened as I was finishing this blog post, which I will talk about in the near future - stay tuned.**

<img src="/images/blogs/jovannmc-update-6/media-coverage.webp" alt="Numerous media websites covering VERT" class="w-full md:w-1/2" />

<img src="/images/blogs/jovannmc-update-6/github-tweet.webp" alt="GitHub Twitter account featuring VERT" class="w-full md:w-1/2" />

A cool new feature in the works will allow for local video conversion _directly in your browser_! For the most common conversions you will not need to upload your file to any server at all, ensuring complete privacy. This is not a complete replacement for vertd however, as not all conversions will be supported (especially more obscure formats--ever heard of `.nut`?) and not all browsers may support it. As such, VERT will warn you before converting if server-side conversion is needed.

<img src="/images/blogs/jovannmc-update-6/star-history.webp" alt="VERT GitHub star history" class="w-full md:w-3/4" />

There's been lots of bugfixes here and there, including fixing many of the conversion failures for `vertd`! VERT never stores anything as conversions happen on your browser, _except_ for video -> video conversions, which rely on a server running `vertd`. A little while ago, we added a feature to give us permission to keep the video on the server (rather than get deleted after an hour / download) that will only be used to help us troubleshoot conversion failures--you are able to see the exact details sent to us when viewing the details.

Making changes with the help of the files submitted, the video conversion job failure rates dropped by up to **40%**! This is an approximate estimate of course and there are many other factors that could have contributed to the difference. We also do not know the actual number of files that is converted with both VERT and vertd each day.

<img src="/images/blogs/jovannmc-update-6/vertd-error.webp" alt="VERT site showing details of a failed conversion job" class="w-full md:w-3/4" />

### SlimeVR

I've also been, well trying to, doing work for SlimeVR with doing some major refactoring in preparation for overhauling Android & iOS support. Currently, the "server" part of the app is a mixture of Kotlin and Java and we are going to rewrite the JVM-only code so we can use Kotlin Multiplatform--this would allow the Android and iOS builds to rely on one tool rather than separate ones (and finally making iOS builds not.. crappy)!

Currently I am focusing on moving the files to Kotlin one component at a time, and then moving the JVM-only stuff inside those to Kotlin / native libraries to get them compatible with Kotlin Multiplatform. This should make the develooper & user experience (DX/UX) better.

<img src="/images/blogs/jovannmc-update-6/branches.webp" alt="GitHub Desktop app showing 4 branches in progress" class="w-full md:w-3/4" />

The website is another thing I've been working on for SlimeVR. It's the first larger thing I did for SlimeVR back in July where I was tasked to create the contributors / team page for the SlimeVR website. Following the design they gave me, I created a page showing most of the wonderful contributors who helped shape SlimeVR to where it is now. The unique thing about this page is that everyone's showed off like collectibles / Pokemon cards, allowing you to hover, tilt, and maximize someone's card containing how they helped, hashtags, and socials. You can also see people who sponsor SlimeVR via GitHub Sponsors and each day, up to 5 of the cards become "shiny"--I'll be working on more stuff for the website once designs for them are finalized!

Thank you very much to this [GitHub repository](https://github.com/simeydotme/pokemon-cards-css) for the inspiration of the "Pokemon card"-like style!

<img src="/images/projects/slimevr-team.webp" alt="SlimeVR team page showing cards of each contributor" class="w-full md:w-3/4" />

### SlimeTora

A while ago, I discovered a major issue with SlimeTora for people with the HaritoraX 2 trackers and released v1.5.3 as an emergency fix, and I'd like to apologize again for the incompetence & time it took to take action on it. Essentially what hapened was that the HaritoraX Wireless (and previous trackers) required some manual adjustments to the acceleration code (specifically the gravity calculations) to ensure that acceleration was essentiall 0 at idle. The HaritoraX 2 had changes made to its internal firmware which meant it did not need this manual adjustments, leading to incorrect acceleration especially noticable while at rest.

I made the mistake of assuming nothing major had changed between the HaritoraX Wireless and HaritoraX 2 & assumed the code didn't need much changes to get working--I was wrong of course. I apologize for taking so long in fixing this, it had caused major drifting for many people using SlimeTora and could have damaged the reputation of the HaritoraX 2 trackers, which have improvements to the hardware. I actually had noticed the drifting ages ago, but scuffed it off as a temporary / calibration issue and didn't think much of it until way later.

I also apologize for the lack of updates regarding SlimeTora V1 and V2, I'll talk a bit more about it in the [#burnout](#burnout) section below.

### Secret NDA project

Spooky, I've recently signed an NDA to join a pretty exciting project! I obviously can't talk _too_ much about it for obvious reasons, but this girl is gonna be remotely working at 17--this girl is getting old with that employment! Hey, take a look at that corporate card!

<img src="/images/blogs/jovannmc-update-6/rho-card-slip.webp" alt="Numerous media websites covering VERT" class="w-full md:w-1/2" />
<img src="/images/blogs/jovannmc-update-6/rho-card.webp" alt="Rho corporate card" class="w-full md:w-1/2" />

## Burnout

Needless to say, I've been pretty burned out with editing videos and SlimeTora/Haritora-related stuff. I have _so many_ videos in my backlog to edit, some recorded over a year ago. Most of these videos I still do want to release but there is many that are scrapped due to them not being edited in time. I hope to come back to these at some point but I am not too sure on when I will feel like it, especially with AS levels and college starting after this academic year. I also have like a million things I wanna mess with (new microcontrollers, old routers, Zepp OS / my new smart watch, etc)

SlimeTora has also not been a very huge priority for me given it's pretty feature-complete even with me announcing I was working on SlimeTora v2, which is a complete rewrite. A combination of burnout and talks with implementing SlimeTora-like features into SlimeVR itself contributed to this (& the many things in my backlog of projects, videos, and academics) and I'm again sorry for the lack of communication for it.

## Closing notes

2025 has been a rollercoaster of a year for me, so both good and bad, but no matter what I hope you all will have a great 2026 ahead! Very sorry about the slow progress in my stuff, there's just a lot of stuff going as you can see--including things I haven't talked about here or forgot about.

If you want to support me and my work, I recently opened up my [GitHub Sponsors](https://github.com/sponsors/JovannMC/) page which is now my preferred way to donate to me, check it out!

Side note: yes, I do unironically use the em-dash (--), it's such a good punctuation mark that I will never forgive AI for ruining. Apparently even the oxford comma is an AI indicator now as well, so I'm double screwed lol. **No, I do not use AI to write stuff like this or my scripts.** I use it for assistance in coding or other repetitive tasks, but never to do creative work, "vibe code", or to generate AI images or videos.
