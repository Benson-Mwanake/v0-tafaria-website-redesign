"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Briefcase, Leaf, TrendingUp, Award } from "lucide-react"
import { useState } from "react"

export default function CommunityPage() {
  const [selectedImpactArea, setSelectedImpactArea] = useState<string>("employment")

  const impactMetrics = [
    {
      id: "employment",
      title: "Local Employment",
      icon: Briefcase,
      stats: "300+",
      description: "Local staff and contractors employed year-round",
      details: [
        "Direct permanent positions in hospitality, arts, and education",
        "Seasonal employment opportunities for local artists and craftspeople",
        "Skills training and career development programs",
        "Fair wages above local averages",
      ],
      image: "/placeholder.svg?key=emp1",
    },
    {
      id: "mentorship",
      title: "Arts Mentorship",
      icon: Users,
      stats: "500+",
      description: "Young artists mentored and supported",
      details: [
        "One-on-one mentorship with established artists",
        "Portfolio development and exhibition opportunities",
        "International networking and collaboration",
        "Access to professional resources and studio space",
      ],
      image: "/placeholder.svg?key=ment1",
    },
    {
      id: "environment",
      title: "Environmental Stewardship",
      icon: Leaf,
      stats: "100%",
      description: "Renewable energy and sustainable practices",
      details: [
        "Solar power generation for 60% of facility energy needs",
        "Water conservation and recycling systems",
        "Organic farming and local food sourcing",
        "Wildlife conservation partnerships",
      ],
      image: "/placeholder.svg?key=env1",
    },
    {
      id: "community",
      title: "Community Partnership",
      icon: Heart,
      stats: "50+",
      description: "Local organizations supported annually",
      details: [
        "Funding and venue space for community events",
        "Educational scholarships for underprivileged youth",
        "Healthcare initiatives and wellness programs",
        "Cultural preservation and heritage projects",
      ],
      image: "/placeholder.svg?key=com1",
    },
  ]

  const selectedMetric = impactMetrics.find((m) => m.id === selectedImpactArea) || impactMetrics[0]
  const SelectedIcon = selectedMetric.icon

  const communityTestimonials = [
    {
      name: "Margaret Kariuki",
      role: "Local Business Owner",
      quote:
        "Tafaria has been a game-changer for our community. The employment opportunities and partnerships have transformed our local economy.",
      image: "/placeholder.svg?key=test1",
    },
    {
      name: "Pastor John Mwangi",
      role: "Community Leader",
      quote:
        "Beyond the economic benefits, Tafaria brings culture and hope to our region. Their commitment to youth development is inspiring.",
      image: "/placeholder.svg?key=test2",
    },
    {
      name: "Dr. Grace Kipchoge",
      role: "Environmental Advocate",
      quote:
        "Tafaria sets the standard for sustainable tourism. Their environmental initiatives have inspired other businesses in Nyeri.",
      image: "/placeholder.svg?key=test3",
    },
  ]

  const volunteerOpportunities = [
    {
      title: "Arts Workshops Facilitator",
      description: "Lead creative workshops for youth and community members",
      commitment: "4-8 weeks",
      skills: "Teaching, Art background",
    },
    {
      title: "Environmental Conservation",
      description: "Support organic farming and conservation projects",
      commitment: "2-12 weeks",
      skills: "Environmental interest, Physical fitness",
    },
    {
      title: "Hospitality Support",
      description: "Assist with event planning and guest services",
      commitment: "1-4 weeks",
      skills: "Communication, Organization",
    },
    {
      title: "Community Outreach",
      description: "Help with scholarship programs and community initiatives",
      commitment: "4-12 weeks",
      skills: "Social skills, Language",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-12">
        <HeroBanner
          title="Community & Impact"
          subtitle="Creating positive change for local communities while operating sustainably"
          backgroundImage="/placeholder.svg?key=comm_hero"
        />

        <div className="max-w-7xl mx-auto px-4 py-20">
          {/* Impact Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Briefcase, stat: "300+", label: "Jobs Created", color: "text-blue-500" },
              { icon: Users, stat: "5000+", label: "Lives Touched", color: "text-purple-500" },
              { icon: Heart, stat: "50+", label: "Community Partners", color: "text-red-500" },
              { icon: TrendingUp, stat: "$5M+", label: "Community Investment", color: "text-green-500" },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="p-8 text-center border-border/50 hover:border-primary/50 transition-colors">
                  <Icon className={`w-12 h-12 mx-auto mb-4 ${item.color}`} />
                  <p className="text-4xl font-serif font-bold mb-2">{item.stat}</p>
                  <p className="text-foreground/70 text-sm">{item.label}</p>
                </Card>
              )
            })}
          </div>

          {/* Impact Areas Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Our Impact Areas</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Tafaria is committed to creating meaningful, measurable impact across multiple dimensions of community
                wellbeing
              </p>
            </div>

            {/* Impact Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {impactMetrics.map((metric) => {
                const Icon = metric.icon
                return (
                  <button
                    key={metric.id}
                    onClick={() => setSelectedImpactArea(metric.id)}
                    className={`p-6 rounded-lg border-2 transition-all text-left ${
                      selectedImpactArea === metric.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold mb-1">{metric.title}</h3>
                    <p className="text-2xl font-bold text-primary">{metric.stats}</p>
                  </button>
                )
              })}
            </div>

            {/* Selected Impact Details */}
            <Card className="p-8 border-primary/50 bg-primary/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <SelectedIcon className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-serif font-bold">{selectedMetric.title}</h3>
                  </div>
                  <p className="text-lg text-primary font-bold mb-4">
                    {selectedMetric.stats} {selectedMetric.description.split(" ")[2]}
                  </p>
                  <p className="text-foreground/70 mb-6">{selectedMetric.description}</p>
                  <ul className="space-y-3">
                    {selectedMetric.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3">
                        <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="h-96 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedMetric.image}')` }}
                />
              </div>
            </Card>
          </div>

          {/* Community Testimonials */}
          <div className="mb-20">
            <h2 className="text-4xl font-serif font-bold text-center mb-12">Community Voices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {communityTestimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-8 border-border/50 hover:shadow-gold transition-shadow">
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full bg-cover"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Volunteer Opportunities */}
          <div className="mb-20">
            <h2 className="text-4xl font-serif font-bold text-center mb-4">Volunteer With Us</h2>
            <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
              Make a direct impact by volunteering with Tafaria. We welcome volunteers for various durations and skill
              levels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {volunteerOpportunities.map((opp, idx) => (
                <Card key={idx} className="p-6 border-border/50 hover:border-primary/50 transition-colors">
                  <h3 className="font-serif font-bold text-lg mb-2">{opp.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{opp.description}</p>
                  <div className="space-y-2 mb-6">
                    <div>
                      <p className="text-xs text-foreground/60">Time Commitment</p>
                      <p className="font-semibold text-sm">{opp.commitment}</p>
                    </div>
                    <div>
                      <p className="text-xs text-foreground/60">Skills Needed</p>
                      <p className="font-semibold text-sm">{opp.skills}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-primary hover:bg-primary/90 gap-2">Apply to Volunteer</Button>
            </div>
          </div>

          {/* Donations & Support */}
          <Card className="p-12 bg-primary/5 border-primary/50 text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold mb-4">Support Our Mission</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Your donation directly supports scholarships, community programs, and environmental initiatives at Tafaria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Monthly Giving
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Make a Donation</Button>
            </div>
            <p className="text-xs text-foreground/60 mt-6">
              Tafaria is a registered nonprofit organization. Donations are tax-deductible.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
