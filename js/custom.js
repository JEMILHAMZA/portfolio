(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

































// const projectData = {
//   1: {
//     title: "Social Media App",
//     image: "images/project/p2.png",
//     category: "Web Development",
//     description: "It is a Full-Stack Social media platform in which users can engage intuitiveli like,share,save,comment and follow each other.",
//     stack: "React, Node.js, MongoDB",
//     features: "User authentication,Real-time chat,Responsive design",
//     link: "https://github.com/JEMILHAMZA/Social-Media-Platform"
//   },
//   2: {
//     title: "E-Commerce Platform",
//     image: "images/project/.png",
//     category: "Full Stack",
//     description: "July 2023",
//     stack: "React, Express, MySQL",
//     features: "Product management, Payment gateway integration",
//     link: "https://github.com/JEMILHAMZA/Social-Media-Platform"
//   }
// };
// // Show the modal with project details
// // Show the modal with project details
// // Show the modal with project details
// function showProjectDetails(id) {
//   const project = projectData[id];
//   document.getElementById("projectTitle").innerText = project.title;
//   document.getElementById("projectImage").src = project.image;
//   document.getElementById("projectCategory").innerHTML = "<strong>Category:</strong> " + project.category;
// document.getElementById("projectDescription").innerHTML = "<strong>Project Description:</strong> " + project.description;
// document.getElementById("projectStack").innerHTML = "<strong>Development Stacks:</strong> " + project.stack;


//   // Clear the features list first to avoid duplication when switching projects
//   const featuresList = document.getElementById("projectFeatures");
//   featuresList.innerHTML = "";

//   // Create list items for each feature
//   const features = project.features.split(','); // Assuming features are comma-separated
//   features.forEach(feature => {
//     const li = document.createElement('li');
//     li.innerText = feature.trim(); // Remove leading/trailing spaces
//     featuresList.appendChild(li);
//   });

//   // Update the href for the project link anchor
//   document.getElementById("projectLinkAnchor").href = project.link;

//   // Preserve current scroll position
//   const scrollY = window.scrollY;

//   // Show the modal
//   document.getElementById("projectModal").style.display = "flex";

//   // Hide the navbar
//   document.querySelector('.navbar').style.display = 'none';

//   // Disable body scrolling and lock position
//   document.body.style.position = 'fixed';
//   document.body.style.top = `-${scrollY}px`;
//   document.body.style.width = '100%';
// }
















const projectData = {
  1: {
    title: "Social Media App",
    images: ["images/project/p6.png", "images/project/p7.png","images/project/p8.png","images/project/p9.png","images/project/p10.png"], // Multiple images
    category: "Web Application",
    description: "This project is a comprehensive social media platform that allows users to connect, share content, and engage with each other in a dynamic online environment.",
    stack: "React, Node.js, MongoDB,ExpressJs,Custom CSS, Jquery,Websocket",
    features: "Users can create and edit profiles, share posts, and upload images and videos 📸🎥;They can also like, comment, and save posts, and use features like post tagging 📝;The platform allows users to follow each other, fostering interaction 🤝;It offers a seamless, intuitive user interface for a smooth experience 🌐",
    link: "https://github.com/JEMILHAMZA/Social-Media-Platform"
  },
  2: {
    title: "Mosque Website",
    images: ["images/project/p2.png", "images/project/p1.png","images/project/p3.png","images/project/p4.png","images/project/p5.png"], // Multiple images
    category: "Website",
    description: "The Alif Mosque website is a beautifully designed and user-friendly platform dedicated to serving the community by providing essential information, resources, and updates about the mosque's activities. The website offers a seamless experience for visitors, allowing them to stay connected with the mosque's events, prayer times, and services.",
    stack: "React,NodeJS, Express, PostgreSQL, Bootstrap",
    features: "Prayer Times: Accurate and regularly updated prayer times.;Events Calendar: A calendar with details of upcoming events and activities.;Educational Resources: Access to religious articles, lectures, and other resources.;Contact Information: Easy access to mosque contact details for inquiries and support.;Donation Portal: A secure platform for making online donations to the mosque.",
    link: "https://github.com/JEMILHAMZA/Alif_Mesjid_Web"
  },
  3: {
    title: "Real-time chat App",
    images: ["images/project/p12.png", "images/project/p11.png","images/project/p13.png","images/project/p14.png","images/project/p15.png"], // Multiple images
    category: "Web App",
    description: "This project is a dynamic chat application that enables users to communicate in real time, featuring functionalities for both one-on-one and group conversations.",
    stack: "Custom CSS,NodeJS, Express, MongoDB, Websocket",
    features: "Users can create accounts and automatically join a public chat room upon logging in;Private conversations allow users to exchange real-time text messages 💬; Chat history is stored in the database for future reference 📜;The system includes notifications for new messages and a user presence indicator to show when users are online 🔔",
    link: "https://github.com/JEMILHAMZA/Real-Time-Chat-Application"
  },
  4: {
    title: "Quiz-App",
    images: ["images/project/p2.png", "images/project/p1.png","images/project/p3.png","images/project/p4.png","images/project/p5.png"], // Multiple images
    category: "Web and Mobile App",
    description: "The Quiz-App introduces a dynamic web and mobile based platform for interactive quizzes, engaging both users and educators. Students can effortlessly register, log in, and engage in quizzes, receiving instant feedback on their responses. Educators can also register and create quizzes on topics of interest. They can monitor the progress and score of their students. The platform implements a role-based system, differentiating between regular teachers and students. This allows for the creation, modification, and removal of quizzes, along with access to detailed statistics for authored quizzes.",
    stack: " Web App:NestJS,Tailwind,Typescript   Mobile App:Flutter,Dart,NestJS",
    features: "User Authentication and Authorization;Question Interaction;Personal Note Management;Instructor Privileges ",
    link: "https://github.com/JEMILHAMZA/flutter-2024-proj-riverpod"
  },
  5: {
    title: "Employee Management System",
    images: ["images/project/p17.png", "images/project/p16.png","images/project/p18.png","images/project/p19.png","images/project/p22.png"], // Multiple images
    category: "Web App",
    description: "This project implements a comprehensive employee management system that ensures secure data handling and offers features for both admins and employees to manage and interact with employee records effectively.",
    stack: "React,NodeJS, Express, PostgreSQL, Tailwind,ChartJS",
    features: "- Secure validation and authentication mechanisms to protect sensitive employee data 🔐; Admins can perform CRUD operations on employee records and view overall company employee status with summary statistics and graphical representations 📊;Employees can view and export their data, send leave requests, and update their profiles 💼",
    link: "https://github.com/JEMILHAMZA/Employee-Management-System"
  },
  6: {
    title: "E-commerce Website",
    images: ["images/project/p24.png", "images/project/p23.png","images/project/p25.png","images/project/p26.png","images/project/p27.png"], // Multiple images
    category: "Website",
    description: "This project is an online shopping platform that allows customers to browse products, make purchases, and manage their shopping experience while providing admins with essential tools for managing the platform effectively.",
    stack: "NodeJS, Express, MongoDB, React",
    features: "Customers can browse and purchase products online, track their orders, manage their carts, and leave reviews 🛒✨;Admins have the ability to manage products, handle orders, and respond to support requests, ensuring smooth operation of the platform 🔧",
    link: "https://github.com/JEMILHAMZA/E-Commerce-Platform"
  }
};

let currentImageIndex = 0;
let imagesArray = [];

// Function to show project details
function showProjectDetails(id) {
  const project = projectData[id];
  document.getElementById("projectTitle").innerText = project.title;

  // Set images array and show the first image
  imagesArray = project.images;
  currentImageIndex = 0;
  document.getElementById("projectImage").src = imagesArray[currentImageIndex];

  // Show arrows only if there are multiple images
  if (imagesArray.length > 1) {
    document.querySelector(".prev").style.display = "block";
    document.querySelector(".next").style.display = "block";
  } else {
    document.querySelector(".prev").style.display = "none";
    document.querySelector(".next").style.display = "none";
  }

  // Set other project details (category, description, etc.)
  document.getElementById("projectCategory").innerHTML = "<strong>Category:</strong> " + project.category;
  document.getElementById("projectDescription").innerHTML = "<strong>Project Description:</strong> " + project.description;
  document.getElementById("projectStack").innerHTML = "<strong>Development Stacks:</strong> " + project.stack;

  // Clear and set features list
  const featuresList = document.getElementById("projectFeatures");
  featuresList.innerHTML = "";
  project.features.split(';').forEach(feature => {
    const li = document.createElement('li');
    li.innerText = feature.trim();
    featuresList.appendChild(li);
  });

  // Set project link
  document.getElementById("projectLinkAnchor").href = project.link;

  // Show the modal
  document.getElementById("projectModal").style.display = "flex";

  




  // Preserve current scroll position
  const scrollY = window.scrollY;

  // Show the modal
  document.getElementById("projectModal").style.display = "flex";

  // Hide the navbar
  document.querySelector('.navbar').style.display = 'none';

  // Disable body scrolling and lock position
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

// Function to show the next image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
  document.getElementById("projectImage").src = imagesArray[currentImageIndex];
}

// Function to show the previous image
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
  document.getElementById("projectImage").src = imagesArray[currentImageIndex];
}
















// Close the modal
function closeModal() {
  // Re-enable body scrolling
  const scrollY = document.body.style.top;

  // Show the modal
  document.getElementById("projectModal").style.display = "none";

  // Restore the scroll position
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';

  // Restore the original scroll position
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY) * -1);
  }

  // Show the navbar
  document.querySelector('.navbar').style.display = 'block';
}

// Close modal if clicking outside of modal content
window.onclick = function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
}
















document.addEventListener('DOMContentLoaded', () => {
  // Initially show only the first 4 cards
  const projectCards = document.querySelectorAll('.project-card-wrapper');
  projectCards.forEach((card, index) => {
    if (index < 4) {
      card.style.display = 'block';
      setTimeout(() => {
        card.classList.add('show-on-scroll');  // Trigger the initial animation for the first 4
      }, 100);
    } else {
      card.style.display = 'none';
    }
  });

  // Intersection Observer for scrolling animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-on-scroll');  // Add the class when in view
      } else {
        entry.target.classList.remove('show-on-scroll');  // Optional: remove the class when out of view
      }
    });
  }, { threshold: 0.5 }); // Trigger when 20% of the element is visible

  // Apply observer to all project cards
  projectCards.forEach((card) => {
    observer.observe(card);
  });
});





























// let showMore = false;

// function toggleProjects() {
//   const projectCards = document.querySelectorAll('.project-card-wrapper');
//   const showMoreBtn = document.getElementById('showMoreBtn');

//   if (showMore) {
//     projectCards.forEach((card, index) => {
//       if (index >= 4) {
//         card.classList.remove('show-on-scroll');
//         setTimeout(() => {
//           card.style.display = 'none';
//         }, 800); // Match transition time with animation
//       }
//     });
//     showMoreBtn.innerText = 'Show More';
//   } else {
//     projectCards.forEach((card, index) => {
//       if (index >= 4) {
//         card.style.display = 'block';
//         setTimeout(() => {
//           card.classList.add('show-on-scroll');
//         }, 50);
//       }
//     });
//     showMoreBtn.innerText = 'Show Less';
//   }
//   showMore = !showMore;
// }




let showMore = false;

function toggleProjects() {
  const projectCards = document.querySelectorAll('.project-card-wrapper');
  const showMoreBtn = document.getElementById('showMoreBtn');
  const arrowIcon = document.getElementById('arrowIcon');

  if (showMore) {
    projectCards.forEach((card, index) => {
      if (index >= 4) {
        card.classList.remove('show-on-scroll');
        setTimeout(() => {
          card.style.display = 'none';
        }, 800); // Match transition time with animation
      }
    });
    showMoreBtn.innerText = 'Show More';
    showMoreBtn.appendChild(arrowIcon); // Keep the arrow inside the button
    arrowIcon.innerHTML = '&#x25BC;'; // Down arrow
  } else {
    projectCards.forEach((card, index) => {
      if (index >= 4) {
        card.style.display = 'block';
        setTimeout(() => {
          card.classList.add('show-on-scroll');
        }, 50);
      }
    });
    showMoreBtn.innerText = 'Show Less';
    showMoreBtn.appendChild(arrowIcon); // Keep the arrow inside the button
    arrowIcon.innerHTML = '&#x25B2;'; // Up arrow
  }
  showMore = !showMore;
}
























// Function to check if an element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add or remove animation classes based on scroll
function animateSkillsOnScroll() {
  const skills = document.querySelectorAll('.skill-logo');

  skills.forEach((skill) => {
    if (isElementInViewport(skill)) {
      skill.classList.add('skill-visible');
      skill.classList.remove('skill-hidden');
    } else {
      skill.classList.remove('skill-visible');
      skill.classList.add('skill-hidden');
    }
  });
}

// Trigger animation on scroll and on load
window.addEventListener('scroll', animateSkillsOnScroll);
window.addEventListener('load', animateSkillsOnScroll);
































