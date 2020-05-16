declare interface Prototype {
    readonly type: string;
    readonly name: string;
    localised_description?: LocalisedString;
    localised_name?: LocalisedString;
    order?: string;
}

declare interface IngredientPrototype {
    type: 'item' | 'fluid';
    name: string;
    amount: number;
}

declare interface RecipePrototype extends Prototype {
    readonly type: 'recipe';
    ingredients: IngredientPrototype[];
    allow_as_intermediate?: boolean;
    allow_decomposition?: boolean;
    // ...
}
