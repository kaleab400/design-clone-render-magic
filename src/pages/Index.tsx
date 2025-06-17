import React from "react";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden pb-[847px] max-md:pb-[100px]">
      <Header 
        logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3d85cb00c9fa35f88e271b532f29214f079b3909?placeholderIfAbsent=true"
        signInIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeb82aba03abd0168f1d3ca52c24e3a5144d773?placeholderIfAbsent=true"
        title="AI-DU Agent Portal"
      />
      
      <main className="container mx-auto px-4 py-8" role="main">
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to AI-DU Agent Portal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your comprehensive platform for managing AI-driven operations and agent workflows. 
            Access your dashboard, manage tasks, and collaborate with your team efficiently.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Task Management</h3>
              <p className="text-gray-600">
                Organize, assign, and track tasks across your agent network efficiently.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Team Collaboration</h3>
              <p className="text-gray-600">
                Connect with team members, share insights, and coordinate operations.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="bg-[#098BD1] hover:bg-[#0776b8] text-white px-6 py-3 rounded-lg transition-colors font-medium">
                View Dashboard
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg transition-colors font-medium">
                Browse Documentation
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
