<template>
  <ion-tabs
    @ionTabsWillChange="beforeTabChange"
    @ionTabsDidChange="afterTabChange"
  >
    <ion-tab-bar slot="bottom">
      <ion-tab-button
        v-for="tab in getTabs()"
        :key="tab.name"
        :href="tab.path"
        :tab="tab.name"
      >
        <ion-icon :icon="personCircle"></ion-icon>
        <ion-label>{{ tab.placeholder }}</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/vue";
import { calendar, personCircle } from "ionicons/icons";
import { routes } from "../../router/index";

export default defineComponent({
  components: {
    IonIcon,
    IonLabel,
    IonPage,
    IonTabBar,
    IonTabButton,
    IonTabs,
  },
  computed: {
    userData() {
      return this.$store.state.user.userData;
    },
  },
  setup() {
    const beforeTabChange = () => {
      // do something before tab change
    };
    const afterTabChange = () => {
      // do something after tab change
    };
    return {
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange,
    };
  },
  methods: {
    getTabs() {
      const tabs = [];
      routes.map((route) => {
        if (route.icon) {
          if (this.userData.user) {
            if (route.role && route.role.includes(this.userData.user.role)) {
              tabs.push({
                name: route.name,
                path: route.path,
                icon: route.icon,
                placeholder: route.placeholder,
              });
            }
          }
        }
      });
      return tabs;
    },
  },
});
</script>
