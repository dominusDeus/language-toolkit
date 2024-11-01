'use client';

import { Globe2 } from 'lucide-react';

type LanguageCardProps = {
  language: string;
  nativeName: string;
  progress: number;
  flagEmoji: string;
  totalLessons: number;
  completedLessons: number;
};

export default function LanguageCard({
  language,
  nativeName,
  progress,
  flagEmoji,
  totalLessons,
  completedLessons,
}: LanguageCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 cursor-pointer group">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{flagEmoji}</div>
        <div className="bg-blue-50 p-2 rounded-full group-hover:bg-blue-100 transition-colors">
          <Globe2 className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{language}</h3>
      <p className="text-sm text-gray-600 mb-4">{nativeName}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div
          className="bg-blue-600 rounded-full h-2 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-gray-600">
        {completedLessons} of {totalLessons} lessons completed
      </p>
    </div>
  );
}