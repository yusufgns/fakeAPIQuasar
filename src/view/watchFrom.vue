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
    <div class="w-full items-center justify-center flex bg-[#CCCCCC] py-[35px]">
        <div v-for="state in states" class="w-[21cm] h-[29.7cm] bg-white pt-[6px] text-[13px]">
            <p class="bg-gray-200 py-[5px] mx-[9px] border-[5px] border-black text-center font-bold">{{ state.inputTitle }}
            </p>

            <div class="flex items-center justify-center">
                <div class="border-[5px] border-black border-r-[3px]">
                    <div class="bg-red-300 w-[380px] h-[300px]">
                        <img class="max-w-[380px] max-h-[300px]" v-if="state.data1.imageSrc !== null"
                            :src="state.data1.imageSrc">
                    </div>

                    <div class="flex bg-gray-100 border-black border-y-[2px] w-full h-[32px]">
                        <p v-if="state.data1.inputDes !== null">{{
                            state.data1.inputDes }}</p>
                        <p class=" text-red-600 font-bold" v-if="state.data1.countItem !== null">: {{
                            state.data1.countItem }}</p>
                    </div>
                    <div class="w-full h-[20px] bg-gray-500"></div>
                </div>

                <div class="border-[5px] border-black border-l-[3px]">
                    <div class="bg-red-300 w-[380px] h-[300px]">
                        <img class="max-w-[380px] max-h-[300px]" v-if="state.data2.imageSrc !== null"
                            :src="state.data2.imageSrc">
                    </div>
                    <div class="flex bg-gray-100 border-black border-y-[2px] w-full h-[32px]">
                        <p v-if="state.data2.inputDes !== null">{{
                            state.data2.inputDes }}</p>
                        <p class=" text-red-600 font-bold" v-if="state.data2.countItem !== null">: {{
                            state.data2.countItem }}</p>
                    </div>
                    <div class="w-full h-[20px] bg-gray-500"></div>
                </div>
            </div>

            <div class="flex items-center justify-center">
                <div class="border-[5px] border-black border-r-[3px]">
                    <div class="bg-red-300 w-[380px] h-[300px]">
                        <img class="max-w-[380px] max-h-[300px]" v-if="state.data3.imageSrc !== null"
                            :src="state.data3.imageSrc">
                    </div>
                    <div class="flex bg-gray-100 border-black border-y-[2px] w-full h-[32px]">
                        <p v-if="state.data3.inputDes !== null">{{
                            state.data3.inputDes }}</p>
                        <p class=" text-red-600 font-bold" v-if="state.data3.countItem !== null">: {{
                            state.data3.countItem }}</p>
                    </div>
                    <div class="w-full h-[20px] bg-gray-500"></div>
                </div>

                <div class="border-[5px] border-black border-l-[3px]">
                    <div class="bg-red-300 w-[380px] h-[300px]">
                        <img class="max-w-[380px] max-h-[300px]" v-if="state.data4.imageSrc !== null"
                            :src="state.data4.imageSrc">
                    </div>
                    <div class="flex bg-gray-100 border-black border-y-[2px] w-full h-[32px]">
                        <p v-if="state.data4.inputDes !== null">{{
                            state.data4.inputDes }}</p>
                        <p class=" text-red-600 font-bold" v-if="state.data4.countItem !== null">: {{
                            state.data4.countItem }}</p>
                    </div>
                    <div class="w-full h-[20px] bg-gray-500"></div>
                </div>
            </div>

            <div class="flex items-center justify-center">
                <div class="border-[5px] border-black border-r-[3px]">
                    <div class="bg-red-300 w-[380px] h-[300px]">
                        <img class="max-w-[380px] max-h-[300px]" v-if="state.data5.imageSrc !== null"
                            :src="state.data5.imageSrc">
                    </div>
                    <div class="flex bg-gray-100 border-black border-y-[2px] w-full h-[32px]">
                        <p v-if="state.data5.inputDes !== null">{{
                            state.data5.inputDes }}</p>
                        <p class=" text-red-600 font-bold" v-if="state.data5.countItem !== null">: {{
                            state.data5.countItem }}</p>
                </div>
            </div>

            <div class="border-[5px] border-black border-l-[3px]">
                <div class="bg-red-300 w-[380px] h-[300px]">
                    <img class="max-w-[380px] max-h-[300px]" v-if="state.data6.imageSrc !== null"
                            :src="state.data6.imageSrc">
                    </div>
                    <div class="flex bg-gray-100 border-black border-y-[2px] w-full h-[32px]">
                        <p v-if="state.data6.inputDes !== null">{{
                            state.data6.inputDes }}</p>
                        <p class=" text-red-600 font-bold" v-if="state.data6.countItem !== null">: {{
                            state.data6.countItem }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.textS {
    display: block;
    width: 380px;
    flex-wrap: wrap;
    line-height: 13.5px;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>