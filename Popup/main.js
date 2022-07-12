const modal = document.getElementById("modal-form2")
const privacy = document.getElementById("privacy")
const showModal = document.querySelector(".main-button")
const closeModal = document.querySelector(".modal__close")
const modalPolicy = document.querySelector('[data-modal="#modal-policy"]')
const closePrivacy = document.querySelector(".privacy__button")

showModal.addEventListener("click", () => {
    modal.classList.add("open")
    closeModal.addEventListener("click", () => {
        modal.classList.contains("open") && modal.classList.remove("open")
    })

    modalPolicy.addEventListener("click", () => {
        privacy.classList.add("open")
        closePrivacy.addEventListener("click", () => {
            privacy.classList.contains("open") && privacy.classList.remove("open")
        })
    })
})






