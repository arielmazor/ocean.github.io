function oceanwpCustomSelects() {
  "use strict";
  $j(oceanwpLocalize.customSelects).customSelect({
      customClass: "theme-select"
  })
}

function oceanwpDropDownMobile() {
  "use strict";
  if ($j("body").hasClass("dropdown-mobile")) {
      $j(".mobile-menu").on("click", function() {
          return $j("#mobile-dropdown").slideToggle(500), $j(this).toggleClass("opened"), $j(".mobile-menu > .hamburger").toggleClass("is-active"), !1
      });
      var e = function(e) {
              $j("#mobile-dropdown").slideUp(200), $j(".mobile-menu").removeClass("opened"), $j(".mobile-menu > .hamburger").removeClass("is-active")
          },
          t = $j("#mobile-dropdown .menu-item-has-children");
      t.children("a").append('<span class="dropdown-toggle"></span>');
      var i = $j(".dropdown-toggle");
      "link" == oceanwpLocalize.sidrDropdownTarget && (i = $j("#mobile-dropdown li.menu-item-has-children > a")), i.on("tap click", function() {
          if ("link" == oceanwpLocalize.sidrDropdownTarget) e = $j(this).parent("li");
          else var e = $j(this).parent("a").parent("li");
          var i = e.parents("li");
          e.children("ul");
          return e.hasClass("active") ? e.removeClass("active").children("ul").slideUp("fast") : (t.not(i).removeClass("active").children("ul").slideUp("fast"), e.addClass("active").children("ul").slideDown("fast")), !1
      }), $j(document).on("click", function() {
          e()
      }).on("click", "#mobile-dropdown", function(e) {
          e.stopPropagation()
      }), $window.resize(function() {
          $window.width() >= 960 && e()
      }), $j('#mobile-dropdown li a[href*="#"]:not([href="#"])').on("click", function() {
          e()
      })
  }
}

function oceanwpDropDownSearch() {
  "use strict";
  if ("drop_down" == oceanwpLocalize.menuSearchStyle) {
      var e = $j("a.search-dropdown-toggle"),
          t = $j("#searchform-dropdown");
      e.click(function(e) {
          t.toggleClass("show"), $j(this).parent("li").toggleClass("active");
          var i = t.css("transition-duration");
          return (i = 1e3 * i.replace("s", "")) && setTimeout(function() {
              t.find("input.field").focus()
          }, i), !1
      }), $j(document).on("click", function(i) {
          $j(i.target).closest("#searchform-dropdown.show").length || (e.parent("li").removeClass("active"), t.removeClass("show"))
      })
  }
}

function oceanwpInitFitVids(e) {
  "use strict";
  $j(".responsive-video-wrap, .responsive-audio-wrap", e).fitVids()
}

function oceanwpFixedFooter() {
  "use strict";
  if ($j("body").hasClass("has-fixed-footer")) {
      var e = $j("#main").outerHeight(),
          t = $j("html").height(),
          i = 0,
          o = $j("#wpadminbar");
      o.length && (i = o.outerHeight());
      var n = e + ($window.height() - t - i);
      $j("#main").css("min-height", n)
  }
}

function oceanwpFullScreenMenu() {
  "use strict";
  var e = $j("#site-header.full_screen-header"),
      t = $j("#site-header.full_screen-header #full-screen-menu"),
      i = $j("#site-header.full_screen-header .menu-bar"),
      o = $j("#site-logo.has-full-screen-logo");
  if (i.length) {
      var n = function() {
              e.addClass("nav-open"), i.addClass("exit"), o.addClass("opened"), t.addClass("active"), t.fadeIn(200);
              var n = $j("html").innerWidth();
              $j("html").css("overflow", "hidden");
              var s = $j("html").innerWidth();
              $j("html").css("margin-right", s - n)
          },
          s = function() {
              e.removeClass("nav-open"), i.removeClass("exit"), o.removeClass("opened"), t.removeClass("active"), t.fadeOut(200), $j("html").css({
                  overflow: "",
                  "margin-right": ""
              }), $j("#full-screen-menu #site-navigation ul > li.dropdown").removeClass("open-sub"), $j("#full-screen-menu #site-navigation ul.sub-menu").slideUp(200)
          };
      i.on("click", function(e) {
          e.preventDefault(), $j(this).hasClass("exit") ? s() : n()
      }), $j('#full-screen-menu #site-navigation ul > li.dropdown > a > .text-wrap > span.nav-arrow, #full-screen-menu #site-navigation ul > li.dropdown > a[href="#"]').on("tap click", function() {
          return $j(this).closest("li.dropdown").find("> ul.sub-menu").is(":visible") ? ($j(this).closest("li.dropdown").removeClass("open-sub"), $j(this).closest("li.dropdown").find("> ul.sub-menu").slideUp(200)) : ($j(this).closest("li.dropdown").addClass("open-sub"), $j(this).closest("li.dropdown").find("> ul.sub-menu").slideDown(200)), !1
      }), $j('#full-screen-menu #site-navigation a.menu-link[href*="#"]:not([href="#"])').on("click", function() {
          s()
      })
  }
}

function oceanwpFullScreenMobile() {
  "use strict";
  if ($j("body").hasClass("fullscreen-mobile")) {
      var e = $j("#mobile-fullscreen"),
          t = $j(".mobile-menu"),
          i = function(i) {
              t.removeClass("exit"), e.removeClass("active").fadeOut(200), $j("html").css({
                  overflow: "",
                  "margin-right": ""
              }), $j("#mobile-fullscreen nav ul > li.dropdown").removeClass("open-sub"), $j("#mobile-fullscreen nav ul.sub-menu").slideUp(200), $j(".mobile-menu > .hamburger").removeClass("is-active")
          };
      t.on("click", function() {
          $j(this).addClass("exit"), e.addClass("active").fadeIn(200), $j(".mobile-menu > .hamburger").addClass("is-active");
          var t = $j("html").innerWidth();
          $j("html").css("overflow", "hidden");
          var i = $j("html").innerWidth();
          return $j("html").css("margin-right", i - t), !1
      }), $j("#mobile-fullscreen .menu-item-has-children").children("a").append('<span class="dropdown-toggle"></span>'), $j('#mobile-fullscreen nav ul > li.menu-item-has-children > a > span.dropdown-toggle, #mobile-fullscreen nav ul > li.menu-item-has-children > a[href="#"]').on("tap click", function() {
          return $j(this).closest("li.menu-item-has-children").find("> ul.sub-menu").is(":visible") ? ($j(this).closest("li.menu-item-has-children").removeClass("open-sub"), $j(this).closest("li.menu-item-has-children").find("> ul.sub-menu").slideUp(200)) : ($j(this).closest("li.menu-item-has-children").addClass("open-sub"), $j(this).closest("li.menu-item-has-children").find("> ul.sub-menu").slideDown(200)), !1
      }), $j("#mobile-fullscreen a.close").on("click", function(e) {
          e.preventDefault(), i()
      }), $j('#mobile-fullscreen .fs-dropdown-menu li a[href*="#"]:not([href="#"]), #mobile-fullscreen #mobile-nav li a[href*="#"]:not([href="#"])').on("click", function() {
          i()
      }), $window.resize(function() {
          $window.width() >= 960 && i()
      })
  }
}

function oceanwpHeaderReplaceSearch() {
  "use strict";
  if ("header_replace" == oceanwpLocalize.menuSearchStyle)
      if ($j("#site-header").hasClass("top-header")) {
          var e = $j("#searchform-header-replace"),
              t = $j("#site-header.top-header .header-top .left"),
              i = $j("#site-header.top-header .header-top .right");
          $j("a.search-header-replace-toggle").click(function(o) {
              e.toggleClass("show"), t.toggleClass("hide"), i.toggleClass("hide");
              var n = e.css("transition-duration");
              return (n = 1e3 * n.replace("s", "")) && setTimeout(function() {
                  e.find('input[type="search"]').focus()
              }, n), !1
          }), $j("#searchform-header-replace-close").click(function() {
              return e.removeClass("show"), t.removeClass("hide"), i.removeClass("hide"), !1
          }), $j(document).on("click", function(o) {
              $j(o.target).closest($j("#searchform-header-replace.show")).length || (e.removeClass("show"), t.removeClass("hide"), i.removeClass("hide"))
          })
      } else {
          var e = $j("#searchform-header-replace"),
              o = $j("#site-header.header-replace #site-navigation");
          $j("a.search-header-replace-toggle").click(function(t) {
              e.toggleClass("show"), o.toggleClass("hide");
              var i = $j("#site-navigation > ul.dropdown-menu").width();
              e.css("max-width", i + 60);
              var n = e.css("transition-duration");
              return (n = 1e3 * n.replace("s", "")) && setTimeout(function() {
                  e.find('input[type="search"]').focus()
              }, n), !1
          }), $j("#searchform-header-replace-close").click(function() {
              return e.removeClass("show"), o.removeClass("hide"), !1
          }), $j(document).on("click", function(t) {
              $j(t.target).closest($j("#searchform-header-replace.show")).length || (e.removeClass("show"), o.removeClass("hide"))
          })
      }
}

function oceanwpHeaderSearchForm() {
  "use strict";
  $j("form.header-searchform").each(function() {
      var e = $j(this),
          t = e.find("input");
      e.find("label");
      t.val().length && e.addClass("search-filled"), t.on("keyup blur", function() {
          t.val().length > 0 ? e.addClass("search-filled") : e.removeClass("search-filled")
      })
  })
}

function oceanwpInfiniteScrollInit() {
  "use strict";
  var e = $j(".infinite-scroll-wrap");
  e.infiniteScroll({
      path: ".older-posts a",
      append: ".item-entry",
      status: ".scroller-status",
      hideNav: ".infinite-scroll-nav",
      history: !1
  }), e.on("load.infiniteScroll", function(t, i, o, n) {
      var s = $j(i).find(".item-entry");
      s.imagesLoaded(function() {
          s.animate({
              opacity: 1
          }), s.find("img").each(function(e, t) {
              t.outerHTML = t.outerHTML
          }), e.hasClass("blog-masonry-grid") && (e.isotope("appended", s), s.css("opacity", 0)), $j("body").hasClass("no-carousel") || oceanwpInitCarousel(s), $j("body").hasClass("no-lightbox") || oceanwpInitLightbox(s), $j("body").hasClass("no-fitvids") || oceanwpInitFitVids(s), $j("body").hasClass("no-matchheight") || $j(".blog-equal-heights .blog-entry-inner").matchHeight({
              property: "min-height"
          }), $j(".gallery-format").parent(".thumbnail") && $j(".blog-masonry-grid").length && setTimeout(function() {
              $j(".blog-masonry-grid").isotope("layout")
          }, 601)
      })
  })
}

function oceanwpMasonryGrids() {
  "use strict";
  $j(".blog-masonry-grid").each(function() {
      var e = $j(this);
      e.imagesLoaded(function() {
          e.isotope({
              itemSelector: ".isotope-entry",
              transformsEnabled: !0,
              isOriginLeft: !oceanwpLocalize.isRTL,
              transitionDuration: "0.0s"
          })
      })
  })
}

function oceanwpInitMatchHeight() {
  "use strict";
  $j(".match-height-grid .match-height-content").matchHeight({
      property: "min-height"
  }), $j(".blog-equal-heights .blog-entry-inner").matchHeight({
      property: "min-height"
  })
}

function oceanwpMegaMenu() {
  "use strict";
  $j("#top-bar-nav .megamenu-li.full-mega").hover(function() {
      var e = $j("#top-bar"),
          t = e.width(),
          i = e.offset(),
          o = $j(this).offset(),
          n = o.left - i.left + 1;
      $j("body").hasClass("boxed-layout") && (n = o.left - i.left + 1, n -= 30), $j(this).find(".megamenu").css({
          left: "-" + n + "px",
          width: t
      })
  }), $j("#site-navigation .megamenu-li.full-mega").hover(function() {
      var e = $j("#site-header-inner"),
          t = e.width(),
          i = e.offset(),
          o = $j(this).offset(),
          n = o.left - i.left + 1;
      $j("#site-header").hasClass("medium-header") && (t = (e = $j("#site-navigation-wrap > .container")).width(), i = e.offset(), n = o.left - i.left + 1), $j("body").hasClass("boxed-layout") && (n = o.left - i.left + 1, n -= 30), $j(this).find(".megamenu").css({
          left: "-" + n + "px",
          width: t
      })
  }), $j(".navigation .megamenu-li.auto-mega .megamenu").each(function() {
      var e = $j(this).parent(),
          t = e.offset().left,
          i = (e.offset().top, $j(this).parent().width()),
          o = i / 2,
          n = $j(this).outerWidth();
      if (t - n / 2 < 0) {
          s = t - 10;
          o = 0
      } else var s = n / 2;
      oceanwpLocalize.isRTL ? $j(this).css({
          right: -s,
          marginRight: o
      }) : $j(this).css({
          left: -s,
          marginLeft: o
      }), $window.width() - (t - s + n + o) < 0 && $j(this).css({
          left: "auto",
          right: -($window.width() - t - i - 10)
      })
  })
}

function oceanwpNavNoClick() {
  "use strict";
  $j("li.nav-no-click > a").on("click", function() {
      return !1
  })
}

function oceanwpOverlaySearch() {
  "use strict";
  if ("overlay" == oceanwpLocalize.menuSearchStyle) {
      var e = $j("a.search-overlay-toggle"),
          t = $j("a.search-overlay-close"),
          i = $j("#searchform-overlay");
      e.length && e.on("click", function(e) {
          e.preventDefault(), i.addClass("active"), i.fadeIn(200), setTimeout(function() {
              $j("html").css("overflow", "hidden")
          }, 400)
      }), t.on("click", function(e) {
          e.preventDefault(), i.removeClass("active"), i.fadeOut(200), setTimeout(function() {
              $j("html").css("overflow", "visible")
          }, 400)
      }), e.on("click", function() {
          $j("#searchform-overlay input").focus()
      })
  }
}

function oceanwpParallaxFooter() {
  "use strict";
  $j("body").hasClass("has-parallax-footer") && setTimeout(function() {
      $j("#main").css("margin-bottom", $j(".parallax-footer").outerHeight())
  }, 1)
}

function oceanwpScrollEffect() {
  "use strict";
  $j("body").hasClass("single-product") || $j("body").hasClass("no-local-scroll") || $j('a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"])').on("click", function() {
      if (!($j(this).hasClass("omw-open-modal") || $j(this).parent().hasClass("omw-open-modal") || $j(this).parent().parent().parent().hasClass("omw-open-modal") || $j(this).parent().hasClass("opl-link"))) {
          var e, t = $j(this).attr("href"),
              i = t.substr(t.indexOf("#")).slice(1),
              o = $j("#" + i),
              n = oceanwpGetAdminbarHeight() + oceanwpGetTopbarHeight() + oceanwpGetStickyHeaderHeight();
          if (o.length && "" !== i) return e = o.offset().top - n, $j("html, body").stop().animate({
              scrollTop: Math.round(e)
          }, 1e3), !1
      }
  })
}

function oceanwpGetAdminbarHeight() {
  "use strict";
  var e = 0,
      t = $j("#wpadminbar");
  return t.length && (e = t.outerHeight()), e
}

function oceanwpGetTopbarHeight() {
  "use strict";
  var e = 0,
      t = $j("#top-bar-wrap");
  return t.hasClass("top-bar-sticky") && t.length && (e = t.outerHeight()), e
}

function oceanwpGetStickyHeaderHeight() {
  "use strict";
  var e = 0,
      t = $j("#site-header");
  if (t.length) return t.hasClass("fixed-scroll") && (e = t.data("height")), $window.width() <= 960 && !t.hasClass("has-sticky-mobile") && (e = e), t.hasClass("medium-header") && (e = $j("#site-header .bottom-header-wrap").hasClass("fixed-scroll") ? $j("#site-header .bottom-header-wrap").outerHeight() : $j(".is-sticky #site-header-inner").outerHeight()), t.hasClass("vertical-header") && (e = e), e
}

function oceanwpScrollTop() {
  "use strict";
  var e = {
      scrollTop: "#scroll-top",
      topLink: 'a[href="#go-top"]',
      slashTopLink: 'body.home a[href="/#go-top"]'
  };
  $window.on("scroll", function() {
      $j(this).scrollTop() > 100 ? $j("#scroll-top").fadeIn() : $j("#scroll-top").fadeOut()
  }), $j.each(e, function(e, t) {
      $j(t).on("click", function(e) {
          e.preventDefault(), $j("html, body").animate({
              scrollTop: 0
          }, 400), $j(this).parent().removeClass("sfHover")
      })
  })
}

function oceanwpMobileMenu(e) {
  "use strict";
  void 0 !== oceanwpLocalize.sidrSource && $j("body").hasClass("sidebar-mobile") && ($j(".mobile-menu").sidr({
      name: "sidr",
      source: oceanwpLocalize.sidrSource,
      side: oceanwpLocalize.sidrSide,
      displace: oceanwpLocalize.sidrDisplace,
      speed: 300,
      renaming: !0,
      bind: "click",
      onOpen: function() {
          $j(".mobile-menu > .hamburger").addClass("is-active");
          var e = $j(".sidr-class-menu-item-has-children");
          e.children("a").append('<span class="sidr-class-dropdown-toggle"></span>');
          var t = $j(".sidr-class-dropdown-toggle");
          "link" == oceanwpLocalize.sidrDropdownTarget && (t = $j("li.sidr-class-menu-item-has-children > a")), t.on("click", function(t) {
              if ("link" == oceanwpLocalize.sidrDropdownTarget) i = $j(this).parent("li");
              else var i = $j(this).parent("a").parent("li");
              var o = i.parents("li");
              i.children("ul");
              return i.hasClass("active") ? i.removeClass("active").children("ul").slideUp("fast") : (e.not(o).removeClass("active").children("ul").slideUp("fast"), i.addClass("active").children("ul").slideDown("fast")), !1
          }), $j("body").append('<div class="oceanwp-sidr-overlay"></div>'), $j(".oceanwp-sidr-overlay").fadeIn(300), $j(".oceanwp-sidr-overlay").on("click", function() {
              return $j.sidr("close", "sidr"), !1
          }), $window.resize(function() {
              $window.width() >= 960 && ($j.sidr("close", "sidr"), $j(".mobile-menu > .hamburger").removeClass("is-active"))
          })
      },
      onClose: function() {
          $j(".mobile-menu > .hamburger").removeClass("is-active"), $j(".sidr-class-menu-item-has-children.active").removeClass("active").children("ul").hide(), $j(".oceanwp-sidr-overlay").fadeOut(300, function() {
              $j(this).remove()
          })
      }
  }), $j('#sidr [class*="sidr-class-fa"]').attr("class", function(e, t) {
      return t = t.replace("sidr-class-fa", "fa"), t = t.replace("sidr-class-fa-", "fa-")
  }), $j('#sidr [class*="sidr-class-icon"]').attr("class", function(e, t) {
      return t = t.replace("sidr-class-icon-", "icon-")
  }), $j("a.sidr-class-toggle-sidr-close").on("click", function() {
      return $j.sidr("close", "sidr"), $j(".mobile-menu > .hamburger").removeClass("is-active"), !1
  }), $j('.sidr-class-dropdown-menu a[href*="#"]:not([href="#"]), .sidr-class-menu-item > a[href*="#"]:not([href="#"])').on("click", function() {
      $j.sidr("close", "sidr"), $j(".mobile-menu > .hamburger").removeClass("is-active")
  }), $j("li.sidr-class-nav-no-click > a").on("click", function() {
      return !1
  }))
}

function oceanwpInitCarousel(e) {
  "use strict";
  var t = $j(".gallery-format, .product-entry-slider", e);
  if ($j("body").hasClass("rtl")) i = !0;
  else var i = !1;
  if (t.hasClass("woo-entry-image")) o = !1;
  else var o = !0;
  t.imagesLoaded(function() {
      t.slick({
          autoplay: o,
          autoplaySpeed: 7e3,
          prevArrow: '<button type="button" class="slick-prev"><span class="fa fa-angle-left"></span></button>',
          nextArrow: '<button type="button" class="slick-next"><span class="fa fa-angle-right"></span></button>',
          rtl: i
      })
  })
}

function oceanwpSuperFish() {
  "use strict";
  $j("#site-header").hasClass("vertical-header") || $j("ul.sf-menu").superfish({
      delay: 600,
      animation: {
          opacity: "show"
      },
      animationOut: {
          opacity: "hide"
      },
      speed: "fast",
      speedOut: "fast",
      cssArrows: !1,
      disableHI: !1
  })
}

function oceanwpVerticalHeader() {
  "use strict";
  if ($j("#site-header").hasClass("vertical-header")) {
      var e = $j("#site-header.vertical-header #site-header-inner"),
          t = $j("#site-header.vertical-header li.menu-item-has-children");
      t.children("a").append('<span class="dropdown-toggle"></span>');
      var i = $j(".dropdown-toggle");
      "link" == oceanwpLocalize.verticalHeaderTarget && (i = $j("#site-header.vertical-header li.menu-item-has-children > a")), i.on("tap click", function() {
          if ("link" == oceanwpLocalize.verticalHeaderTarget) i = $j(this).parent("li");
          else var i = $j(this).parent("a").parent("li");
          var o = i.parents("li");
          i.children("ul");
          return i.hasClass("active") ? i.removeClass("active").children("ul").slideUp("fast", function() {
              e.getNiceScroll().resize()
          }) : (t.not(o).removeClass("active").children("ul").slideUp("fast"), i.addClass("active").children("ul").slideDown("fast", function() {
              e.getNiceScroll().resize()
          })), !1
      }), e.length && !navigator.userAgent.match(/(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/) && e.niceScroll({
          autohidemode: !1,
          cursorborder: 0,
          cursorborderradius: 0,
          cursorcolor: "transparent",
          cursorwidth: 0,
          horizrailenabled: !1,
          mousescrollstep: 40,
          scrollspeed: 60,
          zindex: 100005
      }), $j("a.vertical-toggle").on("click", function(e) {
          e.preventDefault(), $j("body").hasClass("vh-opened") ? ($j("body").removeClass("vh-opened"), $j(this).find(".hamburger").removeClass("is-active")) : ($j("body").addClass("vh-opened"), $j(this).find(".hamburger").addClass("is-active"))
      })
  }
}! function(e) {
  var t;
  if ("function" == typeof define && define.amd) define(["jquery"], e);
  else if ("object" == typeof exports) {
      try {
          t = require("jquery")
      } catch (e) {}
      module.exports = e(t)
  } else {
      var i = window.Cookies,
          o = window.Cookies = e(window.jQuery);
      o.noConflict = function() {
          return window.Cookies = i, o
      }
  }
}(function(e) {
  function t(e) {
      return d.raw ? e : encodeURIComponent(e)
  }

  function i(e) {
      return d.raw ? e : decodeURIComponent(e)
  }

  function o(e) {
      return t(d.json ? JSON.stringify(e) : String(e))
  }

  function n(e) {
      0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
          return e = decodeURIComponent(e.replace(l, " ")), d.json ? JSON.parse(e) : e
      } catch (e) {}
  }

  function s(e, t) {
      var i = d.raw ? e : n(e);
      return a(t) ? t(i) : i
  }

  function r() {
      for (var e, t, i = 0, o = {}; i < arguments.length; i++) {
          t = arguments[i];
          for (e in t) o[e] = t[e]
      }
      return o
  }

  function a(e) {
      return "[object Function]" === Object.prototype.toString.call(e)
  }
  var l = /\+/g,
      d = function(e, n, l) {
          if (arguments.length > 1 && !a(n)) {
              if ("number" == typeof(l = r(d.defaults, l)).expires) {
                  var c = l.expires,
                      u = l.expires = new Date;
                  u.setMilliseconds(u.getMilliseconds() + 864e5 * c)
              }
              return document.cookie = [t(e), "=", o(n), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
          }
          for (var p = e ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0, m = h.length; f < m; f++) {
              var v = h[f].split("="),
                  g = i(v.shift()),
                  y = v.join("=");
              if (e === g) {
                  p = s(y, n);
                  break
              }
              e || void 0 === (y = s(y)) || (p[g] = y)
          }
          return p
      };
  return d.get = d.set = d, d.defaults = {}, d.remove = function(e, t) {
      return d(e, "", r(t, {
          expires: -1
      })), !d(e)
  }, e && (e.cookie = d, e.removeCookie = d.remove), d
}),
function(e) {
  "use strict";
  e.fn.extend({
      customSelect: function(t) {
          if (void 0 === document.body.style.maxHeight) return this;
          var i = {
                  customClass: "customSelect",
                  mapClass: !0,
                  mapStyle: !0
              },
              o = (t = e.extend(i, t)).customClass,
              n = function(t, i) {
                  var o = t.find(":selected"),
                      n = i.children(":first"),
                      r = o.html() || "&nbsp;";
                  n.html(r), o.attr("disabled") ? i.addClass(s("DisabledOption")) : i.removeClass(s("DisabledOption")), setTimeout(function() {
                      i.removeClass(s("Open")), e(document).off("mouseup.customSelect")
                  }, 60)
              },
              s = function(e) {
                  return o + e
              };
          return this.each(function() {
              var i = e(this),
                  r = e("<span />").addClass(s("Inner")),
                  a = e("<span />");
              i.after(a.append(r)), a.addClass(o), t.mapClass && a.addClass(i.attr("class")), t.mapStyle && a.attr("style", i.attr("style")), i.addClass("hasCustomSelect").on("render.customSelect", function() {
                  n(i, a), i.css("width", "");
                  var e = parseInt(i.outerWidth(), 10) - (parseInt(a.outerWidth(), 10) - parseInt(a.width(), 10));
                  a.css({
                      display: "inline-block"
                  });
                  var t = a.outerHeight();
                  i.attr("disabled") ? a.addClass(s("Disabled")) : a.removeClass(s("Disabled")), r.css({
                      width: e,
                      display: "inline-block"
                  }), i.css({
                      "-webkit-appearance": "menulist-button",
                      width: a.outerWidth(),
                      position: "absolute",
                      opacity: 0,
                      height: t,
                      fontSize: a.css("font-size")
                  })
              }).on("change.customSelect", function() {
                  a.addClass(s("Changed")), n(i, a)
              }).on("keyup.customSelect", function(e) {
                  a.hasClass(s("Open")) ? 13 != e.which && 27 != e.which || n(i, a) : (i.trigger("blur.customSelect"), i.trigger("focus.customSelect"))
              }).on("mousedown.customSelect", function() {
                  a.removeClass(s("Changed"))
              }).on("mouseup.customSelect", function(t) {
                  a.hasClass(s("Open")) || (e("." + s("Open")).not(a).length > 0 && "undefined" != typeof InstallTrigger ? i.trigger("focus.customSelect") : (a.addClass(s("Open")), t.stopPropagation(), e(document).one("mouseup.customSelect", function(t) {
                      t.target != i.get(0) && e.inArray(t.target, i.find("*").get()) < 0 ? i.trigger("blur.customSelect") : n(i, a)
                  })))
              }).on("focus.customSelect", function() {
                  a.removeClass(s("Changed")).addClass(s("Focus"))
              }).on("blur.customSelect", function() {
                  a.removeClass(s("Focus") + " " + s("Open"))
              }).on("mouseenter.customSelect", function() {
                  a.addClass(s("Hover"))
              }).on("mouseleave.customSelect", function() {
                  a.removeClass(s("Hover"))
              }).trigger("render.customSelect")
          })
      }
  })
}(jQuery),
function(e) {
  "use strict";
  e.fn.fitVids = function(t) {
      var i = {
          customSelector: null,
          ignore: null
      };
      if (!document.getElementById("fit-vids-style")) {
          var o = document.head || document.getElementsByTagName("head")[0],
              n = document.createElement("div");
          n.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', o.appendChild(n.childNodes[1])
      }
      return t && e.extend(i, t), this.each(function() {
          var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
          i.customSelector && t.push(i.customSelector);
          var o = ".fitvidsignore";
          i.ignore && (o = o + ", " + i.ignore);
          var n = e(this).find(t.join(","));
          (n = (n = n.not("object object")).not(o)).each(function() {
              var t = e(this);
              if (!(t.parents(o).length > 0 || "embed" === this.tagName.toLowerCase() && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length)) {
                  t.css("height") || t.css("width") || !isNaN(t.attr("height")) && !isNaN(t.attr("width")) || (t.attr("height", 9), t.attr("width", 16));
                  var i = ("object" === this.tagName.toLowerCase() || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height()) / (isNaN(parseInt(t.attr("width"), 10)) ? t.width() : parseInt(t.attr("width"), 10));
                  if (!t.attr("name")) {
                      var n = "fitvid" + e.fn.fitVids._count;
                      t.attr("name", n), e.fn.fitVids._count++
                  }
                  t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * i + "%"), t.removeAttr("height").removeAttr("width")
              }
          })
      })
  }, e.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
function(e, t) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
      return t(e, i)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function(e, t) {
  "use strict";

  function i(i, s, a) {
      function l(e, t, o) {
          var n, s = "$()." + i + '("' + t + '")';
          return e.each(function(e, l) {
              var d = a.data(l, i);
              if (d) {
                  var c = d[t];
                  if (c && "_" != t.charAt(0)) {
                      var u = c.apply(d, o);
                      n = void 0 === n ? u : n
                  } else r(s + " is not a valid method")
              } else r(i + " not initialized. Cannot call methods, i.e. " + s)
          }), void 0 !== n ? n : e
      }

      function d(e, t) {
          e.each(function(e, o) {
              var n = a.data(o, i);
              n ? (n.option(t), n._init()) : (n = new s(o, t), a.data(o, i, n))
          })
      }(a = a || t || e.jQuery) && (s.prototype.option || (s.prototype.option = function(e) {
          a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
      }), a.fn[i] = function(e) {
          return "string" == typeof e ? l(this, e, n.call(arguments, 1)) : (d(this, e), this)
      }, o(a))
  }

  function o(e) {
      !e || e && e.bridget || (e.bridget = i)
  }
  var n = Array.prototype.slice,
      s = e.console,
      r = void 0 === s ? function() {} : function(e) {
          s.error(e)
      };
  return o(t || e.jQuery), i
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
  function e() {}
  var t = e.prototype;
  return t.on = function(e, t) {
      if (e && t) {
          var i = this._events = this._events || {},
              o = i[e] = i[e] || [];
          return -1 == o.indexOf(t) && o.push(t), this
      }
  }, t.once = function(e, t) {
      if (e && t) {
          this.on(e, t);
          var i = this._onceEvents = this._onceEvents || {};
          return (i[e] = i[e] || {})[t] = !0, this
      }
  }, t.off = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
          var o = i.indexOf(t);
          return -1 != o && i.splice(o, 1), this
      }
  }, t.emitEvent = function(e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
          i = i.slice(0), t = t || [];
          for (var o = this._onceEvents && this._onceEvents[e], n = 0; n < i.length; n++) {
              var s = i[n];
              o && o[s] && (this.off(e, s), delete o[s]), s.apply(this, t)
          }
          return this
      }
  }, t.allOff = function() {
      delete this._events, delete this._onceEvents
  }, e
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
  "use strict";

  function e(e) {
      var t = parseFloat(e);
      return -1 == e.indexOf("%") && !isNaN(t) && t
  }

  function t() {
      for (var e = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0
          }, t = 0; t < l; t++) e[a[t]] = 0;
      return e
  }

  function i(e) {
      var t = getComputedStyle(e);
      return t || r("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
  }

  function o() {
      if (!d) {
          d = !0;
          var t = document.createElement("div");
          t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
          var o = document.body || document.documentElement;
          o.appendChild(t);
          var r = i(t);
          s = 200 == Math.round(e(r.width)), n.isBoxSizeOuter = s, o.removeChild(t)
      }
  }

  function n(n) {
      if (o(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
          var r = i(n);
          if ("none" == r.display) return t();
          var d = {};
          d.width = n.offsetWidth, d.height = n.offsetHeight;
          for (var c = d.isBorderBox = "border-box" == r.boxSizing, u = 0; u < l; u++) {
              var p = a[u],
                  h = r[p],
                  f = parseFloat(h);
              d[p] = isNaN(f) ? 0 : f
          }
          var m = d.paddingLeft + d.paddingRight,
              v = d.paddingTop + d.paddingBottom,
              g = d.marginLeft + d.marginRight,
              y = d.marginTop + d.marginBottom,
              w = d.borderLeftWidth + d.borderRightWidth,
              b = d.borderTopWidth + d.borderBottomWidth,
              $ = c && s,
              C = e(r.width);
          !1 !== C && (d.width = C + ($ ? 0 : m + w));
          var S = e(r.height);
          return !1 !== S && (d.height = S + ($ ? 0 : v + b)), d.innerWidth = d.width - (m + w), d.innerHeight = d.height - (v + b), d.outerWidth = d.width + g, d.outerHeight = d.height + y, d
      }
  }
  var s, r = "undefined" == typeof console ? function() {} : function(e) {
          console.error(e)
      },
      a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      l = a.length,
      d = !1;
  return n
}),
function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
  "use strict";
  var e = function() {
      var e = window.Element.prototype;
      if (e.matches) return "matches";
      if (e.matchesSelector) return "matchesSelector";
      for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
          var o = t[i] + "MatchesSelector";
          if (e[o]) return o
      }
  }();
  return function(t, i) {
      return t[e](i)
  }
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
      return t(e, i)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function(e, t) {
  var i = {};
  i.extend = function(e, t) {
      for (var i in t) e[i] = t[i];
      return e
  }, i.modulo = function(e, t) {
      return (e % t + t) % t
  };
  var o = Array.prototype.slice;
  i.makeArray = function(e) {
      return Array.isArray(e) ? e : null === e || void 0 === e ? [] : "object" == typeof e && "number" == typeof e.length ? o.call(e) : [e]
  }, i.removeFrom = function(e, t) {
      var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
  }, i.getParent = function(e, i) {
      for (; e.parentNode && e != document.body;)
          if (e = e.parentNode, t(e, i)) return e
  }, i.getQueryElement = function(e) {
      return "string" == typeof e ? document.querySelector(e) : e
  }, i.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
  }, i.filterFindElements = function(e, o) {
      var n = [];
      return (e = i.makeArray(e)).forEach(function(e) {
          if (e instanceof HTMLElement)
              if (o) {
                  t(e, o) && n.push(e);
                  for (var i = e.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
              } else n.push(e)
      }), n
  }, i.debounceMethod = function(e, t, i) {
      i = i || 100;
      var o = e.prototype[t],
          n = t + "Timeout";
      e.prototype[t] = function() {
          var e = this[n];
          clearTimeout(e);
          var t = arguments,
              s = this;
          this[n] = setTimeout(function() {
              o.apply(s, t), delete s[n]
          }, i)
      }
  }, i.docReady = function(e) {
      var t = document.readyState;
      "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
  }, i.toDashed = function(e) {
      return e.replace(/(.)([A-Z])/g, function(e, t, i) {
          return t + "-" + i
      }).toLowerCase()
  };
  var n = e.console;
  return i.htmlInit = function(t, o) {
      i.docReady(function() {
          var s = i.toDashed(o),
              r = "data-" + s,
              a = document.querySelectorAll("[" + r + "]"),
              l = document.querySelectorAll(".js-" + s),
              d = i.makeArray(a).concat(i.makeArray(l)),
              c = r + "-options",
              u = e.jQuery;
          d.forEach(function(e) {
              var i, s = e.getAttribute(r) || e.getAttribute(c);
              try {
                  i = s && JSON.parse(s)
              } catch (t) {
                  return void(n && n.error("Error parsing " + r + " on " + e.className + ": " + t))
              }
              var a = new t(e, i);
              u && u.data(e, o, a)
          })
      })
  }, i
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function(e, t) {
  "use strict";

  function i(e) {
      for (var t in e) return !1;
      return null, !0
  }

  function o(e, t) {
      e && (this.element = e, this.layout = t, this.position = {
          x: 0,
          y: 0
      }, this._create())
  }
  var n = document.documentElement.style,
      s = "string" == typeof n.transition ? "transition" : "WebkitTransition",
      r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
      a = {
          WebkitTransition: "webkitTransitionEnd",
          transition: "transitionend"
      } [s],
      l = {
          transform: r,
          transition: s,
          transitionDuration: s + "Duration",
          transitionProperty: s + "Property",
          transitionDelay: s + "Delay"
      },
      d = o.prototype = Object.create(e.prototype);
  d.constructor = o, d._create = function() {
      this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {}
      }, this.css({
          position: "absolute"
      })
  }, d.handleEvent = function(e) {
      var t = "on" + e.type;
      this[t] && this[t](e)
  }, d.getSize = function() {
      this.size = t(this.element)
  }, d.css = function(e) {
      var t = this.element.style;
      for (var i in e) t[l[i] || i] = e[i]
  }, d.getPosition = function() {
      var e = getComputedStyle(this.element),
          t = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = e[t ? "left" : "right"],
          n = e[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size; - 1 != o.indexOf("%") && (s = s / 100 * a.width), -1 != n.indexOf("%") && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= t ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
  }, d.layoutPosition = function() {
      var e = this.layout.size,
          t = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + e[n];
      t[s] = this.getXValue(a), t[r] = "";
      var l = o ? "paddingTop" : "paddingBottom",
          d = o ? "top" : "bottom",
          c = o ? "bottom" : "top",
          u = this.position.y + e[l];
      t[d] = this.getYValue(u), t[c] = "", this.css(t), this.emitEvent("layout", [this])
  }, d.getXValue = function(e) {
      var t = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
  }, d.getYValue = function(e) {
      var t = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
  }, d._transitionTo = function(e, t) {
      this.getPosition();
      var i = this.position.x,
          o = this.position.y,
          n = e == this.position.x && t == this.position.y;
      if (this.setPosition(e, t), !n || this.isTransitioning) {
          var s = e - i,
              r = t - o,
              a = {};
          a.transform = this.getTranslate(s, r), this.transition({
              to: a,
              onTransitionEnd: {
                  transform: this.layoutPosition
              },
              isCleaning: !0
          })
      } else this.layoutPosition()
  }, d.getTranslate = function(e, t) {
      var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
      return e = i ? e : -e, t = o ? t : -t, "translate3d(" + e + "px, " + t + "px, 0)"
  }, d.goTo = function(e, t) {
      this.setPosition(e, t), this.layoutPosition()
  }, d.moveTo = d._transitionTo, d.setPosition = function(e, t) {
      this.position.x = parseFloat(e), this.position.y = parseFloat(t)
  }, d._nonTransition = function(e) {
      this.css(e.to), e.isCleaning && this._removeStyles(e.to);
      for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
  }, d.transition = function(e) {
      if (parseFloat(this.layout.options.transitionDuration)) {
          var t = this._transn;
          for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
          for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
          if (e.from) {
              this.css(e.from);
              this.element.offsetHeight;
              null
          }
          this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
      } else this._nonTransition(e)
  };
  var c = "opacity," + function(e) {
      return e.replace(/([A-Z])/g, function(e) {
          return "-" + e.toLowerCase()
      })
  }(r);
  d.enableTransition = function() {
      if (!this.isTransitioning) {
          var e = this.layout.options.transitionDuration;
          e = "number" == typeof e ? e + "ms" : e, this.css({
              transitionProperty: c,
              transitionDuration: e,
              transitionDelay: this.staggerDelay || 0
          }), this.element.addEventListener(a, this, !1)
      }
  }, d.onwebkitTransitionEnd = function(e) {
      this.ontransitionend(e)
  }, d.onotransitionend = function(e) {
      this.ontransitionend(e)
  };
  var u = {
      "-webkit-transform": "transform"
  };
  d.ontransitionend = function(e) {
      if (e.target === this.element) {
          var t = this._transn,
              o = u[e.propertyName] || e.propertyName;
          delete t.ingProperties[o], i(t.ingProperties) && this.disableTransition(), o in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[o]), o in t.onEnd && (t.onEnd[o].call(this), delete t.onEnd[o]), this.emitEvent("transitionEnd", [this])
      }
  }, d.disableTransition = function() {
      this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
  }, d._removeStyles = function(e) {
      var t = {};
      for (var i in e) t[i] = "";
      this.css(t)
  };
  var p = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
  };
  return d.removeTransitionStyles = function() {
      this.css(p)
  }, d.stagger = function(e) {
      e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
  }, d.removeElem = function() {
      this.element.parentNode.removeChild(this.element), this.css({
          display: ""
      }), this.emitEvent("remove", [this])
  }, d.remove = function() {
      s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
          this.removeElem()
      }), this.hide()) : this.removeElem()
  }, d.reveal = function() {
      delete this.isHidden, this.css({
          display: ""
      });
      var e = this.layout.options,
          t = {};
      t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
          from: e.hiddenStyle,
          to: e.visibleStyle,
          isCleaning: !0,
          onTransitionEnd: t
      })
  }, d.onRevealTransitionEnd = function() {
      this.isHidden || this.emitEvent("reveal")
  }, d.getHideRevealTransitionEndProperty = function(e) {
      var t = this.layout.options[e];
      if (t.opacity) return "opacity";
      for (var i in t) return i
  }, d.hide = function() {
      this.isHidden = !0, this.css({
          display: ""
      });
      var e = this.layout.options,
          t = {};
      t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
          from: e.visibleStyle,
          to: e.hiddenStyle,
          isCleaning: !0,
          onTransitionEnd: t
      })
  }, d.onHideTransitionEnd = function() {
      this.isHidden && (this.css({
          display: "none"
      }), this.emitEvent("hide"))
  }, d.destroy = function() {
      this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: ""
      })
  }, o
}),
function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
      return t(e, i, o, n, s)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, function(e, t, i, o, n) {
  "use strict";

  function s(e, t) {
      var i = o.getQueryElement(e);
      if (i) {
          this.element = i, d && (this.$element = d(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(t);
          var n = ++u;
          this.element.outlayerGUID = n, p[n] = this, this._create(), this._getOption("initLayout") && this.layout()
      } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e))
  }

  function r(e) {
      function t() {
          e.apply(this, arguments)
      }
      return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
  }

  function a(e) {
      if ("number" == typeof e) return e;
      var t = e.match(/(^\d*\.?\d*)(\w*)/),
          i = t && t[1],
          o = t && t[2];
      return i.length ? (i = parseFloat(i)) * (f[o] || 1) : 0
  }
  var l = e.console,
      d = e.jQuery,
      c = function() {},
      u = 0,
      p = {};
  s.namespace = "outlayer", s.Item = n, s.defaults = {
      containerStyle: {
          position: "relative"
      },
      initLayout: !0,
      originLeft: !0,
      originTop: !0,
      resize: !0,
      resizeContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)"
      },
      visibleStyle: {
          opacity: 1,
          transform: "scale(1)"
      }
  };
  var h = s.prototype;
  o.extend(h, t.prototype), h.option = function(e) {
      o.extend(this.options, e)
  }, h._getOption = function(e) {
      var t = this.constructor.compatOptions[e];
      return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
  }, s.compatOptions = {
      initLayout: "isInitLayout",
      horizontal: "isHorizontal",
      layoutInstant: "isLayoutInstant",
      originLeft: "isOriginLeft",
      originTop: "isOriginTop",
      resize: "isResizeBound",
      resizeContainer: "isResizingContainer"
  }, h._create = function() {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
  }, h.reloadItems = function() {
      this.items = this._itemize(this.element.children)
  }, h._itemize = function(e) {
      for (var t = this._filterFindItemElements(e), i = this.constructor.Item, o = [], n = 0; n < t.length; n++) {
          var s = new i(t[n], this);
          o.push(s)
      }
      return o
  }, h._filterFindItemElements = function(e) {
      return o.filterFindElements(e, this.options.itemSelector)
  }, h.getItemElements = function() {
      return this.items.map(function(e) {
          return e.element
      })
  }, h.layout = function() {
      this._resetLayout(), this._manageStamps();
      var e = this._getOption("layoutInstant"),
          t = void 0 !== e ? e : !this._isLayoutInited;
      this.layoutItems(this.items, t), this._isLayoutInited = !0
  }, h._init = h.layout, h._resetLayout = function() {
      this.getSize()
  }, h.getSize = function() {
      this.size = i(this.element)
  }, h._getMeasurement = function(e, t) {
      var o, n = this.options[e];
      n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[e] = o ? i(o)[t] : n) : this[e] = 0
  }, h.layoutItems = function(e, t) {
      e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
  }, h._getItemsForLayout = function(e) {
      return e.filter(function(e) {
          return !e.isIgnored
      })
  }, h._layoutItems = function(e, t) {
      if (this._emitCompleteOnItems("layout", e), e && e.length) {
          var i = [];
          e.forEach(function(e) {
              var o = this._getItemLayoutPosition(e);
              o.item = e, o.isInstant = t || e.isLayoutInstant, i.push(o)
          }, this), this._processLayoutQueue(i)
      }
  }, h._getItemLayoutPosition = function() {
      return {
          x: 0,
          y: 0
      }
  }, h._processLayoutQueue = function(e) {
      this.updateStagger(), e.forEach(function(e, t) {
          this._positionItem(e.item, e.x, e.y, e.isInstant, t)
      }, this)
  }, h.updateStagger = function() {
      var e = this.options.stagger; {
          if (null !== e && void 0 !== e) return this.stagger = a(e), this.stagger;
          this.stagger = 0
      }
  }, h._positionItem = function(e, t, i, o, n) {
      o ? e.goTo(t, i) : (e.stagger(n * this.stagger), e.moveTo(t, i))
  }, h._postLayout = function() {
      this.resizeContainer()
  }, h.resizeContainer = function() {
      if (this._getOption("resizeContainer")) {
          var e = this._getContainerSize();
          e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
      }
  }, h._getContainerSize = c, h._setContainerMeasure = function(e, t) {
      if (void 0 !== e) {
          var i = this.size;
          i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
      }
  }, h._emitCompleteOnItems = function(e, t) {
      function i() {
          n.dispatchEvent(e + "Complete", null, [t])
      }

      function o() {
          ++r == s && i()
      }
      var n = this,
          s = t.length;
      if (t && s) {
          var r = 0;
          t.forEach(function(t) {
              t.once(e, o)
          })
      } else i()
  }, h.dispatchEvent = function(e, t, i) {
      var o = t ? [t].concat(i) : i;
      if (this.emitEvent(e, o), d)
          if (this.$element = this.$element || d(this.element), t) {
              var n = d.Event(t);
              n.type = e, this.$element.trigger(n, i)
          } else this.$element.trigger(e, i)
  }, h.ignore = function(e) {
      var t = this.getItem(e);
      t && (t.isIgnored = !0)
  }, h.unignore = function(e) {
      var t = this.getItem(e);
      t && delete t.isIgnored
  }, h.stamp = function(e) {
      (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
  }, h.unstamp = function(e) {
      (e = this._find(e)) && e.forEach(function(e) {
          o.removeFrom(this.stamps, e), this.unignore(e)
      }, this)
  }, h._find = function(e) {
      if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), e = o.makeArray(e)
  }, h._manageStamps = function() {
      this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
  }, h._getBoundingRect = function() {
      var e = this.element.getBoundingClientRect(),
          t = this.size;
      this._boundingRect = {
          left: e.left + t.paddingLeft + t.borderLeftWidth,
          top: e.top + t.paddingTop + t.borderTopWidth,
          right: e.right - (t.paddingRight + t.borderRightWidth),
          bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
      }
  }, h._manageStamp = c, h._getElementOffset = function(e) {
      var t = e.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(e);
      return {
          left: t.left - o.left - n.marginLeft,
          top: t.top - o.top - n.marginTop,
          right: o.right - t.right - n.marginRight,
          bottom: o.bottom - t.bottom - n.marginBottom
      }
  }, h.handleEvent = o.handleEvent, h.bindResize = function() {
      e.addEventListener("resize", this), this.isResizeBound = !0
  }, h.unbindResize = function() {
      e.removeEventListener("resize", this), this.isResizeBound = !1
  }, h.onresize = function() {
      this.resize()
  }, o.debounceMethod(s, "onresize", 100), h.resize = function() {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, h.needsResizeLayout = function() {
      var e = i(this.element);
      return this.size && e && e.innerWidth !== this.size.innerWidth
  }, h.addItems = function(e) {
      var t = this._itemize(e);
      return t.length && (this.items = this.items.concat(t)), t
  }, h.appended = function(e) {
      var t = this.addItems(e);
      t.length && (this.layoutItems(t, !0), this.reveal(t))
  }, h.prepended = function(e) {
      var t = this._itemize(e);
      if (t.length) {
          var i = this.items.slice(0);
          this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
      }
  }, h.reveal = function(e) {
      if (this._emitCompleteOnItems("reveal", e), e && e.length) {
          var t = this.updateStagger();
          e.forEach(function(e, i) {
              e.stagger(i * t), e.reveal()
          })
      }
  }, h.hide = function(e) {
      if (this._emitCompleteOnItems("hide", e), e && e.length) {
          var t = this.updateStagger();
          e.forEach(function(e, i) {
              e.stagger(i * t), e.hide()
          })
      }
  }, h.revealItemElements = function(e) {
      var t = this.getItems(e);
      this.reveal(t)
  }, h.hideItemElements = function(e) {
      var t = this.getItems(e);
      this.hide(t)
  }, h.getItem = function(e) {
      for (var t = 0; t < this.items.length; t++) {
          var i = this.items[t];
          if (i.element == e) return i
      }
  }, h.getItems = function(e) {
      var t = [];
      return (e = o.makeArray(e)).forEach(function(e) {
          var i = this.getItem(e);
          i && t.push(i)
      }, this), t
  }, h.remove = function(e) {
      var t = this.getItems(e);
      this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
          e.remove(), o.removeFrom(this.items, e)
      }, this)
  }, h.destroy = function() {
      var e = this.element.style;
      e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
          e.destroy()
      }), this.unbindResize();
      var t = this.element.outlayerGUID;
      delete p[t], delete this.element.outlayerGUID, d && d.removeData(this.element, this.constructor.namespace)
  }, s.data = function(e) {
      var t = (e = o.getQueryElement(e)) && e.outlayerGUID;
      return t && p[t]
  }, s.create = function(e, t) {
      var i = r(s);
      return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, t), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = e, i.data = s.data, i.Item = r(n), o.htmlInit(i, e), d && d.bridget && d.bridget(e, i), i
  };
  var f = {
      ms: 1,
      s: 1e3
  };
  return s.Item = n, s
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, function(e) {
  "use strict";

  function t() {
      e.Item.apply(this, arguments)
  }
  var i = t.prototype = Object.create(e.Item.prototype),
      o = i._create;
  i._create = function() {
      this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
  }, i.updateSortData = function() {
      if (!this.isIgnored) {
          this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
          var e = this.layout.options.getSortData,
              t = this.layout._sorters;
          for (var i in e) {
              var o = t[i];
              this.sortData[i] = o(this.element, this)
          }
      }
  };
  var n = i.destroy;
  return i.destroy = function() {
      n.apply(this, arguments), this.css({
          display: ""
      })
  }, t
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function(e, t) {
  "use strict";

  function i(e) {
      this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
  }
  var o = i.prototype;
  return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(e) {
      o[e] = function() {
          return t.prototype[e].apply(this.isotope, arguments)
      }
  }), o.needsVerticalResizeLayout = function() {
      var t = e(this.isotope.element);
      return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
  }, o._getMeasurement = function() {
      this.isotope._getMeasurement.apply(this, arguments)
  }, o.getColumnWidth = function() {
      this.getSegmentSize("column", "Width")
  }, o.getRowHeight = function() {
      this.getSegmentSize("row", "Height")
  }, o.getSegmentSize = function(e, t) {
      var i = e + t,
          o = "outer" + t;
      if (this._getMeasurement(i, o), !this[i]) {
          var n = this.getFirstItemSize();
          this[i] = n && n[o] || this.isotope.size["inner" + t]
      }
  }, o.getFirstItemSize = function() {
      var t = this.isotope.filteredItems[0];
      return t && t.element && e(t.element)
  }, o.layout = function() {
      this.isotope.layout.apply(this.isotope, arguments)
  }, o.getSize = function() {
      this.isotope.getSize(), this.size = this.isotope.size
  }, i.modes = {}, i.create = function(e, t) {
      function n() {
          i.apply(this, arguments)
      }
      return n.prototype = Object.create(o), n.prototype.constructor = n, t && (n.options = t), n.prototype.namespace = e, i.modes[e] = n, n
  }, i
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function(e, t) {
  var i = e.create("masonry");
  i.compatOptions.fitWidth = "isFitWidth";
  var o = i.prototype;
  return o._resetLayout = function() {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
      for (var e = 0; e < this.cols; e++) this.colYs.push(0);
      this.maxY = 0, this.horizontalColIndex = 0
  }, o.measureColumns = function() {
      if (this.getContainerWidth(), !this.columnWidth) {
          var e = this.items[0],
              i = e && e.element;
          this.columnWidth = i && t(i).outerWidth || this.containerWidth
      }
      var o = this.columnWidth += this.gutter,
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - n % o,
          a = r && r < 1 ? "round" : "floor";
      s = Math[a](s), this.cols = Math.max(s, 1)
  }, o.getContainerWidth = function() {
      var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
          i = t(e);
      this.containerWidth = i && i.innerWidth
  }, o._getItemLayoutPosition = function(e) {
      e.getSize();
      var t = e.size.outerWidth % this.columnWidth,
          i = t && t < 1 ? "round" : "ceil",
          o = Math[i](e.size.outerWidth / this.columnWidth);
      o = Math.min(o, this.cols);
      for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](o, e), s = {
              x: this.columnWidth * n.col,
              y: n.y
          }, r = n.y + e.size.outerHeight, a = o + n.col, l = n.col; l < a; l++) this.colYs[l] = r;
      return s
  }, o._getTopColPosition = function(e) {
      var t = this._getTopColGroup(e),
          i = Math.min.apply(Math, t);
      return {
          col: t.indexOf(i),
          y: i
      }
  }, o._getTopColGroup = function(e) {
      if (e < 2) return this.colYs;
      for (var t = [], i = this.cols + 1 - e, o = 0; o < i; o++) t[o] = this._getColGroupY(o, e);
      return t
  }, o._getColGroupY = function(e, t) {
      if (t < 2) return this.colYs[e];
      var i = this.colYs.slice(e, e + t);
      return Math.max.apply(Math, i)
  }, o._getHorizontalColPosition = function(e, t) {
      var i = this.horizontalColIndex % this.cols;
      i = e > 1 && i + e > this.cols ? 0 : i;
      var o = t.size.outerWidth && t.size.outerHeight;
      return this.horizontalColIndex = o ? i + e : this.horizontalColIndex, {
          col: i,
          y: this._getColGroupY(i, e)
      }
  }, o._manageStamp = function(e) {
      var i = t(e),
          o = this._getElementOffset(e),
          n = this._getOption("originLeft") ? o.left : o.right,
          s = n + i.outerWidth,
          r = Math.floor(n / this.columnWidth);
      r = Math.max(0, r);
      var a = Math.floor(s / this.columnWidth);
      a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
      for (var l = (this._getOption("originTop") ? o.top : o.bottom) + i.outerHeight, d = r; d <= a; d++) this.colYs[d] = Math.max(l, this.colYs[d])
  }, o._getContainerSize = function() {
      this.maxY = Math.max.apply(Math, this.colYs);
      var e = {
          height: this.maxY
      };
      return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
  }, o._getContainerFitWidth = function() {
      for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
      return (this.cols - e) * this.columnWidth - this.gutter
  }, o.needsResizeLayout = function() {
      var e = this.containerWidth;
      return this.getContainerWidth(), e != this.containerWidth
  }, i
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function(e, t) {
  "use strict";
  var i = e.create("masonry"),
      o = i.prototype,
      n = {
          _getElementOffset: !0,
          layout: !0,
          _getMeasurement: !0
      };
  for (var s in t.prototype) n[s] || (o[s] = t.prototype[s]);
  var r = o.measureColumns;
  o.measureColumns = function() {
      this.items = this.isotope.filteredItems, r.call(this)
  };
  var a = o._getOption;
  return o._getOption = function(e) {
      return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
  }, i
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
  "use strict";
  var t = e.create("fitRows"),
      i = t.prototype;
  return i._resetLayout = function() {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, i._getItemLayoutPosition = function(e) {
      e.getSize();
      var t = e.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY);
      var o = {
          x: this.x,
          y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, o
  }, i._getContainerSize = function() {
      return {
          height: this.maxY
      }
  }, t
}),
function(e, t) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function(e) {
  "use strict";
  var t = e.create("vertical", {
          horizontalAlignment: 0
      }),
      i = t.prototype;
  return i._resetLayout = function() {
      this.y = 0
  }, i._getItemLayoutPosition = function(e) {
      e.getSize();
      var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
          i = this.y;
      return this.y += e.size.outerHeight, {
          x: t,
          y: i
      }
  }, i._getContainerSize = function() {
      return {
          height: this.y
      }
  }, t
}),
function(e, t) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
      return t(e, i, o, n, s, r, a)
  }) : "object" == typeof module && module.exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
}(window, function(e, t, i, o, n, s, r) {
  function a(e, t) {
      return function(i, o) {
          for (var n = 0; n < e.length; n++) {
              var s = e[n],
                  r = i.sortData[s],
                  a = o.sortData[s];
              if (r > a || r < a) {
                  var l = (void 0 !== t[s] ? t[s] : t) ? 1 : -1;
                  return (r > a ? 1 : -1) * l
              }
          }
          return 0
      }
  }
  var l = e.jQuery,
      d = String.prototype.trim ? function(e) {
          return e.trim()
      } : function(e) {
          return e.replace(/^\s+|\s+$/g, "")
      },
      c = t.create("isotope", {
          layoutMode: "masonry",
          isJQueryFiltering: !0,
          sortAscending: !0
      });
  c.Item = s, c.LayoutMode = r;
  var u = c.prototype;
  u._create = function() {
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
      for (var e in r.modes) this._initLayoutMode(e)
  }, u.reloadItems = function() {
      this.itemGUID = 0, t.prototype.reloadItems.call(this)
  }, u._itemize = function() {
      for (var e = t.prototype._itemize.apply(this, arguments), i = 0; i < e.length; i++) e[i].id = this.itemGUID++;
      return this._updateItemsSortData(e), e
  }, u._initLayoutMode = function(e) {
      var t = r.modes[e],
          i = this.options[e] || {};
      this.options[e] = t.options ? n.extend(t.options, i) : i, this.modes[e] = new t(this)
  }, u.layout = function() {
      this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange()
  }, u._layout = function() {
      var e = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
  }, u.arrange = function(e) {
      this.option(e), this._getIsInstant();
      var t = this._filter(this.items);
      this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
  }, u._init = u.arrange, u._hideReveal = function(e) {
      this.reveal(e.needReveal), this.hide(e.needHide)
  }, u._getIsInstant = function() {
      var e = this._getOption("layoutInstant"),
          t = void 0 !== e ? e : !this._isLayoutInited;
      return this._isInstant = t, t
  }, u._bindArrangeComplete = function() {
      function e() {
          t && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
      }
      var t, i, o, n = this;
      this.once("layoutComplete", function() {
          t = !0, e()
      }), this.once("hideComplete", function() {
          i = !0, e()
      }), this.once("revealComplete", function() {
          o = !0, e()
      })
  }, u._filter = function(e) {
      var t = this.options.filter;
      t = t || "*";
      for (var i = [], o = [], n = [], s = this._getFilterTest(t), r = 0; r < e.length; r++) {
          var a = e[r];
          if (!a.isIgnored) {
              var l = s(a);
              l && i.push(a), l && a.isHidden ? o.push(a) : l || a.isHidden || n.push(a)
          }
      }
      return {
          matches: i,
          needReveal: o,
          needHide: n
      }
  }, u._getFilterTest = function(e) {
      return l && this.options.isJQueryFiltering ? function(t) {
          return l(t.element).is(e)
      } : "function" == typeof e ? function(t) {
          return e(t.element)
      } : function(t) {
          return o(t.element, e)
      }
  }, u.updateSortData = function(e) {
      var t;
      e ? (e = n.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
  }, u._getSorters = function() {
      var e = this.options.getSortData;
      for (var t in e) {
          var i = e[t];
          this._sorters[t] = p(i)
      }
  }, u._updateItemsSortData = function(e) {
      for (var t = e && e.length, i = 0; t && i < t; i++) e[i].updateSortData()
  };
  var p = function() {
      function e(e, t) {
          return e ? function(t) {
              return t.getAttribute(e)
          } : function(e) {
              var i = e.querySelector(t);
              return i && i.textContent
          }
      }
      return function(t) {
          if ("string" != typeof t) return t;
          var i = d(t).split(" "),
              o = i[0],
              n = o.match(/^\[(.+)\]$/),
              s = e(n && n[1], o),
              r = c.sortDataParsers[i[1]];
          return t = r ? function(e) {
              return e && r(s(e))
          } : function(e) {
              return e && s(e)
          }
      }
  }();
  c.sortDataParsers = {
      parseInt: function(e) {
          return parseInt(e, 10)
      },
      parseFloat: function(e) {
          return parseFloat(e)
      }
  }, u._sort = function() {
      if (this.options.sortBy) {
          var e = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
          var t = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(t)
      }
  }, u._getIsSameSortBy = function(e) {
      for (var t = 0; t < e.length; t++)
          if (e[t] != this.sortHistory[t]) return !1;
      return !0
  }, u._mode = function() {
      var e = this.options.layoutMode,
          t = this.modes[e];
      if (!t) throw new Error("No layout mode: " + e);
      return t.options = this.options[e], t
  }, u._resetLayout = function() {
      t.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, u._getItemLayoutPosition = function(e) {
      return this._mode()._getItemLayoutPosition(e)
  }, u._manageStamp = function(e) {
      this._mode()._manageStamp(e)
  }, u._getContainerSize = function() {
      return this._mode()._getContainerSize()
  }, u.needsResizeLayout = function() {
      return this._mode().needsResizeLayout()
  }, u.appended = function(e) {
      var t = this.addItems(e);
      if (t.length) {
          var i = this._filterRevealAdded(t);
          this.filteredItems = this.filteredItems.concat(i)
      }
  }, u.prepended = function(e) {
      var t = this._itemize(e);
      if (t.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(t);
          this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items)
      }
  }, u._filterRevealAdded = function(e) {
      var t = this._filter(e);
      return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
  }, u.insert = function(e) {
      var t = this.addItems(e);
      if (t.length) {
          var i, o, n = t.length;
          for (i = 0; i < n; i++) o = t[i], this.element.appendChild(o.element);
          var s = this._filter(t).matches;
          for (i = 0; i < n; i++) t[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete t[i].isLayoutInstant;
          this.reveal(s)
      }
  };
  var h = u.remove;
  return u.remove = function(e) {
      e = n.makeArray(e);
      var t = this.getItems(e);
      h.call(this, e);
      for (var i = t && t.length, o = 0; i && o < i; o++) {
          var s = t[o];
          n.removeFrom(this.filteredItems, s)
      }
  }, u.shuffle = function() {
      for (var e = 0; e < this.items.length; e++) this.items[e].sortData.random = Math.random();
      this.options.sortBy = "random", this._sort(), this._layout()
  }, u._noTransition = function(e, t) {
      var i = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var o = e.apply(this, t);
      return this.options.transitionDuration = i, o
  }, u.getFilteredItemElements = function() {
      return this.filteredItems.map(function(e) {
          return e.element
      })
  }, c
}),
function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  var t = -1,
      i = -1,
      o = function(e) {
          return parseFloat(e) || 0
      },
      n = function(t) {
          var i = null,
              n = [];
          return e(t).each(function() {
              var t = e(this),
                  s = t.offset().top - o(t.css("margin-top")),
                  r = n.length > 0 ? n[n.length - 1] : null;
              null === r ? n.push(t) : Math.floor(Math.abs(i - s)) <= 1 ? n[n.length - 1] = r.add(t) : n.push(t), i = s
          }), n
      },
      s = function(t) {
          var i = {
              byRow: !0,
              property: "height",
              target: null,
              remove: !1
          };
          return "object" == typeof t ? e.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0), i)
      },
      r = e.fn.matchHeight = function(t) {
          var i = s(t);
          if (i.remove) {
              var o = this;
              return this.css(i.property, ""), e.each(r._groups, function(e, t) {
                  t.elements = t.elements.not(o)
              }), this
          }
          return this.length <= 1 && !i.target ? this : (r._groups.push({
              elements: this,
              options: i
          }), r._apply(this, i), this)
      };
  r.version = "0.7.2", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = n, r._parse = o, r._parseOptions = s, r._apply = function(t, i) {
      var a = s(i),
          l = e(t),
          d = [l],
          c = e(window).scrollTop(),
          u = e("html").outerHeight(!0),
          p = l.parents().filter(":hidden");
      return p.each(function() {
          var t = e(this);
          t.data("style-cache", t.attr("style"))
      }), p.css("display", "block"), a.byRow && !a.target && (l.each(function() {
          var t = e(this),
              i = t.css("display");
          "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"), t.data("style-cache", t.attr("style")), t.css({
              display: i,
              "padding-top": "0",
              "padding-bottom": "0",
              "margin-top": "0",
              "margin-bottom": "0",
              "border-top-width": "0",
              "border-bottom-width": "0",
              height: "100px",
              overflow: "hidden"
          })
      }), d = n(l), l.each(function() {
          var t = e(this);
          t.attr("style", t.data("style-cache") || "")
      })), e.each(d, function(t, i) {
          var n = e(i),
              s = 0;
          if (a.target) s = a.target.outerHeight(!1);
          else {
              if (a.byRow && n.length <= 1) return void n.css(a.property, "");
              n.each(function() {
                  var t = e(this),
                      i = t.attr("style"),
                      o = t.css("display");
                  "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block");
                  var n = {
                      display: o
                  };
                  n[a.property] = "", t.css(n), t.outerHeight(!1) > s && (s = t.outerHeight(!1)), i ? t.attr("style", i) : t.css("display", "")
              })
          }
          n.each(function() {
              var t = e(this),
                  i = 0;
              a.target && t.is(a.target) || ("border-box" !== t.css("box-sizing") && (i += o(t.css("border-top-width")) + o(t.css("border-bottom-width")), i += o(t.css("padding-top")) + o(t.css("padding-bottom"))), t.css(a.property, s - i + "px"))
          })
      }), p.each(function() {
          var t = e(this);
          t.attr("style", t.data("style-cache") || null)
      }), r._maintainScroll && e(window).scrollTop(c / u * e("html").outerHeight(!0)), this
  }, r._applyDataApi = function() {
      var t = {};
      e("[data-match-height], [data-mh]").each(function() {
          var i = e(this),
              o = i.attr("data-mh") || i.attr("data-match-height");
          t[o] = o in t ? t[o].add(i) : i
      }), e.each(t, function() {
          this.matchHeight(!0)
      })
  };
  var a = function(t) {
      r._beforeUpdate && r._beforeUpdate(t, r._groups), e.each(r._groups, function() {
          r._apply(this.elements, this.options)
      }), r._afterUpdate && r._afterUpdate(t, r._groups)
  };
  r._update = function(o, n) {
      if (n && "resize" === n.type) {
          var s = e(window).width();
          if (s === t) return;
          t = s
      }
      o ? -1 === i && (i = setTimeout(function() {
          a(n), i = -1
      }, r._throttle)) : a(n)
  }, e(r._applyDataApi);
  var l = e.fn.on ? "on" : "bind";
  e(window)[l]("load", function(e) {
      r._update(!1, e)
  }), e(window)[l]("resize orientationchange", function(e) {
      r._update(!0, e)
  })
}),
function() {
  "use strict";

  function e(e, t, i) {
      var o = new c(t);
      switch (e) {
          case "open":
              o.open(i);
              break;
          case "close":
              o.close(i);
              break;
          case "toggle":
              o.toggle(i);
              break;
          default:
              u.error("Method " + e + " does not exist on jQuery.sidr")
      }
  }

  function t(e) {
      return "status" === e ? r : f[e] ? f[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof e && "string" != typeof e && e ? void p.error("Method " + e + " does not exist on jQuery.sidr") : f.toggle.apply(this, arguments)
  }

  function i(e, t) {
      if ("function" == typeof t.source) {
          var i = t.source(name);
          e.html(i)
      } else if ("string" == typeof t.source && a.isUrl(t.source)) m.get(t.source, function(t) {
          e.html(t)
      });
      else if ("string" == typeof t.source) {
          var o = "",
              n = t.source.split(",");
          if (m.each(n, function(e, t) {
                  o += '<div class="sidr-inner">' + m(t).html() + "</div>"
              }), t.renaming) {
              var s = m("<div />").html(o);
              s.find("*").each(function(e, t) {
                  var i = m(t);
                  a.addPrefixes(i)
              }), o = s.html()
          }
          e.html(o)
      } else null !== t.source && m.error("Invalid Sidr Source");
      return e
  }
  var o = {};
  o.classCallCheck = function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }, o.createClass = function() {
      function e(e, t) {
          for (var i = 0; i < t.length; i++) {
              var o = t[i];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
      }
      return function(t, i, o) {
          return i && e(t.prototype, i), o && e(t, o), t
      }
  }();
  var n, s, r = {
          moving: !1,
          opened: !1
      },
      a = {
          isUrl: function(e) {
              return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e)
          },
          addPrefixes: function(e) {
              this.addPrefix(e, "id"), this.addPrefix(e, "class"), e.removeAttr("style")
          },
          addPrefix: function(e, t) {
              var i = e.attr(t);
              "string" == typeof i && "" !== i && "sidr-inner" !== i && e.attr(t, i.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-" + t + "-$1"))
          },
          transitions: function() {
              var e = (document.body || document.documentElement).style,
                  t = !1,
                  i = "transition";
              return i in e ? t = !0 : function() {
                  var o = ["moz", "webkit", "o", "ms"],
                      n = void 0,
                      s = void 0;
                  i = i.charAt(0).toUpperCase() + i.substr(1), t = function() {
                      for (s = 0; s < o.length; s++)
                          if ((n = o[s]) + i in e) return !0;
                      return !1
                  }(), i = t ? "-" + n.toLowerCase() + "-" + i.toLowerCase() : null
              }(), {
                  supported: t,
                  property: i
              }
          }()
      },
      l = jQuery,
      d = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
      c = function() {
          function e(t) {
              o.classCallCheck(this, e), this.name = t, this.item = l("#" + t), this.openClass = "sidr" === t ? "sidr-open" : "sidr-open " + t + "-open", this.menuWidth = this.item.outerWidth(!0), this.speed = this.item.data("speed"), this.side = this.item.data("side"), this.displace = this.item.data("displace"), this.timing = this.item.data("timing"), this.method = this.item.data("method"), this.onOpenCallback = this.item.data("onOpen"), this.onCloseCallback = this.item.data("onClose"), this.onOpenEndCallback = this.item.data("onOpenEnd"), this.onCloseEndCallback = this.item.data("onCloseEnd"), this.body = l(this.item.data("body"))
          }
          return o.createClass(e, [{
              key: "getAnimation",
              value: function(e, t) {
                  var i = {},
                      o = this.side;
                  return i[o] = "open" === e && "body" === t ? this.menuWidth + "px" : "close" === e && "menu" === t ? "-" + this.menuWidth + "px" : 0, i
              }
          }, {
              key: "prepareBody",
              value: function(e) {
                  var t = "open" === e ? "hidden" : "";
                  if (this.body.is("body")) {
                      var i = l("html"),
                          o = i.scrollTop();
                      i.css("overflow-x", t).scrollTop(o)
                  }
              }
          }, {
              key: "openBody",
              value: function() {
                  if (this.displace) {
                      var e = a.transitions,
                          t = this.body;
                      if (e.supported) t.css(e.property, this.side + " " + this.speed / 1e3 + "s " + this.timing).css(this.side, 0).css({
                          width: t.width(),
                          position: "absolute"
                      }), t.css(this.side, this.menuWidth + "px");
                      else {
                          var i = this.getAnimation("open", "body");
                          t.css({
                              width: t.width(),
                              position: "absolute"
                          }).animate(i, {
                              queue: !1,
                              duration: this.speed
                          })
                      }
                  }
              }
          }, {
              key: "onCloseBody",
              value: function() {
                  var e = a.transitions,
                      t = {
                          width: "",
                          position: "",
                          right: "",
                          left: ""
                      };
                  e.supported && (t[e.property] = ""), this.body.css(t).unbind(d)
              }
          }, {
              key: "closeBody",
              value: function() {
                  var e = this;
                  if (this.displace)
                      if (a.transitions.supported) this.body.css(this.side, 0).one(d, function() {
                          e.onCloseBody()
                      });
                      else {
                          var t = this.getAnimation("close", "body");
                          this.body.animate(t, {
                              queue: !1,
                              duration: this.speed,
                              complete: function() {
                                  e.onCloseBody()
                              }
                          })
                      }
              }
          }, {
              key: "moveBody",
              value: function(e) {
                  "open" === e ? this.openBody() : this.closeBody()
              }
          }, {
              key: "onOpenMenu",
              value: function(e) {
                  var t = this.name;
                  r.moving = !1, r.opened = t, this.item.unbind(d), this.body.removeClass("sidr-animating").addClass(this.openClass), this.onOpenEndCallback(), "function" == typeof e && e(t)
              }
          }, {
              key: "openMenu",
              value: function(e) {
                  var t = this,
                      i = this.item;
                  if (a.transitions.supported) i.css(this.side, 0).one(d, function() {
                      t.onOpenMenu(e)
                  });
                  else {
                      var o = this.getAnimation("open", "menu");
                      i.css("display", "block").animate(o, {
                          queue: !1,
                          duration: this.speed,
                          complete: function() {
                              t.onOpenMenu(e)
                          }
                      })
                  }
              }
          }, {
              key: "onCloseMenu",
              value: function(e) {
                  this.item.css({
                      left: "",
                      right: ""
                  }).unbind(d), l("html").css("overflow-x", ""), r.moving = !1, r.opened = !1, this.body.removeClass("sidr-animating").removeClass(this.openClass), this.onCloseEndCallback(), "function" == typeof e && e(name)
              }
          }, {
              key: "closeMenu",
              value: function(e) {
                  var t = this,
                      i = this.item;
                  if (a.transitions.supported) i.css(this.side, "").one(d, function() {
                      t.onCloseMenu(e)
                  });
                  else {
                      var o = this.getAnimation("close", "menu");
                      i.animate(o, {
                          queue: !1,
                          duration: this.speed,
                          complete: function() {
                              t.onCloseMenu()
                          }
                      })
                  }
              }
          }, {
              key: "moveMenu",
              value: function(e, t) {
                  this.body.addClass("sidr-animating"), "open" === e ? this.openMenu(t) : this.closeMenu(t)
              }
          }, {
              key: "move",
              value: function(e, t) {
                  r.moving = !0, this.prepareBody(e), this.moveBody(e), this.moveMenu(e, t)
              }
          }, {
              key: "open",
              value: function(t) {
                  var i = this;
                  r.opened === this.name || r.moving || (!1 === r.opened ? (this.move("open", t), this.onOpenCallback()) : new e(r.opened).close(function() {
                      i.open(t)
                  }))
              }
          }, {
              key: "close",
              value: function(e) {
                  r.opened !== this.name || r.moving || (this.move("close", e), this.onCloseCallback())
              }
          }, {
              key: "toggle",
              value: function(e) {
                  r.opened === this.name ? this.close(e) : this.open(e)
              }
          }]), e
      }(),
      u = jQuery,
      p = jQuery,
      h = ["open", "close", "toggle"],
      f = {};
  for (n = 0; n < h.length; n++) f[s = h[n]] = function(t) {
      return function(i, o) {
          "function" == typeof i ? (o = i, i = "sidr") : i || (i = "sidr"), e(t, i, o)
      }
  }(s);
  var m = jQuery;
  jQuery.sidr = t, jQuery.fn.sidr = function(e) {
      var o = a.transitions,
          n = m.extend({
              name: "sidr",
              speed: 200,
              side: "left",
              source: null,
              renaming: !0,
              body: "body",
              displace: !0,
              timing: "ease",
              method: "toggle",
              bind: "touchstart click",
              onOpen: function() {},
              onClose: function() {},
              onOpenEnd: function() {},
              onCloseEnd: function() {}
          }, e),
          s = n.name,
          l = m("#" + s);
      return 0 === l.length && (l = m("<div />").attr("id", s).appendTo(m("body"))), o.supported && l.css(o.property, n.side + " " + n.speed / 1e3 + "s " + n.timing), l.addClass("sidr").addClass(n.side).data({
          speed: n.speed,
          side: n.side,
          body: n.body,
          displace: n.displace,
          timing: n.timing,
          method: n.method,
          onOpen: n.onOpen,
          onClose: n.onClose,
          onOpenEnd: n.onOpenEnd,
          onCloseEnd: n.onCloseEnd
      }), l = i(l, n), this.each(function() {
          var e = m(this),
              i = !1;
          e.data("sidr") || (r.moving = !1, r.opened = !1, e.data("sidr", s), e.bind(n.bind, function(e) {
              e.preventDefault(), i || (i = !0, t(n.method, s), setTimeout(function() {
                  i = !1
              }, 100))
          }))
      })
  }
}(),
function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  "use strict";
  var t = window.Slick || {};
  (t = function() {
      var t = 0;
      return function(i, o) {
          var n, s = this;
          s.defaults = {
              accessibility: !0,
              adaptiveHeight: !1,
              appendArrows: e(i),
              appendDots: e(i),
              arrows: !0,
              asNavFor: null,
              prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
              nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
              autoplay: !1,
              autoplaySpeed: 3e3,
              centerMode: !1,
              centerPadding: "50px",
              cssEase: "ease",
              customPaging: function(t, i) {
                  return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
              },
              dots: !1,
              dotsClass: "slick-dots",
              draggable: !0,
              easing: "linear",
              edgeFriction: .35,
              fade: !1,
              focusOnSelect: !1,
              infinite: !0,
              initialSlide: 0,
              lazyLoad: "ondemand",
              mobileFirst: !1,
              pauseOnHover: !0,
              pauseOnFocus: !0,
              pauseOnDotsHover: !1,
              respondTo: "window",
              responsive: null,
              rows: 1,
              rtl: !1,
              slide: "",
              slidesPerRow: 1,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              swipe: !0,
              swipeToSlide: !1,
              touchMove: !0,
              touchThreshold: 5,
              useCSS: !0,
              useTransform: !0,
              variableWidth: !1,
              vertical: !1,
              verticalSwiping: !1,
              waitForAnimate: !0,
              zIndex: 1e3
          }, s.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1
          }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, n = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, o, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
      }
  }()).prototype.activateADA = function() {
      this.$slideTrack.find(".slick-active").attr({
          "aria-hidden": "false"
      }).find("a, input, button, select").attr({
          tabindex: "0"
      })
  }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, o) {
      var n = this;
      if ("boolean" == typeof i) o = i, i = null;
      else if (i < 0 || i >= n.slideCount) return !1;
      n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? e(t).appendTo(n.$slideTrack) : o ? e(t).insertBefore(n.$slides.eq(i)) : e(t).insertAfter(n.$slides.eq(i)) : !0 === o ? e(t).prependTo(n.$slideTrack) : e(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, i) {
          e(i).attr("data-slick-index", t)
      }), n.$slidesCache = n.$slides, n.reinit()
  }, t.prototype.animateHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({
              height: t
          }, e.options.speed)
      }
  }, t.prototype.animateSlide = function(t, i) {
      var o = {},
          n = this;
      n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
          left: t
      }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
          top: t
      }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), e({
          animStart: n.currentLeft
      }).animate({
          animStart: t
      }, {
          duration: n.options.speed,
          easing: n.options.easing,
          step: function(e) {
              e = Math.ceil(e), !1 === n.options.vertical ? (o[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(o)) : (o[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(o))
          },
          complete: function() {
              i && i.call()
          }
      })) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? o[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(o), i && setTimeout(function() {
          n.disableTransition(), i.call()
      }, n.options.speed))
  }, t.prototype.getNavTarget = function() {
      var t = this,
          i = t.options.asNavFor;
      return i && null !== i && (i = e(i).not(t.$slider)), i
  }, t.prototype.asNavFor = function(t) {
      var i = this.getNavTarget();
      null !== i && "object" == typeof i && i.each(function() {
          var i = e(this).slick("getSlick");
          i.unslicked || i.slideHandler(t, !0)
      })
  }, t.prototype.applyTransition = function(e) {
      var t = this,
          i = {};
      !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }, t.prototype.autoPlay = function() {
      var e = this;
      e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }, t.prototype.autoPlayClear = function() {
      var e = this;
      e.autoPlayTimer && clearInterval(e.autoPlayTimer)
  }, t.prototype.autoPlayIterator = function() {
      var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
      e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
  }, t.prototype.buildArrows = function() {
      var t = this;
      !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
          "aria-disabled": "true",
          tabindex: "-1"
      }))
  }, t.prototype.buildDots = function() {
      var t, i, o = this;
      if (!0 === o.options.dots) {
          for (o.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(o.options.dotsClass), t = 0; t <= o.getDotCount(); t += 1) i.append(e("<li />").append(o.options.customPaging.call(this, o, t)));
          o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
      }
  }, t.prototype.buildOut = function() {
      var t = this;
      t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
          e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
      }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
  }, t.prototype.buildRows = function() {
      var e, t, i, o, n, s, r, a = this;
      if (o = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
          for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(s.length / r), e = 0; e < n; e++) {
              var l = document.createElement("div");
              for (t = 0; t < a.options.rows; t++) {
                  var d = document.createElement("div");
                  for (i = 0; i < a.options.slidesPerRow; i++) {
                      var c = e * r + (t * a.options.slidesPerRow + i);
                      s.get(c) && d.appendChild(s.get(c))
                  }
                  l.appendChild(d)
              }
              o.appendChild(l)
          }
          a.$slider.empty().append(o), a.$slider.children().children().children().css({
              width: 100 / a.options.slidesPerRow + "%",
              display: "inline-block"
          })
      }
  }, t.prototype.checkResponsive = function(t, i) {
      var o, n, s, r = this,
          a = !1,
          l = r.$slider.width(),
          d = window.innerWidth || e(window).width();
      if ("window" === r.respondTo ? s = d : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
          n = null;
          for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[o] && (n = r.breakpoints[o]) : s > r.breakpoints[o] && (n = r.breakpoints[o]));
          null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = n), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
      }
  }, t.prototype.changeSlide = function(t, i) {
      var o, n, s, r = this,
          a = e(t.currentTarget);
      switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, o = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
          case "previous":
              n = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, i);
              break;
          case "next":
              n = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, i);
              break;
          case "index":
              var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
              r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
              break;
          default:
              return
      }
  }, t.prototype.checkNavigable = function(e) {
      var t, i;
      if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
      else
          for (var o in t) {
              if (e < t[o]) {
                  e = i;
                  break
              }
              i = t[o]
          }
      return e
  }, t.prototype.cleanUpEvents = function() {
      var t = this;
      t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.cleanUpSlideEvents = function() {
      var t = this;
      t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.cleanUpRows = function() {
      var e, t = this;
      t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
  }, t.prototype.clickHandler = function(e) {
      !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
  }, t.prototype.destroy = function(t) {
      var i = this;
      i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
          e(this).attr("style", e(this).data("originalStyling"))
      }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
  }, t.prototype.disableTransition = function(e) {
      var t = this,
          i = {};
      i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }, t.prototype.fadeSlide = function(e, t) {
      var i = this;
      !1 === i.cssTransitions ? (i.$slides.eq(e).css({
          zIndex: i.options.zIndex
      }), i.$slides.eq(e).animate({
          opacity: 1
      }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
          opacity: 1,
          zIndex: i.options.zIndex
      }), t && setTimeout(function() {
          i.disableTransition(e), t.call()
      }, i.options.speed))
  }, t.prototype.fadeSlideOut = function(e) {
      var t = this;
      !1 === t.cssTransitions ? t.$slides.eq(e).animate({
          opacity: 0,
          zIndex: t.options.zIndex - 2
      }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
          opacity: 0,
          zIndex: t.options.zIndex - 2
      }))
  }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
      var t = this;
      null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
  }, t.prototype.focusHandler = function() {
      var t = this;
      t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
          i.stopImmediatePropagation();
          var o = e(this);
          setTimeout(function() {
              t.options.pauseOnFocus && (t.focussed = o.is(":focus"), t.autoPlay())
          }, 0)
      })
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
      return this.currentSlide
  }, t.prototype.getDotCount = function() {
      var e = this,
          t = 0,
          i = 0,
          o = 0;
      if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++o;
          else
              for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else if (!0 === e.options.centerMode) o = e.slideCount;
      else if (e.options.asNavFor)
          for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
      else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
      return o - 1
  }, t.prototype.getLeft = function(e) {
      var t, i, o, n = this,
          s = 0;
      return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = i * n.options.slidesToShow * -1), n.slideCount % n.options.slidesToScroll != 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, s = (n.options.slidesToShow - (e - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, s = n.slideCount % n.options.slidesToScroll * i * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, s = (e + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, s = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), t = !1 === n.options.vertical ? e * n.slideWidth * -1 + n.slideOffset : e * i * -1 + s, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), t = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), t = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (n.$list.width() - o.outerWidth()) / 2)), t
  }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
      return this.options[e]
  }, t.prototype.getNavigableIndexes = function() {
      var e, t = this,
          i = 0,
          o = 0,
          n = [];
      for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) n.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
      return n
  }, t.prototype.getSlick = function() {
      return this
  }, t.prototype.getSlideCount = function() {
      var t, i, o = this;
      return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(n, s) {
          if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * o.swipeLeft) return t = s, !1
      }), Math.abs(e(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
  }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
      this.changeSlide({
          data: {
              message: "index",
              index: parseInt(e)
          }
      }, t)
  }, t.prototype.init = function(t) {
      var i = this;
      e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
  }, t.prototype.initADA = function() {
      var t = this;
      t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
          "aria-hidden": "true",
          tabindex: "-1"
      }).find("a, input, button, select").attr({
          tabindex: "-1"
      }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
          e(this).attr("role", "option");
          var o = t.options.centerMode ? i : Math.floor(i / t.options.slidesToShow);
          !0 === t.options.dots && e(this).attr("aria-describedby", "slick-slide" + t.instanceUid + o)
      }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
          e(this).attr({
              role: "presentation",
              "aria-selected": "false",
              "aria-controls": "navigation" + t.instanceUid + i,
              id: "slick-slide" + t.instanceUid + i
          })
      }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
  }, t.prototype.initArrowEvents = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
          message: "previous"
      }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
          message: "next"
      }, e.changeSlide))
  }, t.prototype.initDotEvents = function() {
      var t = this;
      !0 === t.options.dots && e("li", t.$dots).on("click.slick", {
          message: "index"
      }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.initSlideEvents = function() {
      var t = this;
      t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
  }, t.prototype.initializeEvents = function() {
      var t = this;
      t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
          action: "start"
      }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
          action: "move"
      }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
          action: "end"
      }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
          action: "end"
      }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
  }, t.prototype.initUI = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
  }, t.prototype.keyHandler = function(e) {
      var t = this;
      e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
          data: {
              message: !0 === t.options.rtl ? "next" : "previous"
          }
      }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
          data: {
              message: !0 === t.options.rtl ? "previous" : "next"
          }
      }))
  }, t.prototype.lazyLoad = function() {
      function t(t) {
          e("img[data-lazy]", t).each(function() {
              var t = e(this),
                  i = e(this).attr("data-lazy"),
                  o = e(this).attr("data-srcset"),
                  n = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                  r = document.createElement("img");
              r.onload = function() {
                  t.animate({
                      opacity: 0
                  }, 100, function() {
                      o && (t.attr("srcset", o), n && t.attr("sizes", n)), t.attr("src", i).animate({
                          opacity: 1
                      }, 200, function() {
                          t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                      }), s.$slider.trigger("lazyLoaded", [s, t, i])
                  })
              }, r.onerror = function() {
                  t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i])
              }, r.src = i
          })
      }
      var i, o, n, s = this;
      if (!0 === s.options.centerMode ? !0 === s.options.infinite ? n = (o = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), n = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, n = Math.ceil(o + s.options.slidesToShow), !0 === s.options.fade && (o > 0 && o--, n <= s.slideCount && n++)), i = s.$slider.find(".slick-slide").slice(o, n), "anticipated" === s.options.lazyLoad)
          for (var r = o - 1, a = n, l = s.$slider.find(".slick-slide"), d = 0; d < s.options.slidesToScroll; d++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
      t(i), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
  }, t.prototype.loadSlider = function() {
      var e = this;
      e.setPosition(), e.$slideTrack.css({
          opacity: 1
      }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }, t.prototype.next = t.prototype.slickNext = function() {
      this.changeSlide({
          data: {
              message: "next"
          }
      })
  }, t.prototype.orientationChange = function() {
      var e = this;
      e.checkResponsive(), e.setPosition()
  }, t.prototype.pause = t.prototype.slickPause = function() {
      var e = this;
      e.autoPlayClear(), e.paused = !0
  }, t.prototype.play = t.prototype.slickPlay = function() {
      var e = this;
      e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
  }, t.prototype.postSlide = function(e) {
      var t = this;
      t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
  }, t.prototype.prev = t.prototype.slickPrev = function() {
      this.changeSlide({
          data: {
              message: "previous"
          }
      })
  }, t.prototype.preventDefault = function(e) {
      e.preventDefault()
  }, t.prototype.progressiveLazyLoad = function(t) {
      t = t || 1;
      var i, o, n, s, r, a = this,
          l = e("img[data-lazy]", a.$slider);
      l.length ? (i = l.first(), o = i.attr("data-lazy"), n = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
          n && (i.attr("srcset", n), s && i.attr("sizes", s)), i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, o]), a.progressiveLazyLoad()
      }, r.onerror = function() {
          t < 3 ? setTimeout(function() {
              a.progressiveLazyLoad(t + 1)
          }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, o]), a.progressiveLazyLoad())
      }, r.src = o) : a.$slider.trigger("allImagesLoaded", [a])
  }, t.prototype.refresh = function(t) {
      var i, o, n = this;
      o = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > o && (n.currentSlide = o), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {
          currentSlide: i
      }), n.init(), t || n.changeSlide({
          data: {
              message: "index",
              index: i
          }
      }, !1)
  }, t.prototype.registerBreakpoints = function() {
      var t, i, o, n = this,
          s = n.options.responsive || null;
      if ("array" === e.type(s) && s.length) {
          n.respondTo = n.options.respondTo || "window";
          for (t in s)
              if (o = n.breakpoints.length - 1, s.hasOwnProperty(t)) {
                  for (i = s[t].breakpoint; o >= 0;) n.breakpoints[o] && n.breakpoints[o] === i && n.breakpoints.splice(o, 1), o--;
                  n.breakpoints.push(i), n.breakpointSettings[i] = s[t].settings
              } n.breakpoints.sort(function(e, t) {
              return n.options.mobileFirst ? e - t : t - e
          })
      }
  }, t.prototype.reinit = function() {
      var t = this;
      t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
  }, t.prototype.resize = function() {
      var t = this;
      e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
          t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
      }, 50))
  }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
      var o = this;
      if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e, o.slideCount < 1 || e < 0 || e > o.slideCount - 1) return !1;
      o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
  }, t.prototype.setCSS = function(e) {
      var t, i, o = this,
          n = {};
      !0 === o.options.rtl && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", n[o.positionProp] = e, !1 === o.transformsEnabled ? o.$slideTrack.css(n) : (n = {}, !1 === o.cssTransitions ? (n[o.animType] = "translate(" + t + ", " + i + ")", o.$slideTrack.css(n)) : (n[o.animType] = "translate3d(" + t + ", " + i + ", 0px)", o.$slideTrack.css(n)))
  }, t.prototype.setDimensions = function() {
      var e = this;
      !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
          padding: "0px " + e.options.centerPadding
      }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
          padding: e.options.centerPadding + " 0px"
      })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
      var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
      !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }, t.prototype.setFade = function() {
      var t, i = this;
      i.$slides.each(function(o, n) {
          t = i.slideWidth * o * -1, !0 === i.options.rtl ? e(n).css({
              position: "relative",
              right: t,
              top: 0,
              zIndex: i.options.zIndex - 2,
              opacity: 0
          }) : e(n).css({
              position: "relative",
              left: t,
              top: 0,
              zIndex: i.options.zIndex - 2,
              opacity: 0
          })
      }), i.$slides.eq(i.currentSlide).css({
          zIndex: i.options.zIndex - 1,
          opacity: 1
      })
  }, t.prototype.setHeight = function() {
      var e = this;
      if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t)
      }
  }, t.prototype.setOption = t.prototype.slickSetOption = function() {
      var t, i, o, n, s, r = this,
          a = !1;
      if ("object" === e.type(arguments[0]) ? (o = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[o] = n;
      else if ("multiple" === s) e.each(o, function(e, t) {
          r.options[e] = t
      });
      else if ("responsive" === s)
          for (i in n)
              if ("array" !== e.type(r.options.responsive)) r.options.responsive = [n[i]];
              else {
                  for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === n[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                  r.options.responsive.push(n[i])
              } a && (r.unload(), r.reinit())
  }, t.prototype.setPosition = function() {
      var e = this;
      e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
  }, t.prototype.setProps = function() {
      var e = this,
          t = document.body.style;
      e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
  }, t.prototype.setSlideClasses = function(e) {
      var t, i, o, n, s = this;
      i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + e, i.slice(o - t + 1, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = s.slideCount % s.options.slidesToShow, o = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - n), o + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
  }, t.prototype.setupInfinite = function() {
      var t, i, o, n = this;
      if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
          for (o = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - o; t -= 1) i = t - 1, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
          for (t = 0; t < o; t += 1) i = t, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
          n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
              e(this).attr("id", "")
          })
      }
  }, t.prototype.interrupt = function(e) {
      var t = this;
      e || t.autoPlay(), t.interrupted = e
  }, t.prototype.selectHandler = function(t) {
      var i = this,
          o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
          n = parseInt(o.attr("data-slick-index"));
      n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
  }, t.prototype.slideHandler = function(e, t, i) {
      var o, n, s, r, a, l = null,
          d = this;
      if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
          if (!1 === t && d.asNavFor(e), o = e, l = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
              d.postSlide(o)
          }) : d.postSlide(o));
          else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
          d.postSlide(o)
      }) : d.postSlide(o));
      else {
          if (d.options.autoplay && clearInterval(d.autoPlayTimer), n = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, n]), s = d.currentSlide, d.currentSlide = n, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(s), d.fadeSlide(n, function() {
              d.postSlide(n)
          })) : d.postSlide(n), void d.animateHeight();
          !0 !== i ? d.animateSlide(l, function() {
              d.postSlide(n)
          }) : d.postSlide(n)
      }
  }, t.prototype.startLoad = function() {
      var e = this;
      !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
  }, t.prototype.swipeDirection = function() {
      var e, t, i, o, n = this;
      return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(t, e), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === n.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === n.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
  }, t.prototype.swipeEnd = function(e) {
      var t, i, o = this;
      if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
      if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
      if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
          switch (i = o.swipeDirection()) {
              case "left":
              case "down":
                  t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                  break;
              case "right":
              case "up":
                  t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
          }
          "vertical" != i && (o.slideHandler(t), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
      } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
  }, t.prototype.swipeHandler = function(e) {
      var t = this;
      if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
          case "start":
              t.swipeStart(e);
              break;
          case "move":
              t.swipeMove(e);
              break;
          case "end":
              t.swipeEnd(e)
      }
  }, t.prototype.swipeMove = function(e) {
      var t, i, o, n, s, r, a = this;
      return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + o * n : a.swipeLeft = t + o * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = t + o * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
  }, t.prototype.swipeStart = function(e) {
      var t, i = this;
      if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
      void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
      var e = this;
      null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
  }, t.prototype.unload = function() {
      var t = this;
      e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, t.prototype.unslick = function(e) {
      var t = this;
      t.$slider.trigger("unslick", [t, e]), t.destroy()
  }, t.prototype.updateArrows = function() {
      var e = this;
      Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, t.prototype.updateDots = function() {
      var e = this;
      null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, t.prototype.visibility = function() {
      var e = this;
      e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
  }, e.fn.slick = function() {
      var e, i, o = this,
          n = arguments[0],
          s = Array.prototype.slice.call(arguments, 1),
          r = o.length;
      for (e = 0; e < r; e++)
          if ("object" == typeof n || void 0 === n ? o[e].slick = new t(o[e], n) : i = o[e].slick[n].apply(o[e].slick, s), void 0 !== i) return i;
      return o
  }
}),
function() {
  function e() {
      O.keyboardSupport && f("keydown", n)
  }

  function t() {
      if (!M && document.body) {
          M = !0;
          var t = document.body,
              i = document.documentElement,
              o = window.innerHeight,
              n = t.scrollHeight;
          if (A = document.compatMode.indexOf("CSS") >= 0 ? i : t, T = t, e(), top != self) L = !0;
          else if (oe && n > o && (t.offsetHeight <= o || i.offsetHeight <= o)) {
              var s = document.createElement("div");
              s.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + A.scrollHeight + "px", document.body.appendChild(s);
              var r;
              x = function() {
                  r || (r = setTimeout(function() {
                      E || (s.style.height = "0", s.style.height = A.scrollHeight + "px", r = null)
                  }, 500))
              }, setTimeout(x, 10), f("resize", x);
              var a = {
                  attributes: !0,
                  childList: !0,
                  characterData: !1
              };
              if ((j = new G(x)).observe(t, a), A.offsetHeight <= o) {
                  var l = document.createElement("div");
                  l.style.clear = "both", t.appendChild(l)
              }
          }
          O.fixedBackground || E || (t.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll")
      }
  }

  function i(e, t, i) {
      if (g(t, i), 1 != O.accelerationMax) {
          var o = Date.now() - B;
          if (o < O.accelerationDelta) {
              var n = (1 + 50 / o) / 2;
              n > 1 && (n = Math.min(n, O.accelerationMax), t *= n, i *= n)
          }
          B = Date.now()
      }
      if (q.push({
              x: t,
              y: i,
              lastX: t < 0 ? .99 : -.99,
              lastY: i < 0 ? .99 : -.99,
              start: Date.now()
          }), !F) {
          var s = V(),
              r = e === s || e === document.body;
          null == e.$scrollBehavior && h(e) && (e.$scrollBehavior = e.style.scrollBehavior, e.style.scrollBehavior = "auto");
          var a = function(o) {
              for (var n = Date.now(), s = 0, l = 0, d = 0; d < q.length; d++) {
                  var c = q[d],
                      u = n - c.start,
                      p = u >= O.animationTime,
                      h = p ? 1 : u / O.animationTime;
                  O.pulseAlgorithm && (h = S(h));
                  var f = c.x * h - c.lastX >> 0,
                      m = c.y * h - c.lastY >> 0;
                  s += f, l += m, c.lastX += f, c.lastY += m, p && (q.splice(d, 1), d--)
              }
              r ? window.scrollBy(s, l) : (s && (e.scrollLeft += s), l && (e.scrollTop += l)), t || i || (q = []), q.length ? X(a, e, 1e3 / O.frameRate + 1) : (F = !1, null != e.$scrollBehavior && (e.style.scrollBehavior = e.$scrollBehavior, e.$scrollBehavior = null))
          };
          X(a, e, 0), F = !0
      }
  }

  function o(e) {
      M || t();
      var o = e.target;
      if (e.defaultPrevented || e.ctrlKey) return !0;
      if (v(T, "embed") || v(o, "embed") && /\.pdf/i.test(o.src) || v(T, "object") || o.shadowRoot) return !0;
      var n = -e.wheelDeltaX || e.deltaX || 0,
          s = -e.wheelDeltaY || e.deltaY || 0;
      P && (e.wheelDeltaX && w(e.wheelDeltaX, 120) && (n = e.wheelDeltaX / Math.abs(e.wheelDeltaX) * -120), e.wheelDeltaY && w(e.wheelDeltaY, 120) && (s = e.wheelDeltaY / Math.abs(e.wheelDeltaY) * -120)), n || s || (s = -e.wheelDelta || 0), 1 === e.deltaMode && (n *= 40, s *= 40);
      var a = d(o);
      return a ? !!y(s) || (Math.abs(n) > 1.2 && (n *= O.stepSize / 120), Math.abs(s) > 1.2 && (s *= O.stepSize / 120), i(a, n, s), e.preventDefault(), void r()) : !L || !Z || (Object.defineProperty(e, "target", {
          value: window.frameElement
      }), parent.wheel(e))
  }

  function n(e) {
      var t = e.target,
          o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== W.spacebar;
      document.body.contains(T) || (T = document.activeElement);
      var n = /^(textarea|select|embed|object)$/i,
          s = /^(button|submit|radio|checkbox|file|color|image)$/i;
      if (e.defaultPrevented || n.test(t.nodeName) || v(t, "input") && !s.test(t.type) || v(T, "video") || $(e) || t.isContentEditable || o) return !0;
      if ((v(t, "button") || v(t, "input") && s.test(t.type)) && e.keyCode === W.spacebar) return !0;
      if (v(t, "input") && "radio" == t.type && R[e.keyCode]) return !0;
      var a = 0,
          l = 0,
          c = d(T);
      if (!c) return !L || !Z || parent.keydown(e);
      var u = c.clientHeight;
      switch (c == document.body && (u = window.innerHeight), e.keyCode) {
          case W.up:
              l = -O.arrowScroll;
              break;
          case W.down:
              l = O.arrowScroll;
              break;
          case W.spacebar:
              l = -(e.shiftKey ? 1 : -1) * u * .9;
              break;
          case W.pageup:
              l = .9 * -u;
              break;
          case W.pagedown:
              l = .9 * u;
              break;
          case W.home:
              c == document.body && document.scrollingElement && (c = document.scrollingElement), l = -c.scrollTop;
              break;
          case W.end:
              var p = c.scrollHeight - c.scrollTop - u;
              l = p > 0 ? p + 10 : 0;
              break;
          case W.left:
              a = -O.arrowScroll;
              break;
          case W.right:
              a = O.arrowScroll;
              break;
          default:
              return !0
      }
      i(c, a, l), e.preventDefault(), r()
  }

  function s(e) {
      T = e.target
  }

  function r() {
      clearTimeout(_), _ = setInterval(function() {
          N = Q = Y = {}
      }, 1e3)
  }

  function a(e, t, i) {
      for (var o = i ? N : Q, n = e.length; n--;) o[U(e[n])] = t;
      return t
  }

  function l(e, t) {
      return (t ? N : Q)[U(e)]
  }

  function d(e) {
      var t = [],
          i = document.body,
          o = A.scrollHeight;
      do {
          var n = l(e, !1);
          if (n) return a(t, n);
          if (t.push(e), o === e.scrollHeight) {
              var s = u(A) && u(i) || p(A);
              if (L && c(A) || !L && s) return a(t, V())
          } else if (c(e) && p(e)) return a(t, e)
      } while (e = e.parentElement)
  }

  function c(e) {
      return e.clientHeight + 10 < e.scrollHeight
  }

  function u(e) {
      return "hidden" !== getComputedStyle(e, "").getPropertyValue("overflow-y")
  }

  function p(e) {
      var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
      return "scroll" === t || "auto" === t
  }

  function h(e) {
      var t = U(e);
      if (null == Y[t]) {
          var i = getComputedStyle(e, "")["scroll-behavior"];
          Y[t] = "smooth" == i
      }
      return Y[t]
  }

  function f(e, t, i) {
      window.addEventListener(e, t, i || !1)
  }

  function m(e, t, i) {
      window.removeEventListener(e, t, i || !1)
  }

  function v(e, t) {
      return e && (e.nodeName || "").toLowerCase() === t.toLowerCase()
  }

  function g(e, t) {
      e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, H.x === e && H.y === t || (H.x = e, H.y = t, q = [], B = 0)
  }

  function y(e) {
      if (e) {
          D.length || (D = [e, e, e]), e = Math.abs(e), D.push(e), D.shift(), clearTimeout(z), z = setTimeout(function() {
              try {
                  localStorage.SS_deltaBuffer = D.join(",")
              } catch (e) {}
          }, 1e3);
          var t = e > 120 && b(e);
          return !b(120) && !b(100) && !t
      }
  }

  function w(e, t) {
      return Math.floor(e / t) == e / t
  }

  function b(e) {
      return w(D[0], e) && w(D[1], e) && w(D[2], e)
  }

  function $(e) {
      var t = e.target,
          i = !1;
      if (-1 != document.URL.indexOf("www.youtube.com/watch"))
          do {
              if (i = t.classList && t.classList.contains("html5-video-controls")) break
          } while (t = t.parentNode);
      return i
  }

  function C(e) {
      var t, i;
      return (e *= O.pulseScale) < 1 ? t = e - (1 - Math.exp(-e)) : (e -= 1, t = (i = Math.exp(-1)) + (1 - Math.exp(-e)) * (1 - i)), t * O.pulseNormalize
  }

  function S(e) {
      return e >= 1 ? 1 : e <= 0 ? 0 : (1 == O.pulseNormalize && (O.pulseNormalize /= C(1)), C(e))
  }

  function k(e) {
      for (var t in e) I.hasOwnProperty(t) && (O[t] = e[t])
  }
  var T, j, x, z, _, I = {
          frameRate: 150,
          animationTime: 400,
          stepSize: 100,
          pulseAlgorithm: !0,
          pulseScale: 4,
          pulseNormalize: 1,
          accelerationDelta: 50,
          accelerationMax: 3,
          keyboardSupport: !0,
          arrowScroll: 50,
          fixedBackground: !0,
          excluded: ""
      },
      O = I,
      E = !1,
      L = !1,
      H = {
          x: 0,
          y: 0
      },
      M = !1,
      A = document.documentElement,
      D = [],
      P = /^Mac/.test(navigator.platform),
      W = {
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          spacebar: 32,
          pageup: 33,
          pagedown: 34,
          end: 35,
          home: 36
      },
      R = {
          37: 1,
          38: 1,
          39: 1,
          40: 1
      },
      q = [],
      F = !1,
      B = Date.now(),
      U = function() {
          var e = 0;
          return function(t) {
              return t.uniqueID || (t.uniqueID = e++)
          }
      }(),
      N = {},
      Q = {},
      Y = {};
  if (window.localStorage && localStorage.SS_deltaBuffer) try {
      D = localStorage.SS_deltaBuffer.split(",")
  } catch (e) {}
  var X = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e, t, i) {
          window.setTimeout(e, i || 1e3 / 60)
      },
      G = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
      V = function() {
          var e = document.scrollingElement;
          return function() {
              if (!e) {
                  var t = document.createElement("div");
                  t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
                  var i = document.body.scrollTop;
                  document.documentElement.scrollTop;
                  window.scrollBy(0, 3), e = document.body.scrollTop != i ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)
              }
              return e
          }
      }(),
      K = window.navigator.userAgent,
      J = /Edge/.test(K),
      Z = /chrome/i.test(K) && !J,
      ee = /safari/i.test(K) && !J,
      te = /mobile/i.test(K),
      ie = /Windows NT 6.1/i.test(K) && /rv:11/i.test(K),
      oe = ee && (/Version\/8/i.test(K) || /Version\/9/i.test(K)),
      ne = (Z || ee || ie) && !te,
      se = !1;
  try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function() {
              se = !0
          }
      }))
  } catch (e) {}
  var re = !!se && {
          passive: !1
      },
      ae = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
  ae && ne && (f(ae, o, re), f("mousedown", s), f("load", t)), k.destroy = function() {
      j && j.disconnect(), m(ae, o), m("mousedown", s), m("keydown", n), m("resize", x), m("load", t)
  }, window.SmoothScrollOptions && k(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
      return k
  }) : "object" == typeof exports ? module.exports = k : window.SmoothScroll = k
}(),
function(e, t) {
  "use strict";
  var i = function() {
      var i = {
              bcClass: "sf-breadcrumb",
              menuClass: "sf-js-enabled",
              anchorClass: "sf-with-ul",
              menuArrowClass: "sf-arrows"
          },
          o = function() {
              var t = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
              return t && e("html").css("cursor", "pointer").on("click", e.noop), t
          }(),
          n = function() {
              var e = document.documentElement.style;
              return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
          }(),
          s = !!t.PointerEvent,
          r = function(e, t, o) {
              var n = i.menuClass;
              t.cssArrows && (n += " " + i.menuArrowClass), e[o ? "addClass" : "removeClass"](n)
          },
          a = function(t, o) {
              return t.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + i.bcClass).filter(function() {
                  return e(this).children(o.popUpSelector).hide().show().length
              }).removeClass(o.pathClass)
          },
          l = function(e, t) {
              var o = t ? "addClass" : "removeClass";
              e.children("a")[o](i.anchorClass)
          },
          d = function(e) {
              var t = e.css("ms-touch-action"),
                  i = e.css("touch-action");
              i = "pan-y" === (i = i || t) ? "auto" : "pan-y", e.css({
                  "ms-touch-action": i,
                  "touch-action": i
              })
          },
          c = function(e) {
              return e.closest("." + i.menuClass)
          },
          u = function(e) {
              return c(e).data("sfOptions")
          },
          p = function() {
              var t = e(this),
                  i = u(t);
              clearTimeout(i.sfTimer), t.siblings().superfish("hide").end().superfish("show")
          },
          h = function(t) {
              t.retainPath = e.inArray(this[0], t.$path) > -1, this.superfish("hide"), this.parents("." + t.hoverClass).length || (t.onIdle.call(c(this)), t.$path.length && e.proxy(p, t.$path)())
          },
          f = function() {
              var t = e(this),
                  i = u(t);
              o ? e.proxy(h, t, i)() : (clearTimeout(i.sfTimer), i.sfTimer = setTimeout(e.proxy(h, t, i), i.delay))
          },
          m = function(t) {
              var i = e(this),
                  o = u(i),
                  n = i.siblings(t.data.popUpSelector);
              if (!1 === o.onHandleTouch.call(n)) return this;
              n.length > 0 && n.is(":hidden") && (i.one("click.superfish", !1), "MSPointerDown" === t.type || "pointerdown" === t.type ? i.trigger("focus") : e.proxy(p, i.parent("li"))())
          },
          v = function(t, i) {
              var r = "li:has(" + i.popUpSelector + ")";
              e.fn.hoverIntent && !i.disableHI ? t.hoverIntent(p, f, r) : t.on("mouseenter.superfish", r, p).on("mouseleave.superfish", r, f);
              var a = "MSPointerDown.superfish";
              s && (a = "pointerdown.superfish"), o || (a += " touchend.superfish"), n && (a += " mousedown.superfish"), t.on("focusin.superfish", "li", p).on("focusout.superfish", "li", f).on(a, "a", i, m)
          };
      return {
          hide: function(t) {
              if (this.length) {
                  var i = this,
                      o = u(i);
                  if (!o) return this;
                  var n = !0 === o.retainPath ? o.$path : "",
                      s = i.find("li." + o.hoverClass).add(this).not(n).removeClass(o.hoverClass).children(o.popUpSelector),
                      r = o.speedOut;
                  if (t && (s.show(), r = 0), o.retainPath = !1, !1 === o.onBeforeHide.call(s)) return this;
                  s.stop(!0, !0).animate(o.animationOut, r, function() {
                      var t = e(this);
                      o.onHide.call(t)
                  })
              }
              return this
          },
          show: function() {
              var e = u(this);
              if (!e) return this;
              var t = this.addClass(e.hoverClass).children(e.popUpSelector);
              return !1 === e.onBeforeShow.call(t) ? this : (t.stop(!0, !0).animate(e.animation, e.speed, function() {
                  e.onShow.call(t)
              }), this)
          },
          destroy: function() {
              return this.each(function() {
                  var t, o = e(this),
                      n = o.data("sfOptions");
                  if (!n) return !1;
                  t = o.find(n.popUpSelector).parent("li"), clearTimeout(n.sfTimer), r(o, n), l(t), d(o), o.off(".superfish").off(".hoverIntent"), t.children(n.popUpSelector).attr("style", function(e, t) {
                      return t.replace(/display[^;]+;?/g, "")
                  }), n.$path.removeClass(n.hoverClass + " " + i.bcClass).addClass(n.pathClass), o.find("." + n.hoverClass).removeClass(n.hoverClass), n.onDestroy.call(o), o.removeData("sfOptions")
              })
          },
          init: function(t) {
              return this.each(function() {
                  var o = e(this);
                  if (o.data("sfOptions")) return !1;
                  var n = e.extend({}, e.fn.superfish.defaults, t),
                      s = o.find(n.popUpSelector).parent("li");
                  n.$path = a(o, n), o.data("sfOptions", n), r(o, n, !0), l(s, !0), d(o), v(o, n), s.not("." + i.bcClass).superfish("hide", !0), n.onInit.call(this)
              })
          }
      }
  }();
  e.fn.superfish = function(t, o) {
      return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? e.error("Method " + t + " does not exist on jQuery.fn.superfish") : i.init.apply(this, arguments)
  }, e.fn.superfish.defaults = {
      popUpSelector: "ul,.sf-mega",
      hoverClass: "sfHover",
      pathClass: "overrideThisToUse",
      pathLevels: 1,
      delay: 800,
      animation: {
          opacity: "show"
      },
      animationOut: {
          opacity: "hide"
      },
      speed: "normal",
      speedOut: "fast",
      cssArrows: !0,
      disableHI: !1,
      onInit: e.noop,
      onBeforeShow: e.noop,
      onShow: e.noop,
      onBeforeHide: e.noop,
      onHide: e.noop,
      onIdle: e.noop,
      onDestroy: e.noop,
      onHandleTouch: e.noop
  }
}(jQuery, window), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpCustomSelects()
});
var $window = ($j = jQuery.noConflict())(window);
$j(document).on("ready", function() {
  "use strict";
  oceanwpDropDownMobile()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpDropDownSearch()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpInitFitVids()
});
var $j = jQuery.noConflict(),
  $lastWindowWidth = ($window = $j(window)).width(),
  $lastWindowHeight = $window.height();
$window.on("load", function() {
  "use strict";
  oceanwpFixedFooter()
}), $window.resize(function() {
  "use strict";
  var e = $window.width(),
      t = $window.height();
  $lastWindowWidth === e && $lastWindowHeight === t || oceanwpFixedFooter()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpFullScreenMenu()
});
var $window = ($j = jQuery.noConflict())(window);
$j(document).on("ready", function() {
  "use strict";
  oceanwpFullScreenMobile()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpHeaderReplaceSearch()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpHeaderSearchForm()
});
var $j = jQuery.noConflict();
($window = $j(window)).on("load", function() {
  "use strict";
  void 0 !== $j.fn.infiniteScroll && $j("div.infinite-scroll-nav").length && oceanwpInfiniteScrollInit()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpMasonryGrids()
}), $j(window).on("orientationchange", function() {
  "use strict";
  oceanwpMasonryGrids()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpInitMatchHeight()
});
var $window = ($j = jQuery.noConflict())(window);
$j(document).on("ready", function() {
  "use strict";
  oceanwpMegaMenu()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpNavNoClick()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpOverlaySearch()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpParallaxFooter()
}), $j(window).on("resize", function() {
  "use strict";
  oceanwpParallaxFooter()
});
var $window = ($j = jQuery.noConflict())(window);
$j(document).on("ready", function() {
  "use strict";
  oceanwpScrollEffect()
});
var $window = ($j = jQuery.noConflict())(window);
$j(document).on("ready", function() {
  "use strict";
  oceanwpScrollTop()
});
var $window = ($j = jQuery.noConflict())(window);
$j(document).on("ready", function() {
  "use strict";
  oceanwpMobileMenu()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpInitCarousel()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpSuperFish()
}), ($j = jQuery.noConflict())(document).on("ready", function() {
  "use strict";
  oceanwpVerticalHeader()
});