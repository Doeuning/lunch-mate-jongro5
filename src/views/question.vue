<template>
  <div class="lunch-wrap">
    <transition name="spinning">
      <div class="lunch-inner" v-if="resultOn < 0">
        <h1 class="tit">
          {{ "Q" + parseInt(currNum) + ". " + qna[currState].q }}
        </h1>
        <transition-group tag="ul" name="list" appear>
          <li v-for="a in qna[currState].a" :key="a.link">
            <form-radio
              v-model="a.value"
              :radioTitle="a.msg"
              :radioName="qna[currState].name"
              :radioId="a.link"
              @rdo-checked="nextQ"
            />
          </li>
        </transition-group>
        <form-button @go-back="goBack"></form-button>
      </div>
      <div class="lunch-result" v-else>
        <div class="result-inner">
          <div
            class="bg"
            :style="{ backgroundImage: 'url(' + result[resultOn].img + ')' }"
          ></div>
          <div class="subtit">오늘의 점심은</div>
          <div class="tit">
            {{ result[resultOn].name }}
          </div>
          <p class="desc" v-show="result[resultOn].desc">
            "{{ result[resultOn].desc }}"
          </p>
          <a
            :href="result[resultOn].link"
            v-if="result[resultOn].link"
            target="_blank"
            >위치 찾기</a
          >
        </div>
        <form-button @go-back="goBack"></form-button>
      </div>
    </transition>
  </div>
</template>

<script>
import formRadio from "../components/form-radio.vue";
import formButton from "../components/form-button.vue";
export default {
  name: "Question",
  components: {
    "form-radio": formRadio,
    "form-button": formButton,
  },
  data() {
    return {
      currNum: 1,
      currState: 0,
      resultOn: -1,
      backUrl: [],
      qna: [
        {
          q: "어제 술을 드셨나요?",
          name: "drink",
          a: [
            {
              value: false,
              msg: "네, 먹었어요.",
              link: "drink-yes",
            },
            {
              value: false,
              msg: "안 먹었어요.",
              link: "drink-no",
            },
          ],
        },
        {
          q: "속이 안좋으신가요?",
          name: "drink-yes",
          a: [
            {
              value: false,
              msg: "속이 울렁거려요.",
              link: "sick-yes",
            },
            {
              value: false,
              msg: "괜찮습니다.",
              link: "sick-no",
            },
          ],
        },
        {
          q: "어제 저녁에 뭐 드셨어요?",
          name: "drink-no",
          a: [
            {
              value: false,
              msg: "집밥 먹었어요.",
              link: "home-yes",
            },
            {
              value: false,
              msg: "사 먹었어요.",
              link: "home-no",
            },
          ],
        },
        {
          q: "그나마 어떤 음식이 땡기시나요?",
          name: "sick-no",
          a: [
            {
              value: false,
              msg: "한식",
              link: "korean-type",
            },
            {
              value: false,
              msg: "중식",
              link: "chinese",
            },
            {
              value: false,
              msg: "일식",
              link: "japanese",
            },
            {
              value: false,
              msg: "이탈리안",
              link: "italian",
            },
          ],
        },
        {
          q: "어떤 음식이 땡기시나요?",
          name: "home-yes",
          a: [
            {
              value: false,
              msg: "흠...",
              link: "sick-no",
            },
            {
              value: false,
              msg: "비교적 저렴하게 영양소를 골고루 채우고 싶어요.",
              link: "subway",
            },
          ],
        },
        {
          q: "그럼 집밥st가 땡기시겠네요?",
          name: "home-no",
          a: [
            {
              value: false,
              msg: "엄마 보고싶다...",
              link: "mom",
            },
            {
              value: false,
              msg: "아니요? 솔직히 뭘 먹고싶은지 모르겠는데... 그건 아니에요.",
              link: "no-food",
            },
            {
              value: false,
              msg: "집밥st 좋아요.",
              link: "home-food",
            },
          ],
        },
        {
          q: "나트륨 한그릇 어떠세요?",
          name: "korean-type",
          a: [
            {
              value: false,
              msg: "한국인은 나트륨.",
              link: "korean",
            },
            {
              value: false,
              msg: "그나마 건강식을 먹고싶어요.",
              link: "korean2",
            },
            {
              value: false,
              msg: "이것저것 다 먹고싶어요.",
              link: "korean3",
            },
            {
              value: false,
              msg: "메인 메뉴 각각 하나 시키고 반찬이랑 먹고싶어요.",
              link: "korean4",
            },
          ],
        },
      ],
      result: [
        {
          code: "sick-yes",
          name: "본죽&비빔밥",
          desc: "아프지마세요.",
          link: "http://naver.me/xhHl1GXm",
          img: "https://ldb-phinf.pstatic.net/20211111_138/1636585170011FxTOS_JPEG/SyxpSqEbF52MmresgnybMpEapPvrokriuTXEmsfnloOypfRAbn3CMu8BjD2Jjrot.jpg",
        },
        {
          code: "korean",
          name: "조가네뼈해장국",
          desc: "여기 맛있어요. 추천합니다.",
          link: "http://naver.me/IgTNbuaX",
          img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2021_06_10_413%2F887b9cfb-c9e8-11eb-96b3-a0369ff95ec0_01.jpg",
        },
        {
          code: "chinese",
          name: "종로신짬뽕",
          desc: "안 가봤어요.",
          link: "http://naver.me/xhHUOIEc",
          img: "https://ldb-phinf.pstatic.net/20200814_213/1597365564623BWUk4_JPEG/Iu8ZHL3CDRJ92VrxLLqKPZ6Qx-pQrN3yw4uxXibecLPYdcQX4Pyb_3YWJRMuLvz4.jpg",
        },
        {
          code: "japanese",
          name: "니지라멘",
          desc: "비싸고 양 적은데 맛은 있어요. 고춧가루? 매운가루? 꼭 넣어 드세요.",
          link: "http://naver.me/GLKAHZ1v",
          img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjNfMjI5%2FMDAxNjAwODM4OTE0MTQw.6hqVUU6jhhQeZ63TY7NJrbC5837m-pJaddW5MeR15cYg.PCtq2VtQZgmsOHGetImemxM9_k-HEeDgVap9XJJDu4Eg.JPEG.herohwangsae%2FKakaoTalk_20200703_104034222_20.jpg",
        },
        {
          code: "italian",
          name: "바스타",
          desc: "가격대가 조금 있네요. 저는 롤링파스타요..",
          link: "http://naver.me/FXZrj8xr",
          img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210510_8%2F1620657729204BPfaU_JPEG%2Fupload_50e7e5b0a2674053899895a378bb770c.jpg",
        },
        {
          code: "korean2",
          name: "전주집",
          desc: "저도 가고싶은데...저랑 같이 가실래요?",
          link: "http://naver.me/xGOidHIo",
          img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150831_50%2F1441006494468yCjHb_JPEG%2F11619310_0.jpg",
        },
        {
          code: "korean3",
          name: "월선네",
          desc: "꿀팁 : 청국장->차돌된장찌개로 변경 가능. 밥에 계란후라이 올려서 나오는데, 1,000원 추가하면 비빔밥으로 변경 가능.",
          link: "http://naver.me/56IaUkdw",
          img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210701_207%2F1625112193091GDuNF_JPEG%2Fupload_6421988eeef11d23be7ecbd45ea5a221.jpg",
        },
        {
          code: "korean4",
          name: "골목집",
          desc: "가까워서 좋아요. 어묵볶음이 밥도둑이에요.",
          link: "http://naver.me/5ZREcud0",
          img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200416_136%2F15870447448851fdDi_JPEG%2Fupload_9082bd842f94b2f4455f18a9af05634f.jpeg",
        },
        {
          code: "subway",
          name: "서브웨이",
          desc: "지금은 터키 샌드위치 4,100원 이벤트 중이에요.",
          link: "http://naver.me/IG6sZ7NO",
          img: "https://ldb-phinf.pstatic.net/20200901_224/1598926290854gTbWY_PNG/5hDcAAs8rDBpb1kO227d8xSB.png",
        },
        {
          code: "mom",
          name: "고속터미널 버스 예약",
          desc: "어머니께 밥상을 차려드리는건 어떨까요?",
          link: "https://www.kobus.co.kr/mrs/rotinf.do",
          img: "data:image/jpeg;base64,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",
        },
        {
          code: "no-food",
          name: "저는.. 못고르겠어요....",
          desc: null,
          link: null,
          img: "https://mblogthumb-phinf.pstatic.net/MjAxODAzMDNfMTMg/MDAxNTIwMDc1NTkxNjc0.zjW62L8vlX7HMkgavExhHG8A5tps8BwktOEfJQgUeo8g.lt88MsuMvN5rDjdygndU2b_N4DeNwJkJc5R43cIl0EEg.JPEG.kim8327809/NaverBlog_20180303_201311_00.jpg?type=w2",
        },
        {
          code: "home-food",
          name: "별미한식부페",
          desc: "가보고 저한테 후기 좀 알려주세요.",
          link: "http://naver.me/GhEBkhB4",
          img: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMDdfMjcz%2FMDAxNTc1NzEwMDY2ODYz.UbJ5FGxRgj0186pPRirEKf8_LbdwNckPw9uCtvi7r6Ug.R31IMuScOpVn5oJp6carLM9D0rszUaJHWjufXaGnjb8g.JPEG.definitice%2F1575710065998.jpg",
        },
      ],
    };
  },
  methods: {
    nextQ(target) {
      setTimeout(() => {
        let resultCode = this.result.findIndex((el) => {
          return el.code === target.id;
        });

        if (resultCode >= 0) {
          this.resultOn = resultCode;
        } else {
          this.currNum++;
          let index = this.qna.findIndex((el) => {
            return el.name === target.id;
          });

          this.currState = index;
        }
      }, 500);

      this.backUrl.push(target.id);
    },
    goBack() {
      if (this.resultOn > -1) {
        this.resultOn = -1;
      } else {
        if (this.currNum > 1) {
          this.currNum--;
        }
      }
      let beforeUrl = "";
      beforeUrl = this.backUrl[this.backUrl.length - 2];
      this.backUrl.splice(this.backUrl.length - 1, 1);
      if (!beforeUrl) {
        beforeUrl = "drink";
      }
      let index = this.qna.findIndex((el) => {
        return el.name === beforeUrl;
      });
      this.currState = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.lunch-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 25px;
  .lunch-inner {
    width: 500px;
    .tit {
      margin: 0 0 60px;
      font-size: 30px;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        text-align: left;
        & + li {
          margin: 20px 0 0;
        }
      }
    }
  }
  .lunch-result {
    max-width: 500px;
    .result-inner {
      border-radius: 10px;
      padding: 20px;
      background: rgba(0, 0, 0, 0.3);
      text-align: center;
    }
    .bg {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      animation: bounce 0.5s infinite;
    }
    .subtit {
      display: block;
      font-weight: 300;
      font-size: 30px;
      color: #fff;
    }
    .tit {
      display: block;
      font-weight: 700;
      font-size: 50px;
      color: #fff;
    }
    .desc {
      margin: 20px 0 0;
      font-size: 30px;
      color: #fff;
    }
    a {
      display: block;
      margin: 30px auto 0;
      border-radius: 5px;
      padding: 20px 50px;
      background: #fff;
      font-size: 20px;
      transition: all 0.3s;
      &:hover,
      &:focus {
        font-size: 26px;
        transform: scale(0.9);
        background: #286e38;
        color: #fff;
      }
    }
  }
}

a {
  text-decoration: none;
  color: inherit;
}

@keyframes bounce {
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.list-enter-from {
  opacity: 0;
  z-index: -10;
  transform: translate(0, 30px);
}
.list-enter-to {
  opacity: 1;
  z-index: 10;
  transform: translate(0, 0);
}
.list-enter-active {
  transition: all 0.4s ease;
}

.list-leave-from {
  opacity: 1;
  z-index: 10;
  transform: translate(0, 0);
}
.list-leave-to {
  opacity: 0;
  z-index: -10;
  transform: translate(0, -30px);
}
.list-leave-active {
  position: absolute;
  transition: all 0.4s ease;
}
.list-move {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  z-index: -10;
  transform: translate(0, 30px);
}
.fade-enter-to {
  opacity: 1;
  z-index: 10;
  transform: translate(0, 0);
}
.fade-enter-active {
  transition: all 0.4s ease;
}

.fade-leave-from {
  opacity: 1;
  z-index: 10;
  transform: translate(0, 0);
}
.fade-leave-to {
  opacity: 0;
  z-index: -10;
  transform: translate(0, -30px);
}
.fade-leave-active {
  position: absolute;
  transition: all 0.4s ease;
}
.fade-move {
  transition: all 0.3s ease;
}

.spinning-enter-from {
  opacity: 0;
  z-index: -10;
  transform: rotate(0deg) scale(0.5);
}
.spinning-enter-to {
  opacity: 1;
  z-index: 10;
  transform: rotate(1080deg) scale(1);
}
.spinning-enter-active {
  position: absolute;
  transition: all 0.6s ease-in;
}

.spinning-leave-from {
  position: relative;
  opacity: 1;
  z-index: 10;
}
.spinning-leave-to {
  opacity: 0;
  z-index: -10;
}
.spinning-leave-active {
  position: relative;
  transition: opacity 0.3s ease-in;
}
.spinning-move {
  transition: all 0.3s ease-in;
}
</style>
