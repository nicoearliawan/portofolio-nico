import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Card from "../components/ui/Card";

export default function StorePage() {
  const products = [
    {
      id: 1,
      name: "React Course",
      description: "Complete React.js course from beginner to advanced",
      price: "$49",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "UI Kit",
      description: "Premium UI components for React applications",
      price: "$29",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Code Templates",
      description: "Ready-to-use code templates and boilerplates",
      price: "$19",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
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

          <h1 className="text-4xl font-semibold mb-4">Store</h1>
          <p className="text-zinc-400 mb-12">
            Digital products, courses, and resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} hover>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-medium text-zinc-50 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-zinc-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-zinc-50">
                    {product.price}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-zinc-500">
              This is a placeholder store page. Integrate with your payment provider.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
