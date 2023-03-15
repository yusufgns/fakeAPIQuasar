<template>
    <div class="break-words h-screen overflow-auto">
        <div v-for="dataArray in myData.dataArrays" :key="dataArray.id" class="mb-[50px]">
            <div class="bg-gray-500 w-full py-[10px] flex justify-between px-[15px]">
                <p>Ön İzleme</p>
                {{ dataArray.inputTitle }}
                <p>Sil</p>
            </div>

            <div class="bg-gray-300 w-full py-[10px] px-[10px] h-[100%]">
                <div class="h-[100%] flex items-center justify-between">
                    <p>{{ dataArray.data1.inputDes }}</p>
                    <div class="flex items-center justify-center">
                        <p>{{ dataArray.data1.countItem }}</p>
                        <div class="h-[80px] w-[150px] max-h-[80px] max-w-[150px] ml-[25px]">
                            <img class="h-[80px] w-[150px] max-h-[80px] max-w-[150px]" :src="dataArray.data1.imageSrc">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 w-full py-[10px] px-[10px] h-[100%]">
                <div class="h-[100%] flex items-center justify-between">
                    <p>{{ dataArray.data1.inputDes }}</p>
                    <div class="flex items-center justify-center">
                        <p>{{ dataArray.data1.countItem }}</p>
                        <div class="h-[80px] w-[150px] max-h-[80px] max-w-[150px] ml-[25px]">
                            <img class="h-[80px] w-[150px] max-h-[80px] max-w-[150px]" :src="dataArray.data1.imageSrc">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-300 w-full py-[10px] px-[10px] h-[100%]">
                <div class="h-[100%] flex items-center justify-between">
                    <p>{{ dataArray.data1.inputDes }}</p>
                    <div class="flex items-center justify-center">
                        <p>{{ dataArray.data1.countItem }}</p>
                        <div class="h-[80px] w-[150px] max-h-[80px] max-w-[150px] ml-[25px]">
                            <img class="h-[80px] w-[150px] max-h-[80px] max-w-[150px]" :src="dataArray.data1.imageSrc">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 w-full py-[10px] px-[10px] h-[100%]">
                <div class="h-[100%] flex items-center justify-between">
                    <p>{{ dataArray.data1.inputDes }}</p>
                    <div class="flex items-center justify-center">
                        <p>{{ dataArray.data1.countItem }}</p>
                        <div class="h-[80px] w-[150px] max-h-[80px] max-w-[150px] ml-[25px]">
                            <img class="h-[80px] w-[150px] max-h-[80px] max-w-[150px]" :src="dataArray.data1.imageSrc">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-300 w-full py-[10px] px-[10px] h-[100%]">
                <div class="h-[100%] flex items-center justify-between">
                    <p>{{ dataArray.data1.inputDes }}</p>
                    <div class="flex items-center justify-center">
                        <p>{{ dataArray.data1.countItem }}</p>
                        <div class="h-[80px] w-[150px] max-h-[80px] max-w-[150px] ml-[25px]">
                            <img class="h-[80px] w-[150px] max-h-[80px] max-w-[150px]" :src="dataArray.data1.imageSrc">
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-200 w-full py-[10px] px-[10px] h-[100%]">
                <div class="h-[100%] flex items-center justify-between">
                    <p>{{ dataArray.data1.inputDes }}</p>
                    <div class="flex items-center justify-center">
                        <p>{{ dataArray.data1.countItem }}</p>
                        <div class="h-[80px] w-[150px] max-h-[80px] max-w-[150px] ml-[25px]">
                            <img class="h-[80px] w-[150px] max-h-[80px] max-w-[150px]" :src="dataArray.data1.imageSrc">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>