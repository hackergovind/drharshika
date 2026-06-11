import { NextRequest, NextResponse } from "next/server";
import { blogPosts } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const slug = searchParams.get("slug");

  // In production, fetch from database:
  // let where: any = {};
  // if (category) where.category = category;
  // if (slug) where.slug = slug;
  // const posts = await prisma.blogPost.findMany({
  //   where,
  //   orderBy: { publishedAt: 'desc' },
  // });

  let filteredPosts = blogPosts;

  if (category && category !== "All") {
    filteredPosts = filteredPosts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (slug) {
    const post = filteredPosts.find((p) => p.slug === slug);
    if (post) {
      return NextResponse.json({ post });
    }
    return NextResponse.json(
      { error: "Blog post not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    posts: filteredPosts,
    total: filteredPosts.length,
  });
}
