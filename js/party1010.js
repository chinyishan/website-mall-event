// 企劃營運-2023-10月-1001-1010-1010 PARTY慶
// https://shop.greattree.com.tw/campaign?id=38205dd4-a1bc-4815-a67d-59a29c26238a

$("head").append(
  $("<script/>").attr(
    "src",
    `https://photo.greattree.com.tw/gre_special/campaign/imageMapResizer.min.js`
  ),
  $('<link rel="stylesheet"/>').attr(
    "href",
    `https://photo.greattree.com.tw/gre_special/campaign/swiper-bundle.min.css`
  ),
  $("<script/>").attr(
    "src",
    `https://photo.greattree.com.tw/gre_special/campaign/swiper.js`
  ),
  $("<script/>").attr(
    "src",
    `https://photo.greattree.com.tw/gre_special/campaign/day.min.js`
  ),
  $("<script/>").attr(
    "src",
    `https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.9.6/plugin/isBetween.min.js`
  ),
  $("<script/>").attr(
    "src",
    `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
  )
);

$("body").append(
  $("<script/>").attr(
    "src",
    `https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js`
  )
);

$(".contentWrap").addClass("customWrap party1010-2023");

// let mainData = `
// <div id="logo_fireworks">
// 	<svg stroke="#fff" stroke-linecap="round">
// 		<g class="stage">
// 			<rect width="100%" height="100%" fill="rgba(0,0,0,0)" stroke="none"></rect>
// 		</g>
// 		<g class="toggle" style="cursor:pointer; user-select:none"></g>
// 	</svg>
// </div>
// <div class="main_logo">
// 	<div class="logo_row">
// 		<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_header-bf.png" alt="城市">
// 		<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_header-discount.png" alt="紅利">
// 		<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_header-w.png" alt="1010 Party慶">
// 	</div>
// 	<div class="logo_ripples"></div>
// 	<img class="logo_bg" src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_header-bg.png" alt="城市">
// </div>
// <div class="main_content">
// 	<div class="wrap_discount">
// 		<img class="discount_bg" src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-bg.png" alt="背景">
// 		<div class="swiper-container pd_normal_one">
// 			<div class="swiper-wrapper">
// 				<a class="swiper-slide" id="banner1" target="_blank" href="https://shop.greattree.com.tw/campaign?id=db0df902-108e-43a2-8d55-41cf7384b5dc">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-1.png" alt="10/10 一日限定 婦幼館" title="10/10 一日限定 婦幼館">
// 				</a>
// 				<a class="swiper-slide" id="banner2" target="_blank" href="https://shop.greattree.com.tw/campaign?id=1850a99b-6124-4e4a-9019-82836d265b08">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-2.png" alt="10/10 一日限定 保健舘" title="10/10 一日限定 保健舘">
// 				</a>
// 				<a class="swiper-slide" id="banner3" target="_blank" href="https://shop.greattree.com.tw/campaign?id=d1b09261-fe41-491d-8da4-be27cdf70df3">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-3.png" alt="10/10 一日限定 樂齡舘" title="10/10 一日限定 樂齡舘">
// 				</a>
// 				<a class="swiper-slide" id="banner4" target="_blank" href="https://shop.greattree.com.tw/campaign?id=ae123164-6fac-4f0b-abaa-29845e8c1861">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-4.png" alt="10/10 一日限定 醫材舘" title="10/10 一日限定 醫材舘">
// 				</a>
// 				<a class="swiper-slide" id="banner5" target="_blank" href="https://shop.greattree.com.tw/campaign?id=956e3e92-84fa-4dad-8842-8dafcafbdbc4">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-5.png" alt="10/10 一日限定 食品舘" title="10/10 一日限定 食品舘">
// 				</a>
// 				<a class="swiper-slide" id="banner6" target="_blank" href="https://shop.greattree.com.tw/campaign?id=fcb7b499-6ac4-44db-a1dc-663416fed8f8">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-6.png" alt="10/1~10/31 生活舘" title="10/1~10/31 生活舘">
// 				</a>
// 				<a class="swiper-slide" id="banner7" target="_blank" href="https://shop.greattree.com.tw/campaign?id=e576669f-6c92-4d61-abdc-5689bdb134a1">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-7.png" alt="10/10-10/18 美容舘" title="10/10-10/18 美容舘">
// 				</a>
// 				<a class="swiper-slide" id="banner8" target="_blank" href="https://shop.greattree.com.tw/campaign?id=18b6abc2-aac0-441a-afcb-f14f15d925d4">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-8.png" alt="10/10 一日限定 寵物舘" title="10/10 一日限定 寵物舘">
// 				</a>
// 				<a class="swiper-slide" id="banner9" target="_blank" href="https://shop.greattree.com.tw/campaign?id=6e0c3830-3424-488b-8351-1ad9ff394199">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_oneday-9.png" alt="10/10當日限定" title="10/10當日限定">
// 				</a>
// 			</div>
// 		</div>
// 		<div class="swiper-button-prev pd_prev"></div>
// 		<div class="swiper-button-next pd_next"></div>
// 		<a class="discount_event" target="_blank" href="https://shop.greattree.com.tw/campaign?id=6e0c3830-3424-488b-8351-1ad9ff394199">
// 			<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_but.png" alt="活動說明">
// 		</a>
// 	</div>
// 	<div class="wrap_event">
// 		<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_coupon.png" usemap="#image-event">
// 		<map name="image-event">
// 			<area id="coupon1" target="_blank" alt="$30折價券" title="$30折價券" href="https://shop.greattree.com.tw/couponcollection" coords="0,0,360,402" shape="rect">
// 			<area id="coupon2" target="_blank" alt="$100折價券" title="$100折價券" href="https://shop.greattree.com.tw/couponcollection" coords="385,2,743,400" shape="rect">
// 			<area id="coupon3" target="_blank" alt="領品牌歡慶好券" title="領品牌歡慶好券" href="https://shop.greattree.com.tw/couponcollection" coords="768,1,1125,400" shape="rect">
// 			<area target="_blank" alt="全站消費滿$2500再送111折價券(不累送)" title="全站消費滿$2500再送111折價券(不累送)" href="https://shop.greattree.com.tw/about?id=1b487e01-7e22-4c16-b49e-f9ff62ca5e2c" coords="-1,406,1125,629" shape="rect">
// 		</map>
// 	</div>
// 	<div class="wrap_product">
// 		<img class="product_bg" src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add.png" alt="結帳滿額享優惠加價購">
// 		<ul class="tab_title">
// 			<li rel="vtab1" class="active">
// 				<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-but1.png" alt="滿$790">
// 			</li>
// 			<li rel="vtab2">
// 				<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-but2.png" alt="滿$1999">
// 			</li>
// 			<li rel="vtab3">
// 				<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-but3.png" alt="滿$3599">
// 			</li>
// 		</ul>
// 		<div class="tab_container">
// 			<div id="vtab1" class="tab_content">
// 				<div class="swiper-container pd_normal_auto">
// 					<div class="swiper-wrapper">
// 						<a class="swiper-slide" id="product-790-1" target="_blank" href="https://shop.greattree.com.tw/searchlist?keyword=175535%20175536%20175537%20175538">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-1.png?v=0926" alt="【Mother K】頂級PPSU奶瓶180ml-四色可選" title="【Mother K】頂級PPSU奶瓶180ml-四色可選">
// 						</a>
// 						<a class="swiper-slide" id="product-790-2" target="_blank" href="https://shop.greattree.com.tw/searchlist?keyword=152427%20%5C152429">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-2.png?v=0926" alt="【美國瑪莉莎 Melissa & Doug】神奇水畫冊-2款可選" title="【美國瑪莉莎 Melissa & Doug】神奇水畫冊-2款可選">
// 						</a>
// 						<a class="swiper-slide" id="product-790-3" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2304190017">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-3.png" alt="【立得清】75%酒精擦單片(輕巧包)" title="【立得清】75%酒精擦單片(輕巧包)">
// 						</a>
// 						<a class="swiper-slide" id="product-790-4" target="_blank" href="https://shop.greattree.com.tw/searchlist?keyword=2306280016%202306280017%202306280018">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-4.png" alt="【Sofy 蘇菲】超熟睡內褲型衛生棉(M/L/XL)-三款可選" title="【Sofy 蘇菲】超熟睡內褲型衛生棉(M/L/XL)-三款可選">
// 						</a>
// 						<a class="swiper-slide" id="product-790-5" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2206280092">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-5.png" alt="【悠活原力】維生素D3素食噴劑(50ml/盒)" title="【悠活原力】維生素D3素食噴劑(50ml/盒)">
// 						</a>
// 						<a class="swiper-slide" id="product-790-6" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2303230007">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-6.png" alt="【KleeneX 舒潔】棉柔舒適抽取衛生紙(90抽X8包/串)" title="【KleeneX 舒潔】棉柔舒適抽取衛生紙(90抽X8包/串)">
// 						</a>
// 						<a class="swiper-slide" id="product-790-7" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2305250092">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-7.png" alt="【Parasol】Clear+Pure™ 新科技水凝尿布輕巧包（NB 8片/包）" title="【Parasol】Clear+Pure™ 新科技水凝尿布輕巧包（NB 8片/包）">
// 						</a>
// 						<a class="swiper-slide" id="product-790-8" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2203020025">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-8.png" alt="【Aptamil 愛他美】幼兒成長配方（900g／罐）效期：2024/05" title="【Aptamil 愛他美】幼兒成長配方（900g／罐）效期：2024/05">
// 						</a>
// 						<a class="swiper-slide" id="product-790-9" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2110260327">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-9.png" alt="【R&R】暖暖熊 手握式暖暖包24H (10片/袋)" title="【R&R】暖暖熊 手握式暖暖包24H (10片/袋)">
// 						</a>
// 						<a class="swiper-slide" id="product-790-10" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2107251759">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-10.png" alt="【YASCO昭惠】 酒精棉片 紅色加厚型 （100片／盒）" title="【YASCO昭惠】 酒精棉片 紅色加厚型 （100片／盒）">
// 						</a>
// 						<a class="swiper-slide" id="product-790-11" target="_blank" href="https://shop.greattree.com.tw/searchlist?keyword=2309070016%202309070015">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-11.png" alt="【SmartHeart慧心】柯雞棒15G (照燒雞肉/蔬菜雞肉)兩款可選)" title="【SmartHeart慧心】柯雞棒15G (照燒雞肉/蔬菜雞肉)兩款可選)">
// 						</a>
// 						<a class="swiper-slide" id="product-790-12" target="_blank" href="https://shop.greattree.com.tw/searchlist?keyword=2110060049%202110060050">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd1-12.png" alt="【CIAO】啾嚕管狀肉泥80g (鮪魚/扇貝)兩款可選" title="【CIAO】啾嚕管狀肉泥80g (鮪魚/扇貝)兩款可選">
// 						</a>
// 					</div>
// 				</div>
// 				<div class="swiper-button-prev pd_prev_auto"></div>
// 				<div class="swiper-button-next pd_next_auto"></div>
// 			</div>
// 			<div id="vtab2" class="tab_content">
// 				<div class="swiper-container pd_normal_auto">
// 					<div class="swiper-wrapper">
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308100047">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-1.png" alt="【樂扣樂扣】長方形淺灰 純淨保鮮盒350ml" title="【樂扣樂扣】長方形淺灰 純淨保鮮盒350ml">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308100048">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-2.png" alt="【樂扣樂扣】長方形淺灰 純淨保鮮盒470ml" title="【樂扣樂扣】長方形淺灰 純淨保鮮盒470ml">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308100050">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-3.png" alt="【樂扣樂扣】長方形淺灰 純淨保鮮盒600ml" title="【樂扣樂扣】長方形淺灰 純淨保鮮盒600ml">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308100049">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-4.png" alt="【樂扣樂扣】長方形淺灰 純淨保鮮盒 850ml" title="【樂扣樂扣】長方形淺灰 純淨保鮮盒 850ml">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308100051">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-5.png" alt="【樂扣樂扣】長方形淺灰 純淨保鮮盒 1100ml" title="【樂扣樂扣】長方形淺灰 純淨保鮮盒 1100ml">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/searchlist?keyword=919541%20919542%20919543">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-6.png" alt="ONPRO UF-IFAN 隨行手風扇" title="ONPRO UF-IFAN 隨行手風扇">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308170041">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-7.png" alt="【康寧】長方形寶寶用玻璃保鮮盒120ml三入組" title="【康寧】長方形寶寶用玻璃保鮮盒120ml三入組">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308170046">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-8.png" alt="【康寧】圓形寶寶用玻璃保鮮盒150ml三入組" title="【康寧】圓形寶寶用玻璃保鮮盒150ml三入組">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308170047">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-9.png" alt="【Glasslock】強化玻璃分隔微波保鮮盒670ml二入組" title="【Glasslock】強化玻璃分隔微波保鮮盒670ml二入組">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308170048">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd2-10.png" alt="【Glasslock】強化玻璃微波保鮮盒膠條易取棒400ml+1100ml" title="【Glasslock】強化玻璃微波保鮮盒膠條易取棒400ml+1100ml">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2307310018">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20231004_1010party_add-pd2-11.png" alt="【樂扣樂扣】極簡不鏽鋼保鮮盒2000ml" title="【樂扣樂扣】極簡不鏽鋼保鮮盒2000ml">
// 						</a>
// 					</div>
// 				</div>
// 				<div class="swiper-button-prev pd_prev_auto"></div>
// 				<div class="swiper-button-next pd_next_auto"></div>
// 			</div>
// 			<div id="vtab3" class="tab_content">
// 				<div class="swiper-container pd_normal_auto">
// 					<div class="swiper-wrapper">
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/searchlist?keyword=918699%20918700%20918701%20918702%20918703%20918705%20918706%20918707">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd3-1.png" alt="【MiWorks米沃】迷你充 iCute 隨身行動電源Type-C/Linghtning 兩款可選 " title="【MiWorks米沃】迷你充 iCute 隨身行動電源Type-C/Linghtning 兩款可選 ">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2306060049">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd3-2.png" alt="【AIWA 愛華】方形電飯盒" title="【AIWA 愛華】方形電飯盒">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2305290064">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd3-3.png" alt="【KINYO】雙溫控火烤兩用爐" title="【KINYO】雙溫控火烤兩用爐">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/searchlist?keyword=918484%20918485%20918486%20918487%20918488">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd3-4.png?v=0925" alt="【MiWorks米沃】22.5W 七合一快充磁吸行動電源(5色)" title="【MiWorks米沃】22.5W 七合一快充磁吸行動電源(5色)">
// 						</a>
// 						<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/product?SaleID=2308080059">
// 							<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_add-pd3-5.png" alt="【樂扣樂扣】原木鑄造不沾IH平煎鍋B1C8（28cm）" title="【樂扣樂扣】原木鑄造不沾IH平煎鍋B1C8（28cm）">
// 						</a>
// 					</div>
// 				</div>
// 				<div class="swiper-button-prev pd_prev_auto"></div>
// 				<div class="swiper-button-next pd_next_auto"></div>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="wrap_countdown">
// 		<div id="countdown">
// 			<ul>
// 				<li><span id="hours"></span>時</li>
// 				<li><span id="minutes"></span>分</li>
// 				<li><span id="seconds"></span>秒</li>
// 				<li><span id="milliseconds"></span></li>
// 			</ul>
// 		</div>
// 	</div>
// </div>
// `
// $('.contentWrap').prepend(mainData)

// let mainFooter = `
// <div class="main_footer">
// 	<div class="wrap_theme">
// 		<img class="title" src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_title1.png" alt="主題推薦" title="主題推薦">
// 		<div class="swiper-container pd_normal_theme">
// 			<div class="swiper-wrapper">
// 				<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/campaign?id=a68aa1ce-0833-4f7c-b389-eaa41cd83203">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_ac1.png" alt="換季異敏OUT 6折UP" title="換季異敏OUT 6折UP">
// 				</a>
// 				<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/campaign?id=c69c1a0d-1fc7-4ea1-b9d0-3c60a9527b4a">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_ac2.png" alt="跟我一起這樣泡(衛教)" title="跟我一起這樣泡(衛教)">
// 				</a>
// 				<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/campaign?id=870d26fa-89ca-4c00-94d0-085681af02ae">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_ac3.png" alt="一歲以內嬰兒配方" title="一歲以內嬰兒配方">
// 				</a>
// 				<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/campaign?id=49f970c6-9998-45ab-9c42-ec552323b8cf">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_ac4.png" alt="Test Drive 擔心不合適?" title="Test Drive 擔心不合適?">
// 				</a>
// 				<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/campaign?id=f2ca7952-c02f-4636-8c22-9fe328c4efc3">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_ac5.png" alt="衛教專欄" title="衛教專欄">
// 				</a>
// 				<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/campaign?id=00bb7b3c-b1e7-4646-8dd1-5d31957e04ba">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_ac6.png" alt="毛孩寵知識" title="毛孩寵知識">
// 				</a>
// 				<a class="swiper-slide" target="_blank" href="https://shop.greattree.com.tw/about?id=790556b5-b06c-4e8c-bc80-a97e4f488c90">
// 					<img src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_ac7.png" alt="24H線上真人客服" title="24H線上真人客服">
// 				</a>
// 			</div>
// 		</div>
// 		<div class="swiper-button-prev pd_prev_theme"></div>
// 		<div class="swiper-button-next pd_next_theme"></div>
// 	</div>
// 	<div class="wrap_shop">
// 		<img class="title" src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_title2.png" alt="各館優惠活動" title="各館優惠活動">
// 		<img class="shop" src="https://photo.greattree.com.tw/gre_special/campaign/img/party1010-2023/20230919_1010party_footer.png?=0925" usemap="#image-map">
// 		<map name="image-map">
// 			<area target="_blank" alt="保健機能" title="保健機能" href="https://shop.greattree.com.tw/campaign?id=1850a99b-6124-4e4a-9019-82836d265b08" coords="140,140,140" shape="circle">
// 			<area target="_blank" alt="樂齡照護" title="樂齡照護" href="https://shop.greattree.com.tw/campaign?id=d1b09261-fe41-491d-8da4-be27cdf70df3" coords="468,140,141" shape="circle">
// 			<area target="_blank" alt="婦幼用品" title="婦幼用品" href="https://shop.greattree.com.tw/campaign?id=db0df902-108e-43a2-8d55-41cf7384b5dc" coords="797,140,140" shape="circle">
// 			<area target="_blank" alt="醫材備用" title="醫材備用" href="https://shop.greattree.com.tw/campaign?id=ae123164-6fac-4f0b-abaa-29845e8c1861" coords="139,442,140" shape="circle">
// 			<area target="_blank" alt="生活/家電" title="生活/家電" href="https://shop.greattree.com.tw/campaign?id=fcb7b499-6ac4-44db-a1dc-663416fed8f8" coords="467,442,139" shape="circle">
// 			<area target="_blank" alt="食品/飲品" title="食品/飲品" href="https://shop.greattree.com.tw/campaign?id=956e3e92-84fa-4dad-8842-8dafcafbdbc4" coords="796,442,138" shape="circle">
// 			<area target="_blank" alt="清潔保養" title="清潔保養" href="https://shop.greattree.com.tw/campaign?id=d7de0bd7-8403-4bd6-95fa-e30ed3b3f078" coords="139,744,140" shape="circle">
// 			<area target="_blank" alt="寵物百貨" title="寵物百貨" href="https://shop.greattree.com.tw/campaign?id=18b6abc2-aac0-441a-afcb-f14f15d925d4" coords="467,745,139" shape="circle">
// 			<area target="_blank" alt="日系商品" title="日系商品" href="https://shop.greattree.com.tw/campaign?id=3699df49-308d-4091-9b04-e33cae4b7a24" coords="796,745,139" shape="circle">
// 		</map>
// 	</div>
// </div>
// `;
// $(".contentWrap").append(mainFooter);

function dayChange() {
  dayjs.extend(window.dayjs_plugin_isBetween);
  let today = dayjs();

  if (today.isBetween("2023-10-05", "2023-10-11")) {
    $(".wrap_discount").css("display", `block`);
    $(".main_logo").css("padding-bottom", `1.5vw`);
    const swiper1 = new Swiper(".pd_normal_one", {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".pd_prev",
        prevEl: ".pd_next",
      },
    });
  }
}

window.dataLayer = window.dataLayer || [];

const bannerData = [
  {
    id: "#banner1",
    name: "10/10 一日限定 婦幼館",
    url: "https://shop.greattree.com.tw/campaign?id=db0df902-108e-43a2-8d55-41cf7384b5dc",
  },
  {
    id: "#banner2",
    name: "10/10 一日限定 保健舘",
    url: "hhttps://shop.greattree.com.tw/campaign?id=1850a99b-6124-4e4a-9019-82836d265b08",
  },
  {
    id: "#banner3",
    name: "10/10 一日限定 樂齡舘",
    url: "https://shop.greattree.com.tw/campaign?id=d1b09261-fe41-491d-8da4-be27cdf70df3",
  },
  {
    id: "#banner4",
    name: "10/10 一日限定 醫材舘",
    url: "https://shop.greattree.com.tw/campaign?id=ae123164-6fac-4f0b-abaa-29845e8c1861",
  },
  {
    id: "#banner5",
    name: "10/10一日限定 食品館",
    url: "https://shop.greattree.com.tw/campaign?id=956e3e92-84fa-4dad-8842-8dafcafbdbc4",
  },
  {
    id: "#banner6",
    name: "10/10 一日限定 生活舘",
    url: "https://shop.greattree.com.tw/campaign?id=fcb7b499-6ac4-44db-a1dc-663416fed8f8",
  },
  {
    id: "#banner7",
    name: "10/10 一日限定 美容舘",
    url: "https://shop.greattree.com.tw/campaign?id=e576669f-6c92-4d61-abdc-5689bdb134a1",
  },
  {
    id: "#banner8",
    name: "10/10 一日限定 寵物館",
    url: "https://shop.greattree.com.tw/campaign?id=18b6abc2-aac0-441a-afcb-f14f15d925d4",
  },
  {
    id: "#banner9",
    name: "10/10全站消費",
    url: "https://shop.greattree.com.tw/campaign?id=6e0c3830-3424-488b-8351-1ad9ff394199",
  },
];

for (let i = 0; i < bannerData.length; i++) {
  $(bannerData[i].id).click(function () {
    dataLayer.push({
      event: "select_promotion",
      promotion_name: bannerData[i].name,
      creative_slot: bannerData[i].url,
    });
  });
}

const couponData = [
  {
    id: "#coupon1",
    name: "30折價券",
    url: "https://shop.greattree.com.tw/couponcollection",
  },
  {
    id: "#coupon2",
    name: "100折價券",
    url: "https://shop.greattree.com.tw/couponcollection",
  },
  {
    id: "#coupon3",
    name: "品牌優惠好券",
    url: "https://shop.greattree.com.tw/couponcollection",
  },
];

for (let i = 0; i < couponData.length; i++) {
  $(couponData[i].id).click(function () {
    dataLayer.push({
      event: "select_promotion",
      promotion_name: couponData[i].name,
      creative_slot: couponData[i].url,
    });
  });
}

const productData = [
  {
    id: "#product-790-1",
    name: "結帳滿$790享加購優惠",
    item_id: "2307270116",
    item_name: "【Mother K】頂級PPSU奶瓶180ml-四色可選",
  },
  {
    id: "#product-790-2",
    name: "結帳滿$790享加購優惠",
    item_id: "2109060024",
    item_name: "【美國瑪莉莎 Melissa & Doug】 神奇水畫冊-2款可選",
  },
  {
    id: "#product-790-3",
    name: "結帳滿$790享加購優惠",
    item_id: "2304190017",
    item_name: "【立得清】75%酒精擦單片(輕巧包)",
  },
  {
    id: "#product-790-4",
    name: "結帳滿$790享加購優惠",
    item_id: "2306280017",
    item_name: "【Sofy 蘇菲】超熟睡內褲型衛生棉(M/L/XL)-三款可選",
  },
  {
    id: "#product-790-5",
    name: "結帳滿$790享加購優惠",
    item_id: "2206280092",
    item_name: "【悠活原力】維生素D3素食噴劑(50ml/盒)",
  },
  {
    id: "#product-790-6",
    name: "結帳滿$790享加購優惠",
    item_id: "2303230007",
    item_name: "【KleeneX 舒潔】棉柔舒適抽取衛生紙(90抽X8包/串)",
  },
  {
    id: "#product-790-7",
    name: "結帳滿$790享加購優惠",
    item_id: "2305250092",
    item_name: "【Parasol】Clear+Pure™ 新科技水凝尿布輕巧包（NB 8片/包）",
  },
  {
    id: "#product-790-8",
    name: "結帳滿$790享加購優惠",
    item_id: "2210130189",
    item_name: "【Aptamil 愛他美】幼兒成長配方(900g/罐) 效期:2024/05",
  },
  {
    id: "#product-790-9",
    name: "結帳滿$790享加購優惠",
    item_id: "2110260327",
    item_name: "【R&R】暖暖熊 手握式暖暖包24H (10片/袋)",
  },
  {
    id: "#product-790-10",
    name: "結帳滿$790享加購優惠",
    item_id: "2107251759",
    item_name: "【YASCO昭惠】 酒精棉片 紅色加厚型 (100片/盒)",
  },
  {
    id: "#product-790-11",
    name: "結帳滿$790享加購優惠",
    item_id: "2309070015",
    item_name: "【SmartHeart慧心】柯雞棒15G(照燒雞肉/蔬菜雞肉)兩款可選",
  },
  {
    id: "#product-790-12",
    name: "結帳滿$790享加購優惠",
    item_id: "202110060050",
    item_name: "【CIAO】啾嚕管狀肉泥80g (鮪魚/扇貝)兩款可選",
  },
];

for (let i = 0; i < productData.length; i++) {
  $(productData[i].id).click(function () {
    dataLayer.push({
      event: "select_item",
      promotion_name: productData[i].name,
      items: [
        {
          item_id: productData[i].item_id,
          item_name: productData[i].item_name,
        },
      ],
    });
  });
}

$(".tab_content").hide();
$(".tab_content:first").show();
$(".tab_title li").click(function () {
  $(".tab_content").hide();
  let activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  $(".tab_title li").removeClass("active");
  $(this).addClass("active");
  const swiper2 = new Swiper(".pd_normal_auto", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".pd_prev_auto",
      prevEl: ".pd_next_auto",
    },
  });
});

const m = { x: 0, y: 0 },
  stage = document.querySelector(".stage"),
  toggle = document.querySelector(".toggle");

window.onpointerdown = window.onpointermove = (e) => {
  m.x = Math.round(e.clientX);
  m.y = Math.round(e.clientY);
};

stage.onpointerup = (e) => {
  gsap.killTweensOf(autoPlay);
  gsap.killTweensOf(fire);
  auto = true;
  toggleAuto();
  fire(m);
};

function fire(m) {
  const firework = document.createElementNS("http://www.w3.org/2000/svg", "g"),
    trail = document.createElementNS("http://www.w3.org/2000/svg", "g"),
    ring = document.createElementNS("http://www.w3.org/2000/svg", "g"),
    hsl = "hsl(" + gsap.utils.random(0, 360, 1) + ", 100%, 50%)";

  stage.appendChild(firework);
  firework.appendChild(trail);
  firework.appendChild(ring);

  for (let i = 1; i < 5; i++) {
    const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
    gsap.set(t, {
      x: m.x,
      y: innerHeight,
      opacity: 0.25,
      attr: { "stroke-width": i, d: "M0,0 0," + innerHeight },
    });
    gsap.to(t, { y: m.y, ease: "expo" });
    trail.appendChild(t);
  }

  for (let i = 1; i < gsap.utils.random(6, 13, 1); i++) {
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    gsap.set(c, {
      x: m.x,
      y: m.y,
      attr: {
        class: "core",
        r: () => (i / 1.5) * 18,
        fill: "none",
        stroke: hsl,
        "stroke-width": () => 0.25 + (9 - i),
        "stroke-dasharray": "1 " + (i / 2) * gsap.utils.random(i + 3, i + 6),
      },
    });
    ring.appendChild(c);
  }

  gsap
    .timeline({ onComplete: () => stage.removeChild(firework) })
    .to(
      trail.children,
      {
        duration: 0.2,
        attr: { d: "M0,0 0,0" },
        stagger: -0.08,
        ease: "expo.inOut",
      },
      0
    )
    .to(
      trail.children,
      {
        duration: 0.4,
        scale: () => gsap.utils.random(40, 80, 1),
        attr: { stroke: hsl },
        stagger: -0.15,
        ease: "expo",
      },
      0.4
    )
    .to(
      trail.children,
      { duration: 0.3, opacity: 0, ease: "power2.inOut", stagger: -0.1 },
      0.5
    )
    .from(
      ring.children,
      {
        duration: 1,
        rotate: () => gsap.utils.random(-90, 90, 1),
        scale: 0,
        stagger: 0.05,
        ease: "expo",
      },
      0.4
    )
    .to(ring.children, { opacity: 0, stagger: 0.1, ease: "sine.inOut" }, 0.7)
    .to(ring.children, { duration: 1, y: "+=30", ease: "power2.in" }, 0.7);
}

toggle.onpointerup = toggleAuto;

function toggleAuto() {
  // auto = !auto
  gsap
    .timeline({ defaults: { duration: 0.3, ease: "power2.inOut" } })
    .to(".knob", { x: () => (auto ? 18 : 0) }, 0)
    .to(".txt1", { opacity: (i) => (auto ? 0.3 : 1) }, 0)
    .to(".txt2", { opacity: (i) => (auto ? 1 : 0.3) }, 0);
  if (auto) autoPlay();
  else {
    gsap.killTweensOf(autoPlay);
    gsap.killTweensOf(fire);
  }
}

function autoPlay() {
  for (let i = 0; i < gsap.utils.random(3, 9, 1); i++) {
    gsap.delayedCall(i / 2, fire, [
      {
        x: gsap.utils.random(99, innerWidth - 99, 1),
        y: gsap.utils.random(99, innerHeight - 99, 1),
      },
    ]);
  }
  auto ? gsap.delayedCall(3.5, autoPlay) : gsap.killTweensOf(autoPlay);
}

function waterRipples() {
  $(document).ready(function () {
    try {
      $(".logo_ripples").ripples({
        resolution: 400,
        dropRadius: 10, //px
        perturbance: 0.04,
      });
    } catch (e) {
      console.log(e);
    }
    // 自動
    setInterval(function () {
      var $el = $(".logo_ripples");
      var x = Math.random() * $el.outerWidth();
      var y = Math.random() * $el.outerHeight();
      var dropRadius = 20;
      var strength = 0.04 + Math.random() * 0.04;

      $el.ripples("drop", x, y, dropRadius, strength);
    }, 400);
  });
}
waterRipples();

function countdown() {
  //轉換毫秒
  const milliseconds = 1,
    second = milliseconds * 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const todayTest = dayjs();

  // new Date(year, month, day, hour, minutes, seconds, milliseconds);
  // month from 0 start

  const countDown = new Date(
      todayTest.$y,
      todayTest.$M,
      todayTest.$D,
      24,
      0,
      0
    ).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      let hou = Math.floor((distance % day) / hour);
      let mut = Math.floor((distance % hour) / minute);
      let sec = Math.floor((distance % minute) / second);
      let mil = Math.floor((distance % second) / milliseconds / 10);

      hou = hou.toString().length == 1 ? "0" + hou : hou;
      mut = mut.toString().length == 1 ? "0" + mut : mut;
      sec = sec.toString().length == 1 ? "0" + sec : sec;
      mil = mil.toString().length == 1 ? "0" + mil : mil;

      document.getElementById("hours").innerText = hou;
      document.getElementById("minutes").innerText = mut;
      document.getElementById("seconds").innerText = sec;
      document.getElementById("milliseconds").innerText = mil;
    }, 0);
}

function windowSize() {
  if ($(window).width() < 1199) {
    let heightContent = $(".contentWrap").height();
    let heightWrap = parseInt(heightContent) + parseInt(90) + "px";
    $(".footer_bottom").css("top", heightWrap);
  }
}

$(window).resize(function () {
  windowSize();
  $("map").imageMapResize();
});

$(window).on("load", function () {
  windowSize();
  $("map").imageMapResize();
  const swiper2 = new Swiper(".pd_normal_auto", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".pd_prev_auto",
      prevEl: ".pd_next_auto",
    },
  });
  const swiper3 = new Swiper(".pd_normal_theme", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".pd_prev_theme",
      prevEl: ".pd_next_theme",
    },
  });
  let auto = true;
  const m = { x: 0, y: 0 },
    stage = document.querySelector(".stage"),
    toggle = document.querySelector(".toggle");

  window.onpointerdown = window.onpointermove = (e) => {
    m.x = Math.round(e.clientX);
    m.y = Math.round(e.clientY);
  };

  stage.onpointerup = (e) => {
    gsap.killTweensOf(autoPlay);
    gsap.killTweensOf(fire);
    auto = true;
    toggleAuto();
    fire(m);
  };

  function fire(m) {
    const firework = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      ),
      trail = document.createElementNS("http://www.w3.org/2000/svg", "g"),
      ring = document.createElementNS("http://www.w3.org/2000/svg", "g"),
      hsl = "hsl(" + gsap.utils.random(0, 360, 1) + ",100%,50%)";

    stage.appendChild(firework);
    firework.appendChild(trail);
    firework.appendChild(ring);

    for (let i = 1; i < 5; i++) {
      const t = document.createElementNS("http://www.w3.org/2000/svg", "path");
      gsap.set(t, {
        x: m.x,
        y: innerHeight,
        opacity: 0.25,
        attr: {
          "stroke-width": i,
          d: "M0,0 0," + innerHeight,
        },
      });
      gsap.to(t, {
        y: m.y,
        ease: "expo",
      }); // for some reason this can't be combined with the above set() in a fromTo() without generating errors
      trail.appendChild(t);
    }

    for (let i = 1; i < gsap.utils.random(6, 13, 1); i++) {
      const c = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      gsap.set(c, {
        x: m.x,
        y: m.y,
        attr: {
          class: "core",
          r: () => (i / 1.5) * 18,
          fill: "none",
          stroke: hsl,
          "stroke-width": () => 0.25 + (9 - i),
          "stroke-dasharray": "1 " + (i / 2) * gsap.utils.random(i + 3, i + 6),
        },
      });
      ring.appendChild(c);
    }

    gsap
      .timeline({ onComplete: () => stage.removeChild(firework) })
      .to(
        trail.children,
        {
          duration: 0.2,
          attr: { d: "M0,0 0,0" },
          stagger: -0.08,
          ease: "expo.inOut",
        },
        0
      )
      .to(
        trail.children,
        {
          duration: 0.4,
          scale: () => gsap.utils.random(40, 80, 1),
          attr: { stroke: hsl },
          stagger: -0.15,
          ease: "expo",
        },
        0.4
      )
      .to(
        trail.children,
        { duration: 0.3, opacity: 0, ease: "power2.inOut", stagger: -0.1 },
        0.5
      )
      .from(
        ring.children,
        {
          duration: 1,
          rotate: () => gsap.utils.random(-90, 90, 1),
          scale: 0,
          stagger: 0.05,
          ease: "expo",
        },
        0.4
      )
      .to(ring.children, { opacity: 0, stagger: 0.1, ease: "sine.inOut" }, 0.7)
      .to(ring.children, { duration: 1, y: "+=30", ease: "power2.in" }, 0.7);
  }

  toggle.onpointerup = toggleAuto;

  function toggleAuto() {
    // auto = !auto
    gsap
      .timeline({ defaults: { duration: 0.3, ease: "power2.inOut" } })
      .to(".knob", { x: () => (auto ? 18 : 0) }, 0);
    if (auto) autoPlay();
    else {
      gsap.killTweensOf(autoPlay);
      gsap.killTweensOf(fire);
    }
  }

  function autoPlay() {
    for (let i = 0; i < gsap.utils.random(3, 9, 1); i++) {
      gsap.delayedCall(i / 2, fire, [
        {
          x: gsap.utils.random(99, innerWidth - 99, 1),
          y: gsap.utils.random(99, innerHeight - 99, 1),
        },
      ]);
    }
    auto ? gsap.delayedCall(3.5, autoPlay) : gsap.killTweensOf(autoPlay);
  }
  toggleAuto();

  countdown();
  waterRipples();
  dayChange();
});

setTimeout(() => {
  windowSize();
}, 500);
