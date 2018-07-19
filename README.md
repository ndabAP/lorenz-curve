# Lorenz curve

## Installation
```
npm install lorenz-curve --save
```

## API
### `lorenzCurve(data: [], precision: Number)`

| Parameter   | Type              | Description               |
|-------------|-------------------|---------------------------|
| `data`      | `[]`              | Data set                    |
| `precision` | `Number`          | Precision for ratios      |

## Usage

```js
import lorenzCurve from 'lorenz-curve'
import * as assert from 'assert'

const {x, y} = lorenzCurve([3, 4, 5, 5, 18])

assert.deepEqual(x, [0.2, 0.4, 0.6, 0.8, 1])
assert.deepEqual(y, [0.09, 0.2, 0.34, 0.49, 1])
```

If you are using `require`, you have to attach `.default`.

## Author

[Julian Claus](https://www.julian-claus.de) and contributors.

## License

MIT
