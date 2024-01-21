/**
 * Throttle execute the function at regular intervals, regardless of how many times the event is fired.
 * It ensures that the function is called at least once in a give time period.
 * @param cb callback function
 * @param delay millisecond
 */
export const throttle = (cb: Function, delay: number) => {
  let last = 0;

  return (...args: any[]) => {
    let now = new Date().getTime();
    if (now - last < delay) {
      return;
    }
    last = now;
    return cb(...args);
  };
};
