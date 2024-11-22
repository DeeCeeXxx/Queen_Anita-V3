import { TextFile, TextFileSync } from './TextFile.js';
export class DataFile {
    #adapter;
    #parse;
    #stringify;
    constructor(filename, { parse, stringify, }) {
        this.#adapter = new TextFile(filename);
        this.#parse = parse;
        this.#stringify = stringify;
    }
    async read() {
        const data = await this.#adapter.read();
        if (data === null) {
            return null;
        }
        else {
            return this.#parse(data);
        }
    }
    write(obj) {
        return this.#adapter.write(this.#stringify(obj));
    }
}
export class DataFileSync {
    #adapter;
    #parse;
    #stringify;
    constructor(filename, { parse, stringify, }) {
        this.#adapter = new TextFileSync(filename);
        this.#parse = parse;
        this.#stringify = stringify;
    }
    read() {
        const data = this.#adapter.read();
        if (data === null) {
            return null;
        }
        else {
            return this.#parse(data);
        }
    }
    write(obj) {
        this.#adapter.write(this.#stringify(obj));
    }
}
