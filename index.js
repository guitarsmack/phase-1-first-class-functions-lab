const returnFirstTwoDrivers = function (firstTwo) {
    return [firstTwo[0],firstTwo[1]];
}

const returnLastTwoDrivers = function (lastTwo) {
    return [lastTwo[lastTwo.length - 2], lastTwo[lastTwo.length - 1]]
}

const selectingDrivers = function () {
    return [returnFirstTwoDrivers,returnLastTwoDrivers]
}()

const createFareMultiplier = function(num) {
    return function(fare) {
        return num * fare
    };
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arra,fun) {
    return fun(arra);
}

