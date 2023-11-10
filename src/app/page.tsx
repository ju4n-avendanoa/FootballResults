import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="relative w-full min-h-screen">
        <Image
          alt="home page image"
          src={
            "https://res.cloudinary.com/dhjqarghy/image/upload/v1697832129/football/HomePage.jpg"
          }
          fill
          className="absolute object-cover"
        />
        <div className="absolute bg-gradient-to-t from-black top-0 z-10 text-white pt-40 w-full h-full flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold">Football Results</h1>
          <p className="px-10 text-center bg-[#00000090] rounded-lg p-6 mt-4 w-11/12 lg:w-3/5">
            Welcome to our football data hub - your source for match results,
            player stats, team info, global leagues, and current standings. Stay
            in the know with the latest football action!
          </p>
        </div>
      </div>
    </main>
  );
}
