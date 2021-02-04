document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "welcome to our page", "we will do our best to give you the information we know"];
  
 
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h3").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 3000);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});


// Params
let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
      loop: true,
      speed:1000,
      autoplay:{
        delay:3000
      },
      loopAdditionalSlides: 10,
      grabCursor: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function(){
          this.autoplay.stop();
        },
        imagesReady: function(){
          this.el.classList.remove('loading');
          this.autoplay.start();
        },
        slideChangeTransitionEnd: function(){
          let swiper = this,
              captions = swiper.el.querySelectorAll('.caption');
          for (let i = 0; i < captions.length; ++i) {
            captions[i].classList.remove('show');
          }
          swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function(){
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            let slideProgress = swiper.slides[i].progress,
                innerOffset = swiper.width * interleaveOffset,
                innerTranslate = slideProgress * innerOffset;
           
            swiper.slides[i].querySelector(".slide-bgimg").style.transform =
              "translateX(" + innerTranslate + "px)";
          }
        },
        touchStart: function() {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          let swiper = this;
          for (let i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-bgimg").style.transition =
              speed + "ms";
          }
        }
      }
    };
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);









var slider = document.querySelector(".slide-wr");

document.getElementById("back").onclick = () => {
  const c = 33.33;
  let left = slider.style.transform.split("%")[0].split("(")[1];
  if (left) {
    var num = Number(left) + Number(c);
  } else {
    var num = Number(c);
  }
  slider.style.transform = `translateX(${num}%)`;

  if (left == -166.65) {
    slider.addEventListener("transitionend", myfunc);
    function myfunc() {
      this.style.transition = "none";
      this.style.transform = `translateX(-299.97%)`;
      slider.removeEventListener("transitionend", myfunc);
    }
  } else {
    slider.style.transition = "all 0.5s";
  }
};

// document.getElementById("forward").onclick = () => {
//   const c = -33.33;
//   let left = slider.style.transform.split("%")[0].split("(")[1];
//   if (left) {
//     var num = Number(left) + Number(c);
//   } else {
//     var num = Number(c);
//   }

//   slider.style.transform = `translateX(${num}%)`;

//   if (left == -299.97) {
//     console.log("reached the border");
//     slider.addEventListener("transitionend", myfunc);
//     function myfunc() {
//       this.style.transition = "none";
//       this.style.transform = `translateX(-166.65%)`;
//       slider.removeEventListener("transitionend", myfunc);
//     }
//   } else {
//     slider.style.transition = "all 0.5s";
//   }
// };

// const sliderChildren = document.getElementsByClassName("slide-wr")[0].children;
// slider.style.transform = `translateX(${sliderChildren.length * -33.33}%)`;
// Array.from(sliderChildren)
//   .slice()
//   .reverse()
//   .forEach((child) => {
//     let cln = child.cloneNode(true);
//     cln.classList += " cloned before";
//     slider.insertBefore(cln, sliderChildren[0]);
//   });

// Array.from(sliderChildren).forEach((child) => {
//   let cln = child.cloneNode(true);
//   if (child.classList.contains("cloned") === false) {
//     cln.classList += " cloned after";
//     slider.appendChild(cln);
//   }
// });

