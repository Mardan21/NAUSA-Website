"use client";

import { useState, useEffect } from "react";
import { TOURNAMENT_2025 } from "@/lib/constants";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function TournamentCountdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const calculateTimeLeft = (): TimeLeft | null => {
            const targetDate = new Date(TOURNAMENT_2025.startDate);
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                return null; // Tournament has started
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isClient) {
        return (
            <div className="flex gap-3 sm:gap-4">
                {["DAYS", "HRS", "MIN", "SEC"].map((label) => (
                    <div key={label} className="text-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[70px]">
                            <span className="text-2xl sm:text-3xl font-black text-white">
                                --
                            </span>
                        </div>
                        <span className="text-[10px] sm:text-xs font-bold text-nausa-vanilla mt-1 block">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    if (!timeLeft) {
        return null; // Countdown disappears when tournament starts
    }

    const timeUnits = [
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HRS" },
        { value: timeLeft.minutes, label: "MIN" },
        { value: timeLeft.seconds, label: "SEC" },
    ];

    return (
        <div className="flex gap-2 sm:gap-3">
            {timeUnits.map((unit) => (
                <div key={unit.label} className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-2 sm:px-4 sm:py-3 min-w-[50px] sm:min-w-[70px] border border-white/30">
                        <span className="text-xl sm:text-3xl font-black text-white tabular-nums">
                            {String(unit.value).padStart(2, "0")}
                        </span>
                    </div>
                    <span className="text-[9px] sm:text-xs font-bold text-nausa-vanilla mt-1 block">
                        {unit.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
