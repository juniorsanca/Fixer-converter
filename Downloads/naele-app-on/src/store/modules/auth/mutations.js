export const token = (state, token) => {
    state.user.token = token;
    localStorage.setItem("Authtoken", token);
};

export const dataNews = (state, data) => {
    state.actus = data;
};

export const dataServices = (state, data) => {
    state.plans = data;
};

export const actu = (state, data) => {
    state.actu = data;
};