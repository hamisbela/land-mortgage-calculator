import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Us</h1>
          
          <div className="prose prose-indigo max-w-none">
            <p className="text-lg">Welcome to Land Mortgage Calculator, your trusted companion for land purchase financing analysis and mortgage planning.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p>We strive to provide accurate, easy-to-use tools that help individuals and businesses make informed decisions about land mortgages by understanding payment schedules, interest costs, and loan terms.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accurate Calculations: Our tool uses standard mortgage amortization formulas</li>
              <li>Comprehensive Analysis: Get detailed breakdowns of payments and costs</li>
              <li>Free to Use: No hidden costs or subscriptions</li>
              <li>Mobile Responsive: Access from any device</li>
              <li>Privacy First: We don't store your mortgage calculation data</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
            <p>Founded by a team of mortgage professionals and real estate experts, we recognized the need for a specialized tool to help people evaluate land mortgages and make better financial decisions about property financing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}