// 曲のデータベース
const songData = Object.freeze([
    {
        title: "RAIN / SEKAI NO OWARI",
        date: "2026/06/19",
        videoTitle: "デビュー2周年記念！ミニ歌枠させていただきます！🎤🎉【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/cQ7bQE6GWoQ?si=YpzJPHjMgO8ZnSU4",
        time: "05:35"
    },
    {
        title: "ヒッチコック / ヨルシカ",
        date: "2026/06/19",
        videoTitle: "デビュー2周年記念！ミニ歌枠させていただきます！🎤🎉【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/cQ7bQE6GWoQ?si=YpzJPHjMgO8ZnSU4",
        time: "13:18"
    },
    {
        title: "美しい鰭 / スピッツ",
        date: "2026/06/19",
        videoTitle: "デビュー2周年記念！ミニ歌枠させていただきます！🎤🎉【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/cQ7bQE6GWoQ?si=YpzJPHjMgO8ZnSU4",
        time: "20:28"
    },
    {
        title: "涙そうそう / 森山良子",
        date: "2026/06/19",
        videoTitle: "デビュー2周年記念！ミニ歌枠させていただきます！🎤🎉【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/cQ7bQE6GWoQ?si=YpzJPHjMgO8ZnSU4",
        time: "26:40"
    },
    {
        title: "ロマンチシズム / Mrs. GREEN APPLE",
        date: "2026/06/19",
        videoTitle: "デビュー2周年記念！ミニ歌枠させていただきます！🎤🎉【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/cQ7bQE6GWoQ?si=YpzJPHjMgO8ZnSU4",
        time: "34:55"
    },
    {
        title: "115万キロのフィルム / Official髭男dism",
        date: "2026/06/19",
        videoTitle: "デビュー2周年記念！ミニ歌枠させていただきます！🎤🎉【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/cQ7bQE6GWoQ?si=YpzJPHjMgO8ZnSU4",
        time: "41:02"
    },
    {
        title: "貴方の恋人になりたい / チョーキューメイ",
        date: "2026/06/19",
        videoTitle: "デビュー2周年記念！ミニ歌枠させていただきます！🎤🎉【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/cQ7bQE6GWoQ?si=YpzJPHjMgO8ZnSU4",
        time: "57:17"
    },
    {
        title: "アポリア / ヨルシカ",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "06:02"
    },
    {
        title: "嘘 / シド",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "12:29"
    },
    {
        title: "夜の踊り子 / サカナクション",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "18:01"
    },
    {
        title: "AIZO / King Gnu",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "26:25"
    },
    {
        title: "lulu. / Mrs. GREEN APPLE",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "32:16"
    },
    {
        title: "トンツカタンタン / クレイジーウォウウォ!!",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "39:23"
    },
    {
        title: "IRIS OUT / 米津玄師",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "46:09"
    },
    {
        title: "花になって / 緑黄色社会",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "50:25"
    },
    {
        title: "今はいいんだよ。 / MIMI",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "56:01"
    },
    {
        title: "Secret of my heart / 倉木麻衣",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "01:01:16"
    },
    {
        title: "若者のすべて / フジファブリック",
        date: "2026/05/24",
        videoTitle: "【 歌枠 】最近聴いてる曲歌ってくぞ〜！！！！！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/8DNO8hFr_hE?si=XEnKuK_mznTp0BLS",
        time: "01:08:00"
    },
    {
        title: "ハム太郎とっとこうた / ハムちゃんず",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "05:54"
    },
    {
        title: "DANZEN!ふたりはプリキュア Ver. Max Heart / 五條真由美",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "08:59"
    },
    {
        title: "1・2・3 / After the Rain",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "15:46"
    },
    {
        title: "新時代 / Ado",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "24:05"
    },
    {
        title: "パプリカ / Foorin×米津玄師",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "31:13"
    },
    {
        title: "ひとりごつ / ハチワレ",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "37:22"
    },
    {
        title: "となりのトトロ / 井上あずみ",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "41:03"
    },
    {
        title: "ハルノヒ / あいみょん",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "47:11"
    },
    {
        title: "蝶々結び / Aimer",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "54:52"
    },
    {
        title: "虹 / 菅田将暉",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "01:01:58"
    },
    {
        title: "ありがとう / いきものがかり",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xm28AvjAub1ISgfs",
        time: "01:09:13"
    },

    {
        title: "ハム太郎とっとこうた / ハムちゃんず",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "05:54"
    },
    {
        title: "DANZEN!ふたりはプリキュア Ver. Max Heart / 五條真由美",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "08:59"
    },
    {
        title: "1・2・3 / After the Rain",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "15:46"
    },
    {
        title: "新時代 / ウタ（Ado）",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "24:05"
    },
    {
        title: "パプリカ / Foorin×米津玄師",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "31:13"
    },
    {
        title: "ひとりごつ / ハチワレ",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "37:22"
    },
    {
        title: "となりのトトロ / 井上あずみ",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "41:03"
    },
    {
        title: "ハルノヒ / あいみょん",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "47:11"
    },
    {
        title: "蝶々結び / Aimer",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "54:52"
    },
    {
        title: "虹 / 菅田将暉",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "01:01:58"
    },
    {
        title: "ありがとう / いきものがかり",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=xzpS0OdWOTTQ9It2",
        time: "01:09:13"
    },
    {
        title: "ハム太郎とっとこうた / ハムちゃんず",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "05:54"
    },
    {
        title: "DANZEN!ふたりはプリキュア Ver. Max Heart / 五條真由美",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "08:59"
    },
    {
        title: "1・2・3 / After the Rain",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "15:46"
    },
    {
        title: "新時代 / ウタ（Ado）",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "24:05"
    },
    {
        title: "パプリカ / Foorin×米津玄師",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "31:13"
    },
    {
        title: "ひとりごつ / ハチワレ",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "37:22"
    },
    {
        title: "となりのトトロ / 井上あずみ",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "41:03"
    },
    {
        title: "ハルノヒ / あいみょん",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "47:11"
    },
    {
        title: "蝶々結び / Aimer",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "54:52"
    },
    {
        title: "虹 / 菅田将暉",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "01:01:58"
    },
    {
        title: "ありがとう / いきものがかり",
        date: "2026/05/07",
        videoTitle: "【 歌枠 】にじ3Dで歌っていくよ～！！！🎤✨【 にじさんじ / 珠乃井ナナ 】",
        url: "https://www.youtube.com/live/aEadgQ9KMcA?si=7qzjI-QgsutI_Lqh",
        time: "01:09:13"
    },

    {
    title: "ビードロ模様 / やなぎなぎ",
    date: "2026/04/24",
    videoTitle: "【 #珠乃井ナナ生誕祭2026 】新衣装で歌っちゃいましょう！！！🎤✨【にじさんじ / 珠乃井ナナ】",
    url: "https://www.youtube.com/live/B_IYyMI2G5o?si=cevGQXck1Y3YajuT",
    time: "05:37"
    },
    {
        title: "春泥棒 / ヨルシカ",
        date: "2026/04/24",
        videoTitle: "【 #珠乃井ナナ生誕祭2026 】新衣装で歌っちゃいましょう！！！🎤✨【にじさんじ / 珠乃井ナナ】",
        url: "https://www.youtube.com/live/B_IYyMI2G5o?si=cevGQXck1Y3YajuT",
        time: "11:56"
    },
    {
        title: "水平線 / back number",
        date: "2026/04/24",
        videoTitle: "【 #珠乃井ナナ生誕祭2026 】新衣装で歌っちゃいましょう！！！🎤✨【にじさんじ / 珠乃井ナナ】",
        url: "https://www.youtube.com/live/B_IYyMI2G5o?si=cevGQXck1Y3YajuT",
        time: "19:05"
    },
    {
        title: "モニタリング / DECO*27 feat. 初音ミク",
        date: "2026/04/24",
        videoTitle: "【 #珠乃井ナナ生誕祭2026 】新衣装で歌っちゃいましょう！！！🎤✨【にじさんじ / 珠乃井ナナ】",
        url: "https://www.youtube.com/live/B_IYyMI2G5o?si=cevGQXck1Y3YajuT",
        time: "25:46"
    },
    {
        title: "百花繚乱 / 幾田りら",
        date: "2026/04/24",
        videoTitle: "【 #珠乃井ナナ生誕祭2026 】新衣装で歌っちゃいましょう！！！🎤✨【にじさんじ / 珠乃井ナナ】",
        url: "https://www.youtube.com/live/B_IYyMI2G5o?si=cevGQXck1Y3YajuT",
        time: "34:51"
    },
    {
        title: "星屑ビーナス / Aimer",
        date: "2026/04/24",
        videoTitle: "【 #珠乃井ナナ生誕祭2026 】新衣装で歌っちゃいましょう！！！🎤✨【にじさんじ / 珠乃井ナナ】",
        url: "https://www.youtube.com/live/B_IYyMI2G5o?si=cevGQXck1Y3YajuT",
        time: "41:20"
    },
    {
        title: "Soranji / Mrs. GREEN APPLE",
        date: "2026/04/24",
        videoTitle: "【 #珠乃井ナナ生誕祭2026 】新衣装で歌っちゃいましょう！！！🎤✨【にじさんじ / 珠乃井ナナ】",
        url: "https://www.youtube.com/live/B_IYyMI2G5o?si=cevGQXck1Y3YajuT",
        time: "47:05"
    },
    {
        title: "花束を君に / 宇多田ヒカル",
        date: "2026/04/24",
        videoTitle: "【 #珠乃井ナナ生誕祭2026 】新衣装で歌っちゃいましょう！！！🎤✨【にじさんじ / 珠乃井ナナ】",
        url: "https://www.youtube.com/live/B_IYyMI2G5o?si=cevGQXck1Y3YajuT",
        time: "55:22"
    },

    {
        title: "忘れじの言の葉 / 未来古代楽団 feat. 安次嶺希和子",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "05:59"
    },
    {
        title: "シンデレラボーイ / Saucy Dog",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "13:06"
    },
    {
        title: "左右盲 / ヨルシカ",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "20:32"
    },
    {
        title: "ただ声一つ / ロクデナシ",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "29:04"
    },
    {
        title: "ボクノート / スキマスイッチ",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "33:36"
    },
    {
        title: "3月9日 / レミオロメン",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "41:45"
    },
    {
        title: "Oz. / yama",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "49:16"
    },
    {
        title: "なんでもないや / RADWIMPS",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "55:58"
    },
    {
        title: "月のワルツ / 諫山実生",
        date: "2026/03/27",
        videoTitle: "【歌枠】しっとりバラード歌枠🌃【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/8qD11V7ixeM?si=pK0tQevsdVcbTudD",
        time: "1:04:52 "
    },

    {
        title: "DAN DAN 心魅かれてく / FIELD OF VIEW",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "01:53"
    },
    {
        title: "あなただけ見つめてる / 大黒摩季",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "08:23"
    },
    {
        title: "Sign / FLOW",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "16:17"
    },
    {
        title: "chAngE / miwa",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "23:44"
    },
    {
        title: "FLY HIGH!! / BURNOUT SYNDROMES",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "31:23"
    },
    {
        title: "カーテンコール / 優里",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "37:59"
    },
    {
        title: "青のすみか / キタニタツヤ",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "45:11"
    },
    {
        title: "葛飾ラプソディー / 堂島孝平",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "51:09"
    },
    {
        title: "サムライハート (Some Like It Hot!!) / SPYAIR",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "56:06"
    },
    {
        title: "ココロのちず / BOYSTYLE",
        date: "2026/03/17",
        videoTitle: "【 カラオケ 】友情！努力！勝利！の少年漫画作品歌枠！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/b-P-71jE-PI?si=1G3Xr6OBnNips0mF",
        time: "01:02:16"
    },

    {
        title: "RPG / SEKAI NO OWARI",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:01"
    },
    {
        title: "灰色と青 / 米津玄師＆菅田将暉",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "09:44"
    },
    {
        title: "ワールドイズマイン / ryo",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "17:09"
    },
    {
        title: "Just Be Friends / Dixie Flatline",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "23:44"
    },
    {
        title: "ひまわりの約束 / 秦基博",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "30:44"
    },
    {
        title: "マイフレンド / ZARD",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "38:04"
    },
    {
        title: "世界のつづき / Ado",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "44:37"
    },
    {
        title: "晴る / ヨルシカ",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "50:53"
    },
    {
        title: "lulu, / Mrs. GREEN APPLE",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "57:13"
    },
    {
        title: "ゴールデンタイムラバー / スキマスイッチ",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:04:00"
    },
    {
        title: "乱舞のメロディ / シド",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:11:06"
    },
    {
        title: "らしさ / Official髭男dism",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:16:23"
    },
    {
        title: "友よ～この先もずっと… / ケツメイシ",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:23:44"
    },
    {
        title: "全力少年 / スキマスイッチ",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:30:36"
    },
    {
        title: "僕らまた / SG",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:35:33"
    },
    {
        title: "more than words / 羊文学",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:40:16"
    },
    {
        title: "春の歌 / スピッツ",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:47:04"
    },
    {
        title: "夢をかなえてドラえもん / mao",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "01:53:05"
    },
    {
        title: "ファンファーレ / sumika",
        date: "2026/03/07",
        videoTitle: "【 カラエケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:00:30"
    },
    {
        title: "心做し / 蝶々P feat. GUMI",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:05:18"
    },
    {
        title: "アイロニ / すこっぷ",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:11:07"
    },
    {
        title: "I beg you / Aimer",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:18:07"
    },
    {
        title: "春はゆく / Aimer",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:23:26"
    },
    {
        title: "たばこ / コレサワ",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:30:30"
    },
    {
        title: "ガーネット / 奥華子",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:37:58"
    },
    {
        title: "Beautiful World / 宇多田ヒカル",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:43:53"
    },
    {
        title: "Ghost of a smile / EGOIST",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:49:32"
    },
    {
        title: "世界の約束 / 倍賞千恵子",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "02:55:56"
    },
    {
        title: "プラチナ / 坂本真綾",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "03:01:01"
    },
    {
        title: "ray / BUMP OF CHICKEN",
        date: "2026/03/07",
        videoTitle: "【 カラオケ 】30万人記念歌枠！感謝の気持ちを込めていっぱい歌うよ～！！！！🎤💓✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/A2SdplCJEeA?si=BNZFBirhgiCwh0DX",
        time: "03:08:41"
    },

    {
        title: "forフルーツバスケット / 岡崎律子",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "08:21"
    },
    {
        title: "いかないで / 想太",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "17:29"
    },
    {
        title: "アイネクライネ / 米津玄師",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "23:41"
    },
    {
        title: "アイコトバ / アイナ・ジ・エンド",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "30:58"
    },
    {
        title: "ハロ/ハワユ / ナノウ",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "39:09"
    },
    {
        title: "Sincerely / TRUE",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "46:32"
    },
    {
        title: "One more time, One more chance / 山崎まさよし",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "53:50"
    },
    {
        title: "たしかなこと / 小田和正",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "01:02:07"
    },
    {
        title: "ウィアートル / rionos",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "01:09:15"
    },
    {
        title: "君の夢 / 珠乃井ナナ",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "01:17:51"
    },
    {
        title: "一番の宝物 / Angel Beats!",
        date: "2026/01/27",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "01:24:59"
    },

    {
        title: "U / millennium parade × Belle",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "05:43"
    },
    {
        title: "ひゅるりらぱっぱ / tuki.",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "11:05"
    },
    {
        title: "勇者 / YOASOBI",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "17:25"
    },
    {
        title: "残酷な夜に輝け / LiSA",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお!🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "22:52"
    },
    {
        title: "IRIS OUT / 米津玄師",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "31:09"
    },
    {
        title: "give it back / Cö shu Nie",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "35:30"
    },
    {
        title: "シルエット / KANA-BOON",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "42:29"
    },
    {
        title: "風のゆくえ / Ado",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "47:46"
    },
    {
        title: "アゲハ蝶 / ポルノグラフィティ",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "53:37"
    },
    {
        title: "スパークル / RADWIMPS",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "01:00:40"
    },
    {
        title: "創聖のアクエリオン / AKINO",
        date: "2026/01/07",
        videoTitle: "【歌枠】2026年初ナナの日歌枠だぁーーーー！！歌うぞおおおお！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/LjxuB9iKLi4?si=_DdoNnjYwjqKvI78",
        time: "01:09:23"
    },

    {
        title: "白い雪のプリンセスは / のぼる↑",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "05:22"
    },
    {
        title: "クリスマス・イブ / 山下達郎",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "13:32"
    },
    {
        title: "ふゆびより / 佐々木恵梨",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "19:28"
    },
    {
        title: "好き！雪！本気マジック / Mitchie M",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "27:22"
    },
    {
        title: "夜撫でるメノウ / Ayase",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "33:25"
    },
    {
        title: "ベテルギウス / 優里",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "41:39"
    },
    {
        title: "粉雪 / レミオロメン",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "47:27"
    },
    {
        title: "深愛 / 水樹奈々",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "55:39"
    },
    {
        title: "115万キロのフィルム / Official髭男dism",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "01:03:21"
    },
    {
        title: "心絵 / ロードオブメジャー",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "01:11:04"
    },
    {
        title: "雪の華 / 中島 美嘉",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "01:17:27"
    },
    {
        title: "ソラニン / ASIAN KUNG-FU GENERATION",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "01:26:47"
    },
    {
        title: "猫 / DISH//",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "01:33:23"
    },
    {
        title: "メランコリック / Junky",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "01:40:22"
    },
    {
        title: "心拍数#0822 / 蝶々P",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "01:46:36"
    },
    {
        title: "千の夜をこえて / Aqua Timez",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "01:53:47"
    },
    {
        title: "夜もすがら君想ふ / 西沢さんP",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "02:00:06"
    },
    {
        title: "六等星の夜 / Aimer",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "02:05:45"
    },
    {
        title: "Everything / MISIA",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "02:13:10"
    },
    {
        title: "Snow halation / μ's",
        date: "2025/12/29",
        videoTitle: "【歌枠】デビュー1.5周年記念！みんなからリクエストしてもらった曲歌うよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/A9vtPXPPuNw?si=x_R8qUS7B1KpIRl2",
        time: "02:25:01"
    },

    {
        title: "Rolling star / YUI",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "09:12"
    },
    {
        title: "美しい鰭 / スピッツ",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "14:35"
    },
    {
        title: "革命道中 / アイナ・ジ・エンド",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "20:24"
    },
    {
        title: "ナハトムジーク / Mrs. GREEN APPLE",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "25:54"
    },
    {
        title: "Tot Musica / Ado",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "33:37"
    },
    {
        title: "それを愛と呼ぶなら / Uru",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "40:49"
    },
    {
        title: "忘れてください / ヨルシカ",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "48:43"
    },
    {
        title: "忘れてください / ヨルシカ",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "52:28"
    },
    {
        title: "幾億光年 / Omoinotake",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "59:16"
    },
    {
        title: "僕が死のうと思ったのは / 中島 美嘉",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "01:06:39"
    },
    {
        title: "StarRingChild / Aimer",
        date: "2025/11/07",
        videoTitle: "【縦型配信 / 歌枠】歌う！！！！！！！🎤✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/ezlpvm0URgA?si=Cul2eOVss9E0gDeF",
        time: "01:15:29"
    },

    {
        title: "ファッションモンスター / きゃりーぱみゅぱみゅ",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "06:23"
    },
    {
        title: "ヴィラン / てにをは feat.flower",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "14:14"
    },
    {
        title: "ビビデバ / 星街すいせい",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "20:23"
    },
    {
        title: "IRIS OUT / 米津玄師",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "25:36"
    },
    {
        title: "オトノケ / Creepy Nuts",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "30:32"
    },
    {
        title: "唱 / Ado",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "36:40"
    },
    {
        title: "ド屑 / なきそ",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "42:04"
    },
    {
        title: "怪物 / YOASOBI",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "46:06"
    },
    {
        title: "月に吠える / ヨルシカ",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "51:56"
    },
    {
        title: "ヴァンパイア / DECO*27",
        date: "2025/10/27",
        videoTitle: "【歌枠】もうすぐハロウィン！魑魅魍魎！な曲を歌ってくよ～！🎃👻🦇【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/MAJL9MiokcQ?si=-axNHOzwJyzQ5GnP",
        time: "58:39"
    },

    {
        title: "第ゼロ感 / 10-FEET",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "02:07"
    },
    {
        title: "決戦スピリット / CHiCO with HoneyWorks",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "09:16"
    },
    {
        title: "宿命 / Official髭男dism",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "16:04"
    },
    {
        title: "僕のこと / Mrs. GREEN APPLE",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "23:59"
    },
    {
        title: "私は最強 / Ado",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "31:47"
    },
    {
        title: "BOW AND ARROW / 米津玄師",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "38:38"
    },
    {
        title: "Hero too / KYOKA JIRO Starring Chrissy Costanza",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "44:17"
    },
    {
        title: "サザンカ / SEKAI NO OWARI",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "50:39"
    },
    {
        title: "閃光 / [Alexandros]",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "57:04"
    },
    {
        title: "タマシイレボリューション / Superfly",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "01:03:47"
    },
    {
        title: "できっこないを やらなくちゃ / サンボマスター",
        date: "2025/10/07",
        videoTitle: "【歌枠】スポーツ応援ソング歌うぞ～～～～～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/6C1IIRaV-Dg?si=waZVa_GB_BUzwefs",
        time: "01:09:08"
    },

    {
        title: "ムーンライト伝説 / HEART MOVING",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "05:58"
    },
    {
        title: "ツキアカリのミチシルベ / ステレオポニー",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "12:08"
    },
    {
        title: "月を見ていた / 米津玄師",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "19:43"
    },
    {
        title: "今宵の月のように / エレファントカシマシ",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "27:17"
    },
    {
        title: "回る空うさぎ / Orangestar",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "33:42"
    },
    {
        title: "三日月 / 絢香",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "40:19"
    },
    {
        title: "ミカヅキ / さユり",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "47:06"
    },
    {
        title: "月に吠える / ヨルシカ",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "53:30"
    },
    {
        title: "だんご大家族 / 茶太",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "01:00:33"
    },
    {
        title: "月のワルツ / 諫山実生",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "01:07:44"
    },
    {
        title: "月光 / 鬼束ちひろ",
        date: "2025/10/01",
        videoTitle: "【歌枠】もうすぐ中秋の名月！月を感じる曲歌っていくよ～！🎤🌕【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/r7WKUiXtdHc?si=6A8fiheV4ZJvzMxA",
        time: "01:15:31"
    },

    {
        title: "渡月橋 ～君 想ふ～ / 倉木麻衣",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "04:23"
    },
    {
        title: "魔性の女A / 紫今",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "10:27"
    },
    {
        title: "拍手喝采歌合 / supercell",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "17:27"
    },
    {
        title: "残響散歌 / Aimer",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "24:30"
    },
    {
        title: "甲賀忍法帖 / 陰陽座",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "30:20"
    },
    {
        title: "鬼ノ宴 / 友成空",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "38:33"
    },
    {
        title: "花になって / 緑黄色社会",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "43:09"
    },
    {
        title: "寄り酔い / 和ぬか",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "48:43"
    },
    {
        title: "ひゅるりらぱっぱ / tuki.",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "54:34"
    },
    {
        title: "ひぐらしのなく頃に / 島みやえい子",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "59:51"
    },
    {
        title: "千本桜 / 黒うさP",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "01:06:25"
    },
    {
        title: "炎 / LiSA",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "01:12:40"
    },
    {
        title: "茜さす / Aimer",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "01:20:45"
    },
    {
        title: "紅蓮華 / LiSA",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "01:29:03"
    },
    {
        title: "春よ、来い / 松任谷由実",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "01:38:54"
    },
    {
        title: "プラネタリウム / 大塚愛",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "01:45:12"
    },
    {
        title: "竈門炭治郎のうた / 椎名豪 featuring 中川奈美",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "01:52:39"
    },
    {
        title: "いつも何度でも / 木村弓",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "02:00:45"
    },
    {
        title: "甲賀忍法帖 / 陰陽座",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "02:07:50"
    },
    {
        title: "神のまにまに / れるりり",
        date: "2025/09/17",
        videoTitle: "【歌枠】25万人耐久！和を感じる曲歌っていくよ～！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c_vTCF4K0Lc?si=PhIasJT1X7g6w_A_",
        time: "02:15:00"
    },

    {
        title: "星座になれたら / 結束バンド",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "04:51"
    },
    {
        title: "more than words / 羊文学",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "12:00"
    },
    {
        title: "革命道中 / アイナ・ジ・エンド",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "19:16"
    },
    {
        title: "ハッピーラッキーチャッピー / あの",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "25:34"
    },
    {
        title: "クスシキ / Mrs. GREEN APPLE",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "31:16"
    },
    {
        title: "Plazma / 米津玄師",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "36:44"
    },
    {
        title: "Oz. / yama",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "42:20"
    },
    {
        title: "燈 / 崎山蒼志",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "48:54"
    },
    {
        title: "斜陽 / ヨルシカ",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "55:59"
    },
    {
        title: "相思相愛 / aiko",
        date: "2025/09/07",
        videoTitle: "【歌枠】アニソンいっぱい歌ってくよ～！！！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/a3m0TEAv1TQ?si=LwbH_uGKG21F0bC9",
        time: "01:01:04"
    },

    {
        title: "風になりたい / THE BOOM",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "06:09"
    },
    {
        title: "雲と幽霊 / ヨルシカ",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "12:21"
    },
    {
        title: "マリーゴールド / あいみょん",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "20:54"
    },
    {
        title: "Ghost of a smile / EGOIST",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "28:30"
    },
    {
        title: "若者のすべて / フジファブリック",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "35:50"
    },
    {
        title: "夏の終わり / 森山直太朗",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "44:08"
    },
    {
        title: "少年時代 / 井上陽水",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "52:24"
    },
    {
        title: "セプテンバーさん / RADWIMPS",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "58:51"
    },
    {
        title: "いかないで / 想太",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "01:05:38"
    },
    {
        title: "secret base ～君がくれたもの～ / ZONE",
        date: "2025/08/27",
        videoTitle: "【歌枠】夏の終わりを感じる曲を歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/c0hUErA28ek?si=wJFRkcyL0KXwpCIM",
        time: "01:11:11"
    },

    {
        title: "青のすみか / キタニタツヤ",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "06:08"
    },
    {
        title: "ビードロ模様 / やなぎなぎ",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "12:42"
    },
    {
        title: "風になる / つじあやの",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "21:24"
    },
    {
        title: "サマータイムレコード / じん feat. IA",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "28:40"
    },
    {
        title: "ファジーネーブル / Conton Candy",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "36:56"
    },
    {
        title: "ただ君に晴れ / ヨルシカ",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "44:19"
    },
    {
        title: "風のゆくえ / Ado",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "49:47"
    },
    {
        title: "鳥の詩 / Lia",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "57:31"
    },
    {
        title: "忘れじの言の葉 / 未来古代楽団 feat. 安次嶺希和子",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "01:07:07"
    },
    {
        title: "名前のない怪物 / EGOIST",
        date: "2025/08/19",
        videoTitle: "【歌枠】新衣装で歌っていくよ～！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/zsHtxa4PE_k?si=gD4LwHjDn1n-ivo0",
        time: "01:15:55"
    },

    {
        title: "変わらないもの / 奥華子",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "05:10"
    },
    {
        title: "ナハトムジーク / Mrs. GREEN APPLE",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "12:15"
    },
    {
        title: "give it back / Cö shu Nie",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "20:45"
    },
    {
        title: "Answer / 幾田りら",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "28:30"
    },
    {
        title: "地球儀 / 米津玄師",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "36:00"
    },
    {
        title: "海の声 / 桐谷健太",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "44:20"
    },
    {
        title: "夜明けと蛍 / n-buna",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "52:15"
    },
    {
        title: "小さなてのひら / riya",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "01:01:05"
    },
    {
        title: "いつも何度でも / 木村弓",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "01:08:50"
    },
    {
        title: "深海のリトルクライ / sasakure.UK",
        date: "2025/07/27",
        videoTitle: "【歌枠】寝る前に聴きたい曲を歌っていくよ～！🎤💤【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/oP663V-yvjI",
        time: "01:17:40"
    },

    {
        title: "打上花火 / DAOKO×米津玄師",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "05:37"
    },
    {
        title: "プラネタリウム / 大塚愛",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "12:52"
    },
    {
        title: "アイのシナリオ / CHiCO with HoneyWorks",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "20:48"
    },
    {
        title: "小さきもの / 林明日香",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "28:17"
    },
    {
        title: "花の塔 / さユり",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "36:31"
    },
    {
        title: "花に亡霊 / ヨルシカ",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "44:22"
    },
    {
        title: "ハロ/ハワユ / ナノウ",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "52:14"
    },
    {
        title: "あの夏が飽和する / カンザキイオリ",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "59:21"
    },
    {
        title: "空色デイズ / 中川翔子",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "01:08:39"
    },
    {
        title: "点描の唄 / Mrs. GREEN APPLE",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "01:14:26"
    },
    {
        title: "うたかた花火 / Supercell",
        date: "2025/07/17",
        videoTitle: "【歌枠】みんなからもらったリクエスト曲を歌う！！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/auy95jxJfCQ?si=pmpagBpYMzqmfY0A",
        time: "01:24:11"
    },

    {
        title: "かわいいだけじゃだめですか？ / CUTIE STREET",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "06:47"
    },
    {
        title: "みむかｩわナイストライ / ぬ*16",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "14:04"
    },
    {
        title: "Bling-Bang-Bang-Born / Creepy Nuts",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "21:00"
    },
    {
        title: "Bunny Girl / AKASAKI",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "26:27"
    },
    {
        title: "晩餐歌 / tuki.",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "33:56"
    },
    {
        title: "Soranji / Mrs. GREEN APPLE",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "39:32"
    },
    {
        title: "Anytime Anywhere / milet",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "47:25"
    },
    {
        title: "Plazma / 米津玄師",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "53:48"
    },
    {
        title: "怪獣 / サカナクション",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "59:17"
    },
    {
        title: "ダーリン / Mrs. GREEN APPLE",
        date: "2025/06/27",
        videoTitle: "【歌枠】2025年上半期のヒット曲を歌ってくよ～！！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rFzSXJMwl68?si=7BGRHOvjxTIGJaWW",
        time: "01:06:11"
    },

    {
        title: "Together / あきよしふみえ",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "02:57"
    },
    {
        title: "fantastic dreamer / Machico",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "10:04"
    },
    {
        title: "ゴーストルール / DECO*27",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "15:29"
    },
    {
        title: "テレパシ / DECO*27",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "20:35"
    },
    {
        title: "奇跡の海 / 坂本真綾",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "26:10"
    },
    {
        title: "My Dearest / supercell",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "31:25"
    },
    {
        title: "フリージア / Uru",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "38:52"
    },
    {
        title: "クスシキ / Mrs. GREEN APPLE",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "46:35"
    },
    {
        title: "アイネクライネ / 米津玄師",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "52:01"
    },
    {
        title: "Subtitle / Official髭男dism",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "58:35"
    },
    {
        title: "ロマンティックあげるよ / 橋本潮",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:05:05"
    },
    {
        title: "新時代 / ウタ",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:11:02"
    },
    {
        title: "林檎売りの泡沫少女 / yukkedoluce",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:16:43"
    },
    {
        title: "火星人 / ヨルシカ",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:24:05"
    },
    {
        title: "inside you / milet",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:29:37"
    },
    {
        title: "エンヴィーベイビー / Kanaria",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:34:43"
    },
    {
        title: "みつぼしパレード / さんばか",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:39:12"
    },
    {
        title: "ダンスホール / Mrs. GREEN APPLE",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:46:32"
    },
    {
        title: "Fine on The Outside / プリシラ・アーン",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:51:51"
    },
    {
        title: "おかあさんの唄 / アン・サリー",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "01:57:35"
    },
    {
        title: "ニア / 夏代孝明",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "02:04:40"
    },
    {
        title: "からくりピエロ / 40mP",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "02:10:12"
    },
    {
        title: "悪魔の子 / ヒグチアイ",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "02:15:50"
    },
    {
        title: "RE:I AM / Aimer",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "02:21:56"
    },
    {
        title: "君の知らない物語 / supercell",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "02:30:08"
    },
    {
        title: "愛をこめて花束を / Superfly",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "02:37:57"
    },
    {
        title: "貴方の恋人になりたい / チョーキューメイ",
        date: "2025/06/19",
        videoTitle: "【歌枠】デビュー1周年記念歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/Vqj4bLPt2PU?si=QU4HPt88j5b-sEEx",
        time: "02:48:14"
    },

    {
        title: "雨とカプチーノ / ヨルシカ",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "05:22"
    },
    {
        title: "限りなく灰色へ / すりぃ feat. 鏡音レン",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "12:43"
    },
    {
        title: "RAIN / SEKAI NO OWARI",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "20:03"
    },
    {
        title: "虹 / 菅田将暉",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "28:30"
    },
    {
        title: "ファンファーレ / Sumika",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "34:17"
    },
    {
        title: "SUN / 星野源",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "39:01"
    },
    {
        title: "ロビンソン / スピッツ",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "45:08"
    },
    {
        title: "fake face dance music / 音田雅則",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "52:21"
    },
    {
        title: "ベテルギウス / 優里",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "56:51"
    },
    {
        title: "回る空うさぎ / Orangestar feat. 初音ミク",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "01:02:52"
    },
    {
        title: "StarRingChild / Aimer",
        date: "2025/06/07",
        videoTitle: "【歌枠】「空」を見上げたくなる歌枠🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/J3DZyEFdNG8?si=IZ4P72wAIwJn-Imu",
        time: "01:09:09"
    },

    {
        title: "Rolling star / YUI",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "04:33"
    },
    {
        title: "明日の私に幸あれ / ナナヲアカリ",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "09:03"
    },
    {
        title: "廻廻奇譚 / Eve",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "15:05"
    },
    {
        title: "more than words / 羊文学",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "20:22"
    },
    {
        title: "イエスタデイ / Official髭男dism",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "26:58"
    },
    {
        title: "シュガーソングとビターステップ / UNISON SQUARE GARDEN",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "33:21"
    },
    {
        title: "怪獣の花唄 / Vaundy",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "47:23"
    },
    {
        title: "怪獣 / サカナクション",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "54:40"
    },
    {
        title: "だれかの心臓になれたなら / ユリイ・カノン",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "01:00:34"
    },
    {
        title: "スパークル / RADWIMPS",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "01:06:36"
    },
    {
        title: "カタオモイ / Aimer",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "01:15:02"
    },
    {
        title: "Sincerely / TRUE",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "01:21:14"
    },
    {
        title: "I beg you / Aimer",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "01:29:38"
    },
    {
        title: "Ghost of a smile / EGOIST",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "01:36:30"
    },
    {
        title: "ノーチラス / ヨルシカ",
        date: "2025/05/24",
        videoTitle: "【歌枠】20万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/_xR4BUOrx7A?si=NA_cZPSEeegOQVYK",
        time: "01:46:28"
    },

    {
        title: "ワタリドリ / [Alexandros]",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "07:07"
    },
    {
        title: "風になる / つじあやの",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "13:27"
    },
    {
        title: "水流のロック / 日食なつこ",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "19:51"
    },
    {
        title: "地球最後の告白を / kemu",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "25:12"
    },
    {
        title: "Magic / Mrs. GREEN APPLE",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "32:19"
    },
    {
        title: "宿命 / Official髭男dism",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "39:10"
    },
    {
        title: "グランドエスケープ / RADWIMPS",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "45:54"
    },
    {
        title: "空も飛べるはず / スピッツ",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "50:46"
    },
    {
        title: "運命 / sumika",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "57:47"
    },
    {
        title: "サマータイムレコード / じん",
        date: "2025/05/07",
        videoTitle: "【歌枠】五月病なんて吹き飛ばせ！疾走感！清涼感！爽やかソング歌っていくよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/JnT5mWRgh5M?si=87-9tUdlhOq6GswA",
        time: "01:03:58"
    },

    {
        title: "StaRt / Mrs. GREEN APPLE",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:02"
    },
    {
        title: "星座になれたら / 結束バンド",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:53"
    },
    {
        title: "忘れてやらない / 結束バンド",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "10:22"
    },
    {
        title: "はいよろこんで / こっちのけんと",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "15:21"
    },
    {
        title: "ビードロ模様 / やなぎなぎ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "19:08"
    },
    {
        title: "ファジーネーブル / Conton Candy",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "24:10"
    },
    {
        title: "CHE.R.RY / YUI",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "31:37"
    },
    {
        title: "CHA-LA HEAD-CHA-LA / 影山ヒロノブ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "43:46"
    },
    {
        title: "約束はいらない / 坂本真綾",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "47:12"
    },
    {
        title: "空色デイズ / 中川翔子",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "52:11"
    },
    {
        title: "GO!!! / FLOW",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "56:35"
    },
    {
        title: "すずめ / RADWIMPS",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:02:04"
    },
    {
        title: "斜陽 / ヨルシカ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:07:13"
    },
    {
        title: "雨とカプチーノ / ヨルシカ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:10:52"
    },
    {
        title: "ハム太郎とっとこうた / ハムちゃんず",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:25:55"
    },
    {
        title: "しんでしまうとはなさけない！ / じーざすP",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:31:36"
    },
    {
        title: "ヴィラン / てにをは",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:41:55"
    },
    {
        title: "ひまわりの約束 / 秦 基博",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:46:36"
    },
    {
        title: "雲と幽霊 / ヨルシカ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:52:33"
    },
    {
        title: "晩餐歌 / tuki.",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "01:58:06"
    },
    {
        title: "鬼ノ宴 / 友成空",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "02:02:43"
    },
    {
        title: "ウィアートル / Rionos",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "02:07:00"
    },
    {
        title: "虹 / 菅田将暉",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "02:11:59"
    },
    {
        title: "ガーネット / 奥華子",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "02:17:37"
    },
    {
        title: "1･2･3 / After the Rain",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "02:26:43"
    },
    {
        title: "ひぐらしのなく頃に / 島みやえい子",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "02:43:38"
    },
    {
        title: "悲しみの向こうへ / いとうかなこ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "02:48:22"
    },
    {
        title: "Beautiful World / 宇多田ヒカル",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "03:09:45"
    },
    {
        title: "魂のルフラン / 高橋洋子",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "03:15:12"
    },
    {
        title: "Hero too / KYOKA JIRO Starring Chrissy Costanza 耳郎響香",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "03:21:34"
    },
    {
        title: "残響散歌 / Aimer",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "03:26:50"
    },
    {
        title: "シャルル / バルーン",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "03:30:58"
    },
    {
        title: "マーシャル･マキシマイザー / 柊マグネタイト",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "03:35:04"
    },
    {
        title: "CLEAR / 坂本真綾",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "03:42:58"
    },
    {
        title: "トウキョウ･シャンディ•ランデヴ / MAISONdes feat. 花譜，ツミキ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:10:35"
    },
    {
        title: "いのちの名前 / 木村弓",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:15:07"
    },
    {
        title: "いつも何度でも / 木村弓",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:19:08"
    },
    {
        title: "ルージュの伝言 / 荒井由美（松任谷由美）",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:23:43"
    },
    {
        title: "もののけ姫 / 米良美一",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:26:54"
    },
    {
        title: "私は最強 / Ado",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:32:03"
    },
    {
        title: "ミックスナッツ / Official 髭男 dism",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:38:16"
    },
    {
        title: "BOW AND ARROW / 米津玄師",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:41:57"
    },
    {
        title: "だから僕は音楽を辞めた / ヨルシカ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "04:50:13"
    },
    {
        title: "アポリア / ヨルシカ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:02:03"
    },
    {
        title: "アゲハ蝶 / ポルノグラフィティ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:07:05"
    },
    {
        title: "butter-fly / 和田光司",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:13:59"
    },
    {
        title: "タバコ / コレサワ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:19:45"
    },
    {
        title: "ハロ/ハワユ / ナノウ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:26:07"
    },
    {
        title: "フォニイ / ツミキ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:32:02"
    },
    {
        title: "きょういくばんぐみのテーマ / やみの おねえさん",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:35:46"
    },
    {
        title: "粛清︎ロリ神レクイエム︎ / しぐれうい",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:39:36"
    },
    {
        title: "フリージア / Uru",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "05:48:51"
    },
    {
        title: "地球儀 / 米津玄師",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "06:04:26"
    },
    {
        title: "世界の約束 / 倍賞千恵子",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "06:09:09"
    },
    {
        title: "時の歌 / 手嶌葵",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "06:25:52"
    },
    {
        title: "月のワルツ / 諫山実生",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "06:30:52"
    },
    {
        title: "ふわふわ時間 / 放課後ティータイム",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "06:36:15"
    },
    {
        title: "Wishing / レム（水瀬いのり）",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "06:40:44"
    },
    {
        title: "オーバーライド / 吉田夜世",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "06:47:35"
    },
    {
        title: "モニタリング / DECO*27",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "06:50:10"
    },
    {
        title: "Connecting / Halyosy",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:01:30"
    },
    {
        title: "Calc. / ジミーサムP",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:15:39"
    },
    {
        title: "フクロウ~フクロウが知らせる客が来たと~ / KOKIA",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:20:55"
    },
    {
        title: "ケセラセラ / Mrs. GREEN APPLE",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:26:50"
    },
    {
        title: "晴る / ヨルシカ",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:32:31"
    },
    {
        title: "Anytime Anywhere / Milet",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:37:53"
    },
    {
        title: "桜ノ雨 / absorb feat. 初音ミク",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:43:16"
    },
    {
        title: "プラチナ / 坂本真綾",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:50:15"
    },
    {
        title: "合言葉III / DECO*27",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "07:56:06"
    },
    {
        title: "ありがとう / いきものがかり",
        date: "2025/04/24",
        videoTitle: "【歌枠】誕生日77曲耐久歌枠！🎤🥳✨【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/5Y__4EdXdLk?si=hX3cOTmGXMNWJVBR",
        time: "08:03:46"
    },

    {
        title: "春擬き / やなぎなぎ",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "05:53"
    },
    {
        title: "SAKURA / いきものがかり",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "13:36"
    },
    {
        title: "CHE.R.RY / Yui",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "22:21"
    },
    {
        title: "春泥棒 / ヨルシカ",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "28:50"
    },
    {
        title: "春を告げる / Yama",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "36:20"
    },
    {
        title: "勿忘 / Awesome City Club",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "42:48"
    },
    {
        title: "春はゆく / Aimer",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "49:33"
    },
    {
        title: "チェリー / スピッツ",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "56:57"
    },
    {
        title: "千本桜 / 黒うさP",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "01:04:00"
    },
    {
        title: "春よ、来い / 松任谷由実",
        date: "2025/03/27",
        videoTitle: "【歌枠】春歌！いっぱい歌ってくよ～！🎤🌸【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eUlMpABZ28I?si=w7OqVm_RedJKsz_-",
        time: "01:10:48"
    },

    {
        title: "さよならメモリーズ / supercell",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "06:27"
    },
    {
        title: "3月9日 / レミオロメン",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "15:01"
    },
    {
        title: "さくら（独唱） / 森山直太朗",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "22:34"
    },
    {
        title: "僕のこと / Mrs. GREEN APPLE",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "29:53"
    },
    {
        title: "Anytime Anywhere / milet",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "38:30"
    },
    {
        title: "全力少年 / スキマスイッチ",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "45:22"
    },
    {
        title: "最高到達点 / SEKAI NO OWARI",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "52:49"
    },
    {
        title: "ともに / WANIMA",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "59:49"
    },
    {
        title: "天使にふれたよ！ / 放課後ティータイム",
        date: "2025/03/07",
        videoTitle: "【歌枠】卒業シーズン！新たな門出を迎えるみんなに届けたい曲を歌う！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/rsuOjsDbZVg?si=7Zao0kLFFINzF48o",
        time: "01:06:34"
    },
    {
        title: "初恋キラー / 乃紫",
        date: "2025/02/17",
        videoTitle: "【歌枠】いろんな恋曲歌う！🎤💓【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/spVQZNkbx-I?si=ySSUPiFkQ2u2oJeU",
        time: "06:48"
    },
    {
        title: "ロマンティックあげるよ / 橋本潮",
        date: "2025/02/17",
        videoTitle: "【歌枠】いろんな恋曲歌う！🎤💓【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/spVQZNkbx-I?si=ySSUPiFkQ2u2oJeU",
        time: "11:50"
    },
    {
        title: "カブトムシ / aiko",
        date: "2025/02/17",
        videoTitle: "【歌枠】いろんな恋曲歌う！🎤💓【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/spVQZNkbx-I?si=ySSUPiFkQ2u2oJeU",
        time: "18:05"
    },
    {
        title: "はじめてのチュウ / あんしんパパ",
        date: "2025/02/17",
        videoTitle: "【歌枠】いろんな恋曲歌う！🎤💓【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/spVQZNkbx-I?si=ySSUPiFkQ2u2oJeU",
        time: "25:59"
    },
    {
        title: "好きだから。 / ユイカ",
        date: "2025/02/17",
        videoTitle: "【歌枠】いろんな恋曲歌う！🎤💓【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/spVQZNkbx-I?si=ySSUPiFkQ2u2oJeU",
        time: "33:13"
    },
    {
        title: "愛のしるし / PUFFY",
        date: "2025/02/17",
        videoTitle: "【歌枠】いろんな恋曲歌う！🎤💓【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/spVQZNkbx-I?si=ySSUPiFkQ2u2oJeU",
        time: "40:42"
    },
    {
        title: "Wishing / レム(cv:水瀬いのり)",
        date: "2025/02/17",
        videoTitle: "【歌枠】いろんな恋曲歌う！🎤💓【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/spVQZNkbx-I?si=ySSUPiFkQ2u2oJeU",
        time: "45:47"
    },
    {
        title: "ロミオとシンデレラ / Doriko",
        date: "2025/02/17",
        videoTitle: "【歌枠】いろんな恋曲歌う！🎤💓【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/spVQZNkbx-I?si=ySSUPiFkQ2u2oJeU",
        time: "54:45"
    },
    {
        title: "ふゆびより / 佐々木恵梨",
        date: "2025/02/07",
        videoTitle: "【歌枠】冬歌多めの歌枠！⛄✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/wKjAesGYCZ8?si=JMBAsr6ckZfS2vNr",
        time: "06:02"
    },
    {
        title: "粉雪 / レミオロメン",
        date: "2025/02/07",
        videoTitle: "【歌枠】冬歌多めの歌枠！⛄✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/wKjAesGYCZ8?si=JMBAsr6ckZfS2vNr",
        time: "13:59"
    },
    {
        title: "Subtitle / Official髭男dism",
        date: "2025/02/07",
        videoTitle: "【歌枠】冬歌多めの歌枠！⛄✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/wKjAesGYCZ8?si=JMBAsr6ckZfS2vNr",
        time: "23:59"
    },
    {
        title: "フリージア / Uru",
        date: "2025/02/07",
        videoTitle: "【歌枠】冬歌多めの歌枠！⛄✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/wKjAesGYCZ8?si=JMBAsr6ckZfS2vNr",
        time: "32:46"
    },
    {
        title: "orion / 米津玄師",
        date: "2025/02/07",
        videoTitle: "【歌枠】冬歌多めの歌枠！⛄✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/wKjAesGYCZ8?si=JMBAsr6ckZfS2vNr",
        time: "42:57"
    },
    {
        title: "忘れてください / ヨルシカ",
        date: "2025/02/07",
        videoTitle: "【歌枠】冬歌多めの歌枠！⛄✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/wKjAesGYCZ8?si=JMBAsr6ckZfS2vNr",
        time: "51:21"
    },
    {
        title: "オリオンをなぞる / UNISON SQUARE GARDEN",
        date: "2025/02/07",
        videoTitle: "【歌枠】冬歌多めの歌枠！⛄✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/wKjAesGYCZ8?si=JMBAsr6ckZfS2vNr",
        time: "57:04"
    },
    {
        title: "燈 / 崎山蒼志",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "06:45"
    },
    {
        title: "斜陽 / ヨルシカ",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "14:23"
    },
    {
        title: "Soranji / Mrs. GREEN APPLE",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "20:37"
    },
    {
        title: "月のワルツ / 諫山実生",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "30:24"
    },
    {
        title: "エウテルペ / EGOIST",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "38:19"
    },
    {
        title: "たばこ / コレサワ",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "43:18"
    },
    {
        title: "アスノヨゾラ哨戒班(ピアノアレンジ) / Orangestar",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "51:59"
    },
    {
        title: "コイスルオトメ / いきものがかり",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "58:04"
    },
    {
        title: "夜明けと蛍 / N-buna feat. 初音ミク",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "01:05:57"
    },
    {
        title: "月のワルツ / 諫山実生",
        date: "2025/01/27",
        videoTitle: "【歌枠】エモくてノスタルジックな曲あつめて歌ってくよ🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/eEMFeb4AFAc?si=ssodbqm3oqBKS-zj",
        time: "01:18:37"
    },
    {
        title: "愛をとりもどせ!! ／ クリスタルキング",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "04:53"
    },
    {
        title: "CHA-LA HEAD-CHA-LA ／ 影山ヒロノブ",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "11:02"
    },
    {
        title: "Believe ／ Folder5",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "18:06"
    },
    {
        title: "God knows… ／ 涼宮ハルヒ",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "24:38"
    },
    {
        title: "ジョジョ～その血の運命～ ／ JO☆STARS ～TOMMY,Coda,JIN～",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "31:33"
    },
    {
        title: "sister's noise ／ fripSide",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "39:14"
    },
    {
        title: "プライド革命 ／ CHiCO with HoneyWorks",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "46:35"
    },
    {
        title: "RAGE OF DUST ／ SPYAIR",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "53:15"
    },
    {
        title: "RAGE OF DUST ／ SPYAIR",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "57:20"
    },
    {
        title: "ピースサイン ／ 米津玄師",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "01:02:31"
    },
    {
        title: "紅蓮華 ／ LiSA",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "01:08:27"
    },
    {
        title: "RAGE OF DUST ／ SPYAIR",
        date: "2025/01/17",
        videoTitle: "【歌枠】寒さを吹き飛ばせ！熱い！テンションが上がる！アニソン祭り！！🎤🔥【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/HyDoFWVrJ8A?si=eKwPS__wBoMSdBB2",
        time: "01:14:16"
    },
    {
        title: "晴る / ヨルシカ",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "08:11"
    },
    {
        title: "はいよろこんで / こっちのけんと",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "15:48"
    },
    {
        title: "First love / 宇多田ヒカル",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "21:38"
    },
    {
        title: "小さな恋のうた / モンゴル800",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "28:33"
    },
    {
        title: "ケセラセラ / Mrs. GREEN APPLE",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "35:18"
    },
    {
        title: "サウダージ / ポルノグラフィティ",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "42:38"
    },
    {
        title: "残酷な天使のテーゼ / 高橋洋子",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "49:19"
    },
    {
        title: "ドライフラワー / 優里",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "56:13"
    },
    {
        title: "晩餐歌 / Tuki.",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "01:02:45"
    },
    {
        title: "怪獣の花唄 / Vaundy",
        date: "2024/12/31",
        videoTitle: "【歌枠】2024年最後の歌枠！年間カラオケランキングの中からピックアップして歌っていくよ～！🎤✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/B4fnwr0nRNo?si=10741j1jv9gdeRPI",
        time: "01:08:05"
    },
    {
        title: "シルエット / KANA-BOON",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "03:19"
    },
    {
        title: "めざせポケモンマスター / 松本梨香",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "12:23"
    },
    {
        title: "悪魔の子 / ヒグチアイ",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "19:55"
    },
    {
        title: "水流のロック / 日食なつこ",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "27:26"
    },
    {
        title: "愛にできることはまだあるかい / RADWIMPS",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "34:28"
    },
    {
        title: "Shout baby / 緑黄色社会",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "43:59"
    },
    {
        title: "雫 / スキマスイッチ",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "52:10"
    },
    {
        title: "One more time, One more chance / 山崎まさよし",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "58:17"
    },
    {
        title: "回る空うさぎ / Orangestar feat. 初音ミク",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "01:07:15"
    },
    {
        title: "プラチナ / 坂本真綾",
        date: "2024/12/19",
        videoTitle: "【歌枠】半年記念に歌っていくよ～！🎤🎉✨【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/AmePwXqvsOQ?si=C5isJd0D9L2eVNJv",
        time: "01:14:11"
    },
    {
        title: "スパークル / RADWIMPS",
        date: "2024/11/17",
        videoTitle: "【歌枠】夜にしっとりバラード多め歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/ucdnk3akdNw?si=a_qp1ZGT0jodxZio",
        time: "04:41"
    },
    {
        title: "地球儀 / 米津玄師",
        date: "2024/11/17",
        videoTitle: "【歌枠】夜にしっとりバラード多め歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/ucdnk3akdNw?si=a_qp1ZGT0jodxZio",
        time: "14:28"
    },
    {
        title: "テルーの唄 / 手嶌葵",
        date: "2024/11/17",
        videoTitle: "【歌枠】夜にしっとりバラード多め歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/ucdnk3akdNw?si=a_qp1ZGT0jodxZio",
        time: "21:52"
    },
    {
        title: "世界の約束 / 倍賞千恵子",
        date: "2024/11/17",
        videoTitle: "【歌枠】夜にしっとりバラード多め歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/ucdnk3akdNw?si=a_qp1ZGT0jodxZio",
        time: "29:39"
    },
    {
        title: "アポリア / ヨルシカ",
        date: "2024/11/17",
        videoTitle: "【歌枠】夜にしっとりバラード多め歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/ucdnk3akdNw?si=a_qp1ZGT0jodxZio",
        time: "36:19"
    },
    {
        title: "いかないで / 想太",
        date: "2024/11/17",
        videoTitle: "【歌枠】夜にしっとりバラード多め歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/ucdnk3akdNw?si=a_qp1ZGT0jodxZio",
        time: "43:56"
    },
    {
        title: "からくりピエロ / 40mP",
        date: "2024/11/17",
        videoTitle: "【歌枠】夜にしっとりバラード多め歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/ucdnk3akdNw?si=a_qp1ZGT0jodxZio",
        time: "50:28"
    },
    {
        title: "スパークル / RADWIMPS",
        date: "2024/11/17",
        videoTitle: "【歌枠】夜にしっとりバラード多め歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/ucdnk3akdNw?si=a_qp1ZGT0jodxZio",
        time: "01:00:15"
    },
    {
        title: "廻廻奇譚 / Eve",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "03:37"
    },
    {
        title: "ちゅ、多様性。 / あの",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "09:32"
    },
    {
        title: "ミックスナッツ / official髭男dism",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "15:13"
    },
    {
        title: "英雄 運命の詩 / EGOIST",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "23:18"
    },
    {
        title: "虹 / 菅田将暉 / STAND BY ME",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "30:22"
    },
    {
        title: "いつも何度でも / 木村弓",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "37:03"
    },
    {
        title: "茜さす / Aimer",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "42:20"
    },
    {
        title: "THERE IS A REASON / 鈴木このみ",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "49:51"
    },
    {
        title: "ヴィーナスとジーザス / やくしまるえつこ",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "57:15"
    },
    {
        title: "ピースサイン / 米津玄師",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "01:02:15"
    },
    {
        title: "いつも何度でも / 木村弓",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "01:08:50"
    },
    {
        title: "ミックスナッツ / official髭男dism",
        date: "2024/11/07",
        videoTitle: "【歌枠】アニソン祭りだ～～！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/fN6TO08xx3Q?si=ude-h93kG6DGt_KA",
        time: "01:22:15"
    },
    {
        title: "1・2・3 / After the Rain",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "04:44"
    },
    {
        title: "粛聖!! ロリ神レクイエム☆ / しぐれうい",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "11:29"
    },
    {
        title: "晴る / ヨルシカ",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "22:42"
    },
    {
        title: "Beautiful World / 宇多田ヒカル",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "30:35"
    },
    {
        title: "シュガーソングとビターステップ / UNISON SQUARE GARDEN",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "37:49"
    },
    {
        title: "六等星の夜 / Aimer",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "44:58"
    },
    {
        title: "晩餐歌 / tuki.",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "52:55"
    },
    {
        title: "again / YUI",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "58:28"
    },
    {
        title: "ドーナツホール / ハチ",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "01:04:46"
    },
    {
        title: "花に亡霊 / ヨルシカ",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "01:11:03"
    },
    {
        title: "I beg you / Aimer",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "01:17:34"
    },
    {
        title: "雨とカプチーノ / ヨルシカ",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "01:27:58"
    },
    {
        title: "U&I / 放課後ティータイム",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "01:35:27"
    },
    {
        title: "おジャ魔女カーニバル!! / MAHO堂",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "01:42:09"
    },
    {
        title: "世界は恋に落ちている / CHiCO with HoneyWorks",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "01:48:25"
    },
    {
        title: "天使にふれたよ! / 放課後ティータイム",
        date: "2024/10/22",
        videoTitle: "【歌枠】10万人耐久歌枠！！！【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/1pr4n2Um5rc?si=5MjSMdpMdBnKt0KS",
        time: "01:56:10"
    },
    {
        title: "愛を伝えたいだとか / あいみょん",
        date: "2024/10/07",
        videoTitle: "【歌枠】10月最初の歌枠は「夜に聴きたい曲」を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/zd-PbQbvUEo?si=iNO8BJ-ZZdcorJru",
        time: "05:05"
    },
    {
        title: "明日への手紙 / 手嶌葵",
        date: "2024/10/07",
        videoTitle: "【歌枠】10月最初の歌枠は「夜に聴きたい曲」を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/zd-PbQbvUEo?si=iNO8BJ-ZZdcorJru",
        time: "13:09"
    },
    {
        title: "秒針を噛む / ずっと真夜中でいいのに。",
        date: "2024/10/07",
        videoTitle: "【歌枠】10月最初の歌枠は「夜に聴きたい曲」を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/zd-PbQbvUEo?si=iNO8BJ-ZZdcorJru",
        time: "22:58"
    },
    {
        title: "フクロウ ～フクロウが知らせる客が来たと～ / KOKIA",
        date: "2024/10/07",
        videoTitle: "【歌枠】10月最初の歌枠は「夜に聴きたい曲」を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/zd-PbQbvUEo?si=iNO8BJ-ZZdcorJru",
        time: "30:09"
    },
    {
        title: "忘れじの言の葉 / 安次嶺希和子",
        date: "2024/10/07",
        videoTitle: "【歌枠】10月最初の歌枠は「夜に聴きたい曲」を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/zd-PbQbvUEo?si=iNO8BJ-ZZdcorJru",
        time: "38:23"
    },
    {
        title: "回る空うさぎ / Orangestar",
        date: "2024/10/07",
        videoTitle: "【歌枠】10月最初の歌枠は「夜に聴きたい曲」を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/zd-PbQbvUEo?si=iNO8BJ-ZZdcorJru",
        time: "45:22"
    },
    {
        title: "フリージア / Uru",
        date: "2024/10/07",
        videoTitle: "【歌枠】10月最初の歌枠は「夜に聴きたい曲」を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/zd-PbQbvUEo?si=iNO8BJ-ZZdcorJru",
        time: "53:02"
    },
    {
        title: "未完成ストライド / こだま沙織",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "03:49"
    },
    {
        title: "ダーリンダンス / かいりきベア feat. 初音ミク",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "11:22"
    },
    {
        title: "キュートなカノジョ / syudou feat. 可不",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "18:06"
    },
    {
        title: "点猫の唄 / Mrs. GREEN APPLE(feat.井上苑子)",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "23:23"
    },
    {
        title: "ブリキノダンス / 日向電工 feat. 初音ミク",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "32:31"
    },
    {
        title: "ラブカ？ / 柊キライ feat. v flower",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "38:50"
    },
    {
        title: "心做し / 蝶々P feat. GUMI",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "45:17"
    },
    {
        title: "Mela! / 緑黄色社会",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "53:39"
    },
    {
        title: "Los! Los! Los! / ターニャ・デグレチャフ(幼女戦記)",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "01:01:17"
    },
    {
        title: "炎 / LiSA",
        date: "2024/09/07",
        videoTitle: "【歌枠】9月最初の歌枠はボカロ曲多めで歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/PxGiQT90y5k?si=-PR_94rKHNf_DET8",
        time: "01:06:39"
    },
    {
        title: "気まぐれロマンティック / いきものがかり",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "01:31"
    },
    {
        title: "ヨワネハキ / MAISONdes",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "07:46"
    },
    {
        title: "ノーチラス / ヨルシカ",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "14:10"
    },
    {
        title: "春擬き / やなぎなぎ",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "20:35"
    },
    {
        title: "すずめ / RADWIMPS",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "28:28"
    },
    {
        title: "名前のない怪物 / EGOIST",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "35:32"
    },
    {
        title: "ひぐらしのなく頃に / 島みやえい子",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "43:59"
    },
    {
        title: "深海のリトルクライ / Sasakure.UK feat. 土岐麻子",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "52:37"
    },
    {
        title: "only my railgun / fripSide",
        date: "2024/08/27",
        videoTitle: "【歌枠】8月最後の歌枠！歌って歌ってはっちゃけるよ～！！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/trKGdvamBTk?si=Kemml6DvebqhK7CL",
        time: "58:20"
    },
    {
        title: "花ハ踊レヤいろはにほ / チーム\"ハナヤマタ\"",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "01:39"
    },
    {
        title: "風になる / つじあやの",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "10:26"
    },
    {
        title: "ひまわりの約束 / 秦基博",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "17:55"
    },
    {
        title: "空色デイズ / 中川翔子",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "26:17"
    },
    {
        title: "Ghost of a smile / EGOIST",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "33:48"
    },
    {
        title: "ウィアートル / rionos",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "42:40"
    },
    {
        title: "鬼ノ宴 / 友成空",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "50:42"
    },
    {
        title: "プラチナ / 坂本真綾",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "57:31"
    },
    {
        title: "夜明けと蛍 / n-buna",
        date: "2024/08/17",
        videoTitle: "【歌枠】夏真っ盛り！涼しくてほろっと泣ける曲を歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/Z1EKjH8shQs?si=69pCuw8mZ1VQwThS",
        time: "01:04:32"
    },
    {
        title: "忘れてやらない / 結束バンド",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "01:27"
    },
    {
        title: "残響散歌 / Aimer",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "07:53"
    },
    {
        title: "フォニイ / ツミキ",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "13:04"
    },
    {
        title: "君の知らない物語 / supercell",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "18:34"
    },
    {
        title: "アカシア / BUMP OF CHICKEN",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "27:21"
    },
    {
        title: "やさしさに包まれたなら / 松任谷由実",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "34:47"
    },
    {
        title: "悪魔の子 / ヒグチアイ",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "41:02"
    },
    {
        title: "酔いどれ知らず / Kanaria",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "48:18"
    },
    {
        title: "トウキョウ・シャンディ・ランデヴ / MAISONdes",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "53:13"
    },
    {
        title: "secret base ～君がくれたもの～ / ZONE",
        date: "2024/07/27",
        videoTitle: "【歌枠】7月最後の歌枠！アニソン＆ボカロ歌ってくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/lxL8tE6Jd3A?si=Ft3R19M0_0oD_wWL",
        time: "58:04"
    },
    {
        title: "青と夏 / Mrs. GREEN APPLE",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "01:32"
    },
    {
        title: "BOOO! / TOKOTOKO",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "09:29"
    },
    {
        title: "左右盲 / ヨルシカ",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "15:17"
    },
    {
        title: "青のすみか / キタニタツヤ",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "22:57"
    },
    {
        title: "水流のロック / 日食なつこ",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "29:04"
    },
    {
        title: "ビードロ模様 / やなぎなぎ",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "34:57"
    },
    {
        title: "The Everlasting Guilty Crown / EGOIST",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "42:06"
    },
    {
        title: "アイロニ / すこっぷ",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "50:38"
    },
    {
        title: "ガーネット / 奥華子",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "57:38"
    },
    {
        title: "Don't say \"lazy\" / 放課後ティータイム",
        date: "2024/07/17",
        videoTitle: "【歌枠】爽やかな夏曲多めで歌っていくよ～！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/FUOFmggAbQg?si=UQ15bYhRHidRQk9j",
        time: "01:05:24"
    },
    {
        title: "星座になれたら / 結束バンド",
        date: "2024/07/07",
        videoTitle: "【歌枠】祝！収益化！ありがとうの気持ちを込めて歌います！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/WN6sBNj1pv0?si=6r10ZCtqiN551qDx",
        time: "01:16"
    },
    {
        title: "ただ声一つ / ロクデナシ",
        date: "2024/07/07",
        videoTitle: "【歌枠】祝！収益化！ありがとうの気持ちを込めて歌います！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/WN6sBNj1pv0?si=6r10ZCtqiN551qDx",
        time: "08:14"
    },
    {
        title: "小さきもの / 林明日香",
        date: "2024/07/07",
        videoTitle: "【歌枠】祝！収益化！ありがとうの気持ちを込めて歌います！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/WN6sBNj1pv0?si=6r10ZCtqiN551qDx",
        time: "13:46"
    },
    {
        title: "あんなに一緒だったのに / See-Saw",
        date: "2024/07/07",
        videoTitle: "【歌枠】祝！収益化！ありがとうの気持ちを込めて歌います！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/WN6sBNj1pv0?si=6r10ZCtqiN551qDx",
        time: "21:58"
    },
    {
        title: "プラネタリウム / 大塚愛",
        date: "2024/07/07",
        videoTitle: "【歌枠】祝！収益化！ありがとうの気持ちを込めて歌います！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/WN6sBNj1pv0?si=6r10ZCtqiN551qDx",
        time: "29:53"
    },
    {
        title: "いのちの名前 / 木村弓",
        date: "2024/07/07",
        videoTitle: "【歌枠】祝！収益化！ありがとうの気持ちを込めて歌います！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/WN6sBNj1pv0?si=6r10ZCtqiN551qDx",
        time: "39:49"
    },
    {
        title: "地球最後の告白を / kemu",
        date: "2024/07/07",
        videoTitle: "【歌枠】祝！収益化！ありがとうの気持ちを込めて歌います！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/WN6sBNj1pv0?si=6r10ZCtqiN551qDx",
        time: "49:15"
    },
    {
        title: "おちゃめ機能 / ラマーズP",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "02:09"
    },
    {
        title: "晴る / ヨルシカ",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "09:27"
    },
    {
        title: "黒毛和牛上塩タン焼き680円 / 大塚愛",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "16:56"
    },
    {
        title: "ANIMA / ReoNa",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "23:53"
    },
    {
        title: "晩餐歌 / tuki.",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "31:43"
    },
    {
        title: "エンヴィーベイビー / Kanaria",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "40:38"
    },
    {
        title: "カタオモイ / Aimer",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "46:00"
    },
    {
        title: "ハロ/ハワユ / ナノウ",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "53:54"
    },
    {
        title: "you / 癒月",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "01:04:27"
    },
    {
        title: "ふわふわ時間 / 放課後ティータイム",
        date: "2024/06/27",
        videoTitle: "【歌枠】初めての歌枠、開演です！【にじさんじ/珠乃井ナナ】",
        url: "https://www.youtube.com/live/P1BM6iLaqQ0?si=fWh5JYxszXDFcKsQ",
        time: "01:12:18"
    }

])
