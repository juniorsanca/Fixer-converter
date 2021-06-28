export const token = (state, token) => {
    state.user.token = token
    localStorage.setItem("Authtoken", token);
}
export const data = (state, data) => {
    state.user.data = data
}

export const dataNews = (state, actus) => {
    state.actus = actus
}

export const dataServices = (state, plans) => {
    state.plans = plans
}

export const actu = (state, actu) => {
    state.actu = actu
}

export const contactMe = (state, contact) => {
    state.contact = contact
}



