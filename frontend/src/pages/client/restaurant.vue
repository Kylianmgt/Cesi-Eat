<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      <ion-content scroll-y="true">
        <ion-grid>
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
          <ion-grid>
            <ion-text color="Dark ">
              <h3>Menus</h3>
            </ion-text>
            <ion-row>
              <MenuCard v-for="menu in data.menus" :data="menu" />
            </ion-row>
          </ion-grid>
          <ion-grid>
            <ion-text color="Dark ">
              <h3>Articles</h3>
            </ion-text>
            <ion-row>
              <ArticleCard v-for="article in data.articles" :data="article" />
            </ion-row>
          </ion-grid>
          <ion-button shape="round">Passer commande</ion-button>
        </ion-grid>
      </ion-content>
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
import MenuCard from "@/components/molecules/restaurant/MenuCard";
import ArticleCard from "@/components/molecules/restaurant/ArticleCard";

export default {
  name: "Restaurant",
  components: {
    MenuCard,
    ArticleCard,
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
            "https://images.rtl.fr/~c/770v513/rtl/www/1460953-un-hamburger-image-d-illustration.jpg",
          price: 10,
          articles: [1, 2]
        },
        {
          id: "2",
          name: "Menu 2",
          description: "Menu de la meilleure qualité",
          image:
            "https://www.peugeot-saveurs.com/wp/wp-content/uploads/2021/02/IMG_0063-1024x0.jpg",
          price: 10,
          articles: [1, 2]
        },
        {
          id: "3",
          name: "Menu 3",
          description: "Menu de la meilleure qualité",
          image:
            "https://www.peugeot-saveurs.com/wp/wp-content/uploads/2021/02/IMG_0063-1024x0.jpg",
          price: 10,
          articles: [1, 2]
        }
      ]
    };
    props: [data.articles];
    return {
      router,
      data
    };
  },
  methods: {}
};
</script>
