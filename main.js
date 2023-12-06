const modalTrigger = document.querySelector(".btn-question")
const modal = document.querySelector(".modal")
const closeModalBTn = document.querySelector(".modal__close")
const  action = document.querySelector(".form")
const openModal = ()=> {
     modal.classList.add("show")
     modal.classList.remove("hide")
     document.body.style.overflow = "hidden"

}
modalTrigger.addEventListener("click", openModal)


const  closeModal = () => {
     modal.classList.add("hide")
     modal.classList.remove("show")
     document.body.style.overflow = ""

}

closeModalBTn.addEventListener("click", closeModal)



modal.addEventListener("click", (e)=>{
  if (e.target.classList.contains("modal")){
      e.preventDefault()
       closeModal()
  }
})
