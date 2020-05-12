/** @luaTable */
interface ConfigurationChangedData {
    /**
     * Old version of the map. Present only when loading map version other than the current version.
     */
    old_version?: string;

    /**
     * New version of the map. Present only when loading map version other than the current version.
     */
    new_version?: string;

    /**
     * Dictionary of mod changes. It is indexed by mod name.
     */
    mod_changes: { [key: string]: ConfigurationChangedData };

    /**
     * True when mod startup settings have changed since the last time this save was loaded.
     */
    mod_startup_settings_changed: boolean;

    /**
     * True when mod prototype migrations have been applied since the last time this save was loaded.
     */
    migration_applied: boolean;
}

/** @luaTable */
interface Event {
    [index: string]: any;

    name: string;
}

/** @luaTable */
interface NthTickEvent extends Event {
    tick: number;
    nth_tick: number;
}

type EventHandler = (event: Event) => void;

/** @luaTable */
interface EventFilter {
    [index: string]: any;

    filter: string;
    mode?: string;
    invert?: boolean;
}

/** @luaTable */
interface EventFilterTable {
    [name: string]: EventFilter;
}

/**
 * Entry point for registering event handlers.
 * @noSelf
 */
declare namespace script {
    /**
     * This objects name.
     */
    const object_name: string;

    /**
     * Register a callback to be run on mod init.
     * @param f The function to call. Passing null will unregister the handler.
     */
    function on_init(f?: Function): void;

    /**
     * Register a function to be run on module load.
     * @param f The function to call. Passing null will unregister the handler.
     */
    function on_load(f?: Function): void;

    /**
     * Register a function to be run on module load.
     * @param f The function to call. Passing null will unregister the handler.
     */
    function on_configuration_changed(f?: (configurationChangedData: ConfigurationChangedData) => void): void;

    /**
     * Register a handler to run on event or events.
     * @param event The events or custom-input name to invoke the handler on.
     * @param eventHandler The handler to run. Passing null will unregister the handler.
     * @param filters
     */
    function on_event(event: defines.events | defines.events[] | string, eventHandler?: EventHandler, filters?: EventFilter[]): void;

    /**
     * Register a handler to run every nth tick(s). When the game is on tick 0 it will trigger all registered handlers.
     * @param tick The nth-tick(s) to invoke the handler on. Passing null as the only parameter will unregister all nth-tick handlers.
     * @param f The handler to run. Passing null will unregister the handler for the provided ticks.
     */
    function on_nth_tick(tick?: number | number[], f?: (event: NthTickEvent) => void): void;

    /**
     * Generate a new, unique event ID.
     */
    function generate_event_name(): number;

    /**
     * Find the event handler function for an event.
     * @param eventId The event ID.
     */
    function get_event_handler(eventId: number): EventHandler;

    /**
     * Raise an event.
     * @param eventId The event ID.
     * @param data Table with extra data. This table will be passed to the event handler.
     */
    function raise_event(eventId: number, data: Table): void;

    /**
     * Gets the mod event order.
     */
    function get_event_order(): string;

    /**
     * Sets the filters for the given event.
     * @param eventId The event ID.
     * @param filters The filters or null to clear the filters.
     */
    function set_event_filter(eventId: number, filters?: EventFilterTable): void;

    /**
     * Gets the filters for the given event.
     * @param eventId The event ID.
     */
    function get_event_filter(eventId: number): EventFilterTable;

    /**
     * The name of the mod from the environment this is used in.
     */
    const mod_name: string;

    /**
     * The active mods versions. The keys are mod names, the values are the versions.
     */
    const active_mods: { [name: string]: string }

    /**
     * Is the game compiled in a debug mode. This will always return false in retail builds.
     */
    const is_game_in_debug_mode: boolean;
}
