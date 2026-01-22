"use client";
import React from "react";

export default function GymSubscriptionsPage() {
  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-[#FFD3A3] via-[#F8F3EF] to-[#B99A66] py-16 px-4 flex flex-col items-center justify-start">
      <h1 className="text-5xl font-extrabold text-center text-[#8F5F2F] mb-6 font-lora w-full drop-shadow-lg">Enchula Gym & Spa</h1>
      <h2 className="text-3xl font-semibold text-center text-[#B99A66] mb-10 font-serif w-full tracking-wide">Gym Membership Packages 2026</h2>

      {/* Individual Membership Rates */}
      <div className="mb-10 w-full max-w-4xl">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#B99A66] mb-2">Individual Membership Rate</h3>
        </div>
        <div className="rounded-2xl shadow-xl bg-white/90 p-6 border border-[#FFD3A3]">
          <h3 className="text-xl font-bold text-[#B99A66] mb-4">Individual Membership Rate</h3>
          <table className="w-full mb-4 text-base">
            <thead>
              <tr className="bg-[#FFD3A3]">
                <th className="px-4 py-3 text-left text-[#8F5F2F] font-semibold">Type</th>
                <th className="px-4 py-3 text-right text-[#8F5F2F] font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Daily (Per Session)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 1,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">All Classes (Per Session)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 500</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Weekly (7 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 4,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Monthly (30 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 8,500</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Monthly Plus Locker</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 10,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Quarterly (90 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 24,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Quarterly Plus Locker</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 28,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Semi-Annualy (180 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 45,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Annualy (1 Year)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 85,000</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Corporate / Group Membership */}
      <div className="mb-10 w-full max-w-4xl">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#B99A66] mb-2">Corporate / Group Membership</h3>
        </div>
        <div className="rounded-2xl shadow-xl bg-white/90 p-6 border border-[#FFD3A3]">
          <table className="w-full mb-4 text-base">
            <thead>
              <tr className="bg-[#FFD3A3]">
                <th className="px-4 py-3 text-left text-[#8F5F2F] font-semibold">Minimum 10 Pax</th>
                <th className="px-4 py-3 text-right text-[#8F5F2F] font-semibold">Rate Per Person</th>
                <th className="px-4 py-3 text-right text-[#8F5F2F] font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Quarterly (90 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 21,000</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 210,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Semi-Annualy (180 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 40,000</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 400,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Annualy (1 Year)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 75,000</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 750,000</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Couples Gym Membership Rate */}
      <div className="mb-10 w-full max-w-4xl">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#B99A66] mb-2">Couples Gym Membership Rate</h3>
        </div>
        <div className="rounded-2xl shadow-xl bg-white/90 p-6 border border-[#FFD3A3]">
          <table className="w-full mb-4 text-base">
            <thead>
              <tr className="bg-[#FFD3A3]">
                <th className="px-4 py-3 text-left text-[#8F5F2F] font-semibold">Type</th>
                <th className="px-4 py-3 text-right text-[#8F5F2F] font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Monthly (30 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 16,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Quarterly (90 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 45,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Semi-Annualy (180 Days)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 80,000</td></tr>
              <tr className="hover:bg-[#FFF6E9] transition"><td className="px-4 py-3 text-[#4A2400]">Annualy (1 Year)</td><td className="px-4 py-3 text-right text-[#4A2400] font-bold">Ksh 150,000</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center mt-10 w-full max-w-4xl">
        <p className="text-lg text-[#4A2400] mb-4 font-semibold">For more details or to sign up, please contact reception or <a href="tel:+254727000027" className="text-[#4A2400] underline">call 0727 000027</a>.</p>
      </div>
    </div>
  );
}
