'use strict';

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  var userScore = 0;
  var computerScore = 0;
  var userScore_span = document.getElementById("user-score");
  var computerScore_span = document.getElementById("computer-score");
  var scoreBoard_div = document.querySelector(".score-board");
  var result_div = document.querySelector(".result > p");
  var rock_div = document.getElementById("r");
  var paper_div = document.getElementById("p");
  var scissors_div = document.getElementById("s");

  function main() {
    rock_div.addEventListener("click", function () {
      return game("r");
    });

    paper_div.addEventListener("click", function () {
      return game("p");
    });

    scissors_div.addEventListener("click", function () {
      return game("s");
    });
  }

  main();

  function getComputerChoice() {
    var choices = ["r", "p", "s"];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

  function converToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
  }

  function win(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sup();
    var smallCompWord = "comp".fontsize(3).sup();
    var userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = '' + converToWord(userChoice) + smallUserWord + ' beats ' + converToWord(computerChoice) + smallCompWord + '. You win!';
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function () {
      return userChoice_div.classList.remove("green-glow");
    }, 300);
  }

  function lose(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sup();
    var smallCompWord = "comp".fontsize(3).sup();
    var userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = '' + converToWord(userChoice) + smallUserWord + ' soses to ' + converToWord(computerChoice) + smallCompWord + '. You lost...';
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function () {
      return userChoice_div.classList.remove("red-glow");
    }, 300);
  }

  function draw(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sup();
    var smallCompWord = "comp".fontsize(3).sup();
    var userChoice_div = document.getElementById(userChoice);
    result_div.innerHTML = '' + converToWord(userChoice) + smallUserWord + ' equals ' + converToWord(computerChoice) + smallCompWord + '. It\'s a draw';
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(function () {
      return userChoice_div.classList.remove("gray-glow");
    }, 300);
  }

  function game(userChoice) {
    var computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }
  }

  /***/
}]
/******/);