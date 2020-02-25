const util = require('util')
module.exports = {
  User          : require('./DfpUser'),
  Statement     : require('./DfpUtils').Statement,
  Money         : require('./DfpUtils').Money,
  assetByteArray: require('./DfpUtils').assetByteArray,
  DfpDate       : require('./DfpUtils').DfpDate,
  Pr            : function pr(service){
      let other = {};
      for( let b in service) {
          if(typeof service[b] === 'function') {
              other[b + 'Async'] = util.promisify(service[b]);
          }
      }
      let newService = Object.assign(service, other);
      return newService;
  }
};
