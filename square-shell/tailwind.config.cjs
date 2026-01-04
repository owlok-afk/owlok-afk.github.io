import { colors as customColors } from "./src/config/colors.js";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    darkMode: "class",

    theme: {
        extend: {
            colors: {
                darkBlue: customColors.darkBlue,
                cyan: customColors.cyan,
                purple: customColors.purple,
                pink: customColors.pink,
                neonGreen: customColors.neonGreen,
                softWhite: customColors.softWhite,
                softPurple: customColors.softPurple,
            },

            fontFamily: {
                inter: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                urbanist: ["Urbanist", "sans-serif"],
                sora: ["Sora", "sans-serif"],
            },

            // ⭐️ Animaciones personalizadas
            keyframes: {
                slideUp: {
                    "0%": { opacity: 0, transform: "translateY(40px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },

            animation: {
                slideUp: "slideUp 0.8s ease-out forwards",
            },
        },
    },

    plugins: [],
};
