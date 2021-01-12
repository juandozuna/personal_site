<template>
  <div class="info">
    <div class="hero-info-card-container">
      <h1 class="title is-1">Hello,</h1>
      <h2 class="subtitle is-2">I'm <b>Juan Ozuna</b></h2>
      <p class="subtitle is-3 nospace">
        Software Engineer based in Dominican Republic
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/variables.scss";
.info {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: $desktop - 1) {
    margin-top: 10px;
  }
}
.hero-info-card-container {
  color: white;
  backdrop-filter: blur(10px);
  background-color: rgba(4, 15, 32, 0.2);
  width: 100%;
  padding: 60px 50px;
  border-radius: 60px;

  @media (max-width: $tablet) {
    padding: 10px 20px;
    border-radius: 10px;
  }
  .title,
  .subtitle {
    color: white;
    font-weight: 600;

    @media (max-width: $tablet) {
      font-size: 1.2rem;
    }
  }
}
</style>