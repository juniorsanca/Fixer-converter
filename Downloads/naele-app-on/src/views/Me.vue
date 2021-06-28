<template>
    <ion-page>
        <ion-content fullscreen>
            <ion-card>
            <ion-card-header>
                <ion-card-title style="text-align: center">Espace utilisateur :</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <ion-list>
                    <ion-item>
                        <ion-card-subtitle> Nom : {{ user.name }}</ion-card-subtitle>
                    </ion-item>
                    <ion-item>
                        <ion-card-subtitle>Email : {{user.email}} </ion-card-subtitle>
                    </ion-item>
                    <ion-item>
                        <ion-card-subtitle>
                            Créer le: {{ user.created_at ? new Date(user.created_at).toLocaleString() : "" }}
                        </ion-card-subtitle>
                    </ion-item>
                    <ion-item>
                        <ion-card-subtitle> Abonnement : NE-ETUDIANT </ion-card-subtitle>
                    </ion-item>
                    <ion-item>
                        <ion-card-subtitle> Annuler l'abonnement</ion-card-subtitle>
                    </ion-item>
                    <ion-item>
                        <ion-card-subtitle>Mettre en pause</ion-card-subtitle>
                    </ion-item>
                </ion-list>
                <br>
            </ion-card-content>
        </ion-card>
            <br>
        </ion-content>
    </ion-page>
</template>

<script>
    import { mapGetters } from "vuex";

    import {
        IonPage,
        menuController,
        IonContent,
        IonItem,
        IonCard,
        IonCardContent,
        IonCardSubtitle,
        IonCardHeader,
        IonCardTitle,
        IonList,
    } from '@ionic/vue';

    export default {
        name: "Me",
        components: {
            IonPage,
            IonContent,
            IonItem,
            IonCard,
            IonCardContent,
            IonCardSubtitle,
            IonCardHeader,
            IonCardTitle,
            IonList,
        },

        data() {
            return {};
        },
        mounted() {},
        computed: {
            ...mapGetters({ user: "data" }),
        },
    }
    // eslint-disable-next-line no-unused-vars
    async function openMenu() {
        await menuController.open();
    }
</script>

<style>
    :root {
        --ion-safe-area-top: 20px;
        --ion-safe-area-bottom: 22px;
    }
</style>