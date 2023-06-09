<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Объекты охраны</div>
    </v-container>

    <v-container class="d-flex justify-center">
        <v-row class="mx-10">
            <v-col
                v-for="el in objects_securite"
                    :key="el.id_ob"
                    cols="12"
                    md="3"
                    v-bind="props_hover"
            >    
                <v-hover v-slot="{ isHovering, props }">
                    <v-card v-bind="props" height="200" width="350" 
                            class="mx-auto mb-10 d-flex justify-center" 
                            :color="isHovering ? 'deep-orange' : undefined"
                            variant="outlined"
                    >
                        <v-card-item class="text-h6">
                            {{ el.addres }}
                        </v-card-item>
                
                    </v-card>

                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => (
            {
                objects_securite:[
                    {
                        "id_ob": 1,
                        "addres": "МБУ 'Дворец культуры 'Металлург'"
                    }
                ] 
            }
        )
    }
</script>