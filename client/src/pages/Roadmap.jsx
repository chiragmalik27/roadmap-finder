export default function Roadmap() {
  const categories = ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'S'];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4">  {/* Increased top padding */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Roadmap</h1>
        <p className="text-lg mb-8">
          If you want to succeed in life you should have clear roadmap for achieving your goal in life. 
          This tool helps you to find accurate path.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Explore</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div 
              key={category} 
              className="border p-4 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <h3 className="font-medium text-lg">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}