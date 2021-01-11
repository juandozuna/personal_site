<template>
  <div class="bg-container">
    <div class="front-bg-decoration">
      <div style="opacity: 0.1">
        <particles-bg type="square" />
      </div>
    </div>
    <svg width="0" height="0">
      <defs>
        <clipPath id="bgCurve" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0.833 s0.078,-0.037,0.138,-0.041 S0.198,0.786,0.349,0.949 s0.212,-0.429,0.323,-0.431 s0.161,-0.336,0.261,-0.318 S0.991,-0.023,0.991,-0.023 L0,0.002"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeHeroBackground",
});
</script>

<style lang="scss" scoped>
.bg-container {
  height: 100vh;
  background: #1e242b;
  z-index: -1000;
  width: 100%;
  .front-bg-decoration {
    width: 100%;
    background: #060b58;
    height: 70%;
    clip-path: url(#bgCurve);
  }
}
</style>