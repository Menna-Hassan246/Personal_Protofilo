// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle")
const themeIcon = document.getElementById("theme-icon")
const body = document.body

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
body.classList.toggle("dark", currentTheme === "dark")
updateThemeIcon()

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark")
  const isDark = body.classList.contains("dark")
  localStorage.setItem("theme", isDark ? "dark" : "light")
  updateThemeIcon()
})

function updateThemeIcon() {
  const isDark = body.classList.contains("dark")
  themeIcon.className = isDark ? "fas fa-sun" : "fas fa-moon"
}

// Mobile Navigation
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 100) {
    navbar.style.background = body.classList.contains("dark") ? "rgba(15, 23, 42, 0.98)" : "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = body.classList.contains("dark") ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Animate skill bars when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
}

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress")
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
          bar.style.width = width + "%"
        }, 200)
      })
    }
  })
}, observerOptions)

// Observe skills section
const skillsSection = document.querySelector(".skills")
if (skillsSection) {
  skillObserver.observe(skillsSection)
}

// Animate stats circles when they come into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const statFills = entry.target.querySelectorAll(".stat-fill")
      statFills.forEach((fill, index) => {
        setTimeout(() => {
          fill.style.strokeDashoffset = "0"
        }, index * 200)
      })
    }
  })
}, observerOptions)

// Observe about section for stats animation
const aboutSection = document.querySelector(".about")
if (aboutSection) {
  statsObserver.observe(aboutSection)
}

// Contact form handling
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields")
      return
    }

    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.")
      this.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Add loading animation to buttons
document.querySelectorAll(".btn-circle").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // Create ripple effect
    const ripple = this.querySelector(".btn-ripple")
    if (ripple) {
      ripple.style.transform = "scale(0)"
      setTimeout(() => {
        ripple.style.transform = "scale(1)"
      }, 10)
      setTimeout(() => {
        ripple.style.transform = "scale(0)"
      }, 300)
    }
  })
})

// Parallax effect for floating icons
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".icon-circle")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    const yPos = -(scrolled * speed)
    element.style.transform = `translateY(${yPos}px)`
  })
})

// Add intersection observer for fade-in animations
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
)

// Apply fade-in animation to cards
document.querySelectorAll(".project-card, .experience-card, .skill-category, .education-card").forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(30px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  fadeObserver.observe(card)
})

// Logo click to scroll to top
document.querySelector(".logo-circle").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Add active state to navigation links based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.clientHeight
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Add entrance animations
  const heroContent = document.querySelector(".hero-content")
  const heroVisual = document.querySelector(".hero-visual")

  if (heroContent) {
    heroContent.style.opacity = "0"
    heroContent.style.transform = "translateX(-50px)"
    setTimeout(() => {
      heroContent.style.transition = "opacity 1s ease, transform 1s ease"
      heroContent.style.opacity = "1"
      heroContent.style.transform = "translateX(0)"
    }, 300)
  }

  if (heroVisual) {
    heroVisual.style.opacity = "0"
    heroVisual.style.transform = "translateX(50px)"
    setTimeout(() => {
      heroVisual.style.transition = "opacity 1s ease, transform 1s ease"
      heroVisual.style.opacity = "1"
      heroVisual.style.transform = "translateX(0)"
    }, 600)
  }
})
