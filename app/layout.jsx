'use client'

import "@fortawesome/fontawesome-free/css/all.min.css";

import "./styles/index.css";
import "./styles/tailwind.css"
import { ToastContainer } from 'react-toastify';


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
     <body>
      <div className="relative w-full h-full py-40 min-h-screen">
        <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full" >
          {children}
          <ToastContainer />
          </div>
      </div>
     </body>
    </html>
  );
}




