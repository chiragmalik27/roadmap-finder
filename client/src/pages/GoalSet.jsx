export default function GoalSet() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Goal set</h2>
          <p className="text-gray-600 mb-6">
            Start your Journey and achieve it by posting what you learn, what you explore, what you mistake
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Enter your roadmap...</label>
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg"
                placeholder="e.g. Web Development"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Select Month</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>January</option>
                  <option>June</option>
                  {/* Add all months */}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Select Date</label>
                <select className="w-full p-3 border rounded-lg">
                  <option>15</option>
                  <option>30</option>
                  {/* Add all dates */}
                </select>
              </div>
            </div>
            
            <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 mt-6">
              Let's Begin
            </button>
          </div>
        </div>
      </div>
    );
  }