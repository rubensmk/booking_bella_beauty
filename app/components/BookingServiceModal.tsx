"use client";

import { useState } from "react";

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
}

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
}

export default function BookingModal({
  open,
  onOpenChange,
  serviceName,
}: BookingModalProps) {
  const [form, setForm] = useState<BookingFormData>({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!form.name || !form.email || !form.date || !form.time) {
      setError("Please fill out all fields.");
      setIsLoading(false);
      return;
    }

    const selectedDateTime = new Date(`${form.date}T${form.time}`);
    if (isNaN(selectedDateTime.getTime()) || selectedDateTime <= new Date()) {
      setError("Please choose a valid date and time in the future.");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1000);
  };

  const handleClose = () => {
    setForm({ name: "", email: "", date: "", time: "" });
    setSuccess(false);
    setError(null);
    onOpenChange(false);
    setIsLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-beauty-dark hover:text-beauty-accent text-2xl"
        >
          &times;
        </button>

        {success ? (
          <div className="text-center">
            <h2 className="text-2xl font-serif font-semibold text-beauty-dark mb-4">
              Booking Confirmed ✅
            </h2>
            <p className="text-sm text-beauty-dark/80 mb-1">
              <strong>Name:</strong> {form.name}
            </p>
            <p className="text-sm text-beauty-dark/80 mb-1">
              <strong>Email:</strong> {form.email}
            </p>
            <p className="text-sm text-beauty-dark/80 mb-1">
              <strong>Date:</strong> {form.date}
            </p>
            <p className="text-sm text-beauty-dark/80 mb-1">
              <strong>Time:</strong> {form.time}
            </p>
            <p className="text-sm text-beauty-dark/80 mb-4">
              <strong>Service:</strong> {serviceName}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-beauty-accent hover:bg-beauty-accent/90 text-white rounded"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-serif font-semibold text-beauty-dark mb-4">
              Book: {serviceName}
            </h2>

            {error && (
              <p className="text-sm text-red-600 bg-red-100 p-2 rounded">
                {error}
              </p>
            )}

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-beauty-accent"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-beauty-accent"
              required
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-beauty-accent"
              required
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-beauty-accent"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-beauty-accent hover:bg-beauty-accent/90 text-white py-2 rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {isLoading ? "Loading..." : "Confirm Booking"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
