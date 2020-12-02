AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$(document).ready(function(){
  $('.navbar-toggler').on('click',function(){
    $('.toggler-bar-top').toggleClass('toggler-bar-top-rotate');
    $('.toggler-bar-bottom').toggleClass('toggler-bar-bottom-rotate');
    $('.toggler-bar-middle').toggleClass('d-none');
  })
  $(window).scroll(function(e) {
    if ($(window).scrollTop() <= 0) {
      $('.navbar').addClass('bg-white');
      $('.navbar').removeClass('bg-light');
    }else {
      $('.navbar').addClass('bg-light');
      $('.navbar').removeClass('bg-white');
    }
    // 視差滾動
    const scrollPos = $(this).scrollTop();
    const windowHeight = $(window).height();
    const gearBg = $('.js-gear-bg').offset().top;
    if (scrollPos + windowHeight / 2 >= gearBg) {
      $('.js-gear-bg').css(
        'background-position',
        `-${parseInt(scrollPos / 6)}px center`
      );
    }
    const strippedBg = $('.js-stripped-bg').offset().top;
    if (scrollPos + windowHeight / 2 >= strippedBg) {
      $('.js-stripped-bg').css(
        'background-position',
        `-${parseInt(scrollPos / 6)}px center`
      );
    };
  })
})
