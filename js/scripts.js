
$(document).ready(function() {

  $( "#mynavigation" ).load( "navigation.html" );

  /**********************************************************
   *                        LOADING                         *
   **********************************************************/
  $("#loadingbg").delay(2300).fadeOut("slow");
  $("#load").delay(2000).fadeOut("slow");

  /**********************************************************
   *                     INITIAL SCREEN                     *
   **********************************************************/
  // Array that will be looped through.
  var des = [
    'student',
    'computer scientist',
    'linguist',
    'artist',
  ];

  // This function repeatedly loops through the des array.
  var index = -1;
  $(function loop() {
    index++;
    $("#changetext").fadeOut(1500, function() {
       $(this).text(des[index]).fadeIn(1500);
       index = (index == des.length-1) ? -1 : index;
       loop();
     });
   });
});
