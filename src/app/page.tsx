import DailyGoals from '@/components/DailyGoals';
import FeaturedLesson from '@/components/FeaturedLesson';
import Header from '@/components/Header';
import LanguageSection from '@/components/LanguageSection';

export default function Home() {
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

        <LanguageSection />
        <DailyGoals />
      </main>
    </div>
  );
}