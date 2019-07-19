const axios = require('axios');
const config = require("../system/config");


module.exports = {
    dataGen() {

        //  5
        setInterval(() => {
            var date = new Date();


            axios.post(config.host.url + '/data/power', {
                    "belt_id": 5,
                    "time": date,
                    "consume": Math.floor(Math.random() * 70) + 30,
                    "vel": Math.floor(Math.random() * 70) + 40
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 30000);

        //  6
        setInterval(() => {
            var date = new Date();


            axios.post(config.host.url + '/data/power', {
                    "belt_id": 6,
                    "time": date,
                    "consume": Math.floor(Math.random() * 70) + 30,
                    "vel": Math.floor(Math.random() * 70) + 40
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 30000);

        //  7
        setInterval(() => {
            var date = new Date();


            axios.post(config.host.url + '/data/power', {
                    "belt_id": 7,
                    "time": date,
                    "consume": Math.floor(Math.random() * 70) + 30,
                    "vel": Math.floor(Math.random() * 70) + 40
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 30000);

        //  8
        setInterval(() => {
            var date = new Date();


            axios.post(config.host.url + '/data/power', {
                    "belt_id": 8,
                    "time": date,
                    "consume": Math.floor(Math.random() * 70) + 30,
                    "vel": Math.floor(Math.random() * 70) + 40
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 30000);
        //  8
        setInterval(() => {
            var date = new Date();


            axios.post(config.host.url + '/data/power', {
                    "belt_id": 9,
                    "time": date,
                    "consume": Math.floor(Math.random() * 70) + 30,
                    "vel": Math.floor(Math.random() * 70) + 40
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 30000);

        //  8
        setInterval(() => {
            var date = new Date();


            axios.post(config.host.url + '/data/power', {
                    "belt_id": 10,
                    "time": date,
                    "consume": Math.floor(Math.random() * 70) + 30,
                    "vel": Math.floor(Math.random() * 70) + 40
                })
                .then(function (response) {

                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 30000);
    }

}