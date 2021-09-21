const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const driversObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(driverNamesArray, inputString){
    return driverNamesArray.filter(driverName => driverName.toUpperCase() === inputString.toUpperCase())
}

function fuzzyMatch(driverNamesArray, inputString) {
    return driverNamesArray.filter(driverName => driverName.charAt(0) === inputString.charAt(0))
}

function matchName(driverNamesObj, inputString) {
    return driverNamesObj.filter(driverName => driverName.name === inputString)
}

