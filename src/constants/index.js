






// // Named export, allowing exporting the navLinks
// export const navLinks = [
//   { id: "inventory", title: "Inventory" },
//   { id: "car finder", title: "Car Lookup" },
//   // { id: "about", title: "About" }

//   {
//     id: "dealership",
//     title: "Dealership",
//     subLinks: [
//       { id: "about", title: "About Us" },
//       { id: "contact us", title: "Contact Us" },
//       { id: "feedback", title: "Feedback" }
//     ]
//   },

 
// ];

//   // default export, allowing exporting the object containing 'navLinks'
//   export default { navLinks };





export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "dealership",
    title: "Dealership",
    subLinks: [
      { id: "about", title: "About Us" },
      { id: "contact", title: "Contact Us" },
      { id: "feedback", title: "Feedback" }
    ],
  },
  {
    id: "services",
    title: "Services",
  },
];