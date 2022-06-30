<template>
  <base-layout page-default-back-link="/client/restaurant" :show-menu-button="false">
    <ion-page>
      <ion-text>
        <h1>
          <span class="ml-2">Order summary</span>
        </h1>
      </ion-text>
      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Your order</span>
          </h2>
        </ion-text>
        <ion-grid>
          <OrderedItemCard v-for="selected_item in selected_items" :selected_item="selected_item"></OrderedItemCard>
          <h1>Total : {{ totalCalculation() }}€</h1>
        </ion-grid>
      </ion-content>
      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Adresse de livraison</span>
          </h2>
        </ion-text>
        <ion-card>
          <p>Voie</p>
          <p>Code postal</p>
          <p>Indication</p>
        </ion-card>
        <ion-button size="small" color="light">Modifier l'adresse de livraison</ion-button>
      </ion-content>
      <ion-content>
        <ion-text>
          <h2>
            <span class="ml-2">Payment method</span>
          </h2>
        </ion-text>
        <ion-card>
          <p>Type de carte</p>
          <p>Numéro</p>
          <p>Date de péremption</p>
          <p>Nom</p>
          <p>Prénom</p>
        </ion-card>
        <ion-button size="small" color="light">Modifier la méthode de paiement</ion-button>
      </ion-content>
      <ion-button @click="() => formatAndSendOrder()">
        <ion-icon name="buy" />
        <span class="ml-2">Buy</span>
      </ion-button>
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
  IonButton,
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";
import OrderedItemCard from "@/components/molecules/orders/OrderedItemCard.vue";
import useToast from "../../composition/useToast";
import { Browser } from "@capacitor/browser";
import { isPlatform } from "@ionic/vue";

export default {
  name: "OrderCheck",
  components: {
    IonIcon,
    IonInput,
    IonText,
    IonPage,
    IonButton,
    OrderedItemCard,
  },

  props: (route) => ({
    user: userData,
    ...route.params,
  }),
  sockets: {
    connect: function () {
      console.log("test connected");
    },
    disconnect: function () {
      console.log("socket to notification channel disconnected");
    },
    paymentDone: function () {
      Browser.close();
      this.openToast("Order success", "success");
      this.router.push({ name: "Orders" });
    },
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const { openToast } = useToast();
    const data = JSON.parse(route.params.data);
    const selected_menus = route.params.selected_menus;
    const selected_articles = route.params.selected_articles;
    const selected_all = selected_articles.concat(selected_menus);
    var selected_items = [];
    selected_menus.forEach((selected_element) => {
      data.menus.forEach((data_element) => {
        if (selected_element == data_element.id) {
          selected_items.push(data_element);
        }
      });
    });
    selected_articles.forEach((selected_element) => {
      data.articles.forEach((data_element) => {
        if (selected_element == data_element.id) {
          selected_items.push(data_element);
        }
      });
    });

    const openCapacitorSite = async () => {
      await Browser.open({ url: response.url });
    };
    return {
      openToast,
      router,
      selected_articles,
      selected_menus,
      selected_all,
      selected_items,
      data,
      openCapacitorSite,
    };
  },

  methods: {
    totalCalculation() {
      var total = 0;
      this.selected_items.forEach((element) => {
        total += element.price;
      });
      return total;
    },
    formatAndSendOrder() {
      const order = {
        restaurant: this.data.id,
        menus: this.selected_menus,
        articles: this.selected_articles,
        client: this.$store.state.user.userData.profil.id,
      };
      this.$store
        .dispatch("client/createCheckoutSession", {
          clientId: this.$store.state.user.userData.profil.id,
          order: order,
        })
        .then(function (response) {
          console.log(response);

          if (isPlatform("ios") || isPlatform("android")) {
            Browser.open({ url: response.url });
          } else {
            Browser.open({ url: response.url });
          }
        });
    },
  },
};
</script>
