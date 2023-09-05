/*
 * ls-presentation-template (https://www.buzzlms.de)
 * © 2017 - 2023 Dennis Schulmeister-Zimolong <dennis@pingu-mail.de>
 * License of this file: 3-clause BSD
 */
"use strict";

import SlideshowPlayer from "@dschulmeis/lecture-slides.js";

import LsPluginHighlightJs from "@dschulmeis/ls-plugin-highlight.js";
import "highlight.js/styles/atom-one-light.css";

import LsPluginExtraTags from "@dschulmeis/ls-plugin-extra-tags";

window.addEventListener("load", () => {
    let player = new SlideshowPlayer({
        // labelPrev: "Previous",
        // labelNext: "Next",
        // labelGoTo: "Go To",
        // labelViewMenu: "View",
        // labelOverview: "Overview",
        // labelSlidesAndText: "Slides and Text",
        // labelSlidesOnly: "Slides Only",
        // labelTextOnly: "Text Only",
        // labelPrintView: "Print",
        // labelFadeToWhite: "Fade to White",
        // labelFadeToBlack: "Fade to Black",
        // labelFadeBack: "Click to go back to the slides",
        // mode: "overview",
        // linkMode: "slideshow",
        plugins: {
            ExtraTags: new LsPluginExtraTags({
                //labelCarouselNext: "Next Step",
                //labelCarouselPrev: "Previus Step",
                //labelCarouselReset: "Restart",
            }),
            HighlightJs: new LsPluginHighlightJs(),
        }
    });

    player.start();
});
