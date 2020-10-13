---
layout: post
title: The Case against Low Priority Alerts
---

PagerDuty and other alerting systems let users specify the priority of an alert. High priority alerts are supposed to page an engineer ("the site is down"), and low priority alerts are meant to warn users of impending issues - PagerDuty's example for a low priority alert is ["An SSL certificate is due to expire in one week"](https://response.pagerduty.com/oncall/alerting_principles/#an-ssl-certificate-is-due-to-expire-in-one-week). In theory, a low priority alert is one that an oncall engineer looks at when there's no high priority alerts to take care of, and resolves their root cause via some kind of change.

In my experience, low priority alerts often have low value, add a subtle cost, and are prone to bit rot, just like poorly tested code.

Low priority alerts have a low barrier to entry - since they do not wake up engineers at 3 AM, they aren't tuned as rigorously as high priority alerts. And the ROI of fixing low priority alerts is often just slight reduction of noise in an often already noisy slack channel - the incremental effect of a noisy alert going away doesn't appear to be much. 

In many cases, alerts aren't tuned loosely enough for slight changes in service behavior and load patterns. For example, slightly increased release time for a service might fire some low priority alerts that were designed to check some invariants, or lower than normal load patterns due to holidays fire some "atleast X 200s from the service alerts". The team gets trained to ignore these since they resolve without intervention. These issues tend to be hidden until "service life events", like handing off a service to a new team which has very limited context on the efficacy of existing alerts.

Low priority alerts have another downside - they end up becoming a lazy action item to tackle after an incident, and create a false sense of security. Often, teams dont't want to put in too much work to add metrics and build a reliable alert for the obscure part of their system that failed. So it's easy to think that you've done _something_ by adding a low priority alert for reducing "time to detection".

One data point in favor of this argument is that the Google SRE book does not seem to mention low priority alerts, just "tickets, email alerts, and pages", where email alerts are described as [alert spam](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/#id-LvQuvtYS7UvI8h4), as they are "rarely read or acted on", acting in practice very similar to low priority alerts.

A good counter-argument is that a strong team with well defined processes for oncall handoffs will ensure low priority alerts get triaged and resolved. In practice, I've noticed that rigorous process falls apart when the few key engineers upholding such practices switch roles, since the real world consequences of a few mistuned low priority alerts firing don't seem dire. In other cases, low priority alerts are often ignored while ramping up new engineers to the oncall rotation, and the culture of the team slowly shifts since "they're not looking at these alerts, so why should I".

Does that mean we should get rid of low priority alerts entirely? I strive to keep as few low priority alerts as possible in production services, and I'm not sure I have a better answer than that. Low priority alerts can be useful if they can automatically pause a deployment pipeline. For example, an alert for slightly elevated error rate is a great indicator to stop a rollout while it's on canary.

In general, maintain high standards for low priority alerts - would we care if this alert didn't actually work? Are we giving ourselves a false sense of security by adding this alert? What standards do we have for existing low priority alerts? Will we rigorously tune this alert if it's noisy? Hopefully this helps you decide on an alternative or is something to think about.

-------
