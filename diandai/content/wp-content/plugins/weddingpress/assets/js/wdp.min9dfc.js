/*!
 * Countdown v0.1.0
 * https://github.com/fengyuanchen/countdown
 *
 * Copyright 2014 Fengyuan Chen
 * Released under the MIT license
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var b=function(c,d){this.$element=a(c),this.defaults=a.extend({},b.defaults,this.$element.data(),a.isPlainObject(d)?d:{}),this.init()};b.prototype={constructor:b,init:function(){var a=this.$element.html(),b=new Date(this.defaults.date||a);b.getTime()&&(this.content=a,this.date=b,this.find(),this.defaults.autoStart&&this.start())},find:function(){var a=this.$element;this.$days=a.find("[data-days]"),this.$hours=a.find("[data-hours]"),this.$minutes=a.find("[data-minutes]"),this.$seconds=a.find("[data-seconds]"),this.$days.length+this.$hours.length+this.$minutes.length+this.$seconds.length>0&&(this.found=!0)},reset:function(){this.found?(this.output("days"),this.output("hours"),this.output("minutes"),this.output("seconds")):this.output()},ready:function(){var a,b=this.date,c=100,d=1e3,e=6e4,f=36e5,g=864e5,h={};return b?(a=b.getTime()-(new Date).getTime(),0>=a?(this.end(),!1):(h.days=a,h.hours=h.days%g,h.minutes=h.hours%f,h.seconds=h.minutes%e,h.milliseconds=h.seconds%d,this.days=Math.floor(h.days/g),this.hours=Math.floor(h.hours/f),this.minutes=Math.floor(h.minutes/e),this.seconds=Math.floor(h.seconds/d),this.deciseconds=Math.floor(h.milliseconds/c),!0)):!1},start:function(){!this.active&&this.ready()&&(this.active=!0,this.reset(),this.autoUpdate=this.defaults.fast?setInterval(a.proxy(this.fastUpdate,this),100):setInterval(a.proxy(this.update,this),1e3))},stop:function(){this.active&&(this.active=!1,clearInterval(this.autoUpdate))},end:function(){this.date&&(this.stop(),this.days=0,this.hours=0,this.minutes=0,this.seconds=0,this.deciseconds=0,this.reset(),this.defaults.end())},destroy:function(){this.date&&(this.stop(),this.$days=null,this.$hours=null,this.$minutes=null,this.$seconds=null,this.$element.empty().html(this.content),this.$element.removeData("countdown"))},fastUpdate:function(){--this.deciseconds>=0?this.output("deciseconds"):(this.deciseconds=9,this.update())},update:function(){--this.seconds>=0?this.output("seconds"):(this.seconds=59,--this.minutes>=0?this.output("minutes"):(this.minutes=59,--this.hours>=0?this.output("hours"):(this.hours=23,--this.days>=0?this.output("days"):this.end())))},output:function(a){if(!this.found)return void this.$element.empty().html(this.template());switch(a){case"deciseconds":this.$seconds.text(this.getSecondsText());break;case"seconds":this.$seconds.text(this.seconds);break;case"minutes":this.$minutes.text(this.minutes);break;case"hours":this.$hours.text(this.hours);break;case"days":this.$days.text(this.days)}},template:function(){return this.defaults.text.replace("%s",this.days).replace("%s",this.hours).replace("%s",this.minutes).replace("%s",this.getSecondsText())},getSecondsText:function(){return this.active&&this.defaults.fast?this.seconds+"."+this.deciseconds:this.seconds}},b.defaults={autoStart:!0,date:null,fast:!1,end:a.noop,text:"%s days, %s hours, %s minutes, %s seconds"},b.setDefaults=function(c){a.extend(b.defaults,c)},a.fn.countdown=function(c){return this.each(function(){var d=a(this),e=d.data("countdown");e||d.data("countdown",e=new b(this,c)),"string"==typeof c&&a.isFunction(e[c])&&e[c]()})},a.fn.countdown.constructor=b,a.fn.countdown.setDefaults=b.setDefaults,a(function(){a("[countdown]").countdown()})}); 

jQuery("document").ready(function(t){t("#post-guestbook-box").submit(function(o){o.preventDefault();var e="action=guestbook_box_submit&id="+t(".guestbook-box-content").data("id")+"&avatar="+t("#hidden-avatar img").attr("src")+"&"+t(this).serialize();t.post(cevar.ajax_url,e,function(o){t(".guestbook-list").prepend(o),t("#post-guestbook-box")[0].reset()})})});

jQuery(document).on('click', '.delete', function () {
    var id = this.id;
    jQuery.ajax({
        type: 'POST',
        url: ajaxurl,
        data: {"action": "your_delete_action", "element_id": id},
        success: function (data) {
            //run stuff on success here.  You can use `data` var in the 
           //return so you could post a message.  
        }
    });
});

//Neo - Conditional Statement for audio or Youtube
jQuery("document").ready(function($) {
	var e = window.settingAutoplay;
	if(e) {
		$("#mute-sound").show();
		if(document.body.contains(document.getElementById("song"))) {
			document.getElementById("song").play();
		}
	} else { 
		$("#unmute-sound").show();
	}
	$("#audio-container").click(function(u) {
		if(e) {
			$("#mute-sound").hide();
			$("#unmute-sound").show();
			playAud();//document.getElementById("song").pause();
			e = !1
		} else {
			$("#unmute-sound").hide();
			$("#mute-sound").show();
			//document.getElementById("song").play();
			playAud();
			e = !0;
		}
	})
	function playAud(){
		if(document.body.contains(document.getElementById("song"))) {
			if(e){
				document.getElementById("song").pause();
			} else {
				document.getElementById("song").play();
			}
		} else {
			toggleAudio();
		}
	}
});

(function ($) {"use strict"; var editMode = false;
// Sticky script starts
var wdpSticky = function ($scope, $) {
    var wdpStickySection = $scope.find('.wdp-sticky-section-yes').eq(0);

    wdpStickySection.each(function(i) {
        var dataSettings = $(this).data('settings');
        $.each( dataSettings, function(index, value) { 
            if( index === 'wdp_sticky_top_spacing' ){
                $scope.find('.wdp-sticky-section-yes').css( "top", value + "px" );
            }
        }); 
    });
    $scope.each(function(i) {
        var sectionSettings = $scope.data("settings");
        $.each( sectionSettings, function(index, value) { 
            if( index === 'wdp_sticky_top_spacing' ){
                $scope.css( "top", value + "px" );
            }
        }); 
    });
    
    if ( wdpStickySection.length > 0 ) {
        var parent = document.querySelector('.wdp-sticky-section-yes').parentElement;
        while (parent) {
            var hasOverflow = getComputedStyle(parent).overflow;
            if (hasOverflow !== 'visible') {
                parent.style.overflow = "visible"
            }
            parent = parent.parentElement;
        }
    }

    var columnClass = $scope.find( '.wdp-column-sticky' );
    var dataId = columnClass.data('id');
    var dataType = columnClass.data('type');
    var topSpacing = columnClass.data('top_spacing');

    if( dataType === 'column' ){
        var $target  = $scope;
        var wrapClass = columnClass.find( '.elementor-widget-wrap' );
    
        wrapClass.stickySidebar({
            topSpacing: topSpacing,
            bottomSpacing: 60,
            containerSelector: '.elementor-row',
            innerWrapperSelector: '.elementor-column-wrap',
        });
    }

}
// Sticky script ends
$(window).on('elementor/frontend/init', function () {
    if( elementorFrontend.isEditMode() ) {
        editMode = true;
    }
    
    elementorFrontend.hooks.addAction( 'frontend/element_ready/section', wdpSticky);
}); 

}(jQuery));


jQuery("document").ready(function($) {
    var showPagination = window.settingPagination;
    var hal = window.settingHalaman;
    var pagify = {
      items: {},
      container: null,
      totalPages: 1,
      perPage: 3,
      currentPage: 0,
      createNavigation: function () {
        this.totalPages = Math.ceil(this.items.length / this.perPage);
  
        $(".pagination", this.container.parent()).remove();
        var pagination = $('<div class="pagination"></div>').append(
          '<a class="nav prev disabled" data-next="false">←</a>'
        );
  
        for (var i = 0; i < this.totalPages; i++) {
          var pageElClass = "page";
          if (!i) pageElClass = "page current";
          var pageEl =
            '<a class="' +
            pageElClass +
            '" data-page="' +
            (i + 1) +
            '">' +
            (i + 1) +
            "</a>";
          pagination.append(pageEl);
        }
        pagination.append('<a class="nav next" data-next="true">→</a>');
  
        this.container.after(pagination);
  
        var that = this;
        $("body").off("click", ".nav");
        this.navigator = $("body").on("click", ".nav", function () {
          var el = $(this);
          that.navigate(el.data("next"));
        });
  
        $("body").off("click", ".page");
        this.pageNavigator = $("body").on("click", ".page", function () {
          var el = $(this);
          that.goToPage(el.data("page"));
        });
      },
      navigate: function (next) {
        // default perPage to 5
        if (isNaN(next) || next === undefined) {
          next = true;
        }
        $(".pagination .nav").removeClass("disabled");
        if (next) {
          this.currentPage++;
          if (this.currentPage > this.totalPages - 1)
            this.currentPage = this.totalPages - 1;
          if (this.currentPage == this.totalPages - 1)
            $(".pagination .nav.next").addClass("disabled");
        } else {
          this.currentPage--;
          if (this.currentPage < 0) this.currentPage = 0;
          if (this.currentPage == 0)
            $(".pagination .nav.prev").addClass("disabled");
        }
  
        this.showItems();
      },
      updateNavigation: function () {
        var pages = $(".pagination .page");
        pages.removeClass("current");
        $(
          '.pagination .page[data-page="' + (this.currentPage + 1) + '"]'
        ).addClass("current");
      },
      goToPage: function (page) {
        this.currentPage = page - 1;
  
        $(".pagination .nav").removeClass("disabled");
        if (this.currentPage == this.totalPages - 1)
          $(".pagination .nav.next").addClass("disabled");
  
        if (this.currentPage == 0)
          $(".pagination .nav.prev").addClass("disabled");
        this.showItems();
      },
      showItems: function () {
        this.items.hide();
        var base = this.perPage * this.currentPage;
        this.items.slice(base, base + this.perPage).show();
  
        this.updateNavigation();
      },
      init: function (container, items, perPage) {
        this.container = container;
        this.currentPage = 0;
        this.totalPages = 1;
        this.perPage = perPage;
        this.items = items;
        this.createNavigation();
        this.showItems();
      }
    };
  
    // stuff it all into a jQuery method!
    $.fn.pagify = function (perPage, itemSelector) {
      var el = $(this);
      var items = $(itemSelector, el);
  
      // default perPage to 5
      if (isNaN(perPage) || perPage === undefined) {
        perPage = 3;
      }
  
      // don't fire if fewer items than perPage
      if (items.length <= perPage) {
        return true;
      }
  
      pagify.init(el, items, perPage);
    };
    if(showPagination === 'yes'){
        $(".guestbook-list").pagify(hal, ".user-guestbook");
    }
  });