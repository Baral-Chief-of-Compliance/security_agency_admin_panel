<template>

    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Информация о юридическом лице</div>

        <v-btn  variant="outlined" class="mx-10" :to="{name: 'EntityClients'}">
            <v-icon icon="mdi-arrow-collapse-left" color="grey-darken-4" class="mr-2"></v-icon>назад
        </v-btn>

        <v-container class="d-flex justify-center">

            <v-col>
                <div>
                    <span class="text-h5 my-2 pa-6 mx-14">ФИО и должность</span>
                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">

                        <b class="pr-2">Фамилия: </b>  {{ entity.surname }} 
                        <v-spacer></v-spacer>

                        <b class="pr-2">Имя:</b> {{ entity.name }} 
                        <v-spacer></v-spacer>  

                        <b class="pr-2">Отчество:</b>  {{ entity.patronymic }} 
                        <v-spacer></v-spacer> 
                        <b class="pr-2">Должность:</b> {{ entity.role }} 
                    </v-card>
                </div>


                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Телефон</span>
                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                        <b class="pr-2">Номер: </b>  {{ entity.phone }} 
                    </v-card>
                </div>

                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Данные</span>
                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">

                        <b class="pr-2">Компания: </b>  {{ entity.name_of_company }}
                        <v-spacer></v-spacer> 

                        <b class="pr-2">ИНН: </b>  {{ entity.inn }}
                        <v-spacer></v-spacer> 

                    </v-card>
                </div>

                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Объекты охраны</span>
                    <div v-for="obj in entity.security_objects">
                        <v-hover v-slot="{ isHovering, props }" >
                            <v-card  class="my-2 pa-6 mx-14 d-flex flex-row"
                                v-bind="props"
                                :color="isHovering ? 'grey-darken-4': undefined"
                                :to="{ name: 'SecurityObjectEntityInf', params: {id: 1}}"
                            >

                                <b class="pr-2">Город: </b>  
                                {{ obj.town }}
                                <v-spacer></v-spacer>

                                <b class="pr-2">Улица: </b> 
                                {{  obj.street }}
                                <v-spacer></v-spacer>

                                <b class="pr-2">Дом: </b>
                                {{ obj.house }}
                                <v-spacer></v-spacer>

                                <b class="pr-2">Корпус: </b>
                                {{ obj.frame }}

                            </v-card>
                        </v-hover>
                    </div>

                </div>

                <v-row class="mx-14 mt-15">
                    <v-btn 
                        color="grey-darken-4" 
                        size="x-large" 
                        block
                        @click="add_client"
                        >
                        Добавить объект охраны

                        <v-dialog
                            v-model="dialog"
                            activator="parent"
                            width="auto"
                        >
                            <v-card width="500">
                                <v-card-title>
                                    Добавить объект охраны
                                </v-card-title>
                                <v-card-subtitle>
                                    Введите адрес объекта охраны
                                </v-card-subtitle>
                                <v-card-text>
                                    <v-text-field label="Город" variant="underlined"/>
                                    <v-text-field label="Улица" variant="underlined"/>
                                    <v-text-field label="Дом" variant="underlined"/>
                                    <v-text-field label="Корпус" variant="underlined"/>
                                    
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="red" @click="dialog = false">Закрыть</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green" @click="dialog = false">Добавить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-btn>
                </v-row>
            </v-col>

        </v-container>
    </v-container>
</template>


<script>
    export default{
        data(){
            return{
                entity: {
                    surname: "Мазурина",
                        name: "Маргарита",
                        patronymic: "Владимировна ",
                        phone: "+78153372646", 
                        role: "директор",
                        name_of_company: 'МБУ Дворец культуры "Металлург"',
                        inn: "5102050835",
                    security_objects: [
                        {
                            town: 'Кандалакша',
                            street: 'Кировская аллея',
                            house: '1a',
                            frame: '--'
                        }
                    ]
                },
                dialog: false,
            }
        }
    }
</script>