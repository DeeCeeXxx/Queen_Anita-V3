/// <reference types="node" resolution-mode="require"/>
import { PathLike } from 'fs';
import { DataFile, DataFileSync } from './DataFile.js';
export declare class JSONFile<T> extends DataFile<T> {
    constructor(filename: PathLike);
}
export declare class JSONFileSync<T> extends DataFileSync<T> {
    constructor(filename: PathLike);
}
