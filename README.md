# The Grout Collective

Bu projede düzenlemeye **`src` klasöründen** başlayın.

> `out/index.html`, `.next/` ve tarayıcıdaki **Sayfa kaynağını görüntüle** ekranı düzenlenecek kaynak kod değildir. Next.js bu dosyaları otomatik üretir ve her derlemede yeniden yazar. Bu klasörler dosya gezgininde gizlenmiştir.

## En sık düzenleyeceğiniz yerler

- **Ana sayfa:** [`src/app/page.tsx`](src/app/page.tsx)
- **Kafe menüsü:** [`src/app/menu/page.tsx`](src/app/menu/page.tsx)
- **Menü ürünleri:** [`src/content/menu/`](src/content/menu/)
- **Menü fotoğrafları:** [`public/images/menu/`](public/images/menu/)
- **Projeler sayfası:** [`src/app/projeler/page.tsx`](src/app/projeler/page.tsx)
- **Proje kayıtları:** [`src/content/projects.ts`](src/content/projects.ts)
- **Ana sayfa metinleri:** [`src/content/home.ts`](src/content/home.ts)
- **Ana sayfa fotoğraf yolları:** [`src/content/images.ts`](src/content/images.ts)
- **Tasarım dosyaları:** [`src/styles/`](src/styles/)

Ürün, fiyat ve fotoğraf değiştirme adımları için [`BASLA-BURADAN.md`](BASLA-BURADAN.md) dosyasını açın.

## Çalıştırma

```powershell
npm run dev
```

- Ana sayfa: `http://127.0.0.1:3000/`
- Menü: `http://127.0.0.1:3000/menu/`
- Projeler: `http://127.0.0.1:3000/projeler/`

## Kontrol

```powershell
npm run format
npm run typecheck
npm run build
```
