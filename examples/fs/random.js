module.exports = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  max = Math.floor(Math.random() * (max - min + 1));
  return max + min;
};
