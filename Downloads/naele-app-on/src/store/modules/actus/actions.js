import axios from "axios";

export const allActus = ({ commit, state }) => {
    axios.get(
        'http://127.0.0.1:8000/api/actus')
        .then((response) => {
        const actus = response.data
        console.log(actus)
        commit('dataNews', actus)
    }).catch((error) => {
        console.log(error);
        state.msg.error = 'Opps nous avons un soucis veuillez essayer à nouveau'
    });
}

export const showActu = ({ commit, state }, id) => {
    axios.get(
        'http://127.0.0.1:8000/api/actudetail/${id}')
        .then((response) => {
        const actu = response.data
        console.log(actu)
        commit('dataNews', actu)
    }).catch((error) => {
        console.log(error);
        state.msg.error = 'Opps nous avons un soucis veuillez essayer à nouveau'
    });
}