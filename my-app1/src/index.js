import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'I like Berserk!!!', likeCounter: 999},
  {id: 2, message: 'JoJo classic.', likeCounter: 154},
  {id: 3, message: 'Bionicle is the best Lego series.', likeCounter: 455}
]

let dialogs = [
  {id: 1, name: 'Igor'},
  {id: 2, name: 'Jeki4'},
  {id: 3, name: 'TheZhenek'},
  {id: 4, name: 'Alina'},
  {id: 5, name: 'Dias'},
]

let messages = [
  {id: 1, message: 'Hi fag'},
  {id: 2, message: 'No u faggot'},
  {id: 3, message: 'Yeaaaaaaaah)'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
