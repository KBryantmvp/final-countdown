$(function(){

    function addZero(i) {
        if (i < 10) {
            return "0" + i;
        }
        return i;
    }

    function getCountdown() {
        var todaysDate = new Date();
        var ultraMiami = new Date(2017, 2, 24, 16, 0, 0);

        var countdown = ultraMiami - todaysDate;
        //Checking some stuff with GH-PAGES

        var seconds = addZero(Math.floor((countdown/1000) % 60));
        var minutes = addZero(Math.floor((countdown/(1000*60)) % 60));
        var hours = addZero(Math.floor((countdown/(1000*60*60)) % 24));
        var days = Math.floor(countdown/(1000*60*60*24));

        return {
            'total': countdown,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    }

    function initializeTimer() {
        var $days = $('#days');
        var $hours = $('#hours');
        var $minutes = $('#minutes');
        var $seconds = $('#seconds');

        function updateTimer() {
            var time = getCountdown();

            $days.html((time.days).toString());
            $hours.html((time.hours).toString() + ":");
            $minutes.html((time.minutes).toString() + ":");
            $seconds.html((time.seconds).toString());

            if (time.total <= 0) {
                $days.html("0");
                $hours.html("00");
                $minutes.html("00");
                $seconds.html("00");
                clearInterval(intervalID);
            }
        }

        updateTimer();
        var intervalID = setInterval(updateTimer, 1000);
    }

    initializeTimer();
});