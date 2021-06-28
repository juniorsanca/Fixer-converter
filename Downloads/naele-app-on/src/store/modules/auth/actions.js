import axios from 'axios'
import router from "../../../router";


export const login = ({ commit }, form) => {
    let params = {
        email: form.email,
        password: form.password,
        device_name: "naele",
    };

    axios
        .post("http://127.0.0.1:8000/api/login", params)
        .then((response) => {
            commit("token", response.data.token);
            const config = {
                headers: {
                    Authorization: `Bearer ${response.data.token}`,
                },
            };

            axios
                .post("http://127.0.0.1:8000/api/profile", null, config)
                .then((result) => {
                    const user = {
                        id: result.data.id,
                        name: result.data.name,
                        email: result.data.email,
                        created_at: result.data.created_at,
                        updated_at: result.data.updated_at,
                    };

                    commit("data", user);
                })
                .catch(() => {
                    router.push({ name: "Login" });
                });
            router.push("/");
          console.log("vous êtes connecté !")
        })
        .catch((error) => {
            const statusCode = error.response.status;

            if (statusCode === 401) {
           console.log("Mauvais identfiants / Mots de passe")
            }
        });
};


export const register = ({ commit }, form) => {
    axios.post(
        'http://127.0.0.1:8000/api/register',
        {
            name: form.name,
            email: form.email,
            password: form.password,
            device_name: "naele"
        }
    ).then((response) => {
        console.log(response);
        commit('token', response.data.token)

        const config = {
            headers: {
                Authorization: `Bearer ${response.data.token}`,
            },
        };

        axios
            .post(
                 "http://127.0.0.1:8000/api/profile", null, config)
            .then((result) => {
                const user = {
                    id: result.data.id,
                    name: result.data.name,
                    email: result.data.email,
                    created_at: result.data.created_at,
                    updated_at: result.data.updated_at,
                };

            commit('data', user)
        }).catch(() => {
            router.push({ name: "Login"});
            });
            router.push("/")
            //console.log(error)
        })

        .catch((error) => {
            const statusCode = error.response.status;
            if (statusCode === 409){
            console.log("L utilisateur existe déjà")
            }
            if (statusCode === 422) {
                console.log("Tous les champs sont obligatoires")
            }
        })
}


export const contact = ({ commit }, form) => {
    axios.post(
        'http://127.0.0.1:8000/api/contact',
        {
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            subject: form.subject,
            message: form.message,
            device_name: "naele"
        }
    ).then((response) => {
        commit('contactMe', response.data)
            .catch(() => {
                router.push({ name: "/" });
            });
        router.push("/");
        console.log("votre message à bien été envoyé !")
    })
        .catch(() => {
            router.push({ name: "Contact"});
        });
    router.push("/")

};



export const userInit = ({ commit }) => {
    const token = localStorage.getItem("Authtoken");

    if (!token || token.length < 0) {
        router.push({ name: "Login" });
        return;
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    axios
        .post("http://127.0.0.1:8000/api/profile", null, config)
        .then((response) => {
            commit("token", token);
            const user = {
                id: response.data.id,
                name: response.data.name,
                email: response.data.email,
                created_at: response.data.created_at,
                updated_at: response.data.updated_at,
            };
            commit("data", user);
        })
        .catch(() => {
            router.push({ name: "Login" });
        });
};



export const logout = ({ commit, state }) => {
    const token = state.user.token;
    if (!token) return;
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {};
    axios
        .post(
            "http://127.0.0.1:8000/api/logout",
            bodyParameters,
            config
        )
        .then(() => {
            commit("token", "");
            commit("data", {});
            router.push({ name: "Login" });
        })
        .catch(() => {});
};




//Actualités :

export const allActus = ({ commit }) => {
    axios
        .get("http://127.0.0.1:8000/api/actus")
        .then((response) => {
            commit("dataNews", response.data);
            console.log(response.data)
        })
        .catch(() => {});
};

export const allServices = ({ commit }) => {
    axios
        .get("http://127.0.0.1:8000/api/plans")
        .then((response) => {
            commit("dataServices", response.data);
            console.log(response.data)
        })
        .catch(() => {});
};

//not working
export const showActu = ({ commit }, id) => {
    axios
        .get(`http://127.0.0.1:8000/api/actudetail/${id}`)
        .then((response) => {
            console.log(response)
            const actu = {
                id: response.data.id,
                title: response.data.title,
                img_id: response.data.img_id,
                img_url: response.data.img_url,
                resume: response.data.resume,
                content: response.data.content,
                created_at: response.data.created_at,
                updated_at: response.data.updated_at,
            };
            commit("actu", actu);
            console.log(actu)
        })
        .catch(() => {});
};
