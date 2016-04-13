/* global $ */ // turn off jslint warning for $ (jQuery)

// Tell jQuery to execute the onReady function when the
// document is ready
$(function onReady() {
  
  // select the code element by id
  var testOutputContainer = $('#test');
  
  // select the td by class
  var keypressCell = $('.press');
  
  // variable to count number of keypress events
  var keypressCounter = 0;
  
  var end, start;
  
  var top10 =[];
  
  // attach a keyup listener to the window object 
  $(window).keyup(function onKeyup(eventArgument) {
    // increment the keydownCounter by 1
    if (keypressCounter < 50) {
      keypressCounter++;}
      else {
        return;
      }
    
    

  if  (keypressCounter === 1) {
    start = new Date();
    
  }
  
  end = new Date();
   if (keypressCounter === 50) { 
      alert("You got up to 50 in " + (end.getTime() - start.getTime()) + " seconds.");
     
      var  times = end.getTime() - start.getTime();
      top10.push(times);
      console.log(top10);
   }
 

    // set the text of the keyupCell
    keypressCell.text(keypressCounter);
  });

});