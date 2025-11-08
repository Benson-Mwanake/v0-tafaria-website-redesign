"use client"

import type React from "react"
import { useState } from "react"
import { Users, MapPin, Sparkles, Wine, Music, Zap } from "lucide-react"

interface EventType {
  id: number
  title: string
  icon: React.ReactNode
  description: string
  capacity: string
  setup: string
  features: string[]
}

const eventTypes: EventType[] = [
  {
    id: 1,
    title: "Corporate Events",
    icon: <Zap size={24} />,
    description: "Host executive retreats, conferences, and team-building events in our inspiring castle setting.",
    capacity: "Up to 200 guests",
    setup: "Flexible configurations",
    features: ["Conference facilities", "Networking spaces", "Catering", "AV equipment"],
  },
  {
    id: 2,
    title: "Weddings & Celebrations",
    icon: <Sparkles size={24} />,
    description: "Create unforgettable moments with intimate ceremonies and grand celebrations in our romantic venue.",
    capacity: "Up to 150 guests",
    setup: "Indoor & outdoor options",
    features: ["Ceremony spaces", "Reception halls", "Accommodation", "Photo venues"],
  },
  {
    id: 3,
    title: "Gourmet Dinners",
    icon: <Wine size={24} />,
    description: "Experience culinary excellence with our Michelin-style chef in intimate dining settings.",
    capacity: "Up to 80 guests",
    setup: "Formal dining setup",
    features: ["Fine cuisine", "Wine pairing", "Table design", "Private rooms"],
  },
  {
    id: 4,
    title: "Cultural Events",
    icon: <Music size={24} />,
    description: "Host performances, exhibitions, and cultural celebrations featuring local and international artists.",
    capacity: "Up to 300 guests",
    setup: "Theatre & gallery configuration",
    features: ["Performance stage", "Gallery spaces", "Sound system", "Lighting"],
  },
]

export function EventsSection() {
  const [selectedType, setSelectedType] = useState<number>(1)

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full mb-4">
            <span className="text-primary font-medium text-sm">Premium Venue</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Events & Hosting</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your most important moments into timeless memories at Tafaria Castle, where elegance meets
            exceptional hospitality.
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {eventTypes.map((event) => (
            <button
              key={event.id}
              onClick={() => setSelectedType(event.id)}
              className={`p-6 rounded-lg border-2 transition-all text-left group ${
                selectedType === event.id
                  ? "bg-primary/20 border-primary text-foreground"
                  : "bg-background border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              <div
                className={`mb-3 inline-block p-3 rounded-lg transition-colors ${
                  selectedType === event.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                }`}
              >
                {event.icon}
              </div>
              <h3 className="font-semibold">{event.title}</h3>
            </button>
          ))}
        </div>

        {/* Selected Event Details */}
        {eventTypes.map(
          (event) =>
            selectedType === event.id && (
              <div key={event.id} className="bg-background rounded-lg p-12 border border-border mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-4">{event.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{event.description}</p>

                    {/* Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Users size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <span className="text-sm text-muted-foreground block">Capacity</span>
                          <span className="font-semibold text-foreground">{event.capacity}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <span className="text-sm text-muted-foreground block">Setup Options</span>
                          <span className="font-semibold text-foreground">{event.setup}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <span className="text-sm text-muted-foreground font-semibold block mb-3">Included Features</span>
                      <div className="grid grid-cols-2 gap-3">
                        {event.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-lg">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-foreground text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Plan Your Event
                    </button>
                  </div>

                  {/* Right Image */}
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <img
                      src={`/.jpg?height=400&width=400&query=${event.title.toLowerCase().replace(/\s+/g, "-")}-event-castle`}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                </div>
              </div>
            ),
        )}

        {/* Event Services */}
        <div className="bg-background rounded-lg p-12 border border-border mb-16">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Complete Event Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Catering & Cuisine",
                items: ["Chef-curated menus", "Fine dining service", "Dietary accommodations", "Beverage programs"],
              },
              {
                title: "Technical Setup",
                items: ["AV & projection", "Sound systems", "Lighting design", "WiFi & connectivity"],
              },
              {
                title: "Logistics & Coordination",
                items: ["Event planning", "Guest management", "Transportation", "Setup & cleanup"],
              },
              {
                title: "Accommodation",
                items: ["Guest rooms", "Luxury suites", "Pre-event arrivals", "Post-event stays"],
              },
              {
                title: "Entertainment & Activities",
                items: ["Live performers", "DJ services", "Team activities", "Cultural experiences"],
              },
              {
                title: "Photography & Documentation",
                items: ["Professional photographers", "Videography", "Photo editing", "Digital albums"],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">{service.title}</h4>
                <ul className="space-y-2">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Event Success Stories</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Our corporate retreat at Tafaria was transformative. The venue, hospitality, and ambiance exceeded all expectations.",
                author: "CEO, Global Tech Company",
                event: "Corporate Retreat",
              },
              {
                quote:
                  "Getting married at the castle was a dream come true. Every detail was handled with perfection and grace.",
                author: "Sarah & James",
                event: "Wedding Celebration",
              },
              {
                quote:
                  "The cultural festival was an incredible success. The castle provided the perfect setting for our artistic vision.",
                author: "Cultural Director",
                event: "Arts Festival",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">{`"${testimonial.quote}"`}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors mr-4">
            Get Event Proposal
          </button>
          <button className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
            View Available Dates
          </button>
        </div>
      </div>
    </section>
  )
}
