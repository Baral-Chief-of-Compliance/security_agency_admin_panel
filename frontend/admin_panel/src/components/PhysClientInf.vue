<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Информация о физическом лице</div>

        <v-btn  variant="outlined" class="mx-10" :to="{name: 'PhysClients'}">
            <v-icon icon="mdi-arrow-collapse-left" color="grey-darken-4" class="mr-2"></v-icon>назад
        </v-btn>
        
        <v-container class="d-flex justify-center">

            <v-col>
                <div>
                    <span class="text-h5 my-2 pa-6 mx-14">ФИО</span>
                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">

                        <b class="pr-2">Фамилия: </b>  {{ phys.surname }} 
                        <v-spacer></v-spacer>

                        <b class="pr-2">Имя:</b> {{ phys.name }} 
                        <v-spacer></v-spacer>  

                        <b class="pr-2">Отчество:</b>  {{ phys.patronymic }} 
                    </v-card>
                </div>

                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Телефон</span>
                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                        <b class="pr-2">Номер: </b>  {{ phys.phone }} 
                    </v-card>
                </div>

                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Адрес</span>
                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">

                        <b class="pr-2">Город: </b>  {{ phys.town }}
                        <v-spacer></v-spacer> 

                        <b class="pr-2">Улица: </b>  {{ phys.street }}
                        <v-spacer></v-spacer> 

                        <b class="pr-2">Дом: </b>  {{ phys.house }}
                        <v-spacer></v-spacer> 

                        <b class="pr-2">Корпус: </b>  {{ phys.frame }}
                        <v-spacer></v-spacer> 

                        <b class="pr-2">Квартира: </b>  {{ phys.apartment }}
                        <v-spacer></v-spacer> 
                    </v-card>
                </div>

                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Объекты охраны</span>
                    <div v-for="obj in phys.security_objects">
                        <v-hover v-slot="{ isHovering, props }" >
                            <v-card  class="my-2 pa-6 mx-14 d-flex flex-row"
                                v-bind="props"
                                :color="isHovering ? 'grey-darken-4': undefined"
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
                        color="green-accent-4" 
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
                phys: {
                    surname: 'кто',
                    name: '',
                    patronymic: '',
                    phone: '',
                    town: '',
                    street: '',
                    house: '',
                    frame: '',
                    apartment: '',
                    security_objects: [
                        {
                            town: '',
                            street: '',
                            house: '',
                            frame: '1'
                        }
                    ]
                },
                dialog: false,
            }
        }
    }
</script>