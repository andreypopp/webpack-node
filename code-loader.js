module.exports = function() {
  let code = this.query.slice(1).replace(/###/g, '!');
  return code;
}
