"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    publishedAt: string;
  };
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const date = new Date(post.publishedAt);
  const formattedDate = date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="card-premium overflow-hidden group h-full cursor-pointer"
      >
        {/* Colored top bar */}
        <div className="h-1 bg-gradient-to-r from-primary via-tertiary to-secondary" />

        <div className="p-8">
          {/* Category Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            {post.category}
          </div>

          {/* Title */}
          <h3 className="font-heading text-lg font-bold text-charcoal mb-3 group-hover:text-primary transition-colors leading-snug">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-primary/8">
            <div className="flex items-center gap-2 text-xs text-muted">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
            </div>
            <span className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
              Read More
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

