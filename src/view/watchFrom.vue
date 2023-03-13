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
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" :src="state.data1.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]">Başlık : {{ state.data1.inputTitle }}</p>
                <p class="mb-[15px]">Açıklama : {{ state.data1.inputDes }}</p>
                <p class="mb-[15px]">Hasarlı Ürün Sayısı : {{ state.data1.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" :src="state.data1.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]">Başlık : {{ state.data1.inputTitle }}</p>
                <p class="mb-[15px]">Açıklama : {{ state.data1.inputDes }}</p>
                <p class="mb-[15px]">Hasarlı Ürün Sayısı : {{ state.data1.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" :src="state.data1.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]">Başlık : {{ state.data1.inputTitle }}</p>
                <p class="mb-[15px]">Açıklama : {{ state.data1.inputDes }}</p>
                <p class="mb-[15px]">Hasarlı Ürün Sayısı : {{ state.data1.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" :src="state.data1.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]">Başlık : {{ state.data1.inputTitle }}</p>
                <p class="mb-[15px]">Açıklama : {{ state.data1.inputDes }}</p>
                <p class="mb-[15px]">Hasarlı Ürün Sayısı : {{ state.data1.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" :src="state.data1.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]">Başlık : {{ state.data1.inputTitle }}</p>
                <p class="mb-[15px]">Açıklama : {{ state.data1.inputDes }}</p>
                <p class="mb-[15px]">Hasarlı Ürün Sayısı : {{ state.data1.countItem }}</p>
            </div>
        </div>

        <div class="flex px-[15px] mb-[40px]">
            <div>
                <img class="w-[300px] h-[200px] max-w-[300px] max-h-[200px]" :src="state.data1.imageSrc">
            </div>

            <div class="ml-[50px]">
                <p class="mb-[15px]">Başlık : {{ state.data1.inputTitle }}</p>
                <p class="mb-[15px]">Açıklama : {{ state.data1.inputDes }}</p>
                <p class="mb-[15px]">Hasarlı Ürün Sayısı : {{ state.data1.countItem }}</p>
            </div>
        </div>
    </div>
</template>