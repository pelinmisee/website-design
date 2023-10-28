const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");


sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Hide all tab contents and remove active class from tabs
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        // Display the clicked tab content and set active class to the clicked tab
        const target = tab.dataset.target;
        document.getElementById(target).classList.add('active');
        tab.classList.add('active');
    });
});

function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var message = document.forms["contactForm"]["message"].value;
  var error = "";

  if (name == "") {
      error += "Please enter your name.\n";
  }

  if (email == "") {
      error += "Please enter your email address.\n";
  } else if (!validateEmail(email)) {
      error += "Please enter a valid email address.\n";
  }

  if (message == "") {
      error += "Please enter a message.\n";
  }

  if (error != "") {
      alert(error);
      return false;
  }
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
