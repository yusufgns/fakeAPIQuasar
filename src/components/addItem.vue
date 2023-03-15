<template>
    <div class="w-full h-[100%] bg-red-400 mt-[10px] break-words">
        <!-- <div class="flex items-center justify-center">
            
            <div class="q-pa-md mb-[150px]">
                <q-form @submit="submitForm" class="divAndForm">
                    <div class="flex flex-col">
                        <q-input standout v-model="fullData.inputTitle" :max-length="50" :dense="dense"
                            label="Lütfen başlık giriniz" lazy-rules />

                        <div class="bg-gray-300 py-[10px] px-[25px] rounded-[10px] mt-[15px]">
                            <p>İmage yüklemek ve açıklama girmek zorunludur. Aksi taktirde datanız yüklenemez.</p>
                            <p>6 dan daha az data göndermek isterseniz istek dışındakileri boş bırakınız</p>
                            <p>1 adet input göndermek isterseniz 1. (sol, ilk sıra) input doldurulmalıdır.</p>
                        </div>
                    </div>
                    <div class="divAndForm">
                        <div class="q-gutter-y-md column" style="max-width: 300px">
                            <q-form @reset="onReset(event, 'data1')" class="q-gutter-md">

                                <div>
                                    <div class="itemIMG">
                                        <img class="w-[300px] h-[200px]" v-if="fullData.data1.imageSrc"
                                            :src="fullData.data1.imageSrc" />
                                    </div>
                                    <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data1')">
                                </div>
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
                                    <div class="itemIMG">
                                        <img class="w-[300px] h-[200px]" v-if="fullData.data2.imageSrc"
                                            :src="fullData.data2.imageSrc" />
                                    </div>
                                    <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data2')">
                                </div>
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
                                    <div class="itemIMG">
                                        <img class="w-[300px] h-[200px]" v-if="fullData.data3.imageSrc"
                                            :src="fullData.data3.imageSrc" />
                                    </div>
                                    <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data3')">
                                </div>
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
                                    <div class="itemIMG">
                                        <img class="w-[300px] h-[200px]" v-if="fullData.data4.imageSrc"
                                            :src="fullData.data4.imageSrc" />
                                    </div>
                                    <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data4')">
                                </div>
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
                                    <div class="itemIMG">
                                        <img class="w-[300px] h-[200px]" v-if="fullData.data5.imageSrc"
                                            :src="fullData.data5.imageSrc" />
                                    </div>
                                    <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data5')">
                                </div>
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
                                    <div class="itemIMG">
                                        <img class="w-[300px] h-[200px]" v-if="fullData.data6.imageSrc"
                                            :src="fullData.data6.imageSrc" />
                                    </div>
                                    <input class="mt-[5px]" type="file" accept="image/*" @change="e => uploadImage(e, 'data6')">
                                </div>
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
                    </div>

                    <div class="absolute bottom-[-70px]">
                        <q-btn label="submit" type="submit" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>

                <div v-if='errorData.error !== null' class="bg-gray-500 text-center py-[5px] font-bold">
                    <div v-if='errorData.error !== null'>{{ errorData.error }}</div>
                </div>
            </div>
        </div> -->

        <div class="top-[-5px] w-full flex justify-center">
            <div class="q-pa-md q-gutter-sm">
                <q-btn @click="handleListItem" color="white" text-color="black" label="List Items" />
            </div>

            <div class="q-pa-md q-gutter-sm">
                <q-btn @click="handleListItem" color="white" text-color="black" label="+ Ekle" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

const $q = useQuasar()

console.log($q)

const name = ref(null)
const age = ref(null)
const accept = ref(false)

const onSubmit = () => {
    if (accept.value !== true) {
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
        })
    }
    else {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
        })
    }
};

const onReset = () => {
    name.value = null
    age.value = null
    accept.value = false
}
</script>