"use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
import { Check, Heart } from "lucide-react";
import Link from "next/link";

export default function DonationSuccess() {
  return (
    <div className="min-h-screen bg-nausa-lightblue/40 flex items-center justify-center pt-15 px-4">
      <div className="max-w-md w-full">
        <div className="bg-nausa-lightblue/60 rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-nausa-gold/90 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-nausa-blue" />
          </div>

          <h1 className="text-3xl text-nausa-vanilla/90 font-bold mb-4">
            Thank You!
          </h1>

          <p className="text-nausa-blue mb-8">
            Your generous donation has been received. We truly appreciate your
            support in helping us make a difference.
          </p>

          <div className="bg-nausa-vanilla/80 rounded-lg p-6 mb-8">
            <Heart className="w-8 h-8 text-nausa-blue mx-auto mb-3" />
            <p className="text-sm text-nausa-blue">
              You&apos;ll receive a receipt via email shortly. If you have any
              questions, please don&apos;t hesitate to contact us.
            </p>
          </div>

          <div className="space-y-3">
            <Link
              href="/"
              className="block w-full py-3 px-6 bg-nausa-blue/80 text-nausa-gold rounded-lg font-medium hover:bg-nausa-blue/60 transition-colors"
            >
              Return Home
            </Link>

            <Link
              href="/donate"
              className="block w-full py-3 px-6 bg-nausa-gold/80 text-nausa-blue rounded-lg font-medium hover:bg-nausa-gold/60 transition-colors"
            >
              Make Another Donation
            </Link>
          </div>

          {/* Optional: Social sharing */}
          {/* <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-600 mb-4">
              Help us spread the word
            </p>
            <div className="flex justify-center gap-4">
              Add social sharing buttons here
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
