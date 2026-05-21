import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "../data/blog";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>

          <h1 className="text-4xl font-semibold mb-4">Blog</h1>
          <p className="text-zinc-400 mb-12">
            Thoughts, tutorials, and insights about web development
          </p>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.id} hover>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-xl font-medium text-zinc-50">
                        {post.title}
                      </h2>
                      {post.isNew && <Badge variant="new">New</Badge>}
                    </div>
                    <p className="text-zinc-400 mb-4">{post.excerpt}</p>
                    <p className="text-sm text-zinc-500">{post.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
