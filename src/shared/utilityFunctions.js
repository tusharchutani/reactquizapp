/**
 * 
 * @param {string} str 
 * @returns: a formatted HTML
 * Code taken from: https://css-tricks.com/snippets/javascript/unescape-html-in-js/
 */
export const formatString = (str) =>{
    var e = document.createElement('div');
    e.innerHTML = str;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }