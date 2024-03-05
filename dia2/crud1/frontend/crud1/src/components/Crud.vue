<template>
    <div>
        
    <table border="0">
        <tr><td>Nome</td><td><input v-model="pessoaForm.nome"> </td></tr>
        <tr><td>Idade</td><td><input v-model="pessoaForm.idade"> </td></tr>
        <tr><td><Button @click="grava(pessoaForm)">Gravar</Button></td></tr>
    </table>
  
  <hr>
  <h2>Lista de pessoas</h2>
  <table border="2" width="60%">
    <tr><td>Indice</td><td>Nome</td><td>Idade</td><td>Ações</td></tr>
    <tr v-for="(pessoa,indice) in pessoas" :key="indice">
        <td>{{ indice }}</td>
        <td>{{ pessoa.nome }}</td>
        <td>{{ pessoa.idade }}</td>
        <td><button @click="remove(indice)">Remover</button><button @click="editar(indice)">Editar</button></td>
    </tr>
  </table>
    </div>


</template>

<script>
export default {
    
    name: 'CrudPage',
    data() {
        return {
            
            pessoaForm:{nome:'', idade: ''},
            pessoas:[]
        }
    },
    methods: {
        grava(pessoaForm){
            var pessoa = { ...pessoaForm}
            this.pessoas.push(pessoa)
            this.pessoaForm = {nome:'', idade: ''}
        },
        remove(indice){
            this.pessoas.splice(indice,1)
        },
        editar(indice){
            this.pessoaForm = this.pessoas[indice]
            this.remove(indice)
        },
    },

}
</script>

<style>

</style>