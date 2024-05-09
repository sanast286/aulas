<template>
  <div class="empresas">
    <h1>Empresas</h1>
      <table width="80%" border="1">
      <tr>
        <td>Nome</td>
        <td>Nome Fantasia</td>
        <td>CNPJ</td>
        <td>Endereço</td>
        <td>Ações</td>
      </tr>
      
      <tr v-for="empresa in empresas" :key="empresa.id">
        <td>{{ empresa.nome }}</td>
        <td>{{ empresa.nomeFantasia }}</td>
        <td>{{ empresa.cnpjCpf }}</td>
        <td>{{ empresa.enderecoCompleto }}</td>
        <button @click="deleteEmpresa(empresa.id)">Delete</button>
      </tr>

    </table>
    <h2>Adicionar Empresa</h2>
    <form @submit.prevent="addEmpresa">
      
      <input type="text" v-model="newEmpresa.nome" placeholder="Nome"><br>
      <input type="text" v-model="newEmpresa.nomeFantasia" placeholder="Nome Fantasia"><br>
      <input type="number" v-model="newEmpresa.cnpjCpf" placeholder="CNPJ ou CPF"><br>
      <input type="text" v-model="newEmpresa.enderecoCompleto" placeholder="Endereço"><br>
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EmpresaView',
  data() {
    return {
      empresas: [],
      newEmpresa: {
        nome: '',
        nomeFantasia: null,
        cnpjCpf: '',
        enderecoCompleto: null,
      }
    };
  },
  created() {
    this.fetchEmpresas();
  },
  methods: {
    fetchEmpresas() {
      axios.get('https://futurocodebackend-ureotn5zxq-uc.a.run.app/empresa')
        .then(response => {
          this.empresas = response.data;
        })
        .catch(error => {
          console.error("Erro ao listar empresas:", error);
        });
    },
    addEmpresa() {
      axios.post('https://futurocodebackend-ureotn5zxq-uc.a.run.app/empresa', this.newEmpresa)
        .then(() => {
          this.fetchEmpresas(); // Refresh the list
          this.newEmpresa.nome = ''; // Reset the fields
          this.newEmpresa.nomeFantasia = "";
          this.newEmpresa.cnpjCpf = null;
          this.newEmpresa.enderecoCompleto = null;
        })
        .catch(error => {
          console.error("Erro ao inserir empresa:", error);
        });
    },
    deleteEmpresa(id) {
      axios.delete(`https://futurocodebackend-ureotn5zxq-uc.a.run.app/empresa/${id}`)
        .then(() => {
          this.fetchEmpresas(); // Refresh the list after deletion
        })
        .catch(error => {
          console.error("Erro ao apagar empresa:", error);
        });
    }
  }
}
</script>

<style scoped>
  /* Style as needed */
</style>
