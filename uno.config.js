import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
    ],
    theme: {
        colors: {
            red: {
                500: '#FF0000',  // Primary red color for text and buttons
                600: '#E60000',  // Darker red for hover states
            },
            purple: {
                500: '#7B61FF',  // Primary purple color for highlights
                600: '#5E3EFF',  // Darker purple for hover effects
            },
            gray: {
                800: '#333333',  // Dark gray for primary text
                700: '#4B4B4B',  // Lighter gray for secondary text
                500: '#888888',  // Lighter gray for labels
                200: '#E0E0E0',  // Light gray for borders
            },
            white: '#FFFFFF',
        },
        extend: {
            boxShadow: {
                card: '0 4px 12px rgba(0, 0, 0, 0.1)',  // Custom shadow for card components
                button: '0 6px 16px rgba(0, 0, 0, 0.2)',  // Deeper shadow for buttons
            },
            borderRadius: {
                full: '9999px',  // Fully rounded for pills and buttons
                lg: '12px',      // Large rounding for cards and containers
            },
            fontSize: {
                xl: ['1.5rem', { lineHeight: '2rem' }], // Extra-large font for titles
                lg: ['1.25rem', { lineHeight: '1.75rem' }], // Large font for subtitles
                base: ['1rem', { lineHeight: '1.5rem' }],   // Regular font for body text
            },
            backdropFilter: {
                blur: 'blur(10px)',  // Background blur for frosted glass effect
            },
        },
    },
    shortcuts: {
        'btn-primary': 'bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full shadow-button',
        'btn-secondary': 'bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-full shadow-button',
        'card': 'bg-white shadow-card rounded-lg p-4',
        'text-primary': 'text-gray-800 font-bold',
        'text-secondary': 'text-gray-500',
    },
});
