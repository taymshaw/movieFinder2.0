var foo = 30;

// NAMED EXPORTS
// can have as many as desired
// 1) 
// export const sum = (a, b) => a + b;
// export const numbers = [5, 10, 15, 20, 25, foo];

// 2)
const sum = (a, b) => a + b;
const numbers = [5, 10, 15, 20, 25, foo];

export { sum, numbers };

// DEFAULT EXPORT
// one per module
const product = (a, b) => a * b;
export default product;

/* could also do the following as default only exports expressions: */
// export default (a, b) => a * b;

