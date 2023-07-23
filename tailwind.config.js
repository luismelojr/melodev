import defaultTheme from 'tailwindcss/defaultTheme'
import forms from '@tailwindcss/forms'
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    prefix: 'tw-',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                success: colors.green,
                info: colors.blue,
                warning: colors.amber,
                danger: colors.red,
                default: colors.slate,
                dark: '#313A46',
                light: '#FAFBFE',
                primary: '#095660',
                gray: {
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                },
            },
            backgroundImage: {
                // eslint-disable-next-line quotes
                banner: "url('/assets/images/bg.jpg')",
            },
        },
    },

    plugins: [forms],
}
