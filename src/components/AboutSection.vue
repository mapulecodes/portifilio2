<template>
  <div class="container">
    <div class="row">
        <img src="https://mapulecodes.github.io/fridayimages/images/mecover.png" alt="" class="img-fluid" loading="lazy">
    </div>
    <div class="row">
        <div v-if="about?.length">
         <p class="lead" v-for="(self, index ) in about" :key="index">
             {{ self }}
         </p>
        </div>
        <Spinner v-else/>
    </div>
  </div>
</template>

<script setup>
  import Spinner from './Spinner.vue'
    import { computed, onMounted, ref } from 'vue';
    import { useStore } from 'vuex'
    const store = useStore()
    const about=
        computed(() => store.state.jobTitle)
      
onMounted(() => {
    store.dispatch('fetchJobTitle')
    repeat()
})
</script>

<style>

</style>