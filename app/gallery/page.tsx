"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Button } from "@/components/ui/button"
import { Heart, X, Play, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [liked, setLiked] = useState<Set<number>>(new Set())
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showVirtualTour, setShowVirtualTour] = useState(false)

  const images = [
    {
      id: 1,
      title: "Castle Sunset",
      category: "accommodation",
      src: "/castle-sunset-kenya-luxury-architecture.jpg",
      description: "Breathtaking sunset view of the historic castle",
    },
    {
      id: 2,
      title: "Art Exhibition Opening",
      category: "arts",
      src: "/art-gallery-exhibition-colorful-paintings.jpg",
      description: "Vibrant art exhibition featuring local artists",
    },
    {
      id: 3,
      title: "Manicured Garden Landscape",
      category: "grounds",
      src: "/lush-garden-landscape-castle-grounds-manicured.jpg",
      description: "Beautiful manicured gardens surrounding the castle",
    },
    {
      id: 4,
      title: "Fine Dining Hall",
      category: "facilities",
      src: "/luxury-dining-hall-castle-fine-dining-elegance.jpg",
      description: "Elegant dining experiences in our historic hall",
    },
    {
      id: 5,
      title: "Educational Workshop",
      category: "education",
      src: "/students-learning-workshop-castle-educational-prog.jpg",
      description: "GoDream students participating in workshops",
    },
    {
      id: 6,
      title: "Performance Night",
      category: "events",
      src: "/theater-performance-castle-stage-vibrant-entertain.jpg",
      description: "Captivating performances in our theater",
    },
    {
      id: 7,
      title: "Heritage Architecture",
      category: "accommodation",
      src: "/historic-castle-architecture-stone-walls-heritage.jpg",
      description: "The historic architecture of Tafaria Castle",
    },
    {
      id: 8,
      title: "Artist Studio at Work",
      category: "arts",
      src: "/artist-studio-creative-workspace-castle-paintings.jpg",
      description: "Artists creating in our dedicated studios",
    },
    {
      id: 9,
      title: "Conference Room Setup",
      category: "facilities",
      src: "/conference-room-meeting-space-castle-professional.jpg",
      description: "State-of-the-art conference facilities",
    },
    {
      id: 10,
      title: "Student Leadership Program",
      category: "education",
      src: "/students-leadership-circle-gathering-castle-mentor.jpg",
      description: "Leadership development sessions for young leaders",
    },
    {
      id: 11,
      title: "Wedding Celebration",
      category: "events",
      src: "/wedding-celebration-castle-elegant-ceremony-romant.jpg",
      description: "Unforgettable wedding moments at our venue",
    },
    {
      id: 12,
      title: "Castle Courtyard",
      category: "grounds",
      src: "/castle-courtyard-historic-central-gathering-space.jpg",
      description: "The central courtyard gathering space",
    },
  ]

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "accommodation", label: "Accommodation" },
    { id: "arts", label: "Arts & Studios" },
    { id: "education", label: "Education" },
    { id: "events", label: "Events" },
    { id: "facilities", label: "Facilities" },
    { id: "grounds", label: "Grounds" },
  ]

  const filtered = selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)

  const toggleLike = (id: number) => {
    const newLiked = new Set(liked)
    if (newLiked.has(id)) newLiked.delete(id)
    else newLiked.add(id)
    setLiked(newLiked)
  }

  const selectedImageData = images.find((img) => img.id === selectedImage)

  return (
    <>
      <Navigation />
      <main>
        <HeroBanner
          title="Tafaria Gallery"
          subtitle="Explore the beauty and creative spirit of Tafaria Castle"
          backgroundImage="/castle-gallery-overview-luxury-architecture.jpg"
        />

        {/* Virtual Tour CTA */}
        <section className="py-8 px-4 bg-primary/10 border-b border-primary/20">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Experience Tafaria in 360°</h3>
              <p className="text-sm text-foreground/70">Take a virtual tour of our castle, studios, and facilities</p>
            </div>
            <Button
              onClick={() => setShowVirtualTour(true)}
              className="bg-primary hover:bg-primary/90 gap-2 whitespace-nowrap"
            >
              <Play className="w-4 h-4" />
              Start Virtual Tour
            </Button>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-4 border-b border-border bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-semibold text-foreground/70 mb-4 uppercase tracking-wider">
              Filter by Category
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full transition-all font-medium ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-background border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <p className="text-foreground/70">
                Showing {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
              {filtered.map((image, idx) => (
                <div
                  key={image.id}
                  className={`group relative overflow-hidden rounded-lg shadow-subtle hover:shadow-gold transition-all cursor-pointer ${
                    idx === 0 ? "md:col-span-2 md:row-span-2 auto-rows-[600px]" : ""
                  }`}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image.src}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(image.id)
                      }}
                      className="self-end p-2 rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all backdrop-blur-sm"
                    >
                      <Heart
                        className={`w-5 h-5 ${liked.has(image.id) ? "fill-red-500 text-red-500" : "text-foreground"}`}
                      />
                    </button>
                    <div>
                      <h3 className="text-foreground font-semibold text-lg mb-1">{image.title}</h3>
                      <p className="text-foreground/80 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Lightbox Modal */}
        {selectedImageData && (
          <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 border-0">
              <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background">
                <X className="w-5 h-5" />
              </DialogClose>
              <div
                className="h-[500px] bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url('${selectedImageData.src}')` }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold mb-2">{selectedImageData.title}</h2>
                <p className="text-foreground/70 mb-4">{selectedImageData.description}</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(selectedImageData.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${liked.has(selectedImageData.id) ? "fill-red-500 text-red-500" : "text-foreground"}`}
                    />
                    {liked.has(selectedImageData.id) ? "Liked" : "Like"}
                  </button>
                  <Button className="bg-primary hover:bg-primary/90 gap-2">
                    Share <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Virtual Tour Modal */}
        <Dialog open={showVirtualTour} onOpenChange={setShowVirtualTour}>
          <DialogContent className="max-w-4xl">
            <DialogClose className="absolute right-4 top-4 z-10">
              <X className="w-5 h-5" />
            </DialogClose>
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold">360° Virtual Tour</h2>
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                  <p className="text-foreground/70 mb-4">Virtual tour coming soon</p>
                  <p className="text-sm text-foreground/60">Experience an immersive 360° tour of Tafaria Castle</p>
                </div>
              </div>
              <Button onClick={() => setShowVirtualTour(false)} className="w-full bg-primary hover:bg-primary/90">
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Ready to Visit?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Book your experience at Tafaria and discover these beautiful spaces in person
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">Learn More</Button>
              <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
