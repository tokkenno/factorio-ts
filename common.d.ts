/** @luaTable */
declare class Table<K extends {} = {}, V = any> {
    readonly length: number;

    set(key: K, value: V | undefined): void;

    get(key: K): V | undefined;
}

/**
 * Lazily evaluated table. See https://lua-api.factorio.com/latest/LuaCustomTable.html for more information.
 * @luaTable */
declare class CustomTable<K extends {} = {}, V = any> {
    readonly length: number;

    set(key: K, value: V | undefined): void;

    get(key: K): V | undefined;
}

declare interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

/**
 * Localised strings are a way to support translation of in-game text.
 * It is an array where the first element is the key and the remaining elements are parameters that will be substituted for placeholders in the template designated by the key.
 */
declare type LocalisedString = string[];

declare class Control {

}

declare class Player {

}
