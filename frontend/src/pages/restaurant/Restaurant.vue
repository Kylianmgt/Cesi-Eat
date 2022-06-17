<template>
  <base-layout :show-menu-button="false">
    <ion-page>
      
      <ionic-content>
        <ion-card>

          <ion-card-title>
            <IonTitle size="large" color="primary">Mon restaurant</IonTitle>
          </ion-card-title>

          <ion-card-content>
            <ion-label> Nom du restaurant: {{ data[0].name }} </ion-label>
            <ion-label> Description: {{ data[0].description }} </ion-label>
            <ion-label> Ville: {{ data[0].city }} </ion-label>
            <ion-label> Address: {{ data[0].address }} </ion-label>
            <ion-label> Note des utilisateurs: {{ data[0].rating }} </ion-label>
          </ion-card-content>

          <ion-card-title>
            <IonTitle size="large" color="primary">Mon restaurant</IonTitle>
          </ion-card-title>
          <ion-card-content>
            Mes Menus
          </ion-card-content>

          <ion-card-content>
            Mes Articles
          </ion-card-content>

        </ion-card>
        <ion-button>Modifier</ion-button>

      </ionic-content>

    </ion-page>
  </base-layout>
</template>

<script>
import {
  IonPage,
  IonInput,
  IonItem,
  IonTitle,
  IonIcon,
  IonText,
  IonToolbar 
} from "@ionic/vue";
import { useRouter } from "vue-router";
import Button from "../../components/Button.vue";

export default {
  name: "Restaurant",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    Button,
    IonTitle,
    IonToolbar,
    IonItem
  },
  setup() {
    const router = useRouter();
    const data = [{
                  "id": 0,
                  "name": "My tacos",
                  "description": "Tacos de la meilleure qualité",
                  "address": "1 rue de la paix",
                  "rating": 4.5,
                  "distance": 2,
                  "city": "Bordeaux",
                  "articles": [
                    {
                      "id": 0,
                      "name": "Tacos",
                      "description": "Tacos de la meilleure qualité",
                      "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                      "price": 8.5
                    }
                  ],
                  "menus": [
                    {
                      "id": 0,
                      "name": "Menu 1",
                      "description": "Menu de la meilleure qualité",
                      "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                      "price": 8.5,
                      "articles": [
                        {
                          "id": 0,
                          "name": "Tacos",
                          "description": "Tacos de la meilleure qualité",
                          "image": "https://img1.freepng.fr/20180717/yfu/kisspng-el-risitas-issou-laughter-jeuxvideo-com-sticker-issou-hd-5b4d7d6b1b77c2.1011126415318050351125.jpg",
                          "price": 8.5
                        }
                      ]
                    }
                  ]
                }];
    return {
      router,
      data,
    };
  },
  methods: {},
};
</script>

<style scoped>
    ionic-content {
        display: flex;
        position:absolute;
        top:10%;
        left:5%;
        justify-content: space-around;
    }

    ion-card-content {
        display:flex;
        flex-direction:column;
    }

    ion-toolbar {
      background-color:red;
    }

    ion-title {
        text-align:center;
    }

    ion-button {
      --background: var(--ion-color-secondary);
    }
</style>