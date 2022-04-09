//Step 1: how to scroll the window


//for horizontal scroll, you had to specify x coordinate and y will be zero 
//and if you want vertical scroll. you had to specify y coordinate and x will be zero.
window.scrollTo(0,200);//0,200 position=>from top, how many pixels you want to move
// in scorllTo , we had to specify the destination, where you want to reach


window.pageYOffset  // tell you where in the page are you currently at 
 

window.scrollBy(0,100);
//every time you will run it ,you will be scrolling the window by 100px.
//scrollBy giving you the stepsize, wherever you are , you just want to move 100pxmore from that point.

//Step 2: for smooth effect, we can use setInterval functon in combination with scrollTo or scrollBy function
// to get the scrolling done repeatedly for smooth scrolling effect.
var targetPos = 1500;
var currrentPos = 0;
var scrollInterval = setInterval(function(){
    if(currrentPos>=targetPos){
        clearInterval(scrollInterval);
        return;

    }
    currrentPos+=50;
    window.scrollBy(0,50);
},50);//50milisecond

//How to figure out the position of the section which we want to reach.

var testSection = document.getElementById('test');

var coordinates  = testSection.getBoundingClientRect();
//This function(getBoundingClientRect) assumes every element as rectangle and givs you its coordinates


//we can prevent the default behaviour of that event using 
//event.preventDefault() this will prevent the default behaviour of that event. This will prevent the defaault behaviour of the event only if the event is cancellable.
//preventDefault dont work on non cancellable events.

