<template>
  <div class="home">
      <h1 class="h1">Adopt a cat</h1>
  </div>

    <div class="container" style="width: 40rem; margin-left: 27% ">
    <div class="card">
        <div class="card-header">
            Dashboard
        </div>
        <div class="card-body">
            <div class="card">
            <div class="card-header">
                <p v-if="animal.pets">{{animal.pets.length}} pet(s) in the database</p>
            </div>
        </div>
        </div>
    </div>

        <br>
    <div>
        <form>
            <div class="mb-3">
                <input type="text" class="form-control" id="name" placeholder="name">
            </div>

            <select class="form-select" aria-label="Default select example" >
                <option selected>especie</option>
                <option value="Dog">Chien</option>
                <option value="Cat">Chat</option>
            </select>

            <br>
            <div class="mb-3">
                <input type="number" name="birthYear" class="form-control" id="number" min="2000" max="2050" placeholder="2000">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary" id="button" style="width: 100%" > Add new pet </button>
            </div>

        </form>
    </div>
    </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
    data: ()=> ({
       animal: '',
    }),
    mounted() {
      this.animal = this.$store.getters.getPet;
    },
    components: {
    HelloWorld
  },
}

</script>

<style>
  .h1{
  }
</style>