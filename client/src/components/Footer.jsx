export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-indigo-600">RoadmapFinder</h3>
              <p className="text-gray-600 mt-2">Your guide to success</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600">Terms</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} RoadmapFinder. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }