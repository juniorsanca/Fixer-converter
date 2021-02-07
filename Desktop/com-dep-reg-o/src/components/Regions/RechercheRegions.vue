<template>
            <form @submit="showdepa">
                <ion-toolbar color="light">
                <ion-select placeholder="Sélectionner" v-model="reg" id="selectedOption" @select="reg= $event.target.value">
                            <ion-select-option
                                    v-for="(r) in result"
                                    :key="r.code"
                                    :value="r.code" >
                                    {{r.code}}-{{r.nom}}
                            </ion-select-option>
                        </ion-select>
                    <ion-button type="submit" color="dark" expand="full">RECHERCHER</ion-button>
                </ion-toolbar>
            </form>
    <ion-button expand="full" color="light" @click="reloadPage" >reset</ion-button>
    <ResultatDeRechercheR v-bind:selected="selected"/>
</template>

<script>
    import axios from "axios";
    import ResultatDeRechercheR from "../Regions/ResultatDeRechercheR";
    export default  {
        name: 'RechercheRegions',
        components: {
            ResultatDeRechercheR
        },
        data() {
            return {
                reg: "",
                result: null,
                selected: null
            }
        },
        mounted() {
            axios.get(`https://geo.api.gouv.fr/regions`)
                .then((response) => {
                    response.data;
                    this.result = response.data;
                    console.log(this.result)
                });
        },
        methods: {
            showdepa(e) {
                e.preventDefault()
                // eslint-disable-next-line no-undef
                axios.get( 'https://geo.api.gouv.fr/regions/'+selectedOption.value+'/departements' )
                    .then((response) => {
                        response.data;
                        this.selected = response.data;
                        //console.log(this.selected[0].nom)
                    });
            },
            reloadPage(){
                window.location.reload()
            }
        }
    };
</script>