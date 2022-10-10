let hambugere = document.querySelector(".hamburger");
let navmenu = document.querySelector(".nav-menu");
hambugere.addEventListener("click", () => {
    hambugere.classList.toggle("active");
    navmenu.classList.toggle("active");
});

// education accodio
$(document).ready(function(){
    $(".pre").accordion();
});

document.contact.addEventListener("submit", function (e) {
    let name = this.name;
    let mail = this.mail;
    let subject = this.subject;
    let message = this.message;
    name.nextElementSibling.textContent = "";
    mail.nextElementSibling.textContent = "";
    subject.nextElementSibling.textContent = "";
    message.nextElementSibling.textContent = "";
    if (name.value.trim() == "") {
        e.preventDefault();
        name.nextElementSibling.textContent = "Enter Name";
        name.nextElementSibling.style.color = "red";
        name.focus();
    }
    if (mail.value.trim() == "") {
        e.preventDefault();
        mail.nextElementSibling.textContent = "Enter Valid Email";
        mail.nextElementSibling.style.color = "red";
        mail.focus();
    }
    if (subject.value.trim() == "") {
        e.preventDefault();
        subject.nextElementSibling.textContent = "Enter Subject";
        subject.nextElementSibling.style.color = "red";
        subject.focus();
    }
    if (message.value.trim() == "") {
        e.preventDefault();
        message.nextElementSibling.textContent = "Enter Message";
        message.nextElementSibling.style.color = "red";
        message.focus();
    }

    // pop up message
    if (name.value.trim() != "" && message.value.trim() != "" && subject.value.trim() != "" && mail.value.trim() != "") {
        e.preventDefault();
        $('.form').css("display", "block");
    }

});

// 
document.querySelector(".opn").addEventListener("click",function(){
    window.open("open.html","_blank","width=400,height=400, left=100,top=100");
})
// end



