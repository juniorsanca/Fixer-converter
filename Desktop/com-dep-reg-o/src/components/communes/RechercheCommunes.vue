<template>
    <form @submit="onSubmit">
        <ion-toolbar color="light">
            <ion-input  id="ville" style="margin-left: 10px"
                        name="ville"
                        :value="ville"
                        @input="ville = $event.target.value" show-cancel-button="never"
                        placeholder="Code postal ou ville"
                        class="search">
            </ion-input>
            <ion-button expand="full" type="submit" color="dark">RECHERCHER</ion-button>
        </ion-toolbar>
    </form>
    <ion-button expand="full" color="light" @click="reloadPage" >reset</ion-button>
    <ResultatDeRecherche v-bind:result="result"/>
</template>
<script>
    import ResultatDeRecherche from "@/components/communes/ResultatDeRecherche";
    import axios from "axios";
    export default {
        name: 'RechercheCommunes',
        components: {
            ResultatDeRecherche,
        },
        data () {
            return {
                ville: "",
                result:null,
            };
        },
        methods: {
            onSubmit(e){
                e.preventDefault(this.ville)
                console.log(this.ville)
                {
                    const isValidName = /^[a-zA-Z]+$/.test(this.ville)
                    const isValidZip = /^[0-9]{5}?$/.test(this.ville)
                    if (isValidZip){
                        axios.get(`https://geo.api.gouv.fr/communes?codePostal=${this.ville}` )
                            .then((response) => {
                                response.data
                                this.result = response.data
                                console.log(this.result)
                            });
                    } else {
                        if (isValidName)
                            axios.get(`https://geo.api.gouv.fr/communes?nom=${this.ville}&boost=population&fields=population,departement,codesPostaux,region` )
                                .then((response) => {
                                    response.data
                                        this.result = response.data
                                        console.log(this.result)
                              });
                        if (!isValidName || this.ville === ""){
                            alert('veuillez entrer une ville ou code postal valide, merci!');
                        }
                    }
                }
            },
            reloadPage(){
                this.result = null
            }
        },
    };
</script>