const Intern = require('../lib/Intern');

test('school name', () => {
    const intern = new Intern('Chris', '1', 'mcleod32@live.com', 'School')

    expect(intern.getSchool()).toBe('School')
})

test('role', () => {
    const intern = new Intern('Chris', '1', 'mcleod32@live.com', 'School')

    expect(intern.getRole()).toBe('Intern')
})