const { add } = require('./stringCalculation');

// 1 Pass Empty string as params to get 0
// 2 Pass number as string in params to get addtional number value
// 3 Pass multiple number as string in params to get add value of all

describe('String Calculator', () => {
    test('Pass Empty string as params', () => { 
        expect(add(" ")).toBe(0);
     });
     test('Pass one Number as string in params', () => { 
        expect(add("3")).toBe(3);
     });
});