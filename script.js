(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // START 19.6.2024
    // 9 Phases each 4 weeks = 9 x 3 x 7
    let phases = [
        new Date("2024-06-19T08:00:00.000Z"),
        new Date("2024-07-10T08:00:00.000Z"),
        //new Date("2024-07-31T08:00:00.000Z"),
    ];
    let actualPhase = phases.length;
    let startDate = phases[phases.length - 1];
    let targetDate = new Date(startDate.getTime() + (9 - phases.length + 1) * 3 * 7 * day);

    const countDown = new Date(targetDate).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime();
            distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day));
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            document.getElementById("phase").innerText = actualPhase + "/9";

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "Mission completed!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }

            for (let i = 0; i < 9; i++) {
                let style = "bar";
                if (i < actualPhase - 1) {
                    style = "bar full";
                }
                if (i === actualPhase - 1) {
                    style = "bar actual";
                }
                document.getElementById("bar" + i).className = style;
            }
            //seconds
        }, 1)
}());
