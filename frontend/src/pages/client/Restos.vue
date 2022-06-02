<template>
<base-layout
    :show-menu-button="false"
  >
  <ion-page>
    <ion-text>
      <h1>Les Restos autour de chez vous</h1>
    </ion-text>
    <RestaurantCard/>
  </ion-page>
    </base-layout>
</template>

<script>

import {
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonText,
} from '@ionic/vue';
import { useRouter } from 'vue-router';

import RestaurantCard from '@/components/molecules/restos/RestaurantCard';



export default {
    name:'Restos',
    components:{
        RestaurantCard,
        IonIcon,
        IonText,
        IonPage

    },
    setup() {
        const router = useRouter();
        const data = [
          {
            name: "MyTacos",
            address: "1 rue de la paix",
            description: "Tacos de la meilleure qualité",
            image: "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
            rating: 4.5,
          }
        ]

        return {
            router
        }
  },
    methods: {
    },
    
};
</script>
