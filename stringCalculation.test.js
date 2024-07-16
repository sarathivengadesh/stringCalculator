const { add } = require('./stringCalculation');

// 1 Pass Empty string as params to get 0
// 2 Pass number as string in params to get addtional number value
// 3 Pass 2 number as string in params to get add value of all
// 4 Pass multiple number as string in params to get add value of all
// 5 Pass Mulit line number to the params
// 6 Error case for Negative values

describe('String Calculator', () => {
    test('Pass Empty string as params', () => { 
        expect(add(" ")).toBe(0);
     });
     test('Pass one Number as string in params', () => { 
        expect(add("3")).toBe(3);
     });
     test('Pass 2 number as string in params to get add value of all',()=>{
        expect(add("5,6")).toBe(11);
     })
     test('Pass multiple as string in params to get add value of all',()=>{
        expect(add("5656")).toBe(22);
     })
     test('handle new lines between numbers',()=>{
        expect(add("1\n2,3")).toBe(6);
     })
     test('Negative number Case',()=>{
        expect(() => add("2,4,-2")).toThrow("Negative numbers not allowed: -2");
        expect(() => add("2,-4,-1")).toThrow("Negative numbers not allowed: -4,-1");
     })
});