class Clock {
    constructor(hours, minutes, seconds, country) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.country = country;
    }

    convertToSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }

    show() {
        return `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`;
    }

    formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

}