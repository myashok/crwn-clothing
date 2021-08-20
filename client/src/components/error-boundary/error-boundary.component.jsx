import React from 'react';
import styles from './error-boundary.styles.module.scss'
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log({error, errorInfo});
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div className={styles.overlay}>
                <div className={styles.container} />
                <div className={styles.text} > 
                    The Page is Broken 
                </div>
            </div>
        )
      }
  
      return this.props.children; 
    }
}
export default ErrorBoundary;