!function(e){var t={};function o(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=95)}({95:function(e,t,o){e.exports=o(96)},96:function(e,t){null==$.cookie("pop")&&($("#welcomedialog").modal("show"),$(".preloader-layout").fadeOut(1200,(function(){$(this).addClass("loaded")}))),$(document).ready((function(){$(".preloader-layout").fadeOut(1200,(function(){$(this).addClass("loaded")})),$(".gallery-photo-box a").simpleLightbox(),$(".modal").on("shown.bs.modal",(function(){})),$(".js-open").on("click",(function(e){$(this).closest(".modal-content").toggleClass("open"),setTimeout((function(){$("#welcomedialog").modal("toggle"),$(".audio").trigger("click"),$(".audio").html("<span class='material-icons-outlined'>pause</span>")}),1500)})),$("li.demo").each((function(){Arr.push($(this).find("a").attr("href"))})),$("#welcomedialog").on("hide.bs.modal",(function(){$("html, body").animate({scrollTop:0},"slow"),AOS.init()})),$(window).load((function(){$(".image-description").length&&($(".image-description h4").equalHeights(),$(".image-description p").equalHeights(),$(".event-address").equalHeights(),$(".story-description").equalHeights())})),$(window).resize((function(){$(".image-description").length&&($(".image-description h4").equalHeights(),$(".image-description p").equalHeights());var e=$(".rsvp-box").outerHeight();$(".qr-box").outerHeight(e)})),$(".message-slides").length&&($(".message-slides").owlCarousel({autoplay:!1,autoplayTimeout:3e3,center:!0,loop:!0,margin:0,nav:!0,navText:["<div class='arrow arrow-left'><i class='fa fa-chevron-left'></i></div>","<div class='arrow arrow-right'><i class='fa fa-chevron-right'></i></div>"],responsiveClass:!0,responsive:{0:{items:1,touchDrag:!1,mouseDrag:!1},480:{items:1,touchDrag:!1,mouseDrag:!1},575:{items:1,touchDrag:!1,mouseDrag:!1},767:{items:3},991:{items:3},1199:{items:3}}}),$(window).width()<576&&($(".owl-carousel").data("owl.carousel").difference=function(e,t){return{x:e.x-t.x+(e.y-t.y),y:e.y-t.y}})),$(".story-slides").length&&($(".story-slides").owlCarousel({autoplay:!1,autoplayTimeout:3e3,center:!1,loop:!1,margin:0,nav:!0,navText:["<div class='arrow arrow-left'><i class='fa fa-chevron-left'></i></div>","<div class='arrow arrow-right'><i class='fa fa-chevron-right'></i></div>"],responsiveClass:!0,responsive:{0:{items:1,touchDrag:!1,mouseDrag:!1},480:{items:1,touchDrag:!1,mouseDrag:!1},575:{items:1,touchDrag:!1,mouseDrag:!1},767:{items:3},991:{items:3},1199:{items:3}}}),$(".story-slides").on("resize.owl.carousel",(function(e){$(".story-description").equalHeights()}))),$(".quote-slides").length&&($(".quote-slides").owlCarousel({autoplay:!1,autoplayTimeout:3e3,center:!0,loop:!0,margin:0,nav:!0,navText:["<div class='arrow arrow-left'><i class='fa fa-chevron-left'></i></div>","<div class='arrow arrow-right'><i class='fa fa-chevron-right'></i></div>"],responsiveClass:!0,responsive:{0:{items:1,touchDrag:!1,mouseDrag:!1},480:{items:1,touchDrag:!1,mouseDrag:!1},575:{items:1,touchDrag:!1,mouseDrag:!1},767:{items:1},991:{items:1},1199:{items:1}}}),$(window).width()<576&&($(".owl-carousel").data("owl.carousel").difference=function(e,t){return{x:e.x-t.x+(e.y-t.y),y:e.y-t.y}})),window.slide=new SlideNav({changeHash:!0,speed:5});var e=$(".section"),t=document.querySelectorAll(".nav-item");t.forEach((function(e,o){e.addEventListener("click",(function(e){t.forEach((function(e,t){e.classList.remove("active")})),this.classList.add("active")}))})),$(document).scroll((function(){$(e).each((function(){pageSectionTop=$(this).offset().top-200,$(document).scrollTop()>pageSectionTop&&(thisOfs=$(this).attr("id"),$(e).removeClass("active"),ActiveID=$(this).addClass("active").attr("id"))})),$(".nav-item").each((function(e,t){thisChildren=$(this).children(".nav-link"),thisChildrenHref=$(this).children(".nav-link").attr("href"),thisChildrenHref==="#"+ActiveID&&($(".nav-item").removeClass("active"),$(thisChildren).parent(".nav-item").addClass("active"))}))}));var o=0;window.addEventListener("scroll",(function(){o<=10?o++:AOS.refresh()}));var i=tanggal_mulai,a=waktu_mulai,n=/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/.exec(i+" "+a),s=new Date(+n[1],+n[2]-1,+n[3],+n[4],+n[5],+n[6]);$("#countdown").countdown({date:s,offset:7,day:"Day",days:"Days",hideOnComplete:!0},(function(e){}));var r=!1;$(".audio").click((function(){$(this).toggleClass("down"),0==r?(document.getElementById("audioSource").play(),r=!0,$(this).html("<span class='material-icons-outlined'>pause</span>")):(document.getElementById("audioSource").pause(),r=!1,$(this).html("<span class='material-icons-outlined'>play_arrow</span>"))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("audioSource");function t(){e.play()}window.player=e,$(".open_invitation").click((function(){e.play()})),window.addEventListener("touchstart",(function(e){t()})),$(".open_invitation").click((function(){t()}))})),$("#bank").on("change",(function(){var e="No Rekening : <b>"+$(this).val()+"</b>&nbsp;&nbsp;";$("#norek").html(e)})),window.changeFormat=function(){var e=$("#jumlah").val(),t=replaceAll(e,"Rp. ",""),o=replaceAll(t,".","");$("#nominal").val(o);var i=formatRupiah2(e,"Rp. ");$("#jumlah").val(i)},window.simpanBukuTamu=function(){"preview"!=$("#segment").val()&&$("#submitBukuTamu").submit()}}});