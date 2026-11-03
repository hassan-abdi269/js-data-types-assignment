
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Read the student's assignment
const assignmentPath = path.join(__dirname, 'assignment.js');
const code = fs.readFileSync(assignmentPath, 'utf8');

// Create an isolated JavaScript environment
const context = vm.createContext({ console });

// Execute the student's code
let executionError = null;

try {
    vm.runInContext(code, context);
} catch (error) {
    executionError = error;
}

// Safely read a variable from the student's code
function getVariable(name) {
    try {
        return vm.runInContext(
            `typeof ${name} === 'undefined' ? undefined : ${name}`,
            context
        );
    } catch (error) {
        return undefined;
    }
}

// Check whether a variable has been declared
function isDeclared(name) {
    const declarationPattern = new RegExp(
        `\\b(let|const|var)\\s+${name}\\b`
    );

    return declarationPattern.test(code);
}

// Read student variables individually
const answers = {
    studentAge: getVariable('studentAge'),
    courseProgress: getVariable('courseProgress'),
    studentName: getVariable('studentName'),
    welcomeMessage: getVariable('welcomeMessage'),
    isLearningJavaScript: getVariable('isLearningJavaScript'),
    hasCompletedAssignment: getVariable('hasCompletedAssignment'),
    futureProject: getVariable('futureProject'),
    favouriteLanguage: getVariable('favouriteLanguage')
};

// Check whether the student's code runs
test('Assignment must have valid JavaScript syntax', () => {
    assert.ifError(executionError);
});

// ==========================================
// Q1: NUMBER DATA TYPE
// ==========================================

test('Q1: Student age must be a positive integer', () => {
    assert.ok(isDeclared('studentAge'), 'Declare studentAge');
    assert.equal(typeof answers.studentAge, 'number');
    assert.ok(Number.isInteger(answers.studentAge));
    assert.ok(answers.studentAge > 0);
});

test('Q1: Course progress must be between 0 and 100', () => {
    assert.ok(isDeclared('courseProgress'), 'Declare courseProgress');
    assert.equal(typeof answers.courseProgress, 'number');
    assert.ok(answers.courseProgress >= 0);
    assert.ok(answers.courseProgress <= 100);
});

// ==========================================
// Q2: STRING DATA TYPE
// ==========================================

test('Q2: Student name must be a non-empty string', () => {
    assert.ok(isDeclared('studentName'), 'Declare studentName');
    assert.equal(typeof answers.studentName, 'string');
    assert.ok(answers.studentName.trim().length > 0);
});

test('Q2: Welcome message must contain the student name', () => {
    assert.ok(isDeclared('welcomeMessage'), 'Declare welcomeMessage');
    assert.equal(typeof answers.studentName, 'string');
    assert.equal(typeof answers.welcomeMessage, 'string');
    assert.ok(answers.welcomeMessage.includes(answers.studentName));
});

// ==========================================
// Q3: BOOLEAN DATA TYPE
// ==========================================

test('Q3: Learning status must be a Boolean', () => {
    assert.ok(isDeclared('isLearningJavaScript'), 'Declare isLearningJavaScript');
    assert.equal(typeof answers.isLearningJavaScript, 'boolean');
});

test('Q3: Assignment completion must be a Boolean', () => {
    assert.ok(isDeclared('hasCompletedAssignment'), 'Declare hasCompletedAssignment');
    assert.equal(typeof answers.hasCompletedAssignment, 'boolean');
});

// ==========================================
// Q4: NULL DATA TYPE
// ==========================================

test('Q4: Future project must be null', () => {
    assert.ok(isDeclared('futureProject'), 'Declare futureProject');
    assert.strictEqual(answers.futureProject, null);
});

// ==========================================
// Q5: UNDEFINED DATA TYPE
// ==========================================

test('Q5: Favourite language must be declared and undefined', () => {
    assert.ok(isDeclared('favouriteLanguage'), 'Declare favouriteLanguage');
    assert.strictEqual(answers.favouriteLanguage, undefined);
});
