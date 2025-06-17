import React from "react";
import { Header } from "@/components/Header";
const Index = () => {
  return <div className="bg-white overflow-hidden pb-[847px] max-md:pb-[100px]">
      <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3d85cb00c9fa35f88e271b532f29214f079b3909?placeholderIfAbsent=true" signInIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeb82aba03abd0168f1d3ca52c24e3a5144d773?placeholderIfAbsent=true" title="AI-DU Agent Portal" />
      
      <main className="container mx-auto px-4 py-8" role="main">
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to AI-DU Agent Portal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your comprehensive platform for managing AI-driven operations and agent workflows. 
            Access your dashboard, manage tasks, and collaborate with your team efficiently.
          </p>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-[#098BD1] hover:bg-[#0776b8] text-white px-6 py-3 rounded-lg transition-colors font-medium">
                View Dashboard
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg transition-colors font-medium">View Agents
            </button>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default Index;