import { useState, useCallback } from 'react';

function ForgotPassword({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setStatus({ type: 'error', message: 'لطفاً ایمیل خود را وارد کنید' });
      return;
    }
    
    if (!emailRegex.test(email)) {
      setStatus({ type: 'error', message: 'لطفاً یک ایمیل معتبر وارد کنید' });
      return;
    }

    // Simulate API request
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ 
        type: 'success', 
        message: 'لینک بازیابی رمز عبور به ایمیل شما ارسال شد. لطفاً ایمیل خود را بررسی کنید.' 
      });
      // Clear form
      setEmail('');
    }, 1500);
  }, [email]);

  const goToLogin = useCallback((e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('login');
    }
  }, [onNavigate]);

  return (
    <div className="flex justify-center items-center min-h-[80vh] p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">بازیابی رمز عبور</h2>
        <p className="text-center text-gray-600 mb-6">
          ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود
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
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ایمیل</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل خود را وارد کنید"
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
            {isSubmitting ? 'در حال ارسال...' : 'ارسال لینک بازیابی'}
          </button>
        </form>

        <div className="text-center mt-5">
          <a 
            href="#" 
            onClick={goToLogin} 
            className="text-blue-600 hover:underline transition duration-150"
          >
            بازگشت به صفحه ورود
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword; 