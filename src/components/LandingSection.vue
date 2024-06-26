<template>
  <div class="container">
    <div class="row">
        <div class="row">
            <div class="col">
                <img src="https://mapulecodes.github.io/fridayimages/images/1.png" alt="profile" class="img-fluid" loading="lazy">
            </div>
            <div class="col">
                <div id="details">
                    <h1 class="display-1">Mapule Mbuzwana</h1>
                    <span>{{ jobTitle[0].title }}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
    import { computed, onMounted } from 'vue';
    import { useStore } from 'vuex'
    const store = usestore()
    const jobTitle =
        computed(() => this.$store.state.jobTitle)
onMounted(() => {
    this.$store.dispatch('fetchJobTitle')
})
     


</script>

<style scoped>
</style>
