$(document).ready(function ()
 {
  $('div.top').click(function()
   {
     $('html, body').animate({
       scrollTop: $("div.t1").offset().top
        }, 1000)
        }),
      $('div.mid').click(function ()
      {
        $('html, body').animate({
          scrollTop: $("div.t2").offset().top
          }, 1000)
        }),
        $('div.last').click(function (){
          $('html, body').animate({
            scrollTop: $("div.t3").offset().top
          }, 1000)
        })
});
