import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "../data/blog";
import Card from "./ui/Card";
import Badge from "./ui/Badge";

export default function Blog() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-zinc-50">Latest Posts</h2>
            <a
              href="/blog"
              className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors flex items-center gap-1"
            >
              All Posts <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.url}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-medium text-zinc-50">
                          {post.title}
                        </h3>
                        {post.isNew && <Badge variant="new">New</Badge>}
                      </div>
                      <p className="text-sm text-zinc-400 mb-3">{post.excerpt}</p>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
