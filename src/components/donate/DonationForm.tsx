"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Heart, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

interface DonationAmount {
  value: number;
  label: string;
  popular?: boolean;
}

interface DonationFrequency {
  value: "once" | "monthly" | "annually";
  label: string;
  description?: string;
}

const donationAmounts: DonationAmount[] = [
  { value: 25, label: "$25" },
  { value: 50, label: "$50" },
  { value: 100, label: "$100", popular: true },
  { value: 250, label: "$250" },
  { value: 500, label: "$500" },
  { value: 1000, label: "$1,000" },
];

const donationFrequencies: DonationFrequency[] = [
  { value: "once", label: "One Time", description: "Make a single donation" },
  {
    value: "monthly",
    label: "Monthly",
    description: "Support us monthly",
  },
  { value: "annually", label: "Annually", description: "Support us yearly" },
];

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedFrequency, setSelectedFrequency] = useState<
    "once" | "monthly" | "annually"
  >("once");
  const [isCustom, setIsCustom] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
  };

  const handleCustomAmount = () => {
    setIsCustom(true);
    setSelectedAmount(0);
  };

  const handleDonate = async () => {
    setLoading(true);
    setError(null);

    const amount = isCustom ? parseInt(customAmount) : selectedAmount;

    if (!amount || amount < 1) {
      setError("Please enter a valid amount");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          frequency: selectedFrequency,
        }),
      });

      const { sessionId, error: apiError } = await response.json();

      if (apiError) {
        setError(apiError);
        setLoading(false);
        return;
      }

      const stripe = await stripePromise;
      if (!stripe) {
        setError("Stripe failed to load");
        setLoading(false);
        return;
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        setError(stripeError.message || "An error occurred");
      }
    } catch {
      setError("Failed to process donation. Please try again.");
    }

    setLoading(false);
  };

  const finalAmount = isCustom ? parseInt(customAmount) || 0 : selectedAmount;

  return (
    <section className="py-20 bg-nausa-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-nausa-lightblue/80 rounded-2xl shadow-xl p-8 md:p-12">
            {/* Amount Selection */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">
                Select Donation Amount
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => handleAmountSelect(amount.value)}
                    className={cn(
                      "relative p-6 rounded-xl font-bold text-lg transition-all",
                      selectedAmount === amount.value && !isCustom
                        ? "bg-nausa-blue text-nausa-vanilla shadow-lg transform scale-105"
                        : "bg-gray-100 hover:bg-gray-200 text-nausa-blue",
                      amount.popular && "ring-2 ring-nausa-gold"
                    )}
                  >
                    {amount.popular && (
                      <span className="absolute top-2 right-2 text-xs bg-nausa-gold text-nausa-blue px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                    {amount.label}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mt-6">
                <button
                  onClick={handleCustomAmount}
                  className={cn(
                    "w-full p-4 rounded-xl font-medium transition-all",
                    isCustom
                      ? "bg-nausa-blue text-nausa-vanilla shadow-lg"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  )}
                >
                  Other Amount
                </button>
                {isCustom && (
                  <div className="mt-4">
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-nausa-vanilla">
                        $
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full pl-12 pr-4 py-4 text-2xl font-bold border-2 border-nausa-vanilla text-nausa-vanilla rounded-lg focus:ring-2 focus:ring-nausa-vanilla focus:border-nausa-vanilla"
                        min="1"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Frequency Selection */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Select Frequency</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {donationFrequencies.map((frequency) => (
                  <button
                    key={frequency.value}
                    onClick={() => setSelectedFrequency(frequency.value)}
                    className={cn(
                      "p-6 rounded-xl text-left transition-all",
                      selectedFrequency === frequency.value
                        ? "bg-nausa-blue text-nausa-vanilla shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-nausa-blue"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg mb-1">
                          {frequency.label}
                        </h3>
                        <p
                          className={cn(
                            "text-sm",
                            selectedFrequency === frequency.value
                              ? "text-nausa-vanilla"
                              : "text-nausa-blue"
                          )}
                        >
                          {frequency.description}
                        </p>
                      </div>
                      {selectedFrequency === frequency.value && (
                        <Check className="w-6 h-6 flex-shrink-0 ml-2 text-nausa-vanilla" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Summary */}
            <div className="bg-gray-50 text-nausa-blue rounded-xl p-6 mb-8">
              <h3 className="font-bold text-xl text-nausa-lightblue mb-3">
                Donation Summary
              </h3>
              <div className="flex justify-between items-center text-xl">
                <span className="font-semibold">Amount:</span>
                <span className="font-bold text-2xl">
                  ${finalAmount || 0}
                  {selectedFrequency === "monthly" && "/month"}
                  {selectedFrequency === "annually" && "/year"}
                </span>
              </div>
              {selectedFrequency !== "once" && (
                <p className="text-sm text-nausa-blue mt-2">
                  You can cancel your recurring donation at any time.
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={loading || !finalAmount || finalAmount < 1}
              className={cn(
                "w-full py-5 rounded-xl font-black text-xl uppercase tracking-wide transition-all flex items-center justify-center gap-3",
                loading || !finalAmount || finalAmount < 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-nausa-blue text-nausa-vanilla hover:bg-nausa-gold hover:text-nausa-blue transform hover:scale-105 shadow-lg"
              )}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Heart className="w-6 h-6" />
                  Donate ${finalAmount || 0}
                  {selectedFrequency === "monthly" && "/month"}
                  {selectedFrequency === "annually" && "/year"}
                </>
              )}
            </button>

            {/* Security Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-nausa-blue">
                🔒 Secure donation powered by Stripe. Your information is
                encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
