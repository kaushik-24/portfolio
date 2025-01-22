"use client"

import gsap from "gsap";
import { useEffect, useRef, useState } from "react"
import { useWindowScroll } from "react-use";

const navItems = ['Home', 'Features', 'About', 'contact']

const NavBar = () => {
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  const {y: currentScrollY} = useWindowScroll();

  useEffect(() => {
    if(currentScrollY === 0){
      setIsNavVisible(true);
      if(navContainerRef.current){
        navContainerRef.current.classList.remove('floating-nav');
      }
    } else if(currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      if(navContainerRef.current){
        navContainerRef.current.classList.add('floating-nav');
      }
    } else if(currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      if(navContainerRef.current){
        navContainerRef.current.classList.add('floating-nav');
      }
    }
    setLastScrollY(currentScrollY)
  }, [currentScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y:isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible])

 return (
    <div ref={navContainerRef} className="fixed inset-x-0 top-0 z-50 h-16 border-none transition-all
      duration-700 sm:inset-x-6">
      <header className="absolute top-1/2 w-full
        -translate-y-1/2">
        <nav className=" flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <p className="font-[nerd-regular] text-3xl">Port<span className="text-5xl text-blue-500 underline">f</span>olio</p>
            </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn">
                  {item}
              </a>
              ))}
            </div>

          </div>
        </nav>
      </header>

    </div>
  )
}

export default NavBar
