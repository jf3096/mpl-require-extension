/**
 * Created by allen on 2016/9/22 0022.
 */
"use strict";
var chai_1 = require('chai');
var transformMPL_1 = require('../libs/transformMPL');
describe('index()', function () {
    it('simple.mpl', function () {
        var mpl = transformMPL_1.transformMPL(__dirname + '/spec-files/simple.mpl');
        chai_1.expect(JSON.stringify(mpl)).to.be.equal("[{\"Usr\":\"user\"},{\"Gender\":\"gender\"}]");
    });
});
//# sourceMappingURL=index.spec.js.map