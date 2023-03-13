<script setup>
import { reactive } from 'vue';
import headerMenu from '../components/headerMenu.vue';
import axios from "axios";


axios.get('http://localhost:3000/watchData').then(response => {
    states.value = response.data;
    console.log(response.data)
})


const states = reactive({});
</script>

<template>
    <headerMenu></headerMenu>
    <div v-for="state in states">
        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" v-if="state.data1.imageSrc !== null" :src="state.data1.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]" v-if="state.data1.inputTitle !== null">Başlık : {{ state.data1.inputTitle }}</p>
                <p class="mb-[15px]" v-if="state.data1.inputDes !== null">Açıklama : {{ state.data1.inputDes }}</p>
                <p class="mb-[15px]" v-if="state.data1.countItem !== null">Hasarlı Ürün Sayısı : {{ state.data1.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" v-if="state.data2.imageSrc !== null" :src="state.data2.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]" v-if="state.data2.inputTitle !== null">Başlık : {{ state.data2.inputTitle }}</p>
                <p class="mb-[15px]" v-if="state.data2.inputDes !== null">Açıklama : {{ state.data2.inputDes }}</p>
                <p class="mb-[15px]" v-if="state.data2.countItem !== null">Hasarlı Ürün Sayısı : {{ state.data2.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" v-if="state.data3.imageSrc !== null" :src="state.data3.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]" v-if="state.data3.inputTitle !== null">Başlık : {{ state.data3.inputTitle }}</p>
                <p class="mb-[15px]" v-if="state.data3.inputDes !== null">Açıklama : {{ state.data3.inputDes }}</p>
                <p class="mb-[15px]" v-if="state.data3.countItem !== null">Hasarlı Ürün Sayısı : {{ state.data3.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" v-if="state.data4.imageSrc !== null" :src="state.data4.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]" v-if="state.data4.inputTitle !== null">Başlık : {{ state.data4.inputTitle }}</p>
                <p class="mb-[15px]" v-if="state.data4.inputDes !== null" >Açıklama : {{ state.data4.inputDes }}</p>
                <p class="mb-[15px]" v-if="state.data4.countItem !== null">Hasarlı Ürün Sayısı : {{ state.data4.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" v-if="state.data5.inputTitle !== null" :src="state.data5.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]" v-if="state.data5.inputTitle !== null">Başlık : {{ state.data5.inputTitle }}</p>
                <p class="mb-[15px]" v-if="state.data5.inputDes !== null">Açıklama : {{ state.data5.inputDes }}</p>
                <p class="mb-[15px]" v-if="state.data5.countItem !== null">Hasarlı Ürün Sayısı : {{ state.data5.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" v-if="state.data6.imageSrc !== null" :src="state.data6.imageSrc">
            </div>

            <div class="ml-[50px]" v-if="state.data6 !== null">
                <p class="mb-[15px]" v-if="state.data6.inputTitle !== null">Başlık : {{ state.data6.inputTitle }}</p>
                <p class="mb-[15px]" v-if="state.data6.inputDes !== null">Açıklama : {{ state.data6.inputDes }}</p>
                <p class="mb-[15px]" v-if="state.data6.countItem !== null">Hasarlı Ürün Sayısı : {{ state.data6.countItem }}</p>
            </div>
        </div>
    </div>
</template>