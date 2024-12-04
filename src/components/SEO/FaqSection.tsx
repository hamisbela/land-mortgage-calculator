import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | string[];
}

const faqs: FaqItem[] = [
  {
    question: "What is a land mortgage calculator?",
    answer: "A land mortgage calculator is a financial tool that helps determine your monthly mortgage payments when financing land purchases. It considers factors such as the property price, down payment, interest rate, and loan term to provide accurate payment estimates and total cost analysis."
  },
  {
    question: "When should I use a land mortgage calculator?",
    answer: [
      "• Before applying for a land mortgage",
      "• When comparing different mortgage options",
      "• To determine affordable down payment amounts",
      "• For planning long-term mortgage commitments",
      "• When refinancing existing land mortgages"
    ]
  },
  {
    question: "How are land mortgage payments calculated?",
    answer: "Land mortgage payments are calculated using the loan amount (property price minus down payment), interest rate, and loan term. The calculator uses an amortization formula to determine monthly payments and provides additional metrics like total interest paid and loan-to-value ratio."
  },
  {
    question: "What factors affect land mortgage rates?",
    answer: "Several factors influence land mortgage rates: your credit score, down payment size, loan term length, current market rates, property location, and intended land use. A larger down payment or better credit score typically results in more favorable interest rates."
  }
];

export default function FaqSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              <ul className="space-y-2 text-gray-600">
                {faq.answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}