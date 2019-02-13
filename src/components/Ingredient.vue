<template>
    <div v-if="!isHidden" class="alert ingredient" :class="{'alert-success': isSelected, 'alert-info': !isSelected}" @click="toggle(i)" >
        <i class="fa fa-square"  :class="{'fa-check-square': isSelected}" ></i> {{ingredient}} 
        
        <button @click="isHidden = true" class="bouton">
          <img src="https://png.pngtree.com/svg/20161008/the_trash_40525.png" alt="">
      </button> 
      </div>
</template>

<script>
export default {
props:['ingredient', 'isSelected', 'isHidden', 'alert-success', 'alert-info'],

    methods:{
       toggle(i){
         console.log("toggle-i in ingredients")
         this.$emit('fontI', i)
       }
    }
}
</script>

<style>

</style>
