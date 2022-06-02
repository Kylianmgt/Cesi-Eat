<template>
<base-layout
    :show-menu-button="false"
  >
    <ion-text>
      <h1>Les Restos autour de chez vous</h1>
    </ion-text>
    </base-layout>
</template>

<script>

import {
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
} from '@ionic/vue';
import { useRouter } from 'vue-router';



export default {
    name:'Restos',
    components:{
        IonIcon,
    },
    setup() {
    
  },
    methods: {
    },
    
};
</script>
