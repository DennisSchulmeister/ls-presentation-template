/*
 * ls-presentation-template (https://www.buzzlms.de)
 * © 2017 - 2023 Dennis Schulmeister-Zimolong <dennis@pingu-mail.de>
 * License of this file: 3-clause BSD
 */
"use strict";

import SlideshowPlayer from "@dschulmeis/lecture-slides.js";

import LsPluginHighlightJs from "@dschulmeis/ls-plugin-highlight.js";
import HLJS_Language_HTTP from 'highlight.js/lib/languages/http';
import HLJS_Language_XML from 'highlight.js/lib/languages/xml';
import HLJS_Language_CSS from 'highlight.js/lib/languages/css';
import HLJS_Language_JS from 'highlight.js/lib/languages/javascript';
import HLJS_Language_JAVA from 'highlight.js/lib/languages/java';
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
                //labelCarouselPrev: "Previous Step",
                //labelCarouselReset: "Restart",
            }),
            HighlightJs: new LsPluginHighlightJs(),
        }
    });

    player.start();
});
