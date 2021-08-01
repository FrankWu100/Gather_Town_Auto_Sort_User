// ==UserScript==
// @name         Gather Town auto sort user by who was spoke
// @namespace    https://gist.github.com/FrankWu100
// @version      0.1
// @description  Auto sort user list by who was spoke
// @author       Frank Wu
// @match        https://gather.town/app/*
// @icon         https://assets-global.website-files.com/60ca686c96b42034829a80d3/60e62da77ae7c7a1fe15f1fa_Circle%20(1).png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    //var rAF = window.requestAnimationFrame;
    
    function videoLoop() {
        var videos = document.querySelector("#videos");
        var videosPatched = false;

        if (videosPatched == false && videos != null) {
            document.querySelector('#videos').setAttribute('style', 'align-items: start;')
            document.querySelector('#videos > div.GameVideosContainer-videobar-content').setAttribute('style', 'flex-wrap: wrap;')
        }

        var videoNodes = document.querySelector("#videos > div.GameVideosContainer-videobar-content");
        if (videoNodes != null) {
            var usersCount = videoNodes.childElementCount - 1;
            var head = 0;

            for (var i = 0; i < usersCount; i++) {
                var videoNode = videoNodes.children[i];
                //videoNode.setAttribute('style', ''); //force list all user...(but if too many user....)

                if (videoNode.children[0].children[4] && videoNode.children[0].children[4].getAttribute("color") == "#06d6a0") {
                    console.log("User ID: " + i);
                    if (i >= head) {
                        videoNodes.removeChild(videoNode);
                        videoNodes.insertBefore(videoNode, videoNodes.children[head]);
                        head++;
                    }
                }
            }
        }
        //rAF(videoLoop);
        setTimeout(videoLoop, 500);
    }
    //rAF(videoLoop);
    setTimeout(videoLoop, 500);

})();
