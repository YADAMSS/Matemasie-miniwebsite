// JavaScript for Matemasie Font Showcase

$(document).ready(function(){
  // Change font size based on selection
  $('#font-size').change(function(){
    var fontSize = $(this).val();
    $('.font-demo').css('font-size', fontSize);
  });

  // Change font color based on selection
  $('#font-color').change(function(){
    var fontColor = $(this).val();
    $('.font-demo').css('color', fontColor);
  });
});

