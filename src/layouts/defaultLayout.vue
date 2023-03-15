<template>
    <div class="flex">
        <div class="w-[40%] break-words relative">
            <div class="bg-gray-100 h-[40px] flex fixed w-[40%] items-center justify-center z-[999]">
                    <p @click="goToAdd" class="bg-gray-300 py-[1px] px-[10px] rounded-[10px] text-[20px]">+ Ekle</p>
            </div>

            <div class="mt-[45px] mb-[25px] h-screen px-[15px] py-[15px]">
                <div class="w-full h-screen">
                    <div v-for="dataArrays in myData.dataArrays" class="mb-[25px]">
                        <div class="text-center bg-gray-400 py-[5px] flex justify-between px-[10px]">
                            <div>Sil</div>
                            {{ dataArrays.inputTitle }}
                            <div>Ön İzleme</div>
                        </div>

                        <div v-if="dataArrays.data1.imageSrc !== null" class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                            <div>{{ dataArrays.data1.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data1.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data1.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data2.imageSrc !== null" class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
                            <div>{{ dataArrays.data2.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data2.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data2.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data3.imageSrc !== null" class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                            <div>{{ dataArrays.data3.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data3.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data3.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data4.imageSrc !== null" class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
                            <div>{{ dataArrays.data4.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data4.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data4.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data5.imageSrc !== null" class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                            <div>{{ dataArrays.data5.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data5.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data5.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data6.imageSrc !== null" class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
                            <div>{{ dataArrays.data6.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data6.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data6.imageSrc">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[60%] fixed right-0">
            <watchList></watchList>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import axios from "axios";
import watchList from "../components/watchList.vue";
import router from "../router/router";

const myData = reactive({
    dataArrays: []
});

onMounted(async () => {
    const response = await axios.get('http://localhost:3000/myData');
    myData.dataArrays = Object.values(response.data).reverse();
});

const goToAdd = () => {
    router.push("/listAdd")
}
</script>