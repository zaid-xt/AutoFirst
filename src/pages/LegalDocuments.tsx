import React from "react";
import { FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy: React.FC = () => {
  const privacyDoc = {
    title: "Privacy Policy",
    file: "/src/docs/Auto First Mechanical Aid POLICY.pdf",
  };

  return (
    <div className="pt-16">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Privacy Policy | Auto First</title>
        <meta
          name="title"
          content="Privacy Policy | Auto First"
        />
        <meta
          name="description"
          content="Your privacy and trust are our top priorities."
        />
        <meta
          name="keywords"
          content="Auto First privacy policy, data protection, personal data, customer information, vehicle services privacy, roadside assistance privacy"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://www.autofirst.co.za/privacy-policy" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Privacy Policy | Auto First" />
        <meta
          property="og:description"
          content="Read Auto First's Privacy Policy to understand how we collect, use, and safeguard your personal data."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.autofirst.co.za/privacy-policy" />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg"
        />
        <meta property="og:site_name" content="Auto First" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Learn how Auto First collects, uses, and safeguards your information while keeping your trust and security our highest priority.
          </p>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
         

          {/* PDF Viewer */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <iframe
              src={privacyDoc.file}
              title={privacyDoc.title}
              className="w-full h-[80vh] rounded-xl"
            ></iframe>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-8">
            <a
              href={privacyDoc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 text-white rounded-full shadow-md hover:bg-red-700 transition text-lg font-semibold"
            >
              Download {privacyDoc.title}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
