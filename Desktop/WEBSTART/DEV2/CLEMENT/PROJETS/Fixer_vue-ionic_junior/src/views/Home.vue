<template>
  <ion-page>
    <ion-header>
      <ion-toolbar id="ec">
        <ion-title>Currency-Converter</ion-title>
      </ion-toolbar>
    </ion-header>

        <ion-content class="ion-padding">
          <ion-img src="/assets/img/undraw_pay_online_b1hk.png" style="height: 150px"/>

          <Search :indexs="indexs" @change="Send" />
        </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import Search from "../../public/components/Search";

export default {
  name: 'Home',
  components: {
    Search,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data(){
    return {
      change: {dve: "", euro: ""},
      indexs: [],
    }
  },
  mounted() {
    this.runFetch()
  },
  methods: {
    runFetch(){
      fetch(`http://data.fixer.io/api/symbols?access_key=${process.env.VUE_APP_API_KEY}`)
      .then(res => res.json())
      .then(symbols => {
        this.indexs = symbols.symbols
        this.error = ""
      })
    },
    Send(change){
      this.change = change
    }
  }
};
</script>

<style scoped lang="css">
  ion-toolbar{
    --background: #1a1a1a;
  }
  #ec{
    text-align: center;

  }

  ion-title{
    color: whitesmoke;
  }

</style>