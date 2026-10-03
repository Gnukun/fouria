/**
 * Fouria Official Website - Content Data Store
 * ========================================================
 * このファイルでバンドの楽曲、ライブ情報、写真、メンバー情報を一元管理しています。
 * 今後、新曲やライブ、写真を追加・更新する際は、このファイルの配列データを編集してください。
 * HTMLを複雑に書き換える必要はありません。
 * ========================================================
 */

const FOURIA_DATA = {
  // バンド基本情報 & 公式SNS
  band: {
    name: "Fouria",
    title: "Fouria | Official Website",
    description: "Fouriaの公式Webサイト。最新の楽曲、ライブ情報、写真などを掲載。",
    sns: {
      x: {
        name: "X (Twitter)",
        url: "https://x.com/fouria_4?s=11",
        handle: "@fouria_4"
      },
      instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/fouria_4/",
        handle: "@fouria_4"
      },
      tiktok: {
        name: "TikTok",
        url: "https://www.tiktok.com/@fouria_4",
        handle: "@fouria_4"
      }
    }
  },

  // メンバー情報
  // 写真を追加・差し替える場合は images/members/ に画像を配置し、image のパスを変更してください。
  members: [
    {
      id: "kobayu",
      name: "こばゆう",
      nameEn: "KOBA YU",
      part: "Vo.Key.Gt.",
      image: "images/members/kobayu.svg", // 実写写真に変更する場合は例: "images/members/kobayu.jpg"
      sns: {
        x: "https://x.com/youhuax11?s=11",
        instagram: "https://www.instagram.com/k_o8yv/",
        tiktok: "https://www.tiktok.com/@kobahapi07"
      }
    },
    {
      id: "sato_urito",
      name: "佐藤うりと",
      nameEn: "URITO SATO",
      part: "Gt.",
      image: "images/members/sato_urito.svg", // 実写写真に変更する場合は例: "images/members/sato_urito.jpg"
      sns: {
        x: "https://x.com/uritogt?s=11",
        instagram: "https://www.instagram.com/uritogt/",
        tiktok: "https://www.tiktok.com/@uritogt"
      }
    },
    {
      id: "nagaoka",
      name: "nagaoka",
      nameEn: "NAGAOKA",
      part: "Ba.",
      image: "images/members/nagaoka.svg", // 実写写真に変更する場合は例: "images/members/nagaoka.jpg"
      sns: {
        x: "https://x.com/n_boc4?s=11",
        instagram: "https://www.instagram.com/_ngokbb/",
        tiktok: "https://www.tiktok.com/@ngok77b"
      }
    },
    {
      id: "sachi",
      name: "さち",
      nameEn: "SACHI",
      part: "Dr.",
      image: "images/members/sachi.svg", // 実写写真に変更する場合は例: "images/members/sachi.jpg"
      sns: {
        x: "https://x.com/sa_cch_i_7?s=11",
        instagram: "https://www.instagram.com/s_achi_y07/",
        tiktok: null // TikTokアカウントなし
      }
    }
  ],

  // 楽曲情報
  // 新曲が追加されたら、以下のようにオブジェクトを追加してください。
  // 先頭に追加した楽曲が自動的に最新曲（HOMEページのFEATURED MUSIC）として表示されます。
  music: [
    {
      id: "tolstoy",
      title: "トルストイ",
      type: "Single",
      status: "NOW STREAMING",
      jacket: "images/music/tolstoy.jpg",
      appleMusic: "https://music.apple.com/jp/album/%E3%83%88%E3%83%AB%E3%82%B9%E3%83%88%E3%82%A4-single/1781209106",
      isLatest: true
    }
    /* 
    // 【新曲追加時のテンプレート例】
    // 以下のコメントアウトを解除し、情報を入力するだけでMUSICページに反映されます。
    ,
    {
      id: "song-b",
      title: "新曲タイトル",
      type: "Single", // または "EP", "Album"
      status: "NOW STREAMING",
      jacket: "images/music/song-b.jpg",
      appleMusic: "https://music.apple.com/jp/album/...",
      isLatest: false
    }
    */
  ],

  // ライブ情報
  // 現時点でライブ情報がないため、配列は空にしてあります。
  // 空の場合はサイト上に「NEXT LIVE COMING SOON」と美しく自動表示されます。
  // ライブが決まったら、以下のコメント例を参考にオブジェクトを追加してください。
  live: [
    /* 
    // 【ライブ追加時のテンプレート例】
    {
      id: "live-2026-01",
      date: "2026.11.20",
      dayOfWeek: "FRI",
      title: "LIVE EVENT TITLE",
      venue: "Shibuya CLUB QUATTRO",
      openTime: "18:00",
      startTime: "18:30",
      ticketInfo: "ADV ¥3,500 / DOOR ¥4,000 (+1Drink)",
      ticketUrl: "https://eplus.jp/...", // チケット購入リンク
      details: "w / Band A, Band B",
      status: "upcoming" // "upcoming"(開催予定) または "past"(過去のライブ)
    }
    */
  ],

  // 最新ニュース / お知らせ
  news: [
    {
      id: "news-01",
      date: "RELEASE",
      category: "RELEASE",
      title: "1st Single「トルストイ」各音楽配信サービスにて配信中",
      url: "music.html",
      isExternal: false
    }
    /*
    // 【ニュース追加時のテンプレート例】
    ,
    {
      id: "news-02",
      date: "2026.10.15",
      category: "LIVE", // "LIVE", "RELEASE", "INFO", "MEDIA" 等
      title: "ニュースの見出しテキスト",
      url: "live.html", // または外部リンク "https://..."
      isExternal: false
    }
    */
  ],

  // 写真ギャラリー（PHOTO）
  // 写真を追加する際は images/photo/ に画像を置き、ここへ追加してください。
  photos: [
    {
      id: "photo-01",
      src: "images/photo/tolstoy_artwork.jpg",
      alt: "Fouria - トルストイ Artwork Photo",
      title: "Single「トルストイ」Artwork",
      tag: "ARTWORK / VISUAL",
      size: "large" // 'large', 'tall', 'wide', 'normal'（レイアウトに変化をつける指定）
    },
    {
      id: "photo-02",
      src: "images/photo/fouria_official_icon.jpg",
      alt: "Fouria Official Visual Icon",
      title: "Fouria Official Visual",
      tag: "BAND ICON",
      size: "normal"
    }
    /*
    // 【写真追加時のテンプレート例】
    ,
    {
      id: "photo-03",
      src: "images/photo/live_202610.jpg",
      alt: "Live Photo",
      title: "Live at Shelter",
      tag: "LIVE PHOTO",
      size: "wide" // または "tall", "normal", "large"
    }
    */
  ]
};

// グローバルスコープに公開
window.FOURIA_DATA = FOURIA_DATA;
