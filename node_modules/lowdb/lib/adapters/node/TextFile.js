import { readFileSync, renameSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Writer } from 'steno';
export class TextFile {
    #filename;
    #writer;
    constructor(filename) {
        this.#filename = filename;
        this.#writer = new Writer(filename);
    }
    async read() {
        let data;
        try {
            data = await readFile(this.#filename, 'utf-8');
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        return this.#writer.write(str);
    }
}
export class TextFileSync {
    #tempFilename;
    #filename;
    constructor(filename) {
        this.#filename = filename;
        const f = filename.toString();
        this.#tempFilename = path.join(path.dirname(f), `.${path.basename(f)}.tmp`);
    }
    read() {
        let data;
        try {
            data = readFileSync(this.#filename, 'utf-8');
        }
        catch (e) {
            if (e.code === 'ENOENT') {
                return null;
            }
            throw e;
        }
        return data;
    }
    write(str) {
        writeFileSync(this.#tempFilename, str);
        renameSync(this.#tempFilename, this.#filename);
    }
}
