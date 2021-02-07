<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align: center; color: red">COMMUNES</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <RechercheCommunes />
    </ion-content>
  </ion-page>
</template>
<script>
  import RechercheCommunes from "@/components/communes/RechercheCommunes";
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


  export default {
    name: 'AffichageCommunes',
    components: {
      RechercheCommunes,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonPage
    },
  };
</script>