width = $(window).width();

$(document).ready(function(){
    $('.featured').hover(function(){
        hdesc = $(this).find('.desc').height() + 18;
        $(this).find('.title').animate({'bottom': hdesc});
        $(this).find('.desc').fadeIn();
        $(this).find('.title').css({'padding-botton': '0'});
    },function(){
        $(this).find('.title').css({'padding-botton': '16px'});
        $(this).find('.title').animate({'bottom':'0'});
        $(this).find('.desc').fadeOut();
    });
    if(width > 100){
        $('.hoveri').adipoli({
            'startEffect': 'grayscale',
            'hoverEffect': 'boxRandom'
        });
    }
    $('[data-toggle="tooltip"]').tooltip();
    $('#search').click(function(){
        $('#search').hide();
        $('#div-src').show(1 , function(){
            $('#btn-src').show(1, function(){
                $('#input-src').show();
                $('#input-src').animate({
                    width: 160+ 'px'
                });
            });
        });
        return false;
    });

    $('#close-src').click(function(){
        $('#div-src').hide(1, function(){
            $('#btn-src').hide();
            $('#input-src').width(0);
            $('#search').show();
        })
    });
    $('#da-slider').cslider({
        autoplay:true,
    });
});


function repair_slider(width){
    calculate = width * 0.10;
    if(width <= 768){
        $('head').append('<style>.da-slide-current>h2{margin-left: -'+calculate+'px !important;}</style>');
        setTimeout(function(){
            $('#slide0>h2').removeAttr('style');
        },5000);
    }
    // console.log(calculate);
}
repair_slider(width);
