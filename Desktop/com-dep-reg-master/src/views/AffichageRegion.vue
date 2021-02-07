<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align: center;color: red">REGIONS</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <RechercheRegions />
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import RechercheRegions from "../components/Regions/RechercheRegions";

  export default  {
    name: 'AffichageRegion',
    components: {RechercheRegions, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  };
</script>