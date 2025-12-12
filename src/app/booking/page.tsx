
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";
const roomTypes = [
  {
    id: 1,
    name: "Standard Double Room",
    capacity: "2 Adults",
    size: "30 m²",
    beds: "1 Queen Bed",
    images: [
      `${S3_BASE}/IMG_2346.webp`,
      `${S3_BASE}/IMG_2336.webp`,
    ],
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning", "Private Bathroom", "Mountain View"],
    available: true,
    pricing: {
      kenyans: {
        single: { bedBreakfast: 7000, halfBoard: 9000, fullBoard: 11000 },
        double: { bedBreakfast: 10000, halfBoard: 12000, fullBoard: 14000 }
      },
      nonResidents: {
        single: { bedBreakfast: 9000, halfBoard: 11000, fullBoard: 13000 },
        double: { bedBreakfast: 12000, halfBoard: 14000, fullBoard: 16000 }
      }
    }
  },
  {
    id: 2,
    name: "Twin Room",
    capacity: "2 Adults",
    size: "26 m²",
    beds: "2 Single Beds",
    images: [
      `${S3_BASE}/IMG_2321.webp`,
      `${S3_BASE}/IMG_2315.webp`,
    ],
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning", "Private Bathroom", "Garden View"],
    available: true,
    pricing: {
      kenyans: {
        single: { bedBreakfast: 7000, halfBoard: 9000, fullBoard: 11000 },
        double: { bedBreakfast: 10000, halfBoard: 12000, fullBoard: 14000 }
      },
      nonResidents: {
        single: { bedBreakfast: 9000, halfBoard: 11000, fullBoard: 13000 },
        double: { bedBreakfast: 12000, halfBoard: 14000, fullBoard: 16000 }
      }
    }
  },
  {
    id: 3,
    name: "Superior Room",
    capacity: "2 Adults",
    size: "35 m²",
    beds: "1 King/2 Twin Beds",
    images: [
      `${S3_BASE}/IMG_2300.webp`,
      `${S3_BASE}/IMG_2305.webp`,
    ],
    amenities: ["Free Wi-Fi", "Smart TV", "Air Conditioning", "Luxury Bathroom", "Mini Bar", "Premium View"],
    available: true,
    pricing: {
      kenyans: {
        single: { bedBreakfast: 10000, halfBoard: 12000, fullBoard: 14000 },
        double: { bedBreakfast: 12000, halfBoard: 14000, fullBoard: 16000 }
      },
      nonResidents: {
        single: { bedBreakfast: 12000, halfBoard: 14000, fullBoard: 16000 },
        double: { bedBreakfast: 14000, halfBoard: 16000, fullBoard: 18000 }
      }
    }
  },
];

const reservationCategories = {
  conference: [
    { id: "conf-full", name: "Full Day Conference", description: "Kshs. 4,000/participant - Includes conference room, meals, materials & projector" },
    { id: "conf-half", name: "Half Day Conference", description: "Kshs. 3,500/participant - Conference facilities with refreshments" },
    { id: "pa-system", name: "PA System Rental", description: "Kshs. 10,000 per day" },
  ],
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
    { id: "gym-weekly", name: "Gym Weekly subscription", description: "7 days unlimited access" },
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
  const [isKenyanResident, setIsKenyanResident] = useState(true);
  const [occupancyType, setOccupancyType] = useState<'single' | 'double'>('double');
  const [mealPlan, setMealPlan] = useState<'bedBreakfast' | 'halfBoard' | 'fullBoard'>('bedBreakfast');
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

  const handleBooking = async () => {
    if (guestInfo.name && guestInfo.email && guestInfo.phone) {
      // Prepare booking data
      const bookingData = {
        guestName: guestInfo.name,
        guestEmail: guestInfo.email,
        guestPhone: guestInfo.phone,
        checkIn: checkIn,
        checkOut: checkOut,
        nights: calculateNights(),
        roomType: selectedRoom ? roomTypes.find(r => r.id === selectedRoom)?.name : 'N/A',
        isKenyanResident: isKenyanResident,
        occupancyType: occupancyType,
        mealPlan: mealPlan,
        adults: adults,
        minors: minorCount,
        children: childrenCount,
        infants: infantCount,
        additionalServices: selectedReservations.map(id => {
          const details = getReservationDetails(id);
          return {
            category: getCategoryName(id),
            name: details?.name || id,
            description: details?.description || ''
          };
        }),
        specialRequests: guestInfo.specialRequests,
      };

      try {
        // Send email/SMS notification
        const response = await fetch('/api/send-booking-confirmation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });

        if (response.ok) {
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
        } else {
          alert('Failed to send confirmation. Please contact us directly.');
        }
      } catch (error) {
        console.error('Booking error:', error);
        alert('An error occurred. Please try again or contact us directly.');
      }
    }
  };

  return (
    <section
      id="booking"
      className="relative py-12 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden bg-cover bg-center bg-fixed booking-bg"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#2E1A15]/90 via-[#2C1B16]/85 to-[#2E1A15]/95"></div>

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col">
        {/* Header with Badge */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4 px-6 py-2 bg-[#5C4033]/20 backdrop-blur-sm rounded-full border border-[#800000]/30">
            <span className="text-[#D7BFA8] font-semibold tracking-wide text-sm uppercase">
              BOOKING
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#FAF5F0] mb-6 leading-tight">
            Reserve Your <span className="bg-linear-to-r from-[#A04040] via-[#A9745B] to-[#D7BFA8] bg-clip-text text-transparent">Experience</span>
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
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                    step >= s
                      ? "bg-[#800000] text-white"
                      : "bg-[#2C1B16] text-[#D7BFA8] border border-[#5C4033]/50"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-10 h-0.5 mx-2 ${
                      step > s ? "bg-[#800000]" : "bg-[#5C4033]/50"
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
            <div className="bg-[#2C1B16]/80 backdrop-blur-md rounded-2xl p-8 border border-[#800000]/50 text-center max-w-md w-full">
              <span className="text-4xl mb-4 block">🎉</span>
              <h2 className="text-2xl font-bold text-[#FAF5F0] mb-3">Reservation Confirmed!</h2>
              <p className="text-[#D7BFA8] mb-3">
                Thank you, {guestInfo.name}! Your request has been received.
              </p>
              <p className="text-[#F8F3EF] text-sm mb-2">
                A confirmation email has been sent to <strong>{guestInfo.email}</strong>
              </p>
              <p className="text-[#F8F3EF] text-sm">
                You&apos;ll also receive an SMS at <strong>{guestInfo.phone}</strong> with your booking details.
              </p>
            </div>
          </div>
        )}

        {/* Step 1: Dates, Room & Guests */}
        {step === 1 && !showConfirmation && (
          <div className="flex-1 overflow-y-auto space-y-6 pr-1">
            {/* Date & Guests */}
            <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30">
              <h2 className="text-xl font-bold text-[#FAF5F0] mb-4">Your Stay</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[#D7BFA8] text-xs mb-1">Check-in</label>
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    aria-label="check in date"
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 bg-[#2C1B16]/80 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] text-sm focus:border-[#800000] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] text-xs mb-1">Check-out</label>
                  <input
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    aria-label="check out date"
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 bg-[#2C1B16]/80 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] text-sm focus:border-[#800000] focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[#D7BFA8] text-xs mb-2">Guests</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Adults (17+)", value: adults, setter: setAdults, max: 6 },
                      { label: "Minors (12–17)", value: minorCount, setter: setMinorCount, max: 4 },
                      { label: "Children (2–12)", value: childrenCount, setter: setChildrenCount, max: 4 },
                      { label: "Infants (0–2)", value: infantCount, setter: setInfantCount, max: 4 },
                    ].map((g, i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-[#2C1B16]/80 rounded-lg border border-[#5C4033]/50">
                        <span className="text-[#FAF5F0] text-xs">{g.label}</span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => g.value > 0 && g.setter(g.value - 1)}
                            className="w-6 h-6 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-xs"
                          >
                            -
                          </button>
                          <span className="w-5 text-center text-[#FAF5F0] text-sm">{g.value}</span>
                          <button
                            onClick={() => g.value < g.max && g.setter(g.value + 1)}
                            className="w-6 h-6 flex items-center justify-center bg-[#3D2517] text-[#D7BFA8] rounded text-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {checkIn && checkOut && (
                <div className="mt-3 p-2 bg-[#2C1B16]/80 rounded-lg border border-[#800000]/30">
                  <p className="text-[#FAF5F0] text-sm">
                    <strong>{calculateNights()} night{calculateNights() !== 1 ? 's' : ''}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Residency Status & Meal Plan */}
            <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30">
              <h2 className="text-xl font-bold text-[#FAF5F0] mb-4">Pricing Options</h2>
              
              {/* Residency Status */}
              <div className="mb-4">
                <label className="block text-[#D7BFA8] text-sm mb-2">Residency Status</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsKenyanResident(true)}
                    className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      isKenyanResident
                        ? "bg-[#800000] text-white"
                        : "bg-[#2C1B16]/80 text-[#D7BFA8] border border-[#5C4033]/50"
                    }`}
                  >
                    Kenyan Resident
                  </button>
                  <button
                    onClick={() => setIsKenyanResident(false)}
                    className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      !isKenyanResident
                        ? "bg-[#800000] text-white"
                        : "bg-[#2C1B16]/80 text-[#D7BFA8] border border-[#5C4033]/50"
                    }`}
                  >
                    Non-Resident
                  </button>
                </div>
              </div>

              {/* Occupancy Type */}
              <div className="mb-4">
                <label className="block text-[#D7BFA8] text-sm mb-2">Occupancy</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setOccupancyType('single')}
                    className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      occupancyType === 'single'
                        ? "bg-[#800000] text-white"
                        : "bg-[#2C1B16]/80 text-[#D7BFA8] border border-[#5C4033]/50"
                    }`}
                  >
                    Single Occupancy
                  </button>
                  <button
                    onClick={() => setOccupancyType('double')}
                    className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                      occupancyType === 'double'
                        ? "bg-[#800000] text-white"
                        : "bg-[#2C1B16]/80 text-[#D7BFA8] border border-[#5C4033]/50"
                    }`}
                  >
                    Double Occupancy
                  </button>
                </div>
              </div>

              {/* Meal Plan */}
              <div>
                <label className="block text-[#D7BFA8] text-sm mb-2">Meal Plan</label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setMealPlan('bedBreakfast')}
                    className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all ${
                      mealPlan === 'bedBreakfast'
                        ? "bg-[#800000] text-white"
                        : "bg-[#2C1B16]/80 text-[#D7BFA8] border border-[#5C4033]/50"
                    }`}
                  >
                    Bed & Breakfast
                  </button>
                  <button
                    onClick={() => setMealPlan('halfBoard')}
                    className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all ${
                      mealPlan === 'halfBoard'
                        ? "bg-[#800000] text-white"
                        : "bg-[#2C1B16]/80 text-[#D7BFA8] border border-[#5C4033]/50"
                    }`}
                  >
                    Half Board
                  </button>
                  <button
                    onClick={() => setMealPlan('fullBoard')}
                    className={`px-3 py-2 rounded-lg font-semibold text-xs transition-all ${
                      mealPlan === 'fullBoard'
                        ? "bg-[#800000] text-white"
                        : "bg-[#2C1B16]/80 text-[#D7BFA8] border border-[#5C4033]/50"
                    }`}
                  >
                    Full Board
                  </button>
                </div>
              </div>
            </div>

            {/* Room Selection */}
            <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30">
              <h2 className="text-xl font-bold text-[#FAF5F0] mb-4">Choose Your Room</h2>
              <div className="space-y-4">
                {roomTypes.map((room) => (
                  <div
                    key={room.id}
                    className={`bg-[#2C1B16]/80 rounded-xl p-4 border cursor-pointer transition-all ${
                      selectedRoom === room.id
                        ? "border-[#800000] shadow-md"
                        : "border-[#5C4033]/30 hover:border-[#800000]/50"
                    }`}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="shrink-0 w-full md:w-32 h-20 rounded-lg overflow-hidden relative">
                        <Image src={room.images[0]} alt={room.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#FAF5F0]">{room.name}</h3>
                        <div className="flex flex-wrap gap-2 text-[#D7BFA8] text-xs mt-1">
                          <span>👤 {room.capacity}</span>
                          <span>📐 {room.size}</span>
                          <span>🛏 {room.beds}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {room.amenities.map((amenity, idx) => (
                            <span key={idx} className="px-1.5 py-0.5 bg-[#4A3426]/60 text-[#F8F3EF] text-[0.65rem] rounded">
                              {amenity}
                            </span>
                          ))}
                        </div>
                        {room.pricing && (
                          <div className="mt-3 pt-3 border-t border-[#5C4033]/30">
                            <p className="text-[#A04040] font-bold text-lg">
                              Kshs. {room.pricing[isKenyanResident ? 'kenyans' : 'nonResidents'][occupancyType][mealPlan].toLocaleString()}
                              <span className="text-[#D7BFA8] text-xs font-normal ml-2">per night</span>
                            </p>
                            <p className="text-[#D7BFA8] text-xs mt-1">
                              {isKenyanResident ? 'Kenyan Resident' : 'Non-Resident'} • {occupancyType === 'single' ? 'Single' : 'Double'} • {mealPlan === 'bedBreakfast' ? 'Bed & Breakfast' : mealPlan === 'halfBoard' ? 'Half Board' : 'Full Board'}
                            </p>
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
                className="px-6 py-2.5 bg-linear-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold rounded-full text-sm transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Continue to Reservations
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Reservation Selection */}
        {step === 2 && !showConfirmation && (
          <div className="flex-1 overflow-y-auto space-y-6 pr-1">
            {Object.entries(reservationCategories).map(([key, items]) => (
              <div
                key={key}
                className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30"
              >
                <h2 className="text-xl font-bold text-[#FAF5F0] mb-3">
                  {key === 'conference' ? 'Conference Packages' :
                   key === 'dining' ? 'Dining Packages' :
                   key === 'wellness' ? 'Wellness & Spa' :
                   key === 'gym' ? 'Gym & Fitness' :
                   key === 'pool' ? 'Swimming Pool' :
                   'Games Centre'}
                </h2>
                <p className="text-[#D7BFA8] text-xs mb-3">
                  {key === 'conference'
                    ? "Professional conference facilities with complete amenities for your corporate events."
                    : key === 'wellness' || key === 'games'
                    ? `Select your preferred ${key} activities.`
                    : key === 'dining'
                    ? "Select your meal plan for the duration of your stay."
                    : key === 'gym'
                    ? "Stay active with our premium fitness facilities."
                    : "Enjoy pool access during your stay."}
                </p>
                <div className={`grid grid-cols-1 ${key === 'gym' ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedReservations.includes(item.id)
                          ? "bg-[#800000]/10 border-[#800000]"
                          : "bg-[#2C1B16]/80 border-[#5C4033]/30 hover:border-[#800000]/50"
                      }`}
                      onClick={() => toggleReservation(item.id)}
                    >
                      <h3 className="font-semibold text-[#FAF5F0] text-sm">{item.name}</h3>
                      <p className="text-[#D7BFA8] text-xs mt-1">{item.description}</p>
                      <div className="mt-2 w-4 h-4 rounded border border-[#5C4033] flex items-center justify-center">
                        {selectedReservations.includes(item.id) && (
                          <svg className="w-3 h-3 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-3 justify-center mt-4">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-2.5 bg-[#2C1B16]/80 hover:bg-[#3D2517] text-[#D7BFA8] font-semibold rounded-full text-sm border border-[#5C4033]/30"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2.5 bg-linear-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold rounded-full text-sm shadow-md"
              >
                Continue to Guest Details
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Guest Info & Summary */}
        {step === 3 && !showConfirmation && (
          <div className="flex-1 overflow-y-auto space-y-6 pr-1">
            {/* Guest Info */}
            <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#5C4033]/30">
              <h2 className="text-xl font-bold text-[#FAF5F0] mb-4">Guest Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#D7BFA8] text-xs mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={guestInfo.name}
                    onChange={(e) => setGuestInfo({...guestInfo, name: e.target.value})}
                    className="w-full px-3 py-2 bg-[#2C1B16]/80 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] focus:border-[#800000] focus:outline-none text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label className="block text-[#D7BFA8] text-xs mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={guestInfo.email}
                    onChange={(e) => setGuestInfo({...guestInfo, email: e.target.value})}
                    className="w-full px-3 py-2 bg-[#2C1B16]/80 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] focus:border-[#800000] focus:outline-none text-sm"
                    placeholder="Name@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[#D7BFA8] text-xs mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo({...guestInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 bg-[#2C1B16]/80 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] focus:border-[#800000] focus:outline-none text-sm"
                    placeholder="0727000027"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-[#D7BFA8] text-xs mb-1">Special Requests (Optional)</label>
                <textarea
                  value={guestInfo.specialRequests}
                  onChange={(e) => setGuestInfo({...guestInfo, specialRequests: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 bg-[#2C1B16]/80 border border-[#5C4033]/50 rounded-lg text-[#FAF5F0] focus:border-[#800000] focus:outline-none text-sm resize-none"
                  placeholder="E.g., early check-in, ground floor room..."
                />
              </div>
            </div>

            {/* Reservation Summary */}
            <div className="bg-[#2C1B16]/60 backdrop-blur-md rounded-2xl p-6 border border-[#800000]/30">
              <h2 className="text-xl font-bold text-[#FAF5F0] mb-4">Your Reservations</h2>
              <div className="space-y-2 text-[#F8F3EF] text-sm">
                {selectedRoom && (
                  <div className="py-1.5 border-b border-[#5C4033]/20">
                    <span className="font-medium">Room:</span> {roomTypes.find(r => r.id === selectedRoom)?.name}
                  </div>
                )}
                {checkIn && checkOut && (
                  <div className="py-1.5 border-b border-[#5C4033]/20">
                    <span className="font-medium">Dates:</span> {new Date(checkIn).toLocaleDateString()} – {new Date(checkOut).toLocaleDateString()} ({calculateNights()} night{calculateNights() !== 1 ? 's' : ''})
                  </div>
                )}
                {(adults > 0 || minorCount > 0 || childrenCount > 0 || infantCount > 0) && (
                  <div className="py-1.5 border-b border-[#5C4033]/20">
                    <span className="font-medium">Guests:</span> {adults} Adult{adults !== 1 ? 's' : ''}{minorCount > 0 ? `, ${minorCount} Minor${minorCount !== 1 ? 's' : ''}` : ''}{childrenCount > 0 ? `, ${childrenCount} Child${childrenCount !== 1 ? 'ren' : ''}` : ''}{infantCount > 0 ? `, ${infantCount} Infant${infantCount !== 1 ? 's' : ''}` : ''}
                  </div>
                )}
                {selectedReservations.length > 0 ? (
                  selectedReservations.map(id => {
                    const item = getReservationDetails(id);
                    const category = getCategoryName(id);
                    return (
                      <div key={id} className="py-1.5 border-b border-[#5C4033]/20">
                        <span className="font-medium">{category}:</span> {item?.name}
                      </div>
                    );
                  })
                ) : (
                  <div className="py-1.5 italic text-[#A9745B]">No additional reservations selected</div>
                )}
              </div>
            </div>

            <div className="flex gap-3 justify-center mt-4">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2.5 bg-[#2C1B16]/80 hover:bg-[#3D2517] text-[#D7BFA8] font-semibold rounded-full text-sm border border-[#5C4033]/30"
              >
                ← Back
              </button>
              <button
                onClick={handleBooking}
                disabled={!guestInfo.name || !guestInfo.email || !guestInfo.phone}
                className="px-6 py-2.5 bg-linear-to-r from-[#800000] to-[#5C4033] hover:from-[#A04040] hover:to-[#6B4423] text-white font-semibold rounded-full text-sm shadow-md disabled:opacity-60"
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