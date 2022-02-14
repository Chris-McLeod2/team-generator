const Employee = require('../lib/Employee.js')

test('Create employee object', () => {

    const employee = new Employee('Chris', '1', 'mcleod32@live.com')

    expect(employee.name).toBe('Chris');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('mcleod32@live.com')

})

    test('employee name', () => {

        const employee = new Employee('Chris', '1', 'mcleod32@live.com')

        expect(employee.getName).toBe('Chris')

    })

    test('employee id', () => {

        const employee = new Employee('Chris', '1', 'mcleod32@live.com')

        expect(employee.getId).toBe('1')

    })

    test('employee email', () => {

        const employee = new Employee('Chris', '1', 'mcleod32@live.com')

        expect(employee.getEmail).toBe('mcleod32@live.com')

    })

    test('role', () => {

        const employee = new Employee('Chris', '1', 'mcleod32@live.com')

        expect(employee.getRole).toBe('Employee')

    })