<template>
    <div class="w-[100%]">
        <div v-if="!isComponentVisible" class="q-pa-md q-gutter-sm text-center">
            <q-btn @click="handleAddItem" color="white" text-color="black" label="New Items" />
        </div>

        <div class="w-full px-[10px] mb-[50px]">
            <div>
                <llistItem v-if="!isComponentVisible"></llistItem>
                <component :is="component" />
            </div>
        </div>
    </div>
</template>

<script setup>
import addItem from "../components/addItem.vue"
import llistItem from "../components/llistItem.vue"
import { ref, computed } from "vue";

const isComponentVisible = ref(false)
const handleAddItem = () => {
    isComponentVisible.value = true
}
const handleListItem = () => {
    isComponentVisible.value = false
}
const component = computed(() => {
    if (isComponentVisible.value) {
        return addItem
    }
    return null
});

</script>

<style scoped>
/* width */
::-webkit-scrollbar {
    width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>