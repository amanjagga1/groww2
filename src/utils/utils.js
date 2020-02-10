export function debounce(fn, interval) {
  var timeout = null;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), interval)
  }
}