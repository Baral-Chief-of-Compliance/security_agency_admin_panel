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
                        surname: "Мазурина",
                        name: "Маргарита",
                        patronymic: "Владимировна ",
                        phone: "+78153372646", 
                        role: "директор",
                        name_of_company: 'МБУ Дворец культуры "Металлург"',
                        inn: "5102050835"
                    },
                    {
                        surname: "Тальнишних",
                        name: "Сергея",
                        patronymic: "Андреевича",
                        role: "директор по безопасности  филиала ПАО «ФСК ЕЭС»-МЭС Северо-Запада",
                        phone: "+74959748740",
                        name_of_company: 'ПАО "ФСК ЕЭС"',
                        inn: "4716016979"
                    },
                    {
                        surname: "Богушевич",
                        name: "Иван",
                        patronymic: "Петрович",
                        phone: "+78152421155",
                        role: "Генеральный директор",
                        name_of_company: 'АО "Хлебопек"',
                        inn: "5191430297"
                    },
                    {
                        surname: "Шадрина",
                        name: "Ирина",
                        patronymic: "Михайловна",
                        phone: "(81531) 5 44 68",
                        role: "Ректор",
                        name_of_company: 'ФГБОУ ВО «МАГУ» Шадрина Ирина Михайловна',
                        inn: "5191501710"
                    },
                    {
                        surname: "Коробков",
                        name: "Сергей",
                        patronymic: "Евгеньевич",
                        phone: "653-108",
                        role: "Генеральный директор",
                        name_of_company: 'АО «Электротранспорт»',
                        inn: "5190193597"
                    },
                    {
                        surname: "Стародубцева",
                        name: "Ирина",
                        patronymic: "Станиславовна",
                        phone: "+7 (8152) 56-70-36",
                        role: "директор",
                        name_of_company: 'ГОБУ «Имущественная казна Мурманской области»',
                        inn: "5190022182"
                    },
                    {
                        surname: "Рыжко",
                        name: "Лариса",
                        patronymic: "Лариса",
                        phone: "(81536)7-36-97",
                        role: "директор",
                        name_of_company: 'ГАПОУ «МонПК»',
                        inn: "5107010480"
                    },
                    {
                        surname: "Панас",
                        name: "Наталья",
                        patronymic: "Викторовна",
                        phone: "+7 (815-52) 57-348",
                        role: "директор",
                        name_of_company: 'ГАПОУ МО «ОГПК»',
                        inn: "5108997005"
                    }
                    
                ]
            }
        }
    }
</script>