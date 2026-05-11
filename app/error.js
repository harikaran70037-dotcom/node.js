"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="error-page">

      <h1>Something Went Wrong</h1>

      <p>{error.message}</p>

      <button onClick={() => reset()}>
        Try Again
      </button>

    </div>
  );
} 