<template>
    <div class="flex">
        <div class="w-[40%] break-words relative ">
            <div class="bg-white h-[80px] flex fixed w-[40%] items-center justify-center z-[999]">
                <p @click="goToList" class="bg-gray-300 py-[1px] px-[10px] rounded-[10px] text-[20px]">Listelere Git</p>
            </div>

            <div class="pt-[45px] w-full h-[100vh] flex justify-center">
                <div>
                    <div class="text-center mt-[20px] h-[20px] mb-[10px] py-[2px] font-bold">
                        <div v-if="errorTitle" class=" bg-red-300">
                            Lütfen Başlık Giriniz!!
                        </div>
                    </div>
                    <div class="q-gutter-y-md column" style="max-width: 300px">

                        <div class="h-[56px]">
                            <q-input v-if="fullData.inputTitle == null" v-model="compData.inputTitle" filled type="text"
                                label="Lütfen Başlık Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Başlık Giriniz'
                                ]" />
                        </div>

                        <!--Data1-->
                        <q-form v-if="fullData.data1.imageSrc == null && !deleteData" @reset="onReset(e, 'data1')"
                            class="q-gutter-md flex flex-col">
                            Liste'ye Eklenenler 0/6
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

                            <q-input v-if="!desFalse" filled type="textarea" v-model="compData.data1.inputDes"
                                :max-length="5" label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="desFalse" />
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
                        <q-form v-if="showData2 && !deleteData" @reset="onReset(e, 'data2')"
                            class="q-gutter-md flex flex-col">
                            Liste'ye Eklenenler 1/6
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

                            <q-input v-if="!desFalse" filled type="textarea" v-model="compData.data2.inputDes"
                                :max-length="5" label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="desFalse" />
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
                        <q-form v-if="showData3 && !deleteData" @reset="onReset(e, 'data3')"
                            class="q-gutter-md flex flex-col">
                            Liste'ye Eklenenler 2/6
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

                            <q-input v-if="!desFalse" filled type="textarea" v-model="compData.data3.inputDes"
                                :max-length="5" label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="desFalse" />
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
                        <q-form v-if="showData4 && !deleteData" @reset="onReset(e, 'data4')"
                            class="q-gutter-md flex flex-col">
                            Liste'ye Eklenenler 3/6
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

                            <q-input v-if="!desFalse" filled type="textarea" v-model="compData.data4.inputDes"
                                :max-length="5" label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="desFalse" />
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
                        <q-form v-if="showData5 && !deleteData" @reset="onReset(e, 'data5')"
                            class="q-gutter-md flex flex-col">
                            Liste'ye Eklenenler 4/6
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

                            <q-input v-if="!desFalse" filled type="textarea" v-model="compData.data5.inputDes"
                                :max-length="5" label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="desFalse" />
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
                        <q-form v-if="showData6 && !deleteData" @reset="onReset(e, 'data6')"
                            class="q-gutter-md flex flex-col">
                            Liste'ye Eklenenler 5/6
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

                            <q-input v-if="!desFalse" filled type="textarea" v-model="compData.data6.inputDes"
                                :max-length="5" label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="desFalse" />
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

                        <!--Düzenlenen Data-->
                        <q-form v-if="deleteData" @reset="onReset(e, 'onDelete')" class="q-gutter-md flex flex-col">
                            {{ deleteDataKey }}
                            <div>
                                <label class=" mt-[50px]">
                                    <div class="itemIMG relative">
                                        <img class="w-[300px] h-[200px]" :src="onDeleteData.imageSrc"
                                            v-if="onDeleteData.imageSrc" />
                                        <p class="top-[84px] left-[90px] absolute">
                                        <p v-if="!fileName" class="font-bold text-[22px]">Dosya Seç</p>
                                        </p>
                                    </div>
                                    <p class="absolute">{{ fileName }}</p>
                                    <input class="mt-[15px] inputFile" type="file" @change="e => showImage(e, 'onDelete')">
                                </label>
                            </div>

                            <q-input v-if="!desFalse" filled type="textarea" v-model="onDeleteData.inputDes" :max-length="5"
                                label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                                ]" />

                            <label>
                                <q-checkbox v-model="desFalse" />
                                Açıklama Girmek istemiyorum
                            </label>

                            <q-input v-model="onDeleteData.inputCount" filled type="number"
                                label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                    val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                                ]" />
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                            <p @click="onSubmit2(onDeleteData, deleteDataKey); showInput();"
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
            </div>


        </div>
        <div class="w-[60%] h-full fixed right-0 bg-blue-50">
            <div class="flex w-full absolute gap-3 top-[50px] px-[30px] justify-center flex-col">
                <div v-if="fullData.inputTitle !== null"
                    class="text-center bg-gray-400 py-[5px] flex justify-between px-[10px]">
                    <div>Sil</div>
                    {{ fullData.inputTitle }}
                    <div>Ön İzleme</div>
                </div>

                <div v-if="fullData.data1.imageSrc !== null"
                    class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                    <div @click="onDelete(fullData.data1, 'data1')">Düzenle</div>
                    <div>{{ fullData.data1.inputDes }}</div>
                    <div class="flex items-center justify-center">
                        <div>{{ fullData.data1.inputCount }}</div>
                        <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                            <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]" :src="fullData.data1.imageSrc">
                        </div>
                    </div>
                    <!--q-btn @click="onReset2(e, 'data1')" label="reset" type="reset" color="primary" flat class="q-ml-sm" />-->
                </div>

                <div v-if="fullData.data2.imageSrc !== null"
                    class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
                    <div @click="onDelete(fullData.data2, 'data2')">Düzenle</div>
                    <div>{{ fullData.data2.inputDes }}</div>
                    <div class="flex items-center justify-center">
                        <div>{{ fullData.data2.inputCount }}</div>
                        <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                            <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]" :src="fullData.data2.imageSrc">
                        </div>
                    </div>
                </div>

                <div v-if="fullData.data3.imageSrc !== null"
                    class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                    <div @click="onDelete(fullData.data3, 'data3')">Düzenle</div>
                    <div>{{ fullData.data3.inputDes }}</div>
                    <div class="flex items-center justify-center">
                        <div>{{ fullData.data3.inputCount }}</div>
                        <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                            <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]" :src="fullData.data3.imageSrc">
                        </div>
                    </div>
                </div>

                <div v-if="fullData.data4.imageSrc !== null"
                    class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
                    <div @click="onDelete(fullData.data4, 'data4')">Düzenle</div>
                    <div>{{ fullData.data4.inputDes }}</div>
                    <div class="flex items-center justify-center">
                        <div>{{ fullData.data4.inputCount }}</div>
                        <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                            <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]" :src="fullData.data4.imageSrc">
                        </div>
                    </div>
                </div>

                <div v-if="fullData.data5.imageSrc !== null"
                    class="flex justify-between items-center py-[5px] px-[10px] bg-gray-300">
                    <div @click="onDelete(fullData.data5, 'data5')">Düzenle</div>
                    <div>{{ fullData.data5.inputDes }}</div>
                    <div class="flex items-center justify-center">
                        <div>{{ fullData.data5.inputCount }}</div>
                        <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                            <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]" :src="fullData.data5.imageSrc">
                        </div>
                    </div>
                </div>

                <div v-if="fullData.data6.imageSrc !== null"
                    class="flex justify-between items-center py-[5px] px-[10px] bg-gray-200">
                    <div @click="onDelete(fullData.data6, 'data6')">Düzenle</div>
                    <div>{{ fullData.data6.inputDes }}</div>
                    <div class="flex items-center justify-center">
                        <div>{{ fullData.data6.inputCount }}</div>
                        <div class="w-[120px] max-w-[120px] h-[80px] max-h-[80px] ml-[20px]">
                            <img class="w-[120px] max-w-[120px] h-[80px] max-h-[80px]" :src="fullData.data6.imageSrc">
                        </div>
                    </div>
                </div>
            </div>
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
import router from '../router/router';
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios';

const desFalse = ref(false)

const showData1 = ref(true)
const showData2 = ref(false)
const showData3 = ref(false)
const showData4 = ref(false)
const showData5 = ref(false)
const showData6 = ref(false)
const deleteData = ref(false)

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
            deleteData.value = true
    }
}

const onDeleteData = reactive({
    data: {
        imageSrc: "",
        inputDes: "",
        inputCount: "",
    }
})

const deleteDataKey = ref("")

const onSubmit2 = (e, dataKey) => {
    console.log(e)
    fullData[dataKey].inputCount = e.inputCount
    fullData[dataKey].inputDes = e.inputDes
    fullData[dataKey].imageSrc = e.imageSrc
    deleteData.value = false
}

const onDelete = (e, dataKey) => {
    deleteDataKey.value = dataKey
    deleteData.value = true
    console.log(e)
    console.log(dataKey)
    onDeleteData.imageSrc = e.imageSrc
    onDeleteData.inputDes = e.inputDes
    onDeleteData.inputCount = e.inputCount

    fullData[dataKey].inputCount = null
    fullData[dataKey].imageSrc = null
    fullData[dataKey].inputDes = null
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
const errorTitle = ref(false)


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
    if (compData.inputTitle == null) {
        errorTitle.value = true
    } else {
        fullData[dataKey].inputDes = compData[dataKey].inputDes;
        fullData[dataKey].inputCount = compData[dataKey].inputCount;
        fullData[dataKey].imageSrc = compData[dataKey].imageSrc;
        fullData.inputTitle = compData.inputTitle

        compData[dataKey].imageSrc = null
        compData[dataKey].inputCount = null
        compData[dataKey].inputDes = null
        fileName.value = ""
    }
}

const onReset2 = (e, dataKey) => {
    fullData[dataKey].inputCount = null
    fullData[dataKey].inputDes = null
    fullData[dataKey].imageSrc = null
    fileName.value = ""
}

const onReset = (e, dataKey) => {
    compData[dataKey].inputCount = null
    compData[dataKey].inputDes = null
    compData[dataKey].imageSrc = null
    compData.value = ""
}
</script>