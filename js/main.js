$(function () {
  var MENU_NAMES = ["about", "office", "recruit", "contact"];
  var NENU_CLASSES = MENU_NAMES.map(function (name) {
    return "." + name;
  });
  var FADE_DURATION = 250;
  var cancelFlag = 0;

  function showContent(name, duration) {
    $(".index, .content").fadeOut(duration);
    setTimeout(function () {
      $(NENU_CLASSES.join(",")).hide();
      $(".content").scrollTop();
      $(".content").addClass("menu-content");
      var names = [".header-logo", ".footer-list", ".menu-content", "." + name];
      $(names.join(",")).fadeIn(duration).show();
    }, duration);
  }

  function showTop(duration) {
    $(".header-logo, .footer-list, .content").fadeOut(duration);
    setTimeout(function () {
      $(NENU_CLASSES.concat([".menu-content"]).join(",")).hide();
      $(".content").removeClass("menu-content");
      $(".content, .index").fadeIn(duration);
    }, duration);
  }

  function navigate(name, fromBrowser = false, initial = false) {
    var currentName = window.location.pathname.substring(1);
    if (
      !fromBrowser &&
      !initial &&
      ((name === "index" && currentName === "") || name === currentName)
    )
    return;
    if (cancelFlag === 1) return;
    cancelFlag = 1;
    if (!fromBrowser) {
      var path = name === "index" ? "/" : "/" + name;
      history.pushState({ name: name }, null, path);
    }
    var duration = initial ? 0 : FADE_DURATION;
    if (name === "index") {
      showTop(duration);
      $(".link-underline").removeClass("active");
    } else {
      showContent(name, duration);
      $(".link-underline").removeClass("active");
      $(".menu-" + name + " .link-underline").addClass("active");
    }
    setTimeout(function () {
      cancelFlag = 0;
    }, duration * 2);
  }

  window.submitCheck = function () {
    if ($(".contact-confirm-dialog").is(":visible")) {
      $(".contact-confirm-dialog").fadeOut(FADE_DURATION);
      $("form[name='contact-form']").submit();
    } else {
      $('[data-confirm-name="name"]').text($('[data-name="name"]').val());
      $('[data-confirm-name="email"]').text($('[data-name="email"]').val());
      $('[data-confirm-name="tel"]').text($('[data-name="tel"]').val());
      $('[data-confirm-name="company"]').text($('[data-name="company"]').val());
      $('[data-confirm-name="inquiry"]').html(
        $('[data-name="inquiry"]').val().replace(/\r?\n/g, "<br>")
      );
      $(".contact-confirm-dialog").fadeIn(FADE_DURATION);
    }
  };

  MENU_NAMES.forEach(function (name) {
    $(".menu-" + name).on("click", function () {
      navigate(name);
    });
  });

  $(".close, .header-logo, .close-area").on("click", function () {
    navigate("index");
  });

  window.addEventListener("popstate", function (event) {
    navigate(event.state ? event.state.name : "index", true);
  });

  var name = window.location.pathname.substring(1);
  if (name) {
    if (MENU_NAMES.includes(name)) {
      navigate(name, false, true);
    } else if (name === "contact_complete") {
      alert(
        "お問合せ内容を送信しました。\n後ほど、担当者よりご連絡をさせていただきます。"
      );
      history.replaceState({ name: "contact" }, null, "/contact");
      window.location.pathname = "/contact";
    } else {
      window.location = "/";
    }
  } else {
    navigate("index", false, true);
  }

  $(".contact-confirm-dialog").on("click", function (e) {
    if (e.target === this) {
      $(".contact-confirm-dialog").fadeOut(FADE_DURATION);
    }
  });
  $(".contact-confirm-dialog").hide();
  });

$(function () {
  async function webStorage() {
    // if (sessionStorage.getItem('access')) {
    //   $(".loading").addClass('is-active');
      await fadeInOutPhilosophy();
    // } else {
      // sessionStorage.setItem('access', 'true');
      // $(".loading-animation").addClass('is-active');
      // await delay(3000);
      // $(".loading").addClass('is-active');
      // $(".loading-animation").removeClass('is-active');
    //   await fadeInOutPhilosophy();
    // }
  }

  // function delay(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  function fadeInOutPhilosophy() {
    return new Promise(resolve => {
      $(".philosophy-h").fadeIn(2000, function () {
        $(".philosophy-p").fadeIn(2000, function () {
          $(".corporate-philosophy").fadeOut(2000, function () {
            $(".logo-wrap").css("display", "block");
            $(".logo-wrap").animate({ opacity: 1 }, 2000, function () {
              resolve();
            });
          });
        });
      });
    });
  }

  webStorage();
});
