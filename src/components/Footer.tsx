export default function Footer() {
    return (
      <footer className="bg-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8">
          <a
            href="https://t.me/shithole_community"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4fffb0] font-semibold transition-transform duration-200 hover:scale-105"
          >
            Telegram
          </a>
          <a
            href="#"
            className="text-[#4fffb0] font-semibold transition-transform duration-200 hover:scale-105"
          >
            PumpFun
          </a>
        </div>
      </footer>
    );
  }