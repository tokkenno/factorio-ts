declare interface ModSetting {
    [key: string]: number | boolean | string
}

declare class ModSettings extends CustomTable<string, ModSetting> {}

/**
 * Allows reading the current mod settings.
 * @noSelf
 */
declare namespace settings {
    /**
     * This objects name.
     */
    const object_name: string;

    const startup: ModSettings;

    const global: ModSettings;

    const player: ModSettings;

    function get_player_settings(player: Player): ModSettings;
}
