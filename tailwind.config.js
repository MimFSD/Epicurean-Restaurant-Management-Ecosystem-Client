
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#efad62',
        'secondary': '#5f431c',
        'tertiary': '#f2c26e'
      }
    },
  },
  plugins: [],
});