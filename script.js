// Get all service-item divs
const serviceItems = document.querySelectorAll(".service-item");

// Loop through each service-item and add a click event
serviceItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove 'highlight' class from all items
    serviceItems.forEach((i) => i.classList.remove("highlight"));

    // Add 'highlight' class to the clicked item
    item.classList.add("highlight");
  });
});

// add blur effect to the navbar on scroll
const navbar = document.getElementById("navbar");
const navitems = document.querySelectorAll("#nav-items");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("blurred");
  } else {
    navbar.classList.remove("blurred");
  }
});
// ul > a tag color black
navitems.forEach((items) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      items.classList.add("c-black");
    } else {
      items.classList.remove("c-black");
    }
  });
});

// Service data stored in JavaScript
const services = {
  trendHaircut: {
    title: "Best HairCut Trends At <br> Home Treatment",
    description:
      "Experience the latest haircut trends with our skilled professionals. We ensure you look your best while enjoying a relaxing grooming session.",
    image: "assets/treandhaircut.jpg",
    alt: "Trend Haircut",
  },
  hairColor: {
    title: "Professional Hair Coloring <br> Services",
    description:
      "Revamp your look with stunning hair colors. Our experts provide personalized color treatments tailored to your style and preferences.",
    image: "assets/haircolor.jpg",
    alt: "Hair Color",
  },
  headMassage: {
    title: "Best Head Massage At <br> Home Treatment",
    description:
      "Relax and rejuvenate with our soothing head massage services.",
    image: "assets/headmssage.jpg",
    alt: "Head Massage",
  },
  facialHairTrim: {
    title: "Facial Hair Trim At <br> Home Treatment",
    description:
      "Perfect trims with expert precision in the comfort of your home.",
    image: "assets/breardtrim.jpg",
    alt: "Facial Hair Trim",
  },
};

// Function to update the content dynamically
function updateContent(serviceKey) {
  setTimeout(() => {
    const service = services[serviceKey];
    // Smooth animation for service details
    const serviceDetails = document.querySelector(".service-detail");
    serviceDetails.classList.add("fade-out");

    if (service) {
      // Update title
      document.getElementById("stitle").innerHTML = service.title;

      // Update description
      document.getElementById("para").textContent = service.description;

      // Update image
      const imageElement = document.getElementById("simages");
      imageElement.src = service.image;
      imageElement.alt = service.alt;
    }
    // Remove the fade-out and add fade-in animation
    serviceDetails.classList.remove("fade-out");
    serviceDetails.classList.add("fade-in");
  }, 300);
}

// responsive
// navbar
const hamberbar = document.getElementById("hamberbar");
const navitem = document.getElementById("navitem");
hamberbar.addEventListener("click", () => {
  navitem.classList.remove("n-right");
  navitem.classList.add("res-navbar");
});
const closebtn = document.getElementById("close");
closebtn.addEventListener("click", () => {
  navitem.classList.add("n-right");
  navitem.classList.remove("res-navbar");
});
