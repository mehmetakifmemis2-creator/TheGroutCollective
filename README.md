# The Grout Collective

Bu proje doğrudan düzenlenebilen sade HTML, CSS ve JavaScript dosyalarından oluşur. Derleme sistemi yoktur.

## Sayfalar

- `index.html` — ana sayfa
- `about.html` — hakkımızda
- `projects.html` — projeler
- `menu.html` — kafe menüsü

## Tasarım ve işlev dosyaları

- `assets/css/global.css` — ortak görünüm, üst menü ve alt bilgi
- `assets/css/home.css` — ana sayfa
- `assets/css/pages.css` — hakkımızda ve projeler
- `assets/css/menu.css` — kafe menüsü
- `assets/js/site.js` — mobil üst menü
- `assets/js/menu.js` — kategori ve ürün araması
- `assets/images/menu/` — ürün fotoğrafları

Dosyaların içinde `<!-- ... -->` açıklamaları bulunur. Metni doğrudan HTML içinde değiştirebilirsin.

## Yerel önizleme

Proje klasöründe şu komutu çalıştır:

```powershell
python -m http.server 4173
```

Ardından `http://127.0.0.1:4173/` adresini aç.
