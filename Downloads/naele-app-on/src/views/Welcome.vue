<template>
    <ion-page>
    <ion-app>
        <ion-content fullscreen class="ion-padding" scroll-y="false">
            <ion-slides>
                <ion-slide>
                    <div class="slide">
                        <img src="assets/images/img-b.png"/>
                        <h2>Welcome</h2>
                        <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>
                    </div>
                </ion-slide>

                <ion-slide>
                    <img src="assets/images/img-f.png"/>
                    <h2>What is Ionic?</h2>
                    <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>
                </ion-slide>

                <ion-slide>
                    <img src="assets/images/img-c.png"/>
                    <h2>What is Appflow?</h2>
                    <p><b>Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
                </ion-slide>

                <ion-slide>
                    <img src="assets/images/img-f.png"/>
                    <h2>Ready to Play?</h2>
                    <ion-col>
                        <ion-router-link href="/home" class="underline">Bienvenue</ion-router-link>
                    </ion-col>
                </ion-slide>

            </ion-slides>
        </ion-content>
    </ion-app>
    </ion-page>
</template>

<script>
    import { IonContent,
        //IonHeader, IonPage, IonTitle, IonToolbar,IonCardContent, IonButton
    } from '@ionic/vue';
    export default {
        name: "LandingPage",
        components: {
            IonContent,
            //IonHeader,
            //IonPage,
            //IonTitle,
            //IonToolbar,
            //IonCardContent,
            //IonButton
        }
    }
</script>

<style>
    ion-slides {
        height: 100%;
    }

    .swiper-slide {
        display: block;
    }

    .swiper-slide h2 {
        margin-top: 2.8rem;
    }

    .swiper-slide img {
        max-height: 50%;
        max-width: 80%;
        margin: 60px 0 40px;
        pointer-events: none;
    }

    b {
        font-weight: 500;
    }

    p {
        padding: 0 40px;
        font-size: 14px;
        line-height: 1.5;
        color: var(--ion-color-step-600, #60646b);
    }

    p b {
        color: var(--ion-text-color, #000000);
    }
.IonBtn{
    background-color:#17DAED
}
</style>