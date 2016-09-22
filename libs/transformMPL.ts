/**
 * Created by allen on 2016/9/22 0022.
 */

import * as fs from 'fs';
import {IMPL} from './IMPL';

const splitter = ` `;

export function transformMPL(filename: string): IMPL[] {
    //todo: seek for alternative solution than read file sync
    const contents: string = fs.readFileSync(filename, `utf8`);
    if (contents) {
        //todo: test if it works on linux environment or if any solution like Environment.Line (C#)
        const rows: string[] = contents.trim().split(/\s*[\r\n]+\s*/g);
        return rows.map((row: string) => {
            if (!row) {
                throw new Error(`.mpl file is not allowed to be empty in any row`);
            }
            const splits: string[] = row.split(splitter);
            return <IMPL>{
                [splits[0]]: splits[1]
            };
        })
    } else {
        return [];
    }
}