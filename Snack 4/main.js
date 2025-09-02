function creaTimer(ms) {
    return function () {
        setTimeout(function () {
            console.log('Tempo Scaduto!');
        }, ms);
    }
}