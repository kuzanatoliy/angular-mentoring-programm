const FIRST_NAMES = [
  'Anatoli',
  'Vitaly',
  'Sergei',
  'Alexander',
  'Alexey',
  'Dmitry',
  'Igar',
  'Harry',
  'Ron',
  'Jon',
];

const LAST_NAMES = [
  'Rubin',
  'Pupkin',
  'Rusau',
  'Klimau',
  'Panasiuk',
  'Pakuta',
  'Paramanau',
  'Scherba',
  'Savastenia',
  'Lisau',
];

const USER_LIST = generateRandomUserList(20);

export function generateRandomUser() {
  return {
    firstName: FIRST_NAMES[Math.round(Math.random() * 10)],
    lastName: LAST_NAMES[Math.round(Math.random() * 10)],
  };
}

export function generateRandomUserList(count = 10) {
  const userList = [];
  for (let i = 0; i < count; i++) {
    userList.push({ id: i + 1, ...generateRandomUser() });
  }
  return userList;
}

export function generateRandomCourse() {

}

export function generateRandomCourseList() {

}
