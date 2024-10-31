function gay() {
    let otro = document.getElementById("otro").value
    Swal.fire({
        title: "HOMOSEXUAL!",
        text: "TU NO ERE BIENVENIDO",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Gay_Pride_Flag.svg/255px-Gay_Pride_Flag.svg.png",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });
}

function Send_info() {
    let peso = document.getElementById("peso").value

    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('video');

    if (peso >= 80) {
        videoContainer.style.display = 'block';
        video.play();
    } else {
        videoContainer.style.display = 'none';
        video.pause();
        video.currentTime = 0; // Reinicia el video si el peso es menor
        Swal.fire({
            title: "Tas nitida!",
            imageHeight: 200,
            imageAlt: "Custom image"
        });

    }


}