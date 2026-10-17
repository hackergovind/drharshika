import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatDate } from "@/lib/utils";
import { pageMeta } from "@/lib/site";
import { ArrowLeft, Calendar, Tag, Clock, ArrowRight } from "lucide-react";

// Full article content mapped by slug
const contentMap: Record<string, React.ReactNode> = {
  "understanding-pcos-homeopathic-perspective": (
    <>
      <p>
        Polycystic Ovary Syndrome (PCOS) is one of the most common endocrine disorders affecting women of reproductive age, with an estimated 1 in 10 women worldwide living with this condition. Despite its prevalence, PCOS remains widely misunderstood, and many women struggle for years before receiving a proper diagnosis. The hallmark features — irregular periods, excess androgen levels, and polycystic ovaries — are just the tip of the iceberg, as PCOS can affect nearly every system in the body.
      </p>

      <h2>What Causes PCOS?</h2>
      <p>
        The exact cause of PCOS is still being researched, but it is believed to result from a combination of genetic and environmental factors. Insulin resistance plays a central role in many cases, leading to elevated insulin levels that stimulate the ovaries to produce excess androgens (male hormones). This hormonal imbalance disrupts the normal ovulation process, leading to the formation of small cysts on the ovaries. Chronic low-grade inflammation, stress, poor diet, and sedentary lifestyle can further exacerbate the condition.
      </p>

      <h2>The Homeopathic Approach to PCOS</h2>
      <p>
        Homeopathy treats PCOS by addressing the individual as a whole, rather than focusing solely on the ovaries or hormonal levels. Dr. Harshika conducts a thorough constitutional analysis, understanding your unique symptom pattern, emotional state, lifestyle, and family history. This comprehensive assessment guides the selection of a constitutional remedy — a single medicine that resonates with your entire symptom picture.
      </p>
      <p>
        Common homeopathic remedies used in PCOS include <strong>Pulsatilla</strong> for women with irregular, scanty periods and a gentle emotional disposition; <strong>Sepia</strong> for those experiencing hormonal sluggishness, irritability, and bearing-down sensations; and <strong>Natrum Muriaticum</strong> for women with PCOS linked to emotional stress and grief. However, the remedy is always individualized — no two women with PCOS receive the same treatment.
      </p>

      <h2>What to Expect During Treatment</h2>
      <p>
        Homeopathic treatment for PCOS is a gradual process. Most patients begin to notice improvements in their menstrual regularity within 2-3 months. Associated symptoms like acne, hair thinning, and weight gain typically start improving by the 3-4 month mark. The goal is not just symptom relief but a fundamental correction of the hormonal imbalance. Dr. Harshika monitors progress through regular follow-ups, adjusting the treatment plan as your body responds and heals.
      </p>

      <h2>Lifestyle Recommendations</h2>
      <p>
        Alongside homeopathic treatment, Dr. Harshika recommends lifestyle modifications that synergize with the remedies. These include adopting an anti-inflammatory diet rich in whole grains, vegetables, lean proteins, and healthy fats; regular moderate exercise (30 minutes of brisk walking, yoga, or swimming daily); stress management through meditation or deep breathing; and maintaining a consistent sleep schedule. These changes, combined with constitutional homeopathic treatment, create the optimal conditions for hormonal balance to be restored naturally.
      </p>
    </>
  ),

  "natural-approaches-thyroid-health": (
    <>
      <p>
        The thyroid gland, a small butterfly-shaped organ at the base of your neck, plays an outsized role in regulating nearly every aspect of your metabolism. When the thyroid malfunctions — producing too much hormone (hyperthyroidism) or too little (hypothyroidism) — the effects ripple through your entire body. Fatigue, weight changes, mood swings, hair loss, and temperature sensitivity are just a few of the symptoms that can significantly diminish your quality of life.
      </p>

      <h2>Understanding Thyroid Disorders</h2>
      <p>
        Hypothyroidism, the more common form, occurs when the thyroid gland underproduces hormones T3 and T4. This leads to a general slowing down of bodily functions — weight gain, constipation, dry skin, cold intolerance, and mental sluggishness. Hashimoto&apos;s thyroiditis, an autoimmune condition where the body attacks the thyroid, is the most common cause. Hyperthyroidism, on the other hand, accelerates metabolism, causing weight loss, anxiety, tremors, rapid heartbeat, and heat intolerance. Graves&apos; disease is the most frequent cause of hyperthyroidism.
      </p>

      <h2>How Homeopathy Supports Thyroid Function</h2>
      <p>
        Conventional treatment typically involves lifelong hormone replacement (for hypothyroidism) or anti-thyroid drugs (for hyperthyroidism). Homeopathy offers a different approach — one that aims to restore the thyroid&apos;s own ability to function optimally. By addressing the constitutional imbalance that underlies thyroid dysfunction, homeopathic remedies work with the body&apos;s innate healing mechanisms rather than replacing hormonal function externally.
      </p>
      <p>
        Dr. Harshika has treated numerous thyroid patients who have seen their TSH levels normalize over the course of treatment. Key remedies include <strong>Calcarea Carbonica</strong> for hypothyroid patients who are sluggish, chilly, and prone to weight gain; <strong>Iodum</strong> for thin, restless hyperthyroid patients; and <strong>Thyroidinum</strong> as an organ-specific support remedy. The selection is always based on the complete symptom picture of the individual patient.
      </p>

      <h2>Monitoring Progress</h2>
      <p>
        Dr. Harshika emphasizes the importance of regular thyroid function tests (every 6-8 weeks initially) to objectively track progress. Treatment is adjusted based on both symptom improvement and lab values. For patients on thyroid medication, the goal is gradual and safe dose reduction under proper medical supervision — never abrupt discontinuation. Many patients achieve significant improvement in their thyroid function within 4-6 months of consistent homeopathic treatment.
      </p>

      <h2>Diet and Lifestyle for Thyroid Health</h2>
      <p>
        Proper nutrition is essential for thyroid health. Selenium-rich foods (Brazil nuts, sunflower seeds), zinc (pumpkin seeds, legumes), and iodine (in moderation) support thyroid function. Avoiding goitrogens in their raw form (cruciferous vegetables like broccoli and cauliflower should be cooked), reducing processed foods, managing stress, and ensuring 7-8 hours of quality sleep are all important adjuncts to homeopathic treatment.
      </p>
    </>
  ),

  "managing-joint-pain-without-side-effects": (
    <>
      <p>
        Joint pain is one of the most common complaints that brings patients to seek medical help, affecting people across all age groups. Whether it&apos;s the dull ache of osteoarthritis, the inflammatory swelling of rheumatoid arthritis, or post-injury pain, living with chronic joint discomfort can severely limit mobility, independence, and overall quality of life. The conventional approach often relies heavily on painkillers (NSAIDs), which provide temporary relief but come with significant side effects including gastric ulcers, kidney damage, and cardiovascular risks.
      </p>

      <h2>Types of Joint Pain</h2>
      <p>
        Understanding the type and cause of joint pain is crucial for effective treatment. <strong>Osteoarthritis</strong> is a degenerative condition where joint cartilage wears down over time, commonly affecting knees, hips, and hands. <strong>Rheumatoid arthritis</strong> is an autoimmune disease where the immune system attacks joint linings, causing inflammation, pain, and eventually joint destruction. <strong>Cervical and lumbar spondylosis</strong> involve degeneration of spinal joints and discs, leading to neck or lower back pain, stiffness, and sometimes nerve compression.
      </p>

      <h2>The Homeopathic Advantage</h2>
      <p>
        Homeopathy offers a safe, effective alternative for managing joint pain without the side effects associated with long-term use of painkillers or steroids. Homeopathic medicines work by stimulating the body&apos;s own anti-inflammatory and healing mechanisms. They address not just the pain but the underlying process — whether it&apos;s cartilage degeneration, autoimmune inflammation, or tissue repair.
      </p>
      <p>
        Commonly used remedies include <strong>Rhus Toxicodendron</strong> for joint stiffness that improves with movement and warmth; <strong>Bryonia</strong> for pain that worsens with the slightest movement; <strong>Calcarea Fluorica</strong> for bony growths and joint deformities; and <strong>Arnica Montana</strong> for pain following injury or overexertion. Dr. Harshika selects the remedy based on the precise nature of the pain, its modalities (what makes it better or worse), and the patient&apos;s overall constitutional picture.
      </p>

      <h2>What Results Can You Expect?</h2>
      <p>
        Most patients experience noticeable pain reduction within the first 2-4 weeks of treatment. Over 3-6 months, improvements in joint mobility, reduction in swelling, and decreased dependence on painkillers are commonly observed. While homeopathy cannot reverse structural damage that has already occurred, it can significantly slow progression, manage pain effectively, and improve functional capacity. Many of Dr. Harshika&apos;s patients have been able to resume activities they had given up — climbing stairs, walking comfortably, and performing daily tasks without pain.
      </p>

      <h2>Complementary Therapies</h2>
      <p>
        Dr. Harshika recommends combining homeopathic treatment with gentle exercises (swimming, yoga, tai chi), maintaining a healthy weight to reduce joint stress, applying warm compresses for stiffness, and ensuring adequate intake of calcium, vitamin D, and omega-3 fatty acids. This multi-pronged approach yields the best long-term outcomes for joint health.
      </p>
    </>
  ),

  "perimenopause-navigating-transition-naturally": (
    <>
      <p>
        Perimenopause — the transitional phase leading up to menopause — typically begins in a woman&apos;s early to mid-40s, though it can start as early as the late 30s. This transition, lasting anywhere from 4 to 10 years, marks a period of significant hormonal fluctuation as estrogen and progesterone levels gradually decline. For many women, this phase brings a constellation of symptoms that can be physically uncomfortable and emotionally challenging.
      </p>

      <h2>Common Perimenopausal Symptoms</h2>
      <p>
        The symptoms of perimenopause can vary widely from woman to woman. Common experiences include irregular periods (shorter, longer, heavier, or lighter), hot flashes and night sweats, sleep disturbances, mood changes (irritability, anxiety, depression), vaginal dryness, decreased libido, weight gain (especially around the midsection), brain fog and difficulty concentrating, and joint aches. These symptoms arise because estrogen receptors are found throughout the body, and fluctuating estrogen levels affect virtually every organ system.
      </p>

      <h2>Why Homeopathy for Perimenopause?</h2>
      <p>
        Hormone Replacement Therapy (HRT), while effective for symptom relief, carries risks including increased breast cancer risk, blood clots, and cardiovascular events. Many women seek safer alternatives, and this is where homeopathy excels. Homeopathic treatment provides gentle, individualized support that helps the body adapt to its changing hormonal landscape without introducing external hormones.
      </p>
      <p>
        Dr. Harshika approaches perimenopausal care with deep constitutional prescribing. Remedies like <strong>Lachesis</strong> are invaluable for women with intense hot flashes, particularly those who feel worse upon waking; <strong>Sepia</strong> addresses the emotional flatness, irritability, and physical exhaustion that many perimenopausal women experience; <strong>Sanguinaria</strong> helps with right-sided hot flashes accompanied by headaches; and <strong>Graphites</strong> is indicated for women experiencing weight gain, constipation, and skin changes during this transition.
      </p>

      <h2>A Holistic Approach to This Life Phase</h2>
      <p>
        Beyond prescribing remedies, Dr. Harshika helps women reframe perimenopause not as a decline but as a natural and powerful transition. She recommends regular weight-bearing exercise to protect bone density, a calcium and phytoestrogen-rich diet, stress-reduction practices like meditation and yoga, and maintaining strong social connections. Sleep hygiene is particularly emphasized — keeping bedrooms cool, maintaining consistent sleep schedules, and limiting caffeine and alcohol, especially in the evening.
      </p>

      <h2>Supporting Emotional Well-being</h2>
      <p>
        The emotional aspects of perimenopause are often overlooked. Hormonal shifts can trigger anxiety, mood swings, and even depression in women who have never experienced these before. Dr. Harshika&apos;s constitutional approach addresses these emotional symptoms alongside physical ones, providing holistic support during this significant life transition. Many patients report feeling more emotionally balanced and resilient within weeks of starting treatment.
      </p>
    </>
  ),

  "science-behind-homeopathic-medicine": (
    <>
      <p>
        Homeopathy, founded by Dr. Samuel Hahnemann over 200 years ago, operates on the principle of &quot;like cures like&quot; — the idea that a substance capable of producing symptoms in a healthy individual can treat similar symptoms in a sick one when administered in highly diluted, potentized form. While skeptics often question how ultra-dilute preparations can have therapeutic effects, a growing body of scientific research is shedding light on the mechanisms behind homeopathic medicine.
      </p>

      <h2>The Principle of Similars</h2>
      <p>
        The Law of Similars is not unique to homeopathy. Modern medicine uses similar principles — allergy desensitization (introducing small amounts of an allergen to reduce sensitivity) and vaccination (using weakened pathogens to stimulate immunity) both operate on comparable logic. Hahnemann&apos;s contribution was systematizing this principle into a complete therapeutic system, with rigorous methods for preparing and selecting remedies through &quot;provings&quot; — systematic testing of substances on healthy volunteers.
      </p>

      <h2>Potentization: Beyond Simple Dilution</h2>
      <p>
        One of the most debated aspects of homeopathy is potentization — the process of serial dilution and succussion (vigorous shaking). Critics argue that beyond Avogadro&apos;s limit, no original molecules remain. However, recent research in materials science and nanotechnology has revealed that potentized solutions may retain nanostructures of the original substance. Studies published in peer-reviewed journals have detected nanoparticles of original materials in highly diluted homeopathic preparations, suggesting a physical basis for their therapeutic action.
      </p>

      <h2>Clinical Evidence</h2>
      <p>
        While debate continues in the scientific community, several well-designed clinical trials and meta-analyses have shown positive results for homeopathic treatment. Studies in conditions like upper respiratory tract infections, allergic rhinitis, childhood diarrhea, fibromyalgia, and depression have demonstrated outcomes superior to placebo. India&apos;s Central Council for Research in Homoeopathy (CCRH) has conducted rigorous clinical verification trials with encouraging results across multiple conditions.
      </p>
      <p>
        In clinical practice, doctors like Dr. Harshika observe consistent, reproducible improvements in patients across a wide range of conditions. The individualized nature of homeopathic prescribing — where the remedy is selected based on the totality of the patient&apos;s symptoms rather than just the disease diagnosis — makes standardized research challenging, but the clinical outcomes speak for themselves.
      </p>

      <h2>The Future of Homeopathic Research</h2>
      <p>
        Emerging fields like systems biology, epigenetics, and psychoneuroimmunology are providing new frameworks for understanding how subtle interventions like homeopathy might influence complex biological systems. Research into the effects of homeopathic medicines on gene expression, immune markers, and cellular signaling pathways is ongoing. As research methodologies evolve to better accommodate individualized medicine, we can expect a more complete scientific understanding of how homeopathy achieves its clinical results.
      </p>
    </>
  ),

  "cervical-spondylosis-homeopathic-treatment": (
    <>
      <p>
        Cervical spondylosis, also known as cervical osteoarthritis, is a degenerative condition affecting the cervical spine (neck region). With the dramatic increase in screen time — from smartphones to laptops — cervical spondylosis has become increasingly prevalent, now affecting people as young as their 20s and 30s. Characterized by the wear and tear of cartilage, discs, and bones in the neck, this condition can cause persistent pain, stiffness, and in severe cases, nerve compression leading to arm weakness or numbness.
      </p>

      <h2>Causes and Risk Factors</h2>
      <p>
        The primary cause of cervical spondylosis is age-related degeneration of the spinal structures. However, modern lifestyle factors have accelerated this process significantly. Prolonged forward head posture (looking at phones and screens), sedentary work habits, poor ergonomic setup, lack of exercise, previous neck injuries, and genetic predisposition all contribute. The condition involves progressive dehydration and shrinking of intervertebral discs, development of bone spurs (osteophytes), and thickening of ligaments — all of which narrow the spinal canal and can compress nerve roots.
      </p>

      <h2>Symptoms to Watch For</h2>
      <p>
        Early symptoms include intermittent neck pain and stiffness, particularly after prolonged sitting or upon waking. As the condition progresses, patients may experience chronic neck pain radiating to the shoulders and arms, headaches (especially at the back of the head), grinding or popping sensation with neck movement, tingling or numbness in the arms and hands, muscle weakness in the arms, and in advanced cases, difficulty with balance or coordination.
      </p>

      <h2>Homeopathic Treatment Strategy</h2>
      <p>
        Dr. Harshika&apos;s approach to cervical spondylosis combines constitutional treatment with targeted remedies for symptomatic relief. Constitutional remedies address the overall tendency toward degeneration and inflammation, while specific medicines target the local pathology. Key remedies include <strong>Rhus Toxicodendron</strong> for stiffness that improves with gentle movement; <strong>Kalmia Latifolia</strong> for pain radiating down the arms; <strong>Hypericum</strong> for nerve pain with tingling and numbness; <strong>Calcarea Fluorica</strong> for bone spurs and hard tissue changes; and <strong>Conium</strong> for cervical spondylosis with dizziness.
      </p>

      <h2>Prevention and Self-Care</h2>
      <p>
        Prevention is crucial, especially in our digital age. Dr. Harshika recommends maintaining proper posture with screens at eye level, taking breaks every 30 minutes from desk work, performing gentle neck stretches and strengthening exercises daily, using a proper pillow that supports the cervical curve, staying hydrated (disc health depends on hydration), and avoiding carrying heavy bags on one shoulder. These preventive measures, combined with homeopathic treatment, offer the best outcomes for managing and slowing the progression of cervical spondylosis.
      </p>

      <h2>Long-Term Outcomes</h2>
      <p>
        With consistent homeopathic treatment over 3-6 months, most patients experience significant reduction in pain and stiffness, improved neck mobility, decreased frequency of headaches, and reduced or eliminated need for painkillers. Dr. Harshika has helped numerous patients return to comfortable daily functioning, even those who had been told surgery was their only option. While existing structural changes cannot be reversed, the progression can be slowed and symptoms managed effectively through homeopathy.
      </p>
    </>
  ),
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return pageMeta({
    // The root layout appends "| Dr. Harshika Wellness" through its title
    // template, so the suffix is not repeated here any more.
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related articles (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // If not enough same-category posts, fill with other posts
  const additionalPosts =
    relatedPosts.length < 2
      ? blogPosts
          .filter(
            (p) =>
              p.id !== post.id &&
              !relatedPosts.find((rp) => rp.id === p.id)
          )
          .slice(0, 3 - relatedPosts.length)
      : [];

  const allRelated = [...relatedPosts, ...additionalPosts];

  const fullContent = contentMap[slug];

  return (
    <>
      {/* Hero Header */}
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-charcoal text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-tight mb-6">
            {post.title}
          </h1>

          <div className="section-divider !mx-0" />

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">DH</span>
            </div>
            <div>
              <p className="text-sm font-medium text-charcoal">
                Dr. Harshika Singh
              </p>
              <p className="text-xs text-muted">BHMS, MD (Hom.)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <article className="card-premium p-8 md:p-12">
              {/* Excerpt as lead paragraph */}
              <p className="text-lg text-muted leading-relaxed mb-8 font-medium border-l-4 border-primary/30 pl-6">
                {post.excerpt}
              </p>

              {/* Full content */}
              <div className="prose prose-lg max-w-none text-charcoal/85 leading-relaxed [&>h2]:font-heading [&>h2]:text-charcoal [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-5 [&>p]:leading-relaxed [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ol]:mb-5 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2 [&>strong]:text-charcoal [&>p>strong]:text-charcoal">
                {fullContent || (
                  <p>{post.content}</p>
                )}
              </div>
            </article>

            {/* Disclaimer */}
            <div className="mt-8 p-4 rounded-lg bg-amber-50 border border-amber-200/60 text-sm text-amber-800">
              <strong>Disclaimer:</strong> This article is for informational purposes only and should not
              be considered medical advice. Please consult Dr. Harshika or a qualified
              healthcare professional for personalized treatment recommendations.
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {allRelated.length > 0 && (
        <section className="section-padding bg-primary/3">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl font-bold text-charcoal">
                Related <span className="gradient-text">Articles</span>
              </h2>
              <div className="section-divider" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {allRelated.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="card-premium p-6 group hover:shadow-lg transition-all duration-300"
                >
                  <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                    {related.category}
                  </span>
                  <h3 className="font-heading font-bold text-charcoal group-hover:text-primary transition-colors mb-2 text-base">
                    {related.title}
                  </h3>
                  <p className="text-muted text-sm line-clamp-2 mb-3">
                    {related.excerpt}
                  </p>
                  <span className="text-xs text-muted">
                    {formatDate(related.publishedAt)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card-premium p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
              Ready to Start Your{" "}
              <span className="gradient-text">Healing Journey?</span>
            </h2>
            <div className="section-divider" />
            <p className="text-muted mt-6 mb-8 max-w-xl mx-auto">
              Dr. Harshika Singh offers personalized homeopathic consultations
              for {post.category.toLowerCase()} and other health concerns.
              Book your consultation today and take the first step toward
              natural, lasting wellness.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book" className="btn-primary">
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/blog" className="btn-secondary">
                <span>More Articles</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
