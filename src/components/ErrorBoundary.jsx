import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong: {this.state.error.message}</h1>;
        }

        return this.props.children;
    }
}

