<template>
        <ion-item>
            <ion-label position="stacked">Amount</ion-label>
            <ion-input type="number" v-model="change.euro" placeholder="EUR"/>
        </ion-item>

        <ion-item>
            <ion-label>To </ion-label>
            <ion-select v-model="monnayChose" ok-text="ok" cancel-text="cancel">
                <ion-select-option v-for="(money) in indexs" :key="money" :value="money" >{{money}}</ion-select-option>
            </ion-select>
        </ion-item>

        <ion-button type="submit"  @click="Send" expand="block" color="dark">CONVERT</ion-button>

        <Results v-if="change.dve" :change="change" />

</template>

<script>

    import { IonInput, IonSelect, IonSelectOption, IonItem, IonLabel } from '@ionic/vue';
    import Results from "./Results";

    export default ({
        components: {
            IonInput,
            IonItem,
            Results,
            IonSelectOption,
            IonSelect,
            IonLabel
        },
        data(){
            return {
                monnayChose: "",
                change: {
                    dve: "",
                    euro: ""
                },
            }
        },
        name: "Search",
        mounted(){
        },
        props: ['indexs'],

        methods: {
            Send(){
                this.change.dve =Object.keys(this.indexs)
                   .find(key => this.indexs[key] === this.monnayChose)
                    this.$emit('change', this.change)
                }
            },


    })
</script>

