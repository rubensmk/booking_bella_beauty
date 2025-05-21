"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="text-center text-red-600 bg-red-100 p-4 rounded">
      <p>Something went wrong while loading this page</p>
      <button
        onClick={() => reset()}
        className="mt-4 bg-beauty-accent text-white px-4 py-2 rounded"
      >
        Try again
      </button>
    </div>
  );
}
