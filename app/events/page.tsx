import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Heart, Utensils, Mic } from "lucide-react"
import { Star } from "lucide-react"

export default function EventsPage() {
  const eventTypes = [
    {
      id: 1,
      name: "Corporate Events",
      capacity: "50-500 guests",
      icon: Briefcase,
      description: "Conferences, retreats, and corporate celebrations in a unique setting",
      highlights: ["State-of-the-art AV", "Breakout rooms", "Catering services", "Team building activities"],
    },
    {
      id: 2,
      name: "Weddings",
      capacity: "50-300 guests",
      icon: Heart,
      description: "Celebrate your love story in our romantic castle setting",
      highlights: ["Ceremony venues", "Reception halls", "Wedding planner", "Accommodation for guests"],
    },
    {
      id: 3,
      name: "Gourmet Dinners",
      capacity: "20-100 guests",
      icon: Utensils,
      description: "Curated culinary experiences with world-class chefs",
      highlights: ["Chef-led menus", "Wine pairings", "Intimate setting", "Cooking demonstrations"],
    },
    {
      id: 4,
      name: "Cultural Events",
      capacity: "100-500 guests",
      icon: Mic,
      description: "Concerts, exhibitions, and cultural celebrations",
      highlights: ["Performance venue", "Gallery space", "Sound system", "Event coordination"],
    },
  ]

  const testimonials = [
    {
      quote: "Tafaria provided the perfect venue for our corporate retreat. The team was exceptional.",
      author: "Sarah Chen",
      company: "Tech Innovations Inc.",
      rating: 5,
    },
    {
      quote: "Our wedding at Tafaria was absolutely magical. Every detail was perfect.",
      author: "James & Emily",
      company: "Newlyweds",
      rating: 5,
    },
    {
      quote: "The gourmet dinner experience exceeded all expectations. Highly recommended!",
      author: "Dr. Michael Kipchoge",
      company: "Culinary Society",
      rating: 5,
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <HeroBanner
          title="Premier Event Venue"
          subtitle="Host Unforgettable Moments in Our Historic Castle"
          backgroundImage="/event-venue-celebration.jpg"
        />

        {/* Event Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Events We Host</h2>
              <p className="text-foreground/70">From intimate dinners to large celebrations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventTypes.map((event) => {
                const Icon = event.icon
                return (
                  <Card key={event.id} className="p-8 hover:shadow-gold transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="w-12 h-12 text-primary" />
                      <h3 className="text-2xl font-serif font-bold">{event.name}</h3>
                    </div>

                    <p className="text-foreground/70 mb-4">{event.description}</p>
                    <p className="text-sm text-foreground/60 mb-6">
                      Capacity: <span className="text-primary font-semibold">{event.capacity}</span>
                    </p>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-foreground/80 mb-3">Services Included</p>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2 text-sm text-foreground/70">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">Inquire About This Event</Button>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Premium Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Event Planning", desc: "Full-service planning from concept to execution" },
                { title: "Catering", desc: "Bespoke menus from our award-winning chefs" },
                { title: "Accommodation", desc: "Luxury rooms for your guests" },
                { title: "Entertainment", desc: "Live music, DJs, and performances" },
                { title: "Décor & Styling", desc: "Transforming spaces to match your vision" },
                { title: "Technical Services", desc: "State-of-the-art AV and sound systems" },
              ].map((service, i) => (
                <Card key={i} className="p-6 text-center">
                  <h3 className="text-lg font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 text-sm">{service.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Voices of Our Guests</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <Card key={i} className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.company}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent-foreground">Plan Your Event at Tafaria</h2>
            <p className="text-lg text-accent-foreground/80 mb-8">
              Contact our events team to discuss your vision and requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              >
                Get Event Proposal
              </Button>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Check Availability
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
