<template>
    <div>
    <ion-card>
        <ion-item>
            <ion-label>{{change.dve}}</ion-label>
        </ion-item>
        <ion-card-content>
                <p class="pg">{{change.euro}}€ est égal à {{response}} en {{change.dve}}</p>
        </ion-card-content>
    </ion-card>
    </div>
</template>


<script>
    export default {
        name: "Results",
        data(){
            return{
                response: ""
            }
        },
        props: ['change'],
        methods: {
            New(){
                fetch(`http://data.fixer.io/api/latest?access_key=${process.env.VUE_APP_API_KEY}&symbols=${this.change.dve}`)
                    .then(res => res.json()) .then(response => {
                        let rates = Object.values(response.rates)
                        this.response = Math.round((this.change.euro * rates[0]) *100) / 100
                        console.log(rates)
                        console.log(this.response)
                    })
                }
            },
        watch: {
            change: { deep: true,
                handler()
                {
                    this.New();
                }
            }
        },
        mounted(){
            this.New()
        },
    }

</script>

<style scoped lang="css">
        ion-item{
            text-align: center;
        }
        .pg{
            text-align: center;
        }
</style>