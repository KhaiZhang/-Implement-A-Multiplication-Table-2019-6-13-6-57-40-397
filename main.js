function createMultiplyTable(startNumber,endNumber) {
    if(!isStartNumberLEEndNumber(startNumber,endNumber)){
        return null;
    }
    else if(!isNumberInRange(startNumber,endNumber)){
        return "out of range";
    }
    else{
        return getMultiplyTableByParam(startNumber,endNumber);
    }
};

function isStartNumberLEEndNumber(startNumber,endNumber) {
    return startNumber<=endNumber?true:false;
};

function isNumberInRange(startNumber,endNumber) {
    if(startNumber>=1&&startNumber<=1000&&endNumber>=1&&endNumber<=1000){
        return true;
    }
    else{
        return false;
    }
};

function getMultiplyTableByParam(startNumber,endNumber) {
    var multiplyTable="";
    for(let i=startNumber;i<=endNumber;i++){
        for(let j=startNumber;j<=i;j++){
            multiplyTable+=j+"*"+i+"="+i*j+" ";
        }
        multiplyTable+="\n";
    }
    return multiplyTable;
};

module.exports={
    createMultiplyTable,
    isStartNumberLEEndNumber,
    isNumberInRange,
    getMultiplyTableByParam
};