<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Добавить клиента</div>

        <v-row class="d-flex justify-center my-5">
            <v-card v-show="show_phys_card" class="pa-6" color="green-accent-1" v-model="phys_inf_add">
                Физическое лицо {{ phys_surname }} {{ phys_name }} {{ phys_patronymic }} телефон: {{ phys_phone }} г. {{ phys_town }} ул. {{ phys_street }} {{ phys_house }} {{ phys_frame }} кв. {{ phys_apartment }} добавлено
            </v-card>
            <v-card v-show="show_entyti_card" class="pa-6" color="green-accent-1" v-model="phys_inf_add">
                Юридическое лицо {{ entity_surname }} {{ entity_name }} {{ entity_patronymic }} телефон: {{ entity_phone }} компания {{ entity_name_of_company }} ИНН {{ entity_inn }} добавлено
            </v-card>
        </v-row>

        <v-form v-model="valid">
        <v-container class="d-flex justify-center">
            <v-col>
                <v-row class="mx-10">
                    <v-text-field
                        v-model="surname"
                        label="Фамилия"
                        color="grey-darken-4"
                        required
                        class="mx-5"
                        variant="underlined"
                    ></v-text-field>

                    <v-text-field
                        v-model="name"
                        label="Имя"
                        color="grey-darken-4"
                        required
                        class="mx-5"
                        variant="underlined"
                    ></v-text-field>

                    <v-text-field
                        v-model="patronymic"
                        label="Отчество"
                        color="grey-darken-4"
                        class="mx-5"
                        variant="underlined"
                    ></v-text-field>

                    <v-text-field
                        v-model="phone"
                        label="Телефон"
                        color="grey-darken-4"
                        class="mx-5"
                        required
                        variant="underlined"
                    ></v-text-field>
                </v-row >

                <v-row class="mx-13 mt-15">

                        <v-radio-group v-model="selected">
                            <v-radio 
                            label="Физическое лицо" 
                            value="phys" 
                            color="grey-darken-4"
                            
                            >
                            </v-radio>
                            <v-radio 
                            label="Юридическое лицо" 
                            value="entity" 
                            color="grey-darken-4"
                            >
                        </v-radio>
                        </v-radio-group>

                            <v-text-field
                                v-show="selected === 'phys'"
                                v-model="town"
                                label="Город"
                                color="grey-darken-4"
                                variant="underlined"
                            ></v-text-field>

                            <v-text-field
                                v-show="selected === 'phys'"
                                v-model="street"
                                label="Улица"
                                color="grey-darken-4"
                                variant="underlined"
                            ></v-text-field>
 
                            <v-text-field
                                v-show="selected === 'phys'"
                                v-model="house"
                                label="Дом"
                                color="grey-darken-4"
                                variant="underlined"
                            ></v-text-field>

                            <v-text-field
                                v-show="selected === 'phys'"
                                v-model="frame"                            
                                label="Корпус"
                                color="grey-darken-4"
                                variant="underlined"
                            ></v-text-field>

                            <v-text-field
                                v-show="selected === 'phys'"
                                v-model="apartment"
                                label="Квартира"
                                color="grey-darken-4"
                                variant="underlined"
                            ></v-text-field>



                        <v-text-field
                            v-show="selected === 'entity'"
                            v-model="name_of_company"
                            label="Название компании"
                            color="grey-darken-4"
                            variant="underlined"
                        ></v-text-field>

                        <v-text-field
                            v-show="selected === 'entity'"
                            v-model="inn"
                            label="ИНН"
                            color="grey-darken-4"
                            variant="underlined"
                        ></v-text-field>
                    
                </v-row>
            
                <v-row class="mx-14 mt-15">
                    <v-btn 
                        color="green-accent-4" 
                        size="x-large" 
                        block
                        @click="add_client"
                        >
                        Добавить клиента
                    </v-btn>
                </v-row>

                </v-col>
            </v-container>
        </v-form>
    </v-container>
</template>


<script>

    export default{
        data(){
            return{
                selected: "",
                surname: "",
                name: "",
                patronymic: "",
                phone: "",
                town: "",
                street: "",
                house: "",
                frame: "",
                apartment: "",
                name_of_company: "",
                inn: "",

                phys_surname: "",
                phys_name: "",
                phys_patronymic: "",
                phys_phone: "",
                phys_town: "",
                phys_street: "",
                phys_house: "",
                phys_frame: "",
                phys_apartment: "",


                entity_surname: "",
                entity_name: "",
                entity_patronymic: "",
                entity_phone: "",
                entity_name_of_company: "",
                entity_inn: "",
                
                show_phys_card : false,
                show_entyti_card : false
            }
        },
        
        methods:{
            add_client(){
                this.show_phys_card = false,
                this.show_entyti_card = false

                if (this.selected === 'phys'){

                    this.phys_surname = this.surname,
                    this.phys_name = this.name,
                    this.phys_patronymic = this.patronymic,
                    this.phys_phone = this.phone,
                    this.phys_town = this.town,
                    this.phys_street = this.street,
                    this.phys_house = this.house,
                    this.phys_frame = this.frame,
                    this.phys_apartment = this.apartment

                    this.show_phys_card = true
                }

                else if (this.selected === 'entity'){
                    this.entity_surname = this.surname
                    this.entity_name = this.name
                    this.entity_patronymic = this.patronymic
                    this.entity_phone = this.phone
                    this.entity_name_of_company = this.name_of_company
                    this.entity_inn = this.inn

                    this.show_entyti_card = true 
                }

                this.set_null()
            },

            set_null(){
                this.selected = "",
                this.surname = "",
                this.name = "",
                this.patronymic = "",
                this.phone = "",
                this.town = "",
                this.street = "",
                this.house = "",
                this.frame = "",
                this.apartment = "",
                this.name_of_company = "",
                this.inn = ""
            }
        }
    }
</script>