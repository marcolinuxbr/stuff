// ==UserScript==
// @name        soylent-fortune
// @namespace   soylent-fortune
// @description soylent-fortune
// @include     *soylentnews.org/*
// @include     file:///home/marco/*
// @version     1
// @grant       none
// ==/UserScript==

//alert (123);


function friendSymbol() {
    //friend gif minimize. neutral.gif
    //neutral.gif -> 15x15 to 9x9
    
    //<img width="15" height="15" 
    //title="Neutral" alt="Neutral" 
    //src="Statistical%20Analysis%20of%20Bob%20Ross%27s%20Paintings%20by%20538_files/neutral.gif">
    
    
    
     var friendImg = document.evaluate('//img[contains(@src,\'neutral.gif\')]',
     //var friendImg = document.evaluate('//img',
                 document, null, 
                 XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                 null);
    
    
    //var em1 = fortune.getElementsByTagName('em');
    //document.body.insertBefore(em1[0], document.body.firstChild);
    //alert(em1[0]);
    
    for (var i = 0; i < friendImg.snapshotLength; i++) {
        var node = friendImg.snapshotItem(i);
        node.width=9;
        node.height=9;
        //alert(node);
        //document.body.insertBefore(node, document.body.firstChild);
    } 
        
}

    //make score 0 or less gray title
    //<span class="score" id="comment_score_31860">(Score:2)</span>
function scoreZeroOrLess(){
    
    var scores = document.evaluate('//span[contains(text(),"Score:0") or contains(text(),"Score:-1")]',
    //var scores = document.evaluate('//span["@class=score"]',                                    
                 document, null, 
                 XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                 null);
    
    
    //var em1 = fortune.getElementsByTagName('em');
    //document.body.insertBefore(em1[0], document.body.firstChild);
    //alert(em1[0]);
    
    for (var i = 0; i < scores.snapshotLength; i++) {
        var node = scores.snapshotItem(i);
        node.style.backgroundColor = '#f00';
        //alert(node);
        //document.body.insertBefore(node, document.body.firstChild);
    }    
}

function fortuneGreen() {
        
    //var em1 = document.getElementById("footer");
    //alert(em1.innerHTML);
    
    // var x=document.getElementById("footer");
  //alert(x.innerHTML);
    
    //document.body.insertBefore(x, document.body.firstChild);
    
    var fortune = document.evaluate('//div["@id=footer"]//em',
                 document, null, 
                 XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                 null);
    
    
    //var em1 = fortune.getElementsByTagName('em');
    //document.body.insertBefore(em1[0], document.body.firstChild);
    //alert(em1[0]);
    //for (var i = 0; i < fortune.snapshotLength; i++) {
      //  var node = fortune.snapshotItem(0);
        
        //alert(node);
        //document.body.insertBefore(node, document.body.firstChild);
    //}
    
    var node = fortune.snapshotItem(1); //why 1?
    node.style.backgroundColor = 'green';

    //document.body.insertBefore(node, document.body.firstChild);
    
    
}

//fortuneGreen();
scoreZeroOrLess();
friendSymbol();


