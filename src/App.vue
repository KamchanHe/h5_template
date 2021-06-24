<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-width: 540PX;
  min-width: 320PX;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
