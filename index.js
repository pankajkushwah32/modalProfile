const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

//open modal function
const openModal=()=>{
    console.log("modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayActive")
};

//close modal function
const closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive")
}