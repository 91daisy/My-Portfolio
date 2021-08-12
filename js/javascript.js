$(document).ready(function(){
	//step-1 애니큐빅
	$('.loading>p').fadeOut();
	$('.loading').delay(350).fadeOut(1000, function(){
		$(this).remove();
	});
});

$(function(){
	const $header=$('header');
	const $mnu=$('header>.container>nav>.gnb>li>a')
	let scrollTop = 0;
	let nowIdx = 0;
	let arrTopVal = [];

	$('section').each(function(idx){
    arrTopVal[idx] = $(this).offset().top;
	 });

	//  header menu
	$mnu.on('click',function(evt){
    evt.preventDefault();
    nowIdx = $mnu.index(this);

    $mnu.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $('html,body').stop().animate({
      scrollTop : arrTopVal[nowIdx]-110
    },500,'easeInOutCubic');
  });

	$(window).on('scroll',function(){
		scrollTop = $(this).scrollTop();
		if(scrollTop>arrTopVal[0]){
			$header.addClass('active');
		}else{
			$header.removeClass('active');
		}
		for(let i=0; i<5; i++){
			if(scrollTop>=arrTopVal[i]-200){ 
				$mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
			}
		}
	}); //end of header menu
	
	
	// portfolio
	const $list = $('#portfolio>.portfolio_list>.mnu>li>a');
	const $container =$('#portfolio>.portfolio_list>.view>li');

	$list.on('click', function(evt){
	evt.preventDefault();
	nowIdx = $list.index(this);
	$list.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

	$container.fadeOut();
	$container.eq(nowIdx).fadeIn();
	});

	const $viewOpen = $('.viewOpen');
	const $viewClose = $('.viewClose');
	const $viewImg = $('#portfolio > .portfolio_bg > .portfolio_img');
	const $view = $('#portfolio > .portfolio_bg')

  $viewOpen.on('click',function(evt){

    evt.preventDefault();
    let src = $(this).attr('href');

    $viewImg.find('a').css({
      'background-image' : 'url('+src+')'
    });

    $viewImg.parent().fadeIn();
  });

  $viewClose.on('click',function(evt){
    evt.preventDefault();
    $viewImg.scrollTop(0)
    $view.fadeOut();
  });
  
  $view.on('click',function(){
    $viewImg.scrollTop(0)
    $view.fadeOut();
  });
});
