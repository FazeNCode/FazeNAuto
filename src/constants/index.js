



// // Named export, allowing exporting the 
//   export const navLinks = [
//     { id: "inventory", title: "Inventory" },
//     { id: "car finder", title: "Car Lookup" },
//     { id: "dealership", title: "Dealership" },
//     { id: "about", title: "About" },
//   ];



// Named export, allowing exporting the navLinks
export const navLinks = [
  { id: "inventory", title: "Inventory" },
  { id: "car finder", title: "Car Lookup" },
  {
    id: "dealership",
    title: "Dealership",
    subLinks: [
      { id: "sub1", title: "Sub Link 1" },
      { id: "sub2", title: "Sub Link 2" },
      { id: "sub3", title: "Sub Link 3" }
    ]
  },
  { id: "about", title: "About" }
];

  // default export, allowing exporting the object containing 'navLinks'
  export default { navLinks };