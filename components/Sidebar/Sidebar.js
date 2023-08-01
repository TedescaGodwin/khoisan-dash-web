'use client'

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { logoutSession } from "form/utils/auth-service";
export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const pathname = usePathname();
  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow("bg-white m-2 pb-2 px-6")}
        >
          <i className="fas fa-bars"></i>
        </button>
        
        <Link
          href="/"
          className="md:block md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-`2 px-0">

          <div className='text-center mb-3'>
            <Image src="/img/logo.png" alt="KhoiDash Logo" width={100} height={80} /><br />
            <div className='flex text-3xl font-light tracking-wide'>
              <div className='text-green-900'>KhoiSan</div> <div className='text-orange-500'>Dash</div>
            </div>
          </div>

        </Link>
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            <NotificationDropdown />
          </li>
          <li className="inline-block relative">
            <UserDropdown />
          </li>
        </ul>
        <div
          className={
            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block pb-2 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <Link
                  href="/"
                  className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                  
                    KhoiSanDash
                  
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="mt-6 mb-4 md:hidden">
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Search"
                className="border-0 px-3 py-2 h-12 border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
              />
            </div>
          </div>

         
          <hr className="my-4 md:min-w-full" />
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline">
            Report
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link
                href="/dashboard"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/dashboard") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fas fa-chart-bar mr-2 text-sm " +
                    (pathname.indexOf("/dashboard") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Dashboard
              </Link>
            </li>
            <li className="items-center">
              <Link
                href="/audittrail"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/audittrail") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "far fa-newspaper mr-2 text-sm " +
                    (pathname.indexOf("/audittrail") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Audit Trail
              </Link>
            </li>
            <li className="items-center">
              <Link
                href="/compliance-report"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/compliance-report") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "far fa-newspaper mr-2 text-sm " +
                    (pathname.indexOf("/compliance-report") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Compliance
              </Link>
            </li>
            <li className="items-center">
              <Link
                href="/customs-customary-law-reports"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/customs-customary-law-reports") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "far fa-newspaper mr-2 text-sm " +
                    (pathname.indexOf("/customs-customary-law-reports ") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Customs Customary Law
              </Link>
            </li>
            <li className="items-center">
              <Link
                href="/research-reports"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/research-reports") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "far fa-newspaper mr-2 text-sm " +
                    (pathname.indexOf("/research-reports") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Research Report
              </Link>
            </li>
            <li className="items-center">
              <Link
                href="/similar-duplicate-reports"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/similar-duplicate-reports") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "far fa-newspaper mr-2 text-sm " +
                    (pathname.indexOf("/similar-duplicate-reports") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Similar Duplicate

              </Link>
            </li>
          </ul>
        
          <hr className="my-4 md:min-w-full" />
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline">
            Application
          </h6>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <li className="items-center">
              <Link
                href="/lodgement"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/lodgement") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fas fa-file mr-2 text-sm " +
                    (pathname.indexOf("/lodgement") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Lodgement
              </Link>
            </li>  
            <li className="items-center">
              <Link
                href="/member"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/member") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fas fa-user mr-2 text-sm " +
                    (pathname.indexOf("/member") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Member
              </Link>
            </li>
            <li className="items-center">
              <Link
                href="/leader"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/leader") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fas fa-graduation-cap mr-2 text-sm " +
                    (pathname.indexOf("/leader") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Leader
              </Link>
            </li>

            <li className="items-center">
              <Link
                href="/head"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/head") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fas fa-code-branch mr-2 text-sm " +
                    (pathname.indexOf("/head") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Branch Head
              </Link>
            </li>
          </ul>
          <hr className="my-4 md:min-w-full" />
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline">
            Drafts
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link
                href="/research"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/research") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "	fab fa-firstdraft mr-2 text-sm " +
                    (pathname.indexOf("/research") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Research
              </Link>
            </li>
            <li className="items-center">
              <Link
                href="/premier"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/premier") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fab fa-firstdraft mr-2 text-sm " +
                    (pathname.indexOf("/premier") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Premier
              </Link>
            </li>
            <li className="items-center">
              <Link
                href="/minister"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/minister") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fab fa-firstdraft mr-2 text-sm " +
                    (pathname.indexOf("/minister") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Minister
              </Link>
            </li>
          </ul>
          <hr className="my-4 md:min-w-full" />
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline">
            Manage
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <li className="items-center">
              <Link
                href="/branch"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/branch") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fas fa-users mr-2 text-sm " +
                    (pathname.indexOf("/branch") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Branch
              </Link>
            </li>          
          <li className="items-center">
              <Link
                href="/community"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/community") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "fas fa-users mr-2 text-sm " +
                    (pathname.indexOf("/community") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Community
              </Link>
         </li>
        
        </ul>
        
        <hr className="my-4 md:min-w-full" />
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline">
            Certification
          </h6>
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
          <li className="items-center">
              <Link
                href="/certfication/issue"
                className={
                  "text-xs uppercase pb-2 font-bold block " +
                  (pathname.indexOf("/certfication/issue") !== -1
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }>

                <i
                  className={
                    "	fa fa-certificate mr-2 text-sm " +
                    (pathname.indexOf("/certfication/issue") !== -1
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                ></i>Issue
              </Link>
            </li>
          </ul>

          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          {/* Heading */}
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-2 no-underline">
            User
          </h6>
          {/* Navigation */}

          <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
            <li className="items-center">
              <Link
                href="/login" onClick={logoutSession}
                className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase pb-2 font-bold block">

                <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}Logout
              </Link>
            </li>


          </ul>
        </div>
      </div>
    </nav>
  );
}
