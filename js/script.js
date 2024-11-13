$(function(){

    $(window).scroll(function(){
        let tops = $(window).scrollTop();
        if(tops > 0){
            $('header').css({
                'color' : '#000',
                'backgroundColor' : '#fff'
            });
            $('.nav').css({
                'color' : '#000',
            });
            $('.logo').addClass('scroll');
            $('.nav_menu').addClass('scroll');
                
        }else{
            $('header').css({
                'color' : '#bfc3cb',
                'backgroundColor' : 'transparent'
            });
            $('.nav').css({
                'color' : '#bfc3cb',
            });
            $('.logo').removeClass('scroll');
            $('.nav_menu').removeClass('scroll');
        };
    });

    let headerHeight = $('header').outerHeight();

    $('.nav_menu , .more').click(function () {
        // 클릭된 메뉴의 data-target 속성 값을 가져옴
        let target = $(this).data('target');
        
        // 대상 위치에서 헤더 높이만큼 빼고 스크롤 이동
        $('html, body').animate({
            scrollTop: $(target).offset().top - headerHeight
        }, 500); // 0.5초 동안 스크롤 이동
    });
    
    $('.logo').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000); // 1초 동안 스크롤 이동
    });

    let animated = false;
    $(window).scroll(function () {
        let ulOffset = $('ul').offset().top;
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();

        // 스크롤 위치가 ul 요소의 상단에 도달하면 애니메이션 실행
        if (!animated && scrollTop + windowHeight > ulOffset) {
            animated = true; // 한 번만 실행되도록 설정
            $('.ability_percent').each(function () {
                let percentClass = $(this).attr('class').match(/p(\d+)/);
                if (percentClass) {
                    let percent = percentClass[1] * 10;

                    // width와 opacity 애니메이션
                    $(this).animate({
                        width: percent + '%',
                        opacity: 1
                    }, 2000);

                    // p 태그 텍스트의 opacity를 서서히 나타나도록 애니메이션
                    $(this).find('p').fadeTo(1000, 1); // 1초 동안 서서히 나타남
                }
            });
        }
    });
    $('.project_card').on('click', function() {
        $(this).find('.card_inner').toggleClass('is-flipped'); // .find() 사용
    });
    
});


