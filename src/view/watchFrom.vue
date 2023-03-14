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

            <div class="watchMainDiv">
                <div class="watchRborder">
                    <div class="watchIMG">
                        <img class="imgWH" v-if="state.data1.imageSrc !== null"
                            :src="state.data1.imageSrc">
                    </div>

                    <div class=" watchText w-[380px] w-max-[380px] h-[45px]">
                        <p class="textS" v-if="state.data1.inputDes !== null">{{
                            state.data1.inputDes }}</p>
                        <p class="textSX textRed" v-if="state.data1.countItem !== null">: {{
                            state.data1.countItem }}</p>
                    </div>
                    <div class="watchWfull"></div>
                </div>

                <div class="watchLborder">
                    <div class="watchIMG">
                        <img class="imgWH" v-if="state.data2.imageSrc !== null"
                            :src="state.data2.imageSrc">
                    </div>
                    <div class=" watchText h-[45px]">
                        <p class="textS" v-if="state.data2.inputDes !== null">{{
                            state.data2.inputDes }}</p>
                        <p class="textSX textRed" v-if="state.data2.countItem !== null">: {{
                            state.data2.countItem }}</p>
                    </div>
                    <div class="watchWfull"></div>
                </div>
            </div>

            <div class="watchMainDiv">
                <div class="watchRborder">
                    <div class="watchIMG">
                        <img class="imgWH" v-if="state.data3.imageSrc !== null"
                            :src="state.data3.imageSrc">
                    </div>
                    <div class=" watchText h-[45px]">
                        <p class="textS" v-if="state.data3.inputDes !== null">{{
                            state.data3.inputDes }}</p>
                        <p class="textSX textRed" v-if="state.data3.countItem !== null">: {{
                            state.data3.countItem }}</p>
                    </div>
                    <div class="watchWfull"></div>
                </div>

                <div class="watchLborder">
                    <div class="watchIMG">
                        <img class="imgWH" v-if="state.data4.imageSrc !== null"
                            :src="state.data4.imageSrc">
                    </div>
                    <div class=" watchText h-[45px]">
                        <p class="textS" v-if="state.data4.inputDes !== null">{{
                            state.data4.inputDes }}</p>
                        <p class="textSX textRed" v-if="state.data4.countItem !== null">: {{
                            state.data4.countItem }}</p>
                    </div>
                    <div class="watchWfull"></div>
                </div>
            </div>

            <div class="watchMainDiv">
                <div class="watchRborder">
                    <div class="watchIMG">
                        <img class="imgWH" v-if="state.data5.imageSrc !== null"
                            :src="state.data5.imageSrc">
                    </div>
                    <div class="watchText h-[45px]">
                        <p class="textS" v-if="state.data5.inputDes !== null">{{
                            state.data5.inputDes }}</p>
                        <p class="textSX textRed" v-if="state.data5.countItem !== null">: {{
                            state.data5.countItem }}</p>
                </div>
            </div>

            <div class="watchLborder">
                <div class="watchIMG">
                    <img class="imgWH" v-if="state.data6.imageSrc !== null"
                            :src="state.data6.imageSrc">
                    </div>
                    <div class=" watchText h-[45px]">
                        <p class="textS" v-if="state.data6.inputDes !== null">{{
                            state.data6.inputDes }}</p>
                        <p class="textSX textRed" v-if="state.data6.countItem !== null">: {{
                            state.data6.countItem }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.textS {
    flex-wrap: wrap;
    word-break: break-all;
}

.imgWH {
    max-height: 300px;
    max-width: 380px;
}

.textRed {
    color: red;
    font-weight: bold;
}

.textSX {
    display: block;
    width: 55px;
    line-height: 13.5px;
    word-break: break-all;
}
</style>