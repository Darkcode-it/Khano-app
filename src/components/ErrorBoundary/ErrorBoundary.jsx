// ErrorBoundary.js
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error Boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 text-red-700">
          خطایی در کامپوننت رخ داده است. لطفا صفحه را رفرش کنید.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;