for (var iceCreams = 9; iceCreams >= 0; iceCreams--) {

    if (iceCreams == 5) {
        console.log("Кушай скорее, мороженко тает");
    } else if (iceCreams == 3) {
        console.log("Мороженка всё меньше и меньше");
    } else if (iceCreams == 1) {
        console.warn("Осталось всего одно");
    } else if (iceCreams == 0) {
        console.log("Всё закончилось");
    } else {
        console.log("Мороженка еще много");
    }

}

