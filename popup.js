const  popupEl = document.getElementById("popup");
function handleOpenPopup(event) {
    event.preventDefault();
    popupEl.classList.add("open-popup");
 }

 function handleClosePopup() {
     popupEl.classList.remove("open-popup")
 }