# DonasiPakaian.co

Portal donasi pakaian layak pakai. Salurkan pakaian dari rumahmu ke saudara yang membutuhkan, mudah, terpercaya, dan ramah lingkungan.

🌐 **Live**: [donasipakaian.co](https://donasipakaian.co)
📍 **Lokasi**: Klender, Jakarta Timur

## Tech Stack

- **Next.js 16** (App Router) + React 19
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **TypeScript**
- **lucide-react** untuk icon
- Form donasi memakai **Google Forms** (embed)

## Struktur Project

```
app/
  layout.tsx          -> Root layout + SEO metadata + FloatingWhatsApp
  page.tsx            -> Homepage (Hero, Siklus Kebaikan, Visi, Misi, dst)
  donation-form.tsx   -> Form donasi yang submit langsung ke Google Forms
  floating-wa.tsx     -> Tombol WhatsApp mengambang
  globals.css         -> Tailwind + style global
components/ui/        -> Button, Card (komponen reusable)
lib/cn.ts             -> Utility classnames
public/               -> Logo & aset statis
```

## Menjalankan Lokal

```bash
pnpm install        # atau npm install / yarn
pnpm dev            # jalan di http://localhost:3000
```

## Build Production

```bash
pnpm build
pnpm start
```

## Deploy ke Vercel

1. Push repository ke GitHub.
2. Import project di [vercel.com/new](https://vercel.com/new).
3. Vercel akan auto-detect Next.js. Klik **Deploy**.
4. Tambahkan custom domain `donasipakaian.co` di **Settings → Domains**.

Tidak perlu environment variable. Form donasi langsung mengirim ke Google Forms.

## Kontak

- WhatsApp: [0858-8291-8721](https://wa.me/6285882918721)
- Email: donasipakaian.co@gmail.com
- Alamat: Jl. Musholla Assa'adah No. 43A RT 06 RW 10, Klender, Jakarta Timur 13450

---

© DonasiPakaian.co · Siklus Kebaikan Berlanjut.
