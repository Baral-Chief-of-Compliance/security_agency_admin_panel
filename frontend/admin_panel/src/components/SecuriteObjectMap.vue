<template>
    <v-container>
        <div class="text-h3 py-6 mx-10 text-left">Карта объектов охраны</div>
        <div class="mt-15">
            <yandex-map
                            :coords="[68.970663, 33.074918]"
                            :zoom="6"
                            class="ml-15 mt-5"
                        >
                            <ymap-marker 
                                :coords="[61.777394, 34.374897]" 
                                marker-id="1" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 1" 
                            />

                            <ymap-marker 
                                :coords="[67.181987, 32.447921]" 
                                marker-id="2" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 3" 
                            />

                            <ymap-marker 
                                :coords="[68.980524, 33.086416]" 
                                marker-id="3" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 3" 
                            />

                            <ymap-marker 
                                :coords="[67.611388, 33.674364]" 
                                marker-id="4" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 3" 
                            />

                            <ymap-marker 
                                :coords="[69.009464, 33.116519]" 
                                marker-id="5" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 3" 
                            />

                            <ymap-marker 
                                :coords="[67.935776, 32.911757]" 
                                marker-id="6" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 3" 
                            />

                            <ymap-marker 
                                :coords="[67.939934, 32.938284]" 
                                marker-id="7" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 3" 
                            />

                            <ymap-marker 
                                :coords="[68.141772, 33.287549]" 
                                marker-id="8" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 3" 
                            />

                            <ymap-marker 
                                :coords="[68.008522, 35.013904]" 
                                marker-id="9" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 3" 
                            />

                            <ymap-marker 
                                :coords="[68.879721, 33.021603]" 
                                marker-id="10" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 2" 
                            />

                            <ymap-marker 
                                :coords="[67.570844, 33.396569]" 
                                marker-id="11" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 1" 
                            />

                            <ymap-marker 
                                :coords="[67.568902, 33.396982]" 
                                marker-id="12" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 1" 
                            />

                            <ymap-marker 
                                :coords="[68.951290, 33.054436]" 
                                marker-id="13" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 2" 
                            />

                            <ymap-marker 
                                :coords="[68.952449, 33.084826]" 
                                marker-id="14" 
                                :icon="{ color: 'red' }"
                                hint-content="Выезды: 2" 
                            />


            </yandex-map>
        </div>
    </v-container>

</template>

<style scoped>
    .ymap-container {
        width: 1600px;
        height: 700px;
    }
</style>