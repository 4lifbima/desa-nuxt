export const useSidebar = () => {
    const isOpen = ref(false)

    const openSidebar = () => {
        isOpen.value = true
        if (import.meta.client) {
            document.body.style.overflow = 'hidden'
        }
    }

    const closeSidebar = () => {
        isOpen.value = false
        if (import.meta.client) {
            document.body.style.overflow = 'auto'
        }
    }

    const toggleSidebar = () => {
        if (isOpen.value) {
            closeSidebar()
        } else {
            openSidebar()
        }
    }

    return {
        isOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar
    }
}
