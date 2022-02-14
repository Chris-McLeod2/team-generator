const Manager = require('../lib/Manager');

test('manager object', () => {
    const manager = new Manager('Chris', '1', 'mcleod32@live.com', '10')

    expect(manager.getOfficeNumber()).toBe('10')
})

test('role', () => {
    const manager = new Manager('Chris', '1', 'mcleod32@live.com', '10')

    expect(manager.getRole()).toBe('Manager')
})