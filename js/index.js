
/*bywd7 b3d kam (px) mn el top ele hwa (0px)

$(window).scroll(function(){   //lma el window yt3melo scroll yzhr hello f el console
  console.log('hello');
})
*/


//@#$% HAN7OT KOL CODE EL JQUERY GWA EL {$(DOCUMENT.READY())} 3L4AN NT2KD EN KOL EL 7AGA 7AMLT FE3LN (ZYADET TA2KED)%$#@//



$(document).ready(function(){         //m3na el satr da en lma code el html klo y7ml (lma el mawk3 yb2a gahz) ne5fy el loading screen
$('#loading').fadeOut(2000,function(){ //w nrg3 el over flow 3lshan el scroll bar yban
  $('body').css('overflow','auto');

});
let aboutOffset =  $('#about').offset().top //bo3d el el about 3n el top ad a?--lw offset() bs yb2a el top w el left 

$(window).scroll(function(){
  let windowScroll=$(window).scrollTop();   //bywd7 b3d kam (px) mn el top ele hwa (0px)--fe brdo (scrollLeft) bywd7 b3d kam (px) mn el right ele hwa (0px)
 // console.log(windowScroll);              //scrollTop()=> setter and getter
  if(windowScroll>aboutOffset - 50){ 
   $('#main-nav').css('backgroundColor','rgba(0,0,0,0.5)');
   $('#btnUp').fadeIn(500);

 }                                                              //m3na kda en lw el scroll nzl l7d abl el aboyt b 50px y3'yr lon el nav bar
 else {$('#main-nav').css('backgroundColor','transparent');
 $('#btnUp').fadeOut(500);
}
});
$('#btnUp').click(function(){
//$(window).scrollTop(0);            // hena scrollTop => setter b2olo lma ados 3la el zorar tl3ny fo2 als 3nd top =0px
$('html,body').animate({scrollTop:0} , 2000) // de nfs ele code ele fo2eha bs 3lshan yb2a fe2 smoothing and duration
});                                          // ktbt (html & body) 3l4an el (firefox & Ie) by4ofo el (html) bs
                                            //ama el (chrome & safari) by4ofo el (html) bs

$('a').click(function(e){
  let aHref=$(e.target).attr('href');
  let sectionOffset =  $(aHref).offset().top ;
  $('html,body').animate({scrollTop:sectionOffset} , 2000)
}
)
/*
 el code ele fo2 da m3nah ent lma ados 3la ay link f el nav bar by3rf el (href) el bywdeh w b3d keda byrf b3do ad a 3n 
 el top w byro7 le el el section bta3o f 5lal  2s.
 fe proberty f el (CSS=> esmha scroll-behaviour : smooth ;) de bt3ml bdl el code el kbeer ele fo2 da bs m4 btod3m f kol el
 motsf7at f m4 hn4t3'l beha l7d ma el motsf7at y43'loha
 */
let colorBoxWidth = ($('#colorBox').outerWidth(true));
$("#toggleIcon").click(function(){
  if($('#sideBar').css('left') == '0px'){
  $('#sideBar').animate({left:`-${colorBoxWidth}`},1000);
  }
  else{
    $('#sideBar').animate({left: '0px'},1000);
  }
});

let colorBoxes = $('.color-box');

colorBoxes.eq(0).css('backgroundColor' , 'tomato');
colorBoxes.eq(1).css('backgroundColor' , '#09c');
colorBoxes.eq(2).css('backgroundColor' , 'orange' );
colorBoxes.eq(3).css('backgroundColor' , 'teal');
colorBoxes.eq(4).css('backgroundColor' , 'aqua' );
colorBoxes.eq(5).css('backgroundColor' , 'lightgreen');

colorBoxes.click(function(e){
let myColor =$(e.target).css('backgroundColor')               //hena css getter
$('.change').css('color',myColor);

})


  $('.owl-carousel').owlCarousel({items:2 , loop:true});   // gwa el aqwas{} ba7ot el options w kemtha ele mawgoda f el docs bta3t el carousael de
  // da el call bta3 el drag slider
  // typ 3lshan n5ls mn 7war el blugin da hwa 3bara 3n sliders b animation gamda gedn aw mmkn animation m4 4rt slider y3ne f kza mawk3
  // el mohem b5o 3la el mawk3 f el 3'alb byb2a free f ana b5o4 3la el github w a4of el 5dwat 3l4an a5od el animation w btb2a sahla 3amtn
  // w kman yenf3 a3dl 3leha -- el 5dwat el 3ama 1- b3ml download le el blugin b3d keda ba5od filat ele css w el js el mohmen w a7otohm
  //f folder el css w el js bto3e w harbothm f el html w ba5od code el html copy w a7oty 3andy w a4of ha3ml call le el animation ezay f el js
  //3la 7sb el 4ar7 ele f el mwk3
  //el mwaq3 {particles.js , owlcarousel2 ,skitter , mixitup 3  ,  slik , paralllax.js , typed.js(animation for typing)}

  particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  // da call bta3 animation tany 4bh el 4bk keda - bs lazm aft7o 3la extention (live server) 3l4an mynf34 mlf java script y3ml load l mlf js tany
  // ele hwa el satr da load('particles-js', 'js/particles.json' -- el ta7km f el animation masln 3dd el particles w kid f file el particles.json
});

/*
window.onload=function(){       
  $('#loading').fadeOut(2000,function(){  // da hwa hwa el code le fo2 lakn bya5od wa2t aktr 3lshan bystna el sewr t7ml full reslution
    $('body').css('overflow','auto');      //w de mo44kla benzbalna 3l4an ana m7tag mwk3y y7ml asr3 f hnst5dm ele fo2 b3d keda
  
  });
  };
  */