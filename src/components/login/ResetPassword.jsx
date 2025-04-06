import { useState, useCallback } from 'react';

function ResetPassword({ onNavigate }) {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // For demo purposes, we'll assume the token is in the URL
  const token = new URLSearchParams(window.location.search).get('token') || 'demo-token';

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.password || !formData.confirmPassword) {
      setStatus({ type: 'error', message: 'لطفاً تمام فیلدها را پر کنید' });
      return;
    }
    
    if (formData.password.length < 6) {
      setStatus({ type: 'error', message: 'رمز عبور باید حداقل ۶ کاراکتر باشد' });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setStatus({ type: 'error', message: 'رمز عبور و تکرار آن مطابقت ندارند' });
      return;
    }

    // Simulate API request
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    // Simulate network request with token
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ 
        type: 'success', 
        message: 'رمز عبور شما با موفقیت تغییر یافت. اکنون می‌توانید وارد شوید.' 
      });
      
      // Clear form
      setFormData({ password: '', confirmPassword: '' });
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        if (onNavigate) {
          onNavigate('login');
        }
      }, 2000);
    }, 1500);
  }, [formData, token, onNavigate]);

  return (
    <div className="flex justify-center items-center min-h-[80vh] p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">تنظیم رمز عبور جدید</h2>
        <p className="text-center text-gray-600 mb-6">
          لطفاً رمز عبور جدید خود را وارد کنید
        </p>

        {status.message && (
          <div 
            className={`p-3 rounded-md mb-4 text-center text-sm animate-fade-in ${
              status.type === 'error' 
                ? 'bg-red-50 text-red-500' 
                : 'bg-green-50 text-green-600'
            }`} 
            role="alert"
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">رمز عبور جدید</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="رمز عبور جدید خود را وارد کنید"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">تکرار رمز عبور جدید</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="رمز عبور جدید خود را مجدداً وارد کنید"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 transform hover:scale-105 ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'در حال پردازش...' : 'تغییر رمز عبور'}
          </button>
        </form>

        <div className="text-center mt-5">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('login');
            }} 
            className="text-blue-600 hover:underline transition duration-150"
          >
            بازگشت به صفحه ورود
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword; 