<template>

    <ion-menu side="start" content-id="main-content">
        <ion-header>
            <ion-toolbar translucent>
                <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 30px">
                    NAELE
                </ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-list>
                <ion-item>
                    <router-link style="color: #0d0d0d" :to="{ name: 'About'}">À propos</router-link>
                </ion-item>
                <ion-item>
                    <router-link style="color: #0d0d0d" :to="{ name: 'Actuality'}">Actualités</router-link>
                </ion-item>
                <ion-item>
                    <router-link style="color: #0d0d0d" :to="{ name: 'Contact'}">Contact</router-link>
                </ion-item>
                <ion-item>
                    <router-link style="color: #0d0d0d" :to="{ name: 'Services'}">Services</router-link>
                </ion-item>
                <br>
                <br>

                <ul v-if="user.name">
                    <ion-item>
                        <router-link style="color: #0d0d0d" :to="{ name: 'Me'}">Profil</router-link>
                    </ion-item>
                    <br>

                    <ion-item>
                        <ion-label>
                            <a @click.prevent="logout" href="#!" class="waves-effect">Déconnexion</a>
                        </ion-label>
                    </ion-item>
                </ul>

                <ul v-else>
                <ion-item>
                    <router-link style="color: #0d0d0d" :to="{ name: 'Login'}">Connection</router-link>
                </ion-item>
                <ion-item>
                    <router-link style="color: #0d0d0d" :to="{ name: 'Register'}">Inscription</router-link>
                </ion-item>
                </ul>

            </ion-list>
        </ion-content>
    </ion-menu>
        <br>
        <br>
        <br>
        <br>

    <div class="ion-page" id="main-content" >
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                </ion-buttons>
                <router-link :to="{ name: 'Home'}">
                    <ion-title style="color: #17DAED; font-family: Marker Felt; font-size: 30px">NAELE</ion-title>
                </router-link>

            </ion-toolbar>
        </ion-header>
    </div>

</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    import {
        IonButtons,
        IonMenuButton,
        IonMenu,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonHeader,
        IonToolbar,
        IonTitle,

    } from '@ionic/vue';
    export default {
        name : 'Navbar',
        components : {
            IonButtons,
            IonMenuButton,
            IonMenu,
            IonContent,
            IonList,
            IonItem,
            IonLabel,
            IonHeader,
            IonToolbar,
            IonTitle
        },
        methods: {
            ...mapActions({ logout: "logout" }),
        },
        computed: {
            ...mapGetters({ user: "data" }),
        },
    }

</script>