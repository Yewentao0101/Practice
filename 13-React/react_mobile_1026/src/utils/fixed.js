function adapter(){
    const fontSize = document.documentElement.clientWidth / 10
    document.documentElement.style.fontSize = fontSize + 'px'
}
adapter()
window.onresize = adapter