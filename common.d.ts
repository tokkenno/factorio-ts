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

declare interface AchievementPrototype extends FactorioPrototype {
}

declare interface AmmoCategoryPrototype extends FactorioPrototype {
    readonly bonus_gui_order: string;
}

declare interface AutoplaceControlPrototype extends FactorioPrototype {
    readonly richness: boolean;
    readonly control_order: string;
    readonly category: string;
}

declare interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

declare type Comparator = '<' | '>' | '=' | '≥' | '≤' | '≠';

declare interface CustomInputPrototype extends FactorioPrototype {
    readonly key_sequence: string;
    readonly alternative_key_sequence: string;
    readonly linked_game_control: string;
    readonly consuming: string;
    readonly enabled: boolean;
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

type CollisionMaskLayer =
    'ground-tile'
    | 'water-tile'
    | 'resource-layer'
    | 'doodad-layer'
    | 'floor-layer'
    | 'item-layer'
    | 'ghost-layer'
    | 'object-layer'
    | 'player-layer'
    | 'train-layer'
    | 'layer-11'
    | 'layer-12'
    | 'layer-13'
    | 'layer-14'
    | 'layer-15'
    | 'not-setup';

declare class CollisionMask extends CustomTable<CollisionMaskLayer, Boolean> {
}

type CollisionMaskWithFlagsLayer =
    CollisionMaskLayer
    | 'not-colliding-with-itself'
    | 'consider-tile-transitions'
    | 'colliding-with-tiles-only';

declare class CollisionMaskWithFlags extends CustomTable<CollisionMaskWithFlagsLayer, Boolean> {
}

declare interface DamagePrototype extends FactorioPrototype {
    readonly hidden: boolean;
}

type EntityPrototypeFlags =
    'not-rotatable'
    | 'placeable-neutral'
    | 'placeable-player'
    | 'placeable-enemy'
    | 'placeable-off-grid'
    | 'player-creation'
    | 'building-direction-8-way'
    | 'filter-directions'
    | 'fast-replaceable-no-build-while-moving'
    | 'breaths-air'
    | 'not-repairable'
    | 'not-on-map'
    | 'not-deconstructable'
    | 'not-blueprintable'
    | 'hidden'
    | 'hide-alt-info'
    | 'fast-replaceable-no-cross-type-while-moving'
    | 'no-gap-fill-while-building'
    | 'not-flammable'
    | 'no-automated-item-removal'
    | 'no-automated-item-insertion'
    | 'no-copy-paste'
    | 'not-selectable-in-game'
    | 'not-upgradable';

declare interface DecorativePrototype extends FactorioPrototype {
    readonly collision_box: BoundingBox;
    readonly collision_mask: CollisionMask;
    readonly collision_mask_with_flags: CollisionMaskWithFlags;
    readonly autoplace_specification: AutoplaceSpecification;
}

declare interface EquipmentPrototype extends FactorioPrototype {
}

declare interface EquipmentCategoryPrototype extends FactorioPrototype {
}

declare interface EquipmentPrototypeFilter {
    filter: 'item-to-place' | 'type';
    mode?: 'and' | 'or';
    invert?: boolean;
}

declare interface TypeEquipmentPrototypeFilter extends EquipmentPrototypeFilter {
    filter: 'type';
    type: string;
}

declare interface Entity {

}

declare interface EntityPrototype extends FactorioPrototype {

}

declare interface EntityPrototypeFilter {
    filter: string;
    mode?: 'or' | 'and';
    invert?: boolean;
}

declare interface NameEntityPrototypeFilter extends EntityPrototypeFilter {
    filter: 'name';
    name: string | string[];
}

declare interface TypeEntityPrototypeFilter extends EntityPrototypeFilter {
    filter: 'type';
    type: string;
}

declare interface CollisionMaskEntityPrototypeFilter extends EntityPrototypeFilter {
    filter: 'collision-mask';
    mask: CollisionMask | CollisionMaskWithFlags;
    mask_mode: 'collides' | 'layers-equals';
}

declare interface FlagEntityPrototypeFilter extends EntityPrototypeFilter {
    filter: 'flag';
    flag: EntityPrototypeFlags;
}

declare interface BuildBaseEvolutionRequirementEntityPrototypeFilter extends EntityPrototypeFilter {
    filter: 'build-base-evolution-requirement';
    comparison: Comparator;
    value: number;
}

declare interface SelectionPriorityEntityPrototypeFilter extends EntityPrototypeFilter {
    filter: 'selection-priority';
    comparison: Comparator;
    value: number;
}

declare interface EmissionsEntityPrototypeFilter extends EntityPrototypeFilter {
    filter: 'emissions';
    comparison: Comparator;
    value: number;
}

declare interface CraftingCategoryEntityPrototypeFilter extends EntityPrototypeFilter {
    filter: 'crafting-category';
    crafting_category: string;
}

declare interface Inventory {

}

declare interface ItemPrototype extends FactorioPrototype {

}

declare interface ItemPrototypeFilter {
    filter: string;
    mode?: 'or' | 'and';
    invert?: boolean;
}

declare type ItemPrototypeFlag =
    'draw-logistic-overlay'
    | 'hidden'
    | 'hide-from-bonus-gui'
    | 'hide-from-fuel-tooltip'
    | 'not-stackable'
    | 'can-extend-inventory'
    | 'primary-place-result'
    | 'mod-openable'
    | 'only-in-cursor';

declare interface PlaceResultItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'place-result';
    elem_filters: EntityPrototypeFilter[];
}

declare interface BurntResultItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'burnt-result';
    elem_filters: ItemPrototypeFilter[];
}

declare interface PlaceAsTileItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'place-as-tile';
    elem_filters: TilePrototypeFilter[];
}

declare interface PlacedAsEquipmentResultItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'placed-as-equipment-result';
    elem_filters: EquipmentPrototypeFilter[];
}

declare interface NameItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'name';
    name: string;
}

declare interface TypeItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'type';
    type: string;
}

declare interface FlagItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'flag';
    flag: ItemPrototypeFlag;
}

declare interface FuelCategoryItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'fuel-category';
    'fuel-category': string;
}

declare interface ComparatorItemPrototypeFilter extends ItemPrototypeFilter {
    filter: 'stack-size' | 'default-request-account' | 'wire-count' | 'fuel-value' | 'fuel-acceleration-multiplier' | 'fuel-top-speed-multiplier' | 'fuel-emissions-multiplier';
    comparison: Comparator;
    value: number;
}

declare interface TilePrototypeFilter {
}

declare class Player {

}

declare class PlayerSpecification {

}

declare interface EquipmentGridPrototype extends FactorioPrototype {
    readonly equipment_categories: string[];
    readonly width: number;
    readonly height: number;
    readonly locked: boolean;
}

declare interface FlowStatistics {
    readonly input_counts: { [name: string]: number[] };

    readonly output_counts: { [name: string]: number[] };

    readonly force: Force;

    get_input_count(name: string): number;

    set_input_count(name: string, count: number): void;

    get_output_count(name: string): number;

    set_output_count(name: string, count: number): void;

    get_flow_count(params: { name: string; input: boolean; precision_index: defines.flow_precision_index; count?: number; }): number;

    on_flow(name: string, count: number): void;

    clear(): void;
}

declare interface FluidPrototype extends FactorioPrototype {
    readonly default_temperature: number;
    readonly max_temperature: number;
    readonly heat_capacity: number;
    readonly order: string;
    readonly group: Group;
    readonly subgroup: Group;
    readonly base_color: Color;
    readonly flow_color: Color;
    readonly gas_temperature: number;
    readonly emissions_multiplier: number;
    readonly fuel_value: number;
    readonly hidden: boolean;
}

declare class Force {

}

declare class ForceSpecification {

}

declare interface FuelCategoryPrototype extends FactorioPrototype {
}

declare interface Group {
    readonly name: string;
    readonly localised_name: LocalisedString;
    readonly type: string;
    readonly group: Group;
    readonly subgroups: Group[];
    readonly order_in_recipe: string;
    readonly order: string;
    readonly valid: boolean;
}

declare interface NamedNoiseExpression extends FactorioPrototype {
    readonly intended_property: string;
    readonly expression: NoiseExpression;
}

declare interface NoiseLayerPrototype extends FactorioPrototype {
}

declare interface ModSettingPrototype extends FactorioPrototype {
    readonly mod: string;
    readonly setting_type: string;
    readonly default_value: string | boolean | number;
    readonly minimum_value: number;
    readonly maximum_value: number;
    readonly allowed_values: string[] | number[];
    readonly allow_blank: boolean;
    readonly auto_trim: boolean;
    readonly hidden: boolean;
}

declare interface ModuleCategoryPrototype extends FactorioPrototype {
}

declare interface ParticlePrototype extends FactorioPrototype {
    readonly regular_trigger_effect: TriggerEffectItem;
    readonly ended_in_water_trigger_effect: TriggerEffectItem;
    readonly render_layer: RenderLayer;
    readonly render_layer_when_on_ground: RenderLayer;
    readonly life_time: number;
    readonly regular_trigger_effect_frequency: number;
    readonly movement_modifier_when_on_ground: number;
    readonly movement_modifier: number;
    readonly mining_particle_frame_speed: number;
}

declare class TechnologySpecification {
}

declare interface FactorioPrototype {
    readonly name: string;
    readonly order: string;
    readonly localised_name: LocalisedString;
    readonly localised_description: LocalisedString;
    readonly valid: boolean;
}

declare interface TrivialSmokePrototype extends FactorioPrototype {
    readonly color: Color;
    readonly start_scale: number;
    readonly end_scale: number;
    readonly movement_slow_down_factor: number;
    readonly duration: number;
    readonly spread_duration: number;
    readonly fade_away_duration: number;
    readonly fade_in_duration: number;
    readonly glow_fade_away_duration: number;
    readonly cyclic: boolean;
    readonly affected_by_wind: boolean;
    readonly show_when_smoke_off: boolean;
    readonly glow_animation: boolean;
    readonly render_layer: RenderLayer;
}

declare interface ResourceCategoryPrototype extends FactorioPrototype {
}

declare class Surface {
}

declare class SurfaceSpecification {
}

declare interface PermissionGroup {
    name: string;
    readonly players: Player[];
    readonly group_id: number;
    readonly valid: boolean;

    add_player(player: PlayerSpecification): boolean;

    remove_player(player: PlayerSpecification): boolean;

    allows_action(action: defines.input_action): boolean;

    set_allows_action(action: defines.input_action, val: boolean): boolean;

    destroy(): boolean;
}

declare interface PermissionGroups {
    readonly groups: PermissionGroup[];
    readonly valid: boolean;

    create_group(name?: string): PermissionGroup;

    get_group(name: string | number): PermissionGroup;
}

declare class Profiler {
}

declare interface RandomGenerator {

}

declare interface RandomGenerator {
    (lower: number, upper: number): number;

    re_seed(seed: number): void;

    readonly valid: boolean;

    help(): string;
}

declare interface RecipeCategoryPrototype extends FactorioPrototype {
}

declare interface ShortcutPrototype extends FactorioPrototype {
    readonly action: string;
    readonly item_to_create: ItemPrototype;
    readonly technology_to_unlock: TechnologyPrototype;
    readonly toggleable: boolean;
    readonly associated_control_input: string;
}

declare interface TechnologyPrototype extends FactorioPrototype {
    readonly enabled: boolean;
    readonly hidden: boolean;
    readonly visible_when_disabled: boolean;
    readonly upgrade: boolean;
    readonly prerequisites: { [name: string]: TechnologyPrototype };
    readonly research_unit_ingredients: Ingredient[];
    readonly effects: Modifier[];
    readonly research_unit_count: number;
    readonly research_unit_energy: number;
    readonly level: number;
    readonly max_level: number;
    readonly research_unit_count_formula: string;
}

declare interface TilePrototype extends FactorioPrototype {
    readonly collision_mask: CollisionMask;
    readonly collision_mask_with_flags: CollisionMaskWithFlags;
    readonly layer: number;
    readonly autoplace_specification: AutoplaceSpecification;
    readonly walking_speed_modifier: number;
    readonly vehicle_friction_modifier: number;
    readonly map_color: Color;
    readonly decorative_removal_probability: number;
    readonly automatic_neighbors: boolean;
    readonly allowed_neighbors: { [key: string]: TilePrototype };
    readonly needs_correction: boolean;
    readonly mineable_properties: {
        minable: boolean;
        miningtime: number;
        miningparticle?: string;
        products: Product[];
    };
    readonly next_direction: TilePrototype;
    readonly items_to_place_this: SimpleItemStack[]
    readonly can_be_part_of_blueprint: boolean;
    readonly emissions_per_second: number;
}

declare interface DifficultySettings {
}

declare interface MapSettings {

}

declare interface MapGenSettings {
}

declare interface MapExchangeStringData {
    map_settings: MapSettings;
    map_gen_settings: MapGenSettings;
}

declare interface SimpleItemStack {
    name: string;
    count?: number;
    health?: number;
    durability?: number;
    ammo?: number;
    tags?: string[];
}

declare interface VirtualSignalPrototype extends FactorioPrototype {
    readonly special: boolean;
    readonly subgroup: Group;
}
