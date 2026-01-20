import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const customPlugin = plugin(({ addComponents, addUtilities, addVariant }) => {
  addVariant('light', '.light-variable &');
  addComponents({
    '.bg-0': {
      backgroundColor: 'var(--bg-0)',
    },
    '.bg-1': {
      backgroundColor: 'var(--bg-1)',
    },
    '.bg-2': {
      backgroundColor: 'var(--bg-2)',
    },
    '.bg-3': {
      backgroundColor: 'var(--bg-3)',
    },
    '.bg-4': {
      backgroundColor: 'var(--bg-4)',
    },
    '.bg-5': {
      backgroundColor: 'var(--bg-5)',
    },
    '.bg-6': {
      backgroundColor: 'var(--bg-6)',
    },
    '.bg-7': {
      backgroundColor: 'var(--bg-7)',
    },
    '.bg-8': {
      backgroundColor: 'var(--bg-8)',
    },
    '.bg-9': {
      backgroundColor: 'var(--bg-9)',
    },
    '.bg-night-01': {
      backgroundColor: 'var(--bg-21)',
    },
    '.bg-night-02': {
      backgroundColor: 'var(--bg-02-night)',
    },
    '.text-subtitle-night': {
      color: 'var(--subtitle-night)',
    },
    '.text-white-night': {
      color: 'var(--white-night)',
    },
    '.bg-gradient-1': {
      background: 'var(--gradient-1)',
    },
    '.bg-gradient-2': {
      background: 'var(--gradient-2)',
    },
    '.bg-gradient-3': {
      background: 'var(--gradient-3)',
    },
    '.text-base-1': {
      color: 'var(--text-1)',
    },
    '.text-base-2': {
      color: 'var(--text-2)',
    },
    '.text-base-3': {
      color: 'var(--text-3)',
    },
    '.text-red-night': {
      color: 'var(--red-night)',
    },
    '.border-red-night': {
      borderColor: 'var(--red-night)',
    },
    '.border-base-4': {
      borderColor: 'var(--border-4)',
    },
    '.border-base-5': {
      borderColor: 'var(--border-5)',
    },
    '.border-night': {
      borderColor: 'var(--border-16)',
    },
    '.text-gradient-1': {
      background: 'var(--gradient-1)',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    '.text-gradient-2': {
      background: 'var(--gradient-5)',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    '.text-gradient-1-underline': {
      background: 'var(--gradient-1)',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-1px',
        left: '0',
        right: '0',
        height: '1px',
        background: 'var(--gradient-1)',
      },
    },
    '.gradient-text': {
      background: 'linear-gradient(to right, #FA9528, #F76F08)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent', // Dùng này thay vì color
      backgroundClip: 'text',
    },
    '.text-gradient-4': {
      background: 'var(--gradient-4)',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    '.shadow-base-3': {
      boxShadow: 'var(--shadow-3)',
    },

    '.bg-active-tab': {
      backgroundColor: 'var(--active-tab)',

      '.dark-variable &': {
        backgroundImage: 'var(--active-tab)',
        backgroundColor: 'transparent',
      },
    },
    '.shadow-base-2': {
      boxShadow: 'var(--shadow-2)',
    },
    '.shadow-base-5': {
      boxShadow: 'var(--shadow-5)',
    },
    '.shadow-base-6': {
      boxShadow: 'var(--shadow-6)',
      backdropFilter: 'blur(2px)',
    },
    '.font-400': {
      fontWeight: '400',
    },
    '.font-500': {
      fontWeight: '500',
    },
    '.font-600': {
      fontWeight: '600',
    },
    '.font-700': {
      fontWeight: '700',
    },
    '.font-800': {
      fontWeight: '800',
    },
  });
  addUtilities({
    '.base-box-1': {
      boxShadow: 'var(--shadow-1)',
      borderRadius: '1.6rem',
    },
    '.shadow-base-1': {
      boxShadow: '1px 2px 8px 0px #03314b29',
      backdropFilter: 'blur(4px)',

      '.dark-variable &': {
        boxShadow: '0 5px 5px 0 rgba(0, 0, 0, 0.25), -5px -5px 5px 0 rgba(0, 0, 0, 0.25)',
      },
    },

    '.bg-active-tab': {
      backgroundColor: 'var(--active-tab)',

      '.dark-variable &': {
        backgroundImage: 'var(--active-tab)',
        backgroundColor: 'transparent',
      },
    },

    '.border-gradient-light': {
      position: 'relative',
      background: 'transparent',

      '&::before': {
        content: '""',
        position: 'absolute',
        inset: '0',
        borderRadius: 'inherit',
        padding: '1px',
        background:
          'linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.54) 100%)',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        '-webkit-mask-composite': 'xor',
      },
    },
    '.bg-gradient-light': {
      position: 'relative',
      background:
        'linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.54) 100%)',

      '&::before': {
        content: '""',
        position: 'absolute',
        inset: '0',
        borderRadius: 'inherit',
        padding: '1px',
        background:
          'linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.54) 100%)',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        '-webkit-mask-composite': 'xor',
      },
    },
    '.border-bottom-gradient': {
      position: 'relative',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '1px',
        background:
          'linear-gradient(155.31deg, rgba(255, 255, 255, 0.5) 12.33%, rgba(255, 255, 255, 0.05) 34.31%, rgba(255, 255, 255, 0.05) 52.66%, rgba(255, 255, 255, 0.54) 74.67%)',
        borderBottomLeftRadius: '1.6rem',
        borderBottomRightRadius: '1.6rem',
      },

      '.dark-variable &': {
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
      },
    },
  });
});
const config: Config = {
  darkMode: ['selector', '.dark-variable'],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '4': '1px 2px 8px 0px #03314b29',
        '4-dark': '1px 2px 8px 0px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        aquire: ['var(--font-aquire)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
      },
      spacing: {
        '0.5': '0.2rem',
        '1': '0.4rem',
        '1.5': '0.6rem',
        '2': '0.8rem',
        '2.5': '10rem',
        '3': '1.2rem',
        '3.5': '1.4rem',
        '4': '1.6rem',
        '5': '2rem',
        '6': '2.4rem',
        '7': '2.8rem',
        '8': '3.2rem',
        '9': '2.6rem',
        '10': '4rem',
        '11': '4.4rem',
        '12': '4.8rem',
        '14': '5.6rem',
      },
      borderRadius: {
        sm: '0.2rem',
        md: '0.4rem',
        lg: '0.8rem',
        xl: '1.6rem',
        '0.5': '0.2rem',
        '1': '0.4rem',
        '1.5': '0.6rem',
        '2': '0.8rem',
        '2.5': '10rem',
        '3': '1.2rem',
        '3.5': '1.4rem',
        '4': '1.6rem',
        '5': '2rem',
        '6': '2.4rem',
        '7': '2.8rem',
        '8': '3.2rem',
      },
      fontSize: {
        xsm: [
          '1rem',
          {
            lineHeight: '1.2rem',
          },
        ],
        sm: [
          '1.2rem',
          {
            lineHeight: '1.4rem',
          },
        ],
        md: [
          '1.4rem',
          {
            lineHeight: '1.6rem',
          },
        ],
        base: [
          '1.6rem',
          {
            lineHeight: '2rem',
          },
        ],
        lg: [
          '1.8rem',
          {
            lineHeight: '2.8rem',
          },
        ],
        xl: [
          '2rem',
          {
            lineHeight: '2.4rem',
          },
        ],
        '2xl': [
          '2.4rem',
          {
            lineHeight: '2.6rem',
          },
        ],
        '3xl': [
          '3.2rem',
          {
            lineHeight: '4rem',
          },
        ],
        '0.5': '0.2rem',
        '1': '0.4rem',
        '1.5': '0.6rem',
        '2': '0.8rem',
        '2.5': '10rem',
        '3': '1.2rem',
        '3.5': '1.4rem',
        '4': '1.6rem',
        '5': '2rem',
        '6': '2.4rem',
        '7': '2.8rem',
        '8': '3.2rem',
        '9': '3.6rem',
        '10': '4rem',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-1)',
        },
        transparent: 'transparent',
        current: 'currentColor',
      },
      width: {
        '0.5': '0.2rem',
        '1': '0.4rem',
        '1.5': '0.6rem',
        '2': '0.8rem',
        '2.5': '10rem',
        '3': '1.2rem',
        '3.5': '1.4rem',
        '4': '1.6rem',
        '5': '2rem',
        '6': '2.4rem',
        '7': '2.8rem',
        '8': '3.2rem',
        '9': '3.6rem',
        '10': '4rem',
      },
      height: {
        '0.5': '0.2rem',
        '1': '0.4rem',
        '1.5': '0.6rem',
        '2': '0.8rem',
        '2.5': '10rem',
        '3': '1.2rem',
        '3.5': '1.4rem',
        '4': '1.6rem',
        '5': '2rem',
        '6': '2.4rem',
        '7': '2.8rem',
        '8': '3.2rem',
        '9': '3.6rem',
        '10': '4rem',
      },
      lineHeight: {
        125: '125%',
        '0.5': '0.2rem',
        '1': '0.4rem',
        '1.5': '0.6rem',
        '2': '0.8rem',
        '2.5': '10rem',
        '3': '1.2rem',
        '3.5': '1.4rem',
        '4': '1.6rem',
        '5': '2rem',
        '6': '2.4rem',
        '7': '2.8rem',
        '8': '3.2rem',
        '9': '3.6rem',
        '10': '4rem',
        '11': '4.4rem',
        '12': '4.8rem',
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
    },
  },
  plugins: [customPlugin],
};
export default config;
