import React from 'react';
import Header from './components/Header';
import LanguageCard from './components/LanguageCard';
import FeaturedLesson from './components/FeaturedLesson';

const languages = [
  { language: 'Spanish', nativeName: 'Español', progress: 45, flagEmoji: '🇪🇸', totalLessons: 50, completedLessons: 23 },
  { language: 'French', nativeName: 'Français', progress: 30, flagEmoji: '🇫🇷', totalLessons: 50, completedLessons: 15 },
  { language: 'Japanese', nativeName: '日本語', progress: 20, flagEmoji: '🇯🇵', totalLessons: 50, completedLessons: 10 },
  { language: 'German', nativeName: 'Deutsch', progress: 60, flagEmoji: '🇩🇪', totalLessons: 50, completedLessons: 30 },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Lesson</h2>
          <FeaturedLesson
            title="Master Spanish Conversations"
            description="Learn essential phrases and cultural context for natural Spanish conversations"
            duration="30 mins"
            image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          />
        </div>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Your Languages</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Add Language
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang) => (
              <LanguageCard key={lang.language} {...lang} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Daily Goals</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Today's Progress</h3>
                <p className="text-gray-600">Keep up the great work!</p>
              </div>
              <div className="text-3xl font-bold text-blue-600">85%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-600 rounded-full h-3" style={{ width: '85%' }} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;