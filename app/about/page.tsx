import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We are passionate about fostering creativity and excellence in everything we do",
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of creative communities and collaborative learning",
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We are committed to creating positive cultural and social impact in Africa",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in hospitality, arts, and education",
    },
  ]

  const milestones = [
    { year: "2015", achievement: "Tafaria Castle restored and opened as luxury venue" },
    { year: "2016", achievement: "International Arts Residency Program launched" },
    { year: "2018", achievement: "GoDream Educational Initiative established" },
    { year: "2020", achievement: "Expanded facilities and hosting capacity during pandemic" },
    { year: "2022", achievement: "100+ artists from 25 countries through residency programs" },
    { year: "2024", achievement: "200+ scholars supported through GoDream Initiative" },
  ]

  return (
    <>
      <Navigation />
      <main>
        <HeroBanner
          title="About Tafaria"
          subtitle="A Legacy of Heritage, Creativity, and Impact"
          backgroundImage="/historic-castle-kenya.jpg"
        />

        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="h-96 rounded-lg overflow-hidden shadow-subtle"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=400&width=600&query=historic%20castle%20exterior%20kenya%20luxury)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
                <p className="text-foreground/80 mb-4">
                  Tafaria Castle & Centre for the Arts stands as a beacon of cultural excellence in the heart of Nyeri,
                  Kenya. What began as a vision to preserve our architectural heritage has blossomed into a multifaceted
                  institution serving travelers, artists, students, and event hosts from around the world.
                </p>
                <p className="text-foreground/80 mb-6">
                  Our castle combines historic charm with contemporary amenities, creating a unique space where
                  tradition meets innovation. Whether you're seeking a luxurious retreat, artistic inspiration, or
                  educational transformation, Tafaria welcomes you.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Explore Our History <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="p-6 text-center hover:shadow-gold transition-shadow">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-serif font-bold mb-3">{value.title}</h3>
                    <p className="text-foreground/70 text-sm">{value.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-24 flex-shrink-0">
                    <p className="text-3xl font-serif font-bold text-primary">{milestone.year}</p>
                  </div>
                  <div className="flex-1 pt-2 pb-8 border-l-2 border-primary/30 pl-6">
                    <p className="text-foreground/80">{milestone.achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-6 text-center">Dedicated Leadership</h2>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              Our team brings together decades of experience in hospitality, arts, education, and event management.
              We're committed to creating extraordinary experiences for every guest.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kariuki Mwangi",
                  title: "Executive Director",
                  bio: "Visionary leader with 20+ years in heritage conservation",
                },
                {
                  name: "Amara Okonkwo",
                  title: "Arts Director",
                  bio: "Award-winning curator dedicated to supporting emerging artists",
                },
                {
                  name: "Sofia Chen",
                  title: "Education Director",
                  bio: "Passionate educator transforming lives through creative learning",
                },
              ].map((member, i) => (
                <Card key={i} className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-serif font-bold">{member.name}</h3>
                  <p className="text-primary text-sm font-semibold mb-2">{member.title}</p>
                  <p className="text-foreground/70 text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent-foreground">Join Our Community</h2>
            <p className="text-lg text-accent-foreground/80 mb-8">
              Be part of our mission to celebrate and nurture creativity across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              >
                Get Involved
              </Button>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
