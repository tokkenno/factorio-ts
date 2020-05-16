/** @noSelf */
declare namespace game {
    /**
     * This objects name.
     */
    const object_name: string;

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

    interface ScreenshotConfig {
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
    }

    function take_screenshot(config: ScreenshotConfig): void;

    function set_wait_for_screenshots_to_finish(): void;

    interface TechnologyScreenshotConfig {
        force?: ForceSpecification,
        path?: string,
        by_player?: PlayerSpecification,
        selected_technology?: TechnologySpecification,
        skip_disabled?: boolean,
        quality?: number
    }
    
    function take_technology_screenshot(config: TechnologyScreenshotConfig): void;

    function table_to_json(table: any): string;

    function json_to_table(json: string): any;

    function write_file(filename: string, data: LocalisedString, append?: boolean, for_player?: number): void;

    function remove_path(path: string): void;

    function remove_offline_players(players: string[] | Player[]): void;

    function force_crc(): void;

    function create_force(force: string): Force;

    function merge_forces(source: ForceSpecification, destination: ForceSpecification): void;

    function create_surface(name: string, settings?: MapGenSettings): Surface;
    
    function server_save(name: string): void;
    
    function auto_save(name: string): void;
    
    function delete_surface(surface: string | Surface): void;
    
    function disable_replay(): void;
    
    function disable_tutorial_triggers(): void;

    function direction_to_string(direction: defines.direction): string;

    function print(localizedKey: LocalisedString, color?: Color): void;

    function create_random_generator(seed?: number): RandomGenerator;

    function check_prototype_translations(): void;

    interface PlaySoundConfig {
        path: SoundPath,
        position?: Position,
        volume_modifier?: number
    }

    function play_sound(config: PlaySoundConfig): boolean;

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

    interface TrainStopFilter {
        name?: string | string[];
        surface?: SurfaceSpecification;
        force?: ForceSpecification;
    }

    function get_train_stops(filter?: TrainStopFilter): Entity;

    function get_player(player: string | number): Player;

    function get_surface(surface: string | number): Surface;

    function create_profiler(stopped?: boolean): Profiler;

    function evaluate_expression(expression: string, variables: {[key:string]: number}): number;
}
