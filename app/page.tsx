import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const experiences = [
    {
      title: "Stay",
      description: "Experience luxury accommodation in our historic castle suites and garden villas",
      icon: "🏰",
      href: "/stay",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Create",
      description: "Join our arts residency programs and collaborate with fellow artists",
      icon: "🎨",
      href: "/arts",
      color: "from-accent/20 to-accent/5",
    },
    {
      title: "Learn",
      description: "Expand your skills through our educational initiatives and GoDream program",
      icon: "📚",
      href: "/education",
      color: "from-primary/20 to-primary/5",
    },
    {
      title: "Host",
      description: "Host unforgettable corporate events, weddings, and celebrations",
      icon: "🎭",
      href: "/events",
      color: "from-accent/20 to-accent/5",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url(/placeholder.svg?height=1080&width=1920&query=tafaria%20castle%20architecture%20sunset%20kenya%20luxury)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/80 z-10" />

          <div className="relative z-20 text-center px-4 max-w-4xl">
            <p className="text-lg md:text-xl text-primary font-serif mb-2">Tafaria Castle</p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-foreground text-balance leading-tight">
              Where Dreams Take Shape
            </h1>
            <p className="text-base md:text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
              A luxury castle hotel, international art residency, student leadership center, and premier event venue in
              the heart of Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Book Your Stay <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
              >
                Explore the Castle
              </Button>
            </div>
          </div>
        </section>

        {/* Luxury Castle Accommodation Section */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="rounded-lg overflow-hidden h-96 lg:h-full"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=500&width=500&query=luxury%20castle%20bedroom%20interior%20antique%20furnishings%20kenya)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div>
                <p className="text-primary font-serif text-base mb-2">Stay</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                  Luxury Castle Accommodation
                </h2>
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  Immerse yourself in luxury within our historic castle. Each room is uniquely designed with period
                  furnishings, modern amenities, and breathtaking views of the Kenyan highlands.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Elegantly appointed castle rooms with antique furnishings",
                    "Country lodge cottages for groups and families",
                    "Modern amenities in a historic setting",
                    "Stunning views of the surrounding highlands",
                    "Fine dining with locally-sourced ingredients",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Your Stay <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* International Art Residency Section */}
        <section className="py-24 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-serif text-base mb-2">Create</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                  International Art Residency
                </h2>
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  Tafaria's art residency program welcomes artists from around the world. Our dedicated studios,
                  creative workshops, and inspiring environment foster artistic excellence and innovation.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Professional studio spaces with natural light",
                    "Creative workshops and masterclasses",
                    "Mentorship from established artists",
                    "Exhibition opportunities and portfolio development",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Apply for Residency <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div
                className="rounded-lg overflow-hidden h-96 lg:h-full"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=500&width=500&query=art%20studio%20creative%20space%20castle%20artistic%20environment)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </section>

        {/* GoDream Educational Initiative Section */}
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="rounded-lg overflow-hidden h-96 lg:h-full"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=500&width=500&query=educational%20program%20learning%20students%20mentoring%20kenya%20castle)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div>
                <p className="text-primary font-serif text-base mb-2">Learn</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                  GoDream Educational Initiative
                </h2>
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  Our flagship GoDream program provides comprehensive student leadership development, combining academic
                  excellence with creative and personal growth in an inspiring castle setting.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Comprehensive leadership development programs",
                    "Integration of arts, culture, and academic learning",
                    "Mentorship from world-class educators",
                    "Networking with global students and creatives",
                    "Immersive learning in a heritage setting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Impact Section */}
        <section className="py-24 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-serif text-base mb-2">Community & Impact</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
                  Making a Difference Beyond Walls
                </h2>
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  Tafaria is committed to creating positive, measurable impact across our local community and the wider
                  world. From local employment to environmental stewardship, we invest in sustainable development.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "300+ local jobs created and sustained",
                    "5000+ lives touched through community programs",
                    "50+ community organizations supported annually",
                    "$5M+ invested in community development",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/community">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Learn About Our Impact <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div
                className="rounded-lg overflow-hidden h-96 lg:h-full shadow-subtle"
                style={{
                  backgroundImage: "url(/placeholder.svg?key=impact_home)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </section>

        {/* Four Pillars */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Experience Tafaria</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Choose your path to an unforgettable journey at our luxury castle and arts center
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((exp) => (
                <Link key={exp.href} href={exp.href}>
                  <Card
                    className={`h-full p-8 cursor-pointer hover:shadow-gold transition-all duration-300 bg-gradient-to-br ${exp.color} border-border/50 hover:border-primary/50`}
                  >
                    <div className="text-5xl mb-4">{exp.icon}</div>
                    <h3 className="text-2xl font-serif font-bold mb-3">{exp.title}</h3>
                    <p className="text-foreground/70 mb-6">{exp.description}</p>
                    <div className="flex items-center text-primary font-semibold group">
                      Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Tafaria */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">Why Choose Tafaria</h2>
                <ul className="space-y-4">
                  {[
                    "Historic luxury castle with modern amenities",
                    "World-class arts residency programs",
                    "Comprehensive educational initiatives",
                    "Premier event hosting facilities",
                    "Authentic Kenyan heritage experience",
                    "Commitment to creative excellence",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground text-sm">✓</span>
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-lg overflow-hidden h-96 shadow-subtle"
                style={{
                  backgroundImage:
                    "url(/placeholder.svg?height=400&width=600&query=luxury%20castle%20interior%20kenya)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-accent-foreground">
              Ready to Begin Your Tafaria Journey?
            </h2>
            <p className="text-lg text-accent-foreground/80 mb-8">
              Contact us today to book your stay, apply for residency, or plan your event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
              >
                Contact Us
              </Button>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Book Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
