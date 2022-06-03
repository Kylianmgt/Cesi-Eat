<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-grid>
        <ion-row>
          <ion-img :src="data.image" width="10px" height="10px"></ion-img>
        </ion-row>
        <ion-row>
          <ion-text>
            <h1>{{ data.name }}</h1>
          </ion-text>
        </ion-row>
        <ion-row>
          <ion-text color="Dark ">
            <h3>{{ data.description }}</h3>
            <h3>{{ data.address }}</h3>
          </ion-text>
        </ion-row>
        <ion-row>
          <ion-text color="Dark ">
            <h3>{{ data.distance }}</h3>
            <h3>{{ data.rating }}</h3>
          </ion-text>
        </ion-row>
      </ion-grid>
      <!-- <ion-img :src="data.image" width="10px" height="10px"></ion-img> -->
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
  IonText
} from "@ionic/vue";
import { useRouter } from "vue-router";

export default {
  name: "Restaurant",
  components: {
    IonIcon,
    IonText,
    IonPage
  },
  setup() {
    const router = useRouter();
    const data = {
      name: "MyTacos",
      address: "1 rue de la paix",
      description: "Tacos de la meilleure qualité",
      image:
        "https://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/fauves13_0.jpg?itok=SAX57ak4",
      rating: 4.5,
      distance: 2,
      ville: 3,
      articles: [
        {
          id: "1",
          name: "Tacos",
          description: "Tacos de la meilleure qualité",
          image:
            "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
          price: 10
        },
        {
          id: "2",
          name: "Burger",
          description: "Burger de la meilleure qualité",
          image:
            "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
          price: 10
        },
        {
          id: "3",
          name: "Pizza",
          description: "Pizza de la meilleure qualité",
          image:
            "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
          price: 10
        },
        {
          id: "4",
          name: "Coca-Cola",
          description: "Coca-Cola de la meilleure qualité",
          image:
            "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
          price: 10
        }
      ],
      menus: [
        {
          id: "1",
          name: "Menu 1",
          description: "Menu de la meilleure qualité",
          image:
            "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
          price: 10,
          articles: [1, 2]
        },
        {
          id: "2",
          name: "Menu 2",
          description: "Menu de la meilleure qualité",
          image:
            "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
          price: 10,
          articles: [1, 2]
        },
        {
          id: "3",
          name: "Menu 3",
          description: "Menu de la meilleure qualité",
          image:
            "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
          price: 10,
          articles: [1, 2]
        }
      ]
    };

    return {
      router,
      data
    };
  },
  methods: {}
};
</script>
