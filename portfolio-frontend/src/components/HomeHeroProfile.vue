<template>
  <div class="hero-profile">
    <div class="columns is-desktop">
      <div class="column">
        <HomeHeroProfilePicture />
      </div>
      <div class="column">
        <HomeHeroProfilePicture />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HomeHeroProfilePicture from './HomeHeroProfilePicture.vue';

export default defineComponent({
  components: {
    HomeHeroProfilePicture
  }
})
</script>

<style lang="scss" scoped>
  .hero-profile {
    height: 100vh;
    .columns {
      height: 100%;
    }
  }
</style>