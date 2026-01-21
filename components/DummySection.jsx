'use client';

export default function DummySection() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              আমাদের <span className="text-emerald-600">প্রতিশ্রুতি</span>
            </h2>
            <p className="text-lg text-gray-600">
              সিরাজগঞ্জ-৬ এর জনগণের জন্য আমাদের পরিকল্পনা
            </p>
          </div>

          {/* Dummy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'শিক্ষা', icon: '📚', desc: 'মানসম্মত শিক্ষা ব্যবস্থা' },
              { title: 'স্বাস্থ্য', icon: '🏥', desc: 'সবার জন্য স্বাস্থ্যসেবা' },
              { title: 'কর্মসংস্থান', icon: '💼', desc: 'যুবদের কর্মসংস্থান সৃষ্টি' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* More Content */}
          <div className="bg-emerald-50 rounded-3xl p-12 space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">আমাদের লক্ষ্য</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>দুর্নীতিমুক্ত ও স্বচ্ছ প্রশাসন</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>সকলের জন্য সমান সুযোগ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>অবকাঠামো উন্নয়ন</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>পরিবেশ রক্ষা</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
