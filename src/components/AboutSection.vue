<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <div id="details">
                <h1 class="display-1">About</h1>
                <p v-if="about">
                    <span>{{ about }}</span>
                </p>
                <Spinner v-else/>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import Spinner from './Spinner.vue'
    import { computed, onMounted } from 'vue';
    import { useStore } from 'vuex'
    const store = useStore()
    const about=
        computed(() => store.state.about)
      
onMounted(() => {
    store.dispatch('fetchAbout')
    
})
</script>

<style>

</style>