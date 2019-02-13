<template>
    <div id="container">
        <Ingredient
        v-for="(i, index) in listIng"
        v-bind:key="index"
        v-bind:ingredient="i.name"
        v-bind:isSelected="i.isSelected"
        v-bind:isHidden="i.isHidden"
        v-bind:alert-success="alert-success"
        v-bind:alert-info="alert-info"
        @fontI="toggle($event)"
        />
    </div>
</template>

<script>
import Ingredient from './Ingredient.vue'

export default {
    props:['listIng'],

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
