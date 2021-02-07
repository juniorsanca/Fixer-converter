<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home" href="/">
          <ion-icon :icon="homeOutline" />
          <ion-label>home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/communes">
          <ion-icon :icon="businessOutline" />
          <ion-label>communes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/departements">
          <ion-icon :icon="busOutline" />
          <ion-label>departments</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/regions">
          <ion-icon :icon="bicycleOutline" />
          <ion-label>regions</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, businessOutline, busOutline, bicycleOutline, homeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square,
      homeOutline,
      businessOutline,
      busOutline,
      bicycleOutline,

    }
  }
}
</script>