// 曲のデータベース
const songData = Object.freeze([
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
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "08:21"
    },
    {
        title: "いかないで / 想太",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "17:29"
    },
    {
        title: "アイネクライネ / 米津玄師",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "23:41"
    },
    {
        title: "アイコトバ / アイナ・ジ・エンド",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "30:58"
    },
    {
        title: "ハロ/ハワユ / ナノウ",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "39:09"
    },
    {
        title: "Sincerely / TRUE",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "46:32"
    },
    {
        title: "One more time, One more chance / 山崎まさよし",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "53:50"
    },
    {
        title: "たしかなこと / 小田和正",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "01:02:07"
    },
    {
        title: "ウィアートル / rionos",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "01:09:15"
    },
    {
        title: "君の夢 / 珠乃井ナナ",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "01:17:51"
    },
    {
        title: "一番の宝物 / Angel Beats!",
        date: "2026/01/07",
        videoTitle: "【singing stream】涙が溢れるような泣ける曲歌枠【珠乃井ナナ / にじさんじ】",
        url: "https://www.youtube.com/live/b0RQ4FENW60?si=n5Ba9aVswoLKAahW",
        time: "01:24:59"
    },
]);