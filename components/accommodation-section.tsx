"use client"
import { Star, Wifi, Users, Mountain, Wind, Utensils } from "lucide-react"

interface Room {
  id: number
  title: string
  description: string
  price: string
  features: string[]
  image: string
  rating: number
}

const rooms: Room[] = [
  {
    id: 1,
    title: "Royal Castle Suite",
    description:
      "Experience ultimate luxury in our most prestigious suite featuring panoramic views of the castle grounds and surrounding landscapes.",
    price: "$450",
    features: ["Luxury bedding", "Private terrace", "Fireplace", "Fine dining"],
    image: "/luxury-castle-suite-bedroom.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Heritage Tower Room",
    description:
      "Elegant rooms in our historic tower with views over the Aberdare ranges and access to exclusive castle amenities.",
    price: "$320",
    features: ["Stone fireplace", "Tower views", "Heritage decor", "Library access"],
    image: "/heritage-tower-bedroom-castle.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Garden Villa Retreat",
    description:
      "Private villas nestled in landscaped gardens, perfect for couples seeking an intimate and secluded experience.",
    price: "$280",
    features: ["Garden views", "Hot tub", "Privacy", "Ground floor"],
    image: "/garden-villa-bedroom-retreat.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Artisan Studio Room",
    description:
      "Beautifully designed rooms for artists and creative minds, featuring studio space and artistic ambiance.",
    price: "$240",
    features: ["Studio space", "Art supplies", "Natural light", "Inspiration deck"],
    image: "/artistic-studio-bedroom.jpg",
    rating: 4.6,
  },
]

export function AccommodationSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Luxury Accommodation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From royal suites to intimate garden villas, discover our curated collection of luxury rooms and
            experiences.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-card rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg font-bold text-foreground">{room.title}</h3>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground">{room.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{room.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Button */}
                <div className="flex justify-between items-center">
                  <span className="font-serif text-xl font-bold text-primary">
                    {room.price}
                    <span className="text-xs text-muted-foreground font-sans">/night</span>
                  </span>
                  <button className="px-4 py-2 bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded transition-colors text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Section */}
        <div className="bg-card rounded-lg p-12">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">World-Class Amenities</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Wifi, label: "High-Speed WiFi", description: "Throughout the castle" },
              { icon: Users, label: "Concierge", description: "24/7 assistance" },
              { icon: Mountain, label: "Nature Views", description: "Stunning landscapes" },
              { icon: Wind, label: "Climate Control", description: "Modern comfort" },
              { icon: Utensils, label: "Fine Dining", description: "Michelin-style cuisine" },
              {
                icon: Star,
                label: "Wellness",
                description: "Spa & fitness center",
              },
            ].map((amenity, idx) => {
              const Icon = amenity.icon
              return (
                <div key={idx} className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{amenity.label}</h4>
                  <p className="text-xs text-muted-foreground">{amenity.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Reserve Your Stay
          </button>
        </div>
      </div>
    </section>
  )
}
