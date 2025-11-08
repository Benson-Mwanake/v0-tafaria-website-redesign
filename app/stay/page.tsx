import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Wifi, UtensilsCrossed, Space as Spa, Users } from "lucide-react"

export default function StayPage() {
  const rooms = [
    {
      id: 1,
      name: "Luxury Castle Suite",
      price: "$350",
      rating: 4.9,
      reviews: 128,
      image: "/luxury-castle-bedroom.jpg",
      description: "Historic suite with four-poster bed and castle views",
      amenities: ["King Bed", "Stone Fireplace", "Castle Views", "Private Bath"],
    },
    {
      id: 2,
      name: "Heritage Tower Room",
      price: "$280",
      rating: 4.8,
      reviews: 95,
      image: "/tower-bedroom-castle.jpg",
      description: "Charming room in the original tower with period details",
      amenities: ["Queen Bed", "Tower Access", "Antique Décor", "Modern Amenities"],
    },
    {
      id: 3,
      name: "Garden Villa Suite",
      price: "$300",
      rating: 4.9,
      reviews: 112,
      image: "/garden-villa-bedroom.jpg",
      description: "Spacious villa with private garden and direct access",
      amenities: ["Double Suite", "Private Garden", "Terrace", "Garden Views"],
    },
    {
      id: 4,
      name: "Artistic Studio Room",
      price: "$220",
      rating: 4.7,
      reviews: 78,
      image: "/artistic-studio-bedroom.jpg",
      description: "Artist-inspired room with creative workspace",
      amenities: ["Studio Space", "Full Bath", "Natural Light", "Work Desk"],
    },
  ]

  const amenities = [
    { icon: UtensilsCrossed, title: "Fine Dining", description: "World-class cuisine and local specialties" },
    { icon: Spa, title: "Wellness Center", description: "Spa treatments and wellness programs" },
    { icon: Wifi, title: "Connectivity", description: "High-speed WiFi throughout the castle" },
    { icon: Users, title: "Concierge", description: "24/7 personalized concierge service" },
  ]

  return (
    <>
      <Navigation />
      <main>
        <HeroBanner
          title="Your Castle Awaits"
          subtitle="Experience luxury accommodation in our historic castle and private villas"
          backgroundImage="/castle-exterior-luxury.jpg"
        />

        {/* Room Showcase */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Luxury Accommodations</h2>
              <p className="text-foreground/70">Each room is uniquely designed to offer comfort and elegance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map((room) => (
                <Card key={room.id} className="overflow-hidden hover:shadow-gold transition-shadow">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${room.image}')` }} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-serif font-bold">{room.name}</h3>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <p className="text-sm text-foreground/60">{room.reviews} reviews</p>
                      </div>
                    </div>
                    <p className="text-foreground/70 mb-4">{room.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.amenities.map((amenity) => (
                        <span key={amenity} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-serif font-bold text-primary">
                        {room.price}
                        <span className="text-sm text-foreground/60">/night</span>
                      </span>
                      <Button className="bg-primary hover:bg-primary/90">Book Room</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* World-Class Amenities */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">World-Class Amenities</h2>
              <p className="text-foreground/70">Everything you need for an unforgettable stay</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity) => {
                const Icon = amenity.icon
                return (
                  <Card key={amenity.title} className="p-6 text-center hover:shadow-gold transition-shadow">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-serif font-bold mb-2">{amenity.title}</h3>
                    <p className="text-foreground/70 text-sm">{amenity.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent-foreground">Ready to Book Your Stay?</h2>
            <p className="text-lg text-accent-foreground/80 mb-8">Reserve your luxury accommodation today</p>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Check Availability
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
