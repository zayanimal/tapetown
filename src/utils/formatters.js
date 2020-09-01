export const bem = (str, type = '__') => (el, modifier) => {
    const element = el ? `${str}${type}${el}` : str;

    if (modifier) { return `${element} ${element}_${modifier}`; }

    return element;
};
