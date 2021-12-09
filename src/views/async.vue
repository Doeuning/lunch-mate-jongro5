<template>
  <div class="guide-wrap">
    <h1 class="h1">동기와 비동기</h1>
    <ul>
      <li>
        <h2 class="h2">1. 기본</h2>
        <div class="desc">
          <p>JavaScript는 동기적이고, blocking이며, single-threaded한 언어</p>
          <p>
            사람들이 JavaScript가 비동기 언어라고 흔히 오해하는 이유는,
            우리는Javascript가 비동기식으로 동작하도록 조작할 수 있기 때문이다.
          </p>
          <h3 class="h3">동기</h3>
          <p>요청 후 응답을 받아야 다음 동작을 실행하는 방식.</p>
          <h3 class="h3">비동기</h3>
          <p>요청 후 응답과 관계없이 바로 다음 동작을 실행하는 방식.</p>
        </div>
        <div class="ex">
          <div class="btn-wrap">
            <button type="button" class="btn" @click="actionSync">동기</button>
            <button type="button" class="btn" @click="actionAsync">
              비동기
            </button>
            <button type="button" class="btn" @click="getData(callBack)">
              데이터 가져오기
            </button>
          </div>
          <ul v-if="results">
            <li v-for="item in results" :key="item.id">
              {{ item.title }}
            </li>
          </ul>
        </div>
        <h3 class="h3">집안 치우고 라면을 끓여먹자!</h3>
        <div class="ex">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhDBhga8gU4VVU53tv_d5hJWXZUH6PVB-9ymS5-0CCp3dH28DUsgWQ8twEg2z97dmH9KeWJr__9Z9xm1mQ_jFlYl_n08am2Zlsm5iYqgDtojJdNfyCEwx3QeIjgjWTqp4fX_10318EEzzdUA_rtYrceULv8xMmT3--2KdZ0XCkPfWyb_6eiJg3KDLIYwQ=w640-h355"
            alt=""
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "async",
  data() {
    return {
      results: "",
      url: "https://api.hnpwa.com/v0/news/1.json",
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    // 콜백함수 시작
    getData(callback) {
      axios.get(this.url).then((res) => {
        callback(res.data);
      });
    },
    callBack(getdata) {
      this.results = getdata;
    },
    test() {},
    // 콜백함수 끝
    actionAsync() {
      console.log("1 : 비동기 매서드 실행");

      setTimeout(function () {
        console.log("------- 2 : 2초 후 실행");
      }, 2000);

      console.log("3 : 실행 중");

      axios.get(this.url).then((res) => {
        this.results = res.data;
        console.log("------- 4 : axios 완료");
      });
    },
    async actionSync() {
      console.log("1 : 동기 매서드 실행");
      await axios
        .get(this.url)
        .then((res) => {
          this.results = res.data;
          console.log("2 : axios 완료");
        })
        .then(function () {
          console.log("3 : 실행 중");
        })
        .then(function () {
          console.log("4 : 실행 중");
        })
        .then(function () {
          console.log("5 : 실행 완료");
        });
    },
  },
};
</script>

<style lang="scss">
ul {
  padding: 0;
  li {
    list-style: none;
  }
}

.guide-wrap {
  width: 600px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: left;
  word-break: break-all;
  * {
    outline: none;
  }
  button {
    cursor: pointer;
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
}
</style>
