/// <reference types="node" resolution-mode="require"/>
import { PathLike } from 'node:fs';
import { Adapter, SyncAdapter } from '../../core/Low.js';
export declare class TextFile implements Adapter<string> {
    #private;
    constructor(filename: PathLike);
    read(): Promise<string | null>;
    write(str: string): Promise<void>;
}
export declare class TextFileSync implements SyncAdapter<string> {
    #private;
    constructor(filename: PathLike);
    read(): string | null;
    write(str: string): void;
}
