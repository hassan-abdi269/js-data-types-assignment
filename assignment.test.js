
const test = require('node:test');
const assert = require('node:assert/strict');

// Import the student's actual answers
const answers = require('./assignment');

// ==========================================
// Q1: NUMBER DATA TYPE
// ==========================================

test('Q1: Student age must be a valid number', () => {
    assert.equal(typeof answers.studentAge, 'number');
    assert.ok(Number.isInteger(answers.studentAge));
    assert.ok(answers.studentAge > 0);
});

test('Q1: Course progress must be a number between 0 and 100', () => {
    assert.equal(typeof answers.courseProgress, 'number');
    assert.ok(answers.courseProgress >= 0);
    assert.ok(answers.courseProgress <= 100);
});


// ==========================================
// Q2: STRING DATA TYPE
// ==========================================

test('Q2: Student name must be a non-empty string', () => {
    assert.equal(typeof answers.studentName, 'string');
    assert.ok(answers.studentName.trim().length > 0);
});

test('Q2: Welcome message must contain the student name', () => {
    assert.equal(typeof answers.welcomeMessage, 'string');
    assert.ok(answers.welcomeMessage.includes(answers.studentName));
});


// ==========================================
// Q3: BOOLEAN DATA TYPE
// ==========================================

test('Q3: Learning status must be a Boolean', () => {
    assert.equal(typeof answers.isLearningJavaScript, 'boolean');
});

test('Q3: Assignment completion must be a Boolean', () => {
    assert.equal(typeof answers.hasCompletedAssignment, 'boolean');
});


// ==========================================
// Q4: NULL DATA TYPE
// ==========================================

test('Q4: Future project must have a null value', () => {
    assert.strictEqual(answers.futureProject, null);
});


// ==========================================
// Q5: UNDEFINED DATA TYPE
// ==========================================

test('Q5: Favourite language must be undefined', () => {
    assert.strictEqual(answers.favouriteLanguage, undefined);
});
