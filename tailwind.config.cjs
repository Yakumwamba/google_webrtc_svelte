module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme:  [
    {
      'mytheme': {
        'primary': '#22c55e',
        'primary-focus': '#1d9e4b',
        'primary-content': '#ffffff',
        'secondary': '#18823d',
        'secondary-focus': '#146c33',
        'secondary-content': '#ffffff',
        'accent': '#115a2b',
        'accent-focus': '#0e4c24',
        'accent-content': '#ffffff',
        'neutral': '#9effc3',
        'neutral-focus': '#85d6a4',
        'neutral-content': '#0a3218',
        'base-100': '#ffffff',
        'base-200': '#f9fafb',
        'base-300': '#d1d5db',
        'base-content': '#1f2937',
        'info': '#2094f3',
        'success': '#009485',
        'warning': '#ff9900',
        'error': '#ff5724',
      },
    },
  ],
  darkMode: false,
  plugins: [require('daisyui')],
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.svelte',
  ],
  variant: {
    extend: {},
  }
}
