function setTheme(isDark) {
    if (isDark) {
        document.body.setAttribute('id', 'darkmode')
    } else {
        document.body.setAttribute('id', '')
    }
}