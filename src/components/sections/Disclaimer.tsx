import React from 'react';
import { AlertTriangle, Shield, Users, FileText } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Medical Disclaimer</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Important information about the use and limitations of our skin cancer classification system.
        </p>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
          <h3 className="text-2xl font-bold text-red-800">Critical Warning</h3>
        </div>
        <div className="text-red-800 space-y-3">
          <p className="font-semibold text-lg">
            This tool is NOT a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            If you have any concerns about a skin lesion or changes in your skin, you should 
            <strong> immediately consult a qualified dermatologist or healthcare provider</strong>. 
            Do not rely solely on AI analysis for medical decisions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Intended Use</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Educational and research purposes only</li>
            <li>• Preliminary screening assistance</li>
            <li>• Academic demonstration of AI technology</li>
            <li>• Supporting healthcare awareness initiatives</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-green-600 mr-3" />
            <h3 className="text-xl font-semibold text-gray-900">Target Audience</h3>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Researchers and students</li>
            <li>• Healthcare educators</li>
            <li>• Technology developers</li>
            <li>• General public for awareness</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <Shield className="h-6 w-6 text-purple-600 mr-3" />
          <h3 className="text-xl font-semibold text-gray-900">Limitations & Accuracy</h3>
        </div>
        <div className="space-y-4 text-gray-600">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">System Limitations:</h4>
            <ul className="space-y-1 text-sm">
              <li>• AI models can make mistakes and may not detect all cases</li>
              <li>• Results depend heavily on image quality and lighting conditions</li>
              <li>• System has not been clinically validated for diagnostic use</li>
              <li>• Performance may vary across different skin types and lesion types</li>
              <li>• Cannot replace dermatoscopic examination by trained professionals</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Important Considerations:</h4>
            <ul className="space-y-1 text-sm">
              <li>• False positives and false negatives can occur</li>
              <li>• Early-stage cancers may not be detected</li>
              <li>• Rare skin cancer types may not be accurately classified</li>
              <li>• Environmental factors can affect image analysis</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">Data Privacy & Security</h3>
        <div className="space-y-2 text-yellow-700 text-sm">
          <p>
            • Images are processed in real-time and are not stored on our servers
          </p>
          <p>
            • No personal health information is collected or retained
          </p>
          <p>
            • All processing happens securely with industry-standard encryption
          </p>
          <p>
            • We do not share or sell any user data to third parties
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Situations</h3>
        <div className="bg-red-100 border border-red-300 rounded-lg p-4">
          <p className="text-red-800 font-semibold">
            Seek immediate medical attention if you notice:
          </p>
          <ul className="mt-2 space-y-1 text-red-700 text-sm">
            <li>• Rapidly changing or growing lesions</li>
            <li>• Bleeding, ulcerated, or painful lesions</li>
            <li>• New pigmented lesions appearing suddenly</li>
            <li>• Any lesion that looks different from others on your body</li>
            <li>• Irregular borders, multiple colors, or asymmetrical shapes</li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-gray-200 pt-6">
        <p className="text-sm text-gray-500">
          By using this system, you acknowledge that you have read and understood this disclaimer 
          and agree to use the tool responsibly for educational purposes only.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};