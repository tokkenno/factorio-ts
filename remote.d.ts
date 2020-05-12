/** @luaTable */
export class InterfaceFunctions {
    [name: string]: Function;
}

/** @luaTable */
export class RemoteInterfaces {
    [name: string]: InterfaceFunctions;
}

/**
 * Registry of interfaces between scripts.
 * @noSelf
 */
declare namespace remote {
    /**
     * This objects name.
     */
    const object_name: string;

    /**
     * Add a remote interface.
     * @param name Name of the interface.
     * @param functions  List of functions that are members of the new interface.
     */
    function add_interface(name: string, functions: InterfaceFunctions): void;

    /**
     * Removes an interface with the given name.
     * @param name Name of the interface.
     */
    function remove_interface(name: string): boolean;

    /**
     * Call a function of an interface.
     * @param interfaceName  Interface to look up function in.
     * @param func Function name that belongs to interface.
     * @param args Arguments to pass to the called function.
     */
    function call(interfaceName: string, func: string, ...args: any[]): any;

    /** List of all registered interfaces. */
    const interfaces: RemoteInterfaces;
}
