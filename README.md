# Ice Cream Flavor Challenge

Front end A/B testing demands a strong working knowledge asynchronous JavaScript and DOM manipulation. There are often many different ways to achieve the same result.

Clone this repository and push your solutions to your GitHub account. See email for submission instructions.

## Instructions

**A global array, `window.iceCreamFlavors`, is empty on page load. At a random point shortly after page load, this array will be populated by a list of string data.**

**Provide JavaScript code which will reliably retrieve this data, and display it on the page.**

To create a localhost environment, use `npm run start` and navigate to `localhost:1234`.

Use `/solutions/index.js` to execute your code at page load. When ready, create a solution file in the `/solutions` directory. Filenames should follow the following convention: `solution1.js`, `solution2.js`, etc. Please include at least 2 solutions, but feel free to create more.

## Assumptions & Limitations

- Your code will execute in a global context, i.e. must run when pasted in the browser console
- jQuery will be available globally as `window.$`, if needed
- The DOM state will be reset between solutions
- No external libraries can be used, with the exception of jQuery
- The `index.html` file should not be modified on submission, i.e. no script tags present in `index.html`
