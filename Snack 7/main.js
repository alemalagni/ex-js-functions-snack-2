function eseguiEFerma(message, tempoI, tempoF) {
    setTimeout(function () { }, tempoI)

    setTimeout(function () {
        setInterval(function () {
            console.log(message);
        }, 500);
    }, tempoF)
}