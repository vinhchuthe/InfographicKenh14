// init controler
var controller = new ScrollMagic.Controller();

// Timeline

new ScrollMagic.Scene({
    triggerElement: '#timeline',
    offset: -150,
})
    .setClassToggle("#timeline", "is-animate")
    // .addIndicators()
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '.group1-title',
    // offset: -150,
})
    .setClassToggle("#timeline", "state-2")
    // .addIndicators()
    .addTo(controller);

// End timeline

// Group1 title
TweenMax.set($(".group1-title"), { opacity: 0, y: "+=20px", autoAlpha: 0 });
var tl = TweenMax.to($(".group1-title"), 1, { opacity: 1, y: 0, ease: Power2.easeInOut, autoAlpha: 1 })

new ScrollMagic.Scene({
    triggerElement: '.group1',
    offset: -150,
})
    .setTween(tl)
    // .addIndicators()
    .addTo(controller);

//End Group1 title

// Group1 content

$(".grid-item").click(function () {
    TweenMax.set($(".grid-result"), { opacity: 0, autoAlpha: 0, y: "+=20px" });
    TweenMax.to($(".grid-result"), 0.25, { opacity: 1, autoAlpha: 1, y: 0, ease: Power2.easeInOut });
    var index = $(this).attr("grid-index");
    $(".grid-item").removeClass("grid-active");
    $(this).addClass("grid-active");
    $(".grid-result").removeClass("active");
    $("#" + index).addClass("active");

})
// End Group1 content



// Group2 title
TweenMax.set($(".group2-title"), { opacity: 0, y: "+=20px", autoAlpha: 0 });
var tl2 = TweenMax.to($(".group2-title"), 1, { opacity: 1, y: 0, ease: Power2.easeInOut, autoAlpha: 1 })

new ScrollMagic.Scene({
    triggerElement: '.group2',
    offset: -150,
})
    .setTween(tl2)
    // .addIndicators()
    .addTo(controller);
// End Group2 title

// Group2 box-bg
var tl3 = new TimelineMax();
tl3.staggerFrom($(".box__bg-row"), 0.75, { opacity: 0, autoAlpha: 0, y: "-=10px", css: { height: 0 }, ease: Power2.easeInOut }, 0.05)
    .from($(".box__inner-table"), 0.5, { opacity: 0, autoAlpha: 0, y: "+=20px", ease: Power2.easeInOut }, "-=0.5")
    .from($(".box__inner-icon img"), 0.25, { opacity: 0, autoAlpha: 0, ease: Power2.easeInOut }, "+=0.25");

new ScrollMagic.Scene({
    triggerElement: '.box',
    offset: -150,
})
    .setTween(tl3)
    // .addIndicators()
    .addTo(controller);

// End Group2 box-bg

// Group3 title
TweenMax.set($(".group3-title"), { opacity: 0, y: "+=20px", autoAlpha: 0 });
var tl4 = TweenMax.to($(".group3-title"), 1, { opacity: 1, y: 0, ease: Power2.easeInOut, autoAlpha: 1 })

new ScrollMagic.Scene({
    triggerElement: '.group3',
    offset: -150,
})
    .setTween(tl4)
    // .addIndicators()
    .addTo(controller);
// End Group3 title

// Group3-btn
$(".group3-btn__item").click(function () {
    TweenMax.set($(".group3-result__item"), { opacity: 0, autoAlpha: 0 })
    TweenMax.to($(".group3-result__item"), 0.25, { opacity: 1, autoAlpha: 1, ease: Power2.easeInOut })
    var btn = $(this).attr("data-btn");
    $(".group3-btn__item").removeClass("animated");
    $(this).addClass("animated");
    $(".group3-result__item").removeClass("active");
    $("#" + btn).addClass("active");
})
// End Group3-btn

// Group3 svg

// Age chart
$("#Group_246").on("mouseenter", function () {

    $("#tren50").css("fill", "#994715");
    $("#shape_6").css("fill", "#AF6030");
});
$("#Group_247").on("mouseenter", function () {

    $("#tuoi3550").css("fill", "#DE1A1A");
    $("#shape_7").css("fill", "#E33535");
});
$("#Group_248").on("mouseenter", function () {

    $("#shape_7_copy").css("fill", "#FFE495");
    $("#tuoi2535").css("fill", "#FFD65D");

});
$("#Group_249").on("mouseenter", function () {

    $("#shape_8").css("fill", "#F6BE4E");
    $("#tuoi1825").css("fill", "#FCAF17");
});
$("#Group_250").on("mouseenter", function () {

    $("#ellipse_3_3").css("fill", "#E98932");
    $("#duoi18").css("fill", "#ED7101");

});
$("#Group_246").on("mouseleave", function () {
    $("#tren50").css("fill", "#1a1a1a");
    $("#shape_6").css("fill", "#994715");
});
$("#Group_247").on("mouseleave", function () {
    $("#tuoi3550").css("fill", "#1a1a1a");
    $("#shape_7").css("fill", "#DE1A1A");
});
$("#Group_248").on("mouseleave", function () {
    $("#shape_7_copy").css("fill", "#FFD65D");
    $("#tuoi2535").css("fill", "#1a1a1a");
});
$("#Group_249").on("mouseleave", function () {
    $("#shape_8").css("fill", "#FCAF17");
    $("#tuoi1825").css("fill", "#1a1a1a");
});
$("#Group_250").on("mouseleave", function () {
    $("#ellipse_3_3").css("fill", "#ED7101");
    $("#duoi18").css("fill", "#1a1a1a");
});

// Sex chart
$("#Group_241_2").on("mouseenter", function () {

    $("#shape_10").css("fill", "#F5B83F");
    $("#man").css("fill", "#FCAF17");
});
$("#Group_242_2").on("mouseenter", function () {

    $("#woman").css("fill", "#ED7101");
    $("#ellipse_3-2").css("fill", "#EF8A2E");
});
$("#Group_241_2").on("mouseleave", function () {
    $("#shape_10").css("fill", "#FCAF17");
    $("#man").css("fill", "#1a1a1a");
});
$("#Group_242_2").on("mouseleave", function () {
    $("#woman").css("fill", "#1a1a1a");
    $("#ellipse_3-2").css("fill", "#ED7101");
});
// End Group3 svg

// Group4 title
TweenMax.set($(".group4-title"), { opacity: 0, y: "+=20px", autoAlpha: 0 });
var tl5 = TweenMax.to($(".group4-title"), 1, { opacity: 1, y: 0, ease: Power2.easeInOut, autoAlpha: 1 })

new ScrollMagic.Scene({
    triggerElement: '.group4',
    offset: -150,
})
    .setTween(tl5)
    // .addIndicators()
    .addTo(controller);
// End Group4 title

// Group4 title
TweenMax.set($(".group5-title"), { opacity: 0, y: "+=20px", autoAlpha: 0 });
var tl6 = TweenMax.to($(".group5-title"), 1, { opacity: 1, y: 0, ease: Power2.easeInOut, autoAlpha: 1 })

new ScrollMagic.Scene({
    triggerElement: '.group5',
    offset: -150,
})
    .setTween(tl6)
    // .addIndicators()
    .addTo(controller);
// End Group4 title


// hover-img
{
    const mapNumber = (X, A, B, C, D) => (X - A) * (D - C) / (B - A) + C;
    // from http://www.quirksmode.org/js/events_properties.html#position
    const getMousePos = (e) => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy }
    }
    // Generate a random float.
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

    /**
     * One class per effect. 
     * Lots of code is repeated, so that single effects can be easily used. 
     */

    // Effect 1
    class HoverImgFx1 {
        constructor(el) {
            this.DOM = { el: el };
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.DOM.revealInner.style.overflow = 'hidden';
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');

            this.initEvents();
        }
        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left: document.body.scrollLeft + document.documentElement.scrollLeft,
                    top: document.body.scrollTop + document.documentElement.scrollTop
                };
                this.DOM.reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
                this.showImage();
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);
            });
            this.mouseleaveFn = () => {
                this.hideImage();
            };

            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }
        showImage() {
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);

            this.tl = new TimelineMax({
                onStart: () => {
                    this.DOM.reveal.style.opacity = 1;
                    TweenMax.set(this.DOM.el, { zIndex: 1000 });
                }
            })
                .add('begin')
                .add(new TweenMax(this.DOM.revealInner, 0.2, {
                    ease: Sine.easeOut,
                    startAt: { x: '-100%' },
                    x: '0%'
                }), 'begin')
                .add(new TweenMax(this.DOM.revealImg, 0.2, {
                    ease: Sine.easeOut,
                    startAt: { x: '100%' },
                    x: '0%'
                }), 'begin');
        }
        hideImage() {
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);

            this.tl = new TimelineMax({
                onStart: () => {
                    TweenMax.set(this.DOM.el, { zIndex: 999 });
                },
                onComplete: () => {
                    TweenMax.set(this.DOM.el, { zIndex: '' });
                    TweenMax.set(this.DOM.reveal, { opacity: 0 });
                }
            })
                .add('begin')
                .add(new TweenMax(this.DOM.revealInner, 0.2, {
                    ease: Sine.easeOut,
                    x: '100%'
                }), 'begin')

                .add(new TweenMax(this.DOM.revealImg, 0.2, {
                    ease: Sine.easeOut,
                    x: '-100%'
                }), 'begin');
        }
    }

    [...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')].forEach(link => new HoverImgFx1(link));
}