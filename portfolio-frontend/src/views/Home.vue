
<template>
  <div>
    <HomeHeroBackground />
    <home-hero-profile />
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
    <div>Hi hwllo</div>
  </div>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import HomeHeroBackground from '@/components/HomeHeroBackground.vue';
import HomeHeroProfile from '@/components/HomeHeroProfile.vue';

@Options({
  name: 'Home',
  components: {
    HomeHeroBackground,
    HomeHeroProfile
  }
})

export default class Home extends Vue {

}
</script>