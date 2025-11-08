"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 712 345 678",
      subtext: "Monday - Friday, 9am - 5pm EAT",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@tafaria.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nyeri, Kenya",
      subtext: "East Africa",
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: "7am - 10pm Daily",
      subtext: "24/7 for registered guests",
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <HeroBanner
          title="Get in Touch"
          subtitle="We'd love to hear from you. Contact us with any questions or inquiries."
          backgroundImage="/luxury-castle-contact-center.jpg"
        />

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <Card key={info.title} className="p-6 text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-serif font-bold mb-2">{info.title}</h3>
                    <p className="font-semibold text-foreground mb-1">{info.details}</p>
                    <p className="text-sm text-foreground/70">{info.subtext}</p>
                  </Card>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-lg p-8">
                <h2 className="text-3xl font-serif font-bold mb-8 text-center">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-primary/10 border border-primary text-primary p-6 rounded-lg text-center">
                    <p className="font-semibold mb-2">Thank you for your message!</p>
                    <p className="text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-foreground">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">What Can We Help You With?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Book a Stay", href: "/stay", desc: "Reserve luxury accommodation" },
                { title: "Apply for Residency", href: "/arts", desc: "Join our arts program" },
                { title: "Enroll in Education", href: "/education", desc: "Start your learning journey" },
                { title: "Plan an Event", href: "/events", desc: "Host your celebration" },
              ].map((item, i) => (
                <Card key={i} className="p-6 text-center hover:shadow-gold transition-shadow cursor-pointer">
                  <h3 className="font-serif font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{item.desc}</p>
                  <a href={item.href} className="text-primary font-semibold hover:underline">
                    Learn More →
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the best time to visit Tafaria?",
                  a: "Tafaria is beautiful year-round! Dry seasons (June-October and January-February) offer the best weather for events and outdoor activities.",
                },
                {
                  q: "How far in advance should I book accommodation?",
                  a: "We recommend booking 3-6 months in advance during peak seasons, though we accommodate last-minute requests based on availability.",
                },
                {
                  q: "Do you offer group rates for education programs?",
                  a: "Yes! We offer special rates for schools and organizations. Contact our education team for custom group packages.",
                },
                {
                  q: "What is included in the arts residency?",
                  a: "Our residency includes accommodation, studio access, mentorship, workshops, and exhibition opportunities. Details vary by program length.",
                },
              ].map((faq, i) => (
                <Card key={i} className="p-6">
                  <h3 className="font-serif font-bold mb-3 text-foreground">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
