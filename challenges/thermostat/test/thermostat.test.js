const Thermostat = require('../lib/thermostat');

describe('ShoppingBasket', () => {
    test ('returns default temperature', () => {
        const temp = new Thermostat ();
        expect(temp.getTemperature()).toBe(20)
    });
    test ('turns up temp to 22 degrees', () => {
        const thermostat = new Thermostat ();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22)
    });

    test ('turns down temp to 19 degrees', () => {
        const thermostat = new Thermostat ();
        thermostat.up();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(19)
    });

    test ('turns up temp to 25 degrees, returns Max Temp Reached', () => {
        const thermostat = new Thermostat ();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.up()).toBe("Max temp reached")
    });

    test ('turns down temp to 10 degrees, returns Min Temp Reached', () => {
        const thermostat = new Thermostat ();
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.down();
          }
        expect(thermostat.down()).toBe("Min temp reached")
    });

    test ('turns Power Saving Mode off and on', () => {
        const thermostat = new Thermostat ();
        expect(thermostat.setPowerSavingMode(false)).toBe("PSM is now off, max temperature is no more 25")
        expect(thermostat.setPowerSavingMode(true)).toBe('PSM is now on, max temperature is 25')
    });

    test ('cranks that thermostat', () => {
        const thermostat = new Thermostat ();
        thermostat.setPowerSavingMode(false)
        for (let i = 0 ; i < 10 ; i++) {
            thermostat.up();
          }
        expect(thermostat.getTemperature()).toBe(30)
    });

    test ('resets thermostat', () => {
        const thermostat = new Thermostat ();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20)
    });


});

/*
const thermostat = new Thermostat();




thermostat.up();
thermostat.getTemperature(); // should now return 26

thermostat.reset();
thermostat.getTemperature(); // should be back to 20

*/