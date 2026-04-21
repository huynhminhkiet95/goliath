$(function(){
	//.prob-pic start
	$(".j-jqzoom .item-pic").click(function(e){
		e.preventDefault();

		var _this = $(this),
			$i = _this.data("index");

		$(".j-jqzoom").find(".item-pic").removeClass("active");
		_this.addClass("active");

		$(".j-proimg .item").eq($i).addClass("show").siblings().removeClass("show");
		$(".j-proinfo .item").eq($i).addClass("show").siblings().removeClass("show");

		swiper[$i].update()
		
	});
	//.prob-pic end
	//.prob-pic-small start
    $(".prob-pic-small").DY_scroll({toggle: false});
	//.prob-pic-small end
	//.m-propic start
    $(".m-propic").DY_scroll();
	//.m-propic end
	
	var swiper = new Swiper(".mySwiper", {
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		scrollbar: {
		el: ".swiper-scrollbar",
		},
		mousewheel: true,
	});
})	