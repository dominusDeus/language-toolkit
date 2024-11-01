'use client';

import { Play, Clock } from 'lucide-react';
import Image from 'next/image';

type FeaturedLessonProps = {
  title: string;
  description: string;
  duration: string;
  image: string;
};

export default function FeaturedLesson({ title, description, duration, image }: FeaturedLessonProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl group h-64">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-6 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Play className="w-4 h-4" />
            <span>Start Lesson</span>
          </button>
          <div className="flex items-center text-gray-200">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}