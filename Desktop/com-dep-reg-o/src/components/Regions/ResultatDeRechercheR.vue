<template>
    <ion-content>
        <div v-if="selected">
            <ion-text class="ion-text-center ion-no-padding" >
                <p class="text-center mt-5"> <strong>{{ selected.length }}</strong> {{ selected.length === 1 ? 'département' : 'départements' }} </p>
            </ion-text>
            <div v-for="(s) in selected" :key="s.nom">
                <ion-card>
                    <ion-card-header class="md hydrated">
                        <ion-row>
                            <ion-col>
                                <h1 class="ion-no-padding" style="color: #3dc2ff"><strong>{{ s.nom }}</strong></h1>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <strong>Code départemental</strong>
                            </ion-col>
                            <ion-col class="ion-text-end color-primary">
                                {{ s.code }}
                            </ion-col>
                        </ion-row>
                    </ion-card-header>
                </ion-card>
            </div>
            </div>
    </ion-content>
</template>

<script>
    export default {
        name: "ResultatDeRechercheR",
        props: ["selected"]
    }
</script>