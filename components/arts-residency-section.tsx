"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Music, Palette, BookOpen, Camera } from "lucide-react"

interface Residency {
  id: number
  category: string
  icon: React.ReactNode
  title: string
  description: string
  duration: string
  capacity: string
  focus: string[]
}

const residencies: Residency[] = [
  {
    id: 1,
    category: "Visual Arts",
    icon: <Palette size={24} />,
    title: "Painting & Sculpture",
    description:
      "Immerse yourself in creative expression with dedicated studio space and mentorship from established artists.",
    duration: "2-12 weeks",
    capacity: "Up to 12 artists",
    focus: ["Contemporary painting", "Sculpture", "Mixed media", "Gallery exhibitions"],
  },
  {
    id: 2,
    category: "Literary Arts",
    icon: <BookOpen size={24} />,
    title: "Writers & Poets",
    description: "A haven for writers, poets, and playwrights seeking inspiration in a supportive creative community.",
    duration: "4-16 weeks",
    capacity: "Up to 8 writers",
    focus: ["Fiction & poetry", "Playwriting", "Editing workshops", "Publishing guidance"],
  },
  {
    id: 3,
    category: "Performing Arts",
    icon: <Music size={24} />,
    title: "Music & Theatre",
    description:
      "Collaborate with fellow musicians and theatre practitioners in our fully equipped performance spaces.",
    duration: "3-10 weeks",
    capacity: "Up to 15 performers",
    focus: ["Composition", "Performance", "Collaboration", "Recording sessions"],
  },
  {
    id: 4,
    category: "Digital Arts",
    icon: <Camera size={24} />,
    title: "Photography & Film",
    description: "Create compelling visual narratives with access to professional equipment and production facilities.",
    duration: "2-8 weeks",
    capacity: "Up to 10 creators",
    focus: ["Photography", "Filmmaking", "Editing", "Documentation"],
  },
]

export function ArtsResidencySection() {
  const [selectedResidency, setSelectedResidency] = useState<number | null>(null)

  return (
    <section id="arts" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/50 rounded-full mb-4">
            <span className="text-accent font-medium text-sm">Creative Sanctuary</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Arts Residency Program</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a vibrant community of artists, writers, musicians, and creators from around the world in our immersive
            residency programs.
          </p>
        </div>

        {/* Residency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {residencies.map((residency) => (
            <div
              key={residency.id}
              onClick={() => setSelectedResidency(selectedResidency === residency.id ? null : residency.id)}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon and Category */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-accent/20 rounded-lg text-accent">{residency.icon}</div>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {residency.category}
                </span>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{residency.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{residency.description}</p>

              {/* Meta Info */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mb-6">
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Duration</span>
                  <span className="font-semibold text-foreground text-sm">{residency.duration}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Capacity</span>
                  <span className="font-semibold text-foreground text-sm">{residency.capacity}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block mb-1">Focus Areas</span>
                  <span className="font-semibold text-primary text-sm">{residency.focus.length} topics</span>
                </div>
              </div>

              {/* Expandable Details */}
              {selectedResidency === residency.id && (
                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <span className="text-xs text-muted-foreground block font-semibold">Focus Areas:</span>
                  <div className="flex flex-wrap gap-2">
                    {residency.focus.map((item, idx) => (
                      <span key={idx} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <button className="w-full flex items-center justify-between px-4 py-3 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-semibold transition-colors group">
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Apply Section */}
        <div className="bg-background rounded-lg p-12 border border-border">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
            Why Join Tafaria Arts Residency
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Inspiring Setting",
                desc: "Historic castle and pristine natural surroundings",
              },
              {
                title: "Community",
                desc: "Connect with artists and creators worldwide",
              },
              {
                title: "Facilities",
                desc: "State-of-the-art studios and equipment",
              },
              {
                title: "Support",
                desc: "Mentorship and professional development",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Apply for Residency
          </button>
        </div>
      </div>
    </section>
  )
}
