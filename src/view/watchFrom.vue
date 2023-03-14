<script setup>
import { reactive } from 'vue';
import axios from "axios";
import router from '../router/router';


axios.get('http://localhost:3000/watchData').then(response => {
    states.value = response.data;
    console.log(response.data)
})

const homee = (e) => {
    console.log(e)
    router.push("/")
}

const states = reactive({});
</script>

<template>
    <div class="absolute bg-gray-400 py-[5px] px-[10px] rounded-sm top-[50px] left-[50px]" @click="homee">
        HOME
    </div>
    <div class="w-full items-center justify-center flex bg-[#CCCCCC]">
        <div v-for="state in states" class="w-[21cm] h-[29.7cm] bg-white">
            <p class="bg-gray-200 py-[5px] text-center font-bold">{{ state.inputTitle }}</p>

            <div v-if="state.data1.imageSrc !== null || state.data1.inputDes !== null"
                class="flex px-[10px] mb-[10px] mt-[10px]">
                <div class="w-[260px] h-[170px] max-w-[300px] max-h-[200px] bg-gray-200">
                    <img class="w-[260px] h-[170px] max-w-[300px] max-h-[200px]" v-if="state.data1.imageSrc !== null"
                        :src="state.data1.imageSrc">
                    <p class="textS text-red-600 font-bold" v-if="state.data1.countItem !== null">{{
                        state.data1.countItem }} </p>
                </div>
                <div>
                    <div class="flex w-[500px] h-[170px] flex-col ml-[10px]">
                        <p class="textS font-bold px-[3px] py-[3px]" v-if="state.data1.inputDes !== null">{{
                            state.data1.inputDes }}</p>
                    </div>
                </div>
            </div>

            <div v-if="state.data2.imageSrc !== null && state.data2.inputDes !== null" class="flex px-[10px] mb-[10px]">
                <div class="w-[260px] h-[170px] max-w-[300px] max-h-[200px] bg-gray-200">
                    <img class="w-[260px] h-[170px] max-w-[300px] max-h-[200px]" v-if="state.data2.imageSrc !== null"
                        :src="state.data2.imageSrc">
                    <p class="textS text-red-600 font-bold" v-if="state.data2.countItem !== null">{{
                        state.data2.countItem }}</p>
                </div>
                <div>
                    <div class="flex w-[500px] h-[170px] flex-col ml-[10px]">
                        <p class="font-bold px-[3px] py-[3px]" v-if="state.data2.inputDes !== null">{{
                            state.data2.inputDes }}</p>
                    </div>
                </div>
            </div>

            <div v-if="state.data3.imageSrc !== null  state.data3.inputDes !== null" class="flex px-[10px] mb-[10px]">
                <div class="w-[260px] h-[170px] max-w-[300px] max-h-[200px] bg-gray-200">
                    <img class="w-[260px] h-[170px] max-w-[300px] max-h-[200px]" v-if="state.data3.imageSrc !== null"
                        :src="state.data3.imageSrc">
                    <p class="textS text-red-600 font-bold" v-if="state.data3.countItem !== null">{{
                        state.data3.countItem }}</p>
                </div>
                <div>
                    <div class="flex w-[500px] h-[170px] flex-col ml-[10px]">
                        <p class="textS font-bold px-[3px] py-[3px]" v-if="state.data3.inputDes !== null">{{
                            state.data3.inputDes }}</p>
                    </div>
                </div>
            </div>

            <div v-if="state.data4.imageSrc !== null  state.data4.inputDes !== null" class="flex px-[10px] mb-[10px]">
                <div class="w-[260px] h-[170px] max-w-[300px] max-h-[200px] bg-gray-200">
                    <img class="w-[260px] h-[170px] max-w-[300px] max-h-[200px]" v-if="state.data4.imageSrc !== null"
                        :src="state.data4.imageSrc">
                    <p class="textS text-red-600 font-bold" v-if="state.data4.countItem !== null">{{
                        state.data4.countItem }}</p>
                </div>
                <div>
                    <div class="flex w-[500px] h-[170px] flex-col ml-[10px]">
                        <p class="font-bold px-[3px] py-[3px]" v-if="state.data4.inputDes !== null">{{
                            state.data4.inputDes }}</p>

                    </div>
                </div>
            </div>

            <div v-if="state.data5.imageSrc !== null  state.data5.inputDes !== null" class="flex px-[10px] mb-[10px]">
                <div class="w-[260px] h-[170px] max-w-[300px] max-h-[200px] bg-gray-200">
                    <img class="w-[260px] h-[170px] max-w-[300px] max-h-[200px]" v-if="state.data5.imageSrc !== null"
                        :src="state.data5.imageSrc">
                    <p class="textS text-red-600 font-bold" v-if="state.data5.countItem !== null">{{
                        state.data5.countItem }}</p>
                </div>
                <div>
                    <div class="flex w-[500px] h-[170px] flex-col ml-[10px]">
                        <p class="font-bold px-[3px] py-[3px]" v-if="state.data5.inputDes !== null">{{
                            state.data5.inputDes }}</p>

                    </div>
                </div>
            </div>

            <div v-if="state.data6.imageSrc !== null  state.data6.inputDes !== null" class="flex px-[10px] mb-[10px]">
                <div class="w-[260px] h-[170px] max-w-[300px] max-h-[200px] bg-gray-200">
                    <img class="w-[260px] h-[170px] max-w-[300px] max-h-[200px]" v-if="state.data6.imageSrc !== null"
                        :src="state.data6.imageSrc">
                    <p class="textS text-red-600 font-bold" v-if="state.data6.countItem !== null">{{
                        state.data6.countItem }}</p>
                </div>
                <div>
                    <div class="flex w-[500px] h-[170px] flex-col ml-[10px]">
                        <p class="font-bold px-[3px] py-[3px]" v-if="state.data6.inputDes !== null">{{
                            state.data6.inputDes }}</p>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.textS {
    display: block;
    width: 500px;
    flex-wrap: wrap;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>