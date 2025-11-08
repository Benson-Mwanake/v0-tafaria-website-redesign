"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Upload, FileText } from "lucide-react"
import { useState } from "react"

export default function ResidencyApplyPage() {
  const [step, setStep] = useState<"eligibility" | "application" | "portfolio" | "confirmation">("eligibility")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    artForms: [] as string[],
    experience: "",
    motivation: "",
    startDate: "",
    duration: "",
  })
  const [portfolioFiles, setPortfolioFiles] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)

  const programs = [
    { id: "visual", name: "Visual Arts", description: "Painting, sculpture, photography, mixed media" },
    { id: "literary", name: "Literary Arts", description: "Writing, poetry, storytelling" },
    { id: "performing", name: "Performing Arts", description: "Theater, dance, music, performance" },
    { id: "digital", name: "Digital Arts", description: "Digital design, animation, interactive media" },
  ]

  const durations = [
    { value: "1", label: "1 Month" },
    { value: "3", label: "3 Months" },
    { value: "6", label: "6 Months" },
    { value: "12", label: "1 Year" },
  ]

  const eligibilityRequirements = [
    "Minimum 18 years old",
    "Demonstrated experience in your art form (portfolio, exhibition, publication, or recommendation)",
    "Commitment to a minimum residency period",
    "Willingness to collaborate and share your work",
    "Fluency in English",
  ]

  const handlePortfolioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      const validFiles = files.filter((file) => {
        const validTypes = ["application/pdf", "image/jpeg", "image/png", "video/mp4", "application/msword"]
        return validTypes.includes(file.type) && file.size <= 10 * 1024 * 1024
      })
      setPortfolioFiles((prev) => [...prev, ...validFiles])
    }
  }

  const removePortfolioFile = (index: number) => {
    setPortfolioFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmitApplication = () => {
    if (formData.fullName && formData.email && formData.program && portfolioFiles.length > 0) {
      setSubmitted(true)
      setStep("confirmation")
      console.log("[v0] Residency application submitted:", {
        applicant: formData.fullName,
        email: formData.email,
        program: formData.program,
        portfolioFiles: portfolioFiles.length,
        confirmationEmail: "Sent to applicant email",
      })
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-12">
        <HeroBanner
          title="Apply for Tafaria Art Residency"
          subtitle="Join our international community of artists and creators"
          backgroundImage="/placeholder.svg?key=resapp"
        />

        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Step 1: Eligibility */}
          {step === "eligibility" && (
            <Card className="p-8 border-border/50">
              <h2 className="text-3xl font-serif font-bold mb-6">Residency Requirements</h2>
              <p className="text-foreground/70 mb-8">
                To apply for our international art residency program, you must meet the following eligibility criteria:
              </p>

              <div className="space-y-4 mb-8">
                {eligibilityRequirements.map((req, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground/80">{req}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded p-4 mb-8">
                <p className="text-sm">
                  <strong>Selection Process:</strong> Applications are reviewed quarterly. Successful applicants will be
                  notified within 4 weeks of the application deadline. We prioritize diverse artistic practices and
                  international representation.
                </p>
              </div>

              <Button onClick={() => setStep("application")} className="w-full bg-primary hover:bg-primary/90">
                Start Application
              </Button>
            </Card>
          )}

          {/* Step 2: Application Form */}
          {step === "application" && (
            <Card className="p-8 border-border/50">
              <h2 className="text-3xl font-serif font-bold mb-6">Tell Us About Yourself</h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <Input
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="bg-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="bg-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 XXX XXX XXX"
                      className="bg-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Program *</label>
                    <Select value={formData.program} onValueChange={(v) => setFormData({ ...formData, program: v })}>
                      <SelectTrigger className="bg-input">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        {programs.map((prog) => (
                          <SelectItem key={prog.id} value={prog.id}>
                            {prog.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Years of Experience *</label>
                  <div className="space-y-2">
                    {["<1", "1-3", "3-5", "5-10", "10+"].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="experience"
                          value={range}
                          checked={formData.experience === range}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        />
                        <span>{range} years</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">Intended Duration *</label>
                  <Select value={formData.duration} onValueChange={(v) => setFormData({ ...formData, duration: v })}>
                    <SelectTrigger className="bg-input">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {durations.map((dur) => (
                        <SelectItem key={dur.value} value={dur.value}>
                          {dur.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Start Date</label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="bg-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tell Us About Your Work & Motivation *</label>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="Describe your artistic practice, recent projects, and what draws you to Tafaria..."
                    className="w-full px-3 py-2 rounded bg-input border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary min-h-32"
                  />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep("eligibility")} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep("portfolio")}
                    disabled={
                      !formData.fullName ||
                      !formData.email ||
                      !formData.program ||
                      !formData.experience ||
                      !formData.duration
                    }
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Continue to Portfolio
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Step 3: Portfolio Upload */}
          {step === "portfolio" && (
            <Card className="p-8 border-border/50">
              <h2 className="text-3xl font-serif font-bold mb-6">Upload Your Portfolio</h2>

              <div
                className="mb-8 p-6 bg-primary/10 border-2 border-dashed border-primary/30 rounded-lg text-center cursor-pointer hover:bg-primary/20 transition-colors"
                onDragOver={(e) => e.preventDefault()}
              >
                <Upload className="w-12 h-12 mx-auto mb-3 text-primary/50" />
                <p className="font-semibold mb-1">Drag and drop your portfolio files here</p>
                <p className="text-sm text-foreground/60 mb-4">or</p>
                <label>
                  <span className="text-primary cursor-pointer font-semibold hover:underline">Click to browse</span>
                  <input
                    type="file"
                    multiple
                    onChange={handlePortfolioUpload}
                    accept=".pdf,.jpg,.jpeg,.png,.mp4,.doc,.docx"
                    className="hidden"
                  />
                </label>
                <p className="text-xs text-foreground/50 mt-2">
                  Supported: PDF, JPG, PNG, MP4, DOC (Max 10MB per file)
                </p>
              </div>

              {portfolioFiles.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-4">Uploaded Files ({portfolioFiles.length})</h3>
                  <div className="space-y-2">
                    {portfolioFiles.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-card border border-border rounded"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-sm">{file.name}</p>
                            <p className="text-xs text-foreground/60">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removePortfolioFile(idx)}
                          className="text-destructive hover:text-destructive/80 text-sm font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3 mb-6">
                {[
                  "I confirm that the portfolio materials provided are my original work",
                  "I have read and agree to the Tafaria residency terms and conditions",
                  "I consent to my work being featured in Tafaria galleries and marketing materials",
                ].map((text, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                    <Checkbox className="mt-1" />
                    <span className="text-sm">{text}</span>
                  </label>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep("application")} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleSubmitApplication}
                  disabled={portfolioFiles.length === 0 || !formData.fullName}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Submit Application
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {step === "confirmation" && submitted && (
            <Card className="p-8 border-2 border-primary bg-primary/5">
              <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-serif font-bold mb-2">Application Submitted!</h2>
                <p className="text-foreground/70">Thank you for your interest in the Tafaria Art Residency</p>
              </div>

              <Card className="p-6 bg-background border-border/50 mb-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/70">Application ID</p>
                    <p className="font-mono font-bold">APP-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Applicant</p>
                    <p className="font-semibold">{formData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">Program</p>
                    <p className="font-semibold">{programs.find((p) => p.id === formData.program)?.name}</p>
                  </div>
                </div>
              </Card>

              <div className="bg-primary/10 border border-primary/20 rounded p-4 mb-8 space-y-2 text-sm">
                <p className="font-semibold">What happens next:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>A confirmation email will be sent to {formData.email}</li>
                  <li>Your application will be reviewed within 4 weeks</li>
                  <li>Selected applicants will be notified via email</li>
                  <li>You can check your application status anytime</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button onClick={() => (window.location.href = "/")} className="w-full bg-primary hover:bg-primary/90">
                  Return to Home
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = "/arts")} className="w-full">
                  View Residency Programs
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
