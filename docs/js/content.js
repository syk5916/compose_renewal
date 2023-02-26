$(document).ready(function(){

    
    //베스트메뉴
    var li_w=$(".menu_box_wrap li").width();//250
    var w=li_w*$(".menu_box_wrap li").size()+"px";
    $(".menu_box_wrap").css("width",w);
       // console.log(w);//250*16=4000
    $(".menu_box_wrap li:last").prependTo(".menu_box_wrap");
    $(".menu_box_wrap").css("margin-left",-li_w+"px");
     $(".prev").click(function(){//<
        $(".menu_box_wrap:not(:animated)")
            .animate({marginLeft:parseInt($(".menu_box_wrap").css("margin-left"))-li_w+"px"},"slow","swing",function(){
               $(".menu_box_wrap li:first").appendTo(".menu_box_wrap"); 
               $(".menu_box_wrap").css("margin-left",-li_w+"px");
            });
       });

       $(".next").click(function(){//<
        $(".menu_box_wrap:not(:animated) ")
            .animate({marginLeft:parseInt($(".menu_box_wrap").css("margin-left"))+li_w+"px"},"slow","swing",function(){
               $(".menu_box_wrap li:last").prependTo(".menu_box_wrap"); 
               $(".menu_box_wrap").css("margin-left",-li_w+"px");
            });
       });



    var visual = $(".bxslider>li");//슬라이더 대상 
    var button = $("#bx_pager>a"); //controls버튼
    var current = 0;
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass("on");//클릭된상태
            tg.addClass("on");

            move(i);
            return false;
        }
        
    });
    
    $("#main_img").on({//마우스 올리면 멈추게
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    });
    
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){
                n = 0;
            }
            
            button.eq(n).click();
        }, 5000);
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:"-100%"});
        nextEl.css({left:"100%"}).stop().animate({left:0});

        current = i;
    }



   
       //바 애니메이션

        //https//github.com/Sharifur/rProgressbar
        $(".tit1").rProgressbar({
            percentage:50,
            fillBackgroundColor:'#ffd800',
        });
        $(".tit2").rProgressbar({
            percentage:30,
            fillBackgroundColor:'#ffd800',
        });
        $(".tit3").rProgressbar({
            percentage:20,
            fillBackgroundColor:'#ffd800',
        });
       

});