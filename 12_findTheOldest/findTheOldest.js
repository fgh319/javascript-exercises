const findTheOldest = function(arr) {
    arr.sort((a, b) => getAge(b.yearOfBirth, b.yearOfDeath) - getAge(a.yearOfBirth, a.yearOfDeath));
    return arr[0];
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
