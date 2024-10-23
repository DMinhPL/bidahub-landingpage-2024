/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cool-black': '#001A69',
        inchworm: '#CCFF66',
        'raisin-black': '#1F2128',
        'blue-ryb': '#0D47F8',
        'imperial-blue': '#002493',
        mindaro: '#DCFD77',
        'neon-fuchsia': '#F5416C',
        'persian-blue': '#0035d7',
        'white-smoke': '#F6F6F6',
      },
      fontFamily: {
        poppins: ['SVN-Poppins', 'sans-serif'],
        svnDay: ['var(--svn-days)'],
      },
      container: {
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1440px',
        },
        padding: '2rem',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    aspectRatio: {
      '360/420': '360 / 420',
    },
    fontSize: {
      ss: '0.6rem', // 9.6px
      xs: '0.625rem', // 10px
      sm: '0.75rem', // 12px
      md: '0.875rem', // 14px
      base: '1rem', // 16x
      lg: '1.125rem', // 18px
      xl: '1.25rem', // H5 20px
      '2xl': '1.5rem', // H4 24px
      '3xl': '2rem', // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '3rem', // H2 // 48px
    },
  },
  plugins: [],
};
