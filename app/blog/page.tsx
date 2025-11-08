"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Calendar, User, ChevronRight } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const articles = [
    {
      id: 1,
      title: "The Art of Hospitality: Creating Unforgettable Guest Experiences",
      excerpt:
        "Explore how our commitment to excellence in hospitality transforms every guest interaction into a memorable moment.",
      date: "November 15, 2024",
      category: "Hospitality",
      author: "Sarah Kipchoge",
      image: "/placeholder.svg?key=blog1",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Artist Spotlight: Transformation Through Creative Residency",
      excerpt:
        "Meet the talented artists who have grown through our residency programs and shared their journeys with us.",
      date: "November 10, 2024",
      category: "Arts",
      author: "James Kariuki",
      image: "/placeholder.svg?key=blog2",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 3,
      title: "Preserving Heritage: The Story of Tafaria Castle",
      excerpt:
        "Dive into the rich history of our castle and how we blend heritage preservation with contemporary innovation.",
      date: "November 5, 2024",
      category: "Heritage",
      author: "Dr. Amina Hassan",
      image: "/placeholder.svg?key=blog3",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 4,
      title: "GoDream Initiative: Empowering Young Creatives",
      excerpt: "Discover how our educational program is shaping the next generation of African leaders and innovators.",
      date: "October 28, 2024",
      category: "Education",
      author: "Emma Okafor",
      image: "/placeholder.svg?key=blog4",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Culinary Excellence: Farm to Table at Tafaria",
      excerpt: "Learn about our commitment to sustainable sourcing and world-class cuisine at our dining venues.",
      date: "October 20, 2024",
      category: "Travel",
      author: "Chef Marcus Mwangi",
      image: "/placeholder.svg?key=blog5",
      readTime: "5 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Events That Inspire: Corporate Retreats with Purpose",
      excerpt:
        "How Tafaria creates transformative corporate events that inspire teams and drive meaningful connections.",
      date: "October 12, 2024",
      category: "Events",
      author: "Patricia Kimani",
      image: "/placeholder.svg?key=blog6",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 7,
      title: "Student Leadership Stories: Life After GoDream",
      excerpt:
        "Alumni share how their Tafaria experience launched thriving careers in arts, business, and social innovation.",
      date: "October 5, 2024",
      category: "Education",
      author: "David Kipchoge",
      image: "/placeholder.svg?key=blog7",
      readTime: "9 min read",
      featured: false,
    },
    {
      id: 8,
      title: "Sustainable Practices at Tafaria: Our Environmental Commitment",
      excerpt:
        "Discover how we're reducing our carbon footprint while maintaining luxury standards across all operations.",
      date: "September 28, 2024",
      category: "Sustainability",
      author: "Dr. Grace Mutua",
      image: "/placeholder.svg?key=blog8",
      readTime: "7 min read",
      featured: false,
    },
  ]

  const categories = [
    { id: "all", label: "All Articles" },
    { id: "Arts", label: "Arts & Culture" },
    { id: "Education", label: "Education" },
    { id: "Hospitality", label: "Hospitality" },
    { id: "Travel", label: "Travel & Experiences" },
    { id: "Events", label: "Events" },
    { id: "Heritage", label: "Heritage" },
    { id: "Sustainability", label: "Sustainability" },
  ]

  const filtered = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const featuredArticles = articles.filter((a) => a.featured)

  return (
    <>
      <Navigation />
      <main>
        <HeroBanner
          title="Tafaria Stories"
          subtitle="Insights, inspiration, and stories from Africa's premier castle and creative center"
          backgroundImage="/placeholder.svg?key=blog_hero"
        />

        {/* Featured Carousel Section */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-2">Featured Stories</h2>
              <p className="text-foreground/70">Our most compelling articles and updates</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {featuredArticles.map((article, idx) => (
                <button
                  key={article.id}
                  onClick={() => console.log("Navigate to article:", article.id)}
                  className={`group text-left transition-all rounded-lg overflow-hidden ${
                    idx === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`bg-cover bg-center rounded-lg mb-4 transition-transform group-hover:scale-105 ${
                      idx === 0 ? "h-80" : "h-48"
                    }`}
                    style={{ backgroundImage: `url('${article.image}')` }}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        Featured
                      </span>
                      <span className="text-xs text-foreground/60">{article.readTime}</span>
                    </div>
                    <h3 className="font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/60">{article.date}</span>
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-12 px-4 border-b border-border">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {filtered.length > 0 ? (
              <>
                <div className="mb-6">
                  <p className="text-foreground/70">
                    Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((article) => (
                    <Card
                      key={article.id}
                      className="overflow-hidden hover:shadow-gold transition-all group flex flex-col h-full cursor-pointer border-border/50 hover:border-primary/50"
                    >
                      <div
                        className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform"
                        style={{ backgroundImage: `url('${article.image}')` }}
                      />
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span className="text-xs text-foreground/60">{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-foreground/70 text-sm mb-6 flex-1 line-clamp-3">{article.excerpt}</p>
                        <div className="space-y-3 border-t border-border pt-4">
                          <div className="flex items-center gap-2 text-xs text-foreground/60">
                            <User className="w-3 h-3" />
                            {article.author}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-foreground/60 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {article.date}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                            >
                              Read More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-foreground/60">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 bg-primary/10 border-t border-primary/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Stay Inspired</h2>
            <p className="text-foreground/70 mb-8">
              Subscribe to receive our latest stories, insights, and updates delivered to your inbox
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                console.log("[v0] Newsletter subscription submitted")
              }}
              className="flex gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-foreground/50 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
