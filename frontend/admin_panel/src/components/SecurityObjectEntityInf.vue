<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Информация об объекте охраны</div>

        <v-btn  variant="outlined" class="mx-10" :to="{name: 'SecurityObjectEntityDocuments', params: {id: 1}}">
            <v-icon icon="mdi-file-document" color="grey-darken-4" class="mr-2"></v-icon>Договора
        </v-btn>

        <v-btn  variant="outlined" class="mx-10" :to="{name: 'SecurityObjectEntityTrips', params: {id: 1}}">
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
                        {{ entity.security_objects[0].town }}
                        <v-spacer></v-spacer>

                        <b class="pr-2">Улица: </b> 
                        {{  entity.security_objects[0].street }}
                        <v-spacer></v-spacer>

                        <b class="pr-2">Дом: </b>
                        {{ entity.security_objects[0].house }}
                        <v-spacer></v-spacer>

                        <b class="pr-2">Корпус: </b>
                        {{ entity.security_objects[0].frame }}
                    </v-card>
                </div>

                <div class="mt-15">
                    <span class="text-h5 my-2 pa-6 mx-14">Карта</span>

                    <yandex-map
                        :coords="[67.181987, 32.447921]"
                        :zoom="16"
                        class="ml-15 mt-5"
                    >
                        <ymap-marker 
                            :coords="[67.181987, 32.447921]" 
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

<style scoped>
    .ymap-container {
        width: 1600px;
        height: 500px;
    }
</style>