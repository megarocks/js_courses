/**
 * Created by alt on 12/23/15.
 */

var requestsPlayground = {

    apiHost: 'https://api.parse.com/1/',

    init: function () {

        requestsPlayground.getCalculations(function (calculations) {

            console.dir(calculations);

        });

    },

    getCalculations: function (callback) {

        $.ajax({
            url: requestsPlayground.apiHost + '/classes/calculation',
            method: 'GET',
            headers: {
                'X-Parse-Application-Id': '8V1SzXwjmJC1BHXqlYXVuD1pPn0Di4FdxGEUY1N7',
                'X-Parse-JavaScript-Key': 'Xq9y1XH9TEWai2mC7XwRQdlVdWPILnTXnINwbEBa'
            },
            success: function (data, textStatus) {
                console.debug('Successfull get calculations request. Response is:', data);
                callback(data.results);
            },
            error: function (response, status) {
                console.error('Error after get calculations request. Response is:', response);
            }
        });

    }

};

requestsPlayground.init();
