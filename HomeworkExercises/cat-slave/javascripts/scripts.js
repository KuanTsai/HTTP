$(function(){
    $(".main-toggle").on("click",function(e){
        e.preventDefault();//取消按鈕預設行為
        $(this).siblings("ul").slideToggle();//siblings隔壁 slideToggle滑上/滑下
        $(this).find("i").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
    });

    $("body").on("click",function(e){
        if($(e.target).parents(".main-menu").length<1){
            $(".main-menu ul").slideUp();
            $(".main-toggle i").removeClass("fa-caret-up").addClass("fa-caret-down");
        }
    });
});