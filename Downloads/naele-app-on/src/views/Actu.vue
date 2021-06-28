<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-title style="text-align: center">Actualités</ion-title>
            <p style="text-align: center">Chaque jour une nouvelle actualité</p>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title style="text-align: center">{{actu.title}}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        {{actu.resume}}
                    </ion-card-content>

                    <ion-card-content>
                        {{actu.content}}
                    </ion-card-content>

                    <ion-card-content>
                        <ion-card-subtitle>{{actu.created_at  ? new Date(actu.created_at).toLocaleString(): "" }}</ion-card-subtitle>
                    </ion-card-content>
                </ion-card>

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
        name: "Actu",
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
            this.showActu
        },
        computed: {
            ...mapGetters({ actu: "data" }),
            ...mapActions(['showActu']),
        },
    };
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>