/*
 * @Author: Cao Haitao
 */
/*
 * @Author: Cao Haitao
 */

const { test, expect } = require('@jest/globals');

const trialDivision = require('../素数检测/trialDivision');

test('trialDivision',()=> {

    expect(trialDivision(4)).toBe(false)

})