<template>
  <div>
    <AprendizView /><hr>
    <EmpresaView />
  </div>

</template>

<script>
import AprendizView from './components/AprendizView.vue';
import EmpresaView from './components/EmpresaView.vue';


export default {
  name: 'App',
  components: {
    AprendizView,
    EmpresaView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
