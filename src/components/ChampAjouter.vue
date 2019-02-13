<template>
    <form class="form-inline" @submit.prevent="addNewI">
      <div class="form-group">
        <div class="input-group">
          <input type="text" class="form-control" id="new-item-field" placeholder="Produit" v-model="ingredient">
        </div>
      </div>
      <button type="submit" class="btn">Ajouter</button>
    </form>
</template>

<script>
export default {
    props:['ingredient'],
    
    methods:{
       addNewI(){
         console.log("add")
         this.$emit('AddI')
       }
    }
}
</script>

<style>

</style>
