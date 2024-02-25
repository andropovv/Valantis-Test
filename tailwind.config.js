/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                autofill: 'repeat(auto-fill, minmax(144px, 1fr))',
            },
            flex: {
                'auto-1': '1 0 auto',
                'auto-0': '0 0 auto',
            },
        },
    },
    plugins: [],
};
