export const user = (state) => {
    return state.user
}

export const auth = (state) => {
    return state.user.auth
}

export const data = (state) => {
    return state.user.data
}

export const token = (state) => {
    return state.user.token
}


//Actualités
export const actus = (state) => {
    return state.actus;
};

export const plans = (state) => {
    return state.plans;
};

export const actu = (state) => {
    return state.actu;
};
