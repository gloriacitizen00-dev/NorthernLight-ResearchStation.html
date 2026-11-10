
/*
==================================================
NORTHERNLIGHT RESEARCH STATION
LUNAR CALCULATOR MODULE
==================================================

Purpose:
Calculate the approximate lunar phase, lunar age
and illuminated percentage.

Reference:
Known New Moon: 2000-01-06 18:14 UTC

Synodic Month: 29.53058867 days
==================================================
*/

(function (global) {

    "use strict";

    const SYNODIC_MONTH = 29.53058867;

    const KNOWN_NEW_MOON = new Date(
        "2000-01-06T18:14:00Z"
    );

    function calculateMoonData(date = new Date()) {

        const millisecondsPerDay =
            1000 * 60 * 60 * 24;

        const elapsedDays =
            (date.getTime() - KNOWN_NEW_MOON.getTime())
            / millisecondsPerDay;

        const lunarAge =
            ((elapsedDays % SYNODIC_MONTH)
            + SYNODIC_MONTH) % SYNODIC_MONTH;

        const phaseFraction =
            lunarAge / SYNODIC_MONTH;

        const illumination =
            (1 - Math.cos(2 * Math.PI * phaseFraction)) / 2;

        const illuminationPercentage =
            illumination * 100;

        let phaseName;

        if (lunarAge < 1.845) {
            phaseName = "New Moon";
        } else if (lunarAge < 5.536) {
            phaseName = "Waxing Crescent";
        } else if (lunarAge < 9.228) {
            phaseName = "First Quarter";
        } else if (lunarAge < 12.919) {
            phaseName = "Waxing Gibbous";
        } else if (lunarAge < 16.610) {
            phaseName = "Full Moon";
        } else if (lunarAge < 20.302) {
            phaseName = "Waning Gibbous";
        } else if (lunarAge < 23.993) {
            phaseName = "Last Quarter";
        } else {
            phaseName = "Waning Crescent";
        }

        return {

            phase: phaseName,

            lunar_age_days:
                Number(lunarAge.toFixed(2)),

            illumination_percentage:
                Number(illuminationPercentage.toFixed(1)),

            phase_fraction:
                Number(phaseFraction.toFixed(4)),

            synodic_month_days:
                SYNODIC_MONTH,

            calculation_date:
                date.toISOString(),

            calculation_method:
                "Synodic month mathematical approximation"

        };
    }

    global.MoonCalculator = {
        calculateMoonData
    };

})(window);
