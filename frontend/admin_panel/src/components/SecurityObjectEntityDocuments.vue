<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Договоры</div>

        <v-btn  variant="outlined" class="mx-10" :to="{name: 'SecurityObjectEntityInf', params: {id: 1}}">
            <v-icon icon="mdi-arrow-collapse-left" color="grey-darken-4" class="mr-2"></v-icon>К объекту охраны
        </v-btn>

        <v-container class="d-flex justify-center">
            <v-col>
                <div>
                    <span class="text-h5 my-2 pa-6 mx-14">Физическая охрана:</span>

                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                        
                        <b class="pr-2">Начало срока исполнения: </b>  01.02.2020
                        <v-spacer></v-spacer>

                        <b class="pr-2">Конец срока исполнения:</b> 31.12.2020
                        <v-spacer></v-spacer>  

                        <b class="pr-2">Статус:</b>
                        <v-card class="px-2 mb-3" color="red">Не активен</v-card>

                        <v-spacer></v-spacer> 
                        <v-btn color="grey-darken-4">Скачать</v-btn>
                    </v-card>


                </div>
                <v-row class="mx-14 mt-5">
                    <v-btn 
                        color="green-accent-4" 
                        size="x-large" 
                        block
                        @click="add_client"
                        >
                        Добавить договр физической охраны

                        <v-dialog
                            v-model="dialog_phys"
                            activator="parent"
                            width="auto"
                        >
                            <v-card width="500">
                                <v-card-title>
                                    Добавить договр физической охраны
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field label="Начало срока исполнения" type="date" variant="underlined"/>
                                    <v-text-field label="Конец срока исполнения" type="date" variant="underlined"/>
                                    <b>Прикрепите документ</b>
                                    <v-text-field  type="file" variant="underlined"/>
                                    
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="red" @click="dialog_phys = false">Закрыть</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green" @click="dialog_phys = false">Добавить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-btn>
                </v-row>

                <div class="my-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Техничсекая охрана:</span>

                    <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                        
                        <b class="pr-2">Начало срока исполнения: </b>  01.02.2020
                        <v-spacer></v-spacer>

                        <b class="pr-2">Конец срока исполнения:</b> 31.12.2020
                        <v-spacer></v-spacer>  

                        <b class="pr-2">Статус:</b>
                        <v-card class="px-2 mb-3" color="red">Не активен</v-card>

                        <v-spacer></v-spacer> 
                        <v-btn color="grey-darken-4">Скачать</v-btn>
                    </v-card>


                </div>

                <v-row class="mx-14 mt-5">
                    <v-btn 
                        color="green-accent-4" 
                        size="x-large" 
                        block
                        @click="add_client"
                        >
                        Добавить договр технической охраны

                        <v-dialog
                            v-model="dialog_teh"
                            activator="parent"
                            width="auto"
                        >
                            <v-card width="500">
                                <v-card-title>
                                    Добавить договр технической охраны
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field label="Начало срока исполнения" type="date" variant="underlined"/>
                                    <v-text-field label="Конец срока исполнения" type="date" variant="underlined"/>
                                    <b>Прикрепите документ</b>
                                    <v-text-field  type="file" variant="underlined"/>
                                    
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="red" @click="dialog_teh = false">Закрыть</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green" @click="dialog_teh = false">Добавить</v-btn>
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
            dialog_phys: false,
            dialog_teh: false
        }
    }
}


</script>