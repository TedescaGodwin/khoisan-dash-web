'use client'

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//import { Navigation, Router } from "next/navigation";
import { getToken } from "form/utils/auth-service";


export default function Admin({ children }) {
  const [tokenData, setTokenData] = useState([]);
  useEffect(() => {
     function fetchData() {      
      var data =  getToken();
      setTokenData(data);
    }

    fetchData();
  }, []);
  const router = useRouter();
  if(tokenData != null){
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
              <AdminNavbar />
              {/* Header */}
              <HeaderStats />
              <div className="px-4 md:px-10 mx-auto w-full -m-24">
                {children}
                <FooterAdmin />
              </div>
            </div>
        </>
  )
}
else{
  router.push('login');
}
}

