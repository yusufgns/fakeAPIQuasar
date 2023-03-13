<script setup>
import { ref, reactive } from "vue"
import hearMenu from "../components/headerMenu.vue"
import axios from "axios";
import router from "../router/router";

const fullData = reactive({
    data1: {
        inputTitle: null,
        inputDes: null,
        countItem: null,
        imageSrc: null,
    },
    data2: {
        inputTitle: null,
        inputDes: null,
        countItem: null,
        imageSrc: null,
    },
    data3: {
        inputTitle: null,
        inputDes: null,
        countItem: null,
        imageSrc: null,
    },
    data4: {
        inputTitle: null,
        inputDes: null,
        countItem: null,
        imageSrc: null,
    },
    data5: {
        inputTitle: null,
        inputDes: null,
        countItem: null,
        imageSrc: null,
    },
    data6: {
        inputTitle: null,
        inputDes: null,
        countItem: null,
        imageSrc: null,
    }
})

const errorData = reactive({
    error : null
})

function submitForm(e) {
    console.log(e)
    if (fullData.data1.inputTitle == null || fullData.data2.inputTitle == null || fullData.data3.inputTitle == null || fullData.data4.inputTitle == null || fullData.data5.inputTitle == null || fullData.data6.inputTitle == null) {
        errorData.error = "Başlıklar içerisinde en az 1 karakter olmalıdır, Örnek : B"
        console.log("error1")
    } else if (fullData.data1.inputDes == null || fullData.data2.inputDes == null || fullData.data3.inputDes == null || fullData.data4.inputDes == null || fullData.data5.inputDes == null || fullData.data6.inputDes == null) {
        errorData.error = "Açıklama içerisinde en az 1 karakter olmalıdır, Örnek : B"
        console.log("error2")
    } else if (fullData.data1.countItem == null || fullData.data2.countItem == null || fullData.data3.countItem == null || fullData.data4.countItem == null || fullData.data5.countItem == null || fullData.data6.countItem == null) {
        errorData.error = "Count içerisinde en az 1 sayı olmalıdır, Örnek : 0"
        console.log("error3")
    } else {
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

const uploadImage = (e, dataKey) => {
    const [image] = e.target.files
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = e => {
        fullData[dataKey].imageSrc = e.target.result
    }
}

const onReset = (event, dataKey) => {
    fullData[dataKey].inputTitle = "";
    fullData[dataKey].inputDes = "";
    fullData[dataKey].countItem = "";
    fullData[dataKey].imageSrc = null;
}

</script>


<template>
    <hearMenu></hearMenu>
    <div class="flex items-center justify-center">
        <div class="q-pa-md mb-[150px]">
            <q-form @submit="submitForm" class="flex gap-32 flex-wrap max-w-[1500px] justify-center">
                <div class="q-gutter-y-md column" style="max-width: 300px">
                    <q-form @reset="onReset(event, 'data1')" class="q-gutter-md">

                        <div>
                            <div class="max-w-[300px] max-h-[300px] w-[300px] h-[200px] bg-red-400">
                                <img class="w-[300px] h-[200px]" v-if="fullData.data1.imageSrc"
                                    :src="fullData.data1.imageSrc" />
                            </div>
                            <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data1')">
                        </div>

                        <q-input standout v-model="fullData.data1.inputTitle" :max-length="50" :dense="dense"
                            label="Lütfen başlık giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen başlık giriniz'
                            ]" />
                        <q-input v-model="fullData.data1.inputDes" filled type="textarea" :max-length="230"
                            label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                            ]" />

                        <q-input filled type="number" v-model="fullData.data1.countItem"
                            label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                            ]" />

                        <div>
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>

                <div class="q-gutter-y-md column" style="max-width: 300px">
                    <q-form @reset="onReset(event, 'data2')" class="q-gutter-md">

                        <div>
                            <div class="max-w-[300px] max-h-[300px] w-[300px] h-[200px] bg-red-400">
                                <img class="w-[300px] h-[200px]" v-if="fullData.data2.imageSrc"
                                    :src="fullData.data2.imageSrc" />
                            </div>
                            <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data2')">
                        </div>

                        <q-input standout v-model="fullData.data2.inputTitle" :dense="dense" :max-length="50"
                            label="Lütfen başlık giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen başlık giriniz'
                            ]" />
                        <q-input v-model="fullData.data2.inputDes" filled type="textarea" :max-length="230"
                            label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                            ]" />
                        <q-input filled type="number" v-model="fullData.data2.countItem"
                            label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                            ]" />

                        <div>
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>

                <div class="q-gutter-y-md column" style="max-width: 300px">
                    <q-form @reset="onReset(event, 'data3')" class="q-gutter-md">

                        <div>
                            <div class="max-w-[300px] max-h-[300px] w-[300px] h-[200px] bg-red-400">
                                <img class="w-[300px] h-[200px]" v-if="fullData.data3.imageSrc"
                                    :src="fullData.data3.imageSrc" />
                            </div>
                            <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data3')">
                        </div>

                        <q-input standout v-model="fullData.data3.inputTitle" :dense="dense" :max-length="50"
                            label="Lütfen başlık giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen başlık giriniz'
                            ]" />
                        <q-input v-model="fullData.data3.inputDes" filled type="textarea" :max-length="230"
                            label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                            ]" />
                        <q-input filled type="number" v-model="fullData.data3.countItem"
                            label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                            ]" />

                        <div>
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>

                <div class="q-gutter-y-md column" style="max-width: 300px">
                    <q-form @reset="onReset(event, 'data4')" class="q-gutter-md">

                        <div>
                            <div class="max-w-[300px] max-h-[300px] w-[300px] h-[200px] bg-red-400">
                                <img class="w-[300px] h-[200px]" v-if="fullData.data4.imageSrc"
                                    :src="fullData.data4.imageSrc" />
                            </div>
                            <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data4')">
                        </div>

                        <q-input standout v-model="fullData.data4.inputTitle" :dense="dense" :max-length="50"
                            label="Lütfen başlık giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen başlık giriniz'
                            ]" />
                        <q-input v-model="fullData.data4.inputDes" filled type="textarea" :max-length="230"
                            label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                            ]" />
                        <q-input filled type="number" v-model="fullData.data4.countItem"
                            label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                            ]" />

                        <div>
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>

                <div class="q-gutter-y-md column" style="max-width: 300px">
                    <q-form @reset="onReset(event, 'data5')" class="q-gutter-md">

                        <div>
                            <div class="max-w-[300px] max-h-[300px] w-[300px] h-[200px] bg-red-400">
                                <img class="w-[300px] h-[200px]" v-if="fullData.data5.imageSrc"
                                    :src="fullData.data5.imageSrc" />
                            </div>
                            <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data5')">
                        </div>

                        <q-input standout v-model="fullData.data5.inputTitle" :dense="dense" :max-length="50"
                            label="Lütfen başlık giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen başlık giriniz'
                            ]" />
                        <q-input v-model="fullData.data5.inputDes" filled type="textarea" :max-length="230"
                            label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                            ]" />
                        <q-input filled type="number" v-model="fullData.data5.countItem"
                            label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                            ]" />

                        <div>
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>

                <div class="q-gutter-y-md column" style="max-width: 300px">
                    <q-form @reset="onReset(event, 'data6')" class="q-gutter-md">

                        <div>
                            <div class="max-w-[300px] max-h-[300px] w-[300px] h-[200px] bg-red-400">
                                <img class="w-[300px] h-[200px]" v-if="fullData.data6.imageSrc"
                                    :src="fullData.data6.imageSrc" />
                            </div>
                            <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data6')">
                        </div>

                        <q-input standout v-model="fullData.data6.inputTitle" :dense="dense" :max-length="50"
                            label="Lütfen başlık giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen başlık giriniz'
                            ]" />
                        <q-input v-model="fullData.data6.inputDes" filled type="textarea" :max-length="230"
                            label="Lütfen açıklama giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen açıklama giriniz'
                            ]" />
                        <q-input filled type="number" v-model="fullData.data6.countItem"
                            label="Lütfen Parça Sayısını Giriniz" lazy-rules :rules="[
                                val => val !== null && val !== '' || 'Lütfen Parça Sayısını Giriniz'
                            ]" />

                        <div>
                            <q-btn label="reset" type="reset" color="primary" flat class="q-ml-sm" />
                        </div>
                    </q-form>
                </div>

                <div class="absolute bottom-[-70px]">
                    <q-btn label="submit" type="submit" color="primary" flat class="q-ml-sm" />
                </div>
            </q-form>

            <div v-if='errorData.error !== null' class="bg-gray-500 text-center py-[5px] font-bold">
                <div v-if='errorData.error !== null'>{{ errorData.error }}</div>
            </div>
        </div>
    </div>
</template>