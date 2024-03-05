function LoadingPage() {
  return (
    <main className="w-screen min-h-screen loader-parent bg-zinc-700">
      <div className="loader-container">
        <div className="loader"></div>
        <p className="text-white">Loading...</p>
      </div>
    </main>
  );
}

export default LoadingPage;
