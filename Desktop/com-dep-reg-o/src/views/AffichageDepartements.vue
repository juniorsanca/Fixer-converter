<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="text-align: center; color: #3dc2ff">DEPARTEMENTS</ion-title>
      </ion-toolbar>
    </ion-header>
       <ion-content>
        <RechercheDepartements />
    </ion-content>
  </ion-page>
</template>

<script>
  import RechercheDepartements from "@/components/Departements/RechercheDepartements";
  import { IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';

export default  {
  name: 'AffichageDepartements',
  components: { IonHeader, IonToolbar, IonTitle, IonPage, RechercheDepartements },

};
</script>