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
            <tr v-if="cat.pets">
                <td v-if="cat.pets">{{cat.pets[1].name}}</td>
                <td v-if="cat.pets">{{cat.pets[1].birthYear}}</td>
                <td v-if="cat.pets">{{cat.pets[1].species}}</td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Cats',
        data: ()=> ({
            cat: '',
        }),
        mounted() {
            this.cat = this.$store.getters.getCat;
        },

    }
</script>

<style scoped>

</style>