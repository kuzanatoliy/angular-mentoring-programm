export const FIRST_NAMES = [
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

export const LAST_NAMES = [
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

export const USER_LIST = generateRandomUserList(20);

export const COURSE_LIST = generateRandomCourseList(100);

export function generateRandomUser(id) {
  return {
    firstName: FIRST_NAMES[Math.floor(Math.random() * 10)],
    id: id || Math.ceil(Math.random() * 100),
    lastName: LAST_NAMES[Math.floor(Math.random() * 10)],
  };
}

export function generateRandomUserList(count = 10) {
  const userList = [];
  for (let i = 0; i < count; i++) {
    userList.push(generateRandomUser(i + 1));
  }
  return userList;
}

export function generateRandomCourse(id) {
  const index = id || Math.ceil(Math.random() * 100);
  return {
    authors: [ USER_LIST[Math.floor(Math.random() * USER_LIST.length)] ],
    creationDate: new Date(new Date().setMonth(Math.floor(Math.random() * 12))),
    description: `This is course number ${ index }`,
    duration: Math.round(Math.random() * 500),
    id: index,
    title: `The course ${ index }`,
    topRated: !!Math.round(Math.random()),
  };
}

export function generateRandomCourseList(count = 10) {
  const courseList = [];
  for (let i = 0; i < count; i++) {
    courseList.push(generateRandomCourse(i + 1));
  }
  return courseList;
}
