declare class FactorioData {
    extend(prototypes: Prototype[]): void;
}

declare const data: FactorioData;

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

declare type SoundPath = string;

declare type SpritePath = string;

declare class Control {

}

declare interface Entity {

}

declare class Player {

}

declare class PlayerSpecification {

}

declare class Force {

}

declare class ForceSpecification {

}

declare class TechnologySpecification {}

declare class Surface {}

declare class SurfaceSpecification {}

declare class Profiler {}

declare interface Position {
    x: number;
    y: number;
}

declare interface RandomGenerator {

}

declare interface RandomGenerator {
    (lower: number, upper: number): number;
    re_seed(seed: number): void;
    readonly valid: boolean;
    help(): string;
}

declare interface MapSettings {

}

declare interface MapGenSettings {
}

declare interface MapExchangeStringData {
    map_settings: MapSettings;
    map_gen_settings: MapGenSettings;
}
