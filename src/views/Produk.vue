<template>
    <div>
      <h1>Daftar Pokemon</h1>
      <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id">{{ pokemon.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pokemons: [],
      };
    },
    mounted() {
      axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
        this.pokemons = response.data.results;
      });
    },
  };
  </script>
  