import VueRouter from "vue-router";
import BridgeIntro from "/src/views/bridge-intro.vue";
import Question from "/src/views/question.vue";
import QuestionHard from "/src/views/question-hard.vue";
import Address from "/src/views/address-page.vue";
import Transition from "/src/views/transition-page.vue";
import Qna from "/src/views/qna.vue";
import Async from "/src/views/async.vue";
import CheckAll from "/src/views/check-all.vue";
import Join from "/src/views/join.vue";
import JoinValidate from "/src/views/join-validate.vue";

const routes = [
  // { path: "/", component: BridgeIntro },
  { path: "/", component: BridgeIntro },
  { path: "/async", component: Async },
  { path: "/question", component: Question },
  { path: "/question-hard", component: QuestionHard },
  { path: "/address", component: Address },
  { path: "/transition", component: Transition },
  { path: "/qna", component: Qna },
  { path: "/async", component: Async },
  { path: "/check-all", component: CheckAll },
  { path: "/join", component: Join },
  { path: "/join-validate", component: JoinValidate },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
