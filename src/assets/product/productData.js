'use strict'

export const madeItemData = [
         {
           id: 5,
           path: "image-airbnb.png",
           title: "サイト模写",
           link:
             "https://sukeo-sukeo.github.io/airbnb-copysite/airbnb/index.html",
           use: ["html", "css"],
           description: `学習開始からjavascirptを学び出すまでの３ヶ月間に作成した模写サイトです。`,
         },
         {
           id: 101,
           path: "card-game.png",
           title: "神経衰弱",
           link: "https://sukeo-sukeo.github.io/js_game_learning/",
           movieLink:
             "https://sukeo-sukeo.github.io/original-browsgame-movie-1/made1.mov",
           use: ["html", "css", "javascript"],
           description: `
    ドットインストール等で一ヶ月のインプット後、javascriptを用いてゼロからつくりました。動作するゲームが作れたことに、感動したことを覚えています。
    `,
         },
         {
           id: 102,
           path: "math-game.png",
           title: "掛け算バトル",
           link: "https://sukeo-sukeo.github.io/js_game_practice_2/",
           movieLink:
             "https://sukeo-sukeo.github.io/original-browsgame-movie-2/made2.mov",
           use: ["html", "css", "javascript"],
           description: `
    小学２年生の娘の掛け算学習用に作成。各画面をclass構文を用いての管理にチャレンジ。冗長なコーディング内容となっていますが、javascriptの構文やDOMの理解、また設計の大切さやリファクタリングの重要性を学びました。サーバーやPCの仕組み自体に興味が湧く。
    `,
         },
         {
           id: 6,
           path: "portfolio.png",
           title: "ポートフォリオサイト",
           link: "https://sukeo-sukeo.github.io/my-portfolio/",
           use: ["vue.js", "bootstrap"],
           description: `
    プログラミング学習開始８ヶ月目でようやく形にできたマイページ。
    フレームワークvue.jsを学び制作。閲覧状況を知る為グーグルアナリティクスを導入しています。
    `,
         },
         {
           id: 7,
           path: "todo.jpg",
           title: "TODOアプリ",
           link: "https://whispering-temple-91855.herokuapp.com/",
           use: [
             "vue.js",
             "vuetify",
             "node.js",
             "express",
             "mongodb",
             "mongoose",
           ],
           description: `
    シンプルなTODOリスト。初めてサーバーとデータベースを使ったWebアプリケーションを作りました。ログイン機能はライブラリを使わず自作。バリデーションやハッシュ化を学びました。gitの使用やcliの活用など、この制作を通して非常に多くのことを学ぶことができました。herokuにて公開しています。※herokuのDBが閉鎖して現在動作しません...近日migrate予定
    `,
         },
         {
           id: 8,
           path: "linebot.jpg",
           title: "モンハン弱点bot",
           link: "https://github.com/sukeo-sukeo/mylinebot",
           use: ["node.js", "express"],
           description: `
    モンスターハンターワールドのモンスター名を投げると弱点が返ってくるLINEbotです。プレイするときに弱点をいちいちググる時間を短縮できます。herokuにて稼働中。QRコードからLINE友達登録にて使用可能です！
    `,
         },
         {
           id: 9,
           path: "flagcollection.jpg",
           title: "FlagCollectionApp",
           link: "https://sukeo-sukeo.github.io/FlagCollectionApp/index.html",
           use: [
             "javascript",
             "bootstrap",
             "chart.js",
             "API: leaflet",
             "API: REST Countries",
           ],
           description: `国旗コレクションを楽しみながら、世界の国を勉強をしてもらえるアプリです。進行状況の表示をchart.jsでグラフ化。データ永続化はローカルストレージを使っています。また、実際のフロントエンド開発に近づけるためWebpack導入。フロントでnpmモジュールが使えることに感動しましたが、ファイル分割が思うようにできず次への課題となりました。`,
         },
       ];

