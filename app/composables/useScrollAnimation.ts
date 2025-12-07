export const useScrollAnimation = () => {
    const initRevealAnimations = () => {
        if (import.meta.client) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active')
                        observer.unobserve(entry.target)
                    }
                })
            }, observerOptions)

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el)
            })
        }
    }

    const initNavbarScroll = () => {
        if (import.meta.client) {
            const navbar = document.getElementById('navbar')
            if (navbar) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        navbar.classList.add('shadow-md')
                    } else {
                        navbar.classList.remove('shadow-md')
                    }
                })
            }
        }
    }

    return {
        initRevealAnimations,
        initNavbarScroll
    }
}
