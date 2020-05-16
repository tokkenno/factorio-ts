declare interface GuiArrowSpecification {
    type: 'nowhere' | 'goal' | 'entity_info' | 'active_window' | 'entity' | 'position' | 'crafting_queue' | 'item_stack';
}

declare interface EntityGuiArrowSpecification extends GuiArrowSpecification {
    type: 'entity';
    entity: Entity;
}

declare interface PositionGuiArrowSpecification extends GuiArrowSpecification {
    type: 'position';
    position: Position;
}

declare interface CraftingQueueGuiArrowSpecification extends GuiArrowSpecification {
    type: 'crafting_queue';
    crafting_queueindex: number;
}

declare interface ItemStackGuiArrowSpecification extends GuiArrowSpecification {
    type: 'item_stack';
    inventory_index: defines.inventory;
    item_stack_index: number;
    source: 'player' | 'target' | 'player-quickbar' | 'player-equipment-bar';
}
