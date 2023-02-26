$(document).ready(function(){

//배경태그추가하기



$(".sub").hide();

$(window).scroll(function(){

    //$(".txt").text(parseInt($(this).scrollTop())); //스크롤높이
    if($(this).scrollTop()>0){
        $(".menu_wrap").css("background-color","#ffffff");
    }
    else{
   // if($(this).scrollTop()==0){
        $(".menu_wrap").css("background-color","rgba(1, 1, 1, 0)");
    }
    return false;
});
    $(".nav_wrap>ul> li").mouseenter(function(){
        $(".sub",this).stop().slideDown("fast");
        $(".sub",this).css("background-color","#ffffff");
        return false;

  
    }).mouseleave(function(){
        $(" .sub").stop().slideUp("fast");
    });
    $(".bg").mouseover(function(){
        $(this).stop().show();//보이는상태유지
        $(".sub").stop().show();
    }).mouseout(function(){
        $(this).stop().slideUp();
        $(".sub").stop().slideUp();

    });
    

    //햄버거버튼

    $(".sub_t").slideUp(0);
    //$(".nav_wrap_t").css("display","none");
    k=1
    ;
   $(".quick_menu").click(function(){
    //$(".quick_menu > a > img").attr("src","images/close.png");
      // $(this).addClass("active1");
      $(this).find(".bar4").toggleClass("active2");
     $(".nav_wrap_t:not(:animated)").animate({right:"0"});
     if( k%2 ==0 ){
     
         $(".nav_wrap_t").stop().animate({right:"-50%"});
     }
     k++
     return false;
     });
      
 
 
     //메뉴
     $(".nav_t li").click(function(){
         $(".sub_t").stop().slideUp();
         $(".sub_t",this).stop().slideDown();
         return false;
     });

});