class DynamicTimer {
    constructor(targetDateTime, outputPlaceholder) {
        this.targetDateTime = new Date(targetDateTime).getTime();
        this.outputPlaceholder = outputPlaceholder;
        this.intervalCounter = null;
        this.startCountdown();
    }
    startCountdown() {
        this.intervalCounter = setInterval(() => {
            const currentTime = new Date().getTime();
            const interval = this.targetDateTime - currentTime;
            const days = Math.floor(interval / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (interval % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((interval % (1000 * 60)) / 1000);
            const countdownElement = document.querySelector(
                `#${this.outputPlaceholder}`
            );
            countdownElement.innerHTML =
                days + 'd:' + hours + 'h:' + minutes + 'm:' + seconds + 's';
            if (interval < 0) {
                clearInterval(this.intervalCounter);
                countdownElement.innerHTML = 'EXPIRED';
            }
        }, 1000);
    }
}

const targetDateTime = 'Oct 1, 2024 22:00:00';
const dynamicTimer = new DynamicTimer(targetDateTime, 'count-down');
