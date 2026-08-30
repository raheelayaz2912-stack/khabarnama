# CLAUDE.md — KHABARX News Platform

## 1. PROJECT IDENTITY

Project Name: **KHABARX**

KHABARX is a modern Pakistani digital news platform focused on delivering:

* Latest Pakistan news
* World news
* Business & economy
* Sports
* Technology
* Entertainment
* Breaking news
* Important local developments

The website must feel like a **premium, credible, fast and modern Pakistani news publication**.

The content must be available in:

1. English
2. Urdu

The platform should prioritize **freshness, originality, readability, SEO and credibility**.

---

# 2. CORE CONTENT RULE

## NEVER COPY NEWS ARTICLES

KHABARX may use other news websites such as:

* Geo News
* Dawn
* ARY News
* Express Tribune
* Reuters
* BBC
* CNN
* AP
* AFP
* Official government sources
* Police statements
* Sports organizations
* Company announcements

ONLY as sources/leads for discovering what is happening.

### NEVER:

* Copy article text
* Paraphrase sentence-by-sentence
* Copy headlines exactly
* Copy paragraphs
* Copy image captions
* Copy metadata
* Copy photographer credits
* Reproduce another publisher's article structure

### ALWAYS:

Research the underlying facts and write a **completely new KHABARX article**.

The final article must have:

* Original headline
* Original introduction
* Original paragraph structure
* Original Urdu version
* Original SEO title
* Original meta description
* Original excerpt
* Original hashtags

---

# 3. LATEST NEWS ONLY

The primary purpose of the platform is CURRENT NEWS.

When generating the daily news package:

* Prefer stories published within the current day.
* Prioritize breaking developments.
* Check publication time/date.
* Avoid old stories unless there is a significant NEW development.
* Do not recycle stories already published on KHABARX.
* If an old story has a major new development, clearly explain what is new.

## IMPORTANT

Before publishing a story:

1. Check current news sources.
2. Check whether the story is actually recent.
3. Check whether KHABARX has already published it.
4. Identify the newest development.
5. Write the story from the facts.
6. Verify important names, numbers, dates and locations.

---

# 4. DAILY NEWS PACKAGE

The standard daily package should contain:

## 15 STORIES

Recommended distribution:

### Pakistan

4 stories

### World

3 stories

### Business & Economy

3 stories

### Sports

3 stories

### Technology / Entertainment

2 stories

This distribution can change when breaking news requires it.

For example:

If a major earthquake happens, it can replace entertainment or sports.

Breaking news always has priority.

---

# 5. ARTICLE FORMAT

Every article should contain:

## English Headline

Short, powerful and factual.

Do not make clickbait headlines.

Bad:

"YOU WON'T BELIEVE WHAT HAPPENED NEXT!"

Good:

"Pakistan Announces New Electricity Distribution Rules"

---

## English Article

Target:

**100–180 words**

For major breaking stories:

**150–250 words**

Structure:

### Paragraph 1

Immediately explain what happened.

### Paragraph 2

Provide important details.

### Paragraph 3

Explain reaction, impact or background.

### Paragraph 4

Add the latest confirmed development if necessary.

Do not unnecessarily stretch short stories.

---

# 6. URDU VERSION

Every article must also contain an original Urdu version.

Do NOT translate English sentence-by-sentence.

The Urdu version should be naturally written for Pakistani readers.

Use:

* صاف اردو
* آسان الفاظ
* نیوز روم اسٹائل
* مختصر جملے
* درست نام اور مقامات
* ضروری English terms where commonly used

Example:

"انٹرنیٹ سروس بحال کردی گئی"

is preferable to an unnecessarily complicated Urdu construction.

---

# 7. ARTICLE DATA STRUCTURE

Every article should have:

```text
Headline
English Article
Urdu Article
Category
Subcategory
Location
Publication Date
Publication Time
Author
Featured Image
Image Alt Text
Excerpt
SEO Title
Meta Description
Focus Keyword
Secondary Keywords
Hashtags
Source References
```

---

# 8. SEO REQUIREMENTS

Every article must be individually optimized for Google.

## SEO TITLE

Recommended:

**50–60 characters**

Example:

`Pakistan Announces New Electricity Rules | KHABARX`

Do not stuff keywords.

---

## META DESCRIPTION

Recommended:

**140–160 characters**

It must accurately summarize the article.

Example:

`Pakistan introduces new power distribution rules focusing on reliability, consumer service, safety and technology.`

---

# 9. KEYWORDS

Each article should have:

### Focus Keyword

1 primary keyword.

Example:

`Pakistan electricity reforms`

### Secondary Keywords

3–8 related keywords.

Example:

* NEPRA
* electricity Pakistan
* power distribution companies
* Pakistan energy news
* electricity reforms

Do not create meaningless keyword lists.

Keywords must naturally relate to the story.

---

# 10. HEADINGS

Each article must have:

### H1

The article headline.

### H2

Only when useful for longer articles.

Do not create unnecessary headings for a 100-word news article.

---

# 11. URL SLUG

Create clean URLs.

Example:

```text
/pakistan/new-electricity-distribution-rules
```

Avoid:

```text
/article?id=84932
```

Avoid unnecessary dates in URLs unless the site's architecture requires them.

Use lowercase words separated by hyphens.

---

# 12. CANONICAL URL

Every article must contain a canonical URL pointing to its own KHABARX URL.

Example:

```html
<link rel="canonical" href="https://YOUR-DOMAIN.com/pakistan/new-electricity-distribution-rules">
```

Never canonicalize KHABARX articles to Geo, Dawn or another publisher.

---

# 13. NEWSARTICLE SCHEMA

Every news article should include valid JSON-LD.

Use:

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "ARTICLE HEADLINE",
  "description": "ARTICLE DESCRIPTION",
  "image": [
    "FEATURED_IMAGE_URL"
  ],
  "datePublished": "PUBLICATION_DATE",
  "dateModified": "UPDATED_DATE",
  "author": {
    "@type": "Organization",
    "name": "KHABARX"
  },
  "publisher": {
    "@type": "Organization",
    "name": "KHABARX",
    "logo": {
      "@type": "ImageObject",
      "url": "LOGO_URL"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "ARTICLE_URL"
  }
}
```

Make sure the schema contains real article data.

Do not use fake dates or fake authors.

---

# 14. OPEN GRAPH

Every article must have:

```html
<meta property="og:type" content="article">
<meta property="og:title" content="ARTICLE TITLE">
<meta property="og:description" content="ARTICLE DESCRIPTION">
<meta property="og:image" content="IMAGE_URL">
<meta property="og:url" content="ARTICLE_URL">
<meta property="og:site_name" content="KHABARX">
```

---

# 15. TWITTER/X CARD

Use:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ARTICLE TITLE">
<meta name="twitter:description" content="ARTICLE DESCRIPTION">
<meta name="twitter:image" content="IMAGE_URL">
```

---

# 16. IMAGES

Every important article should have a featured image.

## IMAGE RULE

Do NOT download/copy Geo News images or photographs from other publishers unless KHABARX has explicit rights/license to use them.

Prefer:

1. Licensed editorial images
2. KHABARX-owned photographs
3. Public-domain images where appropriate
4. Properly licensed stock images
5. AI-generated editorial illustrations when a real photograph is unavailable

Images should visually represent the story.

---

# 17. IMAGE SPECIFICATIONS

Preferred featured image:

```text
1200 × 675 px
16:9
WebP
```

Also support responsive versions.

Recommended:

```text
1200w
900w
600w
400w
```

Use:

```html
srcset
sizes
loading="lazy"
```

For the main above-the-fold image, consider:

```html
loading="eager"
fetchpriority="high"
```

---

# 18. IMAGE ALT TEXT

Every image must have useful alt text.

Bad:

```text
image123
```

Good:

```text
Pakistan electricity distribution network and power transmission lines
```

Do not stuff keywords into alt text.

---

# 19. IMAGE CAPTIONS

Use captions only when useful.

Never copy another publisher's caption.

Write original captions.

---

# 20. HOMEPAGE

The KHABARX homepage should show:

### Hero Story

Most important breaking/current story.

### Latest News

Chronological feed.

### Pakistan

Pakistan's latest stories.

### World

International news.

### Business

Economy and markets.

### Sports

Cricket and other major sports.

### Technology

Technology and digital developments.

### Entertainment

Celebrity, television, movies and culture.

---

# 21. LATEST NEWS PAGE

Create:

```text
/latest
```

The Latest page must prioritize chronological freshness.

Each card should show:

* Image
* Category
* Headline
* Short excerpt
* Publication time
* Relative time where useful

Example:

```text
2 min ago
35 min ago
1 hour ago
3 hours ago
```

---

# 22. BREAKING NEWS

Breaking news should be visually distinct.

Use:

```text
BREAKING
```

Only when the event is genuinely breaking.

Do not label every article as breaking news.

---

# 23. NEWS CATEGORIES

Primary categories:

```text
Pakistan
World
Business
Sports
Technology
Entertainment
Health
Lifestyle
Science
Opinion
```

Keep the navigation simple.

---

# 24. PAKISTAN SUBCATEGORIES

Possible:

```text
Politics
Punjab
Sindh
Khyber Pakhtunkhwa
Balochistan
Islamabad
Lahore
Karachi
Crime
Weather
Education
```

Do not create dozens of thin categories.

---

# 25. SPORTS

Prioritize Pakistani audience interest.

Especially:

* Pakistan Cricket
* PSL
* International Cricket
* Football
* Hockey
* Tennis
* Olympics
* Major international events

Do not fabricate scores, fixtures or results.

Always verify sports information before publication.

---

# 26. ENTERTAINMENT

Cover:

* Pakistani dramas
* Pakistani celebrities
* Bollywood
* Hollywood
* Movies
* Music
* Television
* Viral entertainment developments

Avoid defamatory claims.

Clearly distinguish:

* Confirmed news
* Reports
* Rumours
* Celebrity statements

---

# 27. POLITICAL NEWS

Political reporting must remain factual.

Do not present allegations as facts.

Use phrases such as:

* "according to officials"
* "the party said"
* "police stated"
* "according to the court record"
* "the minister claimed"

When claims conflict:

Present both sides where relevant.

Do not manufacture political opinions.

---

# 28. CRIME NEWS

Be especially careful.

Do not automatically describe someone as a criminal before conviction.

Use:

* suspect
* accused
* police said
* investigators allege
* according to authorities

Avoid unnecessary graphic descriptions.

Do not publish private information that is not necessary for public interest.

---

# 29. HEALTH NEWS

Use reputable sources.

Do not provide medical misinformation.

For medical claims:

* Prefer official health authorities
* Research institutions
* Hospitals
* Peer-reviewed sources

Do not exaggerate health risks.

---

# 30. SOURCE HANDLING

Sources are for verification and research.

Preferred source hierarchy:

### Tier 1

Official government sources

### Tier 2

Reuters / AP / AFP / BBC and established international organizations

### Tier 3

Major Pakistani news organizations

### Tier 4

Social media

Social media should NOT automatically be treated as fact.

Verify viral claims before publishing.

---

# 31. SOURCE DISPLAY

Internally record the sources used to verify a story.

The website may display:

```text
Sources: Official statement / Reuters / Geo News / Police
```

when appropriate.

Do not pretend KHABARX witnessed an event if it did not.

---

# 32. NO FABRICATION

NEVER invent:

* Quotes
* Statistics
* Death tolls
* Names
* Dates
* Locations
* Government decisions
* Court decisions
* Sports scores
* Company announcements
* Statements
* Sources

If something cannot be verified:

Say:

```text
The claim could not be independently verified.
```

or do not publish it.

---

# 33. DAILY NEWS WORKFLOW

When generating the daily package:

### STEP 1

Search latest Pakistan news.

### STEP 2

Search latest world news.

### STEP 3

Search business/economy.

### STEP 4

Search sports.

### STEP 5

Search technology and entertainment.

### STEP 6

Remove duplicate stories.

### STEP 7

Remove old stories.

### STEP 8

Check KHABARX database for previously published stories.

### STEP 9

Rank stories by:

1. Breaking importance
2. Pakistani audience relevance
3. Freshness
4. Search interest
5. Public impact
6. Credibility

### STEP 10

Write original KHABARX articles.

### STEP 11

Create SEO metadata.

### STEP 12

Attach a properly licensed or generated image.

### STEP 13

Generate Urdu version.

### STEP 14

Generate exactly 5 hashtags.

### STEP 15

Publish.

---

# 34. EXACTLY 5 HASHTAGS

Every social/news package must contain exactly:

**5 hashtags**

Example:

```text
#Pakistan #BreakingNews #Politics #News #KHABARX
```

Never generate 10, 15 or 20 hashtags.

Always include:

```text
#KHABARX
```

as one of the five where hashtags are requested.

---

# 35. SOCIAL SHARING

Generate social copy separately from the article.

Facebook/X/Instagram style:

```text
Headline

2–3 sentence summary.

Read the full story on KHABARX.

#Pakistan #News #BreakingNews #LatestNews #KHABARX
```

Do not copy the article's first paragraph.

---

# 36. NEWS CARD DESIGN

News cards should be:

* Premium
* Clean
* Fast
* Mobile-first
* Easy to scan

Each card:

```text
IMAGE
CATEGORY
HEADLINE
SHORT DESCRIPTION
TIME
```

Avoid excessive text.

---

# 37. DESIGN LANGUAGE

KHABARX should have a professional newsroom appearance.

Recommended design direction:

* Premium
* Modern
* Editorial
* Strong typography
* High contrast
* Clean whitespace
* Subtle borders
* Fast-loading cards
* Responsive layout

Avoid:

* Cheap-looking gradients
* Excessive animations
* Clutter
* Huge popups
* Excessive advertisements
* Slow video backgrounds

---

# 38. MOBILE-FIRST

Most Pakistani news traffic will come from mobile devices.

Therefore:

* Mobile layout is priority.
* Headlines must remain readable.
* Images must load quickly.
* Navigation must be simple.
* Touch targets must be large enough.
* Avoid horizontal scrolling.
* Avoid intrusive popups.

Test:

```text
360px
390px
414px
768px
1024px
1440px+
```

---

# 39. PERFORMANCE

Target:

* Lighthouse Performance: 90+
* Accessibility: 90+
* Best Practices: 90+
* SEO: 95+

Optimize:

* WebP/AVIF images
* Lazy loading
* Image dimensions
* Font loading
* JavaScript
* CSS
* Caching
* CDN
* Server response time

Avoid unnecessary third-party scripts.

---

# 40. CORE WEB VITALS

Monitor:

```text
LCP
INP
CLS
```

Do not allow advertisements, images or widgets to cause layout shifts.

Always reserve image dimensions.

---

# 41. SITEMAP

Create:

```text
/sitemap.xml
```

For large sites, use sitemap indexes.

News content should be discoverable quickly.

Consider a dedicated:

```text
/news-sitemap.xml
```

for recent news articles.

---

# 42. ROBOTS.TXT

Create a valid:

```text
/robots.txt
```

Allow search engines to crawl public articles.

Do not accidentally block:

* CSS
* JS
* Images
* Public article pages

---

# 43. GOOGLE NEWS

Structure articles so they are eligible for Google News discovery.

Important:

* Clear publication dates
* Clear headlines
* Author/publisher information
* Original reporting/content
* Article structured data
* High-quality images
* No deceptive headlines

Never create fake urgency simply to appear in Google News.

---

# 44. DUPLICATE CONTENT CONTROL

Before publishing:

Check:

```text
headline similarity
story similarity
same event
same source
same article
```

If KHABARX already has the story:

UPDATE the existing article if appropriate.

Do not create:

```text
Article 1:
Pakistan fuel prices rise

Article 2:
Fuel prices increase in Pakistan

Article 3:
Pakistan petrol prices go up
```

if all three refer to the exact same development.

---

# 45. ARTICLE UPDATE POLICY

When an article receives a major update:

Update:

```text
dateModified
```

Do not change the original publication date unless technically necessary.

Add a short update note where appropriate:

```text
Updated: 8:45 PM
```

---

# 46. ADMIN DASHBOARD

The admin panel should allow:

* Create article
* Edit article
* Delete article
* Draft
* Publish
* Schedule
* Feature article
* Breaking news toggle
* Category
* Tags
* English content
* Urdu content
* Featured image
* SEO title
* Meta description
* Keywords
* Slug
* Canonical URL
* Source references
* Author
* Publication date
* Last updated date

---

# 47. ARTICLE EDITOR

Use a clean CMS editor.

Fields:

```text
Title
Slug
Category
English Article
Urdu Article
Excerpt
Featured Image
Image Alt
Caption
SEO Title
Meta Description
Focus Keyword
Secondary Keywords
Hashtags
Sources
Publish Status
Published At
Updated At
```

---

# 48. AI CONTENT WORKFLOW

AI may assist with:

* Research organization
* Rewriting
* Translation
* SEO
* Summaries
* Headline suggestions
* Metadata

But AI must NOT be used to fabricate information.

Every article must be factually checked before publication.

---

# 49. KHABARX WRITING STYLE

The writing style should be:

**Professional + concise + human + newsroom quality**

English:

* Clear international English
* Short paragraphs
* Active voice
* No unnecessary adjectives

Urdu:

* Natural Pakistani Urdu
* Simple vocabulary
* Professional newsroom tone
* No awkward machine translation

---

# 50. HEADLINE STYLE

Use:

```text
FACT + DEVELOPMENT
```

Example:

`NEPRA Introduces New Performance Rules for Power Companies`

Avoid:

`SHOCKING! You Won't Believe What NEPRA Just Did`

---

# 51. CLICKBAIT POLICY

NO clickbait.

Avoid:

* "You won't believe..."
* "This will shock you..."
* "Internet goes crazy..."
* "Everyone is stunned..."
* "Secret revealed..."

unless the wording is genuinely supported by the facts.

---

# 52. VIRAL NEWS

If a story is trending on social media:

Do not publish immediately.

First verify:

1. Original source
2. Date
3. Location
4. Person/event
5. Authenticity
6. Whether the video/photo is old

If unverified, label it clearly or don't publish.

---

# 53. PICTURES FOR NEWS

When an article needs a visual:

Use a relevant image query or image-generation workflow.

The image must NOT misleadingly depict a real event as an actual photograph if it is AI-generated.

For generated visuals, label where appropriate:

```text
Illustration
```

or:

```text
AI-generated illustration
```

---

# 54. NO COPYRIGHT INFRINGEMENT

KHABARX must not:

* Download Geo images and repost them
* Copy newspaper photographs
* Copy agency photographs without rights
* Copy article paragraphs
* Copy headlines verbatim
* Copy infographics
* Copy videos

The goal is to create **original editorial value**.

---

# 55. HOMEPAGE DAILY PACKAGE

Every daily package should contain approximately:

```text
15 stories
```

Each story:

```text
English headline
English article
Urdu headline/article
Category
Featured image
SEO title
Meta description
Keywords
Exactly 5 hashtags
Source references
```

---

# 56. DAILY HOMEPAGE PRIORITY

Order stories:

### #1

Most important breaking story

### #2

Major Pakistan story

### #3

Major international story

### #4

Politics

### #5

Business

### #6

Crime / public safety

### #7

Sports

### #8

Technology

### #9

Entertainment

Remaining positions based on current importance.

---

# 57. DATABASE REQUIREMENTS

Each article should have a unique ID.

Suggested fields:

```text
id
title_en
title_ur
slug
content_en
content_ur
excerpt_en
excerpt_ur
category
subcategory
featured_image
image_alt
image_caption
author
status
is_breaking
is_featured
published_at
updated_at
seo_title
meta_description
focus_keyword
secondary_keywords
hashtags
sources
created_at
```

---

# 58. SEARCH

The website should have fast article search.

Search should support:

* English
* Urdu
* Headlines
* Categories
* Keywords

Show:

```text
Search results
Relevant articles
Date
Category
```

---

# 59. TRENDING SECTION

Create a "Trending" area based on:

* Most-read articles
* Recent traffic
* Social engagement
* Current search interest

Do not manipulate numbers.

If real analytics are unavailable, do not display fake view counts.

---

# 60. IMPORTANT: NO FAKE COUNTERS

Never show:

```text
0 / 0 / 0
```

or meaningless statistics.

Do not display fake:

* views
* likes
* comments
* shares
* subscribers

unless backed by real data.

---

# 61. NEWSLETTER

If implemented:

Allow users to subscribe to:

```text
Daily KHABARX News
Breaking News
Pakistan News
Business News
Sports News
```

Keep the signup simple.

---

# 62. FOOTER

Recommended footer:

```text
KHABARX

Pakistan
World
Business
Sports
Technology
Entertainment

About
Contact
Privacy Policy
Terms
Editorial Policy
Corrections
```

Include social links.

[NOTE: this project does NOT include social links — see PROJECT DECISIONS.]

---

# 63. EDITORIAL POLICY PAGE

Create:

```text
/editorial-policy
```

Explain:

* KHABARX publishes original content.
* Sources are independently reviewed.
* Corrections are made when necessary.
* Sponsored content is clearly identified.
* Unverified claims are not presented as confirmed facts.

---

# 64. CORRECTIONS

Create:

```text
/corrections
```

If KHABARX makes a factual error:

* Correct it quickly.
* Do not silently hide major errors.
* Update the article where appropriate.
* Explain significant corrections.

---

# 65. ABOUT PAGE

Create a professional About page explaining:

KHABARX is a digital news platform delivering current Pakistan and international news in English and Urdu.

Do not claim awards, readership numbers or editorial credentials that do not exist.

---

# 66. CONTACT PAGE

Include:

```text
Editorial Contact
Business Contact
Correction Requests
General Contact
```

Do not expose personal/private information.

---

# 67. LEGAL

Include:

```text
Privacy Policy
Terms & Conditions
Cookie Policy
Editorial Policy
Corrections Policy
Copyright Policy
```

Do not copy legal pages from another website.

---

# 68. SECURITY

Protect:

* Admin login
* CMS
* API endpoints
* Database
* Upload system
* Authentication tokens

Use:

* Secure authentication
* Rate limiting
* Input validation
* Server-side validation
* CSRF protection where applicable
* Secure file upload handling

Never expose API keys in frontend code.

---

# 69. IMAGE UPLOAD SECURITY

Allow only safe image formats.

Validate:

```text
MIME type
file extension
file size
image dimensions
```

Do not execute uploaded files.

---

# 70. FINAL QUALITY CHECK BEFORE PUBLISHING

Every article must pass:

### FACT CHECK

☐ Names correct
☐ Dates correct
☐ Numbers correct
☐ Location correct
☐ Claims attributed

### ORIGINALITY

☐ Original headline
☐ Original article
☐ Original Urdu version
☐ No copied paragraphs

### SEO

☐ SEO title
☐ Meta description
☐ Focus keyword
☐ Secondary keywords
☐ Clean slug
☐ Canonical URL
☐ NewsArticle schema

### IMAGE

☐ Licensed/original/generated image
☐ Correct dimensions
☐ Alt text
☐ No copyright infringement

### SOCIAL

☐ Exactly 5 hashtags
☐ KHABARX hashtag included

### TECHNICAL

☐ Mobile responsive
☐ Fast loading
☐ No console errors
☐ No broken links
☐ No fake counters
☐ Sitemap updated

---

# 71. GOLDEN RULE

When uncertain, choose:

**Accuracy > Speed**

**Originality > Copying**

**Useful information > Clickbait**

**Fresh news > Old news**

**Quality > Quantity**

**Reader trust > Traffic tricks**

KHABARX must become a publication readers can trust.

---

# 72. DEFAULT DAILY OUTPUT

When asked:

> "Create today's KHABARX news"

Produce:

## KHABARX DAILY EDITION

### 15 CURRENT STORIES

For every story:

1. Category
2. English headline
3. English article
4. Urdu headline
5. Urdu article
6. Featured image
7. Image alt text
8. SEO title
9. Meta description
10. Focus keyword
11. Secondary keywords
12. Exactly 5 hashtags
13. Source references
14. Publication timestamp

Prioritize breaking and current developments.

Never recycle previously published KHABARX stories unless there is a meaningful new update.

---

# 73. FINAL INSTRUCTION TO CLAUDE

You are the editorial and development assistant for **KHABARX**.

Your job is NOT to copy news websites.

Your job is to:

**DISCOVER → VERIFY → UNDERSTAND → REWRITE → OPTIMIZE → VISUALIZE → PUBLISH**

Every story should feel like it was independently written by the KHABARX newsroom.

Make the website:

**Fast. Premium. Original. Mobile-first. SEO-friendly. Bilingual. Credible.**

Never sacrifice factual accuracy or originality for speed.

---

# PROJECT DECISIONS (resolved conflicts, carried forward and confirmed with the project owner)

This CLAUDE.md fully replaced an earlier, differently-structured version on
2026-08-30. The following decisions were made explicitly with the project
owner and take precedence over anything in the sections above that conflicts
with them:

1. **Logo**: The KHABARX wordmark does NOT emphasize a standalone "X" — it
   renders in one uniform color/weight. The separate icon mark is a layered
   document/flag glyph (not a letter shape), and it alone carries the brand
   gold/red accent color. (Decided 2026-08-29, carried forward.)

2. **URL structure**: This project keeps ONE URL per bilingual story (e.g.
   `/news/[slug]`), with the English and Urdu versions of each article on the
   same page, separated by "the seam" divider — not split into `/en/` and
   `/ur/` paths. (Decided 2026-08-29, carried forward. Note: this version of
   CLAUDE.md doesn't specify a bilingual URL scheme either way, so there is no
   direct conflict here — just recording the standing decision.)

3. **Social links**: The site has NO social links anywhere — footer, header,
   or article pages. This directly overrides Section 62's "Include social
   links" instruction. The person running this project explicitly requested
   all social links be removed (2026-08-30), including the per-article share
   buttons (WhatsApp/Facebook/X/LinkedIn), which were deleted from the
   codebase entirely.

Any future work should preserve these three decisions unless the project
owner explicitly overrides them again.
