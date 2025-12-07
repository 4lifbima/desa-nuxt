export const useDarkMode = () => {
    const isDark = ref(false)

    const initDarkMode = () => {
        if (import.meta.client) {
            const savedTheme = localStorage.getItem('theme')
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                isDark.value = true
                document.documentElement.classList.add('dark')
            } else {
                isDark.value = false
                document.documentElement.classList.remove('dark')
            }
        }
    }

    const toggleDarkMode = (value?: boolean) => {
        if (import.meta.client) {
            const newValue = value !== undefined ? value : !isDark.value
            isDark.value = newValue

            if (newValue) {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }
        }
    }

    return {
        isDark,
        initDarkMode,
        toggleDarkMode
    }
}
