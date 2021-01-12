<template>
  <div class="hero-profile">
    <div class="columns is-desktop items">
      <div class="column">
        <HomeHeroProfilePicture />
      </div>
      <div class="column">
        <home-hero-profile-info-card />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeroProfileInfoCard from "./HomeHeroProfileInfoCard.vue";
import HomeHeroProfilePicture from "./HomeHeroProfilePicture.vue";

export default defineComponent({
  components: {
    HomeHeroProfilePicture,
    HomeHeroProfileInfoCard,
  },
});
</script>

<style lang="scss" scoped>
@import '~@/assets/variables.scss';
.hero-profile {
  margin: 0px 50px;
  height: 100vh;
  .columns {
    height: 100%;
    @media (max-width: $tablet) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>