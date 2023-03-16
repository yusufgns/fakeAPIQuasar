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
                            <div @click="watchToList(dataArrays)">Ön İzleme</div>
                        </div>

                        <div v-if="dataArrays.data1.imageSrc !== null"
                            class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                            <div>{{ dataArrays.data1.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data1.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data1.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data2.imageSrc !== null"
                            class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
                            <div>{{ dataArrays.data2.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data2.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data2.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data3.imageSrc !== null"
                            class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                            <div>{{ dataArrays.data3.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data3.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data3.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data4.imageSrc !== null"
                            class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
                            <div>{{ dataArrays.data4.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data4.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data4.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data5.imageSrc !== null"
                            class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                            <div>{{ dataArrays.data5.inputDes }}</div>
                            <div class="flex items-center justify-center">
                                <div>{{ dataArrays.data5.countItem }}</div>
                                <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                                    <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]"
                                        :src="dataArrays.data5.imageSrc">
                                </div>
                            </div>
                        </div>

                        <div v-if="dataArrays.data6.imageSrc !== null"
                            class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
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

        <!--Watch A4 Form-->
        <div class="w-[60%] h-full fixed right-0 bg-gray-300">
            <div v-if="watchForm.inputTitle !== null" class="w-full items-center justify-center flex py-[10px]">
                <div class="w-[21cm] h-[29.7cm] bg-white text-[13px] px-[42px]">
                    <p class="bg-gray-200 py-[5px] mx-[9px] border-[5px] border-black text-center font-bold">{{
                        watchForm.inputTitle }}
                    </p>

                    <div class="watchMainDiv">
                        <div class="watchRborder">
                            <div class="watchIMG">
                                <img class="imgWH" :src="watchForm.data1.imageSrc">
                            </div>

                            <div class=" watchText w-[320px] w-max-[320px] h-[45px]">
                                <p class="textS">{{
                                    watchForm.data1.inputDes }}</p>
                                <p class="textSX textRed">: {{
                                    watchForm.data1.countItem }}</p>
                            </div>
                            <div class="watchWfull"></div>
                        </div>

                        <div class="watchLborder">
                            <div class="watchIMG">
                                <img class="imgWH" :src="watchForm.data2.imageSrc">
                            </div>
                            <div class=" watchText h-[45px] w-[320px]">
                                <p class="textS">{{
                                    watchForm.data2.inputDes }}</p>
                                <p class="textSX textRed">: {{
                                    watchForm.data2.countItem }}</p>
                            </div>
                            <div class="watchWfull"></div>
                        </div>
                    </div>

                    <div class="watchMainDiv">
                        <div class="watchRborder">
                            <div class="watchIMG">
                                <img class="imgWH" :src="watchForm.data3.imageSrc">
                            </div>
                            <div class=" watchText h-[45px] w-[320px]">
                                <p class="textS">{{
                                    watchForm.data3.inputDes }}</p>
                                <p class="textSX textRed">: {{
                                    watchForm.data3.countItem }}</p>
                            </div>
                            <div class="watchWfull"></div>
                        </div>

                        <div class="watchLborder">
                            <div class="watchIMG">
                                <img class="imgWH" :src="watchForm.data4.imageSrc">
                            </div>
                            <div class=" watchText h-[45px] w-[320px]">
                                <p class="textS">{{
                                    watchForm.data4.inputDes }}</p>
                                <p class="textSX textRed">: {{
                                    watchForm.data4.countItem }}</p>
                            </div>
                            <div class="watchWfull"></div>
                        </div>
                    </div>

                    <div class="watchMainDiv">
                        <div class="watchRborder">
                            <div class="watchIMG">
                                <img class="imgWH" :src="watchForm.data5.imageSrc">
                            </div>
                            <div class="watchText h-[45px] w-[320px]">
                                <p class="textS">{{
                                    watchForm.data5.inputDes }}</p>
                                <p class="textSX textRed">: {{
                                    watchForm.data5.countItem }}</p>
                            </div>
                        </div>

                        <div class="watchLborder">
                            <div class="watchIMG">
                                <img class="imgWH" :src="watchForm.data6.imageSrc">
                            </div>
                            <div class=" watchText w-[320px] h-[45px]">
                                <p class="textS">{{
                                    watchForm.data6.inputDes }}</p>
                                <p class="textSX textRed">: {{
                                    watchForm.data6.countItem }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

const watchForm = reactive({
    inputTitle: null,
    data1: null,
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
})

const watchToList = (dataArrays) => {
    watchForm.inputTitle = dataArrays.inputTitle
    watchForm.data1 = dataArrays.data1
    watchForm.data2 = dataArrays.data2
    watchForm.data3 = dataArrays.data3
    watchForm.data4 = dataArrays.data4
    watchForm.data5 = dataArrays.data5
    watchForm.data6 = dataArrays.data6
}

onMounted(async () => {
    const response = await axios.get('http://localhost:3000/myData');
    myData.dataArrays = Object.values(response.data).reverse();
});

const goToAdd = () => {
    router.push("/listAdd")
}
</script>

<style scoped>
.textS {
    flex-wrap: wrap;
    word-break: break-all;
    width: 320px;
    max-width: 320px;
}

.watchIMG {
    width: 320px;
    max-width: 320px;
    height: 210px;
    max-height: 210px;
    background-color: rgba(gray, 0.5);
}

.imgWH {
    max-height: 210px;
    max-width: 320px;
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