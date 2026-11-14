import { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Calendar,
  FileText,
  Bell,
  Video,
  ArrowRight,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { pageMeta, APK_DOWNLOAD_URL } from "@/lib/site";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = pageMeta({
  title: "Download Harshika eClinic Android App (Direct APK)",
  description:
    "Download the official Harshika eClinic Android APK directly on your Android phone. Fast, secure online homeopathic consultations and digital prescriptions with Dr. Harshika Singh.",
  path: "/app",
});

export default function AppDownloadPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-pattern pt-32 sm:pt-36 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            {/* Android Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6">
              <svg
                className="w-4 h-4 fill-current text-emerald-700"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Android Icon"
              >
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1 0-.5514.4482-1 .9993-1 .5511 0 .9993.4486.9993 1 0 .5514-.4482 1-.9993 1m-11.046 0c-.5511 0-.9993-.4486-.9993-1 0-.5514.4482-1 .9993-1 .5511 0 .9993.4486.9993 1 0 .5514-.4482 1-.9993 1m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5834 8.4116 13.8543 8.125 12 8.125c-1.8543 0-3.5834.2866-5.1368.8247L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.152 1.5676l1.9973 3.4592C2.6889 12.1867 0 16.0365 0 20.625h24c0-4.5885-2.6889-8.4383-6.1185-11.3036" />
              </svg>
              <span>Official Android App • Harshika eClinic</span>
            </div>

            <h1 className="font-heading text-charcoal mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight">
              Download Harshika eClinic{" "}
              <span className="gradient-text">Directly on Android</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Access Dr. Harshika Singh&apos;s homeopathic care from anywhere.
              Book appointments, connect via video consultation, and manage your health prescriptions right on your Android phone.
            </p>

            {/* Direct Download Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href={APK_DOWNLOAD_URL}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white shadow-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 hover:shadow-orange-900/30"
                style={{
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                }}
              >
                <Download className="w-5 h-5 animate-bounce" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider opacity-90">
                    Direct Download
                  </div>
                  <div className="text-base font-bold">Harshika eClinic.apk</div>
                </div>
              </a>

              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>Book on Web Instead</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* File info pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 bg-white/80 border border-slate-200/80 px-4 py-2 rounded-full">
              <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                <ShieldCheck className="w-4 h-4" /> Verified Clean &amp; Safe
              </span>
              <span>•</span>
              <span>Version: 1.0 (Latest)</span>
              <span>•</span>
              <span>File Size: ~25 MB</span>
              <span>•</span>
              <span>Compatible: Android 6.0 &amp; Above</span>
            </div>
          </div>
        </div>
      </section>

      {/* App Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading text-charcoal mb-4">
              Everything You Need in <span className="gradient-text">One Place</span>
            </h2>
            <div className="section-divider" />
            <p className="text-slate-600 mt-4">
              Designed specifically for patients seeking dedicated homeopathic care for PCOS, thyroid, joints, and hormonal wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Video,
                title: "Live Video Consultations",
                desc: "Consult directly with Dr. Harshika from the comfort of your home with secure video calling.",
              },
              {
                icon: FileText,
                title: "Digital Prescriptions",
                desc: "Access, download, and store your doctor prescriptions and medicine regimens instantly.",
              },
              {
                icon: Calendar,
                title: "Easy Scheduling",
                desc: "Book and reschedule your follow-up consultations in seconds with real-time calendar slots.",
              },
              {
                icon: Bell,
                title: "Dosage Reminders",
                desc: "Receive timely alerts for your homeopathic remedies and follow-up consultation dates.",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-card border border-slate-200/70 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step by Step Install Guide */}
      <section className="section-padding bg-ivory">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              <Smartphone className="w-4 h-4" />
              <span>Installation Guide</span>
            </div>
            <h2 className="font-heading text-charcoal mb-3">
              How to Install on Your Android Device
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Installing directly via APK is fast and takes less than 60 seconds.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Download the APK file",
                desc: "Tap the 'Download Harshika eClinic.apk' button above. Your browser will start downloading the 25 MB file directly to your phone.",
              },
              {
                step: "2",
                title: "Confirm the download prompt",
                desc: "If Android displays 'File might be harmful' or 'Download anyway?', choose 'Download anyway'. This is Android's default notice for apps downloaded directly from verified website links instead of Google Play.",
              },
              {
                step: "3",
                title: "Open the downloaded file & tap Install",
                desc: "Once finished, pull down your notification tray or go to your phone's 'Downloads' folder. Tap on 'Harshika-eClinic.apk'. If asked to allow installations from your browser/source, tap 'Settings' and toggle 'Allow from this source'.",
              },
              {
                step: "4",
                title: "Launch Harshika eClinic",
                desc: "Tap 'Install'. In seconds, the Harshika eClinic app will be ready on your home screen to book visits and chat with Dr. Harshika!",
              },
            ].map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-charcoal mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Security Notice Box */}
          <div className="mt-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              <strong>100% Safe &amp; Official:</strong> This APK is built directly by Dr. Harshika Wellness clinic.
              It does not contain ads, spyware, or third-party trackers. All communication is encrypted.
            </div>
          </div>

          {/* Bottom Download Card */}
          <div className="mt-12 text-center">
            <a
              href={APK_DOWNLOAD_URL}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white shadow-xl hover:-translate-y-0.5 transition-all"
              style={{
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
              }}
            >
              <Download className="w-5 h-5" />
              <span>Download Harshika eClinic APK Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
