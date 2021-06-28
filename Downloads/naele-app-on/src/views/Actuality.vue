<template>
    <ion-page>
        <ion-content fullscreen>
            <ion-title style="text-align: center">Actualités</ion-title>
            <p style="text-align: center">Chaque jour une nouvelle actualité</p>

            <div v-for="a in actus" :key="a.id">
            <ion-card>
                <img :src="a.img_url" />
                <ion-card-header>
                    <ion-card-title style="text-align: center">{{a.title}}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    {{a.resume}}
                </ion-card-content>
                <ion-card-content>
                    {{a.content}}
                </ion-card-content>

                <!--<ion-card-content> <router-link :to="{ path: '/actu/'+ a.id }"> Lire la suite </router-link> </ion-card-content>-->

                <ion-card-content>
                    <ion-card-subtitle>{{a.created_at  ? new Date(a.created_at).toLocaleString(): "" }}</ion-card-subtitle>
                </ion-card-content>
            </ion-card>
            </div>


            <ion-card-content style="background-color: #F3F9FE">
                <ion-card-content>
                    <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 15px">NAELE</ion-title>
                    <section>
                        <ion-button color="primary" style="width: 23%"><img src="assets/images/img-fc.png"/></ion-button>
                        <ion-button color="primary" style="width: 23%"><img src="assets/images/img-ind.png"/></ion-button>
                        <ion-button color="primary" style="width: 23%"><img src="assets/images/img-inst.png"/></ion-button>
                        <ion-button color="primary" style="width: 23%"><img src="assets/images/img-twit.png"/></ion-button>
                    </section><br>

                    <p style="text-align: center">
                        Made with ❤️ à Paris
                    </p>
                </ion-card-content>
            </ion-card-content>
        </ion-content>
    </ion-page>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    import {
        IonCardTitle,
        IonCardHeader,
        IonCardSubtitle,
        IonButton,
        IonCard,
        IonContent,
        IonPage,
        IonTitle,
        IonCardContent } from '@ionic/vue';
    export default {
        name: "Actuality",
        components: {
            IonCardTitle,
            IonCardHeader,
            IonCard,
            IonCardSubtitle,
            IonButton,
            IonContent,
            IonPage,
            IonTitle,
            IonCardContent,
        },
        data() {
            return {};
        },
        mounted() {
            this.allActus
        },
        computed: {
            ...mapGetters({ actus: "actus" }),
            ...mapActions(['allActus']),
        },
    };
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>