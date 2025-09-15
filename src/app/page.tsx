"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Main Content Container */}
      <div className="flex flex-col justify-center items-center px-6 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 max-w-6xl mx-auto leading-tight font-poppins">
            Become More than a Dev
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Break free from the endless job application cycle. Discover high-paying tech roles that value your engineering skills without the traditional SWE competition.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-6" style={{ width: '850px', height: '478px' }}>
          <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <video 
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              style={{ outline: 'none' }}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 850 478'%3E%3Crect width='850' height='478' fill='%23f8fafc'/%3E%3Ctext x='425' y='239' text-anchor='middle' dy='0.3em' fill='%234f46e5' font-family='system-ui' font-size='30' font-weight='600'%3EClick to Play%3C/text%3E%3C/svg%3E"
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mb-8">
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto font-medium">
            Stop competing for the same saturated SWE positions. Let me show you how to leverage your technical background for roles with better work-life balance, higher compensation, and faster hiring processes.
          </p>
          
          <div className="inline-block">
            <button 
              className="font-poppins font-bold text-white text-xl py-6 px-16 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)',
                border: 'none',
                cursor: 'pointer',
                padding: '24px 64px',
                fontSize: '20px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)';
                e.target.style.boxShadow = '0 15px 35px rgba(239, 68, 68, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';
                e.target.style.boxShadow = '0 10px 25px rgba(239, 68, 68, 0.3)';
              }}
            >
              Schedule Call
            </button>
          </div>
        </div>

        {/* Roles Section */}
        <div className="w-full max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800 font-poppins">
            Roles I Can Help You Land
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {[
              "Customer Success Engineer",
              "Sales Engineer", 
              "Partner Engineer",
              "Business Engineer",
              "Solutions Engineer",
              "Forward Deployed Engineer",
              "Technical Account Executive",
              "Solutions Architect"
            ].map((role, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg text-center"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '24px 16px',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                  minHeight: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '8px'
                }}
              >
                <h3 className="text-gray-900 font-semibold text-sm font-poppins leading-tight">
                  {role}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <p className="font-medium">Transform your career trajectory today</p>
      </footer>
    </div>
  );
}