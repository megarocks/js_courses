var name = "Alex";

var morningMessage = "good morning";
var eventingMessage = "good evening";

var d = new Date();
var time = d.getHours();

if (time <= 12) {
    alert(morningMessage + " " + name);
} else {
    alert(eventingMessage + " " + name);
}
