# Düzenlemeye buradan başlayın

Artık Next.js veya karmaşık üretilmiş `out/index.html` yok. Ana sayfanın gerçek kaynak dosyası proje kökündeki `index.html` dosyasıdır.

## Metin değiştirme

İlgili HTML dosyasını aç ve ekranda gördüğün metni dosyada ara:

- Ana sayfa: `index.html`
- Hakkımızda: `about.html`
- Projeler: `projects.html`
- Coffee: `coffee.html`
- Cake: `cake.html`
- Kafe menüsü: `menu.html` — ziyaretçi bu sayfaya Coffee içinden ulaşır

Her bölümün başında `<!-- ANA KARŞILAMA -->`, `<!-- HİKÂYEMİZ -->` veya `<!-- PROJELER -->` gibi açıklamalar bulunur.

## Menü ürünü değiştirme

`menu.html` içinde ürün adını ara. Her ürün ayrı bir `<article>` bloğudur. Bu blokta ürün adı, açıklama, fiyat ve fotoğraf yolu yan yana bulunur.

Yeni ürün eklemek için aynı kategorideki bir ürünün `<article>...</article>` bloğunu kopyala ve içeriğini değiştir.

## Fotoğraf değiştirme

Menü fotoğrafları `assets/images/menu/` klasöründedir. Yeni fotoğrafı aynı dosya adıyla eskisinin üzerine koyarsan HTML kodunu değiştirmen gerekmez.

Ana sayfa, hakkımızda ve projeler sayfasındaki fotoğrafların hemen üzerinde hangi `src` adresinin değiştirileceğini anlatan yorum bulunur.

## Tasarım değiştirme

- Genel görünüm: `assets/css/global.css`
- Ana sayfa: `assets/css/home.css`
- Hakkımızda ve projeler: `assets/css/pages.css`
- Kafe menüsü: `assets/css/menu.css`
