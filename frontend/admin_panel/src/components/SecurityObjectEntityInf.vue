<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Информация об объекте охраны</div>

        <v-btn  variant="outlined" class="mx-10" :to="{name: 'EntityClients'}">
            <v-icon icon="mdi-file-document" color="grey-darken-4" class="mr-2"></v-icon>Договоры
        </v-btn>

        <v-btn  variant="outlined" class="mx-10" :to="{name: 'EntityClients'}">
            <v-icon icon="mdi-car" color="grey-darken-4" class="mr-2"></v-icon>История выездов
        </v-btn>

        <v-container class="d-flex justify-center">
            <v-col>
                <div>
                    <span class="text-h5 my-2 pa-6 mx-14">Юридическое лицо</span>
                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                        
                        <v-spacer></v-spacer>
                        <b class="pr-2">Название компании: </b>  {{ entity.name_of_company }} 
                        <v-spacer></v-spacer>

                        <b class="pr-2">ИНН:</b> {{ entity.inn }} 
                        <v-spacer></v-spacer>  
                    </v-card>
                </div>

                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Адрес</span>
                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                        <b class="pr-2">Город: </b>  
                        {{ security_obj.town }}
                        <v-spacer></v-spacer>

                        <b class="pr-2">Улица: </b> 
                        {{  security_obj.street }}
                        <v-spacer></v-spacer>

                        <b class="pr-2">Дом: </b>
                        {{ security_obj.house }}
                        <v-spacer></v-spacer>

                        <b class="pr-2">Корпус: </b>
                        {{ security_obj.frame }}
                    </v-card>
                </div>

                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Карта</span>

                    <yandex-map
                        :coords="[69.405001, 30.202195]"
                        :zoom="16"
                        class="ml-15 mt-5"
                    >
                        <ymap-marker 
                            :coords="[69.405001, 30.202195]" 
                            marker-id="1" 
                            :icon="{ color: 'red' }"
                        />
                    </yandex-map>
                </div>
            </v-col>
        </v-container>
    </v-container>
</template>

<script>
    export default{
        data(){
            return{
                entity: {
                    surname: 'кто',
                    name: '',
                    patronymic: '',
                    phone: '',
                    name_of_company: '',
                    inn: '',
                },
                security_obj: {
                    town: '',
                    street: '',
                    house: '',
                    frame: '1'
                },
                dialog: false,
            }
        }
    }
</script>

<style scoped>
    .ymap-container {
        width: 1600px;
        height: 500px;
    }
</style>