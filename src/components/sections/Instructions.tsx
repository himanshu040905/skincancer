import React from 'react';
import { Camera, Upload, CheckCircle, AlertTriangle } from 'lucide-react';

export const Instructions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Follow these guidelines to get the most accurate results from our skin cancer classification system.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Camera className="h-5 w-5 mr-2 text-blue-600" />
          Image Requirements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">✅ Good Image Quality</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• High resolution (minimum 224x224 pixels)</li>
              <li>• Clear, well-lit image</li>
              <li>• Lesion fills most of the frame</li>
              <li>• Minimal hair or debris</li>
              <li>• Sharp focus on the lesion</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">❌ Avoid These</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>• Blurry or out-of-focus images</li>
              <li>• Very small lesions in large images</li>
              <li>• Extreme shadows or bright spots</li>
              <li>• Multiple lesions in one image</li>
              <li>• Images with filters or editing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Upload className="h-5 w-5 mr-2 text-green-600" />
          Upload Process
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
              1
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Select Your Image</h4>
              <p className="text-gray-600 text-sm">
                Either drag and drop your image onto the upload area or click "Select Image" to browse your files.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
              2
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Preview & Verify</h4>
              <p className="text-gray-600 text-sm">
                Review the uploaded image to ensure it meets our quality requirements before classification.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600">
              3
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Analyze</h4>
              <p className="text-gray-600 text-sm">
                Click "Classify Image" to start the AI analysis. Results typically appear within 5-10 seconds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-lg border border-green-200 p-6">
          <div className="flex items-center mb-3">
            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-800">Supported Formats</h3>
          </div>
          <ul className="space-y-2 text-green-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              JPEG (.jpg, .jpeg)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              PNG (.png)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Maximum size: 10MB
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
          <div className="flex items-center mb-3">
            <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-800">Best Practices</h3>
          </div>
          <ul className="space-y-2 text-blue-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Use natural lighting
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Keep camera steady
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              Focus on single lesion
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h4 className="font-medium text-red-800 mb-2 flex items-center">
          <AlertTriangle className="h-4 w-4 mr-2" />
          Important Note
        </h4>
        <p className="text-red-700 text-sm">
          This AI system is designed to assist in preliminary screening only. It cannot replace professional medical diagnosis. 
          If you notice any changes in your skin, unusual lesions, or have any concerns, please consult with a dermatologist 
          or healthcare provider immediately.
        </p>
      </div>
    </div>
  );
};