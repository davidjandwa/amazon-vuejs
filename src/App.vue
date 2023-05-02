<template>
    <div id="app">
        <Navbar />
        <RouterView/>
        <!-- <Footer /> -->
    </div>
    
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Fira sans, sans-serif'; */
    font-family: Arial, Helvetica, sans-serif;
 }
</style>
