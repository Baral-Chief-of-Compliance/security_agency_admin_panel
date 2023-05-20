<template>

    <v-app :style="{ background: '#212121' }" >
        <div class="d-flex justify-center">

            <v-card width="500" height="300" class="mt-15 pa-6">
                <v-card-title>
                    Панель Администратора
                </v-card-title>
                <v-card-subtitle>
                    Группа компаний "ГРАНИТ"
                </v-card-subtitle>
                <v-card-item>
                    <v-text-field
                        v-model="login"
                        label="Логин"
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