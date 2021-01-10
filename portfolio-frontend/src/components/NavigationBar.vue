<template>
  <div class="nav-container">
    <nav-bar-item name="hey" />
  </div>
</template>

<script>
import NavBarItem from './NavBarItem';
export default {
    components: {
        NavBarItem
    }
}
</script>

<style lang="scss" scoped>
    .nav-container {
        flex-direction: column;
        width: 100%;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background: rgba(0, 0, 0, 0.4);
        //background: linear-gradient(0deg, rgba(9,9,121,0) 0%, rgba(8,38,140,1) 100%);
    }
</style>