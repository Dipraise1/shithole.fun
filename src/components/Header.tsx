import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-gray-900 p-4 flex justify-center border-b-2 border-[#4fffb0]">
      <div className="logo inline-flex items-center gap-4 justify-center">
        <Image
          src="/logo.29.20-removebg-preview.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-lg transition-transform duration-300 hover:scale-105 hover:rotate-5"
        />
      </div>
    </header>
  );
}