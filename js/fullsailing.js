$(function () {
  var MENU_NAMES = ["company", "service", "recruit", "contact"];
  var NENU_CLASSES = MENU_NAMES.map(function (name) {
    return "." + name;
  });

  // フィード時間(ms)
  var FADE_DURATION = 250;

  // 連続クリック回避策
  var cancelFlag = 0;

  // ページ遷移
  function showContent(name, duration) {
    $(".index, .content").fadeOut(duration);
    setTimeout(function () {
      $(NENU_CLASSES.join(",")).hide();
      $(".content").scrollTop(); // スクロール状態をリセット
      $(".content").addClass("menu-content");
      var names = [".header-logo", ".footer-list", ".menu-content", "." + name];
      $(names.join(",")).fadeIn(duration).show();
    }, duration);
  }

  // トップに戻る
  function showTop(duration) {
    $(".header-logo, .footer-list, .content").fadeOut(duration);
    setTimeout(function () {
      $(NENU_CLASSES.concat([".menu-content"]).join(",")).hide();
      $(".content").removeClass("menu-content");
      $(".content, .index").fadeIn(duration);
    }, duration);
  }

  // 企業理念のアニメーション
  function fadeInOutPhilosophy () {
    $(".philosophy-h").fadeIn(2000, function(){
      $(".philosophy-p").fadeIn(2000, function(){
        $(".corporate-philosophy").fadeOut(2000, function(){
          $(".logo-wrap").css("display", "block");
          $(".logo-wrap").animate({opacity: 1}, 2000);
        });
      });
    });
  }

  function navigate(name, fromBrowser = false, initial = false) {
    // 重複したページへの遷移をカット
    var currentName = window.location.pathname.substring(1);
    if (
      !fromBrowser &&
      !initial &&
      ((name === "index" && currentName === "") || name === currentName)
    )
      return;

    // 連打対策
    if (cancelFlag === 1) return;
    cancelFlag = 1;

    // ブラウザバック/次へ の場合以外はstateを手動更新
    if (!fromBrowser) {
      var path = name === "index" ? "/" : "/" + name;
      history.pushState({ name: name }, null, path);
    }

    var duration = initial ? 0 : FADE_DURATION;

    if (name === "index") {
      showTop(duration);
      $(".link-underline").removeClass("active");
      fadeInOutPhilosophy();
    } else {
      showContent(name, duration);
      $(".link-underline").removeClass("active");
      $(".menu-" + name + " .link-underline").addClass("active");
    }

    setTimeout(function () {
      cancelFlag = 0;
    }, duration * 2);
  }

  // 問い合わせプレビュー
  window.submitCheck = function () {
    if ($(".contact-confirm-dialog").is(":visible")) {
      return true;
    } else {
      $('[data-confirm-name="name"]').text($('[data-name="name"]').val());
      $('[data-confirm-name="email"]').text($('[data-name="email"]').val());
      $('[data-confirm-name="tel"]').text($('[data-name="tel"]').val());
      $('[data-confirm-name="company"]').text($('[data-name="company"]').val());
      $('[data-confirm-name="inquiry"]').html(
        $('[data-name="inquiry"]').val().replace(/\r?\n/g, "<br>")
      );
      $(".contact-confirm-dialog").fadeIn(FADE_DURATION);
      return false;
    }
  };

  // メニュー遷移クリックをセット
  MENU_NAMES.forEach(function (name) {
    $(".menu-" + name).on("click", function () {
      navigate(name);
    });
  });

  // return-top
  $(".close, .header-logo, .close-area").on("click", function () {
    navigate("index");
  });

  // ブラウザバック・進むのハンドル
  window.addEventListener("popstate", function (event) {
    navigate(event.state ? event.state.name : "index", true);
  });

  // 初期パスから表示状態をセット
  var name = window.location.pathname.substring(1);
  if (name) {
    if (MENU_NAMES.includes(name)) {
      // 通常のページ
      navigate(name, false, true);
    } else if (name === "contact_complete") {
      // 問合せ完了
      alert(
        "お問合せ内容を送信しました。\n後ほど、担当者よりご連絡をさせていただきます。"
      );
      history.replaceState({ name: "contact" }, null, "/contact");
      window.location.pathname = "/contact";
    } else {
      // 無効なURL
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
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
      $(".loading").addClass('is-active');
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('is-active');
        $(".loading-animation").removeClass('is-active');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
});
