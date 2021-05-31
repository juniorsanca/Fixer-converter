export const setPet = (state, payload) => {
    state.Pet = payload;
    state.Pets.push(payload);
};

export const setCat = (state, payload) => {
    state.Pet = payload;
    state.Pets.push(payload);
};