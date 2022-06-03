<template>
  <IonApp>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </IonApp>
</template>

<script>
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";

import { defineComponent } from "vue";

import Menu from "./components/Menu.vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    Menu
  }
});
</script>
