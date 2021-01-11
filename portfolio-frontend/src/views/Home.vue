
<template>
  <div>
    <HomeHeroBackground />
  </div>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import HomeHeroBackground from '@/components/HomeHeroBackground.vue';

@Options({
  name: 'Home',
  components: {
    HomeHeroBackground
  }
})

export default class Home extends Vue {

}
</script>