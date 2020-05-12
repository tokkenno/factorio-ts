
/**
 * Allows printing messages to the calling RCON instance if any.
 * @noSelf
 */
declare namespace rcon {
    /**
     * This objects name.
     */
    const object_name: string;

    /**
     * Print text to the calling RCON interface if any.
     * @param message The message
     */
    function print(message: LocalisedString): void;
}
