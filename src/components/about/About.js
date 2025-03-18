// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                gradientText: 'gradientText 5s linear infinite',
                gradientBackground: 'gradientBackground 10s ease infinite',
            }, keyframes: {
                gradientText: {
                    '0%': {backgroundPosition: '5% 50%'},
                    '50%': {backgroundPosition: '100% 50%'},
                    '100%': {backgroundPosition: '10% 50%'},
                }, gradientBackground: {
                    '0%': {backgroundPosition: '0% 50%'},
                    '50%': {backgroundPosition: '100% 50%'},
                    '100%': {backgroundPosition: '0% 50%'},
                },
            },
        },
    },
};