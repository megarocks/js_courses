function Cup(height, diam, color) {

    return {

        height: height,
        diam: diam,
        color: color,

        describeYourself: function () {

            var message = 'I am ' + this.height + ' cm and ' + this.diam + ' cm diameter\n';
            message += 'My color is ' + this.color;

            alert(message);

        }

    }

}

