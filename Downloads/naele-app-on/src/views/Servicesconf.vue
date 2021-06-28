<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 30px">NAELE</ion-title>
                <!--<ion-searchbar/>-->
            </ion-toolbar>
        </ion-header><br>

        <ion-content fullscreen>
            <ion-header :translucent="true">
                <ion-toolbar>
                    <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 15px; text-align: center">Confirmation</ion-title>
                    <!--<ion-searchbar/>-->
                </ion-toolbar>
            </ion-header><br>

            <ion-card>
                <img src="assets/images/shapes.svg" />
                <ion-card-header>
                    <ion-card-title style="text-align: center">NE-ÉTUDIANT</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-card-subtitle style="text-align: center">
                        <span> 29,99 </span>€ / Anné
                    </ion-card-subtitle>
                </ion-card-content>
            </ion-card>

            <ion-card>
                <ion-card-header>
                    <ion-card-title style="text-align: center">Détails</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-label>Souscrit le : <span>04/05/2021</span></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Renouvellement le : <span>05/06/2021</span></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Carte :*** *** *** 123</ion-label>
                        </ion-item>
                    </ion-list><br>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>

</template>

<script>
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCardContent } from '@ionic/vue';
    export default {
        name: "AbonnementConfirmation",
        components: {
            IonContent,
            IonHeader,
            IonPage,
            IonTitle,
            IonToolbar,
            IonCardContent,
        }
    }
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>