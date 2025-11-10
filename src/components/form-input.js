"use client";

export default function FormInput({ placeholder, type, onChange, name }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      className=" text-white border border-white w-full p-2 font-quicksand placeholder:text-white/70"
      onChange={onChange}
    />
  );
}
