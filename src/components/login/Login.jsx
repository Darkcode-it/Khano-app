import { useState, useCallback } from 'react';

function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('لطفاً تمام فیلدها را پر کنید');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('لطفاً یک ایمیل معتبر وارد کنید');
      return;
    }

    if (password.length < 6) {
      setError('رمز عبور باید حداقل ۶ کاراکتر باشد');
      return;
    }

    setError('');
    console.log('درخواست ورود با موفقیت شبیه‌سازی شد:', { email });
  }, [email, password]);

  const goToRegister = useCallback((e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('register');
    }
  }, [onNavigate]);

  const goToForgotPassword = useCallback((e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('forgot-password');
    }
  }, [onNavigate]);

  return (
    <div className="flex justify-center items-center min-h-[80vh] p-5">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">ورود به حساب کاربری</h2>

        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4 text-center text-sm animate-fade-in" role="alert">
            {error}
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
              aria-describedby={error ? 'email-error' : undefined}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">رمز عبور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              aria-describedby={error ? 'password-error' : undefined}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-200 transform hover:scale-105"
          >
            ورود
          </button>
        </form>

        <div className="flex justify-between mt-5 text-sm text-gray-600">
          <a href="#" onClick={goToForgotPassword} className="text-blue-600 hover:underline transition duration-150">فراموشی رمز عبور</a>
          <a href="#" onClick={goToRegister} className="text-blue-600 hover:underline transition duration-150">ثبت نام</a>
        </div>
      </div>
    </div>
  );
}

export default Login;