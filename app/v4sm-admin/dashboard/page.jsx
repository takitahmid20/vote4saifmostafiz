'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedManifesto, setSelectedManifesto] = useState(null);

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('v4sm-admin-auth');
    if (auth !== 'authenticated') {
      router.push('/v4sm-admin');
      return;
    }
    setIsAuthenticated(true);

    // Fetch submissions from Google Sheets
    fetchSubmissions();
  }, [router]);

  const fetchSubmissions = async () => {
    try {
      setIsLoading(true);
      
      // Get API key from localStorage
      const apiKey = localStorage.getItem('v4sm-admin-key');
      
      const response = await fetch('/api/manifesto', {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      });
      const data = await response.json();
      
      if (data.status === 'success') {
        setSubmissions(data.data || []);
      } else {
        setError('Failed to load submissions');
      }
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Error loading data. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('v4sm-admin-auth');
    localStorage.removeItem('v4sm-admin-key');
    router.push('/v4sm-admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Vote4Saif Manifesto Submissions</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Card */}
        <div className="bg-gradient-to-r from-[#063C2C] to-emerald-700 rounded-2xl shadow-lg p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-semibold mb-1">Total Submissions</p>
              <p className="text-4xl font-bold">{submissions.length}</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">All Submissions</h2>
            <button
              onClick={fetchSubmissions}
              className="bg-[#063C2C] hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#063C2C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading submissions...</p>
              </div>
            </div>
          ) : error ? (
            <div className="px-6 py-20 text-center">
              <div className="text-red-600 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-700 font-semibold">{error}</p>
              <button
                onClick={fetchSubmissions}
                className="mt-4 text-[#063C2C] hover:underline font-semibold"
              >
                Try Again
              </button>
            </div>
          ) : submissions.length === 0 ? (
            <div className="px-6 py-20 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-gray-600">No submissions yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Phone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Manifesto/Opinion
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {submissions.map((submission, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {submission.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {submission.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {submission.phone}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {submission.address}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <span className="line-clamp-2 flex-1">
                            {submission.manifesto}
                          </span>
                          {submission.manifesto && submission.manifesto.length > 100 && (
                            <button
                              onClick={() => setSelectedManifesto(submission)}
                              className="text-[#063C2C] hover:text-emerald-700 font-semibold whitespace-nowrap text-xs underline"
                            >
                              View Full
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Manifesto Detail Modal */}
      {selectedManifesto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden animate-fadeInUp">
            
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#063C2C] to-emerald-700 text-white p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Manifesto/Opinion Details</h3>
                <button
                  onClick={() => setSelectedManifesto(null)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
              <div className="space-y-4">
                {/* Submission Info */}
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Name</label>
                    <p className="text-lg font-semibold text-gray-900 mt-1">{selectedManifesto.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Phone</label>
                    <p className="text-lg text-gray-900 mt-1">{selectedManifesto.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Address</label>
                    <p className="text-lg text-gray-900 mt-1">{selectedManifesto.address}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Date & Time</label>
                    <p className="text-lg text-gray-900 mt-1">{selectedManifesto.timestamp}</p>
                  </div>
                </div>

                {/* Manifesto Content */}
                <div>
                  <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider block mb-3">
                    Manifesto/Opinion
                  </label>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-base text-gray-800 leading-relaxed whitespace-pre-wrap">
                      {selectedManifesto.manifesto}
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedManifesto(null)}
                  className="bg-gradient-to-r from-[#063C2C] to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
