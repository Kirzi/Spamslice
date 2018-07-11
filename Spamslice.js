// ==UserScript==
// @name         Spamslice
// @namespace    https://github.com/Kirzi/Spamslice
// @version      1.0
// @description  Flags possible spammers on Reddit
// @author       Kirzi (blackaurora)
// @match        https://*.reddit.com/*
// @grant        GM_addStyle
// ==/UserScript==

function main() {

    var a = {},
        t = [];
    $(".author").each(function() {
        var e = $(this).text();
        null == a[e] ? (a[e] = [this], t.push(e)) : a[e].push(this)
    }), $.each(t, function(t) {
        var e = this;
        $.getJSON("https://www.reddit.com/user/" + this + ".json?limit=100", function(t) {
            var postCount = t.data.dist;
            $.each(a[e], function() {
                var mod = $(this);
                var threshold = 30; // can be between 1-100
                if (postCount <= threshold) {
                    // flags usernames with less than x posts (x = threshold)
                    mod.wrap('<span style="font-weight: bold; background: rgba(0,0,0,.2); padding: 0 5px; border-radius: 4px;"></span>');
                    mod = mod.parent();
                };
            })
        })
    })

}

window.setTimeout(main, 10);
