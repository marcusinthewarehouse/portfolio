import './App.css'
import Portfolio from './pages/portfolio'
import type { ErrorInfo } from 'react'
import { Component } from 'react'

type State = { hasError: boolean }

class AppErrorBoundary extends Component<{}, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // Could log to external service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <div className="max-w-lg text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-slate-300">Please check the console for errors or try reloading the page.</p>
          </div>
        </div>
      )
    }

    return <Portfolio />
  }
}

export default function App() {
  return <AppErrorBoundary />
}
