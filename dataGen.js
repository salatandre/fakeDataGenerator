/* const axios = require('axios');

module.exports = {
    stopGenerator() {

    },
    positionGenerator() {

        let firstLineStart = {
            lat: 45.457888,
            lon: 9.179528
        };
        let secondLineStart = 2;
        let thirdLineStart = 2;

        let increment = 0.00010;

        setInterval(async () => {
            console.log('Bus 1 running');
            try {
                await axios.post('http://localhost:3000/data/position', {
                    "bus_id": 1,
                    "time": new Date(),
                    "lat": firstLineStart.lat + increment,
                    "lon": firstLineStart.lon + increment
                });
                increment = increment + 0.00010;
            } catch (e) {
                console.log('SERVER DOWN')
            }
        }, 10000);

        setInterval(async () => {
            console.log('Bus 2 running');
            try {
                await axios.post('http://localhost:3000/data/position', {
                    "bus_id": 2,
                    "timee": new Date(),
                    "lat": firstLineStart.lat - increment,
                    "lon": firstLineStart.lon - increment
                });
                increment = increment + 0.00010;
            } catch (e) {
                console.log('SERVER DOWN')
            }
        }, 10000);
    }
} */


const axios = require('axios');


module.exports = {
    stopGenerator() {

    },
    positionGenerator() {
        var lat = 40.730610;
        var lon = -73.935242;

        setInterval(() => {
            var date = new Date();
            lat = lat + 1;
            lon = lon + 1;


            axios.post('http://localhost:3000/data/position', {
                    "bus_id": 1,
                    "time": date,
                    "lat": lat,
                    "lon": lon,
                    "people": Math.floor(Math.random() * 40) + 1,
                    "open": Math.random() >= 0.5
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 5000);


        setInterval(() => {
            var date = new Date();
            lat = lat - 1;
            lon = lon - 1;


            axios.post('http://localhost:3000/data/position', {
                    "bus_id": 2,
                    "time": date,
                    "lat": lat,
                    "lon": lon,
                    "people": Math.floor(Math.random() * 40) + 1,
                    "open": Math.random() >= 0.5
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 10000);


        setInterval(() => {
            var date = new Date();
            lat = lat + 1;
            lon = lon - 1;


            axios.post('http://localhost:3000/data/position', {
                    "bus_id": 3,
                    "time": date,
                    "lat": lat,
                    "lon": lon,
                    "people": Math.floor(Math.random() * 40) + 1,
                    "open": Math.random() >= 0.5
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 15000);

        setInterval(() => {
            var date = new Date();
            lat = lat + 5;
            lon = lon + 5;


            axios.post('http://localhost:3000/data/position', {
                    "bus_id": 4,
                    "time": date,
                    "lat": lat,
                    "lon": lon,
                    "people": Math.floor(Math.random() * 40) + 1,
                    "open": Math.random() >= 0.5
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 10000);

    }

}