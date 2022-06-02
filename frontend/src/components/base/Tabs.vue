<template>
  <ion-page>
    <ion-tabs @ionTabsWillChange="beforeTabChange" @ionTabsDidChange="afterTabChange">
      <ion-tab-bar slot="bottom">
        <ion-tab-button v-for="tab in getTabs()" :key="tab.name" :href="tab.path" :tab="tab.name">
          <ion-icon :name="tab.icon" slot="icon-only"></ion-icon>
          <ion-label>{{tab.placeholder}}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { 
  IonIcon, 
  IonLabel, 
  IonPage,
  IonTabBar, 
  IonTabButton, 
  IonTabs
} from '@ionic/vue';
import { calendar, personCircle } from 'ionicons/icons';
import client from '../../router/authenticated/client';

export default defineComponent({
  components: { IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton, IonTabs },
  setup() {
      const getTabs = () => {
        const tabs = []
        client.map(route => {
            if (route.icon){
                tabs.push( {
                    name: route.name,
                    url: route.url,
                    icon: route.icon,
                    placeholder: route.placeholder,
                    path: route.path
                }
            )
            }
        });
        return tabs;
      };
      
    const beforeTabChange = () => {
      // do something before tab change
    }
    const afterTabChange = () => {
      // do something after tab change
    }
    return {
      calendar,
      personCircle,
      beforeTabChange,
      afterTabChange,
      client,
      getTabs
    }
  }
});
</script>