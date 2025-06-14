'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e68ad5dbecf35c7b6527e69d46e9420b",
"version.json": "f7dd66905030dd5ed5d5d5a31174aa91",
"splash/img/light-background.png": "f0c8c3175d09370349c9f5fe57103972",
"index.html": "665930cc24a8a82bf5037681d180b37b",
"/": "665930cc24a8a82bf5037681d180b37b",
"main.dart.js": "912b002e2807408da98233d7c66e36e9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cb82ee4a023ac2263516deaeae948db9",
"assets/AssetManifest.json": "44bb5aa500d4ef9fe31bd55bd2f0b4a9",
"assets/NOTICES": "76b0b3f9b2e3e844c15949d3d0b7f6da",
"assets/FontManifest.json": "ac10f259c5d63a552a06579748ceda6f",
"assets/AssetManifest.bin.json": "e9838ee51e5eceaa9b92bc7add9001ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c8dd3dd4e4f76c8d0ca23e7f5c1f5b69",
"assets/fonts/MaterialIcons-Regular.otf": "46c7518c4a2bca4167fe878afa8dc533",
"assets/assets/images/home/mic_support.png": "49b4245eb79125cac40ed8501b0d697f",
"assets/assets/images/home/popular_bold.png": "c49f4b3a7f3434989c54f8da78bede02",
"assets/assets/images/home/lang.png": "0a35c57243f6b7e0450d36612ce50c9d",
"assets/assets/images/home/email.png": "a8667dfde397370180046c6c14cb560e",
"assets/assets/images/home/home_activity.png": "5a6bd618e9a436b426a3b8c8264201a6",
"assets/assets/images/home/phyiscal_bold.png": "87fb4c370790ed4e36d9f10887abbef8",
"assets/assets/images/home/tiancheng.png": "5afe661d5e4d8743b4db9a66dc79d5c3",
"assets/assets/images/home/lottery.png": "8b40499b024f5f0f555f80dceb2cacc6",
"assets/assets/images/home/physical.png": "329b2f0a87597c3fbf6e814e81aaade2",
"assets/assets/images/home/hb_icon.png": "b5eb4d3b8f45eee5b6bf2f80f366908b",
"assets/assets/images/home/arrow-circle-left.png": "62f1cb1dc1fbb21589232099b7befdda",
"assets/assets/images/home/gift_bold.png": "123c3297273a634cb1845b7730fc20cf",
"assets/assets/images/home/jili_slot.png": "d7c2ee2108f6aaa04d3aec8b4a1b215d",
"assets/assets/images/home/telegram.png": "62ec0638888327cdd1dc311131b0c743",
"assets/assets/images/home/chese_bold.png": "9ad068bd6429c978adf497b89ca0c589",
"assets/assets/images/home/cator_image.png": "33beee90d59e2624e46bef0825c5cbf4",
"assets/assets/images/home/real_person_bold.png": "2c5b9cce80e843e555490e41f31f886f",
"assets/assets/images/home/esport.png": "e06fd9a40f2b537e6f2cdf5eaa64fb2e",
"assets/assets/images/home/game.png": "a3549b16945d9f3fb395c3cea684900e",
"assets/assets/images/home/elovation_icon.png": "3f8ff6392cbdc1a3c9ce3f7e89ef910e",
"assets/assets/images/home/question_mark.png": "0934dcabc30a09e35d405f22096a5cdf",
"assets/assets/images/home/pp_slot.png": "5adf7cf0af70e1c819b2cc8b770e2c67",
"assets/assets/images/home/hourse_bold.png": "9f3f15990804be453287f4f1805bff5d",
"assets/assets/images/home/bag-2.png": "6536b84d91b165a2e0128e5ce1d22def",
"assets/assets/images/home/lottery_bold.png": "6f5a2bf1ab231548f521c55e3ca87654",
"assets/assets/images/home/sponser.png": "e6fc0b7326569160f3cd29df22d12b47",
"assets/assets/images/home/chese.png": "7d54845f78b81904ca3b6c9ef70e55bd",
"assets/assets/images/home/electronic_bold.png": "0cd0202c03334dab8071f472e30f6fe8",
"assets/assets/images/home/banner1.png": "9e6fb2cc697f678c40a9fb4f7223a139",
"assets/assets/images/home/home_bold.png": "90b8b290342bde61fed146a70e03a1cb",
"assets/assets/images/home/float_btn.png": "f9ed5800edcb090f3820db041e2f528b",
"assets/assets/images/home/tf_sport_image.png": "c4f936ddb61a6f7223377881616f9258",
"assets/assets/images/home/hb_slot_image.png": "adcbdafe6f7b7129acf1c489d16b8511",
"assets/assets/images/home/fishing_image.png": "58d7cf8d602268a91f4f76c5fce6a8a3",
"assets/assets/images/home/home.png": "093daeea16a18c8a610ed37a33dd2ff2",
"assets/assets/images/home/person.png": "e710bf47108a82ac9b5e6eeb5d50cc2d",
"assets/assets/images/home/cator_icon.png": "2b7a09bb591e06bf03a5f74fd9321486",
"assets/assets/images/home/fishing.png": "b2c0e15d487ae2c902c99ed5b1d4d407",
"assets/assets/images/home/password-check.png": "d95169ccf8762ed6c82520ae99f7d88b",
"assets/assets/images/home/ronaldo.png": "c8ee61bc9428cbff2641dd452336a961",
"assets/assets/images/home/contact_mic.png": "c38c8e737d13a5c6d3fe3e69618dce1b",
"assets/assets/images/home/cup_bold.png": "b6bfef6fd149eee9f10b4b3bb046504d",
"assets/assets/images/home/hours_icon.png": "d483640cb2a91722d419448edca4873f",
"assets/assets/images/home/elovation_image.png": "db28b1850aa3e16fc1a7d8b0bb5deb40",
"assets/assets/images/home/kayan_game.png": "26c9f8ec217bd3250fcda577c979f2eb",
"assets/assets/images/home/hourse.png": "f9c96b826ee90626a8a8d14ff4680ec4",
"assets/assets/images/home/mic_bold.png": "158b12149b950fcc4078facec965611d",
"assets/assets/images/home/skype.png": "cf5ca471fd77d822addd51c6b2920962",
"assets/assets/images/home/mineiro.png": "72e3b781665b6f5655c1a08886042656",
"assets/assets/images/home/cup.png": "c483ffb1c05ddfe5618787d005a48451",
"assets/assets/images/home/pp.png": "16d95d6bfbaab669e3fd37b066881a02",
"assets/assets/images/home/gift.png": "b9c0615db64200c8ff43051da4040a2d",
"assets/assets/images/home/kayan_icon.png": "e40b3234158fdd3299e56eb311379d8c",
"assets/assets/images/home/promotion_clock.png": "13daa62352a67fd10817d6241434e0e8",
"assets/assets/images/home/jili.png": "fef86c8c0447ddf7510ce115c93274c5",
"assets/assets/images/home/clock.png": "a9ee329f5bd18b741e37fb7a09b7b0a4",
"assets/assets/images/home/hours_game.png": "33a03a5a5b6d30d92469212973e0b4b4",
"assets/assets/images/home/tf_sport_icon.png": "d92bf015f6ee49b727f9bf031ca6a878",
"assets/assets/images/home/super_game3.png": "443aa5c347decf6fc9b29f4a76cceef0",
"assets/assets/images/home/electronic.png": "8cad99e37b66d714364d16be01a7b747",
"assets/assets/images/home/fishing_icon.png": "67f5491b8d432926af7bf4fb87231516",
"assets/assets/images/home/afb_slot.png": "44a3cc64cb50a7e1d001524ba1ebdc51",
"assets/assets/images/home/footbal.png": "c18d9a9aef4cedce5754b5d02739b2f2",
"assets/assets/images/home/real_person.png": "bdb02bea71c1a8498c1fc383ad4114e2",
"assets/assets/images/home/fishing_bold.png": "6a4e6e6bc2ae192aa7d041110dc05366",
"assets/assets/images/home/esport_bold.png": "a3e0b17630f0a968ac781c2bb71d62b1",
"assets/assets/images/home/flamenco.png": "decaaf5e8498298e42feefcfe0901679",
"assets/assets/images/home/lottery_tian.png": "b48ac294fe81d8a0d8d8bf3c9367da03",
"assets/assets/images/home/messages.png": "bd267c37bad9c517a7cd314a7d940ceb",
"assets/assets/images/home/afb.png": "d7ebcfb0bf75eae97e8bc1f1d62d6df2",
"assets/assets/images/home/live_game.png": "25f7a9c3f7ee7a1cc5712df83254bbb8",
"assets/assets/images/home/person_bold.png": "7e0291f5641625c357eaa191aad006d5",
"assets/assets/images/home/popular.png": "0d894a7fa343e986b90c8c7490ebf9bc",
"assets/assets/images/home/edit_pen.png": "26c4e5f8309140214a615b64c210e17a",
"assets/assets/images/home/mic.png": "cfe2c0aeb5c5777e5868fa8bc2a85c7a",
"assets/assets/images/drawer/deposit.png": "e628662ef3af12aaa02a5507652f5772",
"assets/assets/images/drawer/secondary_password.png": "55772633e12ac0e1393bfe5662d9cd53",
"assets/assets/images/drawer/device_info.png": "0583e00f99e4dc2a33e7d5cb09417be5",
"assets/assets/images/drawer/refresh-circle.png": "7418124dee4a85a5a7e11532ca1bec76",
"assets/assets/images/drawer/withdraw.png": "935219a7c0cddb9b89e168dbcdc68033",
"assets/assets/images/drawer/moon.png": "551aaff4eaddb0e2c543b671222cbac7",
"assets/assets/images/drawer/personal_profile.png": "3747088b478eb22baaacae6554c6196c",
"assets/assets/images/drawer/eye.png": "8ef6a69a2a977ea1fa66e7155dc8254e",
"assets/assets/images/drawer/change_password.png": "006397e1fde453ce09f59a596a530348",
"assets/assets/images/drawer/vip.png": "35b3d5ee782675d169dc42ccbd4239ed",
"assets/assets/images/drawer/magicpen.png": "ad80fc655654e42c9f3433a1b97e3aeb",
"assets/assets/images/drawer/eye-slash.png": "42bf9af083bb73f9f7d8a1d329ce4a92",
"assets/assets/images/drawer/tranfer.png": "1e23bdf9c29e87056119f476f16f07db",
"assets/assets/images/drawer/drawer_bg.png": "8364d5ed2111ffba0b7c60d2bf8ba374",
"assets/assets/images/vip/card.png": "46115529d8c35659dc34a6168e62dba2",
"assets/assets/images/vip/vip_coin.png": "b578dabe59bac4c388523bdb8cfb3b0e",
"assets/assets/images/vip/cake.png": "1ce4f30e0d4f7c173a353a93f445a27b",
"assets/assets/images/vip/suprem.png": "904493fa397d119fcacdb43f411440f1",
"assets/assets/images/vip/sms.png": "5142558a060848def7edb882ead525be",
"assets/assets/images/vip/vip9.png": "e9ac44b622c37e7de3f78115a0030da9",
"assets/assets/images/vip/vip8.png": "c019e96a42dd777c0d0234cc985f350a",
"assets/assets/images/vip/export.png": "45726341c5ae23b1b011bca63beeb503",
"assets/assets/images/vip/vip0.png": "88269ff4a40427a02d9e8ebf5e4dbc15",
"assets/assets/images/vip/vip1.png": "d4081b38dc448f310023e1a0c72223ad",
"assets/assets/images/vip/vip3.png": "cff577ede838da5a6279e83b799e92ce",
"assets/assets/images/vip/vip2.png": "a5cfa551f23e7b9d5e03652edce19ac1",
"assets/assets/images/vip/vip_level0.png": "58bd317c08e11094f2908c9d58d9327a",
"assets/assets/images/vip/vip6.png": "f715115b3c9688559637d0f5ffdf255a",
"assets/assets/images/vip/vip7.png": "72c18151fc8266c5cec1c32f89238acf",
"assets/assets/images/vip/vip5.png": "54a0419032dfa5f1f4ca6cbc83245b01",
"assets/assets/images/vip/vip4.png": "d26cdffc8edf97d92ed699bca696387f",
"assets/assets/images/vip/downgrad.png": "d5b32c8417b8f832c7d6b528dc28528c",
"assets/assets/images/vip/minus-cirlce.png": "11d73ac002b3cf03c7862301985f201a",
"assets/assets/images/splash/splash_circle.png": "427cc93c04fa3932e467fa2600834e42",
"assets/assets/images/splash/splash_circle1.png": "7d8e9da35763d884a852e75f2d035e22",
"assets/assets/images/splash/splash1.png": "7457a0892b432182f227f5fcb98df4c6",
"assets/assets/images/splash/splash3.png": "67002233e7a8c03af054ee5743a763c0",
"assets/assets/images/splash/splash2.png": "43f67ca25e820c9f3526ef0c04837e7d",
"assets/assets/images/splash/mic.png": "110003039430036d95035cc14101c2d2",
"assets/assets/images/login_bg.png": "9beca6904dc305eed8277bd47d653da7",
"assets/assets/images/real_mad.png": "9b4fd7691f905ba165463c07b0aec07b",
"assets/assets/images/deposit/bitcoin.png": "be2c23c26d5005d1cce0c48002aed1ef",
"assets/assets/images/deposit/shield-tick.png": "f95b16616cf826733b72f4e33a41f571",
"assets/assets/images/deposit/copy-success.png": "06b4ebf4f331a6e5231c8c05c007b935",
"assets/assets/images/deposit/debit_card.png": "a132b20992c582d74b478ec7eea6b965",
"assets/assets/images/deposit/add-circle.png": "e89c7b2fd528c86d708ad5fd75a30c85",
"assets/assets/images/deposit/alipay.png": "5526667aad43f078e46d4b508efde199",
"assets/assets/images/deposit/bank_card.png": "e6cb19540c1235bc1457770d38d498a0",
"assets/assets/images/deposit/visacard.png": "8b58f5cad6c0b19ddabc4553c63c2b9c",
"assets/assets/images/deposit/wechat.png": "b2f458afeeedf164f791448310a1f329",
"assets/assets/images/deposit/tick-circle.png": "773814d175924321c95a8856a915a915",
"assets/assets/images/deposit/copy.png": "4ad4a89dc5d31ec62063240c3d2a5a50",
"assets/assets/images/deposit/info-circle.png": "9388df77397be959a7241165d0450374",
"assets/assets/images/arrow-right.png": "095e0d6fba448ff6f583c4a1d8eb5361",
"assets/assets/images/serie.png": "dba7cdc4f199a2dbf439091af5fae66e",
"assets/assets/images/bundseliga.png": "cf3e35086b3be8f8b08910fad99a4540",
"assets/assets/images/activity/cake.png": "35721995cc82bd9f99c2498cd2a9f408",
"assets/assets/images/activity/coin_dollar.png": "576ca7cbaffe468b977f1fbdaee14bde",
"assets/assets/images/activity/dollar-circle.png": "cfe189438d927f5d53f9906a7123eed0",
"assets/assets/images/activity/card-add.png": "8f978aa0a2d657a300bfdf42891d3f59",
"assets/assets/images/activity/card-tick.png": "232152d65242d2b876acda0f13a05977",
"assets/assets/images/activity/personalcard.png": "e00fe41c419dd064ab24479b0a978612",
"assets/assets/images/activity/coin.png": "81aa008ae597248011aa015806e60d6a",
"assets/assets/images/faq/transfer_img1.png": "18daec966844f35cfb19be5c7777340a",
"assets/assets/images/faq/betting_tutorial.png": "7484586a2b0a7b03d14c971539fa09f4",
"assets/assets/images/faq/anti_hijack1.png": "b3a6d199fc8bfb505208945adab75009",
"assets/assets/images/faq/transfer_img2.png": "86ae2a718a107d8890a0d23d184ab85d",
"assets/assets/images/faq/anti_hijack3.png": "d78aeff3e43b40b9b20017c5c4db77a8",
"assets/assets/images/faq/anti_hijack2.png": "1e769abbcb376370debf29c85e2764e3",
"assets/assets/images/faq/transfer_img3.png": "4b17b63bea4e86cbb18b2d01d206e179",
"assets/assets/images/faq/anti_hijack6.png": "2e64a8a09969039a4043fcb1a7685332",
"assets/assets/images/faq/wifi-square.png": "88bae5f72179693c09293eee4c9eb497",
"assets/assets/images/faq/withdraw_down.png": "be2e0b38c61deb3a30271183d2a4f141",
"assets/assets/images/faq/anti_hijack7.png": "b26703fbfe0fc01f0751d1d6939f75fc",
"assets/assets/images/faq/mega.png": "1412c2bcf39d177ccae9517209b7a4ef",
"assets/assets/images/faq/anti_hijack5.png": "b091a1eb306f8f8ab81336f43a97aaf4",
"assets/assets/images/faq/anti_hijack4.png": "b8a1871711aed607ff33e07a2a708a72",
"assets/assets/images/faq/lock.png": "4b34137c7aa860401b97c55ebd1fc245",
"assets/assets/images/faq/sponser_richer.png": "494b79ec18d4014499b9f28a0ae4d9fe",
"assets/assets/images/faq/cup6.png": "b0a1ecba7d56b16465c2f5e20e4270f8",
"assets/assets/images/faq/shield-tick.png": "624a169240c6b89b129efe7cb11abf1f",
"assets/assets/images/faq/cup5.png": "15d9c5f55ed5b9944f592dc7d09bcff9",
"assets/assets/images/faq/cup4.png": "8ca5139bb89140b473bcec244c78daf9",
"assets/assets/images/faq/cup1.png": "c4ac0bb8bd7dd9bf73c798205d59a956",
"assets/assets/images/faq/cup3.png": "51bb2d59650084838a934ddfd6e71c31",
"assets/assets/images/faq/like.png": "852e1fe8e40740e88e5887f6611b5114",
"assets/assets/images/faq/cup2.png": "3f76f8663a9ac801c8f92e488b4cd980",
"assets/assets/images/faq/refresh-2.png": "fd063b5c715609bcbfe26c2b3eb03a4f",
"assets/assets/images/faq/sponser_img.png": "f8db4663f8b78cbd8b7dcec21804ad4d",
"assets/assets/images/faq/sponser_winlok.png": "224517d56d7f8f1debfe8732757a84b0",
"assets/assets/images/faq/lamp-charge.png": "de518af71c7c7cc399e728516398cfb4",
"assets/assets/images/faq/bet_img1.png": "7ad41d2c6e966a50717dfb0faf2f5c84",
"assets/assets/images/faq/bet_img3.png": "10d7e00b36112de66b66adefa484d88b",
"assets/assets/images/faq/bet_img2.png": "0eab774db640992c399ea1df636f4e59",
"assets/assets/images/faq/withdraw_img1.png": "303ca706f8831059dc90dac4cea28a4e",
"assets/assets/images/faq/btc.png": "ef654fe961f101d0f1b3302e23cf312b",
"assets/assets/images/faq/anti_hijack8.png": "a38d7b9319a2b0d0ffbc1c70f616d657",
"assets/assets/images/faq/betting_img4.png": "5a929cebfc80c60fa1506cd8be3dd28d",
"assets/assets/images/faq/withdraw_img2.png": "6702c48dd9048b61ff8d9e31b92d454e",
"assets/assets/images/faq/withdraw_img3.png": "a0c53c32c4d089a756a439336b4412b5",
"assets/assets/images/faq/withdraw_up.png": "f014cfbafe1627c0619377916d2439f1",
"assets/assets/images/faq/betting_img1.png": "c6c54f5bb093d09b505e428199fcde45",
"assets/assets/images/faq/recharge_img2.png": "195f91f835ed0fa63aaee7ef504ec7d8",
"assets/assets/images/faq/withdraw_img7.png": "1ee5e8e302d958d0332eac3d5137d54d",
"assets/assets/images/faq/withdraw_img6.png": "645b6b8b5903de8be05d98d6e61b86de",
"assets/assets/images/faq/recharge_img3.png": "05e3e3a2f3c457bf87e8c789d7d53d04",
"assets/assets/images/faq/game_tutorial.png": "0961c42cd43022329431eb96c5a6455f",
"assets/assets/images/faq/betting_img2.png": "b5817ad07a4ba9f5a3e06aeb6902748e",
"assets/assets/images/faq/recharge_img1.png": "1b61a34ece7cfabe04e86e90ced89761",
"assets/assets/images/faq/withdraw_img4.png": "dff0d7bc728639a9b8327a0398269d73",
"assets/assets/images/faq/withdraw_img5.png": "97d7510ad26aa0b733d0b4be161ddd84",
"assets/assets/images/faq/betting_img3.png": "5b8c7ba7590b4b1a4dcd15494f16dae3",
"assets/assets/images/app_logo2.png": "8ef693f2bf5e554fa4c82074680ae974",
"assets/assets/images/bank_logo.png": "1d779cf5ce257eb4c897627715541e56",
"assets/assets/images/philippin.png": "fd92fac165ed9e555725b327408871f4",
"assets/assets/images/malaysia.png": "05d82ab0118252d354fb093a5849c937",
"assets/assets/images/clipboard-close.png": "d29b2bfd33380239805a5994d8bc82de",
"assets/assets/images/splash1.png": "f0c8c3175d09370349c9f5fe57103972",
"assets/assets/images/british.png": "8ff09e59f1f6ca5ef3ffd880a71fbf58",
"assets/assets/images/profile/rotate-left.png": "4e568743388f7f8a466aff252ac9eee6",
"assets/assets/images/profile/setting-2.png": "858f26b41ec78dc9b21a03a42d09a5a2",
"assets/assets/images/profile/wallet-money.png": "b8a4db58f0d4cbaf0f012ca0f0c08e00",
"assets/assets/images/profile/transection_history.png": "5a7e30e302a951058f65a54088d858a7",
"assets/assets/images/profile/youtak.png": "b9691e9f932cfe82cee98f88f2f0fc06",
"assets/assets/images/profile/betting_record.png": "464f4ac044b447eee0d42964f0f34f32",
"assets/assets/images/profile/setting.png": "3437592fd1badbe73f428f2fc5d4a7a1",
"assets/assets/images/profile/info-circle.png": "545546caf454ebb6f6b11dc9e45e7524",
"assets/assets/images/profile/mic.png": "abdccc74eafdaa6f10518a4c3b5c6c5e",
"assets/assets/images/app_logo.png": "00f4d0ff6608e9e67c9fa923866a952a",
"assets/assets/images/login_start.gif": "aba4ab536ac0d5c9fc87d5a85f3c9331",
"assets/assets/images/withdraw/emoji-happy.png": "da9eba25a0af1d67ac022fb369a62432",
"assets/assets/images/withdraw/flag.png": "8a3f5e09b678fe63f908235ee07e6dd2",
"assets/assets/images/withdraw/apply_withdraw.png": "0d195fd0c11ced6066469ddafae5d92d",
"assets/assets/images/withdraw/close-circle.png": "3d40ba18db8256763c4cfb0f5213cc99",
"assets/assets/images/withdraw/progress4.png": "9bc1430ac85ab67a6a3076c55e5081fb",
"assets/assets/images/withdraw/progress3.png": "4a1bcabcf1ea8a474ece072ddb425d2f",
"assets/assets/images/withdraw/progress2.png": "da05162d071ef08bf883cd189b666ba2",
"assets/assets/images/withdraw/progress1.png": "874a1e976d415af4f45fd108a0da5321",
"assets/assets/images/withdraw/receipt-item.png": "d91dfd437afa56eefd5df9c122dab67c",
"assets/assets/images/withdraw/card-remove.png": "e084cf8a1d07b95e272113c30aace27e",
"assets/assets/images/withdraw/cloud-add.png": "f798bead76d1ff15f4801cca267a7e27",
"assets/assets/images/send.png": "82ff08be0ea9248e650c97cdafc950f2",
"assets/assets/images/game_tutorial.png": "3d74ac0a128aa948010ab6a915e74507",
"assets/assets/images/bg.png": "e15e9e2bfff2cc3c807e955a8358b61f",
"assets/assets/icons/promotion_step5.png": "78be3262236423d6d026d4dd467b7e80",
"assets/assets/icons/CN.png": "b1f914da8f801ac350e2447e383f2e4e",
"assets/assets/icons/promotion_game.png": "f1db0b516c7dfba89fd3e410d62856a0",
"assets/assets/icons/cantones.png": "ca6076a7a506c0b7c423bfe8dd62ba1f",
"assets/assets/icons/calender_bold.png": "b64d4cfa3133fb5ae3a9b684e01f9868",
"assets/assets/icons/promotion_step4.png": "308feb110180335d8d27b0336a0f2ad6",
"assets/assets/icons/promotion_step6.png": "1799689c8e69163726ee258c0359c0ae",
"assets/assets/icons/emoji-happy.png": "219c57da203cfc35e931fd21d416756c",
"assets/assets/icons/telegram.png": "3621abdffd13bdaac49fa861111b2d44",
"assets/assets/icons/paperclip-2.png": "363f54950808c100f841a484ffb3be06",
"assets/assets/icons/customer_service_icon.png": "ed8765ebfc678bcd44612bef5e791328",
"assets/assets/icons/profile-add.png": "6a278cf180a863871922e6c3cfd3cb81",
"assets/assets/icons/promotion_step3.png": "11fca413afb6ce11fcf1a8a7eb66f3ef",
"assets/assets/icons/invite_group.png": "95e2d1aecbcf067782b95a507de445af",
"assets/assets/icons/promotion_step2.png": "0f005f60eb7b848524f150d5b1d32c68",
"assets/assets/icons/emoji_unhappy.png": "70d1a7540817b30f1ce5eb713bab90c5",
"assets/assets/icons/link.png": "aa50720441581129620a5efce60be2c7",
"assets/assets/icons/promotion_step1.png": "bd3916e5883d1836a74bd09174c296af",
"assets/assets/icons/profile-2user.png": "4eb8465705330a512898065b56275d1e",
"assets/assets/icons/profile-2userBold.png": "956cb877a414bcb0c01add4d99063728",
"assets/assets/icons/calendar-add.png": "036c1bb7f016450bc88d8fb234d4a7f3",
"assets/assets/icons/hide_password.png": "55e4efb422d54f327bf13ea69810446e",
"assets/assets/icons/visit_profile_icon.png": "783f9478a486d19bd07beeba588fb353",
"assets/assets/icons/binance.png": "db1659069d5d0cf5a55672ade571048b",
"assets/assets/icons/clipboard-tick.png": "b7095efc515a2c010020b75f8be71afb",
"assets/assets/icons/fast_transection.png": "6b2274602a5812c771889cff070d6cab",
"assets/assets/icons/safety.png": "8b0ebf3d2e58320356fc265c10d46745",
"assets/assets/icons/invite_rebate.png": "d4d7edaf453317ad51f12630798e9b11",
"assets/assets/icons/huobi.png": "843c8807787795956dc01044ad309593",
"assets/assets/icons/englind.png": "eaee7cfb42b159aff9cb19dfe43f1357",
"assets/assets/icons/apple.png": "ba64e931263ed00dfb433fcbf9270b65",
"assets/assets/icons/visible_password.png": "da38cf8b69aabcf51d64c626d28d0f92",
"assets/assets/icons/layer.png": "b874bf5f44a5fb542998297970e35989",
"assets/assets/icons/money-recive.png": "2113f42832818653cc06232f396f2511",
"assets/assets/icons/lock-circle1.png": "bbd8a3c0086d6153005b839747499dd1",
"assets/assets/icons/traditional.png": "59edc267e56a417aecb0d703302c00ef",
"assets/assets/icons/lock-circle.png": "f3750de5a5676ba203bb53b04cba72e9",
"assets/assets/icons/personalize.png": "312b35676fb9499419fd231dbb296135",
"assets/assets/icons/profile-circle.png": "e62a90795fc2586a38b2f1d0840ace14",
"assets/assets/icons/twitter.png": "02f8f4c6fd6b239c547ea38943f73bcf",
"assets/assets/icons/arrow-square-down.png": "356bbebe63503647787c6e213b556581",
"assets/assets/icons/gift.png": "5b30005351fe0846d8b73ec32385af53",
"assets/assets/icons/profile-tick.png": "52865db5ad3c013e8c023217d9d322c7",
"assets/assets/icons/invite_wind.png": "3904a5d100a49aea60cb622c073ddb1a",
"assets/assets/icons/strong_encrip.png": "9160be30ee14491bace8a64d7f35003b",
"assets/assets/icons/chines_currency.png": "78e86d7835823b45fe0f8223908e66a4",
"assets/assets/icons/promotion_plateform1.png": "b12159d9422bc5b3d5666e980e67ada8",
"assets/assets/icons/danger.png": "3daa51df4c05ef165dff4f64fca9c031",
"assets/assets/icons/telephone.png": "3610d582ea8ba5d92f68b813c0c014d3",
"assets/assets/icons/promotion_plateform2.png": "b391464090dc50b55df32365fb59d163",
"assets/assets/icons/promotion_plateform3.png": "821a983bed66b5db433250434be5f793",
"assets/assets/icons/bag_cross.png": "c64998c29c0ce6c6437b66e79586be77",
"assets/assets/icons/whatsapp.png": "5297e99c4bd5cbd31e35fdc86a8b17d7",
"assets/assets/icons/google.png": "732d5493ffaa0736388f8f9d7418cb01",
"assets/assets/icons/facebook.png": "ce1f1c51b4e62f0cc6c5b300a56f6193",
"assets/assets/icons/j_icon.png": "e9f7b4fe14694eae0f31dc1d26bc4baa",
"assets/assets/icons/invite_barcode.png": "43994858dcd55dce3a288db2e15dbb86",
"assets/assets/icons/high_quality_user.png": "a0de37f7967902cb11bb089f24c53ae7",
"assets/assets/icons/promotion_plateform4.png": "dceff9ad1b3e9b8f8a4e204f32c5937c",
"assets/assets/icons/mx_play.png": "7703a272adc24f3683981aecdce4f72d",
"assets/assets/icons/close.png": "3e72868fe28cbf4d9bf999c8cee689cb",
"assets/assets/fonts/chinese.msyh.ttf": "12916d9b61a4f1381ddb11ec0b53f8a6",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
