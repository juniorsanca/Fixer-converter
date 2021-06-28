<template>
  <ion-page>

  <ion-content fullscreen>
      <div class="container">

      <ion-card-content>
        <ion-card-subtitle>Les étapes à suivre pour voyager avec NAELE</ion-card-subtitle>
        <img src="assets/images/img-f.png" style="width: 100%;height: 200px"/><br>
        <ion-list>
          <ion-item>
            <ion-label>Inscription</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Choisir votre forfait</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Payement</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>QR code</ion-label>
          </ion-item>
        </ion-list><br>

        <ion-title style="text-align: center">Derniers actualités</ion-title>
        <p style="text-align: center">Chaque semaine une nouvelle actualité</p>
      </ion-card-content>



        <ion-card>
          <img src="assets/images/img-d.png" />
          <ion-card-header>
            <ion-card-title style="text-align: center">Madison, WI</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
          </ion-card-content>

          <ion-card-content>
          <ion-card-subtitle>05/12/2020</ion-card-subtitle>
          </ion-card-content>
        </ion-card>
      <br>


      <p style="text-align: center">Vous êtes prêt pour l'aventure ?</p>
      <p style="text-align: center; font-size: 12px">Choisissez votre pass navigo et roullez avec NAELE</p>

      <ion-card style="background-color: #F8F8F8">
          <ion-card-header>
            <ion-card-title style="text-align: center">NE- ETUDIANTS</ion-card-title>
            <ion-card-subtitle style="text-align: center">Navigo Électrique pour étudiants</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
          </ion-card-content>

        <ion-card-content>
          <ion-button color="secondary" expand="full">Chosir un abonnement</ion-button>
        </ion-card-content>
        </ion-card>




      <ion-card style="background-color: #F8F8F8">
          <ion-card-header>
            <ion-card-title style="text-align: center">Abonnements</ion-card-title>
            <ion-card-subtitle style="text-align: center">
              Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
            </ion-card-subtitle>
          </ion-card-header>
        <ion-card-content>
          <ion-button color="dark" expand="full">Chosir un pass navigo</ion-button>
        </ion-card-content>
        </ion-card>



      <ion-card style="background-color: #59B0E3">
          <ion-card-header>
            <ion-card-title style="text-align: center; color: white">S'abonner</ion-card-title>
            <ion-button style="background-color: #1E6AA4" expand="full">Je me connecte</ion-button>
              <hr style="border: 2px solid white">
          </ion-card-header>
        <ion-card-content>
          <p style="text-align: center; color: white">Vous utilisez Naele pour la premiere fois ?</p>
          <ion-button style="background-color: #1E6AA4" expand="full">Je découvre</ion-button>
        </ion-card-content>
        </ion-card>



      <ion-card-header>
        <ion-card-subtitle style="text-align: center">Ils ont par le mieux que nous !</ion-card-subtitle>
      </ion-card-header>


      <ion-card style="background-color: #F8F8F8">
            <ion-card-header>
              <ion-card-title style="text-align: center">Junior le Sénior</ion-card-title>
              <p style="text-align: center">NE-ÉTUDIANT</p>
                <hr style="border: 2px solid white">
            </ion-card-header>
          <ion-card-content>
            <p style="text-align: center">
              Une superbe experience j'ai beaucoup aimé le fait de pouvoir être à la fois dans une trotinnete, skataboard et un vélo dans une même journée</p>
          </ion-card-content>
        </ion-card>



      <ion-card-content style="background-color: #F3F9FE">

          <ion-card-content>
            <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 15px">NAELE</ion-title>
          <section>
            <ion-button color="primary" style="width: 23%"><img src="assets/images/img-fc.png"/></ion-button>
            <ion-button color="primary" style="width: 23%"><img src="assets/images/img-ind.png"/></ion-button>
            <ion-button color="primary" style="width: 23%"><img src="assets/images/img-inst.png"/></ion-button>
            <ion-button color="primary" style="width: 23%"><img src="assets/images/img-twit.png"/></ion-button>
          </section><br>

            <p style="text-align: center">
                Made with ❤️ à Paris
            </p>
          </ion-card-content>
        </ion-card-content>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  //import Navbar from "../components/Navbar";

  import {
    IonPage,
    IonContent,
    IonTitle,
    IonCardContent,
    IonLabel,
    IonButton,
    IonCard,
    IonCardSubtitle,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonItem,


  } from '@ionic/vue';

  import {defineComponent} from "vue";
  export default defineComponent({
    name: "Home",
    components: {
      IonPage,
      IonContent,
      IonTitle,
      IonCardContent,
      IonLabel,
      IonButton,
      IonCard,
      IonCardSubtitle,
      IonCardHeader,
      IonCardTitle,
      IonList,
      IonItem,


    }
  })
</script>

<style>
  .IonBtn{
    background-color:#17DAED
  }
</style>