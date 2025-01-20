export default function AboutSection() {
    const copyContract = () => {
      navigator.clipboard.writeText('Soon');
      const tooltip = document.getElementById('tooltip');
      if (tooltip) {
        tooltip.style.opacity = '1';
        setTimeout(() => tooltip.style.opacity = '0', 2000);
      }
    };
  
    return (
      <div className="bg-gray-800 rounded-xl p-8 mt-12">
        <h2 className="text-2xl text-[#4fffb0] mb-4 font-bold">About Shithole</h2>
        <p className="mb-6">A definitive ranking of countries, as voted by you, the Pump.Fun degens.</p>
        
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#4fffb0]">Contract Address</span>
            <span className="text-[#4fffb0]">SOL</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <span className="font-mono">Soon</span>
            <button
              onClick={copyContract}
              className="bg-[#4fffb0] text-gray-900 px-4 py-2 rounded-lg font-semibold
                       transition-all duration-200 hover:scale-105"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    );
  }