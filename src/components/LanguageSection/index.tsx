import { languages } from '@/lib/data';
import LanguageCard from '../LanguageCard';

export default function LanguageSection() {
  return (
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
  );
}