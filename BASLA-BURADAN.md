# THE GROUT — Düzenlemeye buradan başlayın

Siteyi değiştirmek için önce aşağıdaki içerik dosyalarını kullanın. Sayfaların görünümü `src/components/`, tasarımı `src/styles/`, fotoğrafları `public/images/` içinde bulunur.

## Sayfalar nerede?

- **Ana sayfa `/`:** [src/app/page.tsx](src/app/page.tsx). Bu dosya yalnızca bölümlerin gösterilme sırasını belirler.
- **Kafe menüsü `/menu/`:** [src/app/menu/page.tsx](src/app/menu/page.tsx). Menü görünümünün ana dosyası: [src/components/menu/menu-page.tsx](src/components/menu/menu-page.tsx).
- **Projeler `/projeler/`:** [src/app/projeler/page.tsx](src/app/projeler/page.tsx). Proje kayıtları: [src/content/projects.ts](src/content/projects.ts).

## Menüde ürün, açıklama ve fiyat değiştirme

Her kategori ayrı bir dosyadır:

- [Sıcak kahveler](src/content/menu/sicak-kahveler.ts)
- [Soğuk kahveler](src/content/menu/soguk-kahveler.ts)
- [İçecekler](src/content/menu/icecekler.ts)
- [Tatlılar](src/content/menu/tatlilar.ts)
- [Yemekler](src/content/menu/yemekler.ts)

Ürün adını dosya içinde arayın. Alanların anlamı:

```ts
{
  id: "pesto-tost",                    // Ürünün benzersiz kimliği
  name: "Pesto Tost",                  // Ekranda görünen ad
  description: "Pesto sos, kaşar, beyaz peynir ve domates",
  price: 230,                          // Sadece sayı: 230₺ için 230 yazın
  group: "Yemekler",                   // Kategori adını aynı yazın
  image: "/images/menu/pesto-tost.jpg", // public klasörüne göre fotoğraf yolu
}
```

Henüz fiyat belirlenmediyse `price: null` kullanın. Taslak ürünlerde `draft: true` vardır. Fiyatı ve ürünü kesinleştirince bu alanı `false` yapın veya kaldırın. `note` alanı ek açıklama gösterir. Yeni ürün eklerken aynı kategori içindeki bir kaydı kopyalayın, `id` dahil bilgilerini değiştirin ve kayıtlar arasındaki virgülleri koruyun. Ürünü kaldırmak için yalnızca o kaydı silin.

## Menü fotoğrafı değiştirme — kod değiştirmeden

1. [public/images/menu/](public/images/menu/) klasörünü açın.
2. Değiştireceğiniz ürünün dosyasını bulun: örneğin `pesto-tost.jpg`.
3. Yeni fotoğrafı **aynı dosya adıyla ve aynı uzantıyla** bu dosyanın yerine koyun.
4. Gerçek JPG kullanın; PNG dosyasının uzantısını yalnızca `.jpg` olarak değiştirmeyin.
5. Önizlemeyi yenileyin. Eski fotoğraf görünürse `Ctrl + F5` kullanın.

Yeni fotoğrafın adı farklıysa kategori dosyasındaki `image` yolunu değiştirin. Örneğin `public/images/menu/yeni-pesto.png` dosyası için `image: "/images/menu/yeni-pesto.png"` yazın. `public/` bölümünü yola eklemeyin. Henüz fotoğraf yoksa `image: null` bırakın; fotoğraf alanı gösterilmez.

Ürün görselleri ayrı JPG dosyalarıdır. Menü afişinden koordinat bulmanız gerekmez. Kaynak afişler yalnızca arşiv için `references/menu-source-images/` içinde saklanır; aktif fotoğraflar `public/images/menu/` içindedir.

## Menü başlığı ve genel metinler

[src/content/menu/settings.ts](src/content/menu/settings.ts) dosyasından başlığı, alt yazıyı, arama metinlerini ve alt bilgiyi değiştirin. Taslak uyarısını kaldırmak için `preview.visible` alanını `false` yapın. Ürünlerin kendisini kategori dosyalarından düzenleyin.

## Ana sayfa metinleri ve fotoğrafları

- Karşılama, hakkımızda, üç marka dünyası ve showroom metinleri: [src/content/home.ts](src/content/home.ts).
- Ana sayfa ve proje fotoğraflarının aktif yolları: [src/content/images.ts](src/content/images.ts).
- Kendi mekân ve proje fotoğraflarınızı koyacağınız klasör: [public/images/site/](public/images/site/).

Şu an mekân görselleri Unsplash üzerinden temsili olarak yükleniyor. Örneğin ana fotoğrafı değiştirmek için:

1. Fotoğrafı `public/images/site/ana-sayfa.jpg` olarak koyun.
2. `src/content/images.ts` içindeki `hero` kaydında `src` değerini `"/images/site/ana-sayfa.jpg"` yapın.
3. Sonraki değişikliklerde aynı isimli fotoğrafı klasörde değiştirmeniz yeterli.

`suggestedFile` yalnızca önerilen dosya adını gösterir; ekranda kullanılan yol `src` alanıdır. Aynı yöntem `coffee`, `interior`, `cake`, `chair`, `living`, `detail`, `showroom`, `project` fotoğrafları için geçerlidir. Kendi yerel fotoğrafınızda temsili görsel etiketi otomatik kalkar. Görselin açıklamasını da ilgili içerik dosyasındaki `alt` alanından güncelleyin; ana sayfa karşılama ve showroom açıklamaları da `src/content/home.ts` içindedir.

## Proje ekleme ve düzenleme

[src/content/projects.ts](src/content/projects.ts) dosyasında her proje `items` listesinin içinde ayrı bir kayıttır. `name`, `type`, `description`, `alt`, `note` alanlarını değiştirin. `image` alanı `src/content/images.ts` içindeki görsel kaydının adıdır: örneğin `"project"`.

Yeni bir proje için:

1. `public/images/site/` içine fotoğrafını koyun.
2. `src/content/images.ts` içine yeni bir görsel kaydı ekleyin: örneğin `yeniProje: { src: "/images/site/yeni-proje.jpg", suggestedFile: "/images/site/yeni-proje.jpg" }`.
3. `projects.ts` içindeki bir proje kaydını kopyalayın; benzersiz `id` verin ve `image: "yeniProje"` yazın.

Listedeki bütün projeler `/projeler/` sayfasında görünür. İlk proje ana sayfada da gösterilir. Mevcut kayıt bir konsept çalışmasıdır; gerçek proje bilgileri gelene kadar temsili açıklamasını koruyun.

## Koleksiyon, iletişim ve üst menü

- Koleksiyon kartları ve detay penceresi içerikleri: [src/content/collections.ts](src/content/collections.ts).
- Üst menü bağlantıları, ortak düğme yazıları ve alt bilgi: [src/content/shared.ts](src/content/shared.ts).
- E-posta, telefon, adres ve Instagram bağlantıları: [src/config/site.ts](src/config/site.ts).

## Görünümü değiştirmek isterseniz

- Ana sayfanın her bölümü: `src/components/home/`.
- Üst menü ve site alt bilgisi: `src/components/layout/`.
- Menü kartı, kategori düğmeleri, arama, başlık ve alt bilgi: `src/components/menu/`.
- Proje kartının görünümü: `src/components/projects/project-card.tsx`.
- Renkler ve ortak yazı ayarları: `src/styles/base.css`.
- Ana sayfa bölüm stilleri: `src/styles/home.css`.
- Kafe menüsü stilleri: `src/styles/menu.css`.
- Proje stilleri: `src/styles/projects.css`.
- Üst menü, koleksiyon ve alt bilgi stilleri: aynı klasördeki `navigation.css`, `collections.css`, `footer.css`.

`src/app/globals.css` yalnızca ortak stil dosyalarını bir araya getirir. İçerik değiştirmek için tasarım dosyalarına girmeniz gerekmez.

## Çalıştırma, kontrol ve yayın

Terminali bu proje klasöründe açın:

```sh
npm install
npm run dev
```

Terminalde gösterilen yerel adresi açın. Ana adresin sonuna `/menu/` veya `/projeler/` ekleyerek sayfalara gidin. Bu çalışma modunda dosyayı kaydedince önizleme güncellenir. Eski `4173` adresi derlenmiş önizlemeydi; `npm run dev` ile terminalin gösterdiği adresi kullanın.

```sh
npm run format        # Tüm kodları okunur biçimde hizalar
npm run format:check  # Biçimlendirmeyi kontrol eder
npm run build         # Üretim derlemesini ve TypeScript kontrolünü yapar
```

GitHub'a gönderilen `main` değişiklikleri mevcut GitHub Pages akışını çalıştırır. Yerel dosyayı değiştirmek tek başına canlı siteyi güncellemez. Canlı menü yolu: `https://mehmetakifmemis2-creator.github.io/TheGroutCollective/menu/`. Projeler yolu: aynı adresin `/projeler/` bölümü. Özel domain kullanıldığında sayfalar aynı site altında `/menu/` ve `/projeler/` olarak çalışır; alt klasör ayarı `next.config.ts` dosyasındadır.

## Ellememeniz gereken otomatik klasörler

`node_modules/`, `.next/`, `out/` ve `next-env.d.ts` otomatik oluşur. Siteyi bunların içinden düzenlemeyin; değişiklikleri `src/` ve `public/images/` içinde yapın. `work/` yerel kontrol ve geçici dosyalar içindir, GitHub'a gönderilmez.
