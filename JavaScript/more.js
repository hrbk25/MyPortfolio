'use strict';

// common
import {loading, ScrollSectionTitle ,scrollDisplay} from './common.js';
loading();
ScrollSectionTitle();

// hedder
import {createTitle, setIntervalHedderMotion, toggleHumMenu} from './header.js'

// main-title
const title = document.getElementById('title');
const pageHeader = document.getElementById('page-header');

createTitle(`Hiro's Profile`, title, 300);
setIntervalHedderMotion(title, pageHeader, title);

// hamburger
toggleHumMenu();


// 共通section title
import { sectionTitle } from './common.js';
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
const careerText = document.querySelectorAll('.career-text');
scrollDisplay(point);
scrollDisplay(pointLine);
scrollDisplay(careerText);

// strength
const strengthArea = document.querySelectorAll('.strength-area');
scrollDisplay(strengthArea);
