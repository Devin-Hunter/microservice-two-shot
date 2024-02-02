import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default async function LoadShoes() {

  const response = await fetch('http://localhost:8081/api/shoes/');

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    root.render(
      <React.StrictMode>
        <App shoes={data} />
      </React.StrictMode>
    );
  } else {
    console.error(response);
  }
}
LoadShoes();
