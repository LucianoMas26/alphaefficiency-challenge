// HEADER FUNCTIONS

function openNav() {
  event.preventDefault()
  document.getElementById("mobile-menu").style.width = "40%"
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%"
}

const header = document.querySelector(".header")
const scrollThreshold = 100

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

function scrollToSectionWithDelay(event) {
  event.preventDefault()
  const targetId = this.getAttribute("href").substring(1)
  const targetSection = document.getElementById(targetId)
  if (targetSection) {
    setTimeout(() => {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      })
    }, 500)
  }
}

const navLinks = document.querySelectorAll(".nav-links a, .mobile-links a")

navLinks.forEach((link) => {
  link.addEventListener("click", scrollToSectionWithDelay)
})

// COUNTER FUNCTIONS

function calculateTimeDifference(targetDate) {
  const currentDate = new Date()
  const timeDifference = targetDate - currentDate
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

function updateCounter() {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 20)

  const countdownFirst = document.querySelectorAll(
    ".section-left .counting .numbers"
  )
  const countdownSecond = document.querySelectorAll(
    ".section-right .counting .numbers"
  )

  function update(countdown) {
    const { days, hours, minutes, seconds } =
      calculateTimeDifference(targetDate)

    countdown[0].textContent = days.toString().padStart(2, "0")
    countdown[1].textContent = hours.toString().padStart(2, "0")
    countdown[2].textContent = minutes.toString().padStart(2, "0")
    countdown[3].textContent = seconds.toString().padStart(2, "0")
  }

  setInterval(() => {
    update(countdownFirst)
    update(countdownSecond)
  }, 1000)
}

updateCounter()

// DROPDOWN FUNCTIONS

const faqQuestions = document.querySelectorAll(".faq-question")
let activeDropdown = null

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling
    if (activeDropdown && activeDropdown !== answer) {
      activeDropdown.style.display = "none"
    }
    answer.style.display = answer.style.display === "block" ? "none" : "block"
    activeDropdown = answer
  })
})

document.addEventListener("click", (event) => {
  if (activeDropdown && !activeDropdown.parentElement.contains(event.target)) {
    activeDropdown.style.display = "none"
    activeDropdown = null
  }
})

// REDIRECTION FUNCTIONS

const appointmentButton = document.getElementById("appointmentButton")

appointmentButton.addEventListener("click", function () {
  window.location.href = "404.html"
})
