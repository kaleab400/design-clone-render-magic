
import React from "react";
import { Header } from "@/components/Header";

const Dashboard = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header 
        logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3d85cb00c9fa35f88e271b532f29214f079b3909?placeholderIfAbsent=true" 
        signInIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeb82aba03abd0168f1d3ca52c24e3a5144d773?placeholderIfAbsent=true"
        title="AI-DU Agent Portal"
      />
      
      <main className="container mx-auto px-8 py-12" role="main">
        <div className="flex flex-col items-center justify-center space-y-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          <p className="text-xl text-gray-600">Dashboard content coming soon</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
