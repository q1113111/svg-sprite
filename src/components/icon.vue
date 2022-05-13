<template>
    <svg class="w-8 h-8 text-white">
      <use  :xlink:href="`#icon-${name}`" ></use>
    </svg>
</template>
<script setup>
defineProps({
    name:{
        type:String,
        required:true
    }
})
</script>