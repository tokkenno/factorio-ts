/** @noSelf */
declare namespace game {
    function set_game_state(game_finished: boolean, player_won: boolean, next_level: string, can_continue: boolean, victorious_force: string | Force): void;

    function get_entity_by_tag(tag: string): Entity;

    function show_message_dialog(text: LocalisedString, image?: string, point_to?: GuiArrowSpecification, style?: string, wrapper_frame_style?: string): void;

    function disable_tips_and_tricks(): void;

    function is_demo(): boolean;

    function reload_script(): void;

    function reload_mods(): void;

    function save_atlas(): void;

    function check_consistency(): void;

    function regenerate_entity(entity: string | string[]): void;

    function take_screenshot(config: {
        player?: PlayerSpecification,
        by_player?: PlayerSpecification,
        surface?: SurfaceSpecification,
        position?: Position,
        resolution?: Position,
        zoom?: number,
        path?: string,
        show_gui?: boolean,
        show_entity_info?: boolean,
        anti_alias?: boolean,
        quality?: number,
        allow_in_replay?: boolean,
        daytime?: number,
        water_tick?: number
    }): void;

    function set_wait_for_screenshots_to_finish(): void;

    function take_technology_screenshot(config: {
        force?: ForceSpecification,
        path?: string,
        by_player?: PlayerSpecification,
        selected_technology?: TechnologySpecification,
        skip_disabled?: boolean,
        quality?: number
    }): void;

    function table_to_json(table: any): string;

    function json_to_table(json: string): any;

    function write_file(filename: string, data: LocalisedString, append?: boolean, for_player?: number): void;

    function remove_path(path: string): void;

    function remove_offline_players(players: string[] | Player[]): void;

    function force_crc(): void;

    function create_force(force: string): Force;

    function merge_forces(source: ForceSpecification, destination: ForceSpecification): void;

    function create_surface(name: string, settings?: MapGenSettings): Surface;

    function server_save(name?: string): void;

    function auto_save(name?: string): void;

    function delete_surface(surface: string | Surface): void;

    function disable_replay(): void;

    function disable_tutorial_triggers(): void;

    function direction_to_string(direction: defines.direction): string;

    function print(localizedKey: LocalisedString, color?: Color): void;

    function create_random_generator(seed?: number): RandomGenerator;

    function check_prototype_translations(): void;

    function play_sound(config: {
        path: SoundPath,
        position?: Position,
        volume_modifier?: number
    }): boolean;

    function is_valid_sound_path(path: SoundPath): boolean;

    function is_valid_sprite_path(path: SpritePath): boolean;

    function kick_player(player: PlayerSpecification, reason: LocalisedString): void;

    function ban_player(player: PlayerSpecification, reason: LocalisedString): void;

    function unban_player(player: PlayerSpecification): void;

    function purge_player(player: PlayerSpecification): void;

    function mute_player(player: PlayerSpecification): void;

    function unmute_player(player: PlayerSpecification): void;

    function count_pipe_groups(): number;

    function is_multiplayer(): boolean;

    function get_active_entities_count(surface: SurfaceSpecification): number;

    function get_map_exchange_string(): string;

    function parse_map_exchange_string(map_exchange_string: string): MapExchangeStringData;

    function get_train_stops(filter?: {
        name?: string | string[];
        surface?: SurfaceSpecification;
        force?: ForceSpecification;
    }): Entity[];

    function get_player(player: string | number): Player;

    function get_surface(surface: string | number): Surface;

    function create_profiler(stopped?: boolean): Profiler;

    function evaluate_expression(expression: string, variables: { [key: string]: number }): number;

    function get_filtered_entity_prototypes(filters: EntityPrototypeFilter[]): { [key: string]: EntityPrototype };

    function get_filtered_item_prototypes(filters: ItemPrototypeFilter[]): { [key: string]: ItemPrototype };

    function get_filtered_equipment_prototypes(filters: EquipmentPrototypeFilter[]): { [key: string]: EquipmentPrototype };


    function create_inventory(size: number): Inventory;

    function get_script_inventories(mod?: string): Inventory[];

    function reset_time_played(): void;

    function encode_string(decodedString: string): string;

    function decode_string(encodedString: string): string;

    /**
     * This objects name.
     */
    const object_name: string;

    const player: Player;

    const players: CustomTable<number, Player>;

    const map_settings: MapSettings;

    const difficulty_settings: DifficultySettings;

    const difficulty: defines.difficulty;

    const forces: CustomTable<number | string, Force>;

    const entity_prototypes: CustomTable<string, EntityPrototype>;

    const item_prototypes: CustomTable<string, ItemPrototype>;

    const fluid_prototypes: CustomTable<string, FluidPrototype>;

    const tile_prototypes: CustomTable<string, TilePrototype>;

    const equipment_prototypes: CustomTable<string, EquipmentPrototype>;

    const damage_prototypes: CustomTable<string, DamagePrototype>;

    const virtual_signal_prototypes: CustomTable<string, VirtualSignalPrototype>;

    const equipment_grid_prototypes: CustomTable<string, EquipmentGridPrototype>;

    const recipe_prototypes: CustomTable<string, RecipePrototype>;

    const technology_prototypes: CustomTable<string, TechnologyPrototype>;

    const decorative_prototypes: CustomTable<string, DecorativePrototype>;

    const particle_prototypes: CustomTable<string, ParticlePrototype>;

    const autoplace_control_prototypes: CustomTable<string, AutoplaceControlPrototype>;

    const noise_layer_prototypes: CustomTable<string, NoiseLayerPrototype>;

    const mod_setting_prototypes: CustomTable<string, ModSettingPrototype>;

    const custom_input_prototypes: CustomTable<string, CustomInputPrototype>;

    const ammo_category_prototypes: CustomTable<string, AmmoCategoryPrototype>;

    const named_noise_expressions: CustomTable<string, NamedNoiseExpression>;

    const item_subgroup_prototypes: CustomTable<string, Group>;

    const item_group_prototypes: CustomTable<string, Group>;

    const fuel_category_prototypes: CustomTable<string, FuelCategoryPrototype>;

    const resource_category_prototypes: CustomTable<string, ResourceCategoryPrototype>;

    const achievement_prototypes: CustomTable<string, AchievementPrototype>;

    const module_category_prototypes: CustomTable<string, ModuleCategoryPrototype>;

    const equipment_category_prototypes: CustomTable<string, EquipmentCategoryPrototype>;

    const trivial_smoke_prototypes: CustomTable<string, TrivialSmokePrototype>;

    const shortcut_prototypes: CustomTable<string, ShortcutPrototype>;

    const recipe_category_prototypes: CustomTable<string, RecipeCategoryPrototype>;

    const styles: CustomTable<string, string>;

    const tick: number;

    const ticks_played: number;

    let ticks_paused: boolean;

    let ticks_to_run: number;

    const finished: boolean;

    let speed: number;

    const surfaces: CustomTable<string | number, Surface>;

    const active_mods: { [name: string]: string };

    const connected_players: Player[];

    const permissions: PermissionGroups;

    const backer_names: CustomTable<number, string>;

    const default_map_gen_settings: MapGenSettings;

    let enemy_has_vision_on_land_mines: boolean;

    let autosave_enabled: boolean;

    let draw_resource_selection: boolean;

    const pollution_statistics: FlowStatistics;

    const max_force_distraction_distance: number;

    const max_force_distraction_chunk_distance: number;

    const max_electric_pole_supply_area_distance: number;

    const max_electric_pole_connection_distance: number;

    const max_beacon_supply_area_distance: number;

    const max_gate_activation_distance: number;

    const max_inserter_reach_distance: number;

    const max_pipe_to_ground_distance: number;

    const max_underground_belt_distance: number;
}
