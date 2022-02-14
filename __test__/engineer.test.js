const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Engineer = require('../lib/Engineer.js')

test('engineer github username', () => {

    const engineer = new Engineer('Chris', '1', 'mcleod32@live.com', 'username')

    expect(engineer.getGitHub).toBe('username');
   

})

test('role', () => {

    const engineer = new Engineer('Chris', '1', 'mcleod32@live.com', 'username')

    expect(engineer.getRole()).toBe('Engineer')
})