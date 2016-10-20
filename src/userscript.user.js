// ==UserScript==
// @name        Auto close tweet completed window
// @namespace   http://www.sharkpp.net/
// @version     0.1
// @description Close the window automatically when Tweet is completed in Twitter.
// @author      sharkpp
// @copyright   2016, sharkpp
// @license     MIT License
// @match       https://twitter.com/intent/retweet/complete?*
// @match       https://twitter.com/intent/tweet/complete?*
// ==/UserScript==
(function () {
    window.open('about:blank','_self').close();
})();
