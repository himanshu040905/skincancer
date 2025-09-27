export interface ClassificationResult {
  prediction: 'Benign' | 'Malignant';
  confidence: number;
  gradcam_url?: string;
}

export interface ApiResponse {
  success: boolean;
  result?: ClassificationResult;
  error?: string;
}

export type NavigationSection = 'home' | 'about' | 'instructions' | 'disclaimer';