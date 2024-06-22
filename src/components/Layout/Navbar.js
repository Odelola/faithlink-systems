import { useState, useEffect, memo, useCallback, useMemo } from 'react';
import Link from "next/link"
import { getRoute } from '../utils'

function Navbar() {

  const [toggle, setToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [mobileToggleId, setMobileToggleId] = useState(0);

// const windowScroll = window.scrollY;
  const [prevScroll, setPrevScroll] = useState(0);
  const [prevScrollNumber, setPrevScrollNumber] = useState("");

  // function useScrollDirection() {
  //   const [scrollDirection, setScrollDirection] = useState(null);
  
  //   useEffect(() => {
  //     let lastScrollY = window.scrollY;
  //     setPrevScrollNumber(lastScrollY)
  //     const updateScrollDirection = () => {
  //       const scrollY = window.scrollY;
  //       const direction = scrollY > lastScrollY ? "down" : "up";
  //       if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
  //         setScrollDirection(direction);
  //       }
  //       lastScrollY = scrollY > 0 ? scrollY : 0;
  //     };
  //     window.addEventListener("scroll", updateScrollDirection); // add event listener
  //     return () => {
  //       window.removeEventListener("scroll", updateScrollDirection); // clean up
  //     }
  //   }, []);
    
  //   return scrollDirection;
  // };
  
  // header component
  // const scrollDirection = useMemo(() => useScrollDirection) 

  function MenuLinks({ linkName, subLinks }) {
    return (
      <li className="relative group max-md:px-0 h-full flex items-center">
        <Link href={linkName.toLowerCase() == "career" ? "/career" : "#"} className="font-terminamedium font-medium w-full max-md:flex max-md:items-center max-md:justify-between max-md:text-white px-4 py-4 ">
          {linkName}
          <i className="md:hidden">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="inherit" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99547 5.40398C5.97441 5.18743 5.88579 4.98266 5.74185 4.81791L1.89746 0.391259C1.80764 0.281897 1.69653 0.191402 1.5707 0.125117C1.44486 0.0588321 1.30684 0.0180988 1.16479 0.00532431C1.02274 -0.0074511 0.879538 0.0079908 0.743634 0.0507373C0.60773 0.0934829 0.481879 0.162666 0.373512 0.254206C0.265144 0.345744 0.176456 0.457783 0.112682 0.583707C0.0489074 0.709631 0.0113393 0.846889 0.0021959 0.987378C-0.00694753 1.12787 0.0125188 1.26874 0.0594454 1.40168C0.106372 1.53463 0.179808 1.65694 0.275419 1.76141L3.52599 5.50261L0.275419 9.24417C0.180586 9.34877 0.107875 9.471 0.0615518 9.6037C0.015229 9.7364 -0.00377228 9.8769 0.00566298 10.0169C0.0150982 10.157 0.0527804 10.2938 0.116497 10.4192C0.180214 10.5447 0.268683 10.6564 0.376712 10.7477C0.484741 10.8389 0.610154 10.908 0.745592 10.9508C0.88103 10.9936 1.02376 11.0092 1.16542 10.9969C1.30707 10.9845 1.4448 10.9443 1.5705 10.8787C1.69621 10.813 1.80737 10.7233 1.89746 10.6147L5.74185 6.18806C5.83525 6.08084 5.90584 5.95617 5.94941 5.82147C5.99299 5.68676 6.00865 5.54479 5.99547 5.40398Z" fill="white"></path>
            </svg>
          </i>
        </Link>
        <SubMenu subLinks={subLinks} />
      </li>
    )
  }

  function SubMenu({ subLinks, className = "" }) {
    if (subLinks?.length == 0 || !subLinks) return;
    return (
      subLinks?.length !== 0 && <ul className={"absolute left-0 top-[100%] z-50 min-w-[300px] overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:h-max bg-white max-md:hidden border-t-[3px] border-primary h-0" + className} style={{ transition: "height 3s linear, opacity .2s ease-in, visibility .2s ease-in" }}>
        {subLinks?.map((item, index) => (
          <li key={item} className={`invisible translate-x-[-8px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:visible origin-center`} style={{ transitionDelay: `${index * .15}s`, }}>
            <Link href={getRoute[item] ?? "/"}
              className={`flex items-center justify-between w-full py-4 px-5 gap-x-4 bg-white hover:bg-[#f3f3f3] -translate-x-8 group-hover:translate-x-0`} style={{ transition: "all .3s ease-in-out" }}>
              <figure className="flex items-center gap-[17px]">
                <figcaption className="text-nowrap">
                  {item.toUpperCase()}
                </figcaption>
              </figure>
              <i className="menu-card__icon">
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99547 5.40301C5.97441 5.18645 5.88579 4.98168 5.74185 4.81693L1.89746 0.390283C1.80764 0.28092 1.69653 0.190426 1.5707 0.124141C1.44486 0.0578555 1.30684 0.0171222 1.16479 0.00434775C1.02274 -0.00842766 0.879538 0.00701424 0.743634 0.0497608C0.60773 0.0925064 0.481879 0.16169 0.373512 0.253229C0.265144 0.344768 0.176456 0.456806 0.112682 0.58273C0.0489074 0.708654 0.0113393 0.845912 0.0021959 0.986402C-0.00694753 1.12689 0.0125188 1.26777 0.0594454 1.40071C0.106372 1.53365 0.179808 1.65596 0.275419 1.76044L3.52599 5.50163L0.275419 9.2432C0.180586 9.34779 0.107875 9.47002 0.0615518 9.60272C0.015229 9.73542 -0.00377228 9.87592 0.00566298 10.016C0.0150982 10.156 0.0527804 10.2928 0.116497 10.4183C0.180214 10.5437 0.268683 10.6554 0.376712 10.7467C0.484741 10.838 0.610154 10.907 0.745592 10.9498C0.88103 10.9926 1.02376 11.0083 1.16542 10.9959C1.30707 10.9835 1.4448 10.9433 1.5705 10.8777C1.69621 10.8121 1.80737 10.7223 1.89746 10.6137L5.74185 6.18708C5.83525 6.07986 5.90584 5.95519 5.94941 5.82049C5.99299 5.68579 6.00865 5.54381 5.99547 5.40301Z" fill="#004B85"></path>
                </svg>
              </i>
            </Link>
            {/* <InnerSubMenu /> */}
          </li>
        ))}
      </ul>
    )
  }

  function InnerSubMenu({ subLinks = ["engineering services"] }) {
    return (
      <ul className={"absolute left-0 z-50 invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 max-md:hidden"}>
        {subLinks?.map((item, index) => (
          <li key={item} className={`opacity-0 invisble group-hover:visible group-hover:opacity-100 group-hover:delay-${75 * index}`} style={{ transition: "all .3s ease-in-out" }}>
            <Link href={getRoute[item] ?? "/"}

              className="flex items-center justify-between w-full py-4 px-5 gap-x-4 bg-white hover:bg-[#f3f3f3] -translate-x-8 opacity-0 invisble group-hover:visible group-hover:opacity-100 group-hover:delay-${75 * index} group-hover:translate-x-0" style={{ transition: "all .3s ease-in-out" }}>
              <figure className="flex items-center gap-[17px]">
                <figcaption className="text-nowrap">
                  {item.toUpperCase()}
                </figcaption>
              </figure>
              <i className="menu-card__icon">
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.99547 5.40301C5.97441 5.18645 5.88579 4.98168 5.74185 4.81693L1.89746 0.390283C1.80764 0.28092 1.69653 0.190426 1.5707 0.124141C1.44486 0.0578555 1.30684 0.0171222 1.16479 0.00434775C1.02274 -0.00842766 0.879538 0.00701424 0.743634 0.0497608C0.60773 0.0925064 0.481879 0.16169 0.373512 0.253229C0.265144 0.344768 0.176456 0.456806 0.112682 0.58273C0.0489074 0.708654 0.0113393 0.845912 0.0021959 0.986402C-0.00694753 1.12689 0.0125188 1.26777 0.0594454 1.40071C0.106372 1.53365 0.179808 1.65596 0.275419 1.76044L3.52599 5.50163L0.275419 9.2432C0.180586 9.34779 0.107875 9.47002 0.0615518 9.60272C0.015229 9.73542 -0.00377228 9.87592 0.00566298 10.016C0.0150982 10.156 0.0527804 10.2928 0.116497 10.4183C0.180214 10.5437 0.268683 10.6554 0.376712 10.7467C0.484741 10.838 0.610154 10.907 0.745592 10.9498C0.88103 10.9926 1.02376 11.0083 1.16542 10.9959C1.30707 10.9835 1.4448 10.9433 1.5705 10.8777C1.69621 10.8121 1.80737 10.7223 1.89746 10.6137L5.74185 6.18708C5.83525 6.07986 5.90584 5.95519 5.94941 5.82049C5.99299 5.68579 6.00865 5.54381 5.99547 5.40301Z" fill="#004B85"></path>
                </svg>
              </i>
            </Link>
          </li>
        ))}
      </ul>
    )
  }


  return (
    <>
    {/*  ${scrollDirection === "down" ? "-top-24" : "top-0" }  */}
      <header className={`fixed left-0 w-full z-[1000] bg-white transition-transform text-textGray font-termina`}  style={{ transition: "all .3s ease-in-out" }}>
        <div className="justify-end bg-white max-slg:hidden">
          <div className="container">
            <div className="flex justify-end">
              <nav className="relative bg-primary ">
                <ul className="flex items-center text-white text-[8px] gap-x-2 px-2">
                  <li className="info-nav__item">
                    <Link href="/contact" className='p-1'>CONTACT</Link>
                  </li>
                  {/* <li className="info-nav__item">
                  <a href="tel:+234 818 600 0000">+234 (818) 600 0000</a>
                  </li> */}
                  <li className="info-nav__item border-l-[1px] border-l-[rgba(255,255,255,.2)]">

                    <a href="mailto:info@faithlinkltd.com" className='p-1 flex gap-x-2 items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>

                      info@faithlinkltd.com
                    </a>

                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="container flex justify-between items-center  pb-[5px]">
          <div className="header__left">
            <div className="header__brand">
              <Link href="/">
                <img src="/brandLogo.png" className="w-[200px] max-md:w-[150px]" alt="Brand Logo" />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-4 self-stretch">
            {/* <nav className="max-md:w-full max-md:h-screen max-md:fixed max-md:left-0 max-md:top-0 max-md:z-[999] bg-primaryColor max-md:overflow-y-scroll max-md:hidden" aria-label="Main"> */}
            <nav className="max-md:w-full max-md:h-screen max-md:fixed max-md:left-0 max-md:top-0 max-md:overflow-y-scroll max-slg:hidden h-full" aria-label="Main">
              <ul className="flex items-center max-md:flex-col max-md:w-full max-md:h-full max-md:py-[10%] max-md:justify-between max-md:items-start h-full">
                <MenuLinks linkName="CORPORATE" subLinks={["about us", "our vision and values", "our team", "founder's message", "milestones",]} />
                <MenuLinks linkName="ACTIVITY FIELDS" subLinks={["power sector", "infra development", "telecoms sector", "renewable energy", "fibre optics"]} />
                <MenuLinks linkName="SUSTAINABILITY" subLinks={["safe workplace", "integrated management system"]} />
                <MenuLinks linkName="CAREER" />
                <MenuLinks linkName="MEDIA CENTER" subLinks={["news", "photo gallery"]} />
              </ul>
            </nav>
          </div>
          <div className={`w-9 h-9 relative flex justify-center items-center z-[3000] cursor-pointer flex-col slg:hidden ${toggle ? "gap-y-0" : "gap-y-1"}`} onClick={() => setToggle(prev => !prev)}>
            {Array(3).fill("").map((_, index) => (
              <span key={index} className={`w-8 h-1 ${toggle ? "bg-white" : "bg-primary"} rounded-sm ${(index == 0 && toggle) ? "rotate-45" : ""}${(index == 1 && toggle) ? "hidden" : ""}${(index == 2 && toggle) ? "-rotate-45 -mt-1" : ""}`}></span>
            ))}
          </div>
        </div>
        <section className={`lg:hidden w-full min-h-screen mb-0 fixed ${toggle ? "left-0" : "-left-[100%]"} top-0 z-[2000] bg-primary overflow-x-hidden overflow-y-scroll`}>
          <div className="relative">
            <nav className="pt-4">
              {/* <ul className={`mx-7 mt-16 ${mobileToggle ? "translate-x-0" : "-translate-x-[100%]"}`}> */}
              {/* <ul className={`mx-7 mt-16 ${mobileToggle ? "absolute left-[-100%]" : "static"}`}> */}
              <ul className={`mx-7 mt-16`}>
                <li className='border-b border-[rgba(225,225,225,.5)]'>
                  <Link href="javascript:;" onClick={() => { setMobileToggle(prev => !prev); setMobileToggleId(prev => prev = 0); }} className='flex justify-between items-center text-white py-5 text-[16px]'>
                    CORPORATE
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.99547 5.40398C5.97441 5.18743 5.88579 4.98266 5.74185 4.81791L1.89746 0.391259C1.80764 0.281897 1.69653 0.191402 1.5707 0.125117C1.44486 0.0588321 1.30684 0.0180988 1.16479 0.00532431C1.02274 -0.0074511 0.879538 0.0079908 0.743634 0.0507373C0.60773 0.0934829 0.481879 0.162666 0.373512 0.254206C0.265144 0.345744 0.176456 0.457783 0.112682 0.583707C0.0489074 0.709631 0.0113393 0.846889 0.0021959 0.987378C-0.00694753 1.12787 0.0125188 1.26874 0.0594454 1.40168C0.106372 1.53463 0.179808 1.65694 0.275419 1.76141L3.52599 5.50261L0.275419 9.24417C0.180586 9.34877 0.107875 9.471 0.0615518 9.6037C0.015229 9.7364 -0.00377228 9.8769 0.00566298 10.0169C0.0150982 10.157 0.0527804 10.2938 0.116497 10.4192C0.180214 10.5447 0.268683 10.6564 0.376712 10.7477C0.484741 10.8389 0.610154 10.908 0.745592 10.9508C0.88103 10.9936 1.02376 11.0092 1.16542 10.9969C1.30707 10.9845 1.4448 10.9443 1.5705 10.8787C1.69621 10.813 1.80737 10.7233 1.89746 10.6147L5.74185 6.18806C5.83525 6.08084 5.90584 5.95617 5.94941 5.82147C5.99299 5.68676 6.00865 5.54479 5.99547 5.40398Z" fill="white"></path>
                    </svg>
                  </Link>
                  {mobileToggleId == 0 && <MobileSubMenu subLinks={["about us", "our vision and values", "our team", "founder's message", "milestones",]} mobileToggle={mobileToggle} setToggle={setToggle} setMobileToggle={setMobileToggle} />}
                </li>
                <li className='border-b border-[rgba(225,225,225,.5)]'>
                  <Link href="javascript:;" onClick={() => { setMobileToggle(prev => !prev); setMobileToggleId(prev => prev = 1); }} className='flex justify-between items-center text-white py-5 text-[16px]'>
                    ACTIVITY FIELDS
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.99547 5.40398C5.97441 5.18743 5.88579 4.98266 5.74185 4.81791L1.89746 0.391259C1.80764 0.281897 1.69653 0.191402 1.5707 0.125117C1.44486 0.0588321 1.30684 0.0180988 1.16479 0.00532431C1.02274 -0.0074511 0.879538 0.0079908 0.743634 0.0507373C0.60773 0.0934829 0.481879 0.162666 0.373512 0.254206C0.265144 0.345744 0.176456 0.457783 0.112682 0.583707C0.0489074 0.709631 0.0113393 0.846889 0.0021959 0.987378C-0.00694753 1.12787 0.0125188 1.26874 0.0594454 1.40168C0.106372 1.53463 0.179808 1.65694 0.275419 1.76141L3.52599 5.50261L0.275419 9.24417C0.180586 9.34877 0.107875 9.471 0.0615518 9.6037C0.015229 9.7364 -0.00377228 9.8769 0.00566298 10.0169C0.0150982 10.157 0.0527804 10.2938 0.116497 10.4192C0.180214 10.5447 0.268683 10.6564 0.376712 10.7477C0.484741 10.8389 0.610154 10.908 0.745592 10.9508C0.88103 10.9936 1.02376 11.0092 1.16542 10.9969C1.30707 10.9845 1.4448 10.9443 1.5705 10.8787C1.69621 10.813 1.80737 10.7233 1.89746 10.6147L5.74185 6.18806C5.83525 6.08084 5.90584 5.95617 5.94941 5.82147C5.99299 5.68676 6.00865 5.54479 5.99547 5.40398Z" fill="white"></path>
                    </svg>
                  </Link>
                  {mobileToggleId == 1 && <MobileSubMenu subLinks={["power sector", "infra development", "telecoms sector", "renewable energy", "fibre optics"]} mobileToggle={mobileToggle} setToggle={setToggle} setMobileToggle={setMobileToggle} />}
                </li>
                <li className='border-b border-[rgba(225,225,225,.5)]'>
                  <Link href="javascript:;" onClick={() => { setMobileToggle(prev => !prev); setMobileToggleId(prev => prev = 2); }} className='flex justify-between items-center text-white py-5 text-[16px]'>
                    SUSTAINABILITY
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.99547 5.40398C5.97441 5.18743 5.88579 4.98266 5.74185 4.81791L1.89746 0.391259C1.80764 0.281897 1.69653 0.191402 1.5707 0.125117C1.44486 0.0588321 1.30684 0.0180988 1.16479 0.00532431C1.02274 -0.0074511 0.879538 0.0079908 0.743634 0.0507373C0.60773 0.0934829 0.481879 0.162666 0.373512 0.254206C0.265144 0.345744 0.176456 0.457783 0.112682 0.583707C0.0489074 0.709631 0.0113393 0.846889 0.0021959 0.987378C-0.00694753 1.12787 0.0125188 1.26874 0.0594454 1.40168C0.106372 1.53463 0.179808 1.65694 0.275419 1.76141L3.52599 5.50261L0.275419 9.24417C0.180586 9.34877 0.107875 9.471 0.0615518 9.6037C0.015229 9.7364 -0.00377228 9.8769 0.00566298 10.0169C0.0150982 10.157 0.0527804 10.2938 0.116497 10.4192C0.180214 10.5447 0.268683 10.6564 0.376712 10.7477C0.484741 10.8389 0.610154 10.908 0.745592 10.9508C0.88103 10.9936 1.02376 11.0092 1.16542 10.9969C1.30707 10.9845 1.4448 10.9443 1.5705 10.8787C1.69621 10.813 1.80737 10.7233 1.89746 10.6147L5.74185 6.18806C5.83525 6.08084 5.90584 5.95617 5.94941 5.82147C5.99299 5.68676 6.00865 5.54479 5.99547 5.40398Z" fill="white"></path>
                    </svg>
                  </Link>
                  {mobileToggleId == 2 && <MobileSubMenu subLinks={["safe workplace", "integrated management system"]} mobileToggle={mobileToggle} setToggle={setToggle} setMobileToggle={setMobileToggle} />}
                </li>
                <li className='border-b border-[rgba(225,225,225,.5)]'>
                  <Link href="/career" onClick={() => { setToggle(prev => prev = false) }} className='flex justify-between items-center text-white py-5 text-[16px]'>
                    CAREER
                    {/* <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.99547 5.40398C5.97441 5.18743 5.88579 4.98266 5.74185 4.81791L1.89746 0.391259C1.80764 0.281897 1.69653 0.191402 1.5707 0.125117C1.44486 0.0588321 1.30684 0.0180988 1.16479 0.00532431C1.02274 -0.0074511 0.879538 0.0079908 0.743634 0.0507373C0.60773 0.0934829 0.481879 0.162666 0.373512 0.254206C0.265144 0.345744 0.176456 0.457783 0.112682 0.583707C0.0489074 0.709631 0.0113393 0.846889 0.0021959 0.987378C-0.00694753 1.12787 0.0125188 1.26874 0.0594454 1.40168C0.106372 1.53463 0.179808 1.65694 0.275419 1.76141L3.52599 5.50261L0.275419 9.24417C0.180586 9.34877 0.107875 9.471 0.0615518 9.6037C0.015229 9.7364 -0.00377228 9.8769 0.00566298 10.0169C0.0150982 10.157 0.0527804 10.2938 0.116497 10.4192C0.180214 10.5447 0.268683 10.6564 0.376712 10.7477C0.484741 10.8389 0.610154 10.908 0.745592 10.9508C0.88103 10.9936 1.02376 11.0092 1.16542 10.9969C1.30707 10.9845 1.4448 10.9443 1.5705 10.8787C1.69621 10.813 1.80737 10.7233 1.89746 10.6147L5.74185 6.18806C5.83525 6.08084 5.90584 5.95617 5.94941 5.82147C5.99299 5.68676 6.00865 5.54479 5.99547 5.40398Z" fill="white"></path>
                    </svg> */}
                  </Link>
                </li>
                <li className='border-b border-[rgba(225,225,225,.5)]'>
                  <Link href="javascript:;" onClick={() => { setMobileToggle(prev => !prev); setMobileToggleId(prev => prev = 4); }} className='flex justify-between items-center text-white py-5 text-[16px]'>
                    MEDIA CENTER
                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.99547 5.40398C5.97441 5.18743 5.88579 4.98266 5.74185 4.81791L1.89746 0.391259C1.80764 0.281897 1.69653 0.191402 1.5707 0.125117C1.44486 0.0588321 1.30684 0.0180988 1.16479 0.00532431C1.02274 -0.0074511 0.879538 0.0079908 0.743634 0.0507373C0.60773 0.0934829 0.481879 0.162666 0.373512 0.254206C0.265144 0.345744 0.176456 0.457783 0.112682 0.583707C0.0489074 0.709631 0.0113393 0.846889 0.0021959 0.987378C-0.00694753 1.12787 0.0125188 1.26874 0.0594454 1.40168C0.106372 1.53463 0.179808 1.65694 0.275419 1.76141L3.52599 5.50261L0.275419 9.24417C0.180586 9.34877 0.107875 9.471 0.0615518 9.6037C0.015229 9.7364 -0.00377228 9.8769 0.00566298 10.0169C0.0150982 10.157 0.0527804 10.2938 0.116497 10.4192C0.180214 10.5447 0.268683 10.6564 0.376712 10.7477C0.484741 10.8389 0.610154 10.908 0.745592 10.9508C0.88103 10.9936 1.02376 11.0092 1.16542 10.9969C1.30707 10.9845 1.4448 10.9443 1.5705 10.8787C1.69621 10.813 1.80737 10.7233 1.89746 10.6147L5.74185 6.18806C5.83525 6.08084 5.90584 5.95617 5.94941 5.82147C5.99299 5.68676 6.00865 5.54479 5.99547 5.40398Z" fill="white"></path>
                    </svg>
                  </Link>
                  {mobileToggleId == 4 && <MobileSubMenu subLinks={["news", "photo gallery"]} mobileToggle={mobileToggle} setToggle={setToggle} setMobileToggle={setMobileToggle} />}
                </li>
              </ul>
            </nav>
          </div>
          {/* </div> */}
        </section>
        {/* <section className={`md:hidden w-full h-screen ${toggle ? "left-0" : "-left-[100%]"} mb-0 fixed top-0 bottom-0 z-[2000] bg-primary`}> */}
      </header>
    </>
  )
}


function MobileSubMenu({ subLinks, mobileToggle, setMobileToggle, setToggle }) {
  return (
    <ul className={`mx-7 mt-24 absolute top-0 w-full h-full bg-primary ${mobileToggle ? "left-0" : "left-[200%]"}`}>

      <li onClick={() => { setMobileToggle(prev => prev = false) }} className={`flex items-center gap-x-1 border-b pb-5 border-[rgba(225,225,225,.5)]`}>
        <i className="rotate-180">
          <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99547 5.40398C5.97441 5.18743 5.88579 4.98266 5.74185 4.81791L1.89746 0.391259C1.80764 0.281897 1.69653 0.191402 1.5707 0.125117C1.44486 0.0588321 1.30684 0.0180988 1.16479 0.00532431C1.02274 -0.0074511 0.879538 0.0079908 0.743634 0.0507373C0.60773 0.0934829 0.481879 0.162666 0.373512 0.254206C0.265144 0.345744 0.176456 0.457783 0.112682 0.583707C0.0489074 0.709631 0.0113393 0.846889 0.0021959 0.987378C-0.00694753 1.12787 0.0125188 1.26874 0.0594454 1.40168C0.106372 1.53463 0.179808 1.65694 0.275419 1.76141L3.52599 5.50261L0.275419 9.24417C0.180586 9.34877 0.107875 9.471 0.0615518 9.6037C0.015229 9.7364 -0.00377228 9.8769 0.00566298 10.0169C0.0150982 10.157 0.0527804 10.2938 0.116497 10.4192C0.180214 10.5447 0.268683 10.6564 0.376712 10.7477C0.484741 10.8389 0.610154 10.908 0.745592 10.9508C0.88103 10.9936 1.02376 11.0092 1.16542 10.9969C1.30707 10.9845 1.4448 10.9443 1.5705 10.8787C1.69621 10.813 1.80737 10.7233 1.89746 10.6147L5.74185 6.18806C5.83525 6.08084 5.90584 5.95617 5.94941 5.82147C5.99299 5.68676 6.00865 5.54479 5.99547 5.40398Z" fill="white"></path>
          </svg>
        </i>
        <span className='text-white'>BACK</span>
      </li>
      {subLinks.map(item => (

        <li className='border-b border-[rgba(225,225,225,.5)]' key={item}>
          <Link href={getRoute[item] ?? "/"} className='flex justify-between text-white py-5 text-[16px]' onClick={() => { setMobileToggle(prev => prev = false); setToggle(prev => prev = false) }}>
            {item.toUpperCase()}
          </Link>

        </li>
      ))}
    </ul>
  )
}
export default Navbar