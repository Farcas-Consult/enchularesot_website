"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const S3_BASE = "https://enchula-resort-4376242942.s3.eu-west-1.amazonaws.com/app";

type OccupancyType = "single" | "double";
type MealPlan = "bedBreakfast" | "halfBoard" | "fullBoard";

const roomTypes = [
  {
    id: 1,
    name: "Standard Room",
    capacity: "2 Adults",
    size: "30 m2",
    beds: "1 Queen Bed",
    images: [`${S3_BASE}/Room8.jpg`],
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning", "Private Bathroom", "Mountain View"],
    available: true,
    pricing: {
      kenyans: {
        single: { bedBreakfast: 7000, halfBoard: 9000, fullBoard: 11000 },
        double: { bedBreakfast: 10000, halfBoard: 12000, fullBoard: 14000 },
      },
      nonResidents: {
        single: { bedBreakfast: 9000, halfBoard: 11000, fullBoard: 13000 },
        double: { bedBreakfast: 12000, halfBoard: 14000, fullBoard: 16000 },
      },
    },
  },
  {
    id: 2,
    name: "Twin Room",
    capacity: "2 Adults",
    size: "26 m2",
    beds: "2 Single Beds",
    images: [`${S3_BASE}/Room6.jpg`],
    amenities: ["Free Wi-Fi", "TV", "Air Conditioning", "Private Bathroom", "Garden View"],
    available: true,
    pricing: {
      kenyans: {
        single: { bedBreakfast: 7000, halfBoard: 9000, fullBoard: 11000 },
        double: { bedBreakfast: 10000, halfBoard: 12000, fullBoard: 14000 },
      },
      nonResidents: {
        single: { bedBreakfast: 9000, halfBoard: 11000, fullBoard: 13000 },
        double: { bedBreakfast: 12000, halfBoard: 14000, fullBoard: 16000 },
      },
    },
  },
  {
    id: 3,
    name: "Superior Room",
    capacity: "2 Adults",
    size: "35 m2",
    beds: "1 King/2 Twin Beds",
    images: [`${S3_BASE}/Room4.jpg`],
    amenities: ["Free Wi-Fi", "Smart TV", "Air Conditioning", "Luxury Bathroom", "Mini Bar", "Premium View"],
    available: true,
    pricing: {
      kenyans: {
        single: { bedBreakfast: 10000, halfBoard: 12000, fullBoard: 14000 },
        double: { bedBreakfast: 12000, halfBoard: 14000, fullBoard: 16000 },
      },
      nonResidents: {
        single: { bedBreakfast: 12000, halfBoard: 14000, fullBoard: 16000 },
        double: { bedBreakfast: 14000, halfBoard: 16000, fullBoard: 18000 },
      },
    },
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

const categoryLabels: Record<keyof typeof reservationCategories, string> = {
  conference: "Conference Packages",
  dining: "Dining Packages",
  wellness: "Wellness & Spa",
  gym: "Gym & Fitness",
  pool: "Swimming Pool",
  games: "Games Centre",
};

const categoryDescriptions: Record<keyof typeof reservationCategories, string> = {
  conference: "Professional conference facilities with complete amenities for corporate events.",
  dining: "Add meal packages and dining options to your stay.",
  wellness: "Select spa and wellness services for a restorative visit.",
  gym: "Stay active with Enchula's fitness facilities.",
  pool: "Add pool access or a private pool session.",
  games: "Choose indoor games and recreation options.",
};

const mealPlanLabels: Record<MealPlan, string> = {
  bedBreakfast: "Bed & Breakfast",
  halfBoard: "Half Board",
  fullBoard: "Full Board",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');

  :root {
    --brown:      #8F5F2F;
    --brown-dark: #4A2400;
    --brown-deep: #5C4033;
    --gold:       #B99A66;
    --sand:       #D2BB9E;
    --blush:      #D7BFA8;
    --peach:      #FFD3A3;
    --cream:      #FAF6F0;
    --white:      #FFFFFF;
    --font-serif: 'Cormorant Garamond', Georgia, serif;
    --font-sans:  'Jost', system-ui, sans-serif;
    --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bp-root {
    min-height: 100vh;
    background: var(--cream);
    color: var(--brown-dark);
    font-family: var(--font-sans);
  }

  .bp-shell {
    width: min(1180px, calc(100% - 3rem));
    margin: 0 auto;
    padding: 5rem 0 6rem;
  }

  .bp-top {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(260px, .45fr);
    gap: 3rem;
    align-items: end;
    margin-bottom: 2.5rem;
  }

  .bp-eyebrow {
    display: flex;
    align-items: center;
    gap: .75rem;
    color: var(--brown);
    font-size: .68rem;
    font-weight: 600;
    letter-spacing: .22em;
    margin-bottom: .8rem;
    text-transform: uppercase;
  }

  .bp-eyebrow::before {
    content: '';
    width: 24px;
    height: 1px;
    background: var(--gold);
  }

  .bp-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(3rem, 6vw, 5.4rem);
    font-weight: 300;
    line-height: .98;
    margin: 0;
  }

  .bp-title em {
    color: var(--brown);
    font-style: italic;
  }

  .bp-lead {
    color: rgba(74,36,0,.72);
    line-height: 1.85;
    margin: 1.25rem 0 0;
    max-width: 680px;
  }

  .bp-meta {
    display: grid;
    gap: 1px;
    background: var(--sand);
  }

  .bp-meta-item {
    background: var(--white);
    padding: 1.1rem;
  }

  .bp-meta-item strong {
    display: block;
    color: var(--brown);
    font-size: .68rem;
    letter-spacing: .15em;
    margin-bottom: .35rem;
    text-transform: uppercase;
  }

  .bp-meta-item span {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 1.25rem;
  }

  .bp-progress {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    background: var(--sand);
    margin-bottom: 2rem;
  }

  .bp-step {
    background: var(--white);
    border: 0;
    color: rgba(74,36,0,.6);
    display: flex;
    gap: .8rem;
    align-items: center;
    padding: 1rem;
    text-align: left;
  }

  .bp-step-number {
    align-items: center;
    background: var(--cream);
    color: var(--brown);
    display: flex;
    flex: 0 0 auto;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    height: 38px;
    justify-content: center;
    width: 38px;
  }

  .bp-step.bp-active {
    background: var(--brown-dark);
    color: var(--peach);
  }

  .bp-step.bp-active .bp-step-number {
    background: var(--peach);
    color: var(--brown-dark);
  }

  .bp-step strong {
    display: block;
    font-size: .7rem;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .bp-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 330px;
    gap: 2rem;
    align-items: start;
  }

  .bp-main,
  .bp-side {
    display: grid;
    gap: 1.25rem;
  }

  .bp-side {
    position: sticky;
    top: 6rem;
  }

  .bp-panel {
    background: var(--white);
    padding: clamp(1.4rem, 3vw, 2rem);
  }

  .bp-panel-dark {
    background: var(--brown-dark);
    color: var(--peach);
  }

  .bp-panel-title {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 2.7rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 0 1.25rem;
  }

  .bp-panel-dark .bp-panel-title {
    color: var(--white);
  }

  .bp-subcopy {
    color: rgba(74,36,0,.72);
    line-height: 1.7;
    margin: -.65rem 0 1.25rem;
  }

  .bp-panel-dark .bp-subcopy,
  .bp-panel-dark .bp-summary-value {
    color: rgba(255,211,163,.78);
  }

  .bp-grid {
    display: grid;
    gap: 1rem;
  }

  .bp-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .bp-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .bp-grid-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .bp-field label,
  .bp-field-label {
    color: var(--brown);
    display: block;
    font-size: .7rem;
    font-weight: 700;
    letter-spacing: .13em;
    margin-bottom: .5rem;
    text-transform: uppercase;
  }

  .bp-input,
  .bp-textarea {
    background: var(--cream);
    border: 1px solid rgba(143,95,47,.22);
    color: var(--brown-dark);
    font-family: var(--font-sans);
    font-size: .95rem;
    outline: none;
    padding: .9rem 1rem;
    width: 100%;
  }

  .bp-input:focus,
  .bp-textarea:focus {
    border-color: var(--brown);
  }

  .bp-textarea {
    min-height: 110px;
    resize: vertical;
  }

  .bp-counter {
    align-items: center;
    background: var(--cream);
    border: 1px solid rgba(143,95,47,.18);
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: .85rem;
  }

  .bp-counter span {
    color: var(--brown-dark);
    font-size: .9rem;
  }

  .bp-counter-controls {
    align-items: center;
    display: flex;
    gap: .55rem;
  }

  .bp-counter-btn {
    align-items: center;
    background: var(--brown-dark);
    border: 0;
    color: var(--peach);
    cursor: pointer;
    display: flex;
    height: 28px;
    justify-content: center;
    width: 28px;
  }

  .bp-pill-grid {
    display: grid;
    gap: .65rem;
  }

  .bp-pill-grid.bp-two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .bp-pill-grid.bp-three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .bp-pill {
    background: var(--cream);
    border: 1px solid rgba(143,95,47,.22);
    color: var(--brown-dark);
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: .76rem;
    font-weight: 700;
    letter-spacing: .1em;
    min-height: 46px;
    padding: .75rem;
    text-transform: uppercase;
  }

  .bp-pill.bp-selected {
    background: var(--brown-dark);
    border-color: var(--brown-dark);
    color: var(--peach);
  }

  .bp-room-list {
    display: grid;
    gap: 1rem;
  }

  .bp-room {
    background: var(--cream);
    border: 1px solid rgba(143,95,47,.18);
    cursor: pointer;
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    min-height: 190px;
    overflow: hidden;
    text-align: left;
    transition: border-color .25s var(--ease-out), transform .25s var(--ease-out), background .25s var(--ease-out);
  }

  .bp-room:hover,
  .bp-room.bp-selected {
    background: var(--white);
    border-color: var(--brown);
    transform: translateY(-2px);
  }

  .bp-room-media {
    background: var(--sand);
    min-height: 190px;
    overflow: hidden;
    position: relative;
  }

  .bp-room-img {
    object-fit: cover;
    filter: saturate(.88) sepia(.08) contrast(.94) brightness(.98);
    transition: transform .8s var(--ease-out);
  }

  .bp-room:hover .bp-room-img {
    transform: scale(1.04);
  }

  .bp-room-body {
    padding: 1.25rem;
  }

  .bp-room-name {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 2rem;
    font-weight: 300;
    line-height: 1;
    margin: 0 0 .6rem;
  }

  .bp-room-facts,
  .bp-amenities {
    display: flex;
    flex-wrap: wrap;
    gap: .45rem;
  }

  .bp-room-facts span,
  .bp-amenities span,
  .bp-summary-tag {
    border: 1px solid rgba(143,95,47,.2);
    color: var(--brown-deep);
    font-size: .72rem;
    padding: .38rem .55rem;
  }

  .bp-amenities {
    margin-top: .85rem;
  }

  .bp-price {
    border-top: 1px solid rgba(143,95,47,.18);
    color: var(--brown);
    font-size: 1.25rem;
    font-weight: 800;
    margin-top: 1rem;
    padding-top: 1rem;
  }

  .bp-price span {
    color: rgba(74,36,0,.65);
    font-size: .78rem;
    font-weight: 500;
  }

  .bp-option-grid {
    display: grid;
    gap: .8rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .bp-option-grid.bp-three-cols {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .bp-option {
    background: var(--cream);
    border: 1px solid rgba(143,95,47,.18);
    color: var(--brown-dark);
    cursor: pointer;
    min-height: 128px;
    padding: 1rem;
    text-align: left;
    transition: background .25s var(--ease-out), border-color .25s var(--ease-out), transform .25s var(--ease-out);
  }

  .bp-option:hover,
  .bp-option.bp-selected {
    background: var(--peach);
    border-color: var(--brown);
    transform: translateY(-2px);
  }

  .bp-option h3 {
    color: var(--brown-dark);
    font-family: var(--font-serif);
    font-size: 1.35rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 0 0 .55rem;
  }

  .bp-option p {
    color: rgba(74,36,0,.72);
    line-height: 1.55;
    margin: 0;
  }

  .bp-check {
    align-items: center;
    border: 1px solid rgba(74,36,0,.35);
    display: flex;
    height: 22px;
    justify-content: center;
    margin-top: .9rem;
    width: 22px;
  }

  .bp-option.bp-selected .bp-check {
    background: var(--brown-dark);
    color: var(--peach);
  }

  .bp-nav {
    display: flex;
    gap: .75rem;
    justify-content: flex-end;
    margin-top: .75rem;
  }

  .bp-btn {
    align-items: center;
    background: var(--peach);
    border: 1px solid rgba(143,95,47,.35);
    color: var(--brown-dark);
    cursor: pointer;
    display: inline-flex;
    font-family: var(--font-sans);
    font-size: .72rem;
    font-weight: 800;
    justify-content: center;
    letter-spacing: .13em;
    min-height: 46px;
    padding: .85rem 1.25rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: background .25s var(--ease-out), color .25s var(--ease-out), transform .25s var(--ease-out);
  }

  .bp-btn:hover {
    background: var(--gold);
    transform: translateY(-2px);
  }

  .bp-btn-dark {
    background: var(--brown-dark);
    border-color: var(--brown-dark);
    color: var(--peach);
  }

  .bp-btn:disabled {
    cursor: not-allowed;
    opacity: .5;
    transform: none;
  }

  .bp-summary-list {
    display: grid;
    gap: 1px;
    background: rgba(255,211,163,.18);
  }

  .bp-summary-item {
    background: rgba(255,255,255,.06);
    padding: 1rem;
  }

  .bp-summary-label {
    color: var(--gold);
    display: block;
    font-size: .66rem;
    font-weight: 700;
    letter-spacing: .14em;
    margin-bottom: .35rem;
    text-transform: uppercase;
  }

  .bp-summary-value {
    color: var(--brown-dark);
    line-height: 1.55;
  }

  .bp-confirmation {
    background: var(--brown-dark);
    color: var(--peach);
    margin: 4rem auto;
    max-width: 680px;
    padding: 3rem;
    text-align: center;
  }

  .bp-confirmation h2 {
    color: var(--white);
    font-family: var(--font-serif);
    font-size: clamp(2.3rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    margin: 0 0 1rem;
  }

  .bp-confirmation p {
    color: rgba(255,211,163,.8);
    line-height: 1.75;
    margin: .55rem 0;
  }

  .bp-terms {
    color: rgba(74,36,0,.68);
    font-size: .83rem;
    line-height: 1.7;
    margin-top: 1rem;
    text-align: center;
  }

  .bp-terms a {
    color: var(--brown);
    font-weight: 700;
  }

  @media (max-width: 980px) {
    .bp-shell {
      width: min(100% - 2rem, 740px);
      padding: 4rem 0;
    }

    .bp-top,
    .bp-layout {
      grid-template-columns: 1fr;
    }

    .bp-side {
      position: static;
      order: -1;
    }

    .bp-grid-4,
    .bp-grid-3,
    .bp-grid-2,
    .bp-option-grid,
    .bp-option-grid.bp-three-cols {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .bp-title {
      font-size: clamp(2.55rem, 13vw, 3.6rem);
    }

    .bp-progress {
      grid-template-columns: 1fr;
    }

    .bp-step {
      min-height: 60px;
    }

    .bp-pill-grid.bp-two,
    .bp-pill-grid.bp-three {
      grid-template-columns: 1fr;
    }

    .bp-room {
      grid-template-columns: 1fr;
    }

    .bp-room-media {
      min-height: 230px;
    }

    .bp-nav {
      flex-direction: column;
    }

    .bp-btn {
      width: 100%;
    }
  }
`;

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [isKenyanResident, setIsKenyanResident] = useState(true);
  const [occupancyType, setOccupancyType] = useState<OccupancyType>("double");
  const [mealPlan, setMealPlan] = useState<MealPlan>("bedBreakfast");
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
  const today = new Date().toISOString().split("T")[0];

  const selectedRoomData = selectedRoom ? roomTypes.find((room) => room.id === selectedRoom) : null;
  const currentRate = selectedRoomData
    ? selectedRoomData.pricing[isKenyanResident ? "kenyans" : "nonResidents"][occupancyType][mealPlan]
    : null;

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.max(0, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
  };

  const toggleReservation = (id: string) => {
    setSelectedReservations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCategoryName = (id: string) => {
    for (const [category, items] of Object.entries(reservationCategories)) {
      if (items.some((item) => item.id === id)) {
        return categoryLabels[category as keyof typeof reservationCategories];
      }
    }
    return "Other";
  };

  const getReservationDetails = (id: string) => {
    for (const items of Object.values(reservationCategories)) {
      const item = items.find((entry) => entry.id === id);
      if (item) return item;
    }
    return null;
  };

  const handleBooking = async () => {
    if (guestInfo.name && guestInfo.email && guestInfo.phone) {
      const bookingData = {
        guestName: guestInfo.name,
        guestEmail: guestInfo.email,
        guestPhone: guestInfo.phone,
        checkIn,
        checkOut,
        nights: calculateNights(),
        roomType: selectedRoomData?.name || "N/A",
        isKenyanResident,
        occupancyType,
        mealPlan,
        adults,
        minors: minorCount,
        children: childrenCount,
        infants: infantCount,
        additionalServices: selectedReservations.map((id) => {
          const details = getReservationDetails(id);
          return {
            category: getCategoryName(id),
            name: details?.name || id,
            description: details?.description || "",
          };
        }),
        specialRequests: guestInfo.specialRequests,
      };

      try {
        const response = await fetch("/api/send-booking-confirmation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
          alert("Failed to send confirmation. Please contact us directly.");
        }
      } catch (error) {
        console.error("Booking error:", error);
        alert("An error occurred. Please try again or contact us directly.");
      }
    }
  };

  const guestsText = `${adults} adult${adults !== 1 ? "s" : ""}${minorCount ? `, ${minorCount} minor${minorCount !== 1 ? "s" : ""}` : ""}${childrenCount ? `, ${childrenCount} child${childrenCount !== 1 ? "ren" : ""}` : ""}${infantCount ? `, ${infantCount} infant${infantCount !== 1 ? "s" : ""}` : ""}`;

  return (
    <section id="booking" className="bp-root">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="bp-shell">
        <div className="bp-top">
          <div>
            <div className="bp-eyebrow">Booking</div>
            <h1 className="bp-title">
              Reserve your <em>Enchula stay</em>
            </h1>
            <p className="bp-lead">
              Choose your dates, room, meal plan, and any extras in one calm booking flow. The
              team will confirm your request by email and SMS.
            </p>
          </div>
          <div className="bp-meta">
            <div className="bp-meta-item">
              <strong>Location</strong>
              <span>Nairobi-Namanga Rd, Kajiado</span>
            </div>
            <div className="bp-meta-item">
              <strong>Check-in / Check-out</strong>
              <span>12:00 PM / 10:30 AM</span>
            </div>
          </div>
        </div>

        {showConfirmation ? (
          <div className="bp-confirmation">
            <div className="bp-eyebrow" style={{ justifyContent: "center" }}>Confirmed</div>
            <h2>Reservation request received.</h2>
            <p>Thank you, {guestInfo.name}. Your booking request has been sent to the team.</p>
            <p>
              A confirmation email has been sent to <strong>{guestInfo.email}</strong>, and an SMS
              will be sent to <strong>{guestInfo.phone}</strong>.
            </p>
          </div>
        ) : (
          <>
            <div className="bp-progress" aria-label="Booking steps">
              {[
                ["Stay", "Dates and room"],
                ["Extras", "Add reservations"],
                ["Guest", "Contact details"],
              ].map(([title, label], index) => (
                <div className={`bp-step ${step >= index + 1 ? "bp-active" : ""}`} key={title}>
                  <span className="bp-step-number">{index + 1}</span>
                  <span>
                    <strong>{title}</strong>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bp-layout">
              <div className="bp-main">
                {step === 1 && (
                  <>
                    <div className="bp-panel">
                      <h2 className="bp-panel-title">Your stay</h2>
                      <div className="bp-grid bp-grid-4">
                        <div className="bp-field">
                          <label htmlFor="check-in">Check-in</label>
                          <input
                            id="check-in"
                            type="date"
                            min={today}
                            value={checkIn}
                            onChange={(event) => setCheckIn(event.target.value)}
                            className="bp-input"
                          />
                        </div>
                        <div className="bp-field">
                          <label htmlFor="check-out">Check-out</label>
                          <input
                            id="check-out"
                            type="date"
                            min={checkIn || today}
                            value={checkOut}
                            onChange={(event) => setCheckOut(event.target.value)}
                            className="bp-input"
                          />
                        </div>
                        {[
                          { label: "Adults (17+)", value: adults, setter: setAdults, max: 6 },
                          { label: "Minors", value: minorCount, setter: setMinorCount, max: 4 },
                          { label: "Children (4-16)", value: childrenCount, setter: setChildrenCount, max: 4 },
                          { label: "Infants (0-3)", value: infantCount, setter: setInfantCount, max: 4 },
                        ].map((guest) => (
                          <div className="bp-counter" key={guest.label}>
                            <span>{guest.label}</span>
                            <div className="bp-counter-controls">
                              <button
                                type="button"
                                className="bp-counter-btn"
                                onClick={() => guest.value > 0 && guest.setter(guest.value - 1)}
                              >
                                -
                              </button>
                              <strong>{guest.value}</strong>
                              <button
                                type="button"
                                className="bp-counter-btn"
                                onClick={() => guest.value < guest.max && guest.setter(guest.value + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bp-panel">
                      <h2 className="bp-panel-title">Pricing options</h2>
                      <div className="bp-grid">
                        <div>
                          <span className="bp-field-label">Residency status</span>
                          <div className="bp-pill-grid bp-two">
                            <button type="button" className={`bp-pill ${isKenyanResident ? "bp-selected" : ""}`} onClick={() => setIsKenyanResident(true)}>
                              Kenyan Resident
                            </button>
                            <button type="button" className={`bp-pill ${!isKenyanResident ? "bp-selected" : ""}`} onClick={() => setIsKenyanResident(false)}>
                              Non-Resident
                            </button>
                          </div>
                        </div>
                        <div>
                          <span className="bp-field-label">Occupancy</span>
                          <div className="bp-pill-grid bp-two">
                            <button type="button" className={`bp-pill ${occupancyType === "single" ? "bp-selected" : ""}`} onClick={() => setOccupancyType("single")}>
                              Single Occupancy
                            </button>
                            <button type="button" className={`bp-pill ${occupancyType === "double" ? "bp-selected" : ""}`} onClick={() => setOccupancyType("double")}>
                              Double Occupancy
                            </button>
                          </div>
                        </div>
                        <div>
                          <span className="bp-field-label">Meal plan</span>
                          <div className="bp-pill-grid bp-three">
                            {(Object.keys(mealPlanLabels) as MealPlan[]).map((plan) => (
                              <button
                                type="button"
                                className={`bp-pill ${mealPlan === plan ? "bp-selected" : ""}`}
                                key={plan}
                                onClick={() => setMealPlan(plan)}
                              >
                                {mealPlanLabels[plan]}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bp-panel">
                      <h2 className="bp-panel-title">Choose your room</h2>
                      <div className="bp-room-list">
                        {roomTypes.map((room) => {
                          const price = room.pricing[isKenyanResident ? "kenyans" : "nonResidents"][occupancyType][mealPlan];
                          return (
                            <button
                              type="button"
                              className={`bp-room ${selectedRoom === room.id ? "bp-selected" : ""}`}
                              key={room.id}
                              onClick={() => setSelectedRoom(room.id)}
                            >
                              <div className="bp-room-media">
                                <Image src={room.images[0]} alt={room.name} fill className="bp-room-img" sizes="(max-width: 640px) 100vw, 190px" />
                              </div>
                              <div className="bp-room-body">
                                <h3 className="bp-room-name">{room.name}</h3>
                                <div className="bp-room-facts">
                                  <span>{room.capacity}</span>
                                  <span>{room.size}</span>
                                  <span>{room.beds}</span>
                                </div>
                                <div className="bp-amenities">
                                  {room.amenities.map((amenity) => (
                                    <span key={amenity}>{amenity}</span>
                                  ))}
                                </div>
                                <div className="bp-price">
                                  Kshs. {price.toLocaleString()} <span>per night</span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bp-nav">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!selectedRoom || !checkIn || !checkOut || calculateNights() <= 0}
                        className="bp-btn bp-btn-dark"
                      >
                        Continue to Extras
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    {Object.entries(reservationCategories).map(([key, items]) => {
                      const categoryKey = key as keyof typeof reservationCategories;
                      return (
                        <div className="bp-panel" key={key}>
                          <h2 className="bp-panel-title">{categoryLabels[categoryKey]}</h2>
                          <p className="bp-subcopy">{categoryDescriptions[categoryKey]}</p>
                          <div className={`bp-option-grid ${key === "gym" ? "bp-three-cols" : ""}`}>
                            {items.map((item) => (
                              <button
                                type="button"
                                key={item.id}
                                className={`bp-option ${selectedReservations.includes(item.id) ? "bp-selected" : ""}`}
                                onClick={() => toggleReservation(item.id)}
                              >
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span className="bp-check">{selectedReservations.includes(item.id) ? "✓" : ""}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}

                    <div className="bp-nav">
                      <button type="button" onClick={() => setStep(1)} className="bp-btn">
                        Back
                      </button>
                      <button type="button" onClick={() => setStep(3)} className="bp-btn bp-btn-dark">
                        Continue to Guest Details
                      </button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="bp-panel">
                      <h2 className="bp-panel-title">Guest information</h2>
                      <div className="bp-grid bp-grid-2">
                        <div className="bp-field">
                          <label htmlFor="guest-name">Full name *</label>
                          <input
                            id="guest-name"
                            type="text"
                            value={guestInfo.name}
                            onChange={(event) => setGuestInfo({ ...guestInfo, name: event.target.value })}
                            className="bp-input"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="bp-field">
                          <label htmlFor="guest-email">Email address *</label>
                          <input
                            id="guest-email"
                            type="email"
                            value={guestInfo.email}
                            onChange={(event) => setGuestInfo({ ...guestInfo, email: event.target.value })}
                            className="bp-input"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="bp-field bp-grid-span">
                          <label htmlFor="guest-phone">Phone number *</label>
                          <input
                            id="guest-phone"
                            type="tel"
                            value={guestInfo.phone}
                            onChange={(event) => setGuestInfo({ ...guestInfo, phone: event.target.value })}
                            className="bp-input"
                            placeholder="0727000027"
                          />
                        </div>
                      </div>
                      <div className="bp-field" style={{ marginTop: "1rem" }}>
                        <label htmlFor="special-requests">Special requests</label>
                        <textarea
                          id="special-requests"
                          value={guestInfo.specialRequests}
                          onChange={(event) => setGuestInfo({ ...guestInfo, specialRequests: event.target.value })}
                          className="bp-textarea"
                          placeholder="Early check-in, ground floor room, dietary requests..."
                        />
                      </div>
                    </div>

                    <div className="bp-panel">
                      <h2 className="bp-panel-title">Final review</h2>
                      <div className="bp-summary-list">
                        <div className="bp-summary-item">
                          <span className="bp-summary-label">Room</span>
                          <span className="bp-summary-value">{selectedRoomData?.name || "No room selected"}</span>
                        </div>
                        <div className="bp-summary-item">
                          <span className="bp-summary-label">Dates</span>
                          <span className="bp-summary-value">
                            {checkIn && checkOut ? `${new Date(checkIn).toLocaleDateString()} - ${new Date(checkOut).toLocaleDateString()} (${calculateNights()} night${calculateNights() !== 1 ? "s" : ""})` : "No dates selected"}
                          </span>
                        </div>
                        <div className="bp-summary-item">
                          <span className="bp-summary-label">Guests</span>
                          <span className="bp-summary-value">{guestsText}</span>
                        </div>
                        <div className="bp-summary-item">
                          <span className="bp-summary-label">Extras</span>
                          <span className="bp-summary-value">
                            {selectedReservations.length
                              ? selectedReservations.map((id) => getReservationDetails(id)?.name || id).join(", ")
                              : "No additional reservations selected"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bp-nav">
                      <button type="button" onClick={() => setStep(2)} className="bp-btn">
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleBooking}
                        disabled={!guestInfo.name || !guestInfo.email || !guestInfo.phone}
                        className="bp-btn bp-btn-dark"
                      >
                        Confirm Reservation
                      </button>
                    </div>

                    <div className="bp-terms">
                      <p>
                        By confirming, you agree to our <Link href="/terms">Terms & Conditions</Link>.
                      </p>
                      <p>Questions? Call us at <strong>0727000027</strong>.</p>
                    </div>
                  </>
                )}
              </div>

              <aside className="bp-side">
                <div className="bp-panel bp-panel-dark">
                  <h2 className="bp-panel-title">Booking snapshot</h2>
                  <p className="bp-subcopy">Your current selections update as you move through the form.</p>
                  <div className="bp-summary-list">
                    <div className="bp-summary-item">
                      <span className="bp-summary-label">Stay length</span>
                      <span className="bp-summary-value">
                        {calculateNights() ? `${calculateNights()} night${calculateNights() !== 1 ? "s" : ""}` : "Select dates"}
                      </span>
                    </div>
                    <div className="bp-summary-item">
                      <span className="bp-summary-label">Room</span>
                      <span className="bp-summary-value">{selectedRoomData?.name || "Choose a room"}</span>
                    </div>
                    <div className="bp-summary-item">
                      <span className="bp-summary-label">Rate</span>
                      <span className="bp-summary-value">{currentRate ? `Kshs. ${currentRate.toLocaleString()} per night` : "Pending room selection"}</span>
                    </div>
                    <div className="bp-summary-item">
                      <span className="bp-summary-label">Guests</span>
                      <span className="bp-summary-value">{guestsText}</span>
                    </div>
                    <div className="bp-summary-item">
                      <span className="bp-summary-label">Extras</span>
                      <span className="bp-summary-value">{selectedReservations.length} selected</span>
                    </div>
                  </div>
                </div>
                <div className="bp-panel">
                  <h2 className="bp-panel-title">Need help?</h2>
                  <p className="bp-copy">
                    Reception can help with room availability, event packages, wellness sessions,
                    and special requests.
                  </p>
                  <div className="bp-nav" style={{ justifyContent: "stretch" }}>
                    <a className="bp-btn" href="tel:+254727000027">Call Reception</a>
                  </div>
                </div>
              </aside>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BookingPage;
