"use client";

import { motion } from "framer-motion";
import {
  Download,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  FileText,
  Sparkles,
} from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/lib/site";

export default function AppDownloadBanner() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-[#1C3A27] via-[#2A5A3D] to-[#1E3F2B] text-white">
      {/* Background ambient decorative shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Information & Actions ── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5">
              <svg
                className="w-4 h-4 fill-current text-emerald-400"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Android Icon"
              >
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1 0-.5514.4482-1 .9993-1 .5511 0 .9993.4486.9993 1 0 .5514-.4482 1-.9993 1m-11.046 0c-.5511 0-.9993-.4486-.9993-1 0-.5514.4482-1 .9993-1 .5511 0 .9993.4486.9993 1 0 .5514-.4482 1-.9993 1m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5834 8.4116 13.8543 8.125 12 8.125c-1.8543 0-3.5834.2866-5.1368.8247L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.152 1.5676l1.9973 3.4592C2.6889 12.1867 0 16.0365 0 20.625h24c0-4.5885-2.6889-8.4383-6.1185-11.3036" />
              </svg>
              <span>Official Android Release</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
              Download Our Android App{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-200 to-emerald-300">
                Directly on Android
              </span>
            </h2>

            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
              Get direct homeopathic consultations, track appointments, view digital prescriptions,
              and receive personalized health guidance from Dr. Harshika Singh — all inside our official
              <strong className="text-white font-semibold"> Harshika eClinic</strong> mobile application.
            </p>

            {/* App Features List */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Direct video & audio consultations",
                "Instant digital prescription downloads",
                "Appointment reminders & notifications",
                "Fast & secure direct APK installation",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-emerald-100/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Download CTA Button & Metadata */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <a
                href={APK_DOWNLOAD_URL}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base shadow-xl shadow-orange-950/30 hover:-translate-y-1 transition-all"
                style={{
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                }}
              >
                <Download className="w-5 h-5 animate-bounce" />
                <div className="text-left leading-tight">
                  <div className="text-[11px] uppercase tracking-wider font-medium text-orange-100">
                    Direct Download for Android
                  </div>
                  <div className="text-base font-bold">Download Harshika eClinic.apk</div>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-emerald-200/80 px-2 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Safe &amp; Clean (33 MB)</span>
              </div>
            </div>

            {/* 3-Step Simple Install Guide */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl">
              <p className="text-xs uppercase font-semibold tracking-wider text-emerald-300 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Quick 3-Step Android Installation Guide:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-emerald-100/80">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold shrink-0">1</span>
                  <span>Tap <strong>Download APK</strong> to start downloading directly.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold shrink-0">2</span>
                  <span>Open downloaded file &amp; allow &ldquo;Install from this source&rdquo;.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold shrink-0">3</span>
                  <span>Open <strong>Harshika eClinic</strong> &amp; consult Dr. Harshika!</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Interactive Visual App Mockup Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Phone Frame */}
              <div className="relative rounded-[40px] p-4 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 border-4 border-emerald-500/30 shadow-2xl shadow-black/60">
                {/* Phone Speaker Notch */}
                <div className="w-24 h-4 bg-black/60 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Inside Screen */}
                <div className="rounded-[28px] overflow-hidden bg-[#FDF8F0] text-slate-800 p-5 shadow-inner">
                  {/* App Header inside phone */}
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shadow">
                        H
                      </div>
                      <div>
                        <p className="font-heading font-bold text-xs text-charcoal leading-none">
                          Harshika eClinic
                        </p>
                        <p className="text-[10px] text-emerald-700 font-medium">
                          Android App
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
                      v1.0 APK
                    </span>
                  </div>

                  {/* Doctor Banner inside phone */}
                  <div className="bg-emerald-900 text-white rounded-2xl p-3.5 mb-3.5 shadow-sm">
                    <p className="text-[10px] text-emerald-200 uppercase font-semibold tracking-wider">
                      Consultation Ready
                    </p>
                    <p className="text-sm font-bold font-heading">
                      Dr. Harshika Singh
                    </p>
                    <p className="text-[11px] text-emerald-100/90 mt-0.5">
                      BHMS, MD (Hom.) • Online Consults
                    </p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="text-[10px] bg-emerald-800 px-2 py-0.5 rounded-full text-emerald-200">
                        PCOS
                      </span>
                      <span className="text-[10px] bg-emerald-800 px-2 py-0.5 rounded-full text-emerald-200">
                        Thyroid
                      </span>
                      <span className="text-[10px] bg-emerald-800 px-2 py-0.5 rounded-full text-emerald-200">
                        Joints
                      </span>
                    </div>
                  </div>

                  {/* App Quick Action Tiles */}
                  <div className="grid grid-cols-2 gap-2 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-orange-50/80 border border-orange-200/60">
                      <Calendar className="w-4 h-4 text-orange-600 mb-1" />
                      <p className="text-[11px] font-bold text-slate-800">Book Visit</p>
                      <p className="text-[9px] text-slate-500">Pick time &amp; date</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/60">
                      <FileText className="w-4 h-4 text-emerald-700 mb-1" />
                      <p className="text-[11px] font-bold text-slate-800">Prescriptions</p>
                      <p className="text-[9px] text-slate-500">Digital records</p>
                    </div>
                  </div>

                  {/* Bottom in-app CTA button */}
                  <a
                    href={APK_DOWNLOAD_URL}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow hover:opacity-95 transition-opacity"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download App to Device</span>
                  </a>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-3" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
