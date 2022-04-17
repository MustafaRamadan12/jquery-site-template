//*&#%#@%$@ MOZAKRETHOM 7ELWA AWY MN 3LA EL W3 SCHOOLS $%#@$27832//

/*#jquey=>(js) Library=>zy el bootstrap kda bs az3'r shwaya w 5asa b ele (js) 3lshan kda esmha library...
//m4 frame work--from (2006)-- f kteer bs de ashl w a7sn w akbr wa7da.
//=> el afdl ene arbotha awl script f el html
// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library => write less do more

//$("#demo").hide(4000);=> mmkn aktb (jQuey) bdl el ($)=> jQery("#demo").hide(5000);--kol ele t7t nfs el klam
//$=>represent jqery
// $ === jQERY => object include all  Jquery methods
//("#demo") // Jquery Selector (element)=> bntst3ml (.demo) lw el demo de class // like css selector--mmkn ast3mlha fe el variables...
w el functions ele b3rfha f el js (htfhma ta7t f el html) 
//hide() => Effect
//(4000) => duration => 4s

//$("#myBtn").click(function(){})=>lw 3andy zorar esmp myBtn a3ml (.+ el event ele ana 3ayzo)w aft7 () w aktb ele functio ele elmfrod...
//...tetf3l lma ados el zorar 

/*
Jquery Effects          

$("#demo").hide(5000);=> by5ly(width, hight, margin,padding....)kolohm (0)w byde dispalay none(by5fy)
$("#demo").show(1000);=> 3ks el hide lma el el demo tb2a wa5da display none => btrg3ha tany w yrg3 keym el (width, hight, margin,padding....)
$("#demo").toggle(1000);=> bt3mle (hide and show) barothom b zoraz zy fo2 => 


$("#myBtn").click(function(){
  ("#test").toggle(1000);     
});=>
hdos 3la my btn yzhr el (test)--hdos tany y5fe el test and so on




           (camelCase) 
$("#demo").slideDown(1000);=>lw wa5da dislay none --- btzhrha bs mn fo2 keda akny bnzl stara
$("#demo").slideUp(1000);=> na5fe el demo brf3ha lfo2 k2ny btrf3 stara 
$("#demo").slideToggle(1000);=> zy el toggle ele fo2

$("#demo").fadeOut(3000);=> by5ly obicty 0 (by5fy brdo)
$("#demo").fadeIn(3000);=> byrg3 el opicty 1
$("#demo").fadeToggle(3000);=> zy kol el toggle
$("#demo").fadeTo(2000 , 0.5 );=> 0bta5od 2 paramters (Duration,Opicty)=(2000,0.3)

callback();=>el jqery btdedy kol el effects bto3ha collback f ana lw 3ayz a3ml 2 effects le 2 elemnts 
3la nfs el elzorar bs wa7d 2bl el tany hykon zy keda=>


$("#myBtn").click(function(){
  ("#test").toggle(1000 , function(){
    $("myBtn").toggle(1000);
  });     
}); =>

b3d ma a3ml awl effect b7t (,) w a3ml selfinvoked function w a7ot feh el effect ele hyt3ml b3deha lma el awl y5ls =>lw m3mlt4 keda m hystno b3d




//chaining =>nafs el 7war bta3 el callback bs 3la nafs el elemnt f m4 h7tag a3ml zy fo2 --h3ml zy keda=>

                 first        second        third
$("#demo").slideUp(1000).slideDown(1000).hide(1000);
---------------------------------------------------------------------------------------------------------------------------------------------------
$("#demo").animate({ } , Duration); =>

 hena b3ml el animation el 5as bya 3n tre2 ene b7ot fe el {} el t3'yor ele h3mlo =>
eg=> {width:"50px" hight:"70px", w kol 7aga m3ada el alwan}--- f meza kman eny lw 3mlt b3deha animate 3la nfs el elemnt hyt3ml b3deha f el trteb 
mn3'er ma n3ml call back=>

eg=>$("#myBtn").click(function(){
  $("#demo").animate( {hight:'100%'} , 2000);
  $("#demo").animate( {borderRedius:'50%'} , 2000);
}); =>

 keda b3d ma y5le el hight 100% fe 2 sec -- hybd2 y5le el border redius 50 %  f 2 second 
 -----------------------------------------------------------------------------------------------------------------------------------------------
 mmmkn a7d kza t5yera 3la nafs el 3onsr w hyt3mlo m3 b3d =>
 eg =>  $("#demo").animate( {widt:'100%' hight:'100%' borderRedius:'50%'} , 2000);

 -----------------------------------------------------------------------------------------------------------------------------------------------
 $("#demo").animate( {widt:'+=50px' , hight:'-=60px'},1000) => m3naha de zwd 50px 3la el width w zwd 60px 3la el hight la2n mmkn akon m4 3arf homa kam asln 
-----------------------------------------------------------------------------------------------------------------------------------------------

 $("#demo").animate( {width:'100%'} , 2000);
 -----------------------------------------------------------------------------------------------------------------------------------------------
 lw 3ayz a3ml animation lkaza element mfesh 7ala ela tre2t el call back ele fo2=>
 eg $('#demo').animate( {} ,2000, function(){
   $(#test).animate( {} ,3000, function(){
     $(#btn).animate({},1000)
   })
 } )

 keda el animation ele hy7sl el b el trteb (demo > test > btn)-- mmkn brdo a7ot other effects bdl tany w talt wa7da
  -----------------------------------------------------------------------------------------------------------------------------------------------


   $("#demo").stop(,); =>el effect de feha 2 paramaters (stopAll , goToEnd)--kol wa7da fehom el default (false)--ana lw dost ...
   y3ne lw sebtha fadya keda (stop()) ele hy7sl en lw fe 3 animation 3la demo w ana 7att el stop de f btn =>sa3ta lw dost stop hw2f...
   el animation ele sh3'ala lw ykn awl wa7da awl ma ados el zorar hto2f m4 htkml bs el 2 ele b3ehom hy4t3'lo w ykmlo...
   lw 5alet stopAll()true--hto2f mara wa7da kolo (el animation klo hyo2f mara wa7da)---lw 3mlt gotoend true hy5e el animation ele...
   sh3'al ykml le a5ro (wlykon awl wa7d) w b3d keda hyo2f 5als-- lw edet wa7da true lazm ade el tanya false.
*/

/*____________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________________________________

/*
Jquery HTML
.text()//setters & getters => setter=>$(h1)('gjgjgj')=>ht7ot el kalam da gwa el h1---getter=> lw sebtha fadya $(h1).text()=>htgeb el text el gwa el h1
.html()//setters & getters =>getter=> lw sebtha fadya kda () btgeb el code el gwa el html---setter('<h1>hjadgjha<h1/>')
.val();//Input =>bt4t3'l m3a el input bs --- getter hsebha fadya keda()--- setter h7ot gwaha el iput ele ana 3ayzo ('ahmed') masln
 
.attr();//html attribute => src , href , id  => bta5od kemten => .attr('esm el attribute' , 'el new value')--lw 7tet esm el attribute bs--
eg=>$(#demo).attr("src") => keda k2ny b2olo hat el el attr ele esmo "src"--y3ne lw 3mlt console le el cod ele wraya da hygeb masar...
elsora ele f el demo.

@2!#$%^ $('img.item').click(function(e){
  console.log($(e.target).atrr('src))
})  =>da m3nah mmkn ast3mlha fe el variables w el functions ele b3rfha f el js => bs lazm b3d el ($) tab3n=> keda hy3ml console llmsar..
bta3 el sora ele etket 3leha


.css("color");//css property font-size , marign , padding =>bta5od kemten => .attr('esm el property' , 'el new value'),getter abd setter

.addClass(); dol wad7en
.removeClass();
.toggleClass();

.after(); => #demo.after('<h1>hjadgjha<h1/>') => b3d el demo ht7t el h1 de=>h7ot code el html ele ana 3ayzo (div , h , img , table)
.before();=>  zy before bs ablha

.append();=> bt3ml edafa bs gwa el elemnt b3d a5r 7aga gwa=>lw f div feha h1 b3den h2 => lw 3mlt apend h1 => hyb2a feh (h1>h2>h1)
.prepend();=> bt3ml edafa bs gwa el elemnt w bt7oto awl 7aga=>lw f div feha h1 b3den h2 => lw 3mlt prepend h1 => hyb2a feh (h1>h1>h2>)

.remove(); => bt4el el elemnt
.empty(); => btfde mo7twah
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing => eltnkol ben el elements

$("#demo").next(); => bt7km f el ba3d el demo akene 3aml select leh hwa 7ryn (el b3d el demo)-- bseb el akwas fadya
$("#demo").prev(); => bt7km f el abl el demo akene 3aml select leh hwa 7ryn (el abl el demo)-- bseb el akwas fadya
$("#demo").prevAll();=> kol ele abl el demo -- bseb el akwas fadya
$("#demo").nextAll();=> kol ele b3d el demo -- bseb el akwas fadya
$("#demo").siblings(); => kol ele ablo w kol ele b3do ela hwa -- bseb el akwas fadya

$("#demo").nextUntil("test"); =>kol ele b3d el demo l7d abl el (test)-- y3ne el test m4 m3ana
$("#demo").prevUntil("test"); =>kol ele abl el demo l7d abl el (test)-- y3ne el test m4 m3ana




$("#demo").parent(); => el div aw el ay 7aga ele demo gwaaha
$("#demo").parents(); => el div aw el ay 7aga ele demo gwaaha w kol ele fo2eha el gdod w gogo el gdod
$("#demo").parentsUntil(); => zy fekrt el next until

$("#demo").children(); => el element el gwa el demo
$("#demo").find("span"); => aktb ele ana 3ayzo adamm gwa 7ta lw m ebn ---a7fad ay 7aga gwa w ele gwa gwa wtf xD
$("#demo").find("*"); => kda kol ele ta7t hy7slhom ele t2ser ele h5taro
$("span").eq(index); => lw 3nde kza span hyt3aml m3ahm k2nhom array f lw 7tet (5) yb2a hygeb rkm 5 w hkza
$("span").not('class or id'); => m3aha hatly kol 7aga m4 wa5da el class da aw el id da w kda
// */
