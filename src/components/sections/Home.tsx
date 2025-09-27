import React, { useState } from 'react';
import { ImageUpload } from '../ImageUpload';
import { ClassificationResults } from '../ClassificationResults';
import { ApiService } from '../../services/api';
import { ClassificationResult } from '../../types';

export const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setResult(null);
    setError(null);
  };

  const handleClearImage = () => {
    setSelectedImage(null);
    setResult(null);
    setError(null);
  };

  const handleClassify = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await ApiService.classifyImage(selectedImage);
      
      if (response.success && response.result) {
        setResult(response.result);
      } else {
        setError(response.error || 'Classification failed');
      }
    } catch (err) {
      setError('Network error - please check your connection and try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Skin Cancer Classification
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload an image of a skin lesion for AI-powered analysis. Our model can help 
          identify potentially malignant lesions, but always consult a medical professional 
          for proper diagnosis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <ImageUpload
            onImageSelect={handleImageSelect}
            selectedImage={selectedImage}
            onClearImage={handleClearImage}
          />
          
          {selectedImage && (
            <button
              onClick={handleClassify}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors font-medium"
            >
              {isLoading ? 'Analyzing...' : 'Classify Image'}
            </button>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">{error}</p>
            </div>
          )}
        </div>

        <div>
          {(result || isLoading) && (
            <ClassificationResults result={result!} isLoading={isLoading} />
          )}
        </div>
      </div>
    </div>
  );
};