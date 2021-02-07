<template>
    <div id="container">
        <div v-if="result">
            <ion-text class="ion-text-center ion-no-padding" >
                <p class="text-center mt-5"> <strong>{{ result.length }}</strong> {{ result.length === 1 ? 'commune' : 'communes' }} </p>
            </ion-text>

            <div  v-for="(r, index) in result" :key="index">
                <ion-card>
                    <ion-card-header class="md hydrated">
                        <ion-row>
                            <ion-col>
                                <h1 class="ion-no-padding" style="color: #3dc2ff"><strong>{{ r.nom }}</strong></h1>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <strong>Code INSEE</strong>
                            </ion-col>
                            <ion-col class="ion-text-end color-primary">
                                {{ r.code }}
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col><strong>Département</strong> </ion-col>
                            <ion-col class="ion-text-end color-primary">{{ r.codeDepartement ||  r.departement.code  }}</ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col><strong>Région</strong></ion-col>
                            <ion-col class="ion-text-end color-primary">{{ r.codeRegion || r.region.code }}</ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col><strong>Codes postaux</strong></ion-col>
                            <ion-col class="ion-text-end color-primary">{{ r.codesPostaux.join(', ') }}</ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col size="8"><strong>Population</strong></ion-col>
                            <ion-col class="ion-text-end color-primary">{{ r.population }}</ion-col>
                        </ion-row>
                    </ion-card-header>
                </ion-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResultatDeRecherche",
        props: ["result"]
    }
</script>
