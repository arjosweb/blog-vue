import Vue from "vue"
import Vuex from "vuex"
// import { api } from "../services/http";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        date: "20/02/2020",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        text: "Etiam vitae nisl at ipsum ultrices varius. Pellentesque aliquet ex commodo purus congue, non luctus neque laoreet. Praesent egestas dapibus nulla quis sagittis. Nunc pulvinar vitae urna in auctor. Donec sollicitudin, enim eleifend pharetra tincidunt, tortor sem feugiat sem, vel pulvinar sem ex non massa. Suspendisse imperdiet neque eu leo tincidunt interdum. Pellentesque tincidunt mauris enim, et suscipit nisl pharetra non.",
        image: "img/proj_blog_001.jpg",
        user_id: {
          name: "John Doe"
        },
        category_id: {
          name: "Geral"
        }
      },
      {
        id: 2,
        date: "20/02/2020",
        title: "Phasellus gravida auctor posuere. Aliquam venenatis eros in nibh elementum luctus.",
        text: "Nullam sapien nisi, dictum ut quam id, tincidunt sagittis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec mollis congue metus. Etiam porttitor enim in est auctor pretium. Praesent vulputate rhoncus turpis ut maximus. Nam vehicula posuere consequat. Proin sagittis sem varius pellentesque porta. Ut venenatis mauris vel tempus elementum. Curabitur posuere quam erat, eu faucibus orci fringilla sed. Etiam condimentum lacinia varius. Pellentesque sit amet ornare enim, non euismod dui. Etiam sem arcu, tincidunt sed dictum eu, vehicula non justo.",
        image: "img/proj_blog_002.jpg",
        user_id: {
          name: "John Doe"
        },
        category_id: {
          name: "Geral"
        }
      },
      {
        id: 3,
        date: "20/02/2020",
        title: "Maecenas eget imperdiet ante, ut porta lacus. Etiam quis justo congue.",
        text: "Quisque mattis mi nec est varius, non elementum magna sodales. Vestibulum sollicitudin auctor tortor, et faucibus magna elementum non. Quisque tempus nisl id erat auctor, tincidunt consectetur diam tincidunt. Cras dictum dolor eu odio maximus, eu fermentum velit consequat.",
        image: "img/proj_blog_003.jpg",
        user_id: {
          name: "John Doe"
        },
        category_id: {
          name: "Geral"
        }
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
