<template>
    <v-container class="mx-10">
        <div class="text-h3 py-6 text-left">Статистика по выездам</div>
            <v-radio-group inline v-model="variant_radio">
                <v-radio label="По округу" value="county"></v-radio>

                <v-radio label="Для объекта охраны" value="object"></v-radio>

                <v-container v-if="variant_radio === 'county'">
                    <div class="text-h4 py-6 text-left">Статистика выездов по округу</div>

                    <v-row>
                        <v-select label="Город" :items="items_for_select_town"></v-select>
                        <v-select label="Округ" :items="items_for_select_county"></v-select>
                        
                    </v-row>
                    <v-row class="mr-5 mt-10">
                        <v-btn class="text-white" color="#04713c" size="x-large" block><v-icon color="white" icon="mdi-file-excel" ></v-icon>Сформировать отчёт</v-btn>
                    </v-row>
                    

                </v-container>

                <v-container v-if="variant_radio === 'object'">
                    <div class="text-h4 py-6 text-left">Для конкретного объекта</div>
                        <v-row>
                            <v-select label="Объект охраны" :items="items_security_objects"></v-select>
                            <v-select label="Договор" :items="items_contracts"></v-select>
                            
                        </v-row>
                        <v-row class="mr-5 mt-10">
                            <v-btn class="text-white" color="#04713c" size="x-large" block><v-icon color="white" icon="mdi-file-excel" ></v-icon>Сформировать отчёт</v-btn>
                        </v-row>
                </v-container>
            </v-radio-group>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                variant_radio: null,
                items_for_select_town: ['Мурманск', 'Кандалакша', 'Все'],
                items_for_select_county: ['Первомайский', 'Октябрьский', 'Ленинский', 'Все'],
                items_security_objects: ["МБУ «Дворец культуры «Металлург"],
                items_contracts: ["№ 7 от 19.01.2023 г. об экстренном вызове Группы быстрого реагирования"]
            }
        }
    }
</script>