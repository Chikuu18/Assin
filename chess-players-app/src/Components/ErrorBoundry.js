import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Log error or send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ color: 'red' }}>Something went wrong. Please try again.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
