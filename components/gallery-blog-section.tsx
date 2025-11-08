"use client"

import { useState } from "react"
import { Search, Heart, Share2, Clock, User, ArrowRight } from "lucide-react"

interface GalleryImage {
  id: number
  title: string
  category: string
  image: string
  likes: number
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Castle Sunset",
    category: "Architecture",
    image: "/castle-sunset-kenya.jpg",
    likes: 245,
  },
  {
    id: 2,
    title: "Art Exhibition",
    category: "Arts",
    image: "/art-gallery-exhibition-castle.jpg",
    likes: 189,
  },
  {
    id: 3,
    title: "Garden Path",
    category: "Nature",
    image: "/garden-landscape-castle.jpg",
    likes: 312,
  },
  {
    id: 4,
    title: "Fine Dining",
    category: "Events",
    image: "/luxury-dining-hall-castle.jpg",
    likes: 267,
  },
  {
    id: 5,
    title: "Workshop Session",
    category: "Education",
    image: "/workshop-learning-education-castle.jpg",
    likes: 156,
  },
  {
    id: 6,
    title: "Performance Night",
    category: "Arts",
    image: "/performance-theater-stage-castle.jpg",
    likes: 298,
  },
]

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Intersection of Heritage and Innovation at Tafaria",
    excerpt:
      "Discover how Tafaria Castle blends centuries of heritage with modern innovation to create transformative experiences.",
    author: "James Kariuki",
    date: "Nov 5, 2024",
    category: "Culture",
    image: "/heritage-innovation-castle-kenya.jpg",
    readTime: 5,
  },
  {
    id: 2,
    title: "Artist Spotlight: Transformations Through Our Residency Program",
    excerpt:
      "Meet the incredible artists who have shaped their craft and found inspiration through our arts residency initiative.",
    author: "Sarah Mwangi",
    date: "Oct 28, 2024",
    category: "Arts",
    image: "/artist-studio-creation-castle.jpg",
    readTime: 7,
  },
  {
    id: 3,
    title: "Sustainable Tourism: Preserving Beauty for Future Generations",
    excerpt: "Learn about our commitment to environmental conservation and sustainable practices at Tafaria Castle.",
    author: "Dr. Jane Kipchoge",
    date: "Oct 15, 2024",
    category: "Sustainability",
    image: "/nature-conservation-landscape-kenya.jpg",
    readTime: 6,
  },
]

export function GalleryBlogSection() {
  const [activeGalleryTab, setActiveGalleryTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [likedImages, setLikedImages] = useState<number[]>([])

  const galleryCategories = ["all", "Architecture", "Arts", "Nature", "Events", "Education"]

  const filteredGallery =
    activeGalleryTab === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeGalleryTab)

  const toggleLike = (id: number) => {
    setLikedImages((prev) => (prev.includes(id) ? prev.filter((liked) => liked !== id) : [...prev, id]))
  }

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">Visual Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Gallery & Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore moments captured at Tafaria through our curated gallery and in-depth blog featuring stories of
            transformation and creativity.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <h3 className="text-2xl font-serif font-bold text-foreground">Photo Gallery</h3>

            {/* Gallery Filters */}
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveGalleryTab(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeGalleryTab === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  {category === "all" ? "All" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer bg-card border border-border hover:border-primary transition-all"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.image || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{image.category}</p>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(image.id)
                      }}
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <Heart size={18} className={likedImages.includes(image.id) ? "fill-primary text-primary" : ""} />
                      <span>{likedImages.includes(image.id) ? image.likes + 1 : image.likes}</span>
                    </button>

                    <button className="p-2 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div className="border-t border-border pt-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground">Latest Stories</h3>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 md:flex-none md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              />
              <Search size={18} className="absolute right-3 top-3 text-muted-foreground" />
            </div>
          </div>

          {/* Blog Cards */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      {/* Category & Meta */}
                      <div className="flex items-center gap-4 mb-3 flex-wrap">
                        <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <User size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                      </div>

                      <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors group/btn">
                        <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Read All Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
