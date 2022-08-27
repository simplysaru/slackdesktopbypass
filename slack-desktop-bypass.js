// ==UserScript==
// @name        Slack always in Browser
// @namespace   Violentmonkey Scripts
// @match       https://*.slack.com/*
// @grant       none
// @version     1.0
// @icon        https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/127px-Slack_icon_2019.svg.png
// @author      simplysaru
// @description If you are a Slack browser user, this userscript will bypass requests to open desktop app
window.addEventListener('load', function () {
    var eles = document.getElementsByClassName('c-link');
    //console.log(eles);
    //console.log(eles.length);
  var links = eles[1].href;
  //console.log(links);
location.href = links;
})