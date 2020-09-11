/**
 * A simple stream.
 *
 * @typedef {Function} simpleStream
 * @param {*} [value] - emits a value onto the stream. When not specified, returns the
 * stream's latest value.
 * @property {Function} map - creates a new stream for which the values from the original stream
 * are processed by the passed-in function and emitted onto the new stream.
 */

/**
 * Creates a stream.
 * @function meiosis.simpleStream.stream
 * @param {*} [initial] - the stream's initial value.
 * @returns {simpleStream} the created stream.
 */
export const stream = initial => {
  const mapFunctions = [];
  let latestValue = initial;
  const createdStream = value => {
    if (value !== undefined) {
      latestValue = value;
      for (const i in mapFunctions) {
        mapFunctions[i](value);
      }
    }
    return latestValue;
  };
  createdStream.map = mapFunction => {
    const newStream = stream(latestValue !== undefined ? mapFunction(latestValue) : undefined);

    mapFunctions.push(value => {
      newStream(mapFunction(value));
    });

    return newStream;
  };
  return createdStream;
};

/**
 * Creates a new stream that starts with the initial value and, for each value arriving onto
 * the source stream, emits the result of calling the accumulator function with the latest
 * result and the source stream value.
 *
 * @function meiosis.simpleStream.scan
 *
 * @param {Function} accumulator - a two-parameter function, the result of which is emitted
 * onto the returned stream.
 * @param {*} initial - the initial value for the returned stream.
 * @param {simpleStream} sourceStream - the source stream from which values are processed by the
 * accumulator function.
 * @returns {simpleStream} the created stream.
 */
export const scan = (accumulator, initial, sourceStream) => {
  const newStream = stream(initial);
  let accumulated = initial;

  sourceStream.map(value => {
    accumulated = accumulator(accumulated, value);
    newStream(accumulated);
  });

  return newStream;
};

export default {
  stream,
  scan
};
