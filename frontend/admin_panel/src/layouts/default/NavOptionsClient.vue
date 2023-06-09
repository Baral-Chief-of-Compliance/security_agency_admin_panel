<template>
    <v-list-group value="Objects">
    <template v-slot:activator="{ props }">
      <v-list-item
        v-bind="props"
        prepend-icon="mdi-garage"
        title="Объекты охраны"
      ></v-list-item>
    </template>

    <v-list-item
      v-for="([title, icon, to], i) in categories"
      :key="i"
      :title="title"
      :prepend-icon="icon"
      :value="title"
      :to="to"
    ></v-list-item>
  </v-list-group>

</template>

<script>
  export default {
    data: () => ({
      categories: [
        ['Список', 'mdi-garage-open', 'client/client/objects_of_protection']
      ]
    }),
  }
</script>