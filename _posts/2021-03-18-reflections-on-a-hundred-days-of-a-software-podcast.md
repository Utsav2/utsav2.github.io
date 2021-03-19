It’s been about a hundred days since the first episode of my software podcast “[Software at Scale](https://www.softwareatscale.dev/)” came out. A lot of friends and co-workers have asked me why I started it, and what I’ve learned so far, so I figured I’d share.

  

I started the show for no definite reason. A strong opinion I held was that corporate technology blogs often gave too rosy a picture of how software projects played out. A lot of official blog posts only discuss decisions that went well and often followed a similar, boring arc - the difficulty of a certain technical problem, how the team came up with an innovative solution, and the resounding success of the solution thereafter. After working for a few years, it seemed like a lot of successful projects were near misses, and there were a lot more failures than you’d realize. Another observation was that a lot of interesting stories didn’t make it to the corporate tech blog for understandable reasons - engineers weren’t interested in the effort of writing a post, the effort didn’t seem innovative enough, or the story painted the company in a more negative light than seemed appropriate. I wanted to inform engineers about the real trade-offs senior engineers make, what they’ve learned the hard way, how things go wrong, and generally give a clearer picture to the industry about “how we built this - technologically”.

  

I’ve always enjoyed technical writing and started with a newsletter on Substack to write technical articles on concepts and techniques I’d learned at work, like [Disaster Recovery Tests (DRTs)](https://www.softwareatscale.dev/p/why-you-should-frequently-turn-down). Over time, I figured that if I could lower the activation energy towards sharing an interesting story - perhaps by recording voice and interviewing, rather than waiting for folks to write well-written blog posts, I’d be able to extract some of those stories I was looking for, and I decided to experiment with a podcast. My highest priority was always self-sustainability - making sure I enjoy the process of podcasting so that I don’t quit out of frustration. This implies minimal editing and marketing, and purely focusing on topics I’m interested in. I also aimed for consistency, as that builds a natural rhythm for both me and listeners - the rule is “try to publish weekly”. I couldn’t monetize anyway due to [immigration restrictions](https://www.immi-usa.com/h1b-holder-start-business/), so I didn’t particularly care about fast growth and had a lot of room for experimentation.

  

The first few episodes were purely around deeply technical topics in software engineering. We spoke about [build systems](http://bazel.io/), [request proxies](https://www.envoyproxy.io/), auto-scaling, [GWS](https://en.wikipedia.org/wiki/Google_Web_Server), [AWS](https://en.wikipedia.org/wiki/Amazon_Web_Services), and other really technical niches. This was fun for me, an engineer who’s interested in build systems and distributed systems, but inaccessible to a lot of software engineers because there was too much jargon and context required per episode. I decided to always have the guest describe a concept that might be inaccessible from within the show so that it would be interesting to non-experts.

  

Another problem was that software engineers had no incentive to be guests on a brand new podcast. So I had a very limited success rate to convince any potential guest outside my network. I discovered that there was a certain group of guests that did have an incentive to be on the show - executives and leaders of software companies, especially smaller ones. Presumably, they wanted to increase the visibility of their product and were willing to try things to spread the word by non-traditional means. Many wanted unique ways of reaching out to potential software engineering candidates. It also seemed like executives were generally more comfortable talking about their work for an hour or so, whereas many software engineers often told me they didn’t feel comfortable being on the show since they didn’t feel they had done anything special.

  

It was much easier to convince leaders to be on the show, and they often provided high-quality referrals. After a while, my guest pipeline consists of 80% software leaders. I still only focus on leaders who either currently code (many CTOs) or had strong engineering backgrounds. After a few relatively high-profile guests, I’ve not had to worry about maintaining a guest pipeline. There are more people interested in being on the show than I have the bandwidth to interview, and there’s no more tedious work of guest sourcing and cold-emails.

  

I use some tools to edit each episode to get them publish-worthy. I used to make electronic music in the past, so I use [FL Studio](https://www.image-line.com/) to slightly edit each episode’s voice, which is overkill but works for me. I make sure to do some [compression](https://music.tutsplus.com/tutorials/the-beginners-guide-to-compression--audio-953) so that the volume of each speaker is consistent and has a small range so that listeners don’t have to adjust their volume. I have an [otter.ai](https://otter.ai/) subscription which lets me quickly read through the episode and pick out points that are useful to share in tweets and highlights. [Substack](https://substack.com/) provides a free hosting platform for podcasts.

  

Each interview is relatively straightforward by this point. The only requirement for guests is to have a headset on during the interview, to prevent echo since that is almost impossible to fix post-production (I had to use a trial of a very expensive plugin to do so for one episode). I use [Zoom](https://zoom.us/) to record episodes, which is battle-tested and good enough for now. I give guests the opportunity to request editing out any part of their interview after the fact if they choose to do so, and a couple have taken me up on that.

  

Producing podcasts weekly is much easier than trying to write articles since you don’t have to innovate and come up with unique insights on a schedule. The process is fairly repeatable - you schedule a time with a guest, research their work for up to an hour, record the episode, edit, and schedule for publishing.

  

Marketing a software podcast is non-trivial. Hour-long audio episodes do not perform well on HackerNews, which is probably due to the format which is just harder to consume. Shorter, written content is much easier to share and consume compared to podcasts, so podcasts don’t get shared as much either. Another common path is to make small clips and post them on YouTube, but I’ve not put in the effort to set that up so far. LinkedIn posts by guests have been a surprisingly strong initial driver to certain episodes. I believe this has to do with the algorithm for their feed, which doesn’t seem to prioritize recency as much as other feeds like Twitter. For Twitter, a post is barely noticed and drives basically zero sign-ups unless there’s a retweet by someone with more than a few thousand followers.

  

I use Substack statistics, [Chartable](https://chartable.com/), Apple’s [Podcast Analytics](https://itunesconnect.apple.com/login?module=PodcastsConnect&hostname=podcastsconnect.apple.com&targetUrl=%2Fanalytics%2F&authResult=FAILED), and Spotify’s [Podcast Dashboard](https://podcasters.spotify.com/) to track podcast performance. Generally, most podcast consumption happens via Apple Podcasts. Apple Podcasts seems to partition distribution and trending status by country, which implies my podcast sometimes trends in many smaller countries like Luxembourg, although I do not have any idea how many listeners or subscribers I actually have there. Spotify provides much more detailed statistics on aspects like the demographics of the audience. Sometimes, I might see spikes in listeners due to the whims of an algorithm. For example, Google decided to surface one of my episodes in folks’ [Discover](https://blog.google/products/search/introducing-google-discover/) feeds which led to a burst of signups. I’ve been tracking the position of my website on Google for the terms “Software at Scale”, and it hadn’t reached the first page of results until two-three months after starting the show. I can now better empathize with creators’ worries about [YouTube algorithm updates](https://www.bloomberg.com/news/articles/2019-08-01/youtube-overhauled-its-algorithms-for-kids-content-amid-ftc-talks).

  

Podcasting is an underrated tool to talk and build connections. It’s energizing to talk to smart people with innovative ideas and unique takes at problems that you had taken for granted, and I can better understand the appeal of angel investing.

  

These were some of the salient things I’ve learned in the last few months of podcasting. It’s been an interesting side project to do as a software engineer and has made me aware of the ecosystem of tools in development to support creators. I think the amount of manual effort required to spark organic distribution of podcasts is still too high, but there’s a lot of progress to make podcasting and audience building easier, and tools like [Descript](https://www.descript.com/) are an exciting look at the future. I hope you found this interesting, and please [DM](https://twitter.com/utsav_sha) me if you have any questions!
