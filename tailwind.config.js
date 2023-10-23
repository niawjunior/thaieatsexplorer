/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://img.freepik.com/free-photo/rice-noodles-bowl-curry-paste-with-chili-cucumber-long-bean-lime-garlic-spring-onion_1150-27078.jpg?w=1800&t=st=1698049215~exp=1698049815~hmac=9274c83b103f7fbebc1f3e2d793dedd302a6ece799d46da5c74ed31c82546835')",
      },
    },
  },
  plugins: [],
}
