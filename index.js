"use strict";
var transformMPL_1 = require('./libs/transformMPL');
/**
 * Created by allen on 2016/9/22 0022.
 */
require.extensions['.mpl'] = function (module, filename) {
    module.exports = transformMPL_1.transformMPL(filename);
};
//# sourceMappingURL=index.js.map