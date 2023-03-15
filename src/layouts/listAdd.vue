<template>
    <div class="flex">
        <div class="w-[40%] break-words relative ">
            <div class="bg-gray-100 h-[40px] flex fixed w-[40%] items-center justify-center z-[999]">
                <p @click="goToList" class="bg-gray-300 py-[1px] px-[10px] rounded-[10px] text-[20px]">Liste</p>
            </div>

            <div class="pt-[45px] w-full h-[100vh] flex justify-center">
                <div>
                    <div class="q-gutter-y-md column" style="max-width: 300px">

                        <div class="h-[56px]">
                            <q-input v-if="fullData.inputTitle == null" v-model="compData.inputTitle" filled type="text"
                                label="Lütfen Başlık Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Başlık Giriniz'
                                ]" />
                        </div>

                        <!--Data1-->
                        <q-form v-if="fullData.data1.imageSrc == null" @reset="onReset(e, 'data1')"
                            class="q-gutter-md flex flex-col">
                            Liste 1/6
                            <div>
                                <label class=" mt-[50px]">
                                    <div class="itemIMG relative">
                                        <img class="w-[300px] h-[200px]" :src="compData.data1.imageSrc"
                                            v-if="compData.data1.imageSrc" />
                                        <p class="top-[84px] left-[90px] absolute">
                                        <p v-if="!fileName" class="font-bold text-[22px]">Dosya Seç</p>
                                        </p>
                                    </div>
                                    <p class="absolute">{{ fileName }}</p>
                                    <input class="mt-[15px] inputFile" type="file" @change="e => showImage(e, 'data1')">
                                </label>
                            </div>

                            <q-input v-if="!val" filled type="textarea" v-model="compData.data1.inputDes" :max-length="5"
                                label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="val" />
                                Açıklama Girmek istemiyorum
                            </label>

                            <q-input v-model="compData.data1.inputCount" filled type="number"
                                label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                                ]" />
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />

                            <p @click="onSubmit(e, 'data1'); showInput();"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Sepete Ekle</p>
                            <div class="bg-blue-100 text-center py-[10px] px-[10px] rounded-[5px]">
                                <div @click="pushFetchData()">
                                    Eklenenleri
                                    Gönder
                                </div>
                            </div>
                        </q-form>

                        <!--Data2-->
                        <q-form v-if="showData2" @reset="onReset(e, 'data2')" class="q-gutter-md flex flex-col">
                            Liste 2/6
                            <div>
                                <label class=" mt-[50px]">
                                    <div class="itemIMG relative">
                                        <img class="w-[300px] h-[200px]" :src="compData.data2.imageSrc"
                                            v-if="compData.data2.imageSrc" />
                                        <p class="top-[84px] left-[90px] absolute">
                                        <p v-if="!fileName" class="font-bold text-[22px]">Dosya Seç</p>
                                        </p>
                                    </div>
                                    <p class="absolute">{{ fileName }}</p>
                                    <input class="mt-[15px] inputFile" type="file" @change="e => showImage(e, 'data2')">
                                </label>
                            </div>

                            <q-input v-if="!val" filled type="textarea" v-model="compData.data2.inputDes" :max-length="5"
                                label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="val" />
                                Açıklama Girmek istemiyorum
                            </label>

                            <q-input v-model="compData.data2.inputCount" filled type="number"
                                label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                                ]" />
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                            <p @click="onSubmit(e, 'data2'); showInput();"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Sepete Ekle</p>
                            <div class="bg-blue-100 text-center py-[10px] px-[10px] rounded-[5px]">
                                <div @click="pushFetchData()">
                                    Eklenenleri
                                    Gönder
                                </div>
                            </div>
                        </q-form>

                        <!--Data3-->
                        <q-form v-if="showData3" @reset="onReset(e, 'data3')" class="q-gutter-md flex flex-col">
                            Liste 3/6
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
                            <p @click="onSubmit(e, 'data3'); showInput();"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Sepete Ekle</p>
                            <div class="bg-blue-100 text-center py-[10px] px-[10px] rounded-[5px]">
                                <div @click="pushFetchData()">
                                    Eklenenleri
                                    Gönder
                                </div>
                            </div>
                        </q-form>

                        <!--Data4-->
                        <q-form v-if="showData4" @reset="onReset(e, 'data4')" class="q-gutter-md flex flex-col">
                            Liste 4/6
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
                            <p @click="onSubmit(e, 'data4'); showInput();"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Sepete Ekle</p>
                            <div class="bg-blue-100 text-center py-[10px] px-[10px] rounded-[5px]">
                                <div @click="pushFetchData()">
                                    Eklenenleri
                                    Gönder
                                </div>
                            </div>
                        </q-form>

                        <!--Data5-->
                        <q-form v-if="showData5" @reset="onReset(e, 'data5')" class="q-gutter-md flex flex-col">
                            Liste 5/6
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
                            <p @click="onSubmit(e, 'data5'); showInput();"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Sepete Ekle</p>
                            <div class="bg-blue-100 text-center py-[10px] px-[10px] rounded-[5px]">
                                <div @click="pushFetchData()">
                                    Eklenenleri
                                    Gönder
                                </div>
                            </div>
                        </q-form>

                        <!--Data6-->
                        <q-form v-if="showData6" @reset="onReset(e, 'data6')" class="q-gutter-md flex flex-col">
                            Liste 6/6
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
                            <p @click="onSubmit(e, 'data6'); showInput();"
                                class="bg-blue-300 text-center py-[10px] px-[10px] rounded-[5px]">Sepete Ekle</p>
                            <div class="bg-blue-100 text-center py-[10px] px-[10px] rounded-[5px]">
                                <div @click="pushFetchData()">
                                    Eklenenleri
                                    Gönder
                                </div>
                            </div>
                        </q-form>
                    </div>
                </div>

                <div class="flex absolute gap-3 bottom-8 justify-center flex-col">
                    <div class="flex gap-3">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data6.imageSrc"
                            v-if="fullData.data6.imageSrc">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data5.imageSrc"
                            v-if="fullData.data5.imageSrc">
                        <img class="w-[110px] h-[70px] max-w-[110px] max-h-[70px]" :src="fullData.data4.imageSrc"
                            v-if="fullData.data4.imageSrc">
                    </div>

                    <div class="flex gap-3">
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
        <div class="w-[60%] h-full fixed right-0 bg-red-400">
            asdasddas
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
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios';

const val = ref(true)

const showData1 = ref(true)
const showData2 = ref(false)
const showData3 = ref(false)
const showData4 = ref(false)
const showData5 = ref(false)
const showData6 = ref(false)
const showPushData = ref(false)

const showInput = () => {
    if (fullData.data1.imageSrc == null) {
        showData1.value = true,
            showData2.value = false
    } else if (fullData.data2.imageSrc == null) {
        showData1.value = false,
            showData2.value = true
    } else if (fullData.data3.imageSrc == null) {
        showData2.value = false,
            showData3.value = true
    } else if (fullData.data4.imageSrc == null) {
        showData3.value = false,
            showData4.value = true
    } else if (fullData.data5.imageSrc == null) {
        showData4.value = false,
            showData5.value = true
    } else if (fullData.data6.imageSrc == null) {
        showData5.value = false,
            showData6.value = true
    } else if (fullData.data6.imageSrc !== null) {
        showData6.value = false,
            pushFetchData();
    }
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

const pushFetchData = () => {
    if (fullData.data1.imageSrc !== null) {
        axios.post('http://localhost:3000/myData', fullData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
        router.push("/")
    }
}

const goToList = () => {
    router.push("/")
}

const fileName = ref("")

const compData = reactive({
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
    fullData.inputTitle = compData.inputTitle

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
</script>