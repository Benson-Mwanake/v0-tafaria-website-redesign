import { Button } from "@/components/ui/button"

interface HeroBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  cta?: {
    text: string
    href: string
  }
}

export function HeroBanner({ title, subtitle, backgroundImage, cta }: HeroBannerProps) {
  return (
    <section
      className="relative h-96 flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">{title}</h1>
        {subtitle && <p className="text-lg text-foreground/80 mb-8">{subtitle}</p>}
        {cta && (
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            {cta.text}
          </Button>
        )}
      </div>
    </section>
  )
}
