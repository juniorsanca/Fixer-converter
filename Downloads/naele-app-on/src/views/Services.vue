<template>
    <ion-page>
        <ion-content fullscreen>

            <h5 style="text-align: center">Forfaits Navigo-Electrique</h5>

            <div v-for="p in plans" :key="p.id">
            <ion-card style="background-color: #F8F8F8">
                <ion-card-header>
                    <ion-card-title style="text-align: center">{{p.name}}</ion-card-title>
                    <ion-card-subtitle style="text-align: center">
                        {{p.slug}}
                    </ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                    {{p.description}}
                </ion-card-content>
                <p style="text-align: center">{{p.cost}}€ /mois</p>





            </ion-card><br>
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
        IonCardSubtitle,
        IonCardHeader,
        IonButton,
        IonCard,
        IonContent,
        IonPage,
        IonTitle,
        IonCardContent
    } from '@ionic/vue';

    export default {
        name: "Abonnements",
        components: {
            IonCardTitle,
            IonCardSubtitle,
            IonCardHeader,
            IonButton,
            IonCard,
            IonContent,
            IonPage,
            IonTitle,
            IonCardContent,
        },
        data() {
            return {};
        },
        mounted() {
            this.allServices
        },
        computed: {
            ...mapGetters({ plans: "plans" }),
            ...mapActions(['allServices']),
        },
    }
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>