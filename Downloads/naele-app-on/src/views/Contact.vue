<template>
    <ion-page>
        <ion-content fullscreen>
                <h5 style="text-align: center">Contactez-nous</h5>
            <br>

            <form @submit.prevent="contact(form)">
                <ion-card-content>
                    <ion-item>
                        <ion-label position="floating">Nom</ion-label>
                        <ion-input placeholder="Elon" type="text" class="form-control" id="firstname" name="firstname" v-model="form.firstname" />
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Prénom</ion-label>
                        <ion-input placeholder=" Musk" type="text" class="form-control" id="lastname" name="lastname" v-model="form.lastname" />
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Email</ion-label>
                        <ion-input placeholder="elon@tesla.com" type="email" class="form-control" id="email" name="email" v-model="form.email" />
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Objet</ion-label>
                        <ion-input placeholder="Elon Musk" type="text" class="form-control" id="subject" name="subject" v-model="form.subject" />
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Votre message</ion-label>
                        <ion-textarea position="floating" placeholder="Message..." type="text" class="form-control" id="message" name="message" v-model="form.message" />
                    </ion-item><br>
                    <ion-button type="submit" expand="full" color="dark">Envoyer</ion-button>
                </ion-card-content>
            </form>

            <p style="text-align: center">Mettre ici la carte google maps</p>

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
        </ion-content>
    </ion-page>

</template>

<script>
    import { mapActions } from 'vuex'

    import {
        IonTextarea,
        IonLabel,
        IonContent,
        IonPage,
        IonTitle,
        IonCardContent,
        IonButton,
        IonItem,
        IonInput
    } from '@ionic/vue';

    export default {
        name: "Contact",
        components: {
            IonTextarea,
            IonLabel,
            IonContent,
            IonPage,
            IonTitle,
            IonCardContent,
            IonButton,
            IonItem,
            IonInput
        },
        data() {
            return {
                form: {}
            };
        },
        methods: {
            ...mapActions(['contact'])
        }
    }
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>