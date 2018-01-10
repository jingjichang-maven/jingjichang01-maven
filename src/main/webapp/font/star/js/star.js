/**
 * Created by 12644 on 2018/1/10.
 */
//星星评分

function starScore(star){
    star.find(".star ul li a").mouseenter(function(){
        var txt = $(this).attr("data-name");
        var x = $(this).parent("li").index();
        star.find(".tips").html(txt).css("left",-6+x*24).show();
    });
    star.find(".star ul li a").mouseleave(function(){
        star.find(".tips").html("").css("left",0).hide();
    });
}