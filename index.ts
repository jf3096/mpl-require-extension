import {transformMPL} from './libs/transformMPL';
/**
 * Created by allen on 2016/9/22 0022.
 */

require.extensions['.mpl'] = function (module: NodeModule, filename: string) {
    module.exports = transformMPL(filename);
};