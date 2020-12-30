$(function (){
    var $win = $(window);    
    // 當使用者滾動到離頂部 100px 時，展示回到最上層功能按鈕
    $win.scroll(function (){
        if ($win.scrollTop() > 100){    
            $(".gotopBtn").fadeIn(200);
        } else{    
            $(".gotopBtn").fadeOut(200);
        }    
    });
    // 回到最上層功能按鈕
    $(document).ready(function(){
        $('.gotopBtn').click(function(event){
            event.preventDefault();
            $('html, body').animate({
            scrollTop: 0
            }, 500);
        });
    });
});

//觸發漢堡選單
$(document).ready(function(){
    $('.burgerBtn').on('click', function(e){
       e.preventDefault();
       $('body').toggleClass('active');
   });
});

// 滑動錨點
$(function (){
    $(document).ready(function(){
        $('.menubar > li > a').click(function(){
            $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
            }, 500);
        });
    });
})

// 加入收藏
$('.addFavorites').click(function(e){
    e.preventDefault();
    $('i', this).toggleClass('far fa-heart fas fa-heart');
});