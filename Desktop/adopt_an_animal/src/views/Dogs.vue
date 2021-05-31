<template>
    <h1>Cats</h1>

    <div class="container" style="width: 40rem; margin-left: 30% ">
        <table class="table table-success table-striped">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Birth</th>
                <th scope="col">Especies</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="dog.pets">
                <td v-if="dog.pets">{{dog.pets[0].name}}</td>
                <td v-if="dog.pets">{{dog.pets[0].birthYear}}</td>
                <td v-if="dog.pets">{{dog.pets[0].species}}</td>
            </tr>

            <tr v-if="dog.pets">
                <td v-if="dog.pets">{{dog.pets[2].name}}</td>
                <td v-if="dog.pets">{{dog.pets[2].birthYear}}</td>
                <td v-if="dog.pets">{{dog.pets[2].species}}</td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Dogs',
        data: ()=> ({
            dog: '',
        }),
        mounted() {
            this.dog = this.$store.getters.getDog;
        },

    }
</script>

<style scoped>

</style>