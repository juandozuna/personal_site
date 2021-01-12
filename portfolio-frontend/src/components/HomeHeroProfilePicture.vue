<template>
  <div class="img-container">
    <div class="img-housing"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/variables.scss";
.img-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: $desktop - 1) {
    margin-bottom: 0px;
    margin-top: 100px;
  }
  @media (max-width: $tablet) {
    margin-top: 50px;
  }
  .img-housing {
    $size: 450px;
    @media (min-width: $tablet + 1) {
      $size: 400px;
      width: $size;
      height: $size;
    }
    @media (max-width: $tablet) {
      $size: 200px;
      width: $size;
      height: $size;
    }
    width: $size;
    height: $size;
    border-radius: 100%;
    background-image: url("~@/assets/profile.png");
    background-size: contain;
    justify-self: center;
    align-self: center;
    box-shadow: 2px 0px 8px 5px rgba(61, 61, 61, 0.719);
    transition: all 0.3s ease;
  }
}
</style>