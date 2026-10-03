// ================= LIKE BLOG =================

function likeBlog(button) {

    let card = button.closest(".blog-card");

    let number = card.querySelector(".like b");

    let currentLikes = parseInt(number.innerText);

    if (button.classList.contains("liked")) {

        currentLikes--;

        button.classList.remove("liked");

        button.innerText = "♡";

    } else {

        currentLikes++;

        button.classList.add("liked");

        button.innerText = "♥";
    }

    number.innerText = currentLikes;
}


// ================= WRITE BLOG MODAL =================

function openModal() {

    document
        .getElementById("blogModal")
        .classList.add("show");
}


function closeModal() {

    document
        .getElementById("blogModal")
        .classList.remove("show");
}


// ================= PUBLISH BLOG =================

function publishBlog() {

    let title =
        document.getElementById("blogTitle").value;

    let category =
        document.getElementById("blogCategory").value;

    let content =
        document.getElementById("blogText").value;


    if (
        title === "" ||
        category === "Select category" ||
        content === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    alert(
        "Your blog '" +
        title +
        "' has been published successfully!"
    );


    document.getElementById("blogTitle").value = "";

    document.getElementById("blogCategory").value =
        "Select category";

    document.getElementById("blogText").value = "";

    closeModal();
}


// ================= NEWSLETTER =================

function subscribe() {

    let email =
        document.getElementById("email").value;


    if (email === "") {

        alert("Please enter your email address.");

        return;
    }


    alert(
        "Thank you for subscribing to BlogMint!"
    );


    document.getElementById("email").value = "";
}


// ================= VIEW ALL =================

function showAll() {

    alert(
        "All BlogMint stories will be available here."
    );
}


// ================= CLOSE MODAL WHEN CLICKING OUTSIDE =================

window.onclick = function(event) {

    let modal =
        document.getElementById("blogModal");

    if (event.target === modal) {

        closeModal();
    }
};