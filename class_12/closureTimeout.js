function setupTimer(doneMessage, fireAfterSeconds) {

    setTimeout(function () {
        console.log(doneMessage);
    }, fireAfterSeconds * 1000);


}

setupTimer('Timer 1 Done', 1);
setupTimer('Timer 2 Done', 2);
setupTimer('Timer 3 Done', 3);