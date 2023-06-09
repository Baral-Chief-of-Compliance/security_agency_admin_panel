<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">История выездов</div>

        <v-btn  variant="outlined" class="mx-10" :to="{name: 'SecurityObjectEntityInf', params: {id: 1}}">
            <v-icon icon="mdi-arrow-collapse-left" color="grey-darken-4" class="mr-2"></v-icon>К объекту охраны
        </v-btn>

        <v-container class="d-flex justify-center">
            <v-col>
                <span class="text-h5 my-2 pa-6 mx-14">Выезды</span>
                <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                    <b class="pr-2">Дата выезда:</b>
                    07.01.2023
                    <v-spacer></v-spacer>
                    <b class="pr-2">Время выезда:</b>
                    19:21
                    <v-spacer></v-spacer>
                    <b class="pr-2">Время прибытия:</b>
                    19:29
                    <v-spacer></v-spacer>
                    <b class="pr-2">Причина: </b>
                    Ложная тревога
                    <v-spacer></v-spacer>
                    <b class="pr-2">Регламент: </b>
                    <v-card class="px-2 mb-3" color="green">Выполнен</v-card>
                </v-card>

                <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                    <b class="pr-2">Дата выезда:</b>
                    13.03.2023
                    <v-spacer></v-spacer>
                    <b class="pr-2">Время выезда:</b>
                    08:01
                    <v-spacer></v-spacer>
                    <b class="pr-2">Время прибытия:</b>
                    --:--
                    <v-spacer></v-spacer>
                    <b class="pr-2">Причина: </b>
                    Ложная тревога
                    <v-spacer></v-spacer>
                    <b class="pr-2">Регламент: </b>
                    <v-card class="px-2 mb-3" color="red">Не выполнен</v-card>
                </v-card>

                <v-card class="my-2 pa-6 mx-14 d-flex flex-row">
                    <b class="pr-2">Дата выезда:</b>
                    27.04.2023
                    <v-spacer></v-spacer>
                    <b class="pr-2">Время выезда:</b>
                    22:47
                    <v-spacer></v-spacer>
                    <b class="pr-2">Время прибытия:</b>
                    22:53
                    <v-spacer></v-spacer>
                    <b class="pr-2">Причина: </b>
                    Реальный вызов
                    <v-spacer></v-spacer>
                    <b class="pr-2">Регламент: </b>
                    <v-card class="px-2 mb-3" color="green">Выполнен</v-card>
                </v-card>

                <!-- <v-row class="mx-14 mt-5">
                    <v-btn 
                        color="grey-darken-4" 
                        size="x-large" 
                        block
                        @click="add_client"
                        >
                        Добавить выезд

                        <v-dialog
                            v-model="dialog"
                            activator="parent"
                            width="auto"
                        >
                            <v-card width="500">
                                <v-card-title>
                                    Добавить выезд
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field label="Дата выезда" type="date" variant="underlined"/>
                                    <v-text-field label="Время выезда" type="time" variant="underlined"/>
                                    <v-text-field label="Время прибытия" type="time" variant="underlined"/>
                                    
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn color="red" @click="dialog = false">Закрыть</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green" @click="dialog = false">Добавить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-btn>
                </v-row> -->
            </v-col>
        </v-container>
    </v-container>
</template>

<script>
export default{
    data(){
        return{
            dialog: false
        }
    }
}
</script>