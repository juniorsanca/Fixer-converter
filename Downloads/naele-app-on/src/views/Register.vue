<template>
    <ion-page>

        <ion-content fullscreen>
                <h5 style="text-align: center">Inscription</h5>
            <br>

        <form @submit.prevent="register(form)">
            <ion-card-content>
                <ion-item>
                    <ion-label position="floating">Nom</ion-label>
                    <ion-input placeholder="Elon Musk" type="text" class="form-control" id="name" name="name" v-model="form.name" />
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input placeholder="elon@tesla.com" type="email" class="form-control" id="email" name="email" v-model="form.email" />
                </ion-item>

                <ion-item>
                    <ion-label position="floating">Mot de passe</ion-label>
                    <ion-input type="password" class="form-control" id="password" name="password" v-model="form.password" />
                </ion-item>
                <br>
                <ion-button type="submit" expand="full" color="dark">Inscription</ion-button>
            </ion-card-content>

        </form>

        </ion-content>
    </ion-page>

</template>

<script>
    import { mapActions } from 'vuex'

    import {
        IonLabel,
        IonContent,
        IonPage,
        IonCardContent,
        IonButton,
        IonItem,
        IonInput
    } from '@ionic/vue';

    export default {
        name: "Inscription",
        components: {
            IonLabel,
            IonContent,
            IonPage,
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
            ...mapActions({'register': 'register'})
        }

    }
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>