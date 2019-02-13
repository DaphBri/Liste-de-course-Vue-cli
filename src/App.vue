<template>
  
    <div class="col" id="app">
      <!-- <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <h1>Liste de courses</h1>
  
      <ListeIngredients
      v-bind:listIng="list"
       @FontApp="toggle($event)"
      />
        
      <ChampAjouter
      v-bind:ingredient="i.name"
       @AddI="addNewI($event)"
      />
  
    </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ListeIngredients from './components/ListeIngredients.vue'
import ChampAjouter from './components/ChampAjouter.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    ListeIngredients,
    ChampAjouter
  },
  data(){       
    return{
      isHidden: false,
      list:[
        {name:'Courgette', isSelected:false}, 
        {name:'Champignon', isSelected:false}, 
        {name:'Tofu', isSelected:false}, 
        {name:'Riz basmati', isSelected:false}
      ],
      i:{name:"", isSelected:false},
    }
  },
  methods: {
        toggle(i){
            i.isSelected = !i.isSelected;
        },
        addNewI(){
          let newI ={
            name: this.i.name,
            isSelected:false
          };
          this.list.push(newI);
          this.i.name=null;
        }
    }
}
</script>

<style lang="scss">
@import 'assets/css/style.min.css';

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
