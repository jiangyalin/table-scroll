/**
 *
 * @param option {object}
 *         option.element {selector} 目标表格
 *         option.tableWidth {number} 表格宽度
 *         option.scrollWidth {number} 滚动条插件宽度
 * @author yaoxiao
 */
function tableScroll(option) {
    if(!!option.element){
        $(option.element).prepend('<div class="table-scroll">'+
            '            <div class="table-scroll-left"><</div>'+
            '            <div class="table-scroll-bar-bg">'+
            '            <div class="table-scroll-bar"></div>'+
            '            </div>\n'+
            '            <div class="table-scroll-right">></div>\n'+
            '            </div>');
        if(option.tableWidth){
            $(option.element+'.table-box').css('width',option.tableWidth+'px');
        }
        if(option.scrollWidth){
            $(option.element+' .table-scroll').css('width',option.scrollWidth+'px');
        }
        if(($(option.element).width()/$(option.element+' table').outerWidth()).toFixed(4)*100>=100){
            $(option.element).find('.table-scroll').remove();
        }
        $(option.element+' .table-scroll-bar').css('width',(($(option.element).width()/$(option.element+' table').outerWidth()).toFixed(4)*100>=100?100:($(option.element).width()/$(option.element+' table').outerWidth()).toFixed(4)*100)+"%");

        $(option.element+" .table-content").scroll(function () {
            var x=$(this).parents('.table-box').find('.table-scroll-bar-bg').width()*(this.scrollLeft/$(this).parents('.table-box').find('table').outerWidth());
            $(this).parents('.table-box').find('.table-scroll-bar').css('transform','translateX('+x+'px)');
            $(this).parents('.table-box').find('.table-scroll-bar').css('WebkitTransform','translateX('+x+'px)');
            $(this).parents('.table-box').find('.table-scroll-bar').attr('data-x',x);
        });


        $(option.element+' .table-scroll-bar').mousedown(function (e) {
            var event=window.event || e ||arguments[0];
            var firstX=event.screenX;
            var firstScrollX=parseInt(!$(option.element).find('.table-scroll-bar').attr('data-x')?0:$(option.element).find('.table-scroll-bar').attr('data-x'));
            var _this=this;
            $(window).unbind('mousemove');
            $(window).mousemove(function (e) {
                var event=window.event || e ||arguments[0];
                var nowX=event.screenX;
                var x=0;
                if(nowX-firstX+firstScrollX<=0){
                    x=0;
                }else if(nowX-firstX+firstScrollX>$(_this).parents('.table-box').find('.table-scroll-bar-bg').width()-$(_this).parents('.table-box').find('.table-scroll-bar').outerWidth()){
                    x=$(_this).parents('.table-box').find('.table-scroll-bar-bg').width()-$(_this).parents('.table-box').find('.table-scroll-bar').outerWidth();
                }else{
                    x=nowX-firstX+firstScrollX;
                }
                $(option.element).find('.table-scroll-bar').css('transform','translateX('+x+'px)');
                $(option.element).find('.table-scroll-bar').attr('data-x',x);
                $(option.element).find('.table-content').scrollLeft($(_this).parents('.table-box').find('table').outerWidth(true)*(x)/$(_this).parents('.table-box').find('.table-scroll-bar-bg').width());
            });
            $(window).unbind('mouseup');
            $(window).mouseup(function (e) {
                $(window).unbind('mousemove');
                var event=window.event || e ||arguments[0];
                var nowX=event.screenX;
                var x=0;
                if(nowX-firstX+firstScrollX<=0){
                    x=0;
                }else if(nowX-firstX+firstScrollX>$(_this).parents('.table-box').find('.table-scroll-bar-bg').width()-$(_this).parents('.table-box').find('.table-scroll-bar').outerWidth()){
                    x=$(_this).parents('.table-box').find('.table-scroll-bar-bg').width()-$(_this).parents('.table-box').find('.table-scroll-bar').outerWidth();
                }else{
                    x=nowX-firstX+firstScrollX;
                }
                $(_this).parents('.table-box').find('.table-scroll-bar').css('transform','translateX('+x+'px)');
                $(_this).parents('.table-box').find('.table-scroll-bar').attr('data-x',x);
                $(_this).parents('.table-box').find('.table-content').scrollLeft($(_this).parents('.table-box').find('table').outerWidth(true)*(x)/$(_this).parents('.table-box').find('.table-scroll-bar-bg').width());
                $(window).unbind('mouseup');
            });
        });

        //左右点击翻页
        $(option.element).find(".table-scroll-left").click(function () {
            $(this).parents('.table-box').find(".table-content").animate({
                scrollLeft:$(option.element).find(".table-content").scrollLeft()-100
            },100)
        });
        $(option.element).find(".table-scroll-right").click(function () {
            $(this).parents('.table-box').find(".table-content").animate({
                scrollLeft:100+$(option.element).find(".table-content").scrollLeft()
            },100)
        });
    }
}