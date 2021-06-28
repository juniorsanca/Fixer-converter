<template>
    <ion-page>

        <ion-content fullscreen>
                <h5 style="text-align: center">Connexion</h5>
            <br>

            <form @submit.prevent="login(form)">
                <ion-card-content>

                    <ion-item>
                        <ion-label position="floating">Email</ion-label>
                        <ion-input placeholder="elon@tesla.com" type="email" class="form-control" id="email" name="email" v-model="form.email" />
                    </ion-item>

                    <ion-item>
                        <ion-label position="floating">Mot de passe</ion-label>
                        <ion-input type="password" class="form-control" id="password" name="password" v-model="form.password" />
                    </ion-item>
                    <br>
                    <ion-button type="submit" expand="full" color="dark">Connexion</ion-button>
                </ion-card-content>

            </form>

        </ion-content>
    </ion-page>

</template>

<script>
    import {
        IonLabel,
        IonContent,
        IonPage,
        IonCardContent,
        IonButton,
        IonItem,
        IonInput
    } from '@ionic/vue';
    import {mapActions} from "vuex";

    export default {
        name: "Connection",
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
            ...mapActions({'login': 'login'})
        }
    }
</script>

<style>
    .IonBtn{
        background-color:#17DAED
    }
</style>