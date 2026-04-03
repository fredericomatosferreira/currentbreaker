import { useState } from "react";
import FoundersPanel from "./components/FoundersPanel";
import ProductGrid from "./components/ProductGrid";
import OurStory from "./components/OurStory";

function App() {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      {/* Navigation */}
      <nav className="flex justify-center pt-6 pb-8 lg:pt-8 lg:pb-12">
        <div className="flex gap-1 bg-white rounded-full p-1 shadow-sm">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeTab === "portfolio"
                ? "bg-[#1a1a2e] text-white"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab("story")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeTab === "story"
                ? "bg-[#1a1a2e] text-white"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Our Story
          </button>
        </div>
      </nav>

      {/* Content */}
      {activeTab === "portfolio" ? (
        <main className="max-w-[1500px] mx-auto px-5 pb-12 lg:px-10 lg:pb-16">
          <div className="flex flex-col lg:flex-row">
            {/* Left Panel */}
            <div className="lg:w-[380px] shrink-0 mb-10 lg:mb-0">
              <FoundersPanel />
            </div>
            {/* Right Panel */}
            <div className="flex-1 min-w-0 lg:ml-36">
              <ProductGrid />
            </div>
          </div>
        </main>
      ) : (
        <OurStory />
      )}
    </div>
  );
}

export default App;
