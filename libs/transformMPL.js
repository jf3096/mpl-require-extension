/**
 * Created by allen on 2016/9/22 0022.
 */
"use strict";
var fs = require('fs');
var splitter = " ";
function transformMPL(filename) {
    //todo: seek for alternative solution than read file sync
    var contents = fs.readFileSync(filename, "utf8");
    if (contents) {
        //todo: test if it works on linux environment or if any solution like Environment.Line (C#)
        var rows = contents.trim().split(/\s*[\r\n]+\s*/g);
        return rows.map(function (row) {
            if (!row) {
                throw new Error(".mpl file is not allowed to be empty in any row");
            }
            var splits = row.split(splitter);
            return (_a = {},
                _a[splits[0]] = splits[1],
                _a
            );
            var _a;
        });
    }
    else {
        return [];
    }
}
exports.transformMPL = transformMPL;
//# sourceMappingURL=transformMPL.js.map