# Spamslice

Tampermonkey script for flagging possible spammers.

Highlights usernames with less than x (30 by default) posts, since most spammers only have a few posts. This will result in mostly false positives. However, if you're checking for spammers and see a flagged username, consider checking the user's profile for spammy behavior.

To install, copy the entire contents of Spamslice.js to a new userscript in Tampermonkey, and save.

By default, it flags any user on Reddit. To limit it to specific subreddits, change `https://*.reddit.com/*` to `https://*.reddit.com/r/<subreddit>/*`. For multiple subreddits, use multiple `@match` lines.

Credit to /u/Fortinbraz and [this post](https://www.reddit.com/r/TheseFuckingAccounts/comments/8gb6a8/metabookmarklet_to_help_identify_karma_farming/), since I copied a lot of the code from there.
