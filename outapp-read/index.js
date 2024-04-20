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
  function simulateHumanInput(inputElement, text) {
    inputElement.focus();
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    ).set;
    for (const character of text) {
      nativeInputValueSetter.call(inputElement, inputElement.value + character);
      inputElement.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }
  function performAction() {
    // const inputField = Array.from(document.querySelectorAll("input")).find(
    //   (el) => el.placeholder.includes("Share out your thoughts")
    // );
    const inputField = document.querySelector(
      "body > main > div > div.min-h-screen.h-screen.overflow-hidden.flex.flex-col > div > div.flex-1.w-full.scroller > div > div > div.w-full.max-outmd\\:pb-16 > div.flex.flex-col.items-start.w-full.font-inter > div.flex.relative.items-start.gap-1\\.5.w-full.font-inter.border-b.border-outstroke-soft > form > div > div.p-4.flex.items-start.gap-2 > div.flex.flex-col.w-full"
    );
    console.log(inputField);
    // const replyButton = Array.from(document.querySelectorAll("span")).find(
    //   (el) => el.innerText.includes("Reply")
    // );
    const replyButton = document.querySelector(
      "body > main > div > div.min-h-screen.h-screen.overflow-hidden.flex.flex-col > div > div.flex-1.w-full.scroller > div > div > div.w-full.max-outmd\\:pb-16 > div.flex.flex-col.items-start.w-full.font-inter > div.flex.relative.items-start.gap-1\\.5.w-full.font-inter.border-b.border-outstroke-soft > form > div > div.flex.items-center.justify-end.py-3 > div > button"
    );
    if (inputField && replyButton) {
      console.log(`Entering "thanks ${counter}" in the input field.`);
      simulateHumanInput(inputField, `thanks ${counter}`);
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

  window.onload = function () {
    startInterval();
  };

  window.stopInterval = function () {
    console.log("Stopping interval...");
    clearInterval(intervalId);
  };

  console.log(
    "Script running. To stop the script, run the following command in the console: stopInterval();"
  );
})();
