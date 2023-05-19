<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Юридические лица</div>



        <div class="py-6 mx-10 d-flex justify-center" >
            <v-col>
                <div v-for="ent in entity_clients">
                    <v-hover v-slot="{ isHovering, props }" >
                        <v-card  class="my-2 pa-6 mx-14 d-flex flex-row"
                            v-bind="props"
                            :color="isHovering ? 'grey-darken-4': undefined"
                            :to="{ name: 'EntityClientInf', params: {id: 1}}"
                        >
                            <b class="pr-2">Фамилия: </b>  {{ ent.surname }} 
                            <v-spacer></v-spacer> 
                            <b class="pr-2">Имя:</b> 
                            {{ ent.name }} 
                            <v-spacer></v-spacer> 
                            <b class="pr-2">Отчество:</b>  
                            {{ ent.patronymic }} 
                            <v-spacer></v-spacer> 
                            <b class="pr-2">Телефон:</b> 
                            {{ ent.phone }}
                            <v-spacer></v-spacer> 
                            <b class="pr-2">Компания:</b> 
                            {{ ent.name_of_company }} 
                            <v-spacer></v-spacer> 
                            <b class="pr-2">ИНН:</b> 
                            {{ ent.inn }}
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
                entity_clients: [
                    {
                        surname: "да",
                        name: "да",
                        patronymic: "",
                        phone: "",
                        name_of_company: "",
                        inn: ""
                    },
                    {
                        surname: "да",
                        name: "да",
                        patronymic: "",
                        phone: "",
                        name_of_company: "",
                        inn: ""
                    }
                ]
            }
        }
    }
</script>