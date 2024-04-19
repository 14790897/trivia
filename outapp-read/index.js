// ==UserScript==
// @name         Reply with Thanks and Incrementing Number (Continuous)
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Click the input field with placeholder "Share out your thoughts ...", enter "thanks" and an incrementing number, then click the "Reply" span element. Repeat every second until stopped.
// @author       Your Name
// @match        https://beta.out.app/whale_shiller/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let counter = 1;
  let intervalId;

  function performAction() {
    const inputField = Array.from(document.querySelectorAll("input")).find(
      (el) => el.placeholder.includes("Share out your thoughts")
    );

    const replyButton = Array.from(document.querySelectorAll("span")).find(
      (el) => el.innerText.includes("Reply")
    );

    if (inputField && replyButton) {
      console.log(`Entering "thanks ${counter}" in the input field.`);
      inputField.value = `thanks ${counter}`;
      counter++;
      console.log('Clicking the "Reply" button.');
      replyButton.click();
    } else {
      console.log(
        'Could not find the input field or "Reply" button, stopping interval.'
      );
      //   clearInterval(intervalId);
    }
  }

  function startInterval() {
    console.log("Starting interval...");
    intervalId = setInterval(performAction, 1000);
  }

  startInterval();

  window.stopInterval = function () {
    console.log("Stopping interval...");
    clearInterval(intervalId);
  };

  console.log(
    "Script running. To stop the script, run the following command in the console: stopInterval();"
  );
})();
