"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex items-center gap-2 rounded-full bg-[#141414] py-1.5 pl-5 pr-1.5 shadow-[0_0_0_1px_#ffffff14]"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com..."
        className="flex-1 bg-transparent text-sm text-[#eee] placeholder:text-[#4a4a4a] outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-[#eee] px-5 py-2.5 text-sm font-medium text-[#080808] transition-[scale,background-color] duration-200 ease-out hover:bg-white active:scale-[0.97]"
      >
        Subscribe
      </button>
    </form>
  );
}
