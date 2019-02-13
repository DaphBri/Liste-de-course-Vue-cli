<template>
    <div id="container">
        <Ingredient
        v-for="(i, index) in list"
        v-bind:key="index"
        v-bind:ingredient="i.name"
        v-bind:isSelected="i.isSelected"
        v-bind:isHidden="i.isHidden"

        @fontI="toggle($event)"
        />
        <!-- v-bind:alert-success="alert-success"
        v-bind:alert-info="alert-info"
        v-bind:fa-check-square="fa-check-square" -->
    </div>
</template>

<script>
import Ingredient from './Ingredient.vue'

export default {
    props:['list'],

    components: {
        Ingredient
    },
    methods:{
      toggle(i){
        console.log("toggle-i in listIngredients")
          this.$emit('FontApp', i)
      }
  },
}
</script>

<style>

</style>
