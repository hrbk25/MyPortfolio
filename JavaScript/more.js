'use strict';

// common

import {loading, ScrollSectionTitle ,scrollDisplay} from './common.js';

loading();

ScrollSectionTitle();

// hedder

import {createTitle, setIntervalHedderMotion, toggleHumMenu} from './header.js'

// main-title

const pageHeader = document.getElementById('page-header');
const title = document.getElementById('title');

createTitle(`Hiro's Profile`, title);

setIntervalHedderMotion(title, pageHeader, title);

// hamburger

toggleHumMenu();



// 共通section title
const sectionTitle = document.querySelectorAll('.section-title');
scrollDisplay(sectionTitle);

// about 

// about scroll display

const aboutImg = document.getElementById('about-img');
const myName = document.querySelector('.name');
const aboutP = document.querySelectorAll('p');

scrollDisplay(aboutImg);
scrollDisplay(myName);
scrollDisplay(aboutP);


// Career

const point = document.querySelectorAll('.point');
const pointLine = document.querySelectorAll('.point-line');

scrollDisplay(point);
scrollDisplay(pointLine);
// setTimeout(scrollDisplay, 2000, point);
// setTimeout(scrollDisplay, 2000, pointLine);

// strength

const strengthArea = document.querySelectorAll('.strength-area');

scrollDisplay(strengthArea);
