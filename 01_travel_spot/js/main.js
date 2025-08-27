import { Country } from "./Country.js";

const countries = [
    new Country("アメリカ", "スケールの大きさを体感できる自由の国", "#FF4C05", ["カリフォルニア・アドベンチャーパーク", "グリフィス天文台", "サルベーション・マウンテン", "サンタモニカ"]),
    new Country("オーストラリア", "広大な自然と都市の魅力が共存する国", "#163DF0", ["ブルーマウンテン", "オペラハウス", "ブリスベンサイン", "コアラサンクチュアリ", "グレート・オーシャン・ロード", "ハートリーフ島", "ロットネスト島"]),
    new Country("インド", "非日常なカオスを体験", "#FFA07A", ["インド門", "タージマハル"]),
    new Country("インドネシア", "東南アジアらしい雑多な魅力の国", "purple", ["モナス", "インドネシア国立美術館", "ストリートフード"]),
    new Country("マレーシア", "熱帯の香りと都会の活気が混ざる国", "lightgreen", ["バトゥ洞窟", "クアラルンプール・シティ・ギャラリー", "ペトロナス・ツインタワー"]), 
    new Country("フィリピン", "ビーチと自然を満喫できる国", "lightblue", ["モアルボアル"]),
    new Country("シンガポール", "東南アジアNo.1の経済大国", "orange", ["チャンギ国際空港", "ガーデンズ・バイ・ザ・ベイ", "ホーカー", "マーライオン"]),
    new Country("タイ", "寺院とストリートの活気を体験できる国", "green", ["アユタヤ遺跡", "カオサン通り", "ワットアルン", "ワットパクナム"]), 
    new Country("ベトナム", "急成長中の活気ある都市と自然を楽しめる国", "red", ["ドンコイ通り", "メコン川", "戦争博物館"])
];

let cardHtml = countries.map(country => country.getCardHtml()).join('');

let container = `
    <div class="container p-5">
        <div class="row d-flex justify-content-center g-4 flex-wrap">
            ${ cardHtml }
        </div>
    </div>
`;  

let spotsHtml = countries.map(country => country.getSpotsHtml()).join('');

const travelSpotsHtml = container + spotsHtml;

document.getElementById("spots").innerHTML = travelSpotsHtml;