/* global describe, it */

'use strict'

import 'module-alias/register'
import { expect } from 'chai'
import myModule from '@client/module'

describe('some client module', () => {
  it('returns 5', () => {
    expect(myModule()).to.equal(5)
  })
})
