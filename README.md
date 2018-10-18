# Spamslice

A userscript designed to assist in identifying possible spammers on Reddit.

Highlights usernames with less than x (30 by default) posts, since most spammers and account farmers only have a few posts. This will result in mostly false positives. However, if you're checking for spammers and see a flagged username, consider checking the user's profile for spammy behavior.

To install, click [here](https://github.com/Kirzi/Spamslice/raw/master/Spamslice.user.js) and hit install. Requires [Tampermonkey](https://tampermonkey.net/) or [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) browser add-ons.

By default, it flags any user on Reddit. To limit it to specific subreddits, change `https://*.reddit.com/*` to `https://*.reddit.com/r/<subreddit>/*`. For multiple subreddits, use multiple `@match` lines.

Credit to /u/Fortinbraz and [this post](https://www.reddit.com/r/TheseFuckingAccounts/comments/8gb6a8/metabookmarklet_to_help_identify_karma_farming/) for the bulk of the code.
