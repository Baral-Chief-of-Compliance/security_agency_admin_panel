<template>
    <v-app>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
          color="grey-darken-4"
          
        >
          <v-list>
            <v-list-item
              prepend-icon="mdi-account-tie"
              title="Client"
              subtitle="+7(81533)72646"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
      <v-list>
        <nav-options />
      </v-list>
        </v-navigation-drawer>
  
        <v-main><default-view /></v-main>
      </v-layout>
  
      
    </v-app>
</template>
  
<script setup>
    import DefaultBar from './AppBar.vue'
    import DefaultView from './View.vue'
    import NavOptions from './NavOptionsClient.vue'
</script>