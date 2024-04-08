import ImageWithFallback from "@/components/ImageWithFallback";

export default function Home() {
  const images = [
    "https://res.cloudinary.com/dhjqarghy/image/upload/v1697832129/football/HomePage.jpg",
    "https://res.cloudinary.com/dhjqarghy/image/upload/v1709606295/football/daniel-norin-lBhhnhndpE0-unsplash_fco62s.jpg",
    "https://res.cloudinary.com/dhjqarghy/image/upload/v1709606291/football/vienna-reyes-qCrKTET_09o-unsplash_i5p2yd.jpg",
  ];

  const imageToShow = images[Math.floor(Math.random() * 3)];

  return (
    <main className="w-full h-full">
      <div className="relative w-full min-h-screen">
        <ImageWithFallback
          alt="home page image"
          src={imageToShow}
          fill
          fallbackSrc="https://res.cloudinary.com/dhjqarghy/image/upload/v1697832129/football/HomePage.jpg"
          className="absolute object-cover"
        />
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full p-8 pt-40 text-white bg-gradient-to-t from-black text-center">
          <h1 className="text-4xl font-bold">Football Results</h1>
          <p className="bg-[#00000090] rounded-lg py-6 lg:px-10 px-4 mt-4 w-11/12 lg:w-3/5">
            Welcome to our football data hub - your source for match results,
            player stats, team info, global leagues, and current standings. Stay
            in the know with the latest football action!
          </p>
        </div>
      </div>
    </main>
  );
}
