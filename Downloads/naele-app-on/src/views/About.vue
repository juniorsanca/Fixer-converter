<template>
    <ion-page>
        <ion-content fullscreen>
            <ion-card>
                <img src="assets/images/shapes.svg" />
                <ion-card-header>
                    <ion-card-title style="text-align: center"> NAvigo-ELEctronique</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-card-subtitle style="text-align: center">Qui sommes nous ?</ion-card-subtitle>
                </ion-card-content>
                <ion-card-content>
                    Notre histoire commence en 2019 pendant les greves des gillets jaunes,
                    plusieurs d'entre nous se trouve alors enpeche de prendre les transports publiques (trains, metros etc)
                    Le nombre de demande de location de trotinnetes électriques, vélos électriques et skateboard électrique à explosé, nous avons
                    alors décide tuut simplement de créer un pass navigo électronique dans le téléphone
                    que permet aux utilisateur d'avoir accés à tout les vehicules électriques du quotidient (skateboard, vélos, trotinnetes, scooters) en location!
                </ion-card-content>
                <ion-card-content>
                    <ion-card-subtitle style="text-align: center"> Miantenant que vous savez qui nous sommes, vous êtes prêt pour l'aventure ?</ion-card-subtitle>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
    import {
        IonCard,
        IonCardSubtitle,
        IonContent,
        IonCardHeader,
        IonCardTitle,
        IonPage,
        IonCardContent
    } from '@ionic/vue';

    export default {
        name: "About",
        components: {
            IonCard,
            IonCardSubtitle,
            IonCardHeader,
            IonContent,
            IonCardTitle,
            IonPage,
            IonCardContent,
        }
    }
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>