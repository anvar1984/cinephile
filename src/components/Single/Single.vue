<template>
    <section class="single">
<SingleContent :type=" type" :current="getInfoId"/>
<Addition/>
<Recoment/>
    </section>
</template>

<script setup>
const props = defineProps(['type']);
import SingleContent from './SingleContent.vue';
import Addition from './Additional.vue';
import Recoment from './Recoment.vue';
import { useRouter, useRoute } from 'vue-router';
import { computed, onBeforeMount } from "vue";
import { useDetails } from "../../store/details";
const detailsStore = useDetails();
const route = useRoute();
const routeId = computed (()=>route.params.id);
detailsStore.getDetails(routeId.value, props.type);
const getInfoId = computed(()=> props.type =='movie' ? detailsStore.movieInfo : detailsStore.tvInfo);
onBeforeMount(()=>{
    detailsStore.movieInfo;
    detailsStore.tvInfo;
})

</script>

<style lang="scss">

</style>