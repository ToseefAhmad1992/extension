import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{padding: '10px', background: '#eef', borderRadius: '8px', margin: '1em 0'}}>
    Hello! This is your order message.
  </div>
);

const root = document.getElementById('order-history-table-app');
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
