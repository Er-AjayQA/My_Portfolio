export default function manifest() {
  return {
    name: "Ajay Kumar - MERN Full Stack",
    short_name: "Ajay Portfolio",
    description:
      "This is my portfolio which showcases my projects and my details.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/images/mern.webp",
        sizes: "192x192",
        type: "image/webp",
      },
    ],
  };
}
