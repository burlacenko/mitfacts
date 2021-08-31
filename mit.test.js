var utils  = require('course-utilities');

// if npm test is been called from "mitfacts":
// var mit = utils.load('./mit.js', 'mit');

// if npm test is been called from "mit forks", path is relative to folder from which jest (npm test) is been called:
var mit = utils.load('./mitfacts/mit.js', 'mit');

describe('MIT', () => {

    test('Object properties present', () => {
        expect(mit).toHaveProperty('city');
        expect(mit).toHaveProperty('colors');
        expect(mit).toHaveProperty('mascot');
    });

    test('City match', () => {
        expect(mit.city).toBe('Cambridge');
    });

    test('Colors match', () => {
        expect(mit.colors).toContain('Silver Gray');    
    });

    test('Founded range', () => {
        expect(mit.founded).toBeLessThanOrEqual(1875);
        expect(mit.founded).toBeGreaterThanOrEqual(1850);    
    });

    test('Motto', () => {
        expect(mit.motto).toMatch('Mens');
    });
});