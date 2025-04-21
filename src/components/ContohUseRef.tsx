import React, { useRef } from 'react';

export default function ContohUseRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    alert("Data dikirim!");

    if (inputRef.current) {
        inputRef.current.focus(); // Fokus ke input lagi
        inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Ketik sesuatu" />
      <button type="submit">Kirim</button>
    </form>
  );
}
 
