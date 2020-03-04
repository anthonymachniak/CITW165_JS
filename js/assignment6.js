 /**********
Date: 3/3/2020
Author: Anthony Machniak
Class: CITW 165
Exercise: Exercise 6 - DOM
**********/


var belowNavBar = document.getElementById('page');

var list = belowNavBar.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

var listItems = belowNavBar.querySelectorAll('li');

var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

var heading = belowNavBar.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;

