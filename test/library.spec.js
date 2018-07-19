import * as assert from 'assert'
import lorenzCurve from '../src/index'

describe('Lorenz curve', () => {
  it('should return lorenz curve', () => {
    const {x, y} = lorenzCurve([3, 4, 5, 5, 18])

    assert.deepEqual(x, [0.2, 0.4, 0.6, 0.8, 1])
    assert.deepEqual(y, [0.09, 0.2, 0.34, 0.49, 1])
  })
})
