// ==UserScript==
// @name     Hide ADS for UKR.NET
// @version  1.0
// @grant    none
// @include  https://mail.ukr.net/*
// ==/UserScript==

var newDivText = 'Mail';
var newDivID = '68424941D4065A0C5B9683ED55D313FAED5DBE4A98F125A2534DDAC597C0D725AFBB83CE1DABB50D0566CC22241F0E06F5C1C696E4029BFA86E9D93A95686035';
var newDivStyle = {
  'position':'absolute',
  'top':              '0px',
  'left':             '0px',
  'width':            document.body.clientWidth + 'px',
  'height':           '80px',
  'z-index':          '99999',
  'background-color': '#777777',
  'color':            '#bbcb99',
  'font-size':        '20px'
};

function set_style(element, styles) {
  for (var styleName in styles) {
    element.style[styleName] = styles[styleName];
  }
}

function seek_and_destroy() {
  var element = document.getElementById('top_banner');
  if (element !== null) {
    element.setAttribute('style', 'visibility: hidden');
  }
  
  var parentDiv = document.getElementById('page');
  if (parentDiv !== null && document.getElementById(newDivID) === null) {
    var newDiv = document.createElement('div');
    if (newDiv !== null) {
      document.body.insertBefore(newDiv, parentDiv);
      
      newDiv.innerHTML = '<center style="margin-top: 25px"><b>' + newDivText + '</b></center>';
      newDiv.id = newDivID;
      set_style(newDiv, newDivStyle);
    }
  }
}

window.onload = function() {
  setInterval(seek_and_destroy, 1000);
}
