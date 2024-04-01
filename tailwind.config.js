/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                logo: '#A06056',
                primary: '#F3EEE8',
                secondary: '#706458',
                'black-title': '#121212',
                'antic-brown': '#534B42'
            },
            fontFamily: {
                merriweather: ['Merriweather', 'serif'],
                varta: ['Varta', 'sans-serif'],
                karla: ['Karla', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/src/assets/hero-bg.jpg')",
            }
        },
    },
    plugins: [],
}