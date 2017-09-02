/*
 * ls-presentation-template (https://www.buzzlms.de)
 * © 2017  Dennis Schulmeister-Zimolong <dennis@pingu-mail.de>
 * License of this file: 3-clause BSD
 */
"use strict";

//import "bootstrap/dist/css/bootstrap.min.css";
import SlideshowPlayer from "lecture-slides.js";

window.addEventListener("load", () => {
    let player = new SlideshowPlayer({
        labelPrev: "Previous",
        labelNext: "Next",
        labelGoTo: "Go To",
        labelOverview: "Overview",
        labelPresentationMode: "Presentation Mode",
        mode: "slideshow",
    });

    player.start();
});
