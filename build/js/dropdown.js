var toggle=document.querySelector(".step__dropdown-list"),box=document.querySelector(".step__alphabet"),chooseButton=document.querySelector(".step__dropdown-select");toggle.addEventListener("click",function(e){e.preventDefault(),chooseButton.classList.toggle("step__dropdown-select--active"),toggle.classList.toggle("step__dropdown-list--active"),box.classList.toggle("step__alphabet--active")});