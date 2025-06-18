
import React from "react";
import { Header } from "@/components/Header";

const Agents = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header 
        logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3d85cb00c9fa35f88e271b532f29214f079b3909?placeholderIfAbsent=true" 
        signInIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeb82aba03abd0168f1d3ca52c24e3a5144d773?placeholderIfAbsent=true"
        title="AI-DU Agent Portal"
      />
      
      <main className="container mx-auto px-8 py-12" role="main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* CNS TT Agent */}
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">CNS TT Agent</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Use GenAI to isolate and resolve CNS trouble tickets
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Access
            </button>
          </div>

          {/* 5GC FA Agent */}
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">5GC FA Agent</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Use GenAI to perform 5GC fault analysis from network PCAP logs
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Access
            </button>
          </div>

          {/* MoP Agent */}
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6">MoP Agent</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Use GenAI to create base MoPs for delivery teams
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Access
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Agents;
