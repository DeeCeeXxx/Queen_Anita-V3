import { DataFile, DataFileSync } from './DataFile.js';
export class JSONFile extends DataFile {
    constructor(filename) {
        super(filename, {
            parse: JSON.parse,
            stringify: (data) => JSON.stringify(data, null, 2),
        });
    }
}
export class JSONFileSync extends DataFileSync {
    constructor(filename) {
        super(filename, {
            parse: JSON.parse,
            stringify: (data) => JSON.stringify(data, null, 2),
        });
    }
}
