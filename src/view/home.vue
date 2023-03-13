<script setup>
import { reactive } from 'vue';
import headerMenu from '../components/headerMenu.vue';
import axios from "axios";
import router from "../router/router.js"


axios.get('http://localhost:3000/myData').then(response => {
    states.value = response.data;
    console.log(response.data)
})

const odWatch = (e) => {
    axios.post('http://localhost:3000/watchData', e)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

    router.push("/watchFrom")
}

const states = reactive({});
</script>

<template>
    <headerMenu></headerMenu>
    <div class="flex justify-between px-[25px] pr-[60px]">
        <p>Başlık</p>
        <p>Açıklama</p>
        <p>Hasarlı Parça</p>
        <p class="pr-[10px]">Görüntü</p>
    </div>
    <div v-for="(state, index) in states">
        <div v-for="deneme in state">
            <div class="flex items-center w-full px-[25px] bg-gray-400">
                <div class="flex w-full justify-between px-10 py-2 bg-gray-400">
                    <div>ID {{ deneme.id }}</div>
                    <div @click="odWatch(deneme)" class="bg-blue-200 py-[5px] px-3 rounded-[15px]">Ön İzleme</div>
                </div>
            </div>
            <div v-if="deneme.data1 !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data1.inputTitle !== null" >{{ deneme.data1.inputTitle }}</div>
                <div v-if="deneme.data1.inputDes !== null" >{{ deneme.data1.inputDes }}</div>
                <div v-if="deneme.data1.countItem !== null" >{{ deneme.data1.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div>
                        <img v-if="deneme.data1.imageSrc !== null" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data1.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data2 !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data2.inputTitle !== null">{{ deneme.data2.inputTitle }}</div>
                <div v-if="deneme.data2.inputDes !== null">{{ deneme.data2.inputDes }}</div>
                <div v-if="deneme.data2.countItem !== null">{{ deneme.data2.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div>
                        <img v-if="deneme.data2.imageSrc !== null" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data2.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data3 !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data3.inputTitle">{{ deneme.data3.inputTitle }}</div>
                <div v-if="deneme.data3.inputDes">{{ deneme.data3.inputDes }}</div>
                <div v-if="deneme.data3.countItem">{{ deneme.data3.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div>
                        <img v-if="deneme.data3.imageSrc" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data3.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data4 !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data4.inputTitle">{{ deneme.data4.inputTitle }}</div>
                <div v-if="deneme.data4.inputDes">{{ deneme.data4.inputDes }}</div>
                <div v-if="deneme.data4.countItem">{{ deneme.data4.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div>
                        <img v-if="deneme.data4.imageSrc" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data4.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data5 !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data5.inputTitle">{{ deneme.data5.inputTitle }}</div>
                <div v-if="deneme.data5.inputDes">{{ deneme.data5.inputDes }}</div>
                <div v-if="deneme.data5.countItem">{{ deneme.data5.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div>
                        <img v-if="deneme.data5.imageSrc" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data5.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data6 !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data6.inputTitle">{{ deneme.data6.inputTitle }}</div>
                <div v-if="deneme.data6.inputDes">{{ deneme.data6.inputDes }}</div>
                <div v-if="deneme.data6.countItem">{{ deneme.data6.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div>
                        <img v-if="deneme.data6.imageSrc" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data6.imageSrc">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>