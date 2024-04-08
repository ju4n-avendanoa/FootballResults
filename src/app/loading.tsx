function LoadingPage() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-zinc-700">
      <div className="loader-container">
        <div className="loader"></div>
        <p className="text-white">Loading...</p>
      </div>
    </section>
  );
}

export default LoadingPage;
