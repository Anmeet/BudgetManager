const hsts = require('hsts');

export default hsts({
  maxAge: 15552000, // 180 days in seconds
});
