// ==UserScript==
// @name            ADS-remover
// @version         1.0
// @description     Hide ADS for UKR.NET
// @author          fastb1t
// @homepageURL     https://raw.github.com/fastb1t/ADS-remover
// @downloadURL     https://raw.github.com/fastb1t/ADS-remover/master/script.js
// @updateURL       https://raw.github.com/fastb1t/ADS-remover/master/script.js
// @grant           none
// @include         https://mail.ukr.net/*
// ==/UserScript==

var newDivID = 'd41d8cd98f00b204e9800998ecf8427e';

function createNewDiv() {
  if (document.getElementById(newDivID) === null) {
    var element, parent;
    
    element = document.getElementById('h_i_g'); // 'top_banner'
    if (element !== null) {
      element.style['visibility'] = 'hidden';
    }
    
    parent = document.getElementById('page');
    if (parent !== null) {
      element = document.createElement('div');
      if (element !== null) {
        element.style['position'] = 'absolute';
        element.style['top'] = '0px';
        element.style['left'] = '0px';
        element.style['width'] = document.body.clientWidth + 'px';
        element.style['height'] = '90px';
        element.style['background-color'] = '#777f77';
        
        element.id = newDivID;
        
        element.innerHTML =
          '<div style="font-size: 20px; color: #bbcb99; margin-top: 30px; text-align: center;">MAIL</div>' +
          '<div style="font-size: 13px; color: #aabbaa; position: absolute; top: 67px; right: 10px;">Copyright \251 2020 fastb1t</div>';
        
        document.body.insertBefore(element, parent);
      }
    }
  }
}

window.onload = function() {
  setInterval(createNewDiv, 1000);
}

window.onresize = function() {
  var element = document.getElementById(newDivID);
  if (element !== null) {
    element.style['width'] = document.body.clientWidth + 'px';
  }
}
