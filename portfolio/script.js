let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}


//ACTIVE NAV LINK

let sections=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id");

        if(top>=offset && top<offset + height){
            navLinks.forEach.apply(links=>{
                links.classList.remove('active');

                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });
        };

    });

    //Sticky Navbar

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    //Remove toggle icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove("active");
}

document.getElementById("read-more-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action of the link
    var extraContent = document.querySelector(".extra-content");
    
    // Toggle the visibility of the extra content
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block"; // Show the hidden content
        this.textContent = "Read Less"; // Change button text to "Read Less"
    } else {
        extraContent.style.display = "none"; // Hide the content again
        this.textContent = "Read More"; // Change button text back to "Read More"
    }
});

