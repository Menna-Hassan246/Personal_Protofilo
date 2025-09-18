// // Mobile Navigation Toggle
const mobileMenu = document.getElementById("mobile-menu")
const navMenu = document.getElementById("nav-menu")

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  navMenu.classList.toggle("active")

  // Animate hamburger to X
  const spans = mobileMenu.querySelectorAll("span")
  if (mobileMenu.classList.contains("active")) {
    spans[0].style.transform = "translateY(6px) rotate(45deg)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "translateY(-6px) rotate(-45deg)"
  } else {
    spans[0].style.transform = "translateY(0) rotate(0)"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "translateY(0) rotate(0)"
  }
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    navMenu.classList.remove("active")

    const spans = mobileMenu.querySelectorAll("span")
    spans[0].style.transform = "translateY(0) rotate(0)"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "translateY(0) rotate(0)"
  })
})

// Navbar scroll effect
const navbar = document.getElementById("navbar")
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.98)"
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.3)"
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Active navigation link highlighting with circular animation
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll(".nav-link")

window.addEventListener("scroll", () => {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    const navCircle = link.querySelector(".nav-circle")
    if (link.getAttribute("href") === `#${current}`) {
      navCircle.style.background = "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)"
      navCircle.style.transform = "scale(1.1)"
      navCircle.style.boxShadow = "0 0 20px rgba(37, 99, 235, 0.5)"
    } else {
      navCircle.style.background = "#1e293b"
      navCircle.style.transform = "scale(1)"
      navCircle.style.boxShadow = "none"
    }
  })
})

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const navbarHeight = 80 // Fixed navbar height
      const targetPosition = target.offsetTop - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Circular button ripple effect
document.querySelectorAll(".btn-circle").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = this.querySelector(".btn-ripple")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = e.clientX - rect.left - size / 2 + "px"
    ripple.style.top = e.clientY - rect.top - size / 2 + "px"

    ripple.style.transform = "translate(-50%, -50%) scale(0)"
    ripple.style.opacity = "1"

    setTimeout(() => {
      ripple.style.transform = "translate(-50%, -50%) scale(1)"
      ripple.style.opacity = "0"
    }, 10)
  })
})

// Animated statistics circles
function animateStatCircles() {
  const statCircles = document.querySelectorAll(".stat-fill")

  statCircles.forEach((circle) => {
    const progress = circle.getAttribute("data-progress")
    const circumference = 2 * Math.PI * 45 // radius is 45
    const offset = circumference - (progress / 100) * circumference

    circle.style.strokeDashoffset = offset
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate stat circles when about section is visible
      if (entry.target.classList.contains("about")) {
        setTimeout(animateStatCircles, 500)
      }

      // Add stagger effect for project circles
      if (entry.target.classList.contains("projects")) {
        const projectCircles = entry.target.querySelectorAll(".project-circle")
        projectCircles.forEach((circle, index) => {
          setTimeout(() => {
            circle.style.opacity = "1"
            circle.style.transform = "translateY(0) scale(1)"
          }, index * 200)
        })
      }
    }
  })
}, observerOptions)

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".about, .skills, .projects, .contact")

  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })

  // Initially hide project circles for stagger animation
  document.querySelectorAll(".project-circle").forEach((circle) => {
    circle.style.opacity = "0"
    circle.style.transform = "translateY(30px) scale(0.9)"
    circle.style.transition = "all 0.6s ease"
  })
})

// Contact form handling with circular animations
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const submitBtn = contactForm.querySelector(".submit-btn")
  const originalText = submitBtn.querySelector("span").textContent

  // Add loading animation
  submitBtn.querySelector("span").textContent = "Sending..."
  submitBtn.style.background = "linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)"
  submitBtn.style.transform = "scale(0.95)"

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Enhanced validation with circular feedback
  const inputs = contactForm.querySelectorAll("input, textarea")
  let isValid = true

  inputs.forEach((input) => {
    const inputCircle = input.nextElementSibling

    if (!input.value.trim()) {
      input.style.borderColor = "#ef4444"
      input.style.boxShadow = "0 0 20px rgba(239, 68, 68, 0.3)"
      inputCircle.style.background = "#ef4444"
      inputCircle.style.opacity = "1"
      isValid = false
    } else {
      input.style.borderColor = "#10b981"
      input.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.3)"
      inputCircle.style.background = "#10b981"
      inputCircle.style.opacity = "1"
    }
  })

  // Email validation
  const emailInput = contactForm.querySelector('input[type="email"]')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    const emailCircle = emailInput.nextElementSibling
    emailInput.style.borderColor = "#ef4444"
    emailInput.style.boxShadow = "0 0 20px rgba(239, 68, 68, 0.3)"
    emailCircle.style.background = "#ef4444"
    emailCircle.style.opacity = "1"
    isValid = false
  }

  setTimeout(() => {
    if (isValid) {
      // Success animation
      submitBtn.querySelector("span").textContent = "Message Sent!"
      submitBtn.style.background = "#10b981"
      submitBtn.style.transform = "scale(1.05)"

      // Show success notification
      showCircularNotification("Thank you for your message! I'll get back to you soon.", "success")
      contactForm.reset()

      // Reset input circles
      inputs.forEach((input) => {
        const inputCircle = input.nextElementSibling
        input.style.borderColor = "#475569"
        input.style.boxShadow = "none"
        inputCircle.style.opacity = "0"
      })
    } else {
      showCircularNotification("Please fill in all fields correctly.", "error")
    }

    // Reset button
    setTimeout(() => {
      submitBtn.querySelector("span").textContent = originalText
      submitBtn.style.background = "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)"
      submitBtn.style.transform = "scale(1)"
    }, 2000)
  }, 1500)
})

// Circular notification system
function showCircularNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 25px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px) scale(0.8);
        opacity: 0;
        transition: all 0.3s ease;
        max-width: 300px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    `

  if (type === "success") {
    notification.style.background = "linear-gradient(135deg, #10b981, #059669)"
  } else if (type === "error") {
    notification.style.background = "linear-gradient(135deg, #ef4444, #dc2626)"
  } else {
    notification.style.background = "linear-gradient(135deg, #2563eb, #0ea5e9)"
  }

  notification.textContent = message
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0) scale(1)"
    notification.style.opacity = "1"
  }, 100)

  // Remove after delay
  setTimeout(() => {
    notification.style.transform = "translateX(400px) scale(0.8)"
    notification.style.opacity = "0"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 4000)
}

// Floating particles system
function createFloatingParticles() {
  const particlesContainer = document.createElement("div")
  particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `
  document.body.appendChild(particlesContainer)

  function createParticle() {
    const particle = document.createElement("div")
    particle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: #2563eb;
            border-radius: 50%;
            opacity: 0.6;
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
        `

    // Random starting position
    particle.style.left = Math.random() * 100 + "%"
    particle.style.bottom = "-10px"

    // Random animation duration
    const duration = Math.random() * 15 + 10
    particle.style.animation = `floatUp ${duration}s linear infinite`

    particlesContainer.appendChild(particle)

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, duration * 1000)
  }

  // Create particles continuously
  setInterval(createParticle, 500)
}

// Add CSS animation for floating particles
const style = document.createElement("style")
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Parallax effect for orbital elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const orbits = document.querySelectorAll(".orbit")

  orbits.forEach((orbit, index) => {
    const speed = (index + 1) * 0.1
    orbit.style.transform = `translate(-50%, -50%) rotate(${scrolled * speed}deg)`
  })

  // Parallax for profile orbit
  const profileOrbit = document.querySelector(".profile-orbit")
  if (profileOrbit) {
    profileOrbit.style.transform = `translateY(${scrolled * 0.1}px)`
  }
})

// Initialize everything when page loads
window.addEventListener("load", () => {
  // Create floating particles
  createFloatingParticles()

  // Add gradient definition for SVG
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.style.cssText = "position: absolute; width: 0; height: 0;"
  svg.innerHTML = `
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
            </linearGradient>
        </defs>
    `
  document.body.appendChild(svg)

  // Animate greeting circle
  const greetingCircle = document.querySelector(".greeting-circle")
  if (greetingCircle) {
    setTimeout(() => {
      greetingCircle.style.transform = "scale(1.1)"
      setTimeout(() => {
        greetingCircle.style.transform = "scale(1)"
      }, 200)
    }, 1000)
  }
})

// Dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer-circle p")
  const currentYear = new Date().getFullYear()
  footer.innerHTML = `&copy; ${currentYear} Menna Hassan. Crafted with circular design principles.`
})
