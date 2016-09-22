/**
 * Created by allen on 2016/9/22 0022.
 */

import {expect} from 'chai';
import {transformMPL} from '../libs/transformMPL';

describe('index()', function () {
    it('simple.mpl', function () {
        const mpl = transformMPL(__dirname + '/spec-files/simple.mpl');
        expect(JSON.stringify(mpl)).to.be.equal(`[{"Usr":"user"},{"Gender":"gender"}]`);
    });
});