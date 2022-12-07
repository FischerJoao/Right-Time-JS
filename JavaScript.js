function load() {
    var img = document.getElementById('img')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hour = data.getHours()
    var minutes = data.getMinutes()

    msg.innerHTML = `Agora são ${hour} horas e ${minutes} minutos, `
    if (hour >= 0 && hour < 12) {
        msg.innerHTML += 'Bom dia!'
        img.src = 'photo-morning.jpg'
    } else if (hour >= 12 && hour <= 18) {
        msg.innerHTML += 'Boa Tarde!'
        img.src = 'photo-evening.jpg'
    } else {
        msg.innerHTML += 'Boa Noite!'
        img.src = 'photo-night.jpg'
    }
}