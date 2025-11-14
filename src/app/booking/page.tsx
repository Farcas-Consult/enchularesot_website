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
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    ],
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning", "Private Bathroom", "Garden View"],
    available: true,
  },
];

// ✅ RESERVATION CATEGORIES (NO PRICING)
const reservationCategories = {
  dining: [
    { id: "half-board", name: "Half-Board Package", description: "Breakfast + Lunch daily" },
    { id: "full-board", name: "Full-Board Package", description: "Breakfast + Lunch + Dinner daily" },
  ],
  wellness: [
    { id: "swedish-massage", name: "Swedish Massage", description: "60-minute full-body relaxation" },
    { id: "deep-tissue", name: "Deep Tissue Massage", description: "Targeted muscle tension relief" },
    { id: "aromatherapy", name: "Aromatherapy Session", description: "Essential oils for holistic wellness" },
    { id: "sauna", name: "Private Sauna Access", description: "30-minute session with herbal steam" },
  ],
  gym: [
    { id: "gym-day", name: "Gym Day Pass", description: "Full access to cardio & strength zone" },
    { id: "gym-weekly", name: "Gym Weekly Pass", description: "7 days unlimited access" },
    { id: "cardio-only", name: "Cardio Zone Access", description: "Treadmills, bikes & ellipticals" },
  ],
  pool: [
    { id: "pool-day", name: "Swimming Pool Access", description: "Daytime access to main pool & lounge" },
    { id: "pool-private", name: "Private Pool Session", description: "1-hour exclusive pool use" },
  ],
  games: [
    { id: "foosball", name: "Foosball Table", description: "Indoor table football" },
    { id: "snooker", name: "Snooker Table", description: "Full-size professional table" },
    { id: "darts", name: "Darts Board", description: "Standard steel-tip setup" },
    { id: "board-games", name: "Board Games Lounge", description: "Chess, Scrabble, Monopoly & more" },
  ],
};

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [minorCount, setMinorCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [selectedReservations, setSelectedReservations] = useState<string[]>([]);
  const [guestInfo, setGuestInfo] = useState({
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const toggleReservation = (id: string) => {
    setSelectedReservations(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const getCategoryName = (id: string) => {
    for (const [category, items] of Object.entries(reservationCategories)) {
      if (items.some(item => item.id === id)) {
        return category.charAt(0).toUpperCase() + category.slice(1);
      }
    }
    return "Other";
  };

  const getReservationDetails = (id: string) => {
    for (const items of Object.values(reservationCategories)) {
      const item = items.find(i => i.id === id);
      if (item) return item;
    }
    return null;
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
        setSelectedReservations([]);
        setGuestInfo({ name: "", email: "", phone: "", specialRequests: "" });
        setAdults(2);
        setMinorCount(0);
        setChildrenCount(0);
        setInfantCount(0);
      }, 5000);
    }
  };

  return (
    <section
      className="relative py-12 px-4 h-screen overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-2">
            Reserve Your Experience
          </h1>
          <p className="text-lg text-[#D7BFA8]">
            Nairobi-Namanga Rd, Kajiado • Check-in: 12:00 PM • Check-out: 10:30 AM
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= s
                      ? "bg-[#800000] text-white"
                      : "bg-[#3D2517] text-[#D7BFA8] border-2 border-[#5C4033]"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
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
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-[#3D2517]/90 backdrop-blur-md rounded-3xl p-8 border-2 border-[#800000]/70 shadow-2xl text-center max-w-2xl w-full">
              <span className="text-5xl mb-4 block">🎉</span>
              <h2 className="text-3xl font-bold text-[#FAF5F0] mb-3">Reservation Confirmed!</h2>
              <p className="text-[#D7BFA8] mb-4">
                Thank you, {guestInfo.name}! Your reservation request has been received.
              </p>
              <p className="text-[#F8F3EF] text-base">
                We’ll contact you at <strong>{guestInfo.phone}</strong> to confirm details.
              </p>
            </div>
          </div>
        )}

        {/* Step 1: Dates, Room & Guests */}
        {step === 1 && !showConfirmation && (
          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {/* Date & Guests */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#5C4033]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Your Stay</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[#D7BFA8] text-sm mb-1">Check-in</label>
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    aria-label="check in date"
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] text-sm focus:border-[#800000] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] text-sm mb-1">Check-out</label>
                  <input
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    aria-label="check out date"
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] text-sm focus:border-[#800000] focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[#D7BFA8] text-sm mb-1">Guests</label>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Adults */}
                    <div className="flex items-center justify-between p-2 bg-[#2C1B16]/60 rounded-lg border border-[#5C4033]/50">
                      <span className="text-[#FAF5F0] text-sm">Adults (17+)</span>
                      <div className="flex gap-1">
                        <button onClick={() => adults > 1 && setAdults(adults - 1)} className="w-7 h-7 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-sm">-</button>
                        <span className="w-6 text-center text-[#FAF5F0] text-sm">{adults}</span>
                        <button onClick={() => adults < 6 && setAdults(adults + 1)} className="w-7 h-7 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-sm">+</button>
                      </div>
                    </div>
                    {/* Minors */}
                    <div className="flex items-center justify-between p-2 bg-[#2C1B16]/60 rounded-lg border border-[#5C4033]/50">
                      <span className="text-[#FAF5F0] text-sm">Minors (12–17)</span>
                      <div className="flex gap-1">
                        <button onClick={() => minorCount > 0 && setMinorCount(minorCount - 1)} className="w-7 h-7 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-sm">-</button>
                        <span className="w-6 text-center text-[#FAF5F0] text-sm">{minorCount}</span>
                        <button onClick={() => minorCount < 4 && setMinorCount(minorCount + 1)} className="w-7 h-7 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-sm">+</button>
                      </div>
                    </div>
                    {/* Children */}
                    <div className="flex items-center justify-between p-2 bg-[#2C1B16]/60 rounded-lg border border-[#5C4033]/50">
                      <span className="text-[#FAF5F0] text-sm">Children (2–12)</span>
                      <div className="flex gap-1">
                        <button onClick={() => childrenCount > 0 && setChildrenCount(childrenCount - 1)} className="w-7 h-7 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-sm">-</button>
                        <span className="w-6 text-center text-[#FAF5F0] text-sm">{childrenCount}</span>
                        <button onClick={() => childrenCount < 4 && setChildrenCount(childrenCount + 1)} className="w-7 h-7 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-sm">+</button>
                      </div>
                    </div>
                    {/* Infants */}
                    <div className="flex items-center justify-between p-2 bg-[#2C1B16]/60 rounded-lg border border-[#5C4033]/50">
                      <span className="text-[#FAF5F0] text-sm">Infants (0–2)</span>
                      <div className="flex gap-1">
                        <button onClick={() => infantCount > 0 && setInfantCount(infantCount - 1)} className="w-7 h-7 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-sm">-</button>
                        <span className="w-6 text-center text-[#FAF5F0] text-sm">{infantCount}</span>
                        <button onClick={() => infantCount < 4 && setInfantCount(infantCount + 1)} className="w-7 h-7 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-sm">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {checkIn && checkOut && (
                <div className="mt-4 p-3 bg-[#2C1B16]/60 rounded-lg border border-[#800000]/30">
                  <p className="text-[#FAF5F0] text-sm">
                    <strong>{calculateNights()} night{calculateNights() !== 1 ? 's' : ''}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Room Selection */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#5C4033]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Choose Your Room</h2>
              <div className="space-y-4">
                {roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className={`bg-[#2C1B16]/60 rounded-2xl p-4 border-2 cursor-pointer transition-all ${
                      selectedRoom === room.id
                        ? "border-[#800000] shadow-lg"
                        : "border-[#5C4033]/50 hover:border-[#800000]/50"
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0 w-full md:w-40 h-24 rounded-lg overflow-hidden">
                        <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#FAF5F0]">{room.name}</h3>
                        <div className="flex flex-wrap gap-3 text-[#D7BFA8] text-sm mt-1">
                          <span>👤 {room.capacity}</span>
                          <span>📐 {room.size}</span>
                          <span>🛏 {room.beds}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {room.amenities.map((amenity, idx) => (
                            <span key={idx} className="px-2 py-1 bg-[#4A3426]/60 text-[#F8F3EF] text-xs rounded">
                              {amenity}
                            </span>
                          ))}
                        </div>
                        {selectedRoom === room.id && (
                          <div className="mt-2 p-2 bg-[#800000]/20 rounded-lg border border-[#800000]/40">
                            <p className="text-[#FAF5F0] text-sm font-semibold">✓ Selected</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedRoom || !checkIn || !checkOut}
                className="px-8 py-3 bg-[#800000] hover:bg-[#A04040] disabled:bg-[#5C4033] text-white font-bold rounded-full text-base transition-all shadow-lg disabled:cursor-not-allowed"
              >
                Continue to Reservations
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Reservation Selection */}
        {step === 2 && !showConfirmation && (
          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {/* Dining Packages */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#5C4033]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Dining Packages</h2>
              <p className="text-[#D7BFA8] text-sm mb-4">Select your meal plan for the duration of your stay.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reservationCategories.dining.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedReservations.includes(pkg.id)
                        ? "bg-[#800000]/20 border-[#800000]"
                        : "bg-[#2C1B16]/60 border-[#5C4033]/50 hover:border-[#800000]/50"
                    }`}
                    onClick={() => toggleReservation(pkg.id)}
                  >
                    <h3 className="font-bold text-[#FAF5F0]">{pkg.name}</h3>
                    <p className="text-[#D7BFA8] text-sm mt-1">{pkg.description}</p>
                    <div className="mt-2 w-5 h-5 rounded border border-[#5C4033] flex items-center justify-center">
                      {selectedReservations.includes(pkg.id) && (
                        <svg className="w-4 h-4 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wellness & Spa */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#5C4033]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Wellness & Spa</h2>
              <p className="text-[#D7BFA8] text-sm mb-4">Relax and rejuvenate during your stay.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reservationCategories.wellness.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedReservations.includes(item.id)
                        ? "bg-[#800000]/20 border-[#800000]"
                        : "bg-[#2C1B16]/60 border-[#5C4033]/50 hover:border-[#800000]/50"
                    }`}
                    onClick={() => toggleReservation(item.id)}
                  >
                    <h3 className="font-bold text-[#FAF5F0]">{item.name}</h3>
                    <p className="text-[#D7BFA8] text-sm mt-1">{item.description}</p>
                    <div className="mt-2 w-5 h-5 rounded border border-[#5C4033] flex items-center justify-center">
                      {selectedReservations.includes(item.id) && (
                        <svg className="w-4 h-4 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gym */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#5C4033]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Gym & Fitness</h2>
              <p className="text-[#D7BFA8] text-sm mb-4">Stay active with our premium fitness facilities.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reservationCategories.gym.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedReservations.includes(item.id)
                        ? "bg-[#800000]/20 border-[#800000]"
                        : "bg-[#2C1B16]/60 border-[#5C4033]/50 hover:border-[#800000]/50"
                    }`}
                    onClick={() => toggleReservation(item.id)}
                  >
                    <h3 className="font-bold text-[#FAF5F0] text-sm">{item.name}</h3>
                    <p className="text-[#D7BFA8] text-xs mt-1">{item.description}</p>
                    <div className="mt-2 w-5 h-5 rounded border border-[#5C4033] flex items-center justify-center">
                      {selectedReservations.includes(item.id) && (
                        <svg className="w-4 h-4 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Swimming Pool */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#5C4033]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Swimming Pool</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reservationCategories.pool.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedReservations.includes(item.id)
                        ? "bg-[#800000]/20 border-[#800000]"
                        : "bg-[#2C1B16]/60 border-[#5C4033]/50 hover:border-[#800000]/50"
                    }`}
                    onClick={() => toggleReservation(item.id)}
                  >
                    <h3 className="font-bold text-[#FAF5F0]">{item.name}</h3>
                    <p className="text-[#D7BFA8] text-sm mt-1">{item.description}</p>
                    <div className="mt-2 w-5 h-5 rounded border border-[#5C4033] flex items-center justify-center">
                      {selectedReservations.includes(item.id) && (
                        <svg className="w-4 h-4 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Games Centre */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#5C4033]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Games Centre</h2>
              <p className="text-[#D7BFA8] text-sm mb-4">Fun activities for all ages.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reservationCategories.games.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedReservations.includes(item.id)
                        ? "bg-[#800000]/20 border-[#800000]"
                        : "bg-[#2C1B16]/60 border-[#5C4033]/50 hover:border-[#800000]/50"
                    }`}
                    onClick={() => toggleReservation(item.id)}
                  >
                    <h3 className="font-bold text-[#FAF5F0]">{item.name}</h3>
                    <p className="text-[#D7BFA8] text-sm mt-1">{item.description}</p>
                    <div className="mt-2 w-5 h-5 rounded border border-[#5C4033] flex items-center justify-center">
                      {selectedReservations.includes(item.id) && (
                        <svg className="w-4 h-4 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-4">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 bg-[#2C1B16]/80 hover:bg-[#3D2517] text-[#D7BFA8] font-bold rounded-full border border-[#5C4033]/50"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-8 py-3 bg-[#800000] hover:bg-[#A04040] text-white font-bold rounded-full shadow-lg"
              >
                Continue to Guest Details
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Guest Info & Summary */}
        {step === 3 && !showConfirmation && (
          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {/* Guest Info */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#5C4033]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Guest Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#D7BFA8] text-sm mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={guestInfo.name}
                    onChange={(e) => setGuestInfo({...guestInfo, name: e.target.value})}
                    className="w-full px-3 py-2 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] text-sm mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={guestInfo.email}
                    onChange={(e) => setGuestInfo({...guestInfo, email: e.target.value})}
                    className="w-full px-3 py-2 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                    placeholder="Name@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] text-sm mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo({...guestInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] focus:border-[#800000] focus:outline-none"
                    placeholder="0727000027"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-[#D7BFA8] text-sm mb-1">Special Requests (Optional)</label>
                <textarea
                  value={guestInfo.specialRequests}
                  onChange={(e) => setGuestInfo({...guestInfo, specialRequests: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 bg-[#2C1B16]/60 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] focus:border-[#800000] focus:outline-none resize-none"
                  placeholder="E.g., early check-in, ground floor room..."
                />
              </div>
            </div>

            {/* Reservation Summary (NO PRICING) */}
            <div className="bg-[#3D2517]/70 backdrop-blur-md rounded-3xl p-6 border-2 border-[#800000]/50">
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-4">Your Reservations</h2>
              <div className="space-y-3 text-[#F8F3EF]">
                {selectedRoom && (
                  <div className="py-2 border-b border-[#5C4033]/30">
                    <span className="font-medium">Room:</span> {roomTypes.find(r => r.id === selectedRoom)?.name}
                  </div>
                )}
                {checkIn && checkOut && (
                  <div className="py-2 border-b border-[#5C4033]/30">
                    <span className="font-medium">Dates:</span> {new Date(checkIn).toLocaleDateString()} – {new Date(checkOut).toLocaleDateString()} ({calculateNights()} night{calculateNights() !== 1 ? 's' : ''})
                  </div>
                )}
                {(adults > 0 || minorCount > 0 || childrenCount > 0 || infantCount > 0) && (
                  <div className="py-2 border-b border-[#5C4033]/30">
                    <span className="font-medium">Guests:</span> {adults} Adult{adults !== 1 ? 's' : ''}{minorCount > 0 ? `, ${minorCount} Minor${minorCount !== 1 ? 's' : ''}` : ''}{childrenCount > 0 ? `, ${childrenCount} Child${childrenCount !== 1 ? 'ren' : ''}` : ''}{infantCount > 0 ? `, ${infantCount} Infant${infantCount !== 1 ? 's' : ''}` : ''}
                  </div>
                )}
                {selectedReservations.length > 0 ? (
                  selectedReservations.map(id => {
                    const item = getReservationDetails(id);
                    const category = getCategoryName(id);
                    return (
                      <div key={id} className="py-2 border-b border-[#5C4033]/30">
                        <span className="font-medium">{category}:</span> {item?.name}
                      </div>
                    );
                  })
                ) : (
                  <div className="py-2 text-[#A9745B] italic">No additional reservations selected</div>
                )}
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-4">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-[#2C1B16]/80 hover:bg-[#3D2517] text-[#D7BFA8] font-bold rounded-full border border-[#5C4033]/50"
              >
                ← Back
              </button>
              <button
                onClick={handleBooking}
                disabled={!guestInfo.name || !guestInfo.email || !guestInfo.phone}
                className="px-8 py-3 bg-[#800000] hover:bg-[#A04040] disabled:bg-[#5C4033] text-white font-bold rounded-full shadow-lg disabled:cursor-not-allowed"
              >
                Confirm Reservation
              </button>
            </div>

            <div className="text-center text-[#D7BFA8] text-xs mt-4">
              <p>By confirming, you agree to our <Link href="/terms" className="text-[#800000] underline">Terms & Conditions</Link></p>
              <p className="mt-1">Questions? Call us at <strong className="text-[#FAF5F0]">0727000027</strong></p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingPage;