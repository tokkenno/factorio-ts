// https://lua-api.factorio.com/latest/Concepts.html

declare interface AutoplaceSpecification {
    probability_expression: NoiseExpression;
    richness_expression: NoiseExpression;
    coverage: number;
    sharpness: number;
    max_probability: number;
    placement_density: number;
    richness_base: number;
    richness_multiplier: number;
    richness_multiplier_distance_bonus: number;
    starting_area_size: number;
    order: string;
    default_enabled: boolean;
    peaks: {
        influence: number;
        max_influence: number;
        min_influence: number;
        richness_influence: number;
        noisePersistence: number;
        noise_layer?: string;
        noise_octaves_difference: number;
        d_optimal: number;
        d_range: number;
        d_top_property_limit: number;
        d_max_range: number;
    };
    control?: string;
    tile_restriction: {
        first?: string;
        second?: string;
    };
    force: string;
    random_probability_penalty: number;
}

declare interface BoundingBox {
    left_top: Position;
    right_bottom: Position;
    orientation: number;
}

declare interface Ingredient {
    type: 'item' | 'fluid';
    name: string;
    amount: number;
    minimum_temperature?: number;
    maximum_temperature?: number;
    catalyst_amount?: number;
}

declare interface NoiseExpression {
    type: string;
}

declare type ModifierType =
    'inserter-stack-size-bonus'
    | 'stack-inserter-capacity-bonus'
    | 'laboratory-speed'
    | 'character-logistic-trash-slots'
    | 'maximum-following-robots-count'
    | 'worker-robot-speed'
    | 'worker-robot-storage'
    | 'ghost-time-to-live'
    | 'turret-attack'
    | 'ammo-damage'
    | 'give-item'
    | 'gun-speed'
    | 'unlock-recipe'
    | 'character-crafting-speed'
    | 'character-mining-speed'
    | 'character-running-speed'
    | 'character-build-distance'
    | 'character-item-drop-distance'
    | 'character-reach-distance'
    | 'character-resource-reach-distance'
    | 'character-item-pickup-distance'
    | 'character-loot-pickup-distance'
    | 'character-inventory-slots-bonus'
    | 'deconstruction-time-to-live'
    | 'max-failed-attempts-per-tick-per-construction-queue'
    | 'max-successful-attempts-per-tick-per-construction-queue'
    | 'character-health-bonus'
    | 'auto-character-logistic-trash-slots'
    | 'mining-drill-productivity-bonus'
    | 'train-braking-force-bonus'
    | 'zoom-to-world-enabled'
    | 'zoom-to-world-ghost-building-enabled'
    | 'zoom-to-world-blueprint-enabled'
    | 'zoom-to-world-deconstruction-planner-enabled'
    | 'zoom-to-world-upgrade-planner-enabled'
    | 'zoom-to-world-selection-tool-enabled'
    | 'worker-robot-battery'
    | 'laboratory-productivity'
    | 'follower-robot-lifetime'
    | 'artillery-range'
    | 'nothing'
    | 'character-additional-mining-categories'
    | 'character-logistic-requests';

declare interface Modifier {
    type: ModifierType;
    modifier: number;
}

declare namespace Modifiers {
    interface GunSpeedModifier extends Modifier {
        type: 'gun-speed';
        ammo_category: string;
    }

    interface GiveItemModifier extends Modifier {
        type: 'give-item';
        item: string;
        count?: number;
    }

    interface TurretAttackModifier extends Modifier {
        type: 'turret-attack';
        turret_id: string;
    }

    interface UnlockRecipeModifier extends Modifier {
        type: 'unlock-recipe';
        recipe: string;
    }

    interface NothingModifier extends Modifier {
        type: 'nothing';
        effect_description: LocalisedString;
    }
}

declare interface Position {
    x: number;
    y: number;
}

declare interface Product {
    type: 'item' | 'fluid';
    name: string;
    amount?: number;
    temperature?: number;
    amount_min?: number;
    amount_max?: number;
    probability?: number;
    catalyst_amount?: number;
}

declare enum RenderLayer {
    "water-tile" = 15,
    "ground-tile" = 25,
    "tile-transition" = 26,
    "decals" = 27,
    "lower-radius-visualization" = 29,
    "radius-visualization" = 30,
    "transport-belt-integration" = 65,
    "resource" = 66,
    "building-smoke" = 67,
    "decorative" = 92,
    "ground-patch" = 93,
    "ground-patch-higher" = 94,
    "ground-patch-higher2" = 95,
    "remnants" = 112,
    "floor" = 113,
    "transport-belt" = 114,
    "transport-belt-endings" = 115,
    "floor-mechanics-under-corpse" = 120,
    "corpse" = 121,
    "floor-mechanics" = 122,
    "item" = 123,
    "lower-object" = 124,
    "transport-belt-circuit-connector" = 126,
    "lower-object-above-shadow" = 127,
    "object" = 129,
    "higher-object-under" = 131,
    "higher-object-above" = 132,
    "item-in-inserter-hand" = 134,
    "wires" = 135,
    "wires-above" = 136,
    "entity-info-icon" = 138,
    "entity-info-icon-above" = 139,
    "explosion" = 142,
    "projectile" = 143,
    "smoke" = 144,
    "air-object" = 145,
    "air-entity-info-icon" = 147,
    "light-effect" = 148,
    "selection-box" = 187,
    "higher-selection-box" = 188,
    "collision-selection-box" = 189,
    "arrow" = 190,
    "cursor" = 210
}

declare interface TriggerEffectItem {
    type: "damage" | "create-entity" | "create-explosion" | "create-fire" | "create-smoke" | "create-trivial-smoke" | "create-particle" | "create-sticker" | "nested-result" | "play-sound" | "push-back" | "destroy-cliffs" | "show-explosion-on-chart" | "insert-item" | "script";
    repeat_count: number;
    affects_target: boolean;
    show_in_tooltip: boolean;
}
