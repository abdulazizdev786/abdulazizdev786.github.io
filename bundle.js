// =================================================================
// Template Description:  Personal portfolio Website
// Author: Abdul Aziz | Front End Developer
// Author URI: https://frontendaz.ga
// Authur Email: abdulaziz652369@gmail.com
// Version: 1.0
// Created By: Abdul Aziz
// ==================================================================


// const logo= document.querySelectorAll('#header-logo path');
//     // console.log(logo);

//     for(let i = 0; i<logo.length; i++){
//       console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
//     }


(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const charming = require('charming');
const element = document.querySelector('h1');

charming(element , {
    tagName: 'b'
    // setClassName: function(index,elem){
    //     return elem+index;
    // }
});
// for (let index = 0; index <2; index++) {
//     charming(element, {
//         tagName: 'b',
//         setClassName: function(){
//             return 'animated rubberBand';
//         }
//     });
    
// }



// });
$(function(){
    // var effects = 'animated bounce'
    var effects = 'animate__animated animate__rubberBand';
    var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
    
    // $('a.button').click(function(){
    //     $(this).addClass(effects).one(effectsEnd, function() {
    //         $(this).removeClass(effects); 
    //     });
    // });

    $('b').hover(function(){
        $(this).addClass(effects).one(effectsEnd, function() {
            $(this).removeClass(effects); 
        });
    });


    $('b').click(function(){
        $(this).addClass(effects).one(effectsEnd, function() {
            $(this).removeClass(effects); 
        });
    });

    

});
},{"charming":2}],2:[function(require,module,exports){
module.exports = function (
  element,
  {
    tagName = 'span',
    split,
    setClassName = function (index) {
      return 'char' + index
    }
  } = {}
) {
  element.normalize()
  let index = 1
  function inject (element) {
    const parentNode = element.parentNode
    const nodeValue = element.nodeValue
    const array = split ? split(nodeValue) : nodeValue.split('')
    array.forEach(function (string) {
      const node = document.createElement(tagName)
      const className = setClassName(index++, string)
      if (className) {
        node.className = className
      }
      node.appendChild(document.createTextNode(string))
      node.setAttribute('aria-hidden', 'true')
      parentNode.insertBefore(node, element)
    })
    if (nodeValue.trim() !== '') {
      parentNode.setAttribute('aria-label', nodeValue)
    }
    parentNode.removeChild(element)
  }
  ;(function traverse (element) {
    // `element` is itself a text node
    if (element.nodeType === 3) {
      return inject(element)
    }
    // `element` has a single child text node
    const childNodes = Array.prototype.slice.call(element.childNodes) // static array of nodes
    const length = childNodes.length
    if (length === 1 && childNodes[0].nodeType === 3) {
      return inject(childNodes[0])
    }
    // `element` has more than one child node
    childNodes.forEach(function (childNode) {
      traverse(childNode)
    })
  })(element)
}

},{}]},{},[1]);



// =======================
// Letterize animation
// =======================

var test = new Letterize({
        targets: ".animate-me"
      });

      var animation = anime.timeline({
        targets: test.listAll(),
        delay: anime.stagger(100, {
          grid: [test.list()[0].length, test.list().length],
          from: "center"
        }),
        loop: true
      });

      animation
        .add({
          scale: 0.5
        })
        .add({
          letterSpacing: "10px"
        })
        .add({
          scale: 1
        })
        .add({
           rotate:"45deg"
        })
        .add({
          rotate:"-45deg"
       })
       .add({
        rotate:"0deg"
     })
     .add({
      letterSpacing: "6px"
    });


    