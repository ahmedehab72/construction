import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Right Construction Company in Kuwait",
      excerpt:
        "A comprehensive guide to selecting the perfect construction partner for your project, from initial research to final selection.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&h=400&q=80",
      author: "Ahmed Al-Rashid",
      date: "2024-01-15",
      category: "Guides",
    },
    {
      id: 2,
      title: "2024 Construction Industry Trends in Kuwait",
      excerpt:
        "Discover the latest trends shaping Kuwait's construction landscape, from sustainable building to smart technologies.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=400&q=80",
      author: "Sara Al-Mansouri",
      date: "2024-01-10",
      category: "Industry News",
    },
    {
      id: 3,
      title: "Understanding Construction Permits in Kuwait",
      excerpt:
        "Navigate the complex world of construction permits and regulations with our step-by-step guide for Kuwait projects.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&h=400&q=80",
      author: "Mohammed Al-Sabah",
      date: "2024-01-05",
      category: "Legal",
    },
  ];

  return (
    <section id="blog" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{
              fontFamily:
                'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            Latest
            <span
              className="text-transparent bg-clip-text ml-3"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
              }}
            >
              Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, tips, and insights from Kuwait's
            construction industry
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-orange-100 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                  <span className="mr-1">Read More</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
