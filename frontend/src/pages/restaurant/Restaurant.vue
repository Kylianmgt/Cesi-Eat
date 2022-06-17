<template>
  <base-layout :show-menu-button="false" pageTitle="Mon restaurant">

    <ion-page>
      <ionic-content>
        <ion-card>

            <!-- Mains informations about restaurant -->
            <IonTitle size="large" color="primary">Mes Informations</IonTitle>
            <div class="flex p-8">
              <ion-grid>
                <ion-col>
                  Nom du restaurant: {{ data[0].name }}
                </ion-col>
                  <br>
                <ion-col>
                  Description: {{ data[0].description }}
                  <br>
                </ion-col>
                <ion-col>
                  Ville: {{ data[0].city }}
                  <br>
                </ion-col>
                <ion-col>
                  Address: {{ data[0].address }}
                  <br>
                </ion-col>
                <ion-col>
                  Note des utilisateurs: {{ data[0].rating }}
                </ion-col>
              </ion-grid>
              <ion-button href="/restaurant/edit">Modifier</ion-button>
            </div>

            <!-- Menus Details for this restaurant -->
            <ion-card-content class="p-8">
              <IonTitle size="large" color="primary">Mes Menu</IonTitle>
              <div v-for="item in data[0].menus" :key="item.id">
                <h2>{{ item.name }}</h2>
                <p>Description: {{ item.description }}</p>
                <p>Image: {{ item.image }}</p>
                <p>Prix: {{ item.price }}€</p>
                <h2>Articles :</h2>
                <li v-for="article in data[0].menus[0].articles">
                  {{ article.name }}   {{ article.price }}€
                </li>
              </div>
            </ion-card-content>

          <!-- Articles Details for this restaurant -->
          <ion-card-content className="p-8">
            <IonTitle size="large" color="primary">Mes Articles</IonTitle>
                <li v-for="article in data[0].articles">
                  {{ article.name }}    {{ article.price }}€
                </li>
          </ion-card-content>

        </ion-card>
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

export default {
  name: "Restaurant",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
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