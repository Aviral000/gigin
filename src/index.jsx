import React from 'react';
import App from "./App";
import ReactDom from 'react-dom/client';
import { AppProvider } from './context/AppContext';

const Container = document.getElementById('root');
const root = ReactDom.createRoot(Container);
root.render(
    <React.StrictMode>
        <AppProvider>
            <App />
        </AppProvider>
    </React.StrictMode>
)