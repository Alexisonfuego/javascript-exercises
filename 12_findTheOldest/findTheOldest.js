
function findTheOldest(people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        let personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;

        return personAge > oldestAge ? person : oldest;
    })
}

// Do not edit below this line
module.exports = findTheOldest;