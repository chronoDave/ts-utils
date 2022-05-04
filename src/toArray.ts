export default <T>(x: T | T[]) => Array.isArray(x) ? x : [x];
