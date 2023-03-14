<script setup>
import { reactive } from 'vue';
import headerMenu from '../components/headerMenu.vue';
import axios from "axios";
import router from "../router/router.js"


axios.get('http://localhost:3000/myData').then(response => {
    states.value = response.data;
    console.log(response.data)
    console.log(states)
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
    <div v-if="states.value.length !== 0" class="flex justify-between px-[25px] pr-[60px]">
        <p>Açıklama</p>
        <p class="ml-[950px]">Hasarlı Parça</p>
        <p></p>
    </div>

    <div v-if="states.value.length == 0">
        New Item dediğinizde size zorunlu olarak inputlara ekleme yapmanızı istiyen bir sistem oluşturdum. <br>
        Bu sistem sayesinde 6 adet data girme zorunluluğu getirdim. Tek zorunlu olarak istenmiyen data image.
    </div>
    <div v-for="(state, index) in states">
        <div v-for="deneme in state">
            <div class="flex items-center w-full px-[25px] bg-gray-400 border-b-[2px]">
                <div class="flex w-full justify-between px-10 py-2 bg-gray-400">
                    <div>{{ deneme.inputTitle }}</div>
                    <div @click="odWatch(deneme)" class="bg-blue-200 py-[5px] px-3 rounded-[15px]">Ön İzleme</div>
                </div>
            </div>
            <div v-if="deneme.data1.imageSrc !== null && deneme.data1.inputDes !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data1.inputDes !== null" class="redundant-text  w-[250px] max-w-[1150px] h-[80px]" >{{ deneme.data1.inputDes }}</div>
                <div v-if="deneme.data1.countItem !== null" >{{ deneme.data1.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div class="w-[150px] h-[100px] max-w-[150px] max-h-[100px] bg-gray-300">
                        <img v-if="deneme.data1.imageSrc !== null" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data1.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data2.imageSrc !== null && deneme.data2.inputDes !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data2.inputDes !== null">{{ deneme.data2.inputDes }}</div>
                <div v-if="deneme.data2.countItem !== null">{{ deneme.data2.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div class="w-[150px] h-[100px] max-w-[150px] max-h-[100px] bg-gray-300">
                        <img v-if="deneme.data2.imageSrc !== null" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data2.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data3.imageSrc !== null && deneme.data3.inputDes !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data3.inputDes !== null">{{ deneme.data3.inputDes }}</div>
                <div v-if="deneme.data3.countItem !== null">{{ deneme.data3.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div class="w-[150px] h-[100px] max-w-[150px] max-h-[100px] bg-gray-300">
                        <img v-if="deneme.data3.imageSrc !== null" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data3.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data4.imageSrc !== null && deneme.data4.inputDes !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data4.inputDes !== null">{{ deneme.data4.inputDes }}</div>
                <div v-if="deneme.data4.countItem !== null">{{ deneme.data4.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div class="w-[150px] h-[100px] max-w-[150px] max-h-[100px] bg-gray-300">
                        <img v-if="deneme.data4.imageSrc !== null" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data4.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data5.imageSrc !== null && deneme.data5.inputDes !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data5.inputDes !== null">{{ deneme.data5.inputDes }}</div>
                <div v-if="deneme.data5.countItem !== null">{{ deneme.data5.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div class="w-[150px] h-[100px] max-w-[150px] max-h-[100px] bg-gray-300">
                        <img v-if="deneme.data5.imageSrc !== null" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data5.imageSrc">
                    </div>
                </div>
            </div>

            <div v-if="deneme.data6.imageSrc !== null && deneme.data6.inputDes !== null" class="flex items-center justify-between w-full bg-gray-500 px-[25px] border-x-gray-500">
                <div v-if="deneme.data6.inputDes !== null">{{ deneme.data6.inputDes }}</div>
                <div v-if="deneme.data6.countItem !== null">{{ deneme.data6.countItem }}</div>
                <div class="bg-gray-500 w-[150px] h-[120px] max-w-[150px] max-h-[120px] flex items-center">
                    <div class="w-[150px] h-[100px] max-w-[150px] max-h-[100px] bg-gray-300">
                        <img v-if="deneme.data6.imageSrc !== null" class="w-[150px] h-[100px] max-w-[150px] max-h-[100px]" :src="deneme.data6.imageSrc">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.redundant-text {
  display: block;
  width: 1200px;
  flex-wrap: wrap;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>