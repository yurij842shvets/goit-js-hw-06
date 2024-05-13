import users from "./users.js";

// const getUserNames = users => {
//   users.forEach((user) => {
//     console.log(user.name);
//   });
// }

// console.log(getUserNames(users));


// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color)
// };

// console.log(getUsersWithEyeColor(users, 'blue'));


// const getUsersWithGender = (users, gender) => {
//     return users.filter(user => user.gender === gender)
//     .map((user) => user.name);
// };

// console.log(getUsersWithGender(users, 'male'));


// const getInactiveUsers = users => {
//   return users.filter(user => user.isActive == false)
// };

// console.log(getInactiveUsers(users));


// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age > min && user.age > max)
// };

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));

// const calculateTotalBalance = users => {
//   return users.reduce((totalBalance, userBalance) => totalBalance + userBalance.balance, 0)
// };

// console.log(calculateTotalBalance(users)); // 20916

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// const getNamesSortedByFriendsCount = users => {
//   return users.sort((a, b) => a.friends.length - b.friends.length)
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez'

const getSortedUniqueSkills = users => {
  const allSkills = users.flatMap(user => user.skills)
  const uniqueSkills = [...new Set(allSkills)];
  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));