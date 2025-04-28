import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await authService.register(formData);
      navigate('/dashboard'); // Redirect after successful registration
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">ROADMAP FINDER</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Sign Up</h2>
        </div>
        
        <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl p-3 mb-6 hover:bg-gray-50 transition-all shadow-sm">
          <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5" />
          <span className="font-medium">Continue with Google</span>
        </button>
        
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 text-sm">or sign up with email</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Full Name</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Enter Email"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-600 mb-1 text-sm font-medium">Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Create Password"
              required
              minLength="6"
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className={`w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all shadow-md font-medium ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account? <a href="/signin" className="text-indigo-600 font-medium hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
}