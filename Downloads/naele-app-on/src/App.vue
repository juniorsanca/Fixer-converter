<template>
  <ion-app>
    <Navbar />
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>

</template>

<script>
  import { mapActions } from "vuex";
  import Navbar from './components/Navbar.vue'
  import { IonApp, IonRouterOutlet, IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonContent,
    Navbar,
    IonApp,
    IonRouterOutlet
  },
  created() {
    this.$store.dispatch("userInit");
  },
  methods: {
    ...mapActions({ logout: "logout" }),
  },
});
</script>


<style>
  a {
    text-decoration: none;
  }
</style>