# 🌿 Dr Harshika Wellness

> **Personalized Care for Hormonal, Thyroid & Musculoskeletal Health**

A premium hospital/wellness clinic website built with Next.js 15, Neon DB (PostgreSQL), and deployed on Vercel.

## 👩‍⚕️ About

Dr. Harshika Singh, BHMS, MD (Hom.) specializes in:
- **Hormonal & Thyroid Health**: PCOS, Thyroid disorders, Hormonal imbalance, Menstrual irregularities, Perimenopausal concerns, Weight & metabolic issues
- **Musculoskeletal Health**: Osteoarthritis, Rheumatoid arthritis, Cervical/Lumbar spondylosis, Chronic pain, Joint stiffness, Mobility issues

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 + Custom Design System
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Neon DB (Serverless PostgreSQL)
- **ORM**: Prisma
- **Deployment**: Vercel

## 📱 Features

- ✅ Multi-step appointment booking system
- ✅ Online consultation platform
- ✅ Patient dashboard (appointments, prescriptions)
- ✅ WhatsApp integration for quick booking
- ✅ Blog / Health Tips section
- ✅ Patient testimonials
- ✅ Contact form with email/social media
- ✅ FAQ section
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Glassmorphism navbar
- ✅ Scroll animations
- ✅ SEO optimized (meta tags, Open Graph)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- A [Neon DB](https://neon.tech) account

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd dr-harshika-wellness

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Neon DB URL

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🗄️ Database Setup (Neon DB)

1. Create a free account at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Paste it in your `.env` file as `DATABASE_URL`
5. Run `npx prisma db push` to create tables

## 🌐 Deploy to Vercel

1. Push your code to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add environment variables:
   - `DATABASE_URL` — Your Neon DB connection string
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number
   - `NEXT_PUBLIC_SITE_URL` — Your deployed URL
4. Deploy!

## 📧 Contact

- **Email**: drharshikawellness@gmail.com
- **Instagram**: [@drharshikahomeopathy](https://www.instagram.com/drharshikahomeopathy)
- **Facebook**: [Dr Harshika Wellness](https://www.facebook.com/share/18qw5FdxED/)

---

🌿 **DR HARSHIKA WELLNESS** — *Personalized Care • Ethical Practice • Long-Term Wellness Support*
