<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title style="text-align: center">Api-Gouv.fr</ion-title>
            </ion-toolbar>
        </ion-header><br>
        <ion-content>
            <ion-text class="ion-text-center"><p>Découpage administratif</p></ion-text>
            <ion-card>
                <ion-card-header class="md hydrated">
                    <ion-row>
                        <ion-col>
                            <p>Effectuez une recherche via le code postal pour afficher les communes correspondantes ou recherchez
                                        une ville pour afficher les communes du même nom.</p>
                        </ion-col>
                    </ion-row>
                    <ion-row> <p>Effectuez une recherche pour afficher les communes du département sélectionné.</p>
                    </ion-row>
                    <ion-row>
                        <p>Effectuez une recherche pour afficher les départements de la région sélectionnée.</p>
                    </ion-row>
                </ion-card-header>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/vue';
    export default  {
        name: 'Home',
        components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonText }
    }
</script>

<style>

</style>