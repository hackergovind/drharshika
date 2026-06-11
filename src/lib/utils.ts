export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTime(time: string): string {
  const [hours, minutes] = time.split(":");
  const h = parseInt(hours, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export const services = [
  {
    id: "hormonal",
    title: "Hormonal & Thyroid Health",
    icon: "Heart",
    description:
      "Comprehensive homeopathic care for hormonal imbalances that affect your quality of life. Dr. Harshika provides personalized treatment plans that address the root cause, not just symptoms.",
    conditions: [
      {
        name: "PCOS (Polycystic Ovary Syndrome)",
        description:
          "Holistic management of PCOS through constitutional homeopathic remedies that regulate hormonal balance, improve ovarian function, and address associated symptoms like acne, weight gain, and irregular periods.",
      },
      {
        name: "Thyroid Disorders",
        description:
          "Natural treatment for both hypothyroidism and hyperthyroidism, focusing on restoring optimal thyroid function through carefully selected remedies that work with your body's healing mechanisms.",
      },
      {
        name: "Hormonal Imbalance",
        description:
          "Personalized treatment for hormonal disruptions affecting mood, energy, skin health, and reproductive function. Constitutional remedies address the underlying endocrine dysfunction.",
      },
      {
        name: "Menstrual Irregularities",
        description:
          "Effective homeopathic management of irregular periods, heavy bleeding, painful menstruation, and amenorrhea through gentle yet powerful remedies tailored to your unique symptoms.",
      },
      {
        name: "Perimenopausal Concerns",
        description:
          "Supportive care for the transition through perimenopause, addressing hot flashes, mood changes, sleep disturbances, and other symptoms with safe, non-hormonal homeopathic treatments.",
      },
      {
        name: "Weight Management",
        description:
          "Addressing hormonal root causes of weight gain through constitutional treatment that improves metabolism, reduces cravings, and supports sustainable weight management.",
      },
    ],
  },
  {
    id: "musculoskeletal",
    title: "Musculoskeletal Health",
    icon: "Bone",
    description:
      "Expert homeopathic care for bone, joint, and muscle conditions. Dr. Harshika's approach combines deep constitutional treatment with targeted remedies for lasting pain relief and improved mobility.",
    conditions: [
      {
        name: "Osteoarthritis",
        description:
          "Natural management of degenerative joint disease through homeopathic remedies that reduce inflammation, slow cartilage deterioration, and significantly improve joint function and comfort.",
      },
      {
        name: "Rheumatoid Arthritis",
        description:
          "Constitutional treatment addressing the autoimmune roots of RA, helping to reduce joint inflammation, prevent deformity progression, and manage pain without immunosuppressive side effects.",
      },
      {
        name: "Cervical Spondylosis",
        description:
          "Targeted homeopathic care for neck pain, stiffness, and associated symptoms like headaches and arm numbness caused by cervical spine degeneration.",
      },
      {
        name: "Lumbar Spondylosis",
        description:
          "Effective treatment for lower back pain and stiffness from spinal degeneration, improving mobility and quality of life through personalized homeopathic protocols.",
      },
      {
        name: "Chronic Pain Management",
        description:
          "Comprehensive approach to chronic pain conditions using homeopathic medicines that address pain perception, inflammation, and the emotional aspects of living with persistent pain.",
      },
      {
        name: "Knee Pain & Joint Stiffness",
        description:
          "Specialized treatment for knee pain from various causes including injury, arthritis, and overuse, focusing on reducing inflammation and restoring comfortable range of motion.",
      },
    ],
  },
];

export const testimonials = [
  {
    id: "1",
    patientInitials: "P.S.",
    rating: 5,
    quote:
      "After struggling with PCOS for over 5 years, Dr. Harshika's treatment has been life-changing. My cycles are regular now and I've lost 8 kgs without any crash diets. Her approach is truly holistic.",
    condition: "PCOS",
  },
  {
    id: "2",
    patientInitials: "R.K.",
    rating: 5,
    quote:
      "I was on thyroid medication for 3 years with constant dose adjustments. Under Dr. Harshika's care, my TSH levels have normalized and I feel more energetic than I have in years.",
    condition: "Thyroid",
  },
  {
    id: "3",
    patientInitials: "M.D.",
    rating: 5,
    quote:
      "My mother's knee pain was so severe she could barely climb stairs. After 4 months of treatment with Dr. Harshika, she's walking comfortably again. We're incredibly grateful.",
    condition: "Knee Pain",
  },
  {
    id: "4",
    patientInitials: "A.V.",
    rating: 5,
    quote:
      "Dr. Harshika's treatment for my cervical spondylosis has been remarkable. The constant neck pain and headaches have reduced significantly. She truly listens and understands.",
    condition: "Cervical Spondylosis",
  },
  {
    id: "5",
    patientInitials: "S.G.",
    rating: 5,
    quote:
      "I consulted Dr. Harshika for hormonal imbalance causing severe acne and mood swings. Within 3 months, my skin cleared up and I feel so much more balanced emotionally.",
    condition: "Hormonal Imbalance",
  },
  {
    id: "6",
    patientInitials: "N.T.",
    rating: 5,
    quote:
      "The online consultation experience was seamless. Dr. Harshika took detailed history, understood my rheumatoid arthritis symptoms deeply, and the remedies have shown wonderful improvement.",
    condition: "Rheumatoid Arthritis",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Understanding PCOS: A Homeopathic Perspective",
    slug: "understanding-pcos-homeopathic-perspective",
    excerpt:
      "PCOS affects millions of women worldwide. Learn how homeopathy addresses the root causes of this complex hormonal condition through constitutional treatment.",
    content:
      "Polycystic Ovary Syndrome (PCOS) is one of the most common endocrine disorders affecting women of reproductive age...",
    category: "Hormonal Health",
    coverImage: null,
    publishedAt: "2025-12-15",
  },
  {
    id: "2",
    title: "Natural Approaches to Thyroid Health",
    slug: "natural-approaches-thyroid-health",
    excerpt:
      "Thyroid disorders can significantly impact your quality of life. Discover how homeopathic treatment can help restore optimal thyroid function naturally.",
    content:
      "The thyroid gland plays a crucial role in regulating metabolism, energy levels, and overall well-being...",
    category: "Thyroid Health",
    coverImage: null,
    publishedAt: "2025-11-20",
  },
  {
    id: "3",
    title: "Managing Joint Pain Without Side Effects",
    slug: "managing-joint-pain-without-side-effects",
    excerpt:
      "Chronic joint pain doesn't have to mean a lifetime of painkillers. Explore how homeopathy offers safe, effective alternatives for lasting relief.",
    content:
      "Joint pain is one of the most common complaints that brings patients to seek medical help...",
    category: "Musculoskeletal Health",
    coverImage: null,
    publishedAt: "2025-10-10",
  },
  {
    id: "4",
    title: "Perimenopause: Navigating the Transition Naturally",
    slug: "perimenopause-navigating-transition-naturally",
    excerpt:
      "The perimenopausal transition can bring challenging symptoms. Learn how homeopathic treatment provides gentle, effective support during this important phase.",
    content:
      "Perimenopause typically begins in a woman's 40s and can last several years before menopause...",
    category: "Women's Health",
    coverImage: null,
    publishedAt: "2025-09-05",
  },
  {
    id: "5",
    title: "The Science Behind Homeopathic Medicine",
    slug: "science-behind-homeopathic-medicine",
    excerpt:
      "Understanding how homeopathic medicines work at a fundamental level and the growing body of research supporting their efficacy.",
    content:
      "Homeopathy, founded by Dr. Samuel Hahnemann over 200 years ago, operates on the principle of 'like cures like'...",
    category: "Homeopathy",
    coverImage: null,
    publishedAt: "2025-08-18",
  },
  {
    id: "6",
    title: "Cervical Spondylosis: Causes, Symptoms, and Homeopathic Treatment",
    slug: "cervical-spondylosis-homeopathic-treatment",
    excerpt:
      "Cervical spondylosis is increasingly common in our digital age. Discover effective homeopathic solutions for neck pain and related symptoms.",
    content:
      "Cervical spondylosis, also known as cervical osteoarthritis, is a degenerative condition affecting the cervical spine...",
    category: "Musculoskeletal Health",
    coverImage: null,
    publishedAt: "2025-07-22",
  },
];

export const faqs = [
  {
    question: "What is homeopathy and how does it work?",
    answer:
      "Homeopathy is a system of natural medicine developed over 200 years ago by Dr. Samuel Hahnemann. It works on the principle of 'like cures like' — a substance that causes symptoms in a healthy person can cure similar symptoms in a sick person when given in highly diluted form. Homeopathic remedies stimulate the body's own healing mechanisms to restore balance and health.",
  },
  {
    question: "Is homeopathic treatment safe?",
    answer:
      "Yes, homeopathic medicines are completely safe when prescribed by a qualified practitioner. They are prepared through a process of serial dilution and succussion, making them non-toxic and free from harmful side effects. They are safe for all ages, including infants, pregnant women, and the elderly.",
  },
  {
    question: "How long does homeopathic treatment take to show results?",
    answer:
      "The timeline varies depending on the condition, its duration, and individual responsiveness. Acute conditions may show improvement within hours to days. Chronic conditions like PCOS, thyroid disorders, or arthritis typically show noticeable improvement within 2-4 weeks, with significant progress over 3-6 months of consistent treatment.",
  },
  {
    question: "Can I take homeopathic medicines along with allopathic medicines?",
    answer:
      "Yes, homeopathic medicines can be safely taken alongside conventional medicines. They do not interact with or interfere with allopathic medications. As your condition improves with homeopathic treatment, your doctor may gradually adjust your conventional medications under proper medical supervision.",
  },
  {
    question: "How do online consultations work?",
    answer:
      "Online consultations are conducted via video call or phone call. Dr. Harshika takes a detailed case history, understands your symptoms, lifestyle, and medical background, and prescribes personalized homeopathic remedies. Medicines are couriered to your address anywhere in India. Follow-up consultations track your progress and adjust treatment as needed.",
  },
  {
    question: "What qualifications does Dr. Harshika have?",
    answer:
      "Dr. Harshika Singh holds a BHMS (Bachelor of Homeopathic Medicine and Surgery) and MD (Hom.) — a postgraduate degree in Homeopathy. She specializes in hormonal disorders and musculoskeletal conditions, with extensive clinical experience in treating complex chronic cases.",
  },
  {
    question: "What should I expect during my first consultation?",
    answer:
      "Your first consultation typically lasts 30-45 minutes. Dr. Harshika will take a comprehensive case history including your medical history, current symptoms, lifestyle habits, stress levels, sleep patterns, and emotional well-being. This holistic understanding helps her select the most appropriate constitutional remedy for your unique case.",
  },
  {
    question: "Do you treat patients outside India?",
    answer:
      "Currently, Dr. Harshika offers online consultations to patients across India. The medicines are dispatched via courier to any location within India. For international patients, please reach out via the contact form to discuss possibilities.",
  },
  {
    question: "How are homeopathic medicines dispatched?",
    answer:
      "After your consultation, medicines are carefully packed and dispatched via reliable courier services. Most deliveries within India are completed within 3-5 business days. You will receive tracking information once your medicines are shipped.",
  },
  {
    question: "What conditions does Dr. Harshika specialize in?",
    answer:
      "Dr. Harshika specializes in two key areas: Hormonal & Thyroid Health (PCOS, thyroid disorders, hormonal imbalance, menstrual irregularities, perimenopausal concerns, weight management) and Musculoskeletal Health (osteoarthritis, rheumatoid arthritis, cervical spondylosis, lumbar spondylosis, chronic pain, knee pain, joint stiffness).",
  },
];
