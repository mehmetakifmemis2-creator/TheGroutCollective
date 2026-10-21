# The Grout Collective

Bu proje doğrudan düzenlenebilen sade HTML, CSS ve JavaScript dosyalarından oluşur. Derleme sistemi yoktur.

## Sayfalar

- `index.html` — ana sayfa
- `about.html` — hakkımızda
- `projects.html` — projeler
- `coffee.html` — Coffee dünyası ve kafe menüsü bağlantısı
- `cake.html` — Cake dünyası
- `menu.html` — Coffee sayfasının içinden açılan kafe menüsü

## Tasarım ve işlev dosyaları

- `assets/css/global.css` — ortak görünüm, üst menü ve alt bilgi
- `assets/css/home.css` — ana sayfa
- `assets/css/pages.css` — hakkımızda ve projeler
- `assets/css/menu.css` — kafe menüsü
- `assets/js/site.js` — mobil üst menü
- `assets/js/menu.js` — kategori ve ürün araması
- `assets/images/menu/` — ürün fotoğrafları
- `assets/images/site/` — kafe, Coffee ve Cake sayfalarında kullanılan marka fotoğrafları

Dosyaların içinde `<!-- ... -->` açıklamaları bulunur. Metni doğrudan HTML içinde değiştirebilirsin.

## Fotoğrafları değiştirme

Marka fotoğrafları `assets/images/site/` klasöründedir. Aynı dosya adını koruyarak yeni bir JPG ile değiştirdiğinde ilgili sayfadaki fotoğraf da değişir.

- `cafe-patio.jpg` — ana sayfanın büyük giriş fotoğrafı
- `cafe-front.jpg` — ana sayfadaki Coffee kartı ve Coffee sayfasının büyük fotoğrafı
- `cafe-interior.jpg` — Hakkımızda sayfasının büyük fotoğrafı
- `coffee-table.jpg`, `cafe-lounge.jpg`, `cafe-entrance-night.jpg` — Coffee sayfasındaki üçlü galeri
- `cake-berry-cheesecake.jpg` — ana sayfadaki Cake kartı ve Cake galerisi
- `cake-birthday-brownie.jpg` — Cake sayfasının büyük fotoğrafı
- `cake-brownie-platter.jpg`, `cake-raspberry.jpg` — Cake sayfasındaki diğer galeri fotoğrafları

Menüdeki ürün adları, açıklamalar ve fiyatlar doğrudan `menu.html` içindedir. Her ürün `<!-- ÜRÜN ... -->` açıklamasıyla başlar; aradığın ürün adını editörde aratarak fiyatını veya metnini değiştirebilirsin.

## Yerel önizleme

Proje klasöründe şu komutu çalıştır:

```powershell
python -m http.server 4173
```

Ardından `http://127.0.0.1:4173/` adresini aç.
