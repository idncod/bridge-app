import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
    ],
    theme: {
        colors: {
            estimateColor: '#C7B3DD',
            estimateValue: '#5F259F',
            optionNameColor: '#5F259F',
            red: {
                500: '#FF0000',
                600: '#E60000',
            },
            purple: {
                500: '#7B61FF',
                600: '#5E3EFF',
            },
            gray: {
                800: '#333333',
                700: '#4B4B4B',
                500: '#888888',
                200: '#E0E0E0',
            },
            white: '#FFFFFF',
        },
        extend: {
            typography: {
                estimate: {
                    color: '#C7B3DD',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                },
                estimateValue: {
                    fontSize: '12px',
                },
                optionName: {
                    color: '#5F259F',
                    fontSize: '16px',
                    fontWeight: 'normal',
                }
            },
            boxShadow: {
                card: '0 4px 12px rgba(0, 0, 0, 0.1)',
                button: '0 6px 16px rgba(0, 0, 0, 0.2)',
            },
            borderRadius: {
                full: '9999px',
                lg: '200px',
            },
            fontSize: {
                xl: ['1.5rem', { lineHeight: '2rem' }],
                lg: ['1.25rem', { lineHeight: '1.75rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
            },
            backdropFilter: {
                blur: 'blur(10px)',
            },
        },
    },
    breakpoints: {
      sm: '320px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
    },
    shortcuts: {
        'btn-primary': 'bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full shadow-button',
        'btn-secondary': 'bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-full shadow-button',
        'card': 'bg-white shadow-card rounded-lg p-4',
        'text-primary': 'text-gray-800 font-bold',
        'text-secondary': 'text-gray-500',
        'estimate-text': 'text-estimateColor font-bold uppercase',
        'estimate-value': 'text-estimateValue',
    },
});
