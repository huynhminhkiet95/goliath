$(function () {
	$(".m-kf .kf-item2").click(function (e) {
		e.preventDefault();
		var a = $(this),
			t = a.find(".kf-wx");
		if ($(window).innerWidth() < 992) {
			if (t.is(":hidden")) {
				t.show();
				a.addClass("active");
			} else {
				t.hide();
				a.removeClass("active");
			}
		}
	});
	$(".m-kf .kf-item2").hover(
		function (e) {
			e.preventDefault();
			var a = $(this),
				t = a.find(".kf-wx");
			if ($(window).innerWidth() > 991) {
				t.show();
				a.addClass("active");
			}
		},
		function (e) {
			e.preventDefault();
			var a = $(this),
				t = a.find(".kf-wx");
			if ($(window).innerWidth() > 991) {
				t.hide();
				a.removeClass("active");
			}
		}
	);
	$(".j-gotop").click(function (e) {
		e.preventDefault();
		$("body, html").animate({ scrollTop: 0 }, 350);
	});
	$(window).scroll(function () {
		if (e.time) {
			clearTimeout(e.time);
		}
		e.time = setTimeout(e, 100);
	});
	function e() {
		var e = $(this),
			a = e.scrollTop(),
			t = $("#j-gotop");
		if (a > 300) {
			t.css("display", "block");
		} else {
			t.css("display", "none");
		}
	}
	$(".m-hdnav li").hover(
		function () {
			var e = $(this),
				a = e.children("a");
			a.next().addClass("show");
			a.addClass("active");
		},
		function () {
			var e = $(this),
				a = e.children("a");
			a.next().removeClass("show");
			a.removeClass("active");
		}
	);
	$(".j-lazy").lazyload({ effect: "fadeIn" });
	baguetteBox.run(".baguetteBoxOne", { animation: "fadeIn" });
	$("table").wrap("<div class='table'></div>");
	$(".j-listscroll").DY_scroll();
	$(".j-nextshow").each(function () {
		var a = $(this),
			t = a.next(),
			i = a.data("cname"),
			e = a.data("event"),
			s = a.data("ctel");
		if (s) t = $(s);
		if (e == "hover") {
			a.hover(
				function (e) {
					e.preventDefault();
					if (i) {
						t.addClass(i);
						a.addClass("active");
					} else {
						t.slideDown();
						a.addClass("active");
					}
				},
				function (e) {
					e.preventDefault();
					if (i) {
						t.removeClass(i);
						a.removeClass("active");
					} else {
						t.slideUp();
						a.removeClass("active");
					}
				}
			);
		} else {
			a.click(function (e) {
				e.preventDefault();
				if (i) {
					if (t.hasClass(i)) {
						t.removeClass(i);
						a.removeClass("active");
					} else {
						t.addClass(i);
						a.addClass("active");
					}
				} else {
					if (t.is(":hidden")) {
						t.slideDown();
						a.addClass("active");
					} else {
						t.slideUp();
						a.removeClass("active");
					}
				}
			});
		}
	});
	$(".j-hoverbg").each(function () {
		var e = $(this),
			t = e.data("src1"),
			i = e.data("src2"),
			a = e.data("islink"),
			s = e.data("el") || e;
		s.data("flag", 0);
		if (s.hasClass("active")) {
			s.css("background-image", "url(" + i + ")");
			s.data("flag", 1);
		}
		s.hover(
			function () {
				var e = $(this);
				e.css("background-image", "url(" + i + ")");
			},
			function () {
				var e = $(this);
				if (e.data("flag") == 1) return;
				e.css("background-image", "url(" + t + ")");
			}
		);
		if (!a || a == "false") {
			s.click(function (e) {
				e.preventDefault();
				var a = $(this);
				setTimeout(function () {
					if (a.hasClass("active")) {
						a.css("background-image", "url(" + i + ")")
							.siblings()
							.each(function () {
								$(this)
									.removeClass("active")
									.css(
										"background-image",
										"url(" + $(this).data("src1") + ")"
									);
								$(this).data("flag", 0);
							});
						a.data("flag", 1);
					} else {
						a.css("background-image", "url(" + t + ")");
						a.data("flag", 0);
					}
				});
			});
		}
	});
	$(".j-select .select-item a").click(function (e) {
		e.preventDefault();
		var a = $(this),
			t = a.text(),
			i = a.parents(".j-select"),
			s = i.find(".select-btn span"),
			l = a.parents(".select-list"),
			n = i.find("input");
		a.addClass("active")
			.parent()
			.siblings()
			.children("a")
			.removeClass("active");
		s.text(t);
		i.find(".select-btn").removeClass("active");
		l.slideUp();
		if (a.data("val")) {
			n.val(a.data("val"));
		} else {
			location.href = a.data("href");
		}
	});
	$(".j-modalshow").click(function (e) {
		e.preventDefault();
		var a = $(this),
			t = $(a.data("el"));
		t.show();
	});
	$(".j-modalclose").click(function (e) {
		e.preventDefault();
		$(this).parents(".m-modal").hide();
	});
	$(".j-videoshow").click(function (e) {
		e.preventDefault();
		var a = $(this),
			t = a.data("src"),
			i = $(".j-videomodal");
		i.show().html(
			'<iframe src="' +
				t +
				'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
		);
	});
	$(".j-videomodal").click(function () {
		$(this).hide().html("");
	});

    if($(".m-habt").length <= 0) return;

    var habti = $(".m-habt .tabhd-item.active").index(),
        timer;

    function timerFn(){
        let i = $(".m-habt .tabhd-item.active").index()
        habti = i < 3 ? (i + 1) : 0;

        $(".m-habt .tabhd-item").eq(habti).addClass("active").siblings().removeClass("active");
        $(".m-habt .tabbd-item").eq(habti).show().siblings().hide();
    }

    timer = setInterval(() => {
        timerFn();
    }, 2000);

    $(".m-habt").hover(function(){
        clearInterval(timer);
    }, function(){
        timer = setInterval(() => {
            timerFn();
        }, 4000);
    })
});
