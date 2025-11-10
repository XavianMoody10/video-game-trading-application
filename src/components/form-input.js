"use client";

export default function FormInput({ placeholder, type, onChange }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className=" text-white border border-white w-full p-2 placeholder:text-white/70"
      onChange={onChange}
    />
  );
}
