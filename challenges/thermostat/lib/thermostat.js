class Thermostat {
    constructor () {
        this.powerSavingMode = true;
        this.temperature = 20;
        this.powerSavingTemp = 25;
    }
    up () {
        if (this.temperature === this.powerSavingTemp && this.powerSavingMode === true) {
            return 'Max temp reached';
        } else {
            this.temperature ++;
        }
    }
    down () {
        if (this.temperature === 10) {
            return "Min temp reached";
        } else {
        this.temperature --;
        }
    }
    reset () {
        this.temperature = 20;
    }
    energyUsage () {
        if (this.temperature < 18) {
            return "Low-usage";
        } else if (this.temperature <= this.powerSavingTemp) {
            return "Medium-usage";
        } else {
            return "High-usage";
        }
    }
    getTemperature () {
        return this.temperature;
    }
    setPowerSavingMode (status) {
        if (status === true) {
            this.powerSavingMode = status;
            return "PSM is now on, max temperature is 25";
        } else if (status === false) {
            this.powerSavingMode = status;
            return "PSM is now off, max temperature is no more 25";
        } else {
            return "Invalid input"
        }
    }
}


module.exports = Thermostat;
 
// const thermostat = new Thermostat;
// console.log(thermostat.setPowerSavingMode(cba));

// min temp is 10 degrees
// power saving on
    // max : 25 degrees
// power saving off
    // max : 32 degrees

