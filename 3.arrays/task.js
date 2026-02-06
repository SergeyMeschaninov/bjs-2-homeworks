function compareArrays(arr1, arr2) {

  if (arr1.length !== arr2.length) return false;

  return arr1.every((el, index) => el === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let filteredAges = users
    .filter(user => user.gender === gender)
    .map(user => user.age);

  if(filteredAges.length === 0){
      return 0;
  }

  let totalSum = filteredAges.reduce((sum, currentValue) => sum + currentValue, 0);
  return totalSum / filteredAges.length;
}