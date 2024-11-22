/// <reference types="node" resolution-mode="require"/>
import { PathLike } from 'fs';
import { Adapter, SyncAdapter } from '../../core/Low.js';
export declare class DataFile<T> implements Adapter<T> {
    #private;
    constructor(filename: PathLike, { parse, stringify, }: {
        parse: (str: string) => T;
        stringify: (data: T) => string;
    });
    read(): Promise<T | null>;
    write(obj: T): Promise<void>;
}
export declare class DataFileSync<T> implements SyncAdapter<T> {
    #private;
    constructor(filename: PathLike, { parse, stringify, }: {
        parse: (str: string) => T;
        stringify: (data: T) => string;
    });
    read(): T | null;
    write(obj: T): void;
}
