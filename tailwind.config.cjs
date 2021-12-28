module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme:  [
    {
      'mytheme': {
        'primary': '#FF3E00',
        'primary-focus': '#FF002E',
        'primary-content': '#ffffff',
        'secondary': '#FF6600',
        'secondary-focus': '#DA4404',
        'secondary-content': '#ffffff',
        'accent': '#0089CC',
        'accent-focus': '#0e4c24',
        'accent-content': '#C8E8F8',
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
