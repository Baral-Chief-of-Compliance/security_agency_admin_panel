<template>
    <v-list-group value="Students">
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

  <v-list-group value="Orders">
    <template v-slot:activator="{ props }">
      <v-list-item
        v-bind="props"
        prepend-icon="mdi-map"
        title="Карта"
      ></v-list-item>
    </template>

    <v-list-item
      v-for="([title, icon, to], i) in orders"
      :key="i"
      :title="title"
      :prepend-icon="icon"
      :value="title"
      :to="to"
    ></v-list-item>

    
  </v-list-group>

  <v-list-group value="Clients">
    <template v-slot:activator="{ props }">
      <v-list-item
        v-bind="props"
        prepend-icon="mdi-account-group"
        title="Клиенты"
      ></v-list-item>
    </template>

    <v-list-item
      v-for="([title, icon, to], i) in clients"
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
        ['Список', 'mdi-garage-open', '/objects_of_protection']
      ],
      orders:[
        ['Посмотреть', 'mdi-home-map-marker', '']
      ],
      clients:[
        ['Физ лица', 'mdi-account', '/phys_clients'],
        ['Юр лица', 'mdi-account-multiple', '/entity_clients'],
        ['Добавить', 'mdi-account-plus', '/add_client'],
      ],
    }),
  }
</script>