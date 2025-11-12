"use client";

import React, { useState } from "react";
import Link from "next/link";

const roomTypes = [
  {
    id: 1,
    name: "Standard Double Room",
    capacity: "2 Adults",
    size: "25 m²",
    beds: "1 Queen Bed",
    price: 8500,
    weekendPrice: 10500,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    ],
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning", "Private Bathroom", "Mountain View"],
    available: true,
  },
  {
    id: 2,
    name: "Twin Room",
    capacity: "2 Adults",
    size: "28 m²",
    beds: "2 Single Beds",
    price: 8500,
    weekendPrice: 10500,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    ],
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning", "Private Bathroom", "Garden View"],
    available: true,
  },
  {
    id: 3,
    name: "Family Suite",
    capacity: "4 Adults + 2 Children",
    size: "45 m²",
    beds: "1 Queen + 2 Singles",
    price: 15000,
    weekendPrice: 18000,
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
    ],
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning", "Kitchenette", "Living Area", "Balcony"],
    available: true,
  },
];

const addOns = [
  { id: "breakfast", name: "Breakfast (per person/day)", price: 800 },
  { id: "airport", name: "Airport Pickup (One-way)", price: 3500 },
  { id: "camel", name: "Sunset Camel Ride", price: 2000 },
  { id: "massage", name: "60-min Massage", price: 3000 },
  { id: "cultural", name: "Maasai Cultural Tour", price: 1500 },
];

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const isWeekend = (date: string) => {
    if (!date) return false;
    const day = new Date(date).getDay();
    return day === 5 || day === 6; // Friday or Saturday
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const calculateTotal = () => {
    if (!selectedRoom) return 0;
    const room = roomTypes.find(r => r.id === selectedRoom);
    if (!room) return 0;

    const nights = calculateNights();
    const roomPrice = isWeekend(checkIn) ? room.weekendPrice : room.price;
    const roomTotal = roomPrice * nights;

    const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      return sum + (addOn?.price || 0);
    }, 0);

    return roomTotal + addOnsTotal;
  };

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const handleBooking = () => {
    if (guestInfo.name && guestInfo.email && guestInfo.phone) {
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        setStep(1);
        setSelectedRoom(null);
        setCheckIn("");
        setCheckOut("");
        setSelectedAddOns([]);
        setGuestInfo({ name: "", email: "", phone: "", specialRequests: "" });
      }, 5000);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section
      className="relative py-20 px-4 min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#FAF5F0] mb-4">
            Book Your Stay
          </h1>
          <p className="text-xl text-[#D7BFA8]">
            Nairobi-Namanga Rd, Kajiado • Check-in: 12:00 PM • Check-out: 10:30 AM
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                    step >= s
                      ? "bg-[#800000] text-white"
                      : "bg-[#3D2517] text-[#D7BFA8] border-2 border-[#5C4033]"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step > s ? "bg-[#800000]" : "bg-[#5C4033]"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="mb-12 bg-[#3D2517]/90 backdrop-blur-md rounded-3xl p-12 border-2 border-[#800000]/70 shadow-2xl text-center">
            <span className="text-6xl mb-4 block">🎉</span>
            <h2 className="text-4xl font-bold text-[#FAF5F0] mb-4">Booking Confirmed!</h2>
            <p className="text-[#D7BFA8] text-xl mb-6">
              Thank you, {guestInfo.name}! Your reservation has been received.
            </p>
            <p className="text-[#F8F3EF] text-lg">
              A confirmation email has been sent to <strong>{guestInfo.email}</strong>
            </p>
            <p className="text-[#D7BFA8] mt-4">
              We&apos;ll contact you at <strong>{guestInfo.phone}</strong> to finalize payment.
            </p>
          </div>
        )}

        {/* Step 1: Select Dates & Room */}
        {step === 1 && !showConfirmation && (
          <div className="space-y-8">
            {/* Date Selection */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#5C4033]/50">
              <h2 className="text-3xl font-bold text-[#FAF5F0] mb-6">Select Your Dates</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-[#D7BFA8] mb-2">Check-in</label>
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    aria-label="date in"
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] mb-2">Check-out</label>
                  <input
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    aria-label="date out"
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] mb-2">Adults</label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    aria-label="Select number of adults"
                    className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[#D7BFA8] mb-2">Children</label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    aria-label="Select number of children"
                    className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                
                  >
                    {[0, 1, 2, 3, 4].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>
                    ))}
                  </select>
                </div>
              </div>
              {checkIn && checkOut && (
                <div className="mt-6 p-4 bg-[#2C1B16]/60 rounded-xl border border-[#800000]/30">
                  <p className="text-[#FAF5F0] text-lg">
                    <strong>{calculateNights()} night{calculateNights() !== 1 ? 's' : ''}</strong>
                    {isWeekend(checkIn) && (
                      <span className="ml-4 px-3 py-1 bg-[#800000] text-white text-sm rounded-full">
                        Weekend Rate Applied
                      </span>
                    )}
                  </p>
                </div>
              )}
            </div>

            {/* Room Selection */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#5C4033]/50">
              <h2 className="text-3xl font-bold text-[#FAF5F0] mb-6">Choose Your Room</h2>
              <div className="grid grid-cols-1 gap-6">
                {roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className={`bg-[#2C1B16]/60 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                      selectedRoom === room.id
                        ? "border-[#800000] shadow-xl"
                        : "border-[#5C4033]/50 hover:border-[#800000]/50"
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="grid grid-cols-2 gap-2 p-3">
                        {room.images.map((img, idx) => (
                          <div key={idx} className="relative h-40 rounded-xl overflow-hidden">
                            <img src={img} alt={room.name} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-[#FAF5F0] mb-2">{room.name}</h3>
                            <div className="flex flex-wrap gap-4 text-[#D7BFA8] text-sm mb-3">
                              <span>👤 {room.capacity}</span>
                              <span>📐 {room.size}</span>
                              <span>🛏 {room.beds}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-[#800000]">
                              KES {isWeekend(checkIn) ? room.weekendPrice.toLocaleString() : room.price.toLocaleString()}
                            </div>
                            <div className="text-[#D7BFA8] text-sm">per night</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {room.amenities.map((amenity, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#4A3426]/60 text-[#F8F3EF] text-sm rounded-full border border-[#5C4033]/30"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>
                        {selectedRoom === room.id && (
                          <div className="mt-4 p-3 bg-[#800000]/20 rounded-xl border border-[#800000]/40">
                            <p className="text-[#FAF5F0] font-semibold">✓ Selected</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedRoom || !checkIn || !checkOut}
                className="px-12 py-4 bg-[#800000] hover:bg-[#A04040] disabled:bg-[#5C4033] text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg disabled:cursor-not-allowed"
              >
                Continue to Add-ons
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Add-ons & Extras */}
        {step === 2 && !showConfirmation && (
          <div className="space-y-8">
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#5C4033]/50">
              <h2 className="text-3xl font-bold text-[#FAF5F0] mb-6">Enhance Your Stay</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedAddOns.includes(addOn.id)
                        ? "bg-[#800000]/20 border-[#800000]"
                        : "bg-[#2C1B16]/60 border-[#5C4033]/50 hover:border-[#800000]/50"
                    }`}
                    onClick={() => handleAddOnToggle(addOn.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-[#FAF5F0] mb-2">{addOn.name}</h3>
                        <p className="text-2xl font-bold text-[#800000]">
                          KES {addOn.price.toLocaleString()}
                        </p>
                      </div>
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                          selectedAddOns.includes(addOn.id)
                            ? "bg-[#800000] border-[#800000]"
                            : "border-[#5C4033]"
                        }`}
                      >
                        {selectedAddOns.includes(addOn.id) && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStep(1)}
                className="px-8 py-4 bg-[#2C1B16]/80 hover:bg-[#3D2517] text-[#D7BFA8] font-bold rounded-full border-2 border-[#5C4033]/50 transition-all duration-300"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-12 py-4 bg-[#800000] hover:bg-[#A04040] text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg"
              >
                Continue to Guest Details
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Guest Information */}
        {step === 3 && !showConfirmation && (
          <div className="space-y-8">
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#5C4033]/50">
              <h2 className="text-3xl font-bold text-[#FAF5F0] mb-6">Guest Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#D7BFA8] mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={guestInfo.name}
                    onChange={(e) => setGuestInfo({...guestInfo, name: e.target.value})}
                    className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={guestInfo.email}
                    onChange={(e) => setGuestInfo({...guestInfo, email: e.target.value})}
                    className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo({...guestInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                    placeholder="0727000027"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#D7BFA8] mb-2">Special Requests (Optional)</label>
                <textarea
                  value={guestInfo.specialRequests}
                  onChange={(e) => setGuestInfo({...guestInfo, specialRequests: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-xl text-[#FAF5F0] focus:border-[#800000] focus:outline-none resize-none"
                  placeholder="E.g., early check-in, ground floor room, dietary requirements..."
                />
              </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-8 border-2 border-[#800000]/50">
              <h2 className="text-3xl font-bold text-[#FAF5F0] mb-6">Booking Summary</h2>
              {selectedRoom && (
                <div className="space-y-4 text-[#F8F3EF]">
                  <div className="flex justify-between py-3 border-b border-[#5C4033]/30">
                    <span>{roomTypes.find(r => r.id === selectedRoom)?.name}</span>
                    <span className="font-bold">
                      KES {((isWeekend(checkIn) ? roomTypes.find(r => r.id === selectedRoom)?.weekendPrice : roomTypes.find(r => r.id === selectedRoom)?.price) || 0).toLocaleString()} × {calculateNights()} nights
                    </span>
                  </div>
                  {selectedAddOns.map(addOnId => {
                    const addOn = addOns.find(a => a.id === addOnId);
                    return addOn ? (
                      <div key={addOnId} className="flex justify-between py-3 border-b border-[#5C4033]/30">
                        <span>{addOn.name}</span>
                        <span className="font-bold">KES {addOn.price.toLocaleString()}</span>
                      </div>
                    ) : null;
                  })}
                  <div className="flex justify-between py-4 text-2xl font-bold text-[#FAF5F0] border-t-2 border-[#800000]/50 mt-4">
                    <span>Total</span>
                    <span className="text-[#800000]">KES {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-4 bg-[#2C1B16]/80 hover:bg-[#3D2517] text-[#D7BFA8] font-bold rounded-full border-2 border-[#5C4033]/50 transition-all duration-300"
              >
                ← Back
              </button>
              <button
                onClick={handleBooking}
                disabled={!guestInfo.name || !guestInfo.email || !guestInfo.phone}
                className="px-12 py-4 bg-[#800000] hover:bg-[#A04040] disabled:bg-[#5C4033] text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            </div>

            <div className="text-center text-[#D7BFA8] text-sm">
              <p>By confirming, you agree to our <Link href="/terms" className="text-[#800000] underline">Terms & Conditions</Link></p>
              <p className="mt-2">Questions? Call us at <strong className="text-[#FAF5F0]">0727000027</strong></p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingPage;