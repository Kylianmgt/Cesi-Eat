<template>
  <base-layout :show-menu-button="false" pageTitle="Mon restaurant">

   </base-layout>
</template>


<script>
import {
  IonItem,
  IonIcon,
} from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  name: "Restaurant",
  components: {
    IonIcon,
    IonItem
  },

  setup() {
    const router = useRouter();
    return {
      router,
      data,
    };
  },
  methods: {},

};
</script>

<style scoped>

</style>