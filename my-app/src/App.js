import React from  'react';
import Header from './header';
import Sidebar from './sidebar';
import Emaillist from './Emaillist';
import Compose from './compose';
import { selectSendMessageIsOpen } from './Features/mailSlice';
import  {useSelector} from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import EmailDetail from './Emaildetail';
export default function App() {
   
    const isMessageOpen = useSelector(selectSendMessageIsOpen);
    console.log("App",isMessageOpen);
    return (
      <div className="App">
        <Header />
        <div className="app_body">
          <Sidebar />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Emaillist />} />
            <Route path="/mail" element={<EmailDetail />} />
          </Routes>
          </BrowserRouter>
          </div>
          { isMessageOpen && <Compose />}
      </div>
    );
  }