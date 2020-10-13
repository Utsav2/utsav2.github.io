---
layout: post
title: The case against Low Priority Alerts
---

PagerDuty and other alerting systems let users specify the priority of an alert. High priority alerts are supposed to page an engineer ("the site is down"), and low priority alerts are meant to warn users of impending issues - PagerDuty's example for a low priority alert is ["An SSL certificate is due to expire in one week"](https://response.pagerduty.com/oncall/alerting_principles/#an-ssl-certificate-is-due-to-expire-in-one-week).

In theory, a low priority alert is one that an oncall engineer looks at when there's no high priority alerts to take care of, and resolves their root cause via some kind of change. However in my experience, low priority alerts only worsen the signal to noise ratio for oncall teams.

Low priority alerts have an extremely low barrier to entry - since they do not wake them engineers at 3 AM, they aren't tuned as rigorously as high priority alerts. And the ROI of fixing low priority alerts is often just slight reduction of noise in an often already noisy slack channel - the incremental effect of a noisy alert going away doesn't appear to be much. In many cases, alerts aren't tuned for slight changes in functional behavior. For example, the release time for a service taking longer since there's more hosts to switch, or lower than normal load patterns due to holidays. The team is trained to ignore these alerts since they magically seemed to self resolve.

What's worse - low priority alerts end up becoming a very easy action item during incidents. Often, the team doesn't want to put in too much work to add metrics and build a reliable alert for the obscure part of their system that failed. So it's easy to show that you've done _something_ by adding a low priority alert that is flaky - since the underlying system is a legacy system that "will soon be replaced, and it's not worth investing more time in", and pat yourself on the back. The alert gives us a false sense of security.

A worthy counter-argument is that a strong team with well defined processes around oncall handoffs should and will ensure low priority alerts get triaged and resolved. In practice, I've noticed that rigorous process falls apart when the few key engineers upholding such practices switch roles, and real world consequences of loosening guarantees don't seem dire. In general, tribal knowledge around non-urgent matters, like a recurring low priority alert, often gets lost, and teams stop caring about low priority alerts in oncall handoffs. In other cases, low priority alerts are often ignored while ramping up new engineers to the oncall rotation, and the culture of the team slowly shifts.

One data point in favor of this argument is that the Google SRE book does not seem to mention low priority alerts, just "tickets, email alerts, and pages", where email alerts are described as [alert spam](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/#id-LvQuvtYS7UvI8h4), as they are "rarely read or acted on", acting in practice very similar to low priority alerts.

Does that mean we should get rid of low priority alerts entirely? I strive to have as few low priority alerts as possible in production services, but I'm not sure there's a better answer than that. Low priority alerts are also useful if they can automatically pause a deployment pipeline. For example, an alert for slightly elevated error rate is a great indicator to stop a rollout after it's on canary.

In general, be suspicious of low priority alerts - would we care if this alert didn't actually work? Are we giving ourselves a false sense of security by adding this alert? Hopefully this sheds some light on a seemingly innocuous feature.

-------
