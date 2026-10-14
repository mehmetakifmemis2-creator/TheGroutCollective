export type MenuItem = { name: string; description: string; price: number | null; group: string; photo?: [number | string, number, number, number, number, number?, number?]; draft?: boolean; note?: string; literalPrice?: string };
export const categories = ["Sıcak Kahveler", "Soğuk Kahveler", "İçecekler", "Tatlılar", "Yemekler"];
export const items: MenuItem[] = [
  {name:"San Sebastian",description:"Üzerinde Belçika çikolatasıyla servis ettiğimiz yumuşak dokulu San Sebastian",price:350,group:"Tatlılar",photo:[5,810,365,500,510]},
  {name:"Lotus Cheesecake",description:"Üzerinde erimiş lotus kremasıyla servis edilir.",price:320,group:"Tatlılar",photo:[5,820,1110,500,510]},
  {name:"Brownie",description:"Yoğun çikolatalı klasik Brownie üzeri Belçika çikolatası (Sıcak servis edilir.)",price:330,group:"Tatlılar",photo:[5,195,1355,510,520]},
  {name:"Pate â choux",description:"2 adet içi pastacı krema dolgulu çıtır toplar. Belçika çikolatasıyla servis edilir.",price:340,group:"Tatlılar",photo:[5,200,615,500,510]},
  {name:"Spoonfull",description:"Altı ıslak kek, ortası pastacı kreması, üzeri Belçika çikolatası.",price:340,group:"Tatlılar",photo:[1,815,375,485,575]},
  {name:"Klasik Cup",description:"Çilek, muz ve Belçika çikolatası",price:350,group:"Tatlılar",photo:[1,100,590,590,550]},
  {name:"Tiramisu",description:"Espressoyla ıslatılmış kedi dili bisküvi, özel tiramisu kreması ve kakao",price:330,group:"Tatlılar"},
  {name:"Napolyon Tatlısı",description:"İsteğe göre çilekli ya da muzlu, özel kreması ve çıtır milföy katlarıyla Napolyon tatlısı.",price:320,group:"Tatlılar"},
  {name:"Cream Cup",description:"Altı ıslak kek, ortası çilek ve pastacı kreması, üzeri Belçika çikolatası.",price:350,group:"Tatlılar",photo:[3,805,360,550,520]},
  {name:"Profiterol",description:"3 adet içi krema dolgulu profet irol top ve özel profiterol sosu".replace("profet irol","profetirol"),price:320,group:"Tatlılar",photo:[3,175,595,530,435]},
  {name:"Çikolatalı Cheesecake",description:"Sade cheesecake üzerine Belçika çikolatasıyla servis edilir.",price:340,group:"Tatlılar",photo:[3,825,1160,490,505]},
  {name:"Frambuazlı Cheesecake",description:"İsteğe göre çilekli ya da muzlu magnolia",price:320,group:"Tatlılar",photo:[3,210,1305,490,525],note:"Kaynak menüdeki açıklama bu şekilde; ürün açıklaması teyit bekliyor."},
  {name:"Klasik Churros",description:"Porsiyonda 2 adet bulunmaktadır. Klasik churros şeklinde yanında çikolatayla servis edilir.",price:200,group:"Tatlılar",photo:[2,180,500,520,510]},
  {name:"Meyveli Churros",description:"Ortasında çilek ve muz bulunan 2 adet churros çubuğu. Üzerinde çikolatayla servis edilir.",price:210,group:"Tatlılar",photo:[2,805,395,505,530]},
  {name:"Dolgulu Churros",description:"İçinde krema dolgusu, çilek ve muz bulunan 2 adet churros çubuğu. Üzerinde çikolatayla servis edilir.",price:220,group:"Tatlılar",photo:["dolgulu-churros",0,60,1536,1720,1536,2048]},
  {name:"Köfte Ekmek",description:"Yarım ekmek içerisinde 120 gram köfte ve özel sosumuzla harmanladığımız marul, domates ve soğan salatası",price:350,group:"Yemekler",photo:[6,395,410,620,480]},
  {name:"Pesto Tost",description:"Pesto sos, kaşar, beyaz peynir ve domates",price:230,group:"Yemekler",photo:["pesto-tost",0,960,1536,790,1536,2048]},
  {name:"Klasik Karışık",description:"Sucuk, çift kaşar, salatalık turşusu, ketçap, mayonez, tereyağ ve özel baharat",price:250,group:"Yemekler",photo:[4,160,715,605,320]},
  {name:"the grout tost",description:"Sucuk, kırmızı kuru et, çift kaşar, cheddar, salatalık turşusu, ketçap, mayonez, tereyağ ve özel baharat",price:300,group:"Yemekler",photo:["grout-tost",0,700,1086,550,1086,1448]},
  {name:"Çıtır Tabağı",description:"Patates kızartması, 4 adet soğan halkası, 2 adet nugget ve 2 adet peynir çubuğu",price:250,group:"Yemekler"},
  ...["Espresso","Double Espresso","Americano","Filtre Kahve","Caffè Latte","Cappuccino","Flat White","Mocha","Türk Kahvesi"].map(name=>({name,description:"Örnek seçenek · İçerik ve fiyat henüz kesinleşmedi.",price:null,group:"Sıcak Kahveler",draft:true})),
  ...["Iced Americano","Iced Latte","Iced Mocha","Cold Brew"].map(name=>({name,description:"Örnek seçenek · İçerik ve fiyat henüz kesinleşmedi.",price:null,group:"Soğuk Kahveler",draft:true})),
  ...["İtalyan Soda","Ev Yapımı Limonata","Ev Yapımı Orman Meyveli Limonata","Taze Sıkım Portakal Suyu","Çay","Su","Maden Suyu"].map(name=>({name,description:"Taslak seçenek · İçerik ve fiyat henüz kesinleşmedi.",price:null,group:"İçecekler",draft:true})),
];

