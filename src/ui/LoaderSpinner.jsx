function LoaderSpinner() {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-light/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
}

export default LoaderSpinner;
