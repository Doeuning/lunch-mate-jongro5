import VueRouter from "vue-router";
import BridgeIntro from "/src/views/bridge-intro.vue";
import Question from "/src/views/question.vue";
import QuestionHard from "/src/views/question-hard.vue";
import Address from "/src/views/address-page.vue";
import Transition from "/src/views/transition-page.vue";
import Qna from "/src/views/qna.vue";

const routes = [
  { path: "/", component: BridgeIntro },
  { path: "/question", component: Question },
  { path: "/question-hard", component: QuestionHard },
  { path: "/address", component: Address },
  { path: "/transition", component: Transition },
  { path: "/qna", component: Qna },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
