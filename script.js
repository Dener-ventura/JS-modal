"use strict";

window.addEventListener("DOMContentLoaded", function(){

    var openButtons = document.querySelectorAll(".show-modal");
    var modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-modal");
    var overlay = document.querySelector(".overlay");
    var isOpen = false;
    
    function openModal(){
        isOpen = true;
        modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
    }
    
    openButtons.forEach(function (openButton) {
        openButton.addEventListener("click", function(){
            openModal();
            setTimeout(closeModal, 3000);
        })
    });
    
    function closeModal(){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        isOpen = false;
    }
    
    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
        
    window.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && isOpen) {
            closeModal();
        }
    })

}) 

