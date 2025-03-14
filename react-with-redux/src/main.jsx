import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
// import { store } from "./store/index.js";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice.js";
import bonusReducer from "./slices/bonusSlice.js";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
