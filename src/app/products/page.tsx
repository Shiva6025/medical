"use client";

import { useSearchParams } from "next/navigation";
import { Search, Filter, ArrowRight } from "lucide-react";
import { useState, Suspense } from "react";

const allProducts = [
  { id: 1, name: "V-Knot™ Suture Anchor", category: "sports", icon: "Anchor", description: "1.8mm All-Soft knotless anchor for superior medial row fixation." },
  { id: 2, name: "Bio-Compression Screw", category: "joint", icon: "Screw", description: "Absorbable screw designed for fracture and osteotomy fixation." },
  { id: 3, name: "GraftMax™ Button", category: "sports", icon: "Circle", description: "Adjustable loop cortical fixation for ACL/PCL reconstruction." },
  { id: 4, name: "TotalKnee™ Pro", category: "arthro", icon: "Activity", description: "Advanced primary knee system with balanced femoral design." },
  { id: 5, name: "PRP Plus™ System", category: "biologics", icon: "Microscope", description: "Point-of-care platelet rich plasma preparation system." },
  { id: 6, name: "Meniscal Cinch™ II", category: "sports", icon: "Scissors", description: "Market leader in all-inside meniscal repair technology." },
];

const categories = [
  { id: "all", name: "All Products" },
  { id: "sports", name: "Sports Medicine" },
  { id: "joint", name: "Joint Preservation" },
  { id: "arthro", name: "Arthroplasty" },
  { id: "biologics", name: "Biologics" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredProducts = activeCategory === "all"
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white pt-44 pb-24 relative overflow-hidden mb-16">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">
            Product <span className="text-secondary">Catalog</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore our state-of-the-art surgical instrumentation and implant systems.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-24">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-accent/30 p-4 rounded-2xl border border-gray-100">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-white text-primary/60 hover:text-primary hover:bg-gray-50 border border-gray-100"
                  }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-2 bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                <Filter className="w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-secondary mb-2 block">{product.category}</span>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{product.name}</h3>
              <p className="text-primary/60 text-sm leading-relaxed mb-8 grow">{product.description}</p>

              <button className="flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 text-primary font-bold text-xs uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all">
                Product Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-white">
        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
