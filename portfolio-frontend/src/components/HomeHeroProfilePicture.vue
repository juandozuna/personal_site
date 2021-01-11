<template>
  <div class="img-container">dfadf</div>
</template>

<style lang="scss" scoped>
@import '~@/assets/variables.scss';
.img-container {
  width: 100%;
  height: 100%;
  background: green;
  @media (max-width: $desktop - 1) {
    height: 47vh;
    background: red;
  }
}
</style>