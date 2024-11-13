import { Mdx } from '@/components/ui/mdx';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { allPosts } from 'content-collections';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type BlogPostProperties = {
  readonly params: Promise<{
    slug: string;
  }>;
};


export const generateStaticParams = (): { slug: string }[] =>
  allPosts.map((page) => ({
    slug: page._meta.path,
  }));

const BlogPost = async ({ params }: BlogPostProperties) => {
  const { slug } = await params;
  const page = allPosts.find(({ _meta }) => _meta.path === slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <div className="container py-16 mx-auto">
        <Link
          className="mb-4 inline-flex items-center gap-1 text-muted-foreground text-sm focus:underline focus:outline-none"
          href="/blog"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Blog
        </Link>
        <h1 className="scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl text-pretty">
          {page.title}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {page.description}
        </p>
        {page.image ? (
          <Image
            src={page.image}
            width={1920}
            height={1080}
            alt={page.title || ""}
            className="my-16 h-full w-full rounded-xl"
            priority
            placeholder="empty"
          />
        ) : null}
        <div className="mt-16 flex flex-col items-start gap-8 sm:flex-row">
          <div className="sm:flex-1">
            <Mdx code={page.content} />
          </div>
          <div className="sticky top-24 hidden shrink-0 md:block">
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
