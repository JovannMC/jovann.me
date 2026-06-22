---
title: "VERT.sh, ii.Pe, and an AI SEO spam ring"
date: "2026-06-23"
description: "How investigating a FOSS clone led to.. a weird SEO spam ring \"assisted\" by AI"
published: true
---

Been a hot minute since my last blog post, many things have happened since then that I really wanna talk about! For today's blog post, I wanted to talk about a little funny situation - someone rebranded VERT.sh, vibecoded a bunch of changes, and then "launched their product" on multiple ProductHunt-like websites?! Plus a rabbit hole of projects circling back to a singular person, `yeagoo` on GitHub.

_([VERT.sh](https://vert.sh) is the browser-based file converter I work on, focusing on local in-browser conversions for any file you want!)_

## Discovering ii.Pe

On April 18 2026, the VERT.sh contact email received the usual spam email from a "Greg Hilton" which offered a paid article spot on a blog. The website was a pretty generic WordPress blog with a bunch of reviews (which are most likely unmarked sponsored articles given our initial email--illegal!) on services and "Top (x)" lists. There are no signs of this "Greg Hilton" person on the website, and it seems to be run by a singular person using AI to write & create thumbnails for most of the articles.

<img src="/images/blogs/vert-iipe-seo-ring/discovering-email.png" alt="Spam email offering a paid article on ii.Pe" class="w-full md:w-5/12" />

<img src="/images/blogs/vert-iipe-seo-ring/discovering-wp.png" alt="Landing page of said blog, showing many articles of service reviews and top (x) lists" class="w-full md:w-5/12" />

Other than that, there was nothing really special until I noticed the domain they were offering it for: <b>ii.Pe</b>. This is usually not surprising - people self-host VERT.sh all the time and that's great, sometimes making it public-facing. It was only when I actually visited the domain out of curiousity that I noticed a lot of.. "changes".

## Investigating

Opening the website, I was greeted with a pretty modified version of VERT: the text, colours, navbar, footer, and logo were all changed. Normally most of these would be fine and technically not against our license, AGPL-3.0, however there were many notable changes I noticed in particular that were kind of off-putting.

<img src="/images/blogs/vert-iipe-seo-ring/investigating-landing.png" alt="Landing page of ii.Pe, which was modified from VERT.sh with different colours, text, logo, navbar, and additional upload page content linking to external websites" class="w-full md:w-5/12" />

Of course the main thing was that pretty much the entire site was rebranded. It was a dirty quick lazy find+replace job since there were still obvious references to VERT.sh like the OpenGraph tags (social media embeds). The "About" page was heavily changed to move our credits, resources, and sponsors under a hidden "View Acknowledgements" text link which was buried under all the AI-generated feature cards. The footer also had its "Discord Server", "Source Code", and git commit hash links removed.

<img src="/images/blogs/vert-iipe-seo-ring/investigating-about.png" alt="The About page which contians 9 AI-generated feature cards to obscure the 'View Acknowledgements' text link" class="w-full md:w-5/12" />

While they have moved our attributions under their hidden "acknowledgements" page, the source code and email contacts in many places were still the original because of the lazy find+replace job (and partially my fault for some hardcoding I accidentally left in, lmao). Despite that, we did find their real GitHub repo (`yeagoo/ii-pe`) where it did confirm pretty much all of the changes were vibecoded (with most having Claude as the co-author). The README was also changed and "acknowledged" it was a "secondary development based on VERT".. without directly forking our repo.

<img src="/images/blogs/vert-iipe-seo-ring/investigating-email.png" alt="Privacy policy page showing the text translation shows hello@ii.pe, but the mailto: link was still hello@vert.sh" class="w-full md:w-5/12" />

<img src="/images/blogs/vert-iipe-seo-ring/investigating-github.png" alt="yeagoo's ii.Pe repository's README, modified heavily with Claude." class="w-full md:w-5/12" />

Among these, there were also a bunch of new links to other services in the navbar, upload page, and "Friend Links" page:

- A link on the navbar to "ScreenHello" (which was a screenshot editing tool)
- A few links under "Linux Documentation Alliance" and "Friend Links" on the upload page
- A bunch of links to ProductHunt-like websites in the footer
- ..and the rest of the links under a "Friend Links" page:
  - Debian.Club, HesitaCP(.)CN (it's actually `hestiacp.cn`), PortCyou(.com), Cloud(.)Fan, BigKr(.com), AlmaLinuxCN(.com.cn)
  - P.Cafe, Rank(.)Fan, APP on ARM(.com), FreeHost(.work), MF8.Biz, AAT.ee, HiCYou(.com), ii.Pe (yes, itself)
  - ScreenHello(.com), EOL.Wiki, GEO.Fan, HiEMdash(.com), QOO.IM, Web(.)Casa, LiteHTTPD(.com), LLStack(.com)

<img src="/images/blogs/vert-iipe-seo-ring/investigating-landing-2.png" alt="External links under headings 'Linux Documentation Alliance' and 'Friend Links'" class="w-full md:w-5/12" />

<img src="/images/blogs/vert-iipe-seo-ring/investigating-links.png" alt="22 total links under the 'Friend Links' page" class="w-full md:w-5/12" />

Visiting many of the sites, they have a similar pattern of also linking to other websites. Typically the sites seen are the same ones across all of the pages--this will be important later.

The sites I was most interested in were the sites in the footer, which all had special buttons saying something on the lines of "Featured on (x)" - are they really being featured on websites when they rebranded our product? Three out of four didn't actually have ii.Pe anywhere but the one that did, aat.ee, caught my eye not only for being the only one to actually have it--it was a "sponsor" of the website!

<img src="/images/blogs/vert-iipe-seo-ring/investigating-aat-ae.png" alt="ii.Pe project listing on aat.ee launched on 22/01/2026, containing fake comments below" class="w-full md:w-5/12" />

<img src="/images/blogs/vert-iipe-seo-ring/investigating-sponsors.png" alt="ii.Pe listed as a sponsor (alongside ScreenHello and EOL.Wiki) for aat.ee" class="w-full md:w-5/12" />

This was quite insulting. Not only did they rebrand our entire website, they were basically passing it off as their very own product, sponsoring other websites and such!

## Cease & Desist lmao

Me and the team were pretty pissed off to say the least - these people were obviously taking advantage of our hard work, attempting to hide the attributions, and take credit of it in general. I wanted to do something about it, so I looked into my options. Open source licensing, trademark, and copyright violations get confused quite a bit, so let me quickly explain this:

Open source licenses like `MIT` or `AGPL-3.0` are legal agreements that govern the usage, sharing, and modification of the actual software/codebase - this does NOT cover the assets produced for it such as logos, graphics, and images, being protected under copyright law automatically. Trademarks protect the brand identity of a product--its name, logo, slogan, or other things that uniquely identify it--to prevent confusion with competitors. In short, OSS licenses protect the actual code, while trademarks protect the branding.

For our case, we do not actually have a trademark over VERT.sh or other similar stuff on the website, and OSS licenses don't protect us from most stuff like this, so this would be pretty difficult to argue legally. But it's not impossible. As mentioned previously, there were still remnants of our assets as shown in their GitHub repo (e.g. our social media embed image), which meant those assets were being hosted on their domain as well. They are also technically breaking AGPL-3.0 in a few ways as well:

- AGPL §5(a) was broken, as they removed/obscured references to VERT.sh and our links/attributions, hiding any indication that it is modified work

> "The work must carry <b>prominent notices stating that you modified it</b>, and giving a relevant date."

- AGPL §13 was also broken as they are linking to our upstream repository instead of their own (and obscuring the other links) - we found the actual repository through a search engine

> "... your modified version must prominently offer all users interacting with it remotely through a computer network ... an opportunity to <b>receive the Corresponding Source of your version</b> ... at no charge ..."

This gave us a few real pointers to use legally when writing a.. nice little email to them! I had a quick look at the WHOIS registration data to grab the registrant contact, which ended up being admin[at]cloud.fan (which we actually saw above under the "Friend links"!). I had a look at the website for them and they seemed to be a Chinese cloud computing company, though most of the links in the navbar were broken; the website was clearly vibecoded

<img src="/images/blogs/vert-iipe-seo-ring/cd-cloudfan.png" alt="Homepage of cloud.fan, a Chinese cloud computing company" class="w-full md:w-5/12" />

After going through a few iterations and getting feedback from people, I finally sent the email to both `hello[at]ii.pe` and `admin[at]cloud.fan` on 2026/04/24, with a deadline for a response on 2026/05/01. Read the full email to them here:

<img src="/images/blogs/vert-iipe-seo-ring/cd-email.png" alt="Full cease & desist email sent to hello@ii.pe and admin@cloud.fan" class="w-full md:w-5/12" />

## The change to dommate and a new owner.. not!

I never actually received a response from them even after a follow-up email on the deadline (2026/05/01), however ii.Pe definitely seemed to have reacted! The website went down, possibly on the same day (not too sure when exactly), for a while while their repo was still up. Great, maybe they were scared off! Then on 2026/05/08, it went back up and completely pivoted: it became a suffix (not in the Public Suffix List), `*.ii.pe`, you can register under a service called "Dommate". Other suffixes include `*.net.rich`, `*.edu.rich`, and `*.ac.chat`.

<img src="/images/blogs/vert-iipe-seo-ring/change-dommate-ii-pe.png" alt="Landing page under dommate.com where you can register a suffix under ii.pe" class="w-full md:w-5/12" />

Comparing the WHOIS data from before and after, it did seem they "swapped owners" as the registrant contact and nameservers changed:

<img src="/images/blogs/vert-iipe-seo-ring/change-ii-pe-whois-comparison.png" alt="WHOIS historical data for ii.Pe compared to after being under dommate.com" class="w-full md:w-5/12" />

..however if you actually look at the nameservers for ii.pe before and dommate.com, they are actually the same. Cloudflare nameservers are randomized but per-account, so this is the exact same person!

<img src="/images/blogs/vert-iipe-seo-ring/change-ii-pe-whois-comparison-2.png" alt="WHOIS historical data for ii.Pe compared to dommate.com, with their Cloudflare nameservers being the same" class="w-full md:w-5/12" />

## They're all.. the same person?

While looking into them, there was a few more interesting things I noticed. The website `aat.ee` has a little "Pricing" section on their website revealing something very interesting. Remember all the links that ii.Pe originally had under "Friend Links"--<b>they were all here</b>!

<img src="/images/blogs/vert-iipe-seo-ring/same-links.png" alt="Pricing page for aat.ee, showing benefits of paying to advertise your site including being shown on 12+ sites with over 700k monthly visits." class="w-full md:w-5/12" />

It seems this was the "main" service sitting above all the other sites I'd seen. You choose a tier (Basic/Plus/Pro/Ultra) and your website would supposedly "magically" improve in SEO / domain ranking thanks to "organic" backlinks. Search engine crawlers see all these backlinks to your website and increase your page ranking because it "looks like organic word-of-mouth" (quote from the "Plus" tier), and users visiting those sites see your links or sponsor cards under them. In other words: you pay them, and a bunch of their own sites all start linking to you so search engines think lots of independent sites are talking about you, when in reality it's all controlled by the same person.

You could probably guess that you should <b>NOT</b> be doing this and I wouldn't be very surprised if this was against Google and other search engines' TOS--this is not SEO, this is just paying to inflate your page ranking and makes your site look bad to the end-user.

<img src="/images/blogs/vert-iipe-seo-ring/same-tiers.png" alt="Different pricing for tiers for aat.ee - Basic, Plus, Pro, and Ultra (subscription-based)." class="w-full md:w-5/12" />

Another thing I noticed were the repositories in the `yeagoo` GitHub account, which the ii.Pe code was under. I noticed that in the contribution activity section, they've contributed to many repositories of their own and other organisations. Looking closer, many of the repositories were for the websites I'd seen earlier in the "Friend Links" list--. I couldn't find a single repository or organisation they'd contributed to that wasn't pretty obviously owned by them.

<img src="/images/blogs/vert-iipe-seo-ring/same-activity.png" alt="Different pricing for tiers for aat.ee - Basic, Plus, Pro, and Ultra (subscription-based)." class="w-full md:w-5/12" />

Oh yeah, and two of the projects (ii.Pe and Dommate) were names that were re-used from older & unrelated projects lol. But no matter what repository I went on, I kept seeing both the `yeagoo` and `claude` account as the authors--they really have lots of credits to burn huh, especially since it's Claude Opus 4.8!

<img src="/images/blogs/vert-iipe-seo-ring/same-renames.png" alt="Older GitHub repositories of iipe, software for PHP, and dommate, a domain monitoring platform." class="w-full md:w-5/12" />

Having found all the above and putting everything together, my theory is that `aat.ee` is the "master" website. It is forked off the `openlaunch-org/Open-Launch` repo where people "launch" their product / service, similar to ProductHunt, but offers paid tiers so you can supposedly improve your SEO through websites backlinking to your website. To expand the reach and make it seem more appealing, the person behind this vibecodes a _metric shit ton_ of websites of many kinds--guides, other ProductHunt-like sites, and websites for their other vibecoded projects. I am sure that most of the websites and products in the list above were made by this same person & Claude.

<img src="/images/blogs/vert-iipe-seo-ring/same-vibed.png" alt="GitHub commit history of yeagoo/open-launch, a vibecoded fork of openlaunch-org/open-launch, showing all commits authored by yeagoo and Claude (Opus 4.8)." class="w-full md:w-5/12" />

<img src="/images/blogs/vert-iipe-seo-ring/same-ai.png" alt="GitHub repository of yeagoo/open-launch showing many markdown files generated by Claude. Displays direct connections to other websites mentioned: bigkr, mf8, & hicyou" class="w-full md:w-5/12" />

This is of course further supported by each domains' registrant / WHOIS data, where most of the domains were under the same Cloudflare nameservers of `mary.ns.cloudflare.com` and `todd.ns.cloudflare.com` registered under numerous registrars: Unstoppable Domains, Porkbun, Spaceship, etc.

<img src="/images/blogs/vert-iipe-seo-ring/same-whois.png" alt="Domain registration info of all the domains under the 'Friends Links' section. Shows most of the domains being under the same Cloudflare nameservers, meaning same Cloudflare account. " class="w-full md:w-5/12" />

## Afterthoughts

This was a pretty interesting situation to say the least. I personally never needed to send a little legal letter to someone and I think this was the best course we could've taken. As far as I could see, there was essentially no way for us to contact them other than the registrant contact from the WHOIS data--them being based in China also made things trickier. I honestly wouldn't have jumped straight to the legal-ish email if there were other methods to reach out, but given everything we found it just felt insulting and too "in bad faith" to let it slide. Just.. please don't take advantage of FOSS, come on. Check out and support the original projects! _hint hint: visit [VERT.sh](https://vert.sh) (:_

While I was writing this blog post over a week (and many more since I keep procrastinating), I kept discovering new things to investigate and add so it took me a longer than I expected to write and publish this blog post. It was a pretty interesting little "rabbit hole" I dug into, I guess you could call lol.

(hey you reading this: my next blog post (not VERT-related) is gonna be something _really_ interesting as well.. but who knows if it will actually come out. lets just say, i may need to contact a lawyer here before publishing details--oops :3)
