/*

Instructions:

---- PART 1 ----
Start by removing the Yale School of Art crest (#crest).

Instead let's add a blue gradient to the whole page by applying the "gradient" class to the body.

Let's also show the traffic light (#status).

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "T-R-A-F-F-I-C L-I-G-H-T" button:

When the user clicks the "T-R-A-F-F-I-C L-I-G-H-T" button (#button), change the text of traffic light (#status) to read "GO".
Let's also change the background color of the traffic light (#status) to green.

The light needs to turn on and off, so when the user clicks the button again, revert all of the above.
So the traffic light should read "STOP" and its background color should be red.

Let's add a image too. Show the user an animated image when it's safe to cross. So when the traffic light is green, reveal our flying pigeon (#pigeon).
The pigeon should fade out slowly when the button is toggled to "STOP" and the traffic light should go back to red.

---- PART 3 ... Advanced ----
If you're comfortable with all this, let's try one more thing...
Let's make the traffic light turn on and off on its own in 5 second intervals.

Hint: You'll need to create a variable that stores the status of the light.
And you'll also need to learn about the JavaScript function "setInterval".

Every 10 seconds, check the status of the light and turn it either on or off along with all the effects.
Of course the button should also still work.

*/


/////////////////////////////////////////////////////////////
$(function() {
  $('#star1').hover(function() {
    var $this = $('#a');
    $this.data('defaultText', $this.text());
    $this.text("Dear Mom and Dad");
    //
    // $('#a').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    var $this = $('#a');
    $this.text($this.data('defaultText'));
  });

  $('#star2').hover(function() {
    var $this = $('#a');
    $this.data('defaultText', $this.text());
    $this.text("Dear my Friends");
    //
    // $('#a').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    var $this = $('#a');
    $this.text($this.data('defaultText'));
  });

  $('#star3').hover(function() {
    var $this = $('#a');
    $this.data('defaultText', $this.text());
    $this.text("Dear Samsung");
    //
    // $('#a').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    var $this = $('#a');
    $this.text($this.data('defaultText'));
  });

  $('#menustars').hover(function() {
    var $this = $('#main_text');
    $('#main_text').css('display', 'block');
    //
    // $('#a').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    var $this = $('#main_text');
    $('#main_text').css('display', 'none');
  });

  $('#menustars').hover(function() {
    var $this = $('#main_text_kr');
    $('#main_text_kr').css('display', 'block');
    //
    // $('#a').css('background-color', 'yellow');
  }, function() {
    // on mouseout, reset the background colour
    var $this = $('#main_text_kr');
    $('#main_text_kr').css('display', 'none');
  });


});

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
   if(!isChrome){
     $('#iframeAudio').remove()
   }
 else{
    $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background
 }




//
// $('#star1').hover(
//     function() {
//         var $this = $(this); // caching $(this)
//         $this.data('defaultText', $this.text());
//         $this.text("I'm replaced!");
//     },
//     function() {
//         var $this = $(this); // caching $(this)
//         $this.text($this.data('defaultText'));
//     }
// );
// //
// $(document).ready(function() {
//   $('#crest').hide();
//   $('body').addClass('gradient');
//   $('#button').addClass('gradient');
//   // $('#status').delay(1000).fadeIn(5000);
//   $('#status').show();
//
//   var stop = true;
//   console.log(stop);
//
//
//   function changeLights(){
//
//
//         if (stop == true) {
//           $('#status').css('background', 'green');
//           $('#status').html('GO');
//
//           //fade in Pigeon
//           $('#pigeon').show();
//           stop = !stop;
//           console.log(stop);
//         } else {
//           $('#status').css('background', 'red');
//           $('#status').html('STOP');
//           $('#pigeon').fadeOut('slow');
//           stop = !stop;
//           console.log(stop);
//
//         }
//
//   }
//
//
//   $('#button').click(function() {
//     changeLights();
//
//   });
//
//
//   setInterval(function(){
//     console.log("something is happening");
//     changeLights();
//   }, 3000);
//
//
//   // Your code here
//
// });
