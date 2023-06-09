<template>

    <v-app :style="{ background: '#212121' }" >
        <div class="d-flex justify-center">

            <v-card width="500" height="400" class="mt-15 pa-6">

                <div class="d-flex">
                    <v-img src="@/assets/logo_granit.png" :width="60" :height="150"></v-img>
                    <div>
                        <v-card-title>
                            Панель клиента
                        </v-card-title>
                        <v-card-subtitle>
                            Группа компаний "ГРАНИТ"
                        </v-card-subtitle>
                    </div>
                </div>

                <v-card-item>
                    <v-text-field
                        v-model="login"
                        label="Номер телефона"
                        color="black"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Пароль"
                        color="black"
                    >
                    </v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green" @click="enter_into_system(login, password)">Войти</v-btn>
                    </v-card-actions>
                </v-card-item>
            </v-card>

        </div>

    </v-app>

</template>

<script>

</script>