import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import "./index.css"
import { QuizeProvider } from './contexts/quiz';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizeProvider>
    <Quiz />
  </QuizeProvider>
);
