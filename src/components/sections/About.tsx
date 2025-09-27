import React from 'react';
import { Brain, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our AI System</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our skin cancer classification system uses advanced deep learning technology 
          to analyze skin lesion images and provide preliminary assessments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Brain className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Technology</h3>
          <p className="text-gray-600">
            Built using state-of-the-art convolutional neural networks trained on 
            thousands of dermatoscopic images for accurate lesion classification.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
          <p className="text-gray-600">
            Your images are processed securely and never stored on our servers. 
            All analysis happens in real-time with complete privacy protection.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Results</h3>
          <p className="text-gray-600">
            Get classification results in seconds with confidence scores and 
            visual explanations to help understand the AI's decision process.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">How It Works</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Image Upload</h4>
              <p className="text-gray-600">Upload a high-quality image of the skin lesion you want to analyze.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div>
              <h4 className="font-medium text-gray-900">AI Analysis</h4>
              <p className="text-gray-600">Our trained model analyzes the image features and patterns.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Results</h4>
              <p className="text-gray-600">Receive classification results with confidence scores and recommendations.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-medium text-yellow-800 mb-2">Research Purpose</h4>
        <p className="text-yellow-700 text-sm">
          This tool was developed for educational and research purposes. It should never replace 
          professional medical consultation. If you have concerns about a skin lesion, please 
          consult a qualified dermatologist immediately.
        </p>
      </div>
    </div>
  );
};