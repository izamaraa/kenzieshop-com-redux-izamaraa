export const addAoCart = (product) => ({ type: "@cart/ADD", product });

export const removeAoCart = (id) => ({ type: "@cart/REMOVE", id });

export const addMais = (id) => ({ type: "@cart/ADD+1", id });

export const removeMenos = (products) => ({ type: "@cart/REMOVE-1", products });
