// ==UserScript==
// @name        hackaday-no-gif
// @namespace   hackaday
// @include     http*hackaday.com/blog/*
// @include     http*hackaday.com/20*/*
// @include     file:///home/marco/git/teste/hackday-hide-gif/*
// @version     1
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.js
// ==/UserScript==

//20160108 - hide the gif, because too big/slow when "open all in tabs"
//tested: firefox 40.0.3, ubuntu 14.04, GreaseMonkey 3.6
//WIP

function hasGif(obj){
  
  var result = false;
  
  $(obj).each(function(i, obj1) {
     
    var html1 = $(obj1).html();

            if (html1.toLowerCase().indexOf("gif") >= 0){
             
//             $(obj1).html('<p> no gif</p>');
             //$(obj1).html($(obj1).text());

             var textArea = $('<textarea style="padding-left:100px" />'); 
             textArea.val( $(obj1).html() ) ;
              $(obj1).before(textArea);
              $(obj1).before('<br>');
              $(obj1).html('<p>no gif</p>');
             result = true;
            }
   });
   return result;
}

var scrpt1 = "  <script  src= 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.js' /> \
    <script> \
       function toggleIt(divID1){ \
        $(divID1).toggle();  \
         return false; \
    }</script>";

$('body').prepend(scrpt1);

$('div.entry-featured-image').each(function(i, obj) {
  if(hasGif( obj)){
    
    divID="parID"+i;
    s = "<div id="+divID+"></div>";
    $( obj).wrap(s);
    
    $('div#'+divID).before('<a href="#" onclick=toggleIt\('+divID+'\);>Show\/hide gif</a><br>');
  }
});

$('div.widget-area').remove();

