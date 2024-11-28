

// // /src/app/components/Navbar.jsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import { Sling as Hamburger } from 'hamburger-react';
// import { navLinks } from '@/constants';
// import Link from 'next/link'; // Importing next/link for routing
// import flogo from '@/assets/flogo.png';

// const Logo = ({ isScrolling }) => (
//   <div className={`flex items-center ${isScrolling ? "opacity-0 transition-all duration-1000" : "opacity-100 transition-all duration-1000"}`}>
//     <img src={flogo} alt="logo" className="w-30 h-24 object-contain" />
//     <p className="text-white text-[34px] font-bold cursor-pointer">
//       <span className="sm:block hidden mx-[-24px]">FazeNAuto</span>
//     </p>
//   </div>
// );

// const MobileNav = ({ toggle, setToggle, isScrolling }) => (
//   <div className={`md:hidden ${isScrolling ? "opacity-0 transition-all duration-1000" : "opacity-100 transition-all duration-300"} absolute top-10 right-10`}>
//     <Hamburger toggled={toggle} toggle={setToggle} size={50} easing="ease-in" duration={0.7} rounded />
//   </div>
// );

// const Navbar = () => {
//   const [active, setActive] = useState('');
//   const [toggle, setToggle] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   // Handle screen resize and scroll events
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsLargeScreen(window.innerWidth >= 768);

//       const handleResize = () => {
//         setIsLargeScreen(window.innerWidth >= 768);
//         if (window.innerWidth >= 768) {
//           setToggle(false); // Close menu on large screen
//         }
//       };

//       let scrollTimeout;
//       const handleScroll = () => {
//         setIsScrolling(true);
//         clearTimeout(scrollTimeout);

//         scrollTimeout = setTimeout(() => {
//           setIsScrolling(false);
//         }, 1000);
//       };

//       window.addEventListener('resize', handleResize);
//       window.addEventListener('scroll', handleScroll);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, []);

//   const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

//   return (
//     <nav className={`w-full flex items-center ${isLargeScreen ? "py-5" : "py-2"} top-0 z-20 bg-primary transition-all duration-1000 ${isScrolling || toggle ? "bg-opacity-0" : "bg-opacity-80"} fixed`}>
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <a href="/" onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
//           <div className="flex items-center gap-2">
//             <Logo isScrolling={isScrolling} />
//           </div>
//         </a>
//         <MobileNav toggle={toggle} setToggle={setToggle} isScrolling={isScrolling} />

//         {/* Mobile Dropdown Menu */}
//         <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[100%] z-10 rounded-xl`}>
//           <ul className="list-none flex justify-center items-center flex-col gap-6 w-full">
//             {navLinks.map((link) => (
//               link.subLinks ? (
//                 <li key={link.id} className="relative">
//                   <a onClick={() => { setActive(link.title); handleDropdownToggle(); }} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer flex justify-between w-full`}>
//                     {link.title}
//                     <span>{dropdownOpen ? '▲' : '▼'}</span>
//                   </a>
//                   <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownOpen ? "max-h-60" : "max-h-0"} w-full`}>
//                     {dropdownOpen && (
//                       <ul className="bg-primary text-white py-2 mt-1 rounded-lg w-full">
//                         {link.subLinks.map((subLink) => (
//                           <li key={subLink.id} className="px-4 py-2 hover:bg-opacity-80 cursor-pointer">
//                             <Link href={`/${subLink.id}`} passHref>
//                               {subLink.title}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 </li>
//               ) : (
//                 <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer`}>
//                   <Link href={`/${link.id}`} passHref>
//                     {link.title}
//                   </Link>
//                 </li>
//               )
//             ))}
//           </ul>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="list-none hidden md:flex flex-row gap-10">
//           {navLinks.map((link) => (
//             link.subLinks ? (
//               <li key={link.id} className="relative">
//                 <a onClick={() => { setActive(link.title); handleDropdownToggle(); }} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer flex justify-between`}>
//                   {link.title}
//                   <span>{dropdownOpen ? '▲' : '▼'}</span>
//                 </a>
//                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownOpen ? "max-h-60" : "max-h-0"} w-full`}>
//                   {dropdownOpen && (
//                     <ul className="absolute left-0 bg-primary text-white py-2 mt-1 rounded-lg">
//                       {link.subLinks.map((subLink) => (
//                         <li key={subLink.id} className="px-4 py-2 hover:bg-opacity-80 cursor-pointer">
//                           <Link href={`/${subLink.id}`} passHref>
//                             {subLink.title}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </li>
//             ) : (
//               <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer`}>
//                 <Link href={`/${link.id}`} passHref>
//                   {link.title}
//                 </Link>
//               </li>
//             )
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








// /src/app/components/Navbar.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { navLinks } from '@/constants';
import Link from 'next/link'; // Importing next/link for routing
import Image from 'next/image'; // Importing next/image for optimized images
import flogo from '@/assets/flogo.png';

const Logo = ({ isScrolling }) => (
  <div className={`flex items-center ${isScrolling ? "opacity-0 transition-all duration-1000" : "opacity-100 transition-all duration-1000"}`}>
    <Image src={flogo} alt="logo" className="w-30 h-24 object-contain" width={120} height={96} />
    <p className="text-white text-[34px] font-bold cursor-pointer">
      <span className="sm:block hidden mx-[-24px]">FazeNAuto</span>
    </p>
  </div>
);

const MobileNav = ({ toggle, setToggle, isScrolling }) => (
  <div className={`md:hidden ${isScrolling ? "opacity-0 transition-all duration-1000" : "opacity-100 transition-all duration-300"} absolute top-10 right-10`}>
    <Hamburger toggled={toggle} toggle={setToggle} size={50} easing="ease-in" duration={0.7} rounded />
  </div>
);

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle screen resize and scroll events
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLargeScreen(window.innerWidth >= 768);

      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 768);
        if (window.innerWidth >= 768) {
          setToggle(false); // Close menu on large screen
        }
      };

      let scrollTimeout;
      const handleScroll = () => {
        setIsScrolling(true);
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className={`w-full flex items-center ${isLargeScreen ? "py-5" : "py-2"} top-0 z-20 bg-primary transition-all duration-1000 ${isScrolling || toggle ? "bg-opacity-0" : "bg-opacity-80"} fixed`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
          <div className="flex items-center gap-2">
            <Logo isScrolling={isScrolling} />
          </div>
        </Link>
        <MobileNav toggle={toggle} setToggle={setToggle} isScrolling={isScrolling} />

        {/* Mobile Dropdown Menu */}
        <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[100%] z-10 rounded-xl`}>
          <ul className="list-none flex justify-center items-center flex-col gap-6 w-full">
            {navLinks.map((link) => (
              link.subLinks ? (
                <li key={link.id} className="relative">
                  <a onClick={() => { setActive(link.title); handleDropdownToggle(); }} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer flex justify-between w-full`}>
                    {link.title}
                    <span>{dropdownOpen ? '▲' : '▼'}</span>
                  </a>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownOpen ? "max-h-60" : "max-h-0"} w-full`}>
                    {dropdownOpen && (
                      <ul className="bg-primary text-white py-2 mt-1 rounded-lg w-full">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.id} className="px-4 py-2 hover:bg-opacity-80 cursor-pointer">
                            <Link href={`/${subLink.id}`} passHref>
                              {subLink.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ) : (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer`}>
                  <Link href={`/${link.id}`} passHref>
                    {link.title}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            link.subLinks ? (
              <li key={link.id} className="relative">
                <a onClick={() => { setActive(link.title); handleDropdownToggle(); }} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer flex justify-between`}>
                  {link.title}
                  <span>{dropdownOpen ? '▲' : '▼'}</span>
                </a>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownOpen ? "max-h-60" : "max-h-0"} w-full`}>
                  {dropdownOpen && (
                    <ul className="absolute left-0 bg-primary text-white py-2 mt-1 rounded-lg">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.id} className="px-4 py-2 hover:bg-opacity-80 cursor-pointer">
                          <Link href={`/${subLink.id}`} passHref>
                            {subLink.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ) : (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer`}>
                <Link href={`/${link.id}`} passHref>
                  {link.title}
                </Link>
              </li>
            )
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;































// // /src/app/components/Navbar.jsx
// "use client";
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router'; // Import useRouter hook
// import { Sling as Hamburger } from 'hamburger-react';
// import styles from '@/app/style';
// import { navLinks } from '@/constants';
// import flogo from '@/assets/flogo.png';

// const Logo = ({ isScrolling }) => (
//   <div className={`flex items-center ${isScrolling ? "opacity-0 transition-all duration-1000" : "opacity-100 transition-all duration-1000"}`}>
//     <img src={flogo} alt="logo" className="w-30 h-24 object-contain" />
//     <p className="text-white text-[34px] font-bold cursor-pointer">
//       <span className="sm:block hidden mx-[-24px]">FazeNAuto</span>
//     </p>
//   </div>
// );

// const MobileNav = ({ toggle, setToggle, isScrolling }) => (
//   <div className={`md:hidden ${isScrolling ? "opacity-0 transition-all duration-1000" : "opacity-100 transition-all duration-300"} absolute top-10 right-10`}>
//     <Hamburger
//       toggled={toggle}
//       toggle={setToggle}
//       size={50}
//       easing="ease-in"
//       duration={0.7}
//       rounded
//     />
//   </div>
// );

// const Navbar = () => {
//   const [active, setActive] = useState('');
//   const [toggle, setToggle] = useState(false);
//   const [isLargeScreen, setIsLargeScreen] = useState(false);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const router = useRouter(); // Get router instance

//   // Effect for handling resize and scroll events
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Check if screen is large
//       setIsLargeScreen(window.innerWidth >= 768);

//       const handleResize = () => {
//         setIsLargeScreen(window.innerWidth >= 768);
//         if (window.innerWidth >= 768) {
//           setToggle(false); // Close the menu when resizing to a large screen
//         }
//       };

//       let scrollTimeout;
//       const handleScroll = () => {
//         setIsScrolling(true);
//         clearTimeout(scrollTimeout);

//         scrollTimeout = setTimeout(() => {
//           setIsScrolling(false);
//         }, 1000);
//       };

//       window.addEventListener('resize', handleResize);
//       window.addEventListener('scroll', handleScroll);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//         window.removeEventListener('scroll', handleScroll);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     // Close the mobile menu when the route changes
//     setToggle(false);
//   }, [router.asPath]); // Trigger when the URL changes

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center ${isLargeScreen ? "py-5" : "py-2"} top-0 z-20 bg-primary transition-all duration-1000 ${isScrolling || toggle ? "bg-opacity-0" : "bg-opacity-80"} fixed`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <a href="/" onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
//           <div className="flex items-center gap-2">
//             <Logo isScrolling={isScrolling} />
//           </div>
//         </a>
//         <MobileNav toggle={toggle} setToggle={setToggle} isScrolling={isScrolling} />

//         {/* Mobile Dropdown Menu */}
//         <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[100%] z-10 rounded-xl`}>
//           <ul className="list-none flex justify-center items-center flex-col gap-6 w-full">
//             {navLinks.map((link) => (
//               link.subLinks ? (
//                 <li key={link.id} className="relative">
//                   <a
//                     href={`#${link.id}`}
//                     onClick={() => { setActive(link.title); handleDropdownToggle(); }}
//                     className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer flex justify-between w-full`}
//                   >
//                     {link.title}
//                     <span>{dropdownOpen ? '▲' : '▼'}</span>
//                   </a>
//                   <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownOpen ? "max-h-60" : "max-h-0"} w-full`}>
//                     {dropdownOpen && (
//                       <ul className="bg-primary text-white py-2 mt-1 rounded-lg w-full">
//                         {link.subLinks.map((subLink) => (
//                           <li
//                             key={subLink.id}
//                             className="px-4 py-2 hover:bg-opacity-80 cursor-pointer"
//                             onClick={() => {
//                               setActive(subLink.title);
//                               setDropdownOpen(false); // Close dropdown after selecting
//                             }}
//                           >
//                             <a href={`#${subLink.id}`}>{subLink.title}</a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 </li>
//               ) : (
//                 <li
//                   key={link.id}
//                   className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer`}
//                   onClick={() => setActive(link.title)}
//                 >
//                   <a href={`#${link.id}`}>{link.title}</a>
//                 </li>
//               )
//             ))}
//           </ul>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="list-none hidden md:flex flex-row gap-10">
//           {navLinks.map((link) => (
//             link.subLinks ? (
//               <li key={link.id} className="relative">
//                 <a
//                   href={`#${link.id}`}
//                   onClick={() => { setActive(link.title); handleDropdownToggle(); }}
//                   className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer flex justify-between`}
//                 >
//                   {link.title}
//                   <span>{dropdownOpen ? '▲' : '▼'}</span>
//                 </a>
//                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${dropdownOpen ? "max-h-60" : "max-h-0"} w-full`}>
//                   {dropdownOpen && (
//                     <ul className="absolute left-0 bg-primary text-white py-2 mt-1 rounded-lg">
//                       {link.subLinks.map((subLink) => (
//                         <li
//                           key={subLink.id}
//                           className="px-4 py-2 hover:bg-opacity-80 cursor-pointer"
//                           onClick={() => {
//                             setActive(subLink.title);
//                             setDropdownOpen(false); // Close dropdown after selecting
//                           }}
//                         >
//                           <a href={`#${subLink.id}`}>{subLink.title}</a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </li>
//             ) : (
//               <li
//                 key={link.id}
//                 className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer`}
//                 onClick={() => setActive(link.title)}
//               >
//                 <a href={`#${link.id}`}>{link.title}</a>
//               </li>
//             )
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
