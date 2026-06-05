import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowDown,
  CheckCircle2,
  ClipboardList,
  Filter,
  HandHeart,
  Heart,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Recycle,
  Shirt,
  Sparkles,
  Tag,
  Target,
  Truck,
} from "lucide-react";
import { DonationForm } from "./donation-form";

const WHATSAPP_NUMBER = "0858-8291-8721";
const WHATSAPP_LINK =
  "https://wa.me/6285882918721?text=Halo%20DonasiPakaian.co%2C%20saya%20ingin%20donasi%20pakaian";
const EMAIL = "donasipakaian.co@gmail.com";
const ADDRESS =
  "Jl. Musholla Assa'adah No. 43A RT 06 RW 10, Kel. Klender, Kec. Duren Sawit, Jakarta Timur 13450";
const RECIPIENT_NAME = "Acha / Anil";

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#cara-donasi", label: "Cara Donasi" },
  { href: "#siklus", label: "Siklus Kebaikan" },
  { href: "#form-donasi", label: "Form Donasi" },
  { href: "#kontak", label: "Kontak" },
];

const siklusItems = [
  {
    icon: Shirt,
    title: "Donasi Pakaian",
    text: "Kirim pakaian layak pakai dari rumahmu untuk dilanjutkan kebaikannya.",
  },
  {
    icon: Filter,
    title: "Seleksi & Pemilahan",
    text: "Setiap pakaian diperiksa kelayakannya sebelum disalurkan.",
  },
  {
    icon: HandHeart,
    title: "Penyaluran Tepat Sasaran",
    text: "Disalurkan ke keluarga, panti, dan komunitas yang membutuhkan.",
  },
  {
    icon: Recycle,
    title: "Kebaikan Berputar",
    text: "Pakaian bermanfaat lebih lama, kebaikan kembali berputar.",
  },
];

const misiItems = [
  {
    icon: PackageCheck,
    title: "Pengumpulan & Seleksi",
    text: "Mengumpulkan pakaian layak pakai dan menyortirnya dengan teliti.",
  },
  {
    icon: Truck,
    title: "Distribusi Tepat Sasaran",
    text: "Menyalurkan donasi ke pihak yang benar-benar membutuhkan.",
  },
  {
    icon: Leaf,
    title: "Edukasi Lingkungan",
    text: "Mengajak masyarakat mengurangi limbah tekstil dengan donasi.",
  },
];

const penyaluranItems = [
  {
    icon: HandHeart,
    title: "Disalurkan Langsung",
    text: "Pakaian layak pakai dibagikan gratis ke keluarga, panti, dan korban bencana.",
  },
  {
    icon: Tag,
    title: "Diizinkan untuk Dijual Kembali",
    text: "Sebagian pakaian dijual murah, hasilnya untuk operasional & program sosial.",
  },
];

const syaratItems = [
  "Pakaian dengan kondisi bersih dan tidak rusak",
  "Tidak berbau apek atau lembap",
  "Tidak berlubang, sobek, atau bernoda berat",
  "Resleting dan kancing masih berfungsi",
  "Sepatu masih layak pakai dan berpasangan",
  "Dikemas rapi dalam kantong atau kardus",
];

const stepItems = [
  {
    title: "Isi Form Donasi",
    text: "Lengkapi form online singkat tentang barang yang akan kamu donasikan.",
  },
  {
    title: "Siapkan Pakaian",
    text: "Pilih pakaian layak pakai, cuci bersih, dan kemas rapi.",
  },
  {
    title: "Kirim atau Antar",
    text: "Antar langsung ke alamat kami atau kirim via ekspedisi.",
  },
  {
    title: "Kebaikan Tersalurkan",
    text: "Pakaianmu kami salurkan dan kabari kembali ke kamu.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F2FF] text-[#4B5563]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-violet-100/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2 lg:px-8">
          <a className="flex items-center gap-3" href="#">
            <img
              alt="DonasiPakaian.co"
              className="h-24 w-auto object-contain sm:h-28 lg:h-32"
              src="/logo-transparent.png"
            />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#4B1D78] lg:flex">
            {navLinks.map((link) => (
              <a
                className="transition hover:text-[#7C3AED]"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#form-donasi">
            <Button
              className="bg-[#7C3AED] text-white shadow-md shadow-violet-200 hover:bg-[#4B1D78] focus-visible:ring-[#7C3AED]"
              leftIcon={<ClipboardList aria-hidden size={16} />}
            >
              Donasi Sekarang
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#EDE3FF] opacity-70 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EDE3FF] px-4 py-1.5 text-xs font-semibold text-[#4B1D78] sm:text-sm">
              <Sparkles aria-hidden size={14} />
              Salurkan kebaikan, lestarikan bumi
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#4B1D78] sm:text-5xl lg:text-6xl">
              Berikan Pakaian,
              <br />
              Lanjutkan Kebaikan.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#4B5563] sm:text-lg">
              DonasiPakaian.co menjembatani pakaian layak pakai dari rumahmu ke
              tangan saudara yang membutuhkan, mudah, terpercaya, dan ramah
              lingkungan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#form-donasi">
                <Button
                  className="h-12 w-full bg-[#7C3AED] px-6 text-base text-white shadow-lg shadow-violet-300/60 hover:bg-[#4B1D78] focus-visible:ring-[#7C3AED] sm:w-auto"
                  leftIcon={<ClipboardList aria-hidden size={18} />}
                >
                  Isi Form Donasi
                </Button>
              </a>
              <a href="#cara-donasi">
                <Button
                  className="h-12 w-full border border-[#EDE3FF] bg-white px-6 text-base text-[#4B1D78] hover:bg-[#F7F2FF] focus-visible:ring-[#7C3AED] sm:w-auto"
                  rightIcon={<ArrowDown aria-hidden size={18} />}
                  variant="secondary"
                >
                  Lihat Cara Donasi
                </Button>
              </a>
            </div>
          </div>

          {/* Contact card */}
          <div className="flex items-center justify-center lg:justify-end">
            <Card className="w-full max-w-md rounded-2xl border-violet-100 bg-white p-2 shadow-xl shadow-violet-200/40">
              <CardContent className="space-y-5 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
                    Hubungi Kami
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-[#4B1D78]">
                    Kebaikanmu, satu chat saja.
                  </h2>
                </div>

                <a
                  className="group flex items-start gap-4 rounded-xl bg-[#F7F2FF] p-4 transition hover:bg-[#EDE3FF]"
                  href={WHATSAPP_LINK}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white shadow-md shadow-violet-300/50">
                    <MessageCircle aria-hidden size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                      WhatsApp Only
                    </p>
                    <p className="mt-0.5 text-lg font-bold text-[#4B1D78] group-hover:text-[#7C3AED]">
                      {WHATSAPP_NUMBER}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl bg-[#F7F2FF] p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4B1D78] text-white">
                    <MapPin aria-hidden size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                      Alamat
                    </p>
                    <p className="mt-0.5 text-sm leading-6 text-[#4B1D78]">
                      {ADDRESS}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SIKLUS KEBAIKAN */}
      <section className="scroll-mt-28 bg-white py-16 sm:py-20" id="siklus">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
              Siklus Kebaikan
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4B1D78] sm:text-4xl">
              Empat langkah, kebaikan tak terputus
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563]">
              Dari pakaian di lemarimu, hingga senyum saudara yang menerimanya.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siklusItems.map((item, idx) => (
              <Card
                className="group rounded-2xl border-violet-100 bg-[#F7F2FF] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-200/50"
                key={item.title}
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#7C3AED] shadow-sm">
                      <item.icon aria-hidden size={24} />
                    </span>
                    <span className="text-3xl font-bold text-[#EDE3FF] group-hover:text-[#7C3AED]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#4B1D78]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#4B5563]">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MOTO - circular flow visual */}
      <section className="scroll-mt-28 bg-[#F7F2FF] py-16 sm:py-20" id="tentang">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
              Moto Kami
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4B1D78] sm:text-4xl">
              Kumpulkan, salurkan, lestarikan.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#4B5563]">
              Setiap helai pakaian punya cerita baru menunggu untuk dimulai.
              Kami percaya kebaikan paling kuat saat ia terus berputar, dari satu
              tangan, ke tangan berikutnya.
            </p>
          </div>

          {/* Circular flow */}
          <div className="relative mx-auto aspect-square w-[72%] max-w-65 sm:w-full sm:max-w-md">
            {/* Outer dashed circle */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#7C3AED]/40" />
            {/* Inner solid circle with center text */}
            <div className="absolute inset-7 flex items-center justify-center rounded-full bg-linear-to-br from-[#7C3AED] to-[#4B1D78] text-center text-white shadow-xl shadow-violet-300/40 sm:inset-10 md:inset-14">
              <div className="px-3 sm:px-6">
                <Heart
                  aria-hidden
                  className="mx-auto mb-1.5 h-5 w-5 sm:h-7 sm:w-7"
                  strokeWidth={2.5}
                />
                <p className="text-sm font-bold leading-tight sm:text-lg md:text-xl">
                  Kebaikan
                  <br />
                  Berputar
                </p>
              </div>
            </div>
            {/* 4 floating icons around the circle */}
            {[
              { icon: Shirt, label: "Kumpulkan", pos: "top" },
              { icon: Filter, label: "Pilah", pos: "right" },
              { icon: HandHeart, label: "Salurkan", pos: "bottom" },
              { icon: Recycle, label: "Lestarikan", pos: "left" },
            ].map((node) => {
              const posClass =
                node.pos === "top"
                  ? "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                  : node.pos === "right"
                    ? "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                    : node.pos === "bottom"
                      ? "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2"
                      : "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2";
              return (
                <div
                  className={`absolute ${posClass} flex flex-col items-center gap-0.5 sm:gap-1`}
                  key={node.label}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#EDE3FF] bg-white text-[#7C3AED] shadow-md shadow-violet-200 sm:h-14 sm:w-14">
                    <node.icon aria-hidden className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="rounded-full bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold text-[#4B1D78] shadow-sm sm:px-2.5 sm:text-xs">
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISI */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <span className="inline-flex items-center justify-center rounded-full bg-[#EDE3FF] p-3 text-[#7C3AED]">
            <Target aria-hidden size={26} />
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
            Visi
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4B1D78] sm:text-4xl">
            Menjadi jembatan kebaikan antar sesama
          </h2>
          <p className="mt-5 text-base leading-7 text-[#4B5563] sm:text-lg">
            Mewujudkan masyarakat yang peduli, mengurangi limbah tekstil, dan
            menjadikan setiap pakaian sebagai jembatan harapan baru bagi yang
            membutuhkan.
          </p>
        </div>
      </section>

      {/* MISI */}
      <section className="bg-[#F7F2FF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
              Misi
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4B1D78] sm:text-4xl">
              Tiga langkah membangun kebaikan
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {misiItems.map((item) => (
              <Card
                className="rounded-2xl border-violet-100 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-200/50"
                key={item.title}
              >
                <CardContent className="space-y-4 p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#7C3AED] to-[#4B1D78] text-white shadow-md shadow-violet-300/50">
                    <item.icon aria-hidden size={26} />
                  </span>
                  <h3 className="text-lg font-bold text-[#4B1D78]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#4B5563]">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PILIHAN PENYALURAN */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
              Pilihan Penyaluran
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4B1D78] sm:text-4xl">
              Donasimu, pilihanmu
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563]">
              Kamu bebas memilih bagaimana pakaian donasimu disalurkan.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {penyaluranItems.map((item) => (
              <Card
                className="rounded-2xl border-violet-100 bg-[#F7F2FF] transition hover:shadow-lg hover:shadow-violet-200/50"
                key={item.title}
              >
                <CardContent className="space-y-4 p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7C3AED] shadow-sm">
                    <item.icon aria-hidden size={26} />
                  </span>
                  <h3 className="text-xl font-bold text-[#4B1D78]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#4B5563]">
                    {item.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SYARAT PAKAIAN DONASI */}
      <section className="bg-[#F7F2FF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
              Syarat Donasi
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4B1D78] sm:text-4xl">
              Syarat pakaian yang bisa didonasikan
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563]">
              Pastikan pakaian yang kamu kirim memenuhi kriteria berikut.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-white p-6 shadow-md shadow-violet-200/30 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {syaratItems.map((item) => (
                <li
                  className="flex items-start gap-3 rounded-xl bg-[#F7F2FF] p-4"
                  key={item}
                >
                  <CheckCircle2
                    aria-hidden
                    className="mt-0.5 shrink-0 text-[#7C3AED]"
                    size={22}
                    strokeWidth={2.5}
                  />
                  <span className="text-sm font-medium leading-6 text-[#4B1D78]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CARA BERDONASI - stepper */}
      <section className="scroll-mt-28 bg-white py-16 sm:py-20" id="cara-donasi">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
              Cara Berdonasi
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#4B1D78] sm:text-4xl">
              Empat langkah mudah
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4B5563]">
              Donasi pakaianmu hanya butuh beberapa menit.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Horizontal connector line (desktop) */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden h-0.5 bg-linear-to-r from-transparent via-[#EDE3FF] to-transparent md:block"
            />
            <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
              {stepItems.map((step, idx) => (
                <li className="relative flex flex-col items-center text-center" key={step.title}>
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#7C3AED] to-[#4B1D78] text-lg font-bold text-white shadow-lg shadow-violet-300/50 ring-4 ring-white">
                    {idx + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#4B1D78]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#4B5563]">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14 text-center">
            <a href="#form-donasi">
              <Button
                className="h-12 bg-[#7C3AED] px-7 text-base text-white shadow-lg shadow-violet-300/60 hover:bg-[#4B1D78] focus-visible:ring-[#7C3AED]"
                leftIcon={<ClipboardList aria-hidden size={18} />}
              >
                Mulai Donasi Sekarang
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FORM DONASI */}
      <section
        className="relative scroll-mt-28 overflow-hidden bg-[#F7F2FF] py-16 sm:py-20"
        id="form-donasi"
      >
        <div
          aria-hidden
          className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#EDE3FF] opacity-60 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            {/* Left: heading & info */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#4B1D78] shadow-sm sm:text-sm">
                <ClipboardList aria-hidden size={14} />
                Form Permohonan Donasi
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#4B1D78] sm:text-4xl">
                Isi form, lalu kirim donasimu
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4B5563]">
                Lengkapi form di samping. Setelah submit, admin kami akan
                membalas melalui WhatsApp dengan alamat lengkap pengiriman
                donasi.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Gratis & tanpa biaya",
                  "Admin akan kirim alamat via WhatsApp",
                  "Hanya butuh 2–3 menit untuk mengisi",
                ].map((point) => (
                  <div className="flex items-start gap-3" key={point}>
                    <CheckCircle2
                      aria-hidden
                      className="mt-0.5 shrink-0 text-[#7C3AED]"
                      size={20}
                      strokeWidth={2.5}
                    />
                    <span className="text-sm font-medium text-[#4B1D78]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#EDE3FF] bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
                  Butuh bantuan?
                </p>
                <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                  Chat admin kami kalau ada pertanyaan sebelum mengisi form.
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] hover:text-[#4B1D78]"
                  href={WHATSAPP_LINK}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle aria-hidden size={16} />
                  {WHATSAPP_NUMBER}
                </a>
              </div>
            </div>

            {/* Right: form */}
            <Card className="rounded-2xl border-violet-100 bg-white shadow-xl shadow-violet-200/40">
              <CardContent className="p-6 sm:p-8">
                <DonationForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="relative scroll-mt-28 overflow-hidden bg-linear-to-br from-[#4B1D78] via-[#5b2491] to-[#7C3AED] py-16 text-white sm:py-20"
        id="kontak"
      >
        <div
          aria-hidden
          className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-[#EDE3FF]/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EDE3FF]">
              Kontak
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Siap menerima donasimu
            </h2>
            <p className="mt-4 text-base leading-7 text-violet-100">
              Hubungi kami untuk info lebih lanjut atau langsung kirim donasimu
              ke alamat di bawah ini.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="group rounded-2xl bg-white/10 p-7 backdrop-blur transition hover:bg-white/15"
              href={WHATSAPP_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7C3AED] shadow-md">
                <MessageCircle aria-hidden size={26} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#EDE3FF]">
                WhatsApp Only
              </p>
              <p className="mt-1 text-2xl font-bold text-white group-hover:text-[#EDE3FF]">
                {WHATSAPP_NUMBER}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-violet-100">
                <Phone aria-hidden size={14} />
                Tap untuk mulai chat
              </p>
            </a>

            <a
              className="group rounded-2xl bg-white/10 p-7 backdrop-blur transition hover:bg-white/15"
              href={`mailto:${EMAIL}`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7C3AED] shadow-md">
                <Mail aria-hidden size={26} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#EDE3FF]">
                Email
              </p>
              <p className="mt-1 break-all text-lg font-bold text-white group-hover:text-[#EDE3FF]">
                {EMAIL}
              </p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-violet-100">
                <Mail aria-hidden size={14} />
                Tap untuk kirim email
              </p>
            </a>

            <div className="rounded-2xl bg-white/10 p-7 backdrop-blur md:col-span-2 lg:col-span-1">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#4B1D78] shadow-md">
                <MapPin aria-hidden size={26} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#EDE3FF]">
                Penerima
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                {RECIPIENT_NAME}{" "}
                <span className="text-sm font-medium text-violet-100">
                  (donasipakaian.co)
                </span>
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#EDE3FF]">
                Alamat
              </p>
              <p className="mt-1 text-sm font-medium leading-6 text-white">
                {ADDRESS}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#4B1D78] py-8 text-center text-sm text-violet-200">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p>
            © {new Date().getFullYear()} DonasiPakaian.co. Berikan pakaian,
            lanjutkan kebaikan.
          </p>
          <p className="mt-2 text-violet-400">
            Made with{" "}
            <Heart className="inline-block h-3.5 w-3.5 fill-pink-400 text-pink-400" />{" "}
            by Dwiky
          </p>
        </div>
      </footer>
    </main>
  );
}
