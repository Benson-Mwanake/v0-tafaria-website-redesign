"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null)

  const megaMenuItems = {
    Stay: {
      href: "/stay",
      description: "Luxury accommodation",
      links: [
        { label: "Luxury Suites", href: "/stay#luxury-suites" },
        { label: "Garden Villas", href: "/stay#garden-villas" },
        { label: "Book Now", href: "/booking" },
        { label: "Check Availability", href: "/stay#availability" },
      ],
    },
    Create: {
      href: "/arts",
      description: "Arts residency",
      links: [
        { label: "Programs", href: "/arts#programs" },
        { label: "Apply Now", href: "/residency-apply" },
        { label: "Past Artists", href: "/arts#past-artists" },
        { label: "Portfolio Upload", href: "/residency-apply" },
      ],
    },
    Learn: {
      href: "/education",
      description: "Educational programs",
      links: [
        { label: "GoDream Initiative", href: "/education#godream" },
        { label: "Programs", href: "/education#programs" },
        { label: "Book a Visit", href: "/education-booking" },
        { label: "Curriculum", href: "/education#curriculum" },
      ],
    },
    Host: {
      href: "/events",
      description: "Event hosting",
      links: [
        { label: "Event Types", href: "/events#event-types" },
        { label: "Facilities", href: "/events#facilities" },
        { label: "Request Proposal", href: "/event-inquiry" },
        { label: "Testimonials", href: "/events#testimonials" },
      ],
    },
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold">T</span>
            </div>
            <span className="font-serif font-bold text-lg hidden sm:inline">Tafaria</span>
          </Link>

          {/* Desktop Navigation with Mega Menu */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {Object.entries(megaMenuItems).map(([key, item]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setOpenMegaMenu(key)}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <button className="px-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 group-hover:text-primary">
                  {key}
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>

                {/* Mega Menu Dropdown */}
                <div className="absolute left-0 top-full hidden group-hover:block pt-2">
                  <div className="bg-card border border-border rounded-lg shadow-lg p-6 w-60">
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-wider text-primary font-semibold">{item.description}</p>
                    </div>
                    <div className="space-y-2">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-3 py-2 rounded text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Additional Links */}
            <Link href="/gallery" className="px-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Desktop CTA - Sticky Booking */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/contact">
              <Button variant="outline" size="sm">
                Contact
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book / Inquire
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-3 max-h-96 overflow-y-auto">
            {Object.entries(megaMenuItems).map(([key, item]) => (
              <div key={key}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-foreground font-semibold hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {key}
                </Link>
                <div className="pl-6 space-y-1">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-border pt-3 px-3 space-y-2">
              <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>
                <div className="text-foreground/80 hover:text-primary py-2">Gallery</div>
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                <div className="text-foreground/80 hover:text-primary py-2">Blog</div>
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                <div className="text-foreground/80 hover:text-primary py-2">About</div>
              </Link>
            </div>

            <div className="border-t border-border pt-3 px-3 flex gap-2">
              <Link href="/contact" className="flex-1">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Contact
                </Button>
              </Link>
              <Link href="/booking" className="flex-1">
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book / Inquire
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
