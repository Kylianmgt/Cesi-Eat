<template>
<base-layout
    :show-menu-button="false"
  >
    <ion-text>
      <h1>Landing
      </h1>
    </ion-text>
    <Button text="Router redirect"
    color="medium"
    :to="{ name: 'login' }"/>
    <ion-icon name="fast-food-outline" size="large"></ion-icon>
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
import Button from '../components/Button.vue';
import { useRouter } from 'vue-router';

// const router = useRouter();

const moveToLogin = () =>{
   this.router.push('/login');
}

export default {
    name:'Landing',
    components:{
        IonIcon,
        Button
    },
    setup() {
    
  },
    methods: {
        moveToLogin
    },
    
};
</script>
