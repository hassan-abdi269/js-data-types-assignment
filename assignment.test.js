
const test = require('node:test');
const assert = require('node:assert/strict');

// Q1: Number
test('Q1: Number values', () => {
  const studentAge = 22;
  const courseProgress = 75.5;

  assert.equal(typeof studentAge, 'number');
  assert.equal(typeof courseProgress, 'number');
});

// Q2: String
test('Q2: String values', () => {
  const studentName = 'Hassan';
  const welcomeMessage = `Welcome, ${studentName}!`;

  assert.equal(typeof studentName, 'string');
  assert.match(welcomeMessage, /Hassan/);
});

// Q3: Boolean
test('Q3: Boolean values', () => {
  const isLearningJavaScript = true;
  const hasCompletedAssignment = false;

  assert.equal(typeof isLearningJavaScript, 'boolean');
  assert.equal(typeof hasCompletedAssignment, 'boolean');
});

// Q4: Null and undefined
test('Q4: Null and undefined', () => {
  const futureProject = null;
  let favouriteLanguage;

  assert.equal(futureProject, null);
  assert.equal(favouriteLanguage, undefined);
});

// Q5: Symbol
test('Q5: Symbols are unique', () => {
  const first = Symbol('studentId');
  const second = Symbol('studentId');

  assert.notEqual(first, second);
});

// Q6: BigInt
test('Q6: BigInt preserves large integers', () => {
  const largeNumber = BigInt('9007199254740992');

  assert.equal(typeof largeNumber, 'bigint');
  assert.ok(largeNumber > BigInt(Number.MAX_SAFE_INTEGER));
});

// Q7: NaN
test('Q7: NaN detection', () => {
  const result = 'not a number' / 2;

  assert.ok(Number.isNaN(result));
});

// Q8: Object
test('Q8: Student object', () => {
  const student = {
    name: 'Hassan',
    course: 'Information Technology',
    year: 3,
    isEnrolled: true
  };

  student.campus = 'Garissa';

  assert.equal(student.name, 'Hassan');
  assert.equal(student.campus, 'Garissa');
});

// Q9: Array
test('Q9: Array operations', () => {
  const topics = ['Variables', 'Strings', 'Objects', 'Functions'];

  topics.push('Arrays');

  assert.equal(topics[0], 'Variables');
  assert.equal(topics.at(-1), 'Arrays');
  assert.equal(topics.length, 5);
});

// Q10: Function
test('Q10: Greeting function', () => {
  function greetStudent(name) {
    return `Hello, ${name}! Keep learning JavaScript.`;
  }

  assert.match(greetStudent('Hassan'), /Hassan/);
});

// Q11: Date
test('Q11: Date object', () => {
  const currentDate = new Date();

  assert.equal(currentDate instanceof Date, true);
  assert.ok(!Number.isNaN(currentDate.getTime()));
});

// Q12: Regular expression
test('Q12: Regular expression', () => {
  const pattern = /JavaScript/;

  assert.equal(pattern.test('I am learning JavaScript'), true);
  assert.equal(pattern.test('I am learning Python'), false);
});

// Q13: Mixed array
test('Q13: Mixed data types in an array', () => {
  const values = ['hello', 42, true, null, { name: 'Student' }];

  assert.equal(values.length, 5);
  assert.equal(typeof values[0], 'string');
  assert.equal(typeof values[1], 'number');
  assert.equal(typeof values[2], 'boolean');
  assert.equal(values[3], null);
  assert.equal(typeof values[4], 'object');
});

// Q14: typeof
test('Q14: typeof checks', () => {
  assert.equal(typeof 10, 'number');
  assert.equal(typeof 'hello', 'string');
  assert.equal(typeof true, 'boolean');
  assert.equal(typeof {}, 'object');
  assert.equal(typeof [], 'object');
  assert.equal(typeof function () {}, 'function');
  assert.equal(typeof null, 'object');
});
