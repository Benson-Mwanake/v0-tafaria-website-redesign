"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Users, CreditCard, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingPage() {
  const [step, setStep] = useState<"details" | "rooms" | "payment" | "confirmation">("details")
  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    rooms: "1",
  })
  const [selectedRoom, setSelectedRoom] = useState<string>("")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const rooms = [
    {
      id: "luxury-suite",
      name: "Luxury Castle Suite",
      price: 450,
      image: "/luxury-castle-suite.jpg",
      description: "Historic castle room with antique furnishings and views",
      amenities: ["King Bed", "Fireplace", "Mountain View", "Premium Bathroom"],
    },
    {
      id: "heritage-tower",
      name: "Heritage Tower Room",
      price: 350,
      image: "/heritage-tower-room.jpg",
      description: "Charming tower room with historic character",
      amenities: ["Queen Bed", "Stone Walls", "Castle View", "Ensuite Bath"],
    },
    {
      id: "garden-villa",
      name: "Garden Villa",
      price: 400,
      image: "/garden-villa-luxury.jpg",
      description: "Private villa surrounded by manicured gardens",
      amenities: ["Double Queen", "Private Terrace", "Garden View", "Spa Bath"],
    },
    {
      id: "artist-studio",
      name: "Artist Studio Room",
      price: 300,
      image: "/artist-studio-room.jpg",
      description: "Spacious room with natural light and creative space",
      amenities: ["Queen Bed", "Studio Space", "Skylights", "Modern Bath"],
    },
  ]

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn)
      const checkOut = new Date(bookingData.checkOut)
      return Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
    }
    return 0
  }

  const nights = calculateNights()
  const selectedRoomData = rooms.find((r) => r.id === selectedRoom)
  const totalPrice = selectedRoomData ? selectedRoomData.price * nights * Number.parseInt(bookingData.rooms) : 0

  const handleConfirmBooking = () => {
    if (selectedRoom && nights > 0) {
      setBookingConfirmed(true)
      setStep("confirmation")
      // Simulate sending confirmation
      console.log("[v0] Booking confirmed:", {
        room: selectedRoomData?.name,
        checkIn: bookingData.checkIn,
        checkOut: bookingData.checkOut,
        guests: bookingData.guests,
        rooms: bookingData.rooms,
        totalPrice,
        confirmationEmail: "Sent to guest email",
        whatsAppNotification: "+254XXX (WhatsApp notification)",
      })
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Book Your Tafaria Experience</h1>
            <p className="text-foreground/70">Secure your reservation with our simple booking process</p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12 max-w-2xl mx-auto">
            {[
              { id: "details", label: "Booking Details" },
              { id: "rooms", label: "Select Room" },
              { id: "payment", label: "Payment" },
              { id: "confirmation", label: "Confirmed" },
            ].map((s, idx) => (
              <div key={s.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-2 ${
                    step === s.id
                      ? "bg-primary text-primary-foreground"
                      : bookingConfirmed || ["details", "rooms", "payment"].includes(s.id)
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {idx + 1}
                </div>
                <p className="text-xs text-center text-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Step 1: Booking Details */}
          {step === "details" && (
            <Card className="p-8 max-w-2xl mx-auto border-border/50">
              <h2 className="text-2xl font-serif font-bold mb-6">Booking Details</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Check-In Date</label>
                    <Input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                      className="bg-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Check-Out Date</label>
                    <Input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                      className="bg-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Number of Guests</label>
                    <Select
                      value={bookingData.guests}
                      onValueChange={(v) => setBookingData({ ...bookingData, guests: v })}
                    >
                      <SelectTrigger className="bg-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n} Guest{n > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Number of Rooms</label>
                    <Select
                      value={bookingData.rooms}
                      onValueChange={(v) => setBookingData({ ...bookingData, rooms: v })}
                    >
                      <SelectTrigger className="bg-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4].map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n} Room{n > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  onClick={() => setStep("rooms")}
                  disabled={!bookingData.checkIn || !bookingData.checkOut}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Continue to Room Selection
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: Room Selection */}
          {step === "rooms" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold mb-6">Select Your Room</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {rooms.map((room) => (
                  <Card
                    key={room.id}
                    className={`cursor-pointer border-2 transition-all overflow-hidden ${
                      selectedRoom === room.id
                        ? "border-primary bg-primary/5"
                        : "border-border/50 hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }} />
                    <div className="p-4">
                      <h3 className="font-serif font-bold text-lg mb-1">{room.name}</h3>
                      <p className="text-sm text-foreground/70 mb-3">{room.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.amenities.map((amenity, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {amenity}
                          </span>
                        ))}
                      </div>
                      <p className="text-primary font-bold">${room.price}/night</p>
                    </div>
                  </Card>
                ))}
              </div>

              {selectedRoomData && (
                <Card className="p-6 border-primary/50 bg-primary/5 mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-foreground/70">Selected Room</p>
                      <h3 className="font-serif font-bold text-xl">{selectedRoomData.name}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-foreground/70">{nights} nights</p>
                      <p className="font-bold text-2xl text-primary">${totalPrice.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4 pb-4 border-b border-primary/20">
                    <div>
                      <Calendar className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <p>{bookingData.checkIn}</p>
                    </div>
                    <div>
                      <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <p>
                        {bookingData.guests} guests, {bookingData.rooms} room{bookingData.rooms > "1" ? "s" : ""}
                      </p>
                    </div>
                    <div>
                      <span className="text-primary font-bold">{nights} nights</span>
                    </div>
                  </div>
                </Card>
              )}

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep("details")} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={() => setStep("payment")}
                  disabled={!selectedRoom}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  Proceed to Payment
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === "payment" && (
            <Card className="p-8 max-w-2xl mx-auto border-border/50">
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-primary" />
                Payment Method
              </h2>

              <div className="space-y-4 mb-8">
                <Card className="p-4 border-primary cursor-pointer bg-primary/5">
                  <div className="flex items-center">
                    <input type="radio" name="payment" id="mpesa" defaultChecked className="mr-3" />
                    <label htmlFor="mpesa" className="cursor-pointer flex-1">
                      <p className="font-semibold">M-Pesa (Recommended)</p>
                      <p className="text-sm text-foreground/70">Pay securely using M-Pesa mobile money</p>
                    </label>
                  </div>
                </Card>

                <Card className="p-4 border-border/50 cursor-pointer hover:border-primary/50">
                  <div className="flex items-center">
                    <input type="radio" name="payment" id="card" className="mr-3" />
                    <label htmlFor="card" className="cursor-pointer flex-1">
                      <p className="font-semibold">Credit/Debit Card</p>
                      <p className="text-sm text-foreground/70">Visa, MasterCard, American Express</p>
                    </label>
                  </div>
                </Card>
              </div>

              <Card className="p-6 bg-card border-border/50 mb-8">
                <h3 className="font-semibold mb-4">Booking Summary</h3>
                <div className="space-y-2 text-sm mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between">
                    <span>{selectedRoomData?.name}</span>
                    <span>${selectedRoomData?.price}/night</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{nights} nights</span>
                    <span>${(selectedRoomData?.price || 0) * nights}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      {bookingData.rooms} room{bookingData.rooms > "1" ? "s" : ""}
                    </span>
                    <span>x {bookingData.rooms}</span>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-primary">${totalPrice.toLocaleString()}</span>
                </div>
              </Card>

              <p className="text-xs text-foreground/60 mb-6">
                By proceeding, you agree to our terms and conditions. A confirmation email and WhatsApp notification
                will be sent immediately after payment.
              </p>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep("rooms")} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleConfirmBooking} className="flex-1 bg-primary hover:bg-primary/90">
                  Complete Payment
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {step === "confirmation" && bookingConfirmed && (
            <Card className="p-8 max-w-2xl mx-auto border-primary bg-primary/5 border-2">
              <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-serif font-bold mb-2">Booking Confirmed!</h2>
                <p className="text-foreground/70">Your reservation has been secured</p>
              </div>

              <Card className="p-6 bg-background border-border/50 mb-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-foreground/70">Confirmation Number</p>
                    <p className="font-mono font-bold text-lg">
                      TAF-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-foreground/70">Room</p>
                      <p className="font-semibold">{selectedRoomData?.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Check-In</p>
                      <p className="font-semibold">{bookingData.checkIn}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-foreground/70">Guests</p>
                      <p className="font-semibold">{bookingData.guests} guests</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">Check-Out</p>
                      <p className="font-semibold">{bookingData.checkOut}</p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Paid</span>
                      <span className="text-primary">${totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-primary/10 border border-primary/20 rounded p-4 mb-8">
                <p className="text-sm font-semibold mb-2">Confirmation Details Sent To:</p>
                <p className="text-sm flex items-center gap-2 mb-1">
                  <span className="text-primary">✓</span> Your email address
                </p>
                <p className="text-sm flex items-center gap-2">
                  <span className="text-primary">✓</span> WhatsApp message sent
                </p>
              </div>

              <div className="space-y-3">
                <Button onClick={() => (window.location.href = "/")} className="w-full bg-primary hover:bg-primary/90">
                  Return to Home
                </Button>
                <Button variant="outline" onClick={() => (window.location.href = "/contact")} className="w-full">
                  Contact Us with Questions
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
