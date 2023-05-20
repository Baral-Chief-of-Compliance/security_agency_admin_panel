<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Физические лица</div>

        <div class="py-6 mx-10 d-flex justify-center" >

            <v-col>

                <div v-for="phys in phys_clients">
                    <v-hover v-slot="{ isHovering, props }" >
                        <v-card  class="my-2 pa-6 mx-14 d-flex flex-row"
                            v-bind="props"
                            :color="isHovering ? 'grey-darken-4': undefined"
                            :to="{ name: 'PhysClientInf', params: {id: 1}}"
                        >
                            <b class="pr-2">Фамилия: </b>  {{ phys.surname }} 
                            <v-spacer></v-spacer> 
                            <b class="pr-2">Имя:</b> 
                            {{ phys.name }} 
                            <v-spacer></v-spacer> 
                            <b class="pr-2">Отчество:</b>  
                            {{ phys.patronymic }} 
                            <v-spacer></v-spacer> 
                            <b class="pr-2">Телефон:</b> 
                            {{ phys.phone }}
                            <v-spacer></v-spacer> 
                            <b class="pr-2">Адрес:</b> 
                            г. {{ phys.town }} 
                            ул. {{ phys.street }} 
                            д. {{ phys.house }} 
                            к. {{ phys.frame }}
                            кв. {{ phys.apartment }}
                        </v-card>
                    </v-hover>

                </div>

            </v-col>

        </div>
    </v-container>
</template>


<script>

export default{
        data(){
            return{
                phys_clients: [
                    {
                        surname: "Дроздова",
                        name: "Варвара",
                        patronymic: "Гпигорьевна",
                        phone: "+79985057816",
                        town: "Мурманск",
                        street: "Кольский проспект",
                        house: "91",
                        frame: "1",
                        apartment: "30"
                    },
                    {
                        surname: "Козлов",
                        name: "Никодим",
                        patronymic: "Иванович",
                        phone: "+79477050242",
                        town: "Поречье",
                        street: "Хлыновский",
                        house: "79",
                        frame: "2",
                        apartment: "777"
                    }
                ]
            }
        }
    }

</script>