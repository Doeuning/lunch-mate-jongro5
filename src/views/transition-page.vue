<template>
  <div class="transition-guide">
    <h1 class="h1">Transition Guide</h1>
    <ul>
      <li>
        <h2 class="h2">1. 기본</h2>
        <p class="desc">
          transition을 주고싶은 요소를 transition 태그로 감싸준다.<br />
          name을 지정해 transition 효과를 직접 css에 작성한다.
        </p>
        <div class="code">
          <pre>
&lt;transition <strong class="c1">name="pepero"</strong>&gt;
  &lt;h1&gt;안녕하세요. 저는 도은이에요.&lt;/h1&gt;
&lt;/transition&gt;</pre>
        </div>
      </li>

      <li>
        <h2 class="h2">2. Transition class</h2>
        <p class="desc">
          Enter & Leave<br />
          지정한 name + 약속된 class의 형태
        </p>
        <h3 class="h3">Vue2</h3>
        <img
          src="https://chansnotes.github.io/images/vue/vue_transition.png"
          alt=""
        />
        <div class="code">
          <strong>.<strong class="c1">pepero</strong>-enter</strong>
          {opacity: 0;}<br />
          : 들어오기 이전의 상태<br /><br />
          <strong>.<strong class="c1">pepero</strong>-enter-to</strong>
          {opacity: 1;}<br />
          : 들어온 이후의 상태<br />
          <strong class="c2">* 요소의 기본상태로 변경되는 경우 생략 가능</strong
          ><br /><br />
          <strong>.<strong class="c1">pepero</strong>-enter-active</strong>
          {transition: opacity 2s ease;}<br />
          : 요소가 transition 되는 동안의 상태 (transition 시간, easing)
        </div>
        <div class="code">
          <strong>.<strong class="c1">pepero</strong>-leave</strong>
          {opacity: 0;}<br />
          : 나가기 이전의 상태<br />
          <strong class="c2">* 요소의 기본상태로 변경되는 경우 생략 가능</strong
          ><br /><br />
          <strong>.<strong class="c1">pepero</strong>-leave-to</strong>
          {opacity: 1;}<br />
          : 나간 이후의 상태<br /><br />
          <strong>.<strong class="c1">pepero</strong>-leave-active</strong>
          {transition: opacity 2s ease;}<br />
          : 요소가 transition 되는 동안의 상태 (transition 시간, easing)
        </div>
        <h3 class="h3">Vue3</h3>
        <img src="https://v3.vuejs.org/images/transitions.svg" alt="" />
        <div class="code">
          <strong>.<strong class="c1">pepero</strong>-enter-from</strong>
          {opacity: 0;}<br />
          : 들어오기 이전의 상태<br /><br />
          <strong>.<strong class="c1">pepero</strong>-enter-to</strong>
          {opacity: 1;}<br />
          : 들어온 이후의 상태<br />
          <strong class="c2">* 요소의 기본상태로 변경되는 경우 생략 가능</strong
          ><br /><br />
          <strong>.<strong class="c1">pepero</strong>-enter-active</strong>
          {transition: opacity 2s ease;}<br />
          : 요소가 transition 되는 동안의 상태 (transition 시간, easing)
        </div>
        <div class="code">
          <strong>.<strong class="c1">pepero</strong>-leave-from</strong>
          {opacity: 0;}<br />
          : 나가기 이전의 상태<br />
          <strong class="c2">* 요소의 기본상태로 변경되는 경우 생략 가능</strong
          ><br /><br />
          <strong>.<strong class="c1">pepero</strong>-leave-to</strong>
          {opacity: 1;}<br />
          : 나간 이후의 상태<br /><br />
          <strong>.<strong class="c1">pepero</strong>-leave-active</strong>
          {transition: opacity 2s ease;}<br />
          : 요소가 transition 되는 동안의 상태 (transition 시간, easing)
        </div>
        <div class="ex">
          <h3 class="h3">적용 전)</h3>
          <button class="btn" @click="toggle1 = !toggle1">
            딱딱하게 인사하기
          </button>
          <div v-if="toggle1">
            <h1>안녕하세요, 저는 도은이에요.</h1>
          </div>
          <h3 class="h3">적용 후)</h3>
          <button class="btn" @click="toggle2 = !toggle2">
            부드럽게 인사하기
          </button>
          <transition name="pepero">
            <h1 v-if="toggle2">안녕하세요, 저는 도은이에요.</h1>
          </transition>
        </div>
      </li>

      <li>
        <h2 class="h2">3. Using Animation keyframes</h2>
        <p class="desc">.enter-active에 animation 스타일만 삽입.</p>
        <div class="code">
          <pre>
&lt;transition <strong class="c1">name="wobble"</strong>&gt;
  &lt;h1&gt;뭔가 잘못되었어요...&lt;/h1&gt;
&lt;/transition&gt;<br>
&lt;style&gt;
  @keyframes <strong>wobble</strong> {
    0% { transform: translateY(-60px);opacity: 0;}
    50% { transform: translateY(0);opacity: 1;}
    60% { transform: translateX(8px);}
    70% { transform: translateX(-8px);}
    80% { transform: translateX(8px);}
    90% { transform: translateX(-8px);}
    100% { transform: translateX(0);}
  }

.<strong class="c1">wobble</strong>-enter-active { <strong>animation: wobble 1s ease;</strong> }
.<strong class="c1">wobble</strong>-leave-to { transform: translateY(60px); opacity: 0; }
.<strong class="c1">wobble</strong>-leave-active { transition: all 1s ease; }
&lt;/style&gt;
          </pre>
        </div>
        <div class="ex">
          <h3 class="h3">적용 전)</h3>
          <button class="btn" @click="toggle3 = !toggle3">토스트팝업</button>
          <div v-if="toggle3">
            <h1 class="toast">뭔가 잘못되었어요...</h1>
          </div>
          <h3 class="h3">적용 후)</h3>
          <button class="btn" @click="toggle4 = !toggle4">토스트팝업</button>
          <transition name="wobble">
            <h1 v-if="toggle4" class="toast">
              뭔가 잘못되었어요!!!!!!!!!!!!!!!
            </h1>
          </transition>
        </div>
      </li>

      <li>
        <h2 class="h2">4. Group transition</h2>
        <div class="desc">
          <ul class="desc-list">
            <li>
              v-for를 이용하는 등 전체 리스트를 동시에 랜더링 하고 싶을 때
              "transition-group"을 사용한다.
            </li>
            <li>
              "transition-group" 자체만으로는 감싸는 요소를 만들어주지
              않는다.<br />
              tag="ul"로 속성을 주어야 ul 태그로 감싸진다.
            </li>
            <li>기존 transition과 동일하게 name을 입력한다.</li>
            <li>key는 당연히 입력해주어야한다.</li>
          </ul>
        </div>
        <div class="code">
          <pre>
&lt;div class="flex"&gt;
  &lt;input type="text" v-model="inputData2" @keypress.enter="addList2" /&gt;
  &lt;button class="btn" @click="addList2"&gt;부드럽게 리스트 추가&lt;/button&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;<strong>transition-group</strong> <strong class="c1">tag="ul"</strong> <strong class="c2">name="list"</strong> class="todo"&gt;
    &lt;li v-for="item in list2" :key="item.id"&gt;
      &lt;div&gt;
          &#123;&#123; item.text &#125;&#125;
        &lt;button @click="deleteThis2(item.id)"&gt;삭제&lt;/button&gt;
      &lt;/div&gt;
    &lt;/li&gt;
  &lt;/<strong>transition-group</strong>&gt;
&lt;/div&gt;

&lt;style&gt;
  .list-enter-from,
  .list-leave-to {
    transform: scale(0.6);
    opacity: 0;
  }
  .list-enter-to,
  .list-leave-from {
    transform: scale(1);
    opacity: 1;
  }
  .list-enter-active {
    transition: all 0.6s ease;
  }
<strong>
  .list-leave-active {
    position: absolute;</strong>
    transition: all 0.6s ease;
  }
<strong class="c1">
  .list-move {
    transition: all 0.6s ease;
  }</strong>
&lt;/style&gt;
          </pre>
        </div>
        <div class="ex">
          <h3 class="h3">적용 전)</h3>
          <div class="flex">
            <input
              type="text"
              v-model="inputData1"
              @keypress.enter="addList1"
            />
            <button class="btn" @click="addList1">딱딱하게 리스트 추가</button>
          </div>
          <ul class="todo">
            <li v-for="item in list1" :key="item.id">
              <div>
                {{ item.text }}
                <button @click="deleteThis1(item.id)">삭제</button>
              </div>
            </li>
          </ul>
          <h3 class="h3">적용 후)</h3>
          <div class="flex">
            <input
              type="text"
              v-model="inputData2"
              @keypress.enter="addList2"
            />
            <button class="btn" @click="addList2">부드럽게 리스트 추가</button>
          </div>
          <div>
            <transition-group tag="ul" name="list" class="todo" appear>
              <li v-for="item in list2" :key="item.id">
                <div>
                  {{ item.text }}
                  <button @click="deleteThis2(item.id)">삭제</button>
                </div>
              </li>
            </transition-group>
          </div>
        </div>
      </li>

      <li>
        <h2 class="h2">5. Transitioning between Elements</h2>
        <div class="desc">
          <ul class="desc-list">
            <li>mode=in-out : 들어오는 것 먼저, 그다음 나가기</li>
            <li>mode=out-in : 나가는 것 먼저, 그다음 들어오기</li>
            <li>appear : 최초 렌더링시 트랜지션을 사용</li>
          </ul>
        </div>
        <div class="code">
          <pre>
&lt;transition name="switch" <strong>mode="out-in"</strong> <strong class="c2">appear</strong>&gt;
  &lt;div <strong class="c1">v-if="list4.length"</strong>&gt;
    &lt;transition-group tag="ul" name="list" class="todo"&gt;
      &lt;li v-for="item in list4" :key="item.id"&gt;
        &lt;div&gt;
          &#123;&#123; item.text &#125;&#125;
          &lt;button @click="deleteThis4(item.id)"&gt;삭제&lt;/button&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/transition-group&gt;
  &lt;/div&gt;
  &lt;div <strong class="c1">v-else</strong> class="nodata"&gt;할 일이 없습니다!&lt;/div&gt;
&lt;/transition&gt;

&lt;style&gt;
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

<strong class="c2">/*
기본값이므로 생략 가능합니다.</strong>

.switch-enter-to,
.switch-leave-from {
  opacity: 1;
  transform: translateY(0);
}
<strong class="c2">
기본값이므로 생략 가능합니다.
*/</strong>

.switch-enter-active,
.switch-leave-active {
  transition: all 0.6s ease;
}
&lt;/style&gt;
          </pre>
        </div>
        <div class="ex">
          <h3 class="h3">적용 전)</h3>
          <div class="flex">
            <input
              type="text"
              v-model="inputData3"
              @keypress.enter="addList3"
            />
            <button class="btn" @click="addList3">딱딱하게 리스트 추가</button>
          </div>
          <div>
            <ul class="todo" v-if="list3.length">
              <li v-for="item in list3" :key="item.id">
                <div>
                  {{ item.text }}
                  <button @click="deleteThis3(item.id)">삭제</button>
                </div>
              </li>
            </ul>
            <div v-else class="nodata">할 일이 없습니다!</div>
          </div>
          <h3 class="h3">적용 후) in-out</h3>
          <div class="flex">
            <input
              type="text"
              v-model="inputData4"
              @keypress.enter="addList4"
            />
            <button class="btn" @click="addList4">부드럽게 리스트 추가</button>
          </div>
          <transition name="switch" mode="in-out">
            <div v-if="list4.length">
              <transition-group tag="ul" name="list" class="todo">
                <li v-for="item in list4" :key="item.id">
                  <div>
                    {{ item.text }}
                    <button @click="deleteThis4(item.id)">삭제</button>
                  </div>
                </li>
              </transition-group>
            </div>
            <div v-else class="nodata">할 일이 없습니다!</div>
          </transition>
          <h3 class="h3">적용 후) out-in</h3>
          <div class="flex">
            <input
              type="text"
              v-model="inputData5"
              @keypress.enter="addList5"
            />
            <button class="btn" @click="addList5">부드럽게 리스트 추가</button>
          </div>
          <transition name="switch" mode="out-in">
            <div v-if="list5.length">
              <transition-group tag="ul" name="list" class="todo">
                <li v-for="item in list5" :key="item.id">
                  <div>
                    {{ item.text }}
                    <button @click="deleteThis5(item.id)">삭제</button>
                  </div>
                </li>
              </transition-group>
            </div>
            <div v-else class="nodata">할 일이 없습니다!</div>
          </transition>
        </div>
        <div class="ex">
          <h3 class="h3">in-out</h3>
          <div class="in-out">
            <transition name="spinning" mode="in-out">
              <button
                v-if="spinning1"
                @click="spinning1 = !spinning1"
                class="rock"
              >
                굴러온 돌
              </button>
              <button v-else @click="spinning1 = !spinning1" class="rock">
                박힌 돌
              </button>
            </transition>
          </div>
        </div>
        <div class="ex">
          <h3 class="h3">out-in</h3>
          <transition name="spinning" mode="out-in">
            <button
              v-if="spinning2"
              @click="spinning2 = !spinning2"
              class="rock"
            >
              굴러온 돌
            </button>
            <button v-else @click="spinning2 = !spinning2" class="rock">
              박힌 돌
            </button>
          </transition>
        </div>
      </li>

      <li>
        <h2 class="h2">6. Router Transition</h2>
        <h3 class="h3">Vue2</h3>
        <div class="code">
          <pre>
&lt;transition :name="fade"&gt;
  &lt;router-view&gt;&lt;/router-view&gt;
&lt;/transition&gt;
          </pre>
        </div>
        <h3 class="h3">Vue3</h3>
        <div class="code">
          <pre>
&lt;router-view <strong>v-slot="{ Component }"</strong>&gt;
  &lt;transition name="fade" mode="out-in"&gt;
    <strong class="c1">&lt;component :is="Component" /&gt;</strong>
  &lt;/transition&gt;
&lt;/router-view&gt;
          </pre>
        </div>
        <div class="ex">
          <h3 class="h3">적용 후)</h3>
          <router-link class="btn" to="/address">주소찾기 팝업</router-link>
        </div>
      </li>

      <li>
        <h2 class="h2">7. Javascript Hook</h2>
        <div class="desc">
          CSS 클래스처럼, javascript 훅이 존재한다.<br />
          이를 Vue 컴포넌트의 method 객체에 정의하여 사용
          <ul class="desc-list" style="margin: 10px 0">
            <li><strong>before-enter</strong></li>
            <li><strong>enter</strong></li>
            <li><strong>after-enter (once the animation finished)</strong></li>
            <li>
              <strong>
                after-enter-cancelled (add element before animation is finished)
              </strong>
            </li>
            <li><strong>before-leave()</strong></li>
            <li><strong>after-leave</strong></li>
            <li><strong>leave</strong></li>
            <li><strong>after-leave-cancelled</strong></li>
          </ul>
          method에 함수를 정의 할 때는 el 및 done을 input variable로 정확히
          명시해야함<br />
          enter 및 leave 훅에서 done 콜백 함수를 호출해야함<br />
          콜백 호출 안하면, 동기적으로 호출이 되어 트랜지션이 즉시 완료되어버림
        </div>
        <div class="code">
          <pre>
&lt;transitio&gt;
@before-enter="beforeEnter"
@enter="enter"
@after-enter="afterEnter"
@enter-cancelled="enterCancelled"
@before-leave="beforeLeave"
@leave="leave"
@after-leave="afterLeave"
@leave-cancelled="leaveCancelled"
>
자바스크립트 훅 트랜지션
&lt;/transition&gt;</pre
          >
        </div>
        <div class="ex">
          <button class="btn" @click="showHook = !showHook">
            transition 확인하기
          </button>
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
          >
            자바스크립트 훅 트랜지션
          </transition>
          <h3 class="h3">더 많은 정보는</h3>
          <a
            class="btn"
            href="https://chansnotes.github.io/2019/06/10/tutorial10-transition/"
            target="_blank"
            >여기에...</a
          >
          <router-link to="qna" class="btn">마무리</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Transition",
  computed: {},
  data() {
    return {
      toggle1: false,
      toggle2: false,
      toggle3: false,
      toggle4: false,
      toggle5: false,
      inputData1: "",
      inputData2: "",
      inputData3: "",
      inputData4: "",
      inputData5: "",
      spinning1: false,
      spinning2: false,
      list1: [
        { text: "버스 타기", id: 1 },
        { text: "출근 찍기", id: 2 },
        { text: "커피 마시기", id: 3 },
      ],
      list2: [
        { text: "버스 타기", id: 1 },
        { text: "출근 찍기", id: 2 },
        { text: "커피 마시기", id: 3 },
      ],
      list3: [{ text: "default 삭제하기", id: 1 }],
      list4: [{ text: "in-out 삭제하기", id: 1 }],
      list5: [{ text: "out-in 삭제하기", id: 1 }],
    };
  },
  methods: {
    addList1() {
      if (this.inputData1) {
        const id = Math.random();
        this.list1 = [{ text: this.inputData1, id }, ...this.list1];
        this.inputData1 = "";
      }
    },
    deleteThis1(id) {
      const delIndex = this.list1.findIndex((item) => {
        return item.id === id;
      });
      this.list1.splice(delIndex, 1);
    },
    addList2() {
      if (this.inputData2) {
        const id = Math.random();
        this.list2 = [{ text: this.inputData2, id }, ...this.list2];
        this.inputData2 = "";
      }
    },
    deleteThis2(id) {
      const delIndex = this.list2.findIndex((item) => {
        return item.id === id;
      });
      this.list2.splice(delIndex, 1);
    },
    addList3() {
      if (this.inputData3) {
        const id = Math.random();
        this.list3 = [{ text: this.inputData3, id }, ...this.list3];
        this.inputData3 = "";
      }
    },
    deleteThis3(id) {
      const delIndex = this.list3.findIndex((item) => {
        return item.id === id;
      });
      this.list3.splice(delIndex, 1);
    },
    addList4() {
      if (this.inputData4) {
        const id = Math.random();
        this.list4 = [{ text: this.inputData4, id }, ...this.list4];
        this.inputData4 = "";
      }
    },
    deleteThis4(id) {
      const delIndex = this.list4.findIndex((item) => {
        return item.id === id;
      });
      this.list4.splice(delIndex, 1);
    },
    addList5() {
      if (this.inputData5) {
        const id = Math.random();
        this.list5 = [{ text: this.inputData5, id }, ...this.list5];
        this.inputData5 = "";
      }
    },
    deleteThis5(id) {
      const delIndex = this.list5.findIndex((item) => {
        return item.id === id;
      });
      this.list5.splice(delIndex, 1);
    },
    beforeEnter(el) {
      console.log("beforeEnter", el);
    },
    enter(el, done) {
      console.log("enter", el);
      done();
    },
  },
};
</script>

<style lang="scss" scoped>
.transition-guide {
  width: 600px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: left;
  word-break: break-all;
  * {
    outline: none;
  }
  .h1 {
    font-weight: 700;
    font-size: 30px;
    text-align: center;
  }
  & > ul {
    margin: 50px 0 0;
    & > li {
      & + li {
        margin: 50px 0 0;
      }
      .h2 {
        font-weight: 700;
        font-size: 18px;
      }
      .desc {
        margin: 10px 0 0;
        font-size: 14px;
        color: #000;
      }

      * ~ .h3 {
        margin-top: 20px;
      }
      .h3 {
        margin-bottom: 10px;
        font-weight: 700;
      }
      .desc-list {
        li {
          position: relative;
          padding: 0 0 0 10px;
          &::before {
            display: block;
            content: "";
            position: absolute;
            top: 12px;
            left: 0;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: #393934;
          }
          & + li {
            margin: 5px 0 0;
          }
        }
      }
      .code {
        margin: 20px 0 0;
        border-radius: 5px;
        background: #000;
        padding: 20px;
        color: #fff;
        strong {
          font-weight: 400;
          color: #0ef3c6;
          &.c1 {
            color: #ffd000;
          }
          &.c2 {
            color: #fabeab;
          }
        }
        pre {
          text-align: left;
        }
      }
      .ex {
        margin: 20px 0 0;
        .btn {
          display: block;
          margin: 0 0 10px;
          border: none;
          padding: 10px 20px;
          border-radius: 3px;
          background: #72e1c5;
          font-weight: 700;
          color: #fff;
          text-align: center;
        }

        .flex {
          display: flex;
          position: relative;
          z-index: 5;
          margin: 0 0 10px;
          input {
            flex: 1;
            box-sizing: border-box;
            height: 44px;
            margin-right: 10px;
            border: 1px solid #969690;
            border-radius: 3px;
            padding: 10px;
            font-size: 14px;
            line-height: 1.5;
          }
          .btn {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .pepero-enter-from,
  .pepero-leave-to {
    opacity: 0;
  }
  .pepero-enter-active,
  .pepero-leave-active {
    transition: all 0.6s ease;
  }
  @keyframes wobble {
    0% {
      transform: translateY(60px);
      opacity: 0;
    }
    50% {
      transform: translateY(0);
      opacity: 1;
    }
    60% {
      transform: translateX(8px);
    }
    70% {
      transform: translateX(-8px);
    }
    80% {
      transform: translateX(8px);
    }
    90% {
      transform: translateX(-8px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .wobble-enter-active {
    animation: wobble 1s ease;
  }
  .wobble-leave-to {
    transform: translateY(60px);
    opacity: 0;
  }
  .wobble-leave-active {
    transition: all 1s ease;
  }
  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    z-index: 10;
    width: 500px;
    margin-left: -250px;
    border-radius: 10px;
    padding: 20px;
    background: crimson;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    text-align: center;
  }

  .list-enter-from,
  .list-leave-to {
    transform: scale(0.6);
    opacity: 0;
  }
  .list-enter-to,
  .list-leave-from {
    transform: scale(1);
    opacity: 1;
  }
  .list-enter-active {
    transition: all 0.6s ease;
  }
  .list-leave-active {
    position: absolute;
    transition: all 0.6s ease;
  }
  .list-move {
    transition: all 0.6s ease;
  }
  .todo {
    position: relative;
    li {
      display: block;
      width: 100%;
      border-radius: 3px;
      padding: 10px;
      background: #dddddd;
      div {
        display: flex;
        justify-content: space-between;
      }
      & + li {
        margin: 10px 0 0;
      }
    }
  }
  .nodata {
    padding: 50px 0;
    text-align: center;
  }

  .rock {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #969690;
    color: #fff;
    line-height: 100px;
  }
  .in-out {
    position: relative;
    height: 100px;
    .rock {
      position: absolute;
    }
  }

  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .switch-enter-to,
  .switch-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  .switch-enter-active,
  .switch-leave-active {
    transition: all 0.6s ease;
  }

  .spinning-enter-from {
    opacity: 0;
    transform: translateX(500px) rotate(2160deg);
  }
  .spinning-leave-to {
    opacity: 0;
    transform: translateX(-500px) rotate(2160deg);
  }
  .spinning-enter-active,
  .spinning-leave-active,
  .spinning-move {
    transition: all 0.6s ease;
  }
}
</style>
