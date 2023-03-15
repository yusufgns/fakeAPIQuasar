<template>
    <div class="flex">
        <div class="w-[40%] break-words relative">
            <div class="bg-red-600 h-[25px] flex fixed w-[40%] items-center justify-center z-[999]">
                <p @click="goToList">Liste</p>
            </div>

            <div class="pt-[25px] w-full h-screen flex justify-center bg-blue-200">
                <div>
                    <div class="q-gutter-y-md column" style="max-width: 300px">

                        <!--Data6-->
                        <q-form v-if="fullData.data6.imageSrc == null && fullData.data6.inputCount == null"
                            @reset="onReset(e, 'data6')" class="q-gutter-md flex flex-col">
                            DATA 6
                            <div>
                                <label class=" mt-[50px]">
                                    <div class="itemIMG relative">
                                        <img class="w-[300px] h-[200px]" :src="compData.data6.imageSrc"
                                            v-if="compData.data6.imageSrc" />
                                        <p class="top-[84px] left-[90px] absolute">
                                        <p v-if="!fileName" class="font-bold text-[22px]">Dosya Seç</p>
                                        </p>
                                    </div>
                                    <p class="absolute">{{ fileName }}</p>
                                    <input class="mt-[15px] inputFile" type="file" @change="e => showImage(e, 'data6')">
                                </label>
                            </div>

                            <q-input v-if="!val" filled type="textarea" v-model="compData.data6.inputDes" :max-length="5"
                                label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="val" />
                                Açıklama Girmek istemiyorum
                            </label>

                            <q-input v-model="compData.data6.inputCount" filled type="number"
                                label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                                ]" />
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                            <p @click="onSubmit(e, 'data6')"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Gönder</p>
                        </q-form>

                        <!--Data5-->
                        <q-form
                            v-if="fullData.data6.imageSrc !== null && fullData.data6.inputCount !== null && fullData.data5.imageSrc == null && fullData.data5.inputCount == null"
                            @reset="onReset(e, 'data5')" class="q-gutter-md flex flex-col">
                            DATA 5
                            <div>
                                <label class=" mt-[50px]">
                                    <div class="itemIMG relative">
                                        <img class="w-[300px] h-[200px]" :src="compData.data5.imageSrc"
                                            v-if="compData.data5.imageSrc" />
                                        <p class="top-[84px] left-[90px] absolute">
                                        <p v-if="!fileName" class="font-bold text-[22px]">Dosya Seç</p>
                                        </p>
                                    </div>
                                    <p class="absolute">{{ fileName }}</p>
                                    <input class="mt-[15px] inputFile" type="file" @change="e => showImage(e, 'data5')">
                                </label>
                            </div>

                            <q-input v-if="!val" filled type="textarea" v-model="compData.data5.inputDes" :max-length="5"
                                label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="val" />
                                Açıklama Girmek istemiyorum
                            </label>

                            <q-input v-model="compData.data5.inputCount" filled type="number"
                                label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                                ]" />
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                            <p @click="onSubmit(e, 'data5')"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Gönder</p>
                        </q-form>

                        <!--Data4-->
                        <q-form
                            v-if="fullData.data5.imageSrc !== null && fullData.data5.inputCount !== null && fullData.data4.imageSrc == null && fullData.data4.inputCount == null"
                            @reset="onReset(e, 'data4')" class="q-gutter-md flex flex-col">
                            DATA 4
                            <div>
                                <label class=" mt-[50px]">
                                    <div class="itemIMG relative">
                                        <img class="w-[300px] h-[200px]" :src="compData.data4.imageSrc"
                                            v-if="compData.data4.imageSrc" />
                                        <p class="top-[84px] left-[90px] absolute">
                                        <p v-if="!fileName" class="font-bold text-[22px]">Dosya Seç</p>
                                        </p>
                                    </div>
                                    <p class="absolute">{{ fileName }}</p>
                                    <input class="mt-[15px] inputFile" type="file" @change="e => showImage(e, 'data4')">
                                </label>
                            </div>

                            <q-input v-if="!val" filled type="textarea" v-model="compData.data4.inputDes" :max-length="5"
                                label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="val" />
                                Açıklama Girmek istemiyorum
                            </label>

                            <q-input v-model="compData.data4.inputCount" filled type="number"
                                label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                                ]" />
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                            <p @click="onSubmit(e, 'data4')"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Gönder</p>
                        </q-form>

                        <!--Data3-->
                        <q-form
                            v-if="fullData.data4.imageSrc !== null && fullData.data4.inputCount !== null && fullData.data3.imageSrc == null && fullData.data3.inputCount == null"
                            @reset="onReset(e, 'data3')" class="q-gutter-md flex flex-col">
                            DATA 3
                            <div>
                                <label class=" mt-[50px]">
                                    <div class="itemIMG relative">
                                        <img class="w-[300px] h-[200px]" :src="compData.data3.imageSrc"
                                            v-if="compData.data3.imageSrc" />
                                        <p class="top-[84px] left-[90px] absolute">
                                        <p v-if="!fileName" class="font-bold text-[22px]">Dosya Seç</p>
                                        </p>
                                    </div>
                                    <p class="absolute">{{ fileName }}</p>
                                    <input class="mt-[15px] inputFile" type="file" @change="e => showImage(e, 'data3')">
                                </label>
                            </div>

                            <q-input v-if="!val" filled type="textarea" v-model="compData.data3.inputDes" :max-length="5"
                                label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="val" />
                                Açıklama Girmek istemiyorum
                            </label>

                            <q-input v-model="compData.data3.inputCount" filled type="number"
                                label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                                ]" />
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                            <p @click="onSubmit(e, 'data3')"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Gönder</p>
                        </q-form>

                        <q-form
                            v-if="fullData.data3.imageSrc !== null && fullData.data3.inputCount !== null && fullData.data2.imageSrc == null && fullData.data2.inputCount == null"
                            @reset="onReset(e, 'data4')" class="q-gutter-md flex flex-col">
                            DATA 2
                            <div>
                                <label class=" mt-[50px]">
                                    <div class="itemIMG relative">
                                        <img class="w-[300px] h-[200px]" :src="compData.data3.imageSrc"
                                            v-if="compData.data3.imageSrc" />
                                        <p class="top-[84px] left-[90px] absolute">
                                        <p v-if="!fileName" class="font-bold text-[22px]">Dosya Seç</p>
                                        </p>
                                    </div>
                                    <p class="absolute">{{ fileName }}</p>
                                    <input class="mt-[15px] inputFile" type="file" @change="e => showImage(e, 'data3')">
                                </label>
                            </div>

                            <q-input v-if="!val" filled type="textarea" v-model="compData.data3.inputDes" :max-length="5"
                                label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="val" />
                                Açıklama Girmek istemiyorum
                            </label>

                            <q-input v-model="compData.data3.inputCount" filled type="number"
                                label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                                ]" />
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                            <p @click="onSubmit(e, 'data3')"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Gönder</p>
                        </q-form>
                    </div>
                </div>

                <div class="flex absolute bottom-8 justify-center">
                    <div class="flex">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data6.imageSrc"
                            v-if="fullData.data6.imageSrc">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data5.imageSrc"
                            v-if="fullData.data5.imageSrc">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data4.imageSrc"
                            v-if="fullData.data4.imageSrc">
                    </div>

                    <div class="flex">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data3.imageSrc"
                            v-if="fullData.data3.imageSrc">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data2.imageSrc"
                            v-if="fullData.data2.imageSrc">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data1.imageSrc"
                            v-if="fullData.data1.imageSrc">
                    </div>
                </div>
            </div>


        </div>
        <div class="w-[60%] fixed right-0">
            <watchList></watchList>
        </div>
    </div>
</template>

<style scoped>
.itemIMG {
    height: 200px;
    width: 300px;
    max-height: 200px;
    max-width: 300px;
    background-color: #9FB7D4;
}

.inputFile {
    opacity: 0;
}
</style>

<script setup>
import watchList from '../components/watchList.vue';
import router from '../router/router';
import { ref, reactive } from 'vue'

const val = ref(true)

const goToList = () => {
    router.push("/")
}

const fileName = ref("")

const compData = reactive({
    data1: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data2: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data3: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data4: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data5: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data6: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    }
});

const showImage = (event, dataKey) => {
    fileName.value = event.target.files[0].name
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        compData[dataKey].imageSrc = event.target.result;
    };
    reader.readAsDataURL(file);
}

const onSubmit = async (e, dataKey) => {
    fullData[dataKey].inputDes = compData[dataKey].inputDes;
    fullData[dataKey].inputCount = compData[dataKey].inputCount;
    fullData[dataKey].imageSrc = compData[dataKey].imageSrc;

    compData[dataKey].imageSrc = null
    compData[dataKey].inputCount = null
    compData[dataKey].inputDes = null
    fileName.value = ""
}

const onReset = (e, dataKey) => {
    fullData[dataKey].inputCount = null
    fullData[dataKey].inputDes = null
    fullData[dataKey].imageSrc = null
    fileName.value = ""
}

const fullData = reactive({
    inputTitle: null,
    data1: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data2: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data3: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data4: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data5: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    },
    data6: {
        imageSrc: null,
        inputDes: null,
        inputCount: null
    }
})

</script>