"use client";

import { Button } from "@/components/ui/button";
import {
    CheckCircle2,
    Copy,
    Heart,
    MapPin,
    MessageCircle,
    RotateCcw,
    Send,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const WHATSAPP_LINK_BASE = "https://wa.me/6285882918721";
const GOOGLE_FORM_RESPONSE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdTGdtlc1xG450ohStI9OQGjOpiS1-SWBqHpso3MA0o86x9Gw/formResponse";

const googleFormEntries = {
  namaLengkap: "entry.879359656",
  noWhatsapp: "entry.49143072",
  jenisBarang: "entry.1790456246",
  kondisi: "entry.1434407313",
  alasan: "entry.52508317",
  setujuDijual: "entry.2120479460",
  setujuDisalurkan: "entry.1803293427",
  tanggalKirim: "entry.698013330",
  caraKirim: "entry.1377315371",
  harapan: "entry.324832852",
} as const;

const RECIPIENT_NAME = "Acha/Anil (donasipakaian.co)";
const RECIPIENT_PHONE = "0858-8291-8721";
const RECIPIENT_ADDRESS =
  "Jalan Musholla Assa'adah No. 43A RT 06 RW 10 (rumah yg ada banner nasi uduk kemayoran), Kelurahan Klender, Kecamatan Duren Sawit, Kota Jakarta Timur 13450";
const GRAB_GOJEK_POINT =
  "Bidan Ranti Febriana / Bidan Ranti Febrina (dari bidan ranti masih agak majuan sedikit masuk ke dalam gang, rumahnya yang ada banner nasi uduk kemayoran)";

const jenisBarangOptions = [
  "Pakaian anak perempuan",
  "Pakaian anak laki-laki",
  "Pakaian pria dewasa",
  "Pakaian wanita dewasa",
  "Hijab",
  "Tas",
  "Sendal dan sepatu",
  "Lainnya",
];

const kondisiOptions = ["Sangat baik", "Baik", "Cukup baik", "Cukup"];

const caraPengirimanOptions = [
  "Datang langsung (Harap konfirmasi admin Whatsapp kami)",
  "Via ekspedisi (JNE/J&T/TIKI/Ninja Express/Lainnya)",
  "Via pengiriman instan (Gosend/Grab express/Lalamove/Maxim)",
];

type FormState = {
  namaLengkap: string;
  noWhatsapp: string;
  jenisBarang: string[];
  kondisi: string;
  alasan: string;
  setujuDijual: "Ya" | "Tidak" | "";
  setujuDisalurkan: "Ya" | "Tidak" | "";
  tanggalKirim: string;
  caraKirim: string;
  harapan: string;
};

const initialState: FormState = {
  namaLengkap: "",
  noWhatsapp: "",
  jenisBarang: [],
  kondisi: "",
  alasan: "",
  setujuDijual: "",
  setujuDisalurkan: "",
  tanggalKirim: "",
  caraKirim: "",
  harapan: "",
};

const FIELD_INPUT =
  "h-11 w-full rounded-xl border border-[#EDE3FF] bg-white px-4 text-sm text-[#4B1D78] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-[#EDE3FF]";
const FIELD_TEXTAREA =
  "min-h-28 w-full rounded-xl border border-[#EDE3FF] bg-white p-4 text-sm text-[#4B1D78] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-[#EDE3FF]";
const FIELD_LABEL =
  "block text-sm font-semibold text-[#4B1D78]";
const FIELD_REQUIRED = "ml-0.5 text-[#7C3AED]";

export function DonationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const canSubmit = useMemo(
    () =>
      form.namaLengkap.trim().length > 1 &&
      form.noWhatsapp.trim().length > 7 &&
      form.jenisBarang.length > 0 &&
      form.kondisi.length > 0 &&
      form.alasan.trim().length > 3 &&
      form.setujuDijual.length > 0 &&
      form.tanggalKirim.length > 0 &&
      form.caraKirim.length > 0 &&
      form.harapan.trim().length > 3,
    [form],
  );

  function toggleJenis(value: string) {
    setForm((prev) => ({
      ...prev,
      jenisBarang: prev.jenisBarang.includes(value)
        ? prev.jenisBarang.filter((v) => v !== value)
        : [...prev.jenisBarang, value],
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await fetch(GOOGLE_FORM_RESPONSE_URL, {
        body: buildGoogleFormPayload(form),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        method: "POST",
        mode: "no-cors",
      });

      setSubmitted(true);
      setCopied(false);
      if (typeof window !== "undefined") {
        window.scrollTo({ behavior: "smooth", top: window.scrollY });
      }
    } catch {
      setSubmitError(
        "Form belum terkirim. Cek koneksi internet kamu, lalu coba kirim lagi.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setForm(initialState);
    setSubmitted(false);
    setCopied(false);
    setSubmitError("");
  }

  const instructionText = useMemo(
    () =>
      `Hallo kak, terima kasih sudah mengisi form permohonan donasi *@donasipakaian.co*🙏😊\n\nSilahkan melakukan pengiriman ke alamat di bawah ini :\n\nPenerima : ${RECIPIENT_NAME}\nNo. Tlp : ${RECIPIENT_PHONE}\nAlamat : ${RECIPIENT_ADDRESS}\n\nTitik di Grab atau Gojek: ${GRAB_GOJEK_POINT}\n\nNote: Jika sudah melakukan pengiriman mohon untuk mengirimkan resi/bukti pengiriman kepada kami.\n\nTerima kasih🙏☺️`,
    [],
  );

  const waConfirmationText = useMemo(() => {
    const lines = [
      "Halo admin DonasiPakaian.co, saya baru saja mengisi form donasi:",
      "",
      `• Nama: ${form.namaLengkap}`,
      `• No. WhatsApp: ${form.noWhatsapp}`,
      `• Jenis Barang: ${form.jenisBarang.join(", ")}`,
      `• Kondisi: ${form.kondisi}`,
      `• Tanggal kirim: ${form.tanggalKirim}`,
      `• Cara kirim: ${form.caraKirim}`,
      "",
      "Mohon konfirmasinya, terima kasih 🙏",
    ];
    return lines.join("\n");
  }, [form]);

  const waLink = `${WHATSAPP_LINK_BASE}?text=${encodeURIComponent(waConfirmationText)}`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(instructionText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (submitted) {
    return (
      <div className="space-y-6">
        <div className="flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EDE3FF] text-[#7C3AED]">
            <CheckCircle2 aria-hidden size={36} strokeWidth={2.5} />
          </span>
          <h3 className="mt-5 text-2xl font-bold text-[#4B1D78]">
            Terima kasih, {form.namaLengkap.split(" ")[0]}! 🙏
          </h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-[#4B5563]">
            Form donasi kamu sudah tercatat. Silahkan kirim pakaianmu ke alamat
            di bawah ini.
          </p>
        </div>

        <div className="rounded-2xl border border-[#EDE3FF] bg-[#F7F2FF] p-6">
          <div className="mb-4 flex items-center gap-2">
            <MapPin aria-hidden className="text-[#7C3AED]" size={18} />
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
              Alamat Pengiriman
            </p>
          </div>

          <div className="space-y-4 text-sm leading-6 text-[#4B1D78]">
            <div>
              <p className="font-semibold text-[#4B5563]">Penerima</p>
              <p className="font-bold">{RECIPIENT_NAME}</p>
            </div>
            <div>
              <p className="font-semibold text-[#4B5563]">No. Telp</p>
              <a
                className="font-bold underline-offset-2 hover:underline"
                href={`tel:+62${RECIPIENT_PHONE.replace(/\D/g, "").replace(/^0/, "")}`}
              >
                {RECIPIENT_PHONE}
              </a>
            </div>
            <div>
              <p className="font-semibold text-[#4B5563]">Alamat lengkap</p>
              <p className="font-medium">{RECIPIENT_ADDRESS}</p>
            </div>
            <div>
              <p className="font-semibold text-[#4B5563]">
                Titik Grab / Gojek
              </p>
              <p className="font-medium">{GRAB_GOJEK_POINT}</p>
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-white p-4 text-sm leading-6 text-[#4B5563]">
            <span className="font-bold text-[#4B1D78]">Note: </span>
            Jika sudah melakukan pengiriman, mohon kirimkan resi atau bukti
            pengiriman kepada kami melalui WhatsApp. Terima kasih 🙏☺️
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="block w-full sm:flex-1"
            href={waLink}
            rel="noreferrer"
            target="_blank"
          >
            <Button
              className="h-12 w-full bg-[#7C3AED] text-base text-white shadow-lg shadow-violet-300/50 hover:bg-[#4B1D78] focus-visible:ring-[#7C3AED]"
              leftIcon={<MessageCircle aria-hidden size={18} />}
            >
              Konfirmasi via WhatsApp
            </Button>
          </a>
          <button
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[#EDE3FF] bg-white px-5 text-sm font-semibold text-[#4B1D78] transition hover:bg-[#F7F2FF] sm:w-auto"
            onClick={handleCopy}
            type="button"
          >
            {copied ? (
              <>
                <CheckCircle2 aria-hidden size={16} />
                Tersalin!
              </>
            ) : (
              <>
                <Copy aria-hidden size={16} />
                Salin Alamat
              </>
            )}
          </button>
        </div>

        <button
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#7C3AED] hover:text-[#4B1D78]"
          onClick={handleReset}
          type="button"
        >
          <RotateCcw aria-hidden size={14} />
          Kirim donasi lagi
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="flex items-center gap-3 rounded-xl bg-[#F7F2FF] p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#7C3AED]">
          <Heart aria-hidden size={18} />
        </span>
        <p className="text-sm leading-6 text-[#4B5563]">
          Isi form di bawah ini, lalu kami kirimkan alamat pengiriman donasi.
          <span className="ml-1 text-xs text-[#7C3AED]">* wajib diisi</span>
        </p>
      </div>

      {/* Nama Lengkap */}
      <div className="space-y-2">
        <label className={FIELD_LABEL} htmlFor="namaLengkap">
          Nama Lengkap<span className={FIELD_REQUIRED}>*</span>
        </label>
        <input
          className={FIELD_INPUT}
          id="namaLengkap"
          onChange={(e) =>
            setForm((v) => ({ ...v, namaLengkap: e.target.value }))
          }
          placeholder="Nama lengkap kamu"
          required
          value={form.namaLengkap}
        />
      </div>

      {/* No WhatsApp */}
      <div className="space-y-2">
        <label className={FIELD_LABEL} htmlFor="noWhatsapp">
          No. WhatsApp<span className={FIELD_REQUIRED}>*</span>
        </label>
        <input
          className={FIELD_INPUT}
          id="noWhatsapp"
          inputMode="tel"
          onChange={(e) =>
            setForm((v) => ({ ...v, noWhatsapp: e.target.value }))
          }
          placeholder="08xxxxxxxxxx"
          required
          type="tel"
          value={form.noWhatsapp}
        />
      </div>

      {/* Jenis Barang */}
      <fieldset className="space-y-3">
        <legend className={FIELD_LABEL}>
          Jenis Barang<span className={FIELD_REQUIRED}>*</span>
          <span className="ml-1 text-xs font-normal text-[#4B5563]">
            (boleh pilih lebih dari satu)
          </span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {jenisBarangOptions.map((option) => {
            const checked = form.jenisBarang.includes(option);
            return (
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                  checked
                    ? "border-[#7C3AED] bg-[#EDE3FF]/50 text-[#4B1D78]"
                    : "border-[#EDE3FF] bg-white text-[#4B5563] hover:bg-[#F7F2FF]"
                }`}
                key={option}
              >
                <input
                  checked={checked}
                  className="h-4 w-4 accent-[#7C3AED]"
                  onChange={() => toggleJenis(option)}
                  type="checkbox"
                />
                <span className="font-medium">{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Kondisi pakaian */}
      <fieldset className="space-y-3">
        <legend className={FIELD_LABEL}>
          Kondisi pakaian<span className={FIELD_REQUIRED}>*</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {kondisiOptions.map((option) => {
            const checked = form.kondisi === option;
            return (
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${
                  checked
                    ? "border-[#7C3AED] bg-[#EDE3FF]/50 text-[#4B1D78]"
                    : "border-[#EDE3FF] bg-white text-[#4B5563] hover:bg-[#F7F2FF]"
                }`}
                key={option}
              >
                <input
                  checked={checked}
                  className="h-4 w-4 accent-[#7C3AED]"
                  name="kondisi"
                  onChange={() => setForm((v) => ({ ...v, kondisi: option }))}
                  type="radio"
                />
                <span className="font-medium">{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Alasan berdonasi */}
      <div className="space-y-2">
        <label className={FIELD_LABEL} htmlFor="alasan">
          Alasan berdonasi<span className={FIELD_REQUIRED}>*</span>
        </label>
        <textarea
          className={FIELD_TEXTAREA}
          id="alasan"
          onChange={(e) => setForm((v) => ({ ...v, alasan: e.target.value }))}
          placeholder="Ceritakan alasanmu berdonasi..."
          required
          value={form.alasan}
        />
      </div>

      {/* Setuju dijual */}
      <fieldset className="space-y-3">
        <legend className={FIELD_LABEL}>
          Apakah kamu setuju apabila barang tersebut dijual?
          <span className={FIELD_REQUIRED}>*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {(["Ya", "Tidak"] as const).map((option) => {
            const checked = form.setujuDijual === option;
            return (
              <label
                className={`flex min-w-24 cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition ${
                  checked
                    ? "border-[#7C3AED] bg-[#7C3AED] text-white"
                    : "border-[#EDE3FF] bg-white text-[#4B1D78] hover:bg-[#F7F2FF]"
                }`}
                key={option}
              >
                <input
                  checked={checked}
                  className="sr-only"
                  name="setujuDijual"
                  onChange={() =>
                    setForm((v) => ({ ...v, setujuDijual: option }))
                  }
                  type="radio"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Setuju disalurkan langsung */}
      <fieldset className="space-y-3">
        <legend className={FIELD_LABEL}>
          Apakah kamu setuju apabila barang tersebut langsung disalurkan kepada
          yang membutuhkan?
        </legend>
        <div className="flex flex-wrap gap-2">
          {(["Ya", "Tidak"] as const).map((option) => {
            const checked = form.setujuDisalurkan === option;
            return (
              <label
                className={`flex min-w-24 cursor-pointer items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition ${
                  checked
                    ? "border-[#7C3AED] bg-[#7C3AED] text-white"
                    : "border-[#EDE3FF] bg-white text-[#4B1D78] hover:bg-[#F7F2FF]"
                }`}
                key={option}
              >
                <input
                  checked={checked}
                  className="sr-only"
                  name="setujuDisalurkan"
                  onChange={() =>
                    setForm((v) => ({ ...v, setujuDisalurkan: option }))
                  }
                  type="radio"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Tanggal kirim */}
      <div className="space-y-2">
        <label className={FIELD_LABEL} htmlFor="tanggalKirim">
          Tanggal pengiriman donasi<span className={FIELD_REQUIRED}>*</span>
        </label>
        <input
          className={FIELD_INPUT}
          id="tanggalKirim"
          onChange={(e) =>
            setForm((v) => ({ ...v, tanggalKirim: e.target.value }))
          }
          required
          type="date"
          value={form.tanggalKirim}
        />
      </div>

      {/* Cara pengiriman */}
      <fieldset className="space-y-3">
        <legend className={FIELD_LABEL}>
          Cara pengiriman<span className={FIELD_REQUIRED}>*</span>
          <span className="mt-1 block text-xs font-normal text-[#4B5563]">
            Biaya kirim ditanggung pengirim. Lokasi: Klender, Duren Sawit,
            Jakarta Timur
          </span>
        </legend>
        <div className="space-y-2">
          {caraPengirimanOptions.map((option) => {
            const checked = form.caraKirim === option;
            return (
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm transition ${
                  checked
                    ? "border-[#7C3AED] bg-[#EDE3FF]/50 text-[#4B1D78]"
                    : "border-[#EDE3FF] bg-white text-[#4B5563] hover:bg-[#F7F2FF]"
                }`}
                key={option}
              >
                <input
                  checked={checked}
                  className="mt-0.5 h-4 w-4 accent-[#7C3AED]"
                  name="caraKirim"
                  onChange={() =>
                    setForm((v) => ({ ...v, caraKirim: option }))
                  }
                  type="radio"
                />
                <span className="font-medium leading-6">{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Harapan */}
      <div className="space-y-2">
        <label className={FIELD_LABEL} htmlFor="harapan">
          Harapan kamu untuk @donasipakaian.co
          <span className={FIELD_REQUIRED}>*</span>
        </label>
        <textarea
          className={FIELD_TEXTAREA}
          id="harapan"
          onChange={(e) => setForm((v) => ({ ...v, harapan: e.target.value }))}
          placeholder="Apa harapan kamu untuk kami?"
          required
          value={form.harapan}
        />
      </div>

      {/* Submit */}
      <div className="border-t border-[#EDE3FF] pt-6">
        <Button
          className="h-12 w-full bg-[#7C3AED] px-7 text-base text-white shadow-lg shadow-violet-300/50 hover:bg-[#4B1D78] focus-visible:ring-[#7C3AED] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          disabled={!canSubmit || isSubmitting}
          leftIcon={<Send aria-hidden size={18} />}
          type="submit"
        >
          {isSubmitting ? "Mengirim..." : "Kirim Form Donasi"}
        </Button>
        {submitError && (
          <p className="mt-3 text-xs font-semibold text-red-600">
            {submitError}
          </p>
        )}
        {!canSubmit && (
          <p className="mt-3 text-xs text-[#4B5563]">
            Lengkapi semua kolom bertanda <span className="text-[#7C3AED]">*</span>{" "}
            untuk mengaktifkan tombol kirim.
          </p>
        )}
      </div>
    </form>
  );
}

function buildGoogleFormPayload(form: FormState) {
  const params = new URLSearchParams();
  const [year, month, day] = form.tanggalKirim.split("-");

  params.set(googleFormEntries.namaLengkap, form.namaLengkap.trim());
  params.set(googleFormEntries.noWhatsapp, form.noWhatsapp.trim());
  form.jenisBarang.forEach((value) => {
    params.append(googleFormEntries.jenisBarang, value);
  });
  params.set(googleFormEntries.kondisi, form.kondisi);
  params.set(googleFormEntries.alasan, form.alasan.trim());
  params.set(googleFormEntries.setujuDijual, form.setujuDijual);
  if (form.setujuDisalurkan) {
    params.set(googleFormEntries.setujuDisalurkan, form.setujuDisalurkan);
  }
  params.set(`${googleFormEntries.tanggalKirim}_year`, year);
  params.set(`${googleFormEntries.tanggalKirim}_month`, String(Number(month)));
  params.set(`${googleFormEntries.tanggalKirim}_day`, String(Number(day)));
  params.set(googleFormEntries.caraKirim, form.caraKirim);
  params.set(googleFormEntries.harapan, form.harapan.trim());

  params.set(`${googleFormEntries.jenisBarang}_sentinel`, "");
  params.set(`${googleFormEntries.kondisi}_sentinel`, "");
  params.set(`${googleFormEntries.setujuDijual}_sentinel`, "");
  params.set(`${googleFormEntries.setujuDisalurkan}_sentinel`, "");
  params.set(`${googleFormEntries.caraKirim}_sentinel`, "");
  params.set("fvv", "1");
  params.set("pageHistory", "0");
  params.set("submit", "Submit");

  return params;
}
