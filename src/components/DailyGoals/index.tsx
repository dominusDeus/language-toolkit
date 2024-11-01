export default function DailyGoals() {
  return (
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
  );
}