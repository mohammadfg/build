import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center w-full flex-col">
        <div className="flex border rounded-full mb-2 justify-center items-center gap-x-4 px-3">
          <a href="https://t.me/mohamaadfg" target="_blank" rel="noreferrer">
            <img src="/icons/telegram.svg" alt="telegram" className="w-8" />
          </a>
          <a href="mailto:mohamadfg822@gmail.com" target="_blank" rel="noreferrer">
            <img src="/icons/email.svg" alt="email" className="w-8 p-1" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <img src="/icons/whatsapp.svg" alt="whatsapp" className="w-8 p-1" />
          </a>
        </div>
        <p className="text-sm text-center p-2 bg-zinc-800 w-full">
          کلیه‌ی حقوق مادی و معنوی اپلیکیشن «نت فیلم» متعلق به دانشکده فنی و حرفه ای خورازمی
          است.
        </p>
      </div>
    </footer>
  );
}
