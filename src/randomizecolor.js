export default (typesArray, opacity) => {
  return typesArray.reduce((newObj, item) => {
    const color = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

    const convertHex = (hex) => {
      hex = hex.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    }

    return Object.assign({}, newObj, {
      [item]: convertHex(color, opacity)
    });

  }, {});
}

