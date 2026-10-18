/**
 * DR HARSHIKA WELLNESS — MASTER AI CHATBOT
 * Rule-based implementation of the Master AI Chatbot Prompt (all 14 sections).
 * No LLM. No external API. Pure rule-based pattern matching with conversation state.
 */

// ─── Core Types ───────────────────────────────────────────────────────────────

export type QuickReply = {
  label: string;
  value: string;
};

export type BotResponse = {
  text: string;
  quickReplies?: QuickReply[];
  action?: "book" | "whatsapp" | "human" | "none";
  isEmergency?: boolean;
  nextStep?: ConversationStep;
};

export type BotMessage = BotResponse;

/** Tracks which stage of the 6-step flow the user is in */
export type ConversationStep =
  | "welcome"
  | "understand"
  | "services"
  | "packages"
  | "appointment"
  | "medicines"
  | "faq"
  | "handover"
  | "safety"
  | "open";

// ─── Package Data (Section 4) ─────────────────────────────────────────────────

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter Care",
    duration: "1 Month",
    price: "₹1,299",
    features: [
      "Initial detailed consultation",
      "Personalised homoeopathic treatment plan",
      "Prescribed medicines (as per clinician)",
      "Standard courier delivery included",
      "Two scheduled follow-up sessions",
      "Basic chat support during clinic hours",
    ],
  },
  {
    id: "advanced",
    name: "Advanced Care",
    duration: "3 Months",
    price: "₹3,499",
    popular: true,
    features: [
      "Everything in Starter Care",
      "Monthly progress consultations",
      "Prescribed medicines with scheduled dispatches",
      "Personalised diet & lifestyle guidance (where appropriate)",
      "Progress monitoring and defined chat support",
    ],
  },
  {
    id: "complete",
    name: "Complete Wellness",
    duration: "6 Months",
    price: "₹6,499",
    features: [
      "Everything in Advanced Care",
      "Regular monthly progress consultations",
      "Prescribed medicines & scheduled courier deliveries",
      "Individualised follow-up & progress tracking",
      "Priority appointment booking",
      "Chat support during specified clinic hours",
    ],
  },
  {
    id: "longterm",
    name: "Long-Term Wellness",
    duration: "12 Months",
    price: "₹11,999",
    features: [
      "Everything in Complete Wellness",
      "Planned monthly consultations & progress reviews",
      "Prescribed medicines with scheduled dispatches",
      "Personalised treatment monitoring",
      "Priority appointment scheduling",
    ],
  },
];

export const PRICING_DISCLAIMER =
  "📋 *Pricing note:* Package prices are indicative. Final charges may vary slightly depending on your individual case, prescribed medicines, quantity, treatment duration and delivery location. Any additional charges will be explained and confirmed *before* payment.";

// ─── Welcome Message (Section 6 — Step 1) ─────────────────────────────────────

export const WELCOME_MESSAGE: BotResponse = {
  text: "Namaste! 🙏 Welcome to **Dr. Harshika Wellness**.\n\nI'm your Patient Support Assistant — here to help you understand our consultation services, packages, and booking process.\n\nHow may I help you today?",
  quickReplies: [
    { label: "🗓️ Book / Enquire Appointment", value: "book appointment" },
    { label: "💊 Services & Conditions", value: "services" },
    { label: "📦 Package Pricing", value: "packages" },
    { label: "🚚 Medicines & Delivery", value: "medicines" },
    { label: "ℹ️ Clinic Information", value: "clinic info" },
    { label: "👩‍⚕️ Speak to Clinic Team", value: "human handover" },
  ],
  nextStep: "understand",
};

// ─── Intent Definitions ────────────────────────────────────────────────────────

export type Intent = {
  patterns: string[];
  response: BotResponse;
};

export const INTENTS: Intent[] = [

  // ══════════════════════════════════════════════════
  // EMERGENCY SAFETY (Section 9 — highest priority)
  // ══════════════════════════════════════════════════
  {
    patterns: [
      "chest pain", "heart attack", "stroke", "can't breathe", "cannot breathe",
      "heavy bleeding", "unconscious", "emergency", "severe pain", "collapsed",
      "fainted", "overdose", "paralysis", "sudden weakness",
    ],
    response: {
      text: "🚨 **This sounds like a medical emergency.**\n\nPlease **call 112 (India Emergency Services)** or go to your nearest emergency hospital immediately.\n\nDo not wait for an online appointment — please seek emergency care right now.\n\n*For non-emergency enquiries, I'm here to help once you're safe.*",
      isEmergency: true,
      quickReplies: [
        { label: "📞 I'm safe, continue", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // GREETINGS & LANGUAGE
  // ══════════════════════════════════════════════════
  {
    patterns: ["hello", "hi", "hey", "namaste", "hii", "helo", "namaskar", "good morning", "good afternoon", "good evening", "salam", "sat sri akal"],
    response: {
      text: "Namaste! 🙏 Welcome to **Dr. Harshika Wellness**.\n\nI'm your Patient Support Assistant. I can help you with:\n\n• Consultation & booking enquiries\n• Package pricing & inclusions\n• Medicines & delivery\n• General clinic information\n\nHow may I help you today?",
      quickReplies: [
        { label: "🗓️ Book Appointment", value: "book appointment" },
        { label: "📦 View Packages", value: "packages" },
        { label: "💊 Services", value: "services" },
        { label: "👩‍⚕️ Speak to Team", value: "human handover" },
      ],
    },
  },

  // Hindi greetings
  {
    patterns: ["kaise ho", "kya hal", "help chahiye", "madad", "help karo", "bataiye", "batao"],
    response: {
      text: "Namaste! 🙏 **Dr. Harshika Wellness** mein aapka swagat hai.\n\nMain aapki consultation services, packages, aur appointment ke baare mein madad kar sakta hoon.\n\nAap kya jaanna chahte hain?",
      quickReplies: [
        { label: "🗓️ Appointment Enquiry", value: "book appointment" },
        { label: "📦 Package Prices", value: "packages" },
        { label: "💊 Services", value: "services" },
        { label: "👩‍⚕️ Clinic Team se Baat", value: "human handover" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // SERVICES (Section 3)
  // ══════════════════════════════════════════════════
  {
    patterns: ["services", "conditions", "treat", "specialise", "what do you treat", "kya treat", "kya service", "kya karty"],
    response: {
      text: "Dr. Harshika Wellness accepts **online consultation enquiries** from across India, subject to availability.\n\n🌿 **Areas of Consultation:**\n• PCOS / PCOD & menstrual health concerns\n• Thyroid & hormonal health\n• Perimenopause & menopause-related concerns\n• Weight & metabolic health\n• Joint pain & musculoskeletal concerns\n\n*Please note: Suitability for consultation depends on individual assessment. Appropriate investigations or referrals may be recommended.*\n\nWould you like to enquire about a specific concern?",
      quickReplies: [
        { label: "🌸 PCOS / PCOD", value: "pcos" },
        { label: "🦋 Thyroid", value: "thyroid" },
        { label: "⚖️ Weight & Hormones", value: "hormonal" },
        { label: "🦴 Joint Pain", value: "joint pain" },
        { label: "📅 Book Consultation", value: "book appointment" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // PCOS
  // ══════════════════════════════════════════════════
  {
    patterns: ["pcos", "pcod", "polycystic", "irregular period", "irregular cycle", "period problem", "period nahi", "mcycle"],
    response: {
      text: "**PCOS / PCOD & Menstrual Health** is one of Dr. Harshika's areas of consultation.\n\nDuring a consultation, Dr. Harshika will:\n✅ Take a detailed case history\n✅ Review existing investigations\n✅ Assess suitability for homoeopathic management\n✅ Recommend appropriate follow-up or referrals if needed\n\n*Treatment outcomes vary per individual. We do not guarantee specific results.*\n\nWould you like to enquire about a consultation?",
      quickReplies: [
        { label: "📅 Enquire Appointment", value: "book appointment" },
        { label: "📦 View Packages", value: "packages" },
        { label: "💬 WhatsApp Enquiry", value: "whatsapp" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // THYROID
  // ══════════════════════════════════════════════════
  {
    patterns: ["thyroid", "hypothyroid", "hyperthyroid", "tsh", "t3", "t4", "underactive", "overactive thyroid"],
    response: {
      text: "**Thyroid & Hormonal Health** is a key area of consultation at Dr. Harshika Wellness.\n\nDr. Harshika can discuss:\n• Hypothyroidism & hyperthyroidism management\n• Hormonal balance concerns\n• Lifestyle & dietary guidance (where appropriate)\n\n*Note: Homoeopathic treatment is complementary. Do not alter or stop existing thyroid medications without your prescribing doctor's guidance.*\n\nShall I help you enquire about a consultation?",
      quickReplies: [
        { label: "📅 Enquire Appointment", value: "book appointment" },
        { label: "📦 View Packages", value: "packages" },
        { label: "❓ Can I take with allopathy?", value: "allopathy" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // HORMONAL / WEIGHT / MENOPAUSAL
  // ══════════════════════════════════════════════════
  {
    patterns: ["hormonal", "hormone", "menopause", "perimenopause", "weight", "metabolic", "obesity", "overweight", "motapa"],
    response: {
      text: "Dr. Harshika provides consultation for **Hormonal, Weight & Metabolic Health** concerns.\n\n🌿 **This includes:**\n• Hormonal imbalance & mood concerns\n• Perimenopausal & menopausal symptoms\n• Weight & metabolic health support\n\n*Suitability is assessed case-by-case. Investigations or specialist referrals may be needed.*\n\nWould you like to understand the consultation process?",
      quickReplies: [
        { label: "📅 Enquire Appointment", value: "book appointment" },
        { label: "📦 Package Options", value: "packages" },
        { label: "💬 Ask on WhatsApp", value: "whatsapp" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // JOINT PAIN / MUSCULOSKELETAL
  // ══════════════════════════════════════════════════
  {
    patterns: ["joint", "arthritis", "knee", "back pain", "neck pain", "cervical", "lumbar", "spondylosis", "rheumatoid", "bone", "mobility", "ghutna", "kamar dard", "joint pain"],
    response: {
      text: "Dr. Harshika accepts consultation enquiries for **Joint Pain & Musculoskeletal Concerns**, including:\n\n🦴 Osteoarthritis & Rheumatoid Arthritis\n🦴 Cervical & Lumbar Spondylosis\n🦴 Chronic Knee Pain & Joint Stiffness\n🦴 Mobility & Movement concerns\n\n*Individual assessment determines suitability. Imaging reports or specialist opinions may be reviewed.*\n\nWould you like to enquire about a consultation?",
      quickReplies: [
        { label: "📅 Enquire Appointment", value: "book appointment" },
        { label: "📦 View Packages", value: "packages" },
        { label: "💬 WhatsApp Enquiry", value: "whatsapp" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // PACKAGES (Section 4)
  // ══════════════════════════════════════════════════
  {
    patterns: ["package", "packages", "price", "pricing", "cost", "fees", "charges", "how much", "kitna", "rate", "plan", "plans", "package details"],
    response: {
      text: "📦 **Consultation Packages — Dr. Harshika Wellness**\n\n**Starter Care** — 1 Month · ₹1,299\n**Advanced Care** — 3 Months · ₹3,499 ⭐ *Most Popular*\n**Complete Wellness** — 6 Months · ₹6,499\n**Long-Term Wellness** — 12 Months · ₹11,999\n\nAll packages include: consultation, prescribed medicines, standard courier delivery (as per plan terms).\n\n" + PRICING_DISCLAIMER + "\n\nWhich package would you like to know more about?",
      quickReplies: [
        { label: "🔹 Starter · ₹1,299", value: "starter package" },
        { label: "⭐ Advanced · ₹3,499", value: "advanced package" },
        { label: "🔷 Complete · ₹6,499", value: "complete package" },
        { label: "💎 Long-Term · ₹11,999", value: "longterm package" },
        { label: "📅 Book Consultation", value: "book appointment" },
        { label: "❓ Which suits me?", value: "which package" },
      ],
    },
  },

  // Individual packages
  {
    patterns: ["starter", "starter package", "1 month", "one month", "1299"],
    response: {
      text: "🔹 **Starter Care — 1 Month · ₹1,299**\n\n✅ Initial detailed consultation\n✅ Personalised homoeopathic treatment plan\n✅ Prescribed medicines (as per clinician assessment)\n✅ Standard courier delivery (as per plan terms)\n✅ Two scheduled follow-up sessions\n✅ Basic chat support during clinic hours\n\n*Best for:* New patients who want to try a short-term plan first.\n\n" + PRICING_DISCLAIMER,
      quickReplies: [
        { label: "📅 Enquire for Starter", value: "book appointment" },
        { label: "⭐ See Advanced (3 Months)", value: "advanced package" },
        { label: "📦 All Packages", value: "packages" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },
  {
    patterns: ["advanced", "advanced package", "3 month", "three month", "3499"],
    response: {
      text: "⭐ **Advanced Care — 3 Months · ₹3,499** *(Most Popular)*\n\n✅ Everything in Starter Care\n✅ Monthly progress consultations\n✅ Prescribed medicines with scheduled dispatches\n✅ Personalised diet & lifestyle guidance (where appropriate)\n✅ Progress monitoring & defined chat support\n\n*Best for:* Patients with chronic concerns needing consistent 3-month management.\n\n" + PRICING_DISCLAIMER,
      quickReplies: [
        { label: "📅 Enquire for Advanced", value: "book appointment" },
        { label: "💬 WhatsApp to Confirm", value: "whatsapp" },
        { label: "📦 All Packages", value: "packages" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },
  {
    patterns: ["complete", "complete wellness", "6 month", "six month", "6499"],
    response: {
      text: "🔷 **Complete Wellness — 6 Months · ₹6,499**\n\n✅ Everything in Advanced Care\n✅ Regular monthly progress consultations\n✅ Prescribed medicines & scheduled courier deliveries\n✅ Individualised follow-up & progress tracking\n✅ Priority appointment booking\n✅ Chat support during specified clinic hours\n\n*Best for:* Patients seeking deeper, medium-term homoeopathic management.\n\n" + PRICING_DISCLAIMER,
      quickReplies: [
        { label: "📅 Enquire for Complete", value: "book appointment" },
        { label: "💎 See Long-Term (12M)", value: "longterm package" },
        { label: "📦 All Packages", value: "packages" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },
  {
    patterns: ["long term", "longterm", "long-term", "12 month", "twelve month", "11999", "yearly"],
    response: {
      text: "💎 **Long-Term Wellness — 12 Months · ₹11,999**\n\n✅ Everything in Complete Wellness\n✅ Planned monthly consultations & progress reviews\n✅ Prescribed medicines with scheduled dispatches\n✅ Personalised treatment monitoring\n✅ Priority appointment scheduling\n\n*Best for:* Patients committed to long-term constitutional homoeopathic care.\n\n" + PRICING_DISCLAIMER,
      quickReplies: [
        { label: "📅 Enquire for Long-Term", value: "book appointment" },
        { label: "💬 Ask on WhatsApp", value: "whatsapp" },
        { label: "📦 All Packages", value: "packages" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },
  {
    patterns: ["which package", "which plan", "suggest package", "recommend", "best package", "kaun sa package", "kaunsa"],
    response: {
      text: "I can help you understand your options! 🌿\n\nThe right package depends on:\n• **Duration of your concern** — How long have you had this condition?\n• **Your consultation goals** — First-time assessment or ongoing care?\n• **Budget** — We have options from ₹1,299 to ₹11,999\n\n*The appropriate duration is best determined after discussing your case with Dr. Harshika.*\n\n💡 **Common guidance:**\n• New patients → Starter (1M) or Advanced (3M)\n• Chronic conditions → Complete (6M) or Long-Term (12M)\n\nShall I help you enquire for a consultation so the doctor can advise?",
      quickReplies: [
        { label: "📅 Get Consultation Advice", value: "book appointment" },
        { label: "📦 See All Packages", value: "packages" },
        { label: "💬 Ask on WhatsApp", value: "whatsapp" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // BOOKING / APPOINTMENT (Section 6, 7)
  // ══════════════════════════════════════════════════
  {
    patterns: ["book", "appointment", "consult", "consultation", "schedule", "booking", "appoint", "slot", "availability"],
    response: {
      text: "📅 **Appointment Enquiry — Dr. Harshika Wellness**\n\nWe accept online consultation enquiries **across India**, subject to availability.\n\n**How to request an appointment:**\n\n1️⃣ **Online Form** — Fill in the booking form on our website\n2️⃣ **WhatsApp** — Message the clinic team directly\n\n*Please note: A submitted enquiry is not a confirmed appointment. Our clinic team will confirm availability and share details.*\n\n**What we'll need:**\n• Your name & age\n• General reason for consultation\n• Preferred date & time\n• Contact details & city\n\nHow would you like to proceed?",
      action: "book",
      quickReplies: [
        { label: "📋 Open Booking Form", value: "go book" },
        { label: "💬 Enquire on WhatsApp", value: "whatsapp" },
        { label: "📦 See Package Prices First", value: "packages" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // MEDICINES & DELIVERY (Section 8)
  // ══════════════════════════════════════════════════
  {
    patterns: ["medicine", "medicines", "delivery", "courier", "dispatch", "ship", "dawa", "dawai", "medication", "dose", "dosage", "prescription"],
    response: {
      text: "💊 **Medicines & Courier Delivery**\n\nPrescribed medicines and standard courier delivery are included **according to your selected package's terms**.\n\n*The quantity, prescription and dispatch schedule depend on your clinician's assessment.*\n\n📦 Delivery anywhere in India — typically 3–5 business days.\n\n⚠️ *Important:*\n• We do not prescribe medicines through this chat\n• Please do not stop or alter existing medications without your treating doctor's guidance\n• If additional medicines are needed outside package inclusions, charges will be confirmed before payment\n\nDo you have a specific question about medicines or delivery?",
      quickReplies: [
        { label: "📅 Book Consultation", value: "book appointment" },
        { label: "📦 Package Inclusions", value: "packages" },
        { label: "👩‍⚕️ Speak to Clinic Team", value: "human handover" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // ALLOPATHY TOGETHER (Safety — Section 9)
  // ══════════════════════════════════════════════════
  {
    patterns: ["allopathy", "allopathic", "conventional medicine", "along with", "combine", "both", "current medicine", "stop medicine", "band kare", "band karna"],
    response: {
      text: "⚠️ **Important Safety Information**\n\nHomoeopathic consultation at Dr. Harshika Wellness is **complementary** to your existing medical care.\n\n✅ You can enquire about homoeopathy alongside your current treatments\n❌ **Do not** stop or reduce your prescribed medicines without guidance from your treating (allopathic) doctor\n❌ This chat cannot advise on changing your existing medications\n\nDr. Harshika will assess your full medical history during the consultation and advise appropriately.\n\nShall I help you enquire about a consultation?",
      quickReplies: [
        { label: "📅 Book Consultation", value: "book appointment" },
        { label: "👩‍⚕️ Speak to Clinic Team", value: "human handover" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // GUARANTEE / RESULTS (Section 12)
  // ══════════════════════════════════════════════════
  {
    patterns: ["guarantee", "guaranteed", "cure", "100%", "promise", "definitely", "pakka", "sure result", "result kab", "kitne din", "how long"],
    response: {
      text: "🌿 **About Treatment Outcomes**\n\nTreatment outcomes vary from person to person. We cannot guarantee a cure or a specific result.\n\nDr. Harshika can discuss:\n• Suitable care options based on your individual case\n• Realistic expectations and limitations\n• Follow-up requirements and progress monitoring\n\n*Assessment happens during your consultation — not before.*\n\nWould you like to enquire about a consultation to discuss your specific situation with the doctor?",
      quickReplies: [
        { label: "📅 Enquire Consultation", value: "book appointment" },
        { label: "💬 WhatsApp Clinic Team", value: "whatsapp" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // DIAGNOSE / PRESCRIBE REQUEST (Safety — Sections 1, 9, 12)
  // ══════════════════════════════════════════════════
  {
    patterns: ["diagnose", "diagnosis", "what disease", "kya bimari", "prescribe", "medicine batao", "remedy batao", "kaun sa remedy", "which medicine", "suggest medicine"],
    response: {
      text: "I understand your concern, but I'm not able to diagnose or prescribe medicines through this chat.\n\n*Medicine selection and dosage require assessment by a qualified clinician.*\n\n👩‍⚕️ Dr. Harshika Singh (BHMS, MD Hom.) will conduct a detailed case assessment during your consultation — including your symptoms, medical history, lifestyle and overall health picture.\n\nWould you like to enquire about booking a consultation?",
      quickReplies: [
        { label: "📅 Book Consultation", value: "book appointment" },
        { label: "💬 Ask on WhatsApp", value: "whatsapp" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // ONLINE CONSULTATIONS — FAQ (Section 12)
  // ══════════════════════════════════════════════════
  {
    patterns: ["online", "online consultation", "how does it work", "process", "video call", "phone call", "kaise hota", "kaise consult"],
    response: {
      text: "🌐 **Online Consultations — How It Works**\n\nWe accept online consultation enquiries from **across India**, subject to availability.\n\n**Process:**\n1️⃣ Submit your appointment enquiry (form or WhatsApp)\n2️⃣ Clinic team confirms availability & details\n3️⃣ Consultation via video / phone call\n4️⃣ Dr. Harshika takes detailed case history\n5️⃣ Treatment plan & prescription prepared\n6️⃣ Medicines couriered to your address (3–5 days)\n7️⃣ Scheduled follow-ups as per your package\n\nNo travel needed — consultation available from your home, anywhere in India.",
      quickReplies: [
        { label: "📅 Enquire Appointment", value: "book appointment" },
        { label: "📦 View Packages", value: "packages" },
        { label: "🚚 Medicines & Delivery", value: "medicines" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // ABOUT DR HARSHIKA (Section 1)
  // ══════════════════════════════════════════════════
  {
    patterns: ["about", "doctor", "dr harshika", "qualification", "bhms", "md", "who is", "credentials", "experience", "background"],
    response: {
      text: "👩‍⚕️ **Dr. Harshika Singh**\nBHMS, MD (Hom.)\n\nDr. Harshika is a qualified homoeopathic physician with a postgraduate degree in Homoeopathy.\n\n🌿 **Areas of Consultation:**\n• Hormonal & Thyroid Health (PCOS, thyroid, hormonal imbalance)\n• Musculoskeletal Health (joint pain, arthritis, spondylosis)\n• Women's Health & Menopause\n• Weight & Metabolic Concerns\n\n📍 **Online consultations available across India**\n\n*Treatment suitability depends on individual assessment. Dr. Harshika may recommend investigations or referrals as appropriate.*",
      quickReplies: [
        { label: "📅 Book with Dr. Harshika", value: "book appointment" },
        { label: "📦 View Packages", value: "packages" },
        { label: "💬 WhatsApp Clinic", value: "whatsapp" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // CONTACT / CLINIC INFO (Section 12)
  // ══════════════════════════════════════════════════
  {
    patterns: ["contact", "email", "reach", "instagram", "social", "facebook", "clinic info", "address", "location", "phone number", "number"],
    response: {
      text: "📬 **Get in Touch — Dr. Harshika Wellness**\n\n📧 **Email:** drharshikawellness@gmail.com\n💬 **WhatsApp:** Available for enquiries & booking\n📸 **Instagram:** @drharshikahomeopathy\n🌐 **Facebook:** Dr. Harshika Wellness\n\n📍 *Online consultations available across India*\n⏱️ We typically respond within **24 hours**\n\n*Please do not share passwords, OTPs or payment PINs through any chat.*",
      quickReplies: [
        { label: "💬 Open WhatsApp", value: "whatsapp" },
        { label: "📅 Book Appointment", value: "book appointment" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // HUMAN HANDOVER (Section 11)
  // ══════════════════════════════════════════════════
  {
    patterns: [
      "speak to doctor", "talk to doctor", "human", "real person", "clinic team", "staff",
      "doctor se baat", "team se baat", "connect me", "transfer", "escalate",
      "not happy", "disappointed", "complaint", "issue", "problem with booking",
    ],
    response: {
      text: "👩‍⚕️ **Connect with the Clinic Team**\n\nI understand you'd like to speak directly with the clinic team.\n\nYou can reach them via:\n\n💬 **WhatsApp** — fastest response, usually within business hours\n📧 **Email:** drharshikawellness@gmail.com\n\n*Please note: Dr. Harshika sees patients by appointment only. Clinical advice is provided during scheduled consultations, not through messaging.*\n\n⏱️ Typical response time: **within 24 hours**",
      action: "human",
      quickReplies: [
        { label: "💬 Open WhatsApp", value: "whatsapp" },
        { label: "📅 Book Appointment Instead", value: "book appointment" },
        { label: "🔙 Back to Menu", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // ADVERSE REACTION (Section 9)
  // ══════════════════════════════════════════════════
  {
    patterns: ["side effect", "reaction", "allergy", "rash", "worse", "worsening", "bad reaction", "problem with medicine", "dawa se problem"],
    response: {
      text: "⚠️ **Possible Adverse Reaction**\n\nIf you are experiencing a possible adverse reaction to any medicine:\n\n🔴 If **severe or worsening rapidly** — seek emergency medical care immediately (call 112)\n\n🟡 If **mild or manageable** — please contact the clinic team through WhatsApp or email for guidance\n\n*Do not continue taking any medicine you suspect is causing a reaction without consulting a clinician.*\n\nShall I help you connect with the clinic team?",
      quickReplies: [
        { label: "💬 Contact Clinic via WhatsApp", value: "whatsapp" },
        { label: "👩‍⚕️ Reach Clinic Team", value: "human handover" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // PRIVACY (Section 10)
  // ══════════════════════════════════════════════════
  {
    patterns: ["privacy", "data", "secure", "confidential", "share my data", "personal information", "otp", "password"],
    response: {
      text: "🔒 **Privacy & Data**\n\nAt Dr. Harshika Wellness, your privacy matters.\n\n✅ We collect only the information needed to process your enquiry\n✅ Patient information is not shared with third parties without appropriate authorisation\n❌ **Never share** your OTPs, passwords or payment PINs through any chat or message\n\nFor detailed information, please refer to our **Privacy Policy** on the website.\n\nDo you have another question I can help with?",
      quickReplies: [
        { label: "📅 Book Appointment", value: "book appointment" },
        { label: "🔙 Main Menu", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // HOMEOPATHY — WHAT IS IT
  // ══════════════════════════════════════════════════
  {
    patterns: ["what is homeopathy", "homeopathy", "homoeopathy", "how does homeopathy", "does it work", "kya hoti hai"],
    response: {
      text: "🌿 **About Homoeopathy**\n\nHomoeopathy is a 200+ year old system of natural medicine based on the principle of *'like cures like'* — using highly diluted natural substances to support the body's own healing.\n\n**Why patients consider homoeopathy:**\n• Personalised — each prescription is tailored to the individual\n• No known toxic side effects\n• Complementary to conventional treatment\n• Holistic approach — considers physical, mental & emotional health\n\n*Treatment suitability and outcomes vary per individual. We do not guarantee specific results.*",
      quickReplies: [
        { label: "📅 Enquire Consultation", value: "book appointment" },
        { label: "❓ Is it safe with allopathy?", value: "allopathy" },
        { label: "📦 View Packages", value: "packages" },
        { label: "🔙 Back", value: "menu" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // HINDI / HINGLISH SUPPORT
  // ══════════════════════════════════════════════════
  {
    patterns: ["hindi mein", "hindi me", "hindi", "hinglish", "samajh nahi", "samjhao"],
    response: {
      text: "Bilkul! Main Hindi ya Hinglish mein bhi baat kar sakta hoon. 🙏\n\nAap kya jaanna chahte hain?\n\n• **Appointment** kaise book karein?\n• **Package** ki details aur prices?\n• **Consultation** process?\n• **Dawa** aur delivery ke baare mein?",
      quickReplies: [
        { label: "📅 Appointment Enquiry", value: "book appointment" },
        { label: "📦 Package Prices", value: "packages" },
        { label: "💊 Dawa & Delivery", value: "medicines" },
        { label: "👩‍⚕️ Clinic Team se Baat", value: "human handover" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // MENU / HELP / BACK
  // ══════════════════════════════════════════════════
  {
    patterns: ["menu", "help", "start over", "back", "main menu", "home", "options", "what can you do"],
    response: {
      text: "How may I help you today? 🌿\n\nPlease choose from the options below, or type your question:",
      quickReplies: [
        { label: "🗓️ Book Appointment", value: "book appointment" },
        { label: "💊 Services & Conditions", value: "services" },
        { label: "📦 Package Pricing", value: "packages" },
        { label: "🚚 Medicines & Delivery", value: "medicines" },
        { label: "ℹ️ Clinic Information", value: "clinic info" },
        { label: "👩‍⚕️ Speak to Clinic Team", value: "human handover" },
      ],
    },
  },

  // ══════════════════════════════════════════════════
  // THANKS / BYE
  // ══════════════════════════════════════════════════
  {
    patterns: ["thank", "thanks", "thank you", "shukriya", "dhanyawad", "bye", "goodbye", "see you", "ok thankyou", "great", "perfect", "done"],
    response: {
      text: "You're most welcome! 🙏\n\nWishing you good health and wellness. If you have more questions at any time, I'm here to help.\n\n💚 *Dr. Harshika Wellness — Patient safety and trust always come first.*",
      quickReplies: [
        { label: "📅 Book Consultation", value: "book appointment" },
        { label: "💬 WhatsApp Clinic", value: "whatsapp" },
        { label: "🔁 Back to Menu", value: "menu" },
      ],
    },
  },
];

// ─── Fallback (Section 6 — Step 2) ───────────────────────────────────────────

export const FALLBACK_RESPONSE: BotResponse = {
  text: "I'd be happy to help! Let me connect you with the right information. 🌿\n\nYou can choose from the options below, or type your question in English, Hindi, or Hinglish:",
  quickReplies: [
    { label: "🗓️ Book Appointment", value: "book appointment" },
    { label: "📦 Package Pricing", value: "packages" },
    { label: "💊 Services & Conditions", value: "services" },
    { label: "🚚 Medicines & Delivery", value: "medicines" },
    { label: "👩‍⚕️ Speak to Clinic Team", value: "human handover" },
    { label: "💬 WhatsApp Us", value: "whatsapp" },
  ],
};

// ─── Matcher ──────────────────────────────────────────────────────────────────

export function findIntent(input: string): BotResponse {
  const normalized = input.toLowerCase().trim();

  // Emergency check first (Section 9)
  const emergency = INTENTS[0];
  for (const pattern of emergency.patterns) {
    if (normalized.includes(pattern)) {
      return emergency.response;
    }
  }

  // Match rest of intents
  for (const intent of INTENTS.slice(1)) {
    for (const pattern of intent.patterns) {
      if (normalized.includes(pattern)) {
        return intent.response;
      }
    }
  }

  return FALLBACK_RESPONSE;
}
