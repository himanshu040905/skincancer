import React from 'react';
import { CheckCircle, AlertCircle, Activity } from 'lucide-react';
import { ClassificationResult } from '../types';

interface ClassificationResultsProps {
  result: ClassificationResult;
  isLoading: boolean;
}

export const ClassificationResults: React.FC<ClassificationResultsProps> = ({
  result,
  isLoading
}) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
        <div className="flex items-center justify-center space-x-3 py-8">
          <div className="animate-spin">
            <Activity className="h-8 w-8 text-blue-600" />
          </div>
          <span className="text-lg text-gray-600">Analyzing image...</span>
        </div>
      </div>
    );
  }

  const isBenign = result.prediction === 'Benign';
  const confidencePercentage = Math.round(result.confidence * 100);

  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Classification Results</h3>
      
      <div className="space-y-4">
        {/* Prediction Result */}
        <div className={`p-4 rounded-lg border-2 ${
          isBenign 
            ? 'bg-green-50 border-green-200' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className="flex items-center space-x-3">
            {isBenign ? (
              <CheckCircle className="h-8 w-8 text-green-600" />
            ) : (
              <AlertCircle className="h-8 w-8 text-red-600" />
            )}
            <div>
              <h4 className={`text-xl font-bold ${
                isBenign ? 'text-green-800' : 'text-red-800'
              }`}>
                {result.prediction}
              </h4>
              <p className={`text-sm ${
                isBenign ? 'text-green-600' : 'text-red-600'
              }`}>
                {isBenign 
                  ? 'The lesion appears to be benign (non-cancerous)'
                  : 'The lesion may be malignant - consult a dermatologist immediately'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Confidence Score</span>
            <span className="text-lg font-bold text-gray-900">{confidencePercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                confidencePercentage >= 80 
                  ? 'bg-green-500' 
                  : confidencePercentage >= 60 
                  ? 'bg-yellow-500' 
                  : 'bg-red-500'
              }`}
              style={{ width: `${confidencePercentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            {confidencePercentage >= 80 
              ? 'High confidence in prediction'
              : confidencePercentage >= 60 
              ? 'Moderate confidence - consider additional evaluation'
              : 'Low confidence - seek professional medical opinion'
            }
          </p>
        </div>

        {/* Grad-CAM Heatmap (if available) */}
        {result.gradcam_url && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-medium text-blue-900 mb-2">Attention Heatmap</h5>
            <img
              src={result.gradcam_url}
              alt="Grad-CAM visualization"
              className="w-full h-48 object-cover rounded border"
            />
            <p className="text-xs text-blue-700 mt-2">
              Red areas indicate regions the AI focused on for classification
            </p>
          </div>
        )}

        {/* Medical Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
          <p className="text-xs text-yellow-800">
            <strong>Important:</strong> This AI tool is for educational purposes only. 
            Always consult with a qualified dermatologist for proper medical diagnosis and treatment.
          </p>
        </div>
      </div>
    </div>
  );
};