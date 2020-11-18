document.addEventListener("mousemove", function (event) {
    const x = event.pageX
    const y = event.pageY

    document.querySelectorAll("div").forEach(div => {
        const dx = div.offsetLeft + 50 - x
        const dy = div.offsetTop + 50 - y
        const dist = Math.sqrt(dx * dx + dy * dy)
    })    
})