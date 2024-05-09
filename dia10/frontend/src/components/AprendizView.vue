<template>
  <div class="aprendizes">
    <h1>Aprendizes</h1>
      <table width="80%" border="1">
      <tr>
        <td>Nome</td>
        <td>Matricula</td>
        <td>Endereco</td>
        <td>Ações</td>
      </tr>
      
      <tr v-for="aprendiz in aprendizes" :key="aprendiz.id">
        <td>{{ aprendiz.nome }}</td>
        <td>{{ aprendiz.matricula }}</td>
        <td>{{ aprendiz.endereco }}</td>
        <button @click="deleteAprendiz(aprendiz.id)">Delete</button>
      </tr>

    </table>
    <h2>Adicionar Aprendiz</h2>
    <form @submit.prevent="addAprendiz">
      
      <input type="text" v-model="newAprendiz.nome" placeholder="Nome"><br>
      <input type="number" v-model="newAprendiz.matricula" placeholder="Matricula"><br>
      <input type="text" v-model="newAprendiz.endereco" placeholder="Endereço"><br>
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AprendizView',
  data() {
    return {
      aprendizes: [],
      newAprendiz: {
        nome: '',
        matricula: '',
        endereco: null,
      }
    };
  },
  created() {
    this.fetchAprendizes();
  },
  methods: {
    fetchAprendizes() {
      axios.get('https://futurocodebackend-ureotn5zxq-uc.a.run.app/aprendiz')
        .then(response => {
          this.aprendizes = response.data;
        })
        .catch(error => {
          console.error("Erro ao listar aprendizes:", error);
        });
    },
    addAprendiz() {
      axios.post('https://futurocodebackend-ureotn5zxq-uc.a.run.app/aprendiz', this.newAprendiz)
        .then(() => {
          this.fetchAprendizes(); // Refresh the list
          this.newAprendiz.nome = ''; // Reset the fields
          this.newAprendiz.matricula = null;
          this.newAprendiz.endereco = null;
        })
        .catch(error => {
          console.error("Erro ao inserir aprendiz:", error);
        });
    },
    deleteAprendiz(id) {
      axios.delete(`https://futurocodebackend-ureotn5zxq-uc.a.run.app/aprendiz/${id}`)
        .then(() => {
          this.fetchAprendizes(); // Refresh the list after deletion
        })
        .catch(error => {
          console.error("Erro ao apagar aprendiz:", error);
        });
    }
  }
}
</script>

<style scoped>
  /* Style as needed */
</style>
