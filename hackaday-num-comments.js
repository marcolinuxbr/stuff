// ==UserScript==
// @name        HAD numComments
// @namespace   had.num.comments
// @description show num comments 
// @include http://hackaday.com/*
// @match http://*.hackaday.com/*
// @match http://hackaday.com/*
// @grant       none
// ==/UserScript==
function addGlobalStyle(css) {
    var head,
    style;
    head = document.getElementsByTagName('head') [0];
    if (!head) {
        return ;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
//addGlobalStyle(
//'li { list-style-type: decimal ! important }');
/* Make sure the page has comments. */

var comments = document.getElementById('comments');
if (comments) {
    var commentNum = document.getElementsByClassName('post-comments') [0].innerHTML;
    console.log('====  ' + commentNum);
    //comments[0].appendChild(commentNum);
    //alert(commentNum);
    var logo = document.createElement('div');
    var logo1 = document.createElement('div');
    var cmt = document.createElement('div');
    var cmt1 = document.createElement('div');
    logo.innerHTML = '<div style="margin: 0 auto 0 auto; ' +
    'border-bottom: 1px solid #000000; margin-bottom: 5px; ' +
    'font-size: small; background-color: #000000; ' +
    'color: #ffffff;"><p style="margin: 2px 0 1px 0;"> ' +
    'YOUR TEXT HERE ' +
    '</p></div>';
    logo1.innerHTML = '<div><p> ' +
    'YOUR TEXT HERE ' +
    '</p></div>';
    cmt.innerHTML = commentNum;
    cmt1.innerHTML = commentNum;
    //document.body.insertBefore(logo, document.body.firstChild);
    //document.body.insertBefore(cmt, document.body.firstChild);
    //document.body.insertBefore(commentNum, document.body.firstChild);
    comments.insertBefore(cmt, comments.firstChild);
    //comments.appendChild(commentNum);
    comments.appendChild(cmt1);
}
