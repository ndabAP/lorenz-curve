import sortBy from 'lodash/sortBy'
import reduce from 'lodash/reduce'
import last from 'lodash/last'
import head from 'lodash/head'
import round from 'lodash/round'
import each from 'lodash/each'
import size from 'lodash/size'

/**
 * @param {array} data
 * @param {number} precision
 *
 * @returns {{x: Array, y: Array}}
 */
export default (data, precision = 2) => {
  // Sort data ascending
  const sorted = sortBy(data)
  // Data size
  const amount = size(sorted)

  // Cummulate the data
  const added = reduce(sorted, (cummulated, current, key) => {
    // First value is always first value of data
    if (key === 0) {
      cummulated.push(head(sorted))
    } else cummulated.push(current + last(cummulated))

    return cummulated
  }, [])

  // Cummulative result
  const max = last(added)
  // Value ratio of data
  let ratios = []
  // Ratio regarding max value
  let percentages = []
  each(added, (value, index) => {
    percentages.push(round(value / max, precision))
    ratios.push(round((index + 1) / amount, precision))
  })

  return {x: ratios, y: percentages}
}
