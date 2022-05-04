export default (...classNames: unknown[]) => classNames
  .filter(x => typeof x === 'string')
  .join(' ');
