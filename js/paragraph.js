$(document).ready(function () {
  // const text = `Coming soon...`
  // const text = `完全新規アイドルグループ「My Plustar(マイプラスター)」初期メンバー募集中！<br>
  // マイナスな自分から、プラスに輝くスターへ<br>
  // <br>
  // アイドルをやってみたい…興味はあるけれど、自信を持てなくてアクションが起こせなかったあなた、今ここで新たな一歩を踏み出し、私たちと一緒にステージで夢を叶えませんか？<br>
  // <br>
  // 歌やダンスは完全未経験でOK！<br>
  // My Plustarは0からのスタートを応援します<br>
  // 少しずつ上達しながら実力を身につけ、デビュー半年を目処にワンマンライブ、やがては全国ツアーを開催できるグループを目指します<br>


  // ★応募資格★<br>
  // ・16〜29歳までの方<br>
  // ・東京都内の活動に支障がない方<br>
  // ・心身ともに健康な方<br>
  // ・決められた時間やルールを守れる方<br>
  // ・主体性を持って活動できる方<br>
  // ・特定のプロダクション、レコード会社、その他と契約がない方<br>


  // ★応募方法★<br>
  // ・terazono@shellout-p.com宛に件名に「My Plustarオーディション応募」と記入<br>
  // ・名前（本名） 生年月日 身長/体重<br>
  // ・お住まいの都道府県<br>
  // ・正面から撮影した写真を全身1枚＋上半身1枚（加工していない写真で、全身写真はスタイルがわかるもの）<br>
  // ・現在使用しているSNSアカウント(Twitter、Instagram、TikTok)<br>
  // ・芸能活動歴の有無（有る場合は具体的に記入をお願いします）<br>
  // ・志望動機<br>
  // ・自己PR(方法は指定しません、あなたの強みを見せてください)<br>


  // ★オーディションのスケジュール★<br>
  // 【1次】書類選考<br>
  // 到着順に審査します<br>
  // 通過者のみ到着後3日以内に連絡いたします<br>
  // ↓<br>
  // 【2次】面接<br>
  // 詳細は1次審査通過者のみ連絡いたします<br>
  // ↓<br>
  // 【3次】<br>
  // 仮メンバーとして採用しレッスンに参加します<br>
  // レッスンへの向き合い方、努力の量で判断します<br>
  // ↓<br>
  // 【採用】<br>
  // ステージデビューに向けて本格的なレッスンに移行します<br>


  // ★合格後のスケジュール★<br>
  // レッスン開始、楽曲を4曲習得していただきます(同時並行で衣装採寸、アーティスト写真撮影などデビューに向けての準備）<br>
  // ↓<br>
  // オンラインにてプレデビュー<br>
  // ↓<br>
  // 2023年10月〜11月にステージデビュー<br>
  // (メンバーの成長具合によって前後することがあります)<br>


  // ・オーディション参加費<br>
  // 面接会場までの交通費のみ負担していただきます<br>
  // <br>
  // ・合格後にかかる費用<br>
  // 衣装代、レッスン費など活動にかかる費用は一切頂きませんレッスン・ライブ会場への交通費のみ自己負担となります<br>
  // <br>
  // ・給与、手当など<br>
  // 所定の報酬をお支払いします。<br>`;
  const mobile_text = `完全新規アイドルグループ「My Plustar(マイプラスター)」初期メンバー募集中！<br>
  マイナスな自分から、プラスに輝くスターへ<br>
  <br>
  アイドルになりたい…！漠然と興味はあるけれど、アクションが起こせなかった、気付いたら応募締め切りを過ぎていた、自信が持てなかった…<br>
  消極的な自分とは別れを告げ、今ここで新たな一歩を踏み出し、私たちと一緒にステージで夢を叶えませんか？<br>


  歌やダンスは完全未経験でOK！<br>My Plustarは0からのスタートを応援します<br>少しずつ上達しながら実力を身につけ、デビュー半年を目処にワンマンライブ、やがては全国ツアーを開催できるグループを目指します<br>
  <br>
  ★応募資格★<br>
  ・16〜29歳までの方・特定のプロダクション、レコード会社、その他と契約がない方・東京都内の活動に支障がない方・心身ともに健康な方・決められた時間やルールを守れる方・主体性を持って活動できる方<br>


  ★応募方法★<br>
  “メールアドレス未定”件名を「My Plustarオーディション応募」として必要事項を記載/添付して送信<br>
  ・名前（本名）・生年月日・身長/体重・お住まいの都道府県・正面から撮影した写真を全身1枚＋上半身1枚（加工していない写真で、全身写真はスタイルがわかるもの）・現在使用しているSNSアカウント(Twitter、Instagram、TikTok)・芸能活動歴の有無（有る場合は具体的に記入をお願いします）・志望動機・自己PR(方法は指定しません、あなたの強みを見せてください)<br>


  ★オーディションのスケジュール★<br>
  【1次】書類選考到着順に審査します、通過者のみ到着後3日以内に連絡いたします<br>
  ↓<br>
  【2次】面接詳細は1次審査通過者のみ連絡いたします<br>
  ↓<br>
  【3次】歌唱力・ダンス<br>
  詳細は2次審査通過者のみ連絡いたします<br>


  ★合格後のスケジュール★<br>
  レッスン開始、楽曲を4曲習得していただきます(同時並行で衣装採寸、アーティスト写真撮影などデビューに向けての準備）<br>
  ↓<br>
  オンラインにてプレデビュー<br>
  ↓<br>
  2023年○月ステージデビュー(メンバーの成長具合によって前後することがあります)<br>


  ★オーディション参加費★<br>
  面接会場までの交通費のみ負担していただきます<br>
  <br>
  ★合格後にかかる費用★<br>
  衣装代、レッスン費など活動にかかる費用は一切頂きませんレッスン・ライブ会場への交通費のみ自己負担となります<br>
  <br>
  ★給与、手当など★<br>
  所定の報酬をお支払いします。`;

  const text = `「東京」メンバー超優遇！…運営大丈夫？“バック率100% ”完全新規！副業アイドル 【ヒロイン未遂⁉】メンバー募集⭐<br>
<br>
『土日祝日だけ…アイドルに変身してください！」<br>
<br>
活動は土日祝だけ！【ヒロイン未遂⁉】は2024年2月のデビューを目標に初期メンバーを募集します⭐<br>
キラキラ輝く王道アイドル！楽曲・衣装ともに事務所ホームページ、X(旧:Twitter)にて公開中♬<br>


<br>
バック率100%(デビューから3ヶ月間)の待遇で、あなたの副業アイドルライフを応援⭐<br>
3ヶ月を過ぎても定期的にバック率100%シーズンを設けます<br>
<br>
事務所の売り上げは度外視、活動して頂くメンバーの私生活を第一に考えます、あなたの財布を潤してください¥<br>
<br>


オーディションのスケジュール<br>
①書類審査<br>
公式応募フォームから応募をお願いします、通過者は3日以内に結果をお送りいたします<br>
もしメールが届かない場合も、念のため迷惑メールに入っていないかご確認のうえ、公式アカウントまでDMにてお問い合わせください<br>
<br>
②面接<br>
指定された場所(都内)までお越しください<br>
<br>
③採用<br>
ステージデビューに向けて本格的なレッスンに移行します<br>
<br>


合格後のスケジュール<br>
レッスン開始後、楽曲を3曲習得していただきます(同時並行で衣装発注、アーティスト写真撮影などデビューに向けての準備）<br>
↓<br>
オンライン『(Xや配信アプリ)』にてプレデビュー<br>
↓<br>
2024年2月〜3月にステージデビュー<br>
(メンバーの成長具合によって前後することがあります)<br>
<br>


オーディション参加費<br>
面接会場までの交通費のみ負担して頂きます<br>
<br>
合格後にかかる費用<br>
活動中の個人的な飲食費<br>
美容院、ヘアメイク代<br>
レッスンの交通費（ライブ出演時の交通費は支給します）<br>
<br>
報酬や給与、賞金や賞品、手当など<br>
デビュー日から3ヶ月間、驚異のバック率100%！<br>
その日の売り上げは全額給与として差し上げます<br>
3ヶ月以降も業界高水準のバック率50%以上を保証！また定期的にバック率100%のシーズンを設けます<br>
詳しくはお問い合わせください<br>
<br>


応募資格<br>
16歳(高校1年生)以上の方<br>
都内で活動ができる方<br>
他の事務所等に所属していない方<br>
<br>


応募方法<br>
ご応募は<a href="https://docs.google.com/forms/d/e/1FAIpQLSfjyL9ropK-34U0_tVejGHW5kN8J2KGyqfpZ9ZiDCEiobSlmQ/viewform?usp=sf_link">こちらのフォーム</a>より情報を入力してください<br>
<br>
お問い合わせ<br>
応募に関して不明な点がございましたら<br>
『公式X』にDMにてお問い合わせください<br>
X URL:〜<br>
<br>`;

  const contents = text.split('\n\n\n');
  const mobile_contents = mobile_text.split('\n\n\n');

  let currentIndex = 0;

  function updateContent() {
    const content = contents[currentIndex];
    $('.recruit-description').hide().html(content).fadeIn(500);
    updateButtonsVisibility();
    appendButtons();
  }

  function addButton(buttonClass, buttonText) {
    const button = $('<button></button>', {
      class: buttonClass,
      text: buttonText,
    });
    return button;
  }

  const prevButton = addButton('prev-button', 'back');
  const nextButton = addButton('next-button', 'next');

  function updateButtonsVisibility() {
    if (currentIndex === 0) {
      prevButton.hide();
      nextButton.show();
      nextButton.css({ marginLeft: '0' });
    } else if (currentIndex === contents.length - 1) {
      prevButton.show();
      nextButton.hide();
      prevButton.css({ marginRight: '0' });
    } else {
      prevButton.show();
      nextButton.show();
      nextButton.css({ marginLeft: '10px' });
    }
  }

  function appendButtons() {
    const buttonWrapper = $('<div></div>');
    buttonWrapper.addClass('button-wrapper');
    buttonWrapper.append(prevButton, nextButton);
    $('.recruit-description').append(buttonWrapper);

    $('.prev-button').on('click', function () {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = contents.length - 1;
      }
      updateContent();
    });

    $('.next-button').on('click', function () {
      currentIndex++;
      if (currentIndex >= contents.length) {
        currentIndex = 0;
      }
      updateContent();
    });
  }

  updateContent();
});
