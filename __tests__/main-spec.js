const functions=require('../main');

it ('given 3 and 30 when excuting isStartNumberLEEndNumber then return true', () => {
    expect(functions.isStartNumberLEEndNumber(3, 30)).toBe(true);
});

it ('given 300 and 30 when excuting isStartNumberLEEndNumber then return false', () => {
    expect(functions.isStartNumberLEEndNumber(300, 30)).toBe(false);
});

it ('given 1 and 1000 when excuting isNumberInRange then return true', () => {
    expect(functions.isNumberInRange(1, 1000)).toBe(true);
});

it ('given 0 and 1000 when excuting isNumberInRange then return false', () => {
    expect(functions.isNumberInRange(0, 1000)).toBe(false);
});

it ('given 0 and 1001 when excuting isNumberInRange then return false', () => {
    expect(functions.isNumberInRange(0, 1001)).toBe(false);
});

it ('given 2 and 4 when excuting isNumberInRange then return 2*2=4 2*3=6 3*3=9 2*4=8 3*4=12 4*4=16', () => {
    expect(functions.getMultiplyTableByParam(2, 4)).toBe('2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n');
});

it ('given 2 and 4 when excuting createMultiplyTable then return 2*2=4 2*3=6 3*3=9 2*4=8 3*4=12 4*4=16', () => {
    expect(functions.createMultiplyTable(2, 4)).toBe('2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n');
});

it ('given 0 and 1000 when excuting createMultiplyTable then return out of range', () => {
    expect(functions.createMultiplyTable(0, 1000)).toBe('out of range');
});

it ('given 100 and 1 when excuting createMultiplyTable then return null', () => {
    expect(functions.createMultiplyTable(100, 1)).toBe(null);
});