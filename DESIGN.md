# 🌿 DR HARSHIKA WELLNESS — Design System & Specification

## Brand Identity

**Brand Name:** DR HARSHIKA WELLNESS
**Tagline:** Personalized Care • Ethical Practice • Long-Term Wellness Support
**Industry:** Healthcare / Homeopathic Wellness Clinic
**Tone:** Professional, warm, trustworthy, premium, calming, nature-inspired

---

## Color Palette

### Primary Colors
- **Sage Green** `#4A7C59` — Primary brand color, represents healing & nature
- **Deep Forest** `#2D5A3D` — Darker shade for headers, nav backgrounds
- **Mint Cream** `#F0F7F2` — Light green tint for backgrounds and cards

### Secondary Colors
- **Warm Rose** `#C17767` — Accent for CTAs, highlights, warmth
- **Dusty Mauve** `#B8929A` — Subtle feminine accent
- **Golden Amber** `#D4A853` — Premium accents, ratings, badges

### Neutral Colors
- **Ivory Cream** `#FDF8F0` — Page background, warm white
- **Warm White** `#FEFCF9` — Card backgrounds
- **Charcoal** `#2D3436` — Primary text
- **Slate Gray** `#636E72` — Secondary text
- **Light Gray** `#E8E4DF` — Borders, dividers
- **Soft Cream** `#F5F0E8` — Section alternate backgrounds

### Semantic Colors
- **Success** `#4CAF50` — Confirmation, available slots
- **Warning** `#FFA726` — Alerts, reminders
- **Error** `#EF5350` — Errors, cancellations
- **Info** `#42A5F5` — Informational messages

---

## Typography

### Headline Font: Playfair Display
- Display Large: 56px / Bold / Letter-spacing: -0.02em
- Display Medium: 44px / Bold / Letter-spacing: -0.01em
- H1: 36px / Bold
- H2: 30px / SemiBold
- H3: 24px / SemiBold

### Body Font: Inter
- Body Large: 18px / Regular / Line-height: 1.7
- Body Medium: 16px / Regular / Line-height: 1.6
- Body Small: 14px / Regular / Line-height: 1.5
- Caption: 12px / Medium
- Label: 14px / SemiBold / Letter-spacing: 0.05em / Uppercase

---

## Spacing & Layout

- **Border Radius:** 12px (cards), 8px (buttons), 24px (large containers), 50% (avatars)
- **Section Padding:** 80px vertical on desktop, 48px on mobile
- **Card Padding:** 32px desktop, 24px mobile
- **Grid:** 12-column grid, max-width 1280px, centered
- **Gutters:** 24px between columns

---

## Shadows & Elevation

- **Level 1:** `0 2px 8px rgba(0,0,0,0.06)` — Cards, inputs
- **Level 2:** `0 8px 24px rgba(0,0,0,0.08)` — Dropdowns, modals
- **Level 3:** `0 16px 48px rgba(0,0,0,0.12)` — Floating elements
- **Glass Effect:** `background: rgba(255,255,255,0.85); backdrop-filter: blur(16px)` — Navbar

---

## Icons & Imagery

- **Icon Style:** Outlined, 24px default, stroke-width 1.5px (Lucide Icons)
- **Imagery:** Professional medical photography, nature/botanical elements, soft lighting
- **Decorative:** Subtle leaf/botanical SVG patterns as section dividers and backgrounds
- **Dr. Photo:** Professional headshot in white coat, warm and approachable

---

## Navigation

### Desktop Navbar (sticky, glass effect)
```
[🌿 Logo: DR HARSHIKA WELLNESS] [Home] [Services ▾] [About] [Blog] [Testimonials] [Contact] [FAQ] | [Book Consultation →] (green CTA button)
```
- Fixed on scroll with glassmorphism effect
- Active link: sage green underline
- Services dropdown: Hormonal Health, Musculoskeletal Health

### Mobile Navbar
```
[🌿 Logo] .......................... [☰ Menu]
```
- Full-screen overlay menu with slide-in animation
- Large touch-friendly links
- WhatsApp floating button at bottom-right

---

## Pages

### 1. HOMEPAGE

**Hero Section:**
- Full-width hero with soft gradient overlay (cream to transparent)
- Left: Large headline "Personalized Care for Hormonal, Thyroid & Musculoskeletal Health"
- Subtext: Professional consultations focused on hormonal imbalance, thyroid disorders, PCOS, joint conditions, mobility concerns, and long-term wellness
- Two CTA buttons: [Book Consultation] (sage green, filled) and [Chat on WhatsApp] (green outline with WhatsApp icon)
- Badge below: "👩‍⚕️ Dr. Harshika Singh, BHMS, MD (Hom.) • 📍 Online Consultations Across India"
- Right: Professional photo of Dr. Harshika

**Trust Indicators Bar:**
- Horizontal strip below hero
- Icons + numbers: "500+ Patients" | "Online Across India" | "Personalized Care" | "Ethical Practice"
- Subtle green background

**Welcome Section:**
- Centered text block with decorative leaf border
- Headline: "Welcome to Dr Harshika Wellness"
- Body text about patient-centered approach
- Four pillars in icon cards: Ethical Medical Care | Patient-Centered Approach | Professional Standards | Continuous Support

**Areas of Clinical Interest:**
- Two-column layout with large cards
- Card 1: 🧬 Hormonal & Thyroid Health — list of conditions (PCOS, Thyroid, Hormonal imbalance, etc.) with subtle check icons
- Card 2: 🦴 Musculoskeletal Health — list of conditions (Osteoarthritis, Cervical spondylosis, etc.)
- Each card has a subtle green gradient border and hover lift effect
- "Learn More →" link on each card

**Consultation Approach Section:**
- Horizontal timeline/stepper: Assess → Understand → Personalize
- Three step cards with icons showing the process
- Below: bullet list of what every consultation includes

**Why Patients Trust Us:**
- Grid of 7 trust items with green checkmark icons
- Animated count-up numbers for key stats
- Soft cream background

**Testimonials Preview:**
- Carousel of 3 patient testimonials with star ratings
- Quote marks, patient initials (for privacy), and condition treated
- "View All Testimonials →" link

**CTA Banner:**
- Full-width sage green gradient banner
- "Start Your Healing Journey Today"
- [Book Consultation] and [WhatsApp] buttons (white)

**Footer:**
- Three columns: Quick Links | Contact Info | Social Media
- Email: drharshikawellness@gmail.com
- Instagram and Facebook links with icons
- "Online Consultations Available Across India"
- Copyright: © 2024 Dr Harshika Wellness. All Rights Reserved.
- Bottom bar: Privacy Policy | Terms of Service

---

### 2. SERVICES PAGE

**Page Header:**
- Breadcrumb: Home > Services
- Title: "Our Clinical Services"
- Subtitle: "Comprehensive care for hormonal and musculoskeletal health"

**Service Section 1: Hormonal & Thyroid Health**
- Large section with green gradient left border
- Icon: 🧬
- Description paragraph
- Expandable accordion cards for each condition:
  - PCOS — symptoms, approach, what to expect
  - Thyroid Disorders — hypo/hyper, evaluation process
  - Hormonal Imbalance — causes, treatment approach
  - Menstrual Irregularities — assessment, personalized care
  - Perimenopausal & Menopausal Concerns
  - Weight & Metabolic Issues

**Service Section 2: Musculoskeletal Health**
- Large section with rose gradient left border
- Icon: 🦴
- Expandable accordion cards for each condition:
  - Osteoarthritis
  - Rheumatoid Arthritis
  - Cervical Spondylosis
  - Lumbar Spondylosis
  - Chronic Neck & Back Pain
  - Knee Pain
  - Joint Stiffness
  - Mobility Issues

**CTA Section:**
- "Ready to Start Your Treatment?" with booking button

---

### 3. ABOUT PAGE

**Doctor Profile Section:**
- Large photo of Dr. Harshika (left)
- Name, qualifications: BHMS, MD (Hom.)
- Bio paragraph about specialization
- Approach bullet points with icons

**Philosophy Section:**
- Quote block: "True healthcare goes beyond symptoms"
- Four pillars: Physical Condition, Emotional Balance, Lifestyle Habits, Long-term Behavior Patterns
- Visual cards for each

**Qualifications & Credentials:**
- Timeline or card layout showing education and certifications

---

### 4. BOOK CONSULTATION PAGE

**Multi-Step Booking Form:**

Step 1 — Select Service:
- Card selection for Hormonal Health or Musculoskeletal Health
- Sub-condition selector

Step 2 — Choose Date & Time:
- Calendar component showing available dates
- Time slot grid (Morning / Afternoon / Evening)
- Green = available, Gray = unavailable

Step 3 — Patient Details:
- Form fields: Full Name, Email, Phone, Age, Gender, Brief Description of Concern
- Checkbox: "I agree to the consultation terms"

Step 4 — Confirmation:
- Summary card with all details
- [Confirm Booking] button
- Success modal with appointment ID and WhatsApp confirmation option

**Sidebar:**
- Consultation info card: Duration, Mode (Online), Fee, What to Expect
- "Quick Booking via WhatsApp" card with direct link

---

### 5. PATIENT DASHBOARD (Protected)

**Dashboard Layout:**
- Left sidebar: Profile, Appointments, Prescriptions, Messages, Health Records, Settings
- Main content area

**Dashboard Home:**
- Welcome greeting with patient name
- Next appointment card (highlighted)
- Quick actions: Book New, View Prescriptions, Message Doctor
- Recent activity timeline

**Appointments Tab:**
- Upcoming appointments list with status badges (Confirmed, Pending, Completed)
- Past appointments with option to view consultation notes
- Calendar view toggle

**Prescriptions Tab:**
- List of prescriptions with dates
- Download as PDF option
- Medicine details, dosage, duration

**Messages Tab:**
- Chat interface with doctor
- Message input with file attachment for reports
- Read receipts and timestamps

---

### 6. ONLINE CONSULTATION ROOM

- Clean, focused layout
- Video call area (placeholder with Jitsi/Daily.co integration note)
- Side panel: Patient info, previous history, notes
- Chat panel for text communication
- Prescription writing tool for doctor
- File sharing for lab reports

---

### 7. BLOG / HEALTH TIPS PAGE

**Blog Listing:**
- Grid layout with cards (image, title, excerpt, date, category tag)
- Categories sidebar: PCOS, Thyroid, Joint Health, Wellness Tips, Nutrition
- Search bar at top
- Featured article banner at top

**Blog Post:**
- Clean reading layout, max-width 720px
- Featured image, title, author (Dr. Harshika), date, reading time
- Rich content with headings, images, quotes
- Related articles at bottom
- Share buttons: WhatsApp, Facebook, Copy Link
- CTA: "Have questions? Book a consultation"

---

### 8. CONTACT PAGE

- Two-column layout
- Left: Contact form (Name, Email, Phone, Subject dropdown, Message, Submit)
- Right: Contact info cards
  - Email: drharshikawellness@gmail.com
  - WhatsApp with direct link
  - Instagram: @drharshikahomeopathy
  - Facebook page link
  - "Online Consultations Available Across India"
- Response time badge: "We typically respond within 24 hours"

---

### 9. TESTIMONIALS PAGE

- Grid of testimonial cards
- Each card: Patient initials avatar, star rating, quote, condition treated, date
- Filter by condition category
- "Share Your Experience" CTA

---

### 10. FAQ PAGE

- Accordion layout grouped by category
- Categories: Consultation Process, Online Booking, Treatments, Pricing, Follow-ups
- Search bar at top
- "Still have questions?" CTA at bottom linking to contact/WhatsApp

---

## Components Library

### Buttons
- **Primary:** Sage green background, white text, 12px rounded, hover darkens
- **Secondary:** White background, sage green border, sage green text
- **WhatsApp:** Green (#25D366) background with WhatsApp icon
- **Ghost:** No background, sage green text, hover adds subtle bg
- **Disabled:** Gray background, muted text

### Cards
- **Service Card:** White bg, 12px rounded, subtle shadow, green left border accent, hover lift
- **Testimonial Card:** Cream bg, quote icon, star rating, soft shadow
- **Appointment Card:** White bg, status badge (color-coded), action buttons
- **Blog Card:** Image top, title, excerpt, category badge, read more link
- **Stat Card:** Icon + number + label, subtle green tint background

### Forms
- **Input Fields:** Full width, 12px rounded, light gray border, focus: sage green border + shadow
- **Select Dropdowns:** Styled matching inputs
- **Textarea:** 4-row minimum, auto-expand
- **Checkboxes/Radios:** Custom styled with sage green
- **Date Picker:** Calendar popup with green highlight for selected date
- **Time Slots:** Grid of pill buttons, green = available

### Navigation
- **Breadcrumbs:** Home > Section > Page (small, gray text)
- **Tabs:** Horizontal tab bar with green underline indicator
- **Sidebar Nav:** Vertical links with icon + label, active state green bg tint
- **Pagination:** Numbered pages with prev/next arrows

### Feedback
- **Toast Notifications:** Slide-in from top-right, auto-dismiss
- **Modal Dialogs:** Centered overlay, backdrop blur
- **Loading Skeleton:** Animated gray shimmer blocks
- **Empty States:** Illustration + message + action button
- **Progress Stepper:** Horizontal steps with numbers, green = completed

### Decorative
- **Section Dividers:** Subtle leaf/botanical SVG curves
- **Background Patterns:** Very subtle dot grid or organic shapes
- **Floating WhatsApp Button:** Fixed bottom-right, green circle with pulse animation

---

## Animations & Micro-Interactions

- **Page Load:** Sections fade-in on scroll (IntersectionObserver)
- **Card Hover:** Subtle lift (translateY -4px) + shadow increase
- **Button Hover:** Slight scale (1.02) + color darken
- **Menu Open:** Slide-in from right (mobile) / fade-down (desktop dropdown)
- **Form Focus:** Border color transition + subtle glow
- **Success State:** Checkmark animation on booking confirmation
- **Number Counters:** Count-up animation when in viewport
- **Testimonials:** Auto-sliding carousel with manual navigation dots

---

## Responsive Breakpoints

- **Desktop:** 1280px+ (full layout)
- **Tablet:** 768px - 1279px (2-column, stacked sections)
- **Mobile:** < 768px (single column, hamburger menu, larger touch targets)

---

## Accessibility

- WCAG 2.1 AA compliant color contrast ratios
- Keyboard navigable menus, forms, and interactive elements
- Aria labels on icons and interactive elements
- Focus visible outlines
- Semantic HTML structure
- Alt text on all images
