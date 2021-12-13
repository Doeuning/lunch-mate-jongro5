<template>
  <div class="guide-wrap">
    <h1 class="h1">동기와 비동기</h1>
    <ul>
      <li>
        <h2 class="h2">1. 기본</h2>
        <div class="desc">
          <p>JavaScript는 동기적이고, blocking이며, single-threaded한 언어</p>
          <p>
            사람들이 JavaScript가 비동기 언어라고 흔히 오해하는 이유는, 우리가
            <strong>Javascript를 비동기식으로 동작하도록 조작</strong>할 수 있기
            때문이다.
          </p>
          <h3 class="h3">동기</h3>
          <p>요청 후 응답을 받아야 다음 동작을 실행하는 방식.</p>
          <h3 class="h3">비동기</h3>
          <p>요청 후 응답과 관계없이 바로 다음 동작을 실행하는 방식.</p>
        </div>
        <div class="ex">
          <div class="btn-wrap">
            <button type="button" class="btn" @click="actionDelay">동기</button>
            <button type="button" class="btn" @click="actionAsync">
              비동기
            </button>
            <button type="button" class="btn" @click="getData(callBack)">
              콜백함수
            </button>
          </div>
          <ul v-if="results" class="news-header">
            <li v-for="item in results" :key="item.id">
              {{ item.title }}
            </li>
          </ul>
        </div>
        <h3 class="h3">ex) 집안을 치우고 라면을 끓여먹자!</h3>
        <div class="ex">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhDBhga8gU4VVU53tv_d5hJWXZUH6PVB-9ymS5-0CCp3dH28DUsgWQ8twEg2z97dmH9KeWJr__9Z9xm1mQ_jFlYl_n08am2Zlsm5iYqgDtojJdNfyCEwx3QeIjgjWTqp4fX_10318EEzzdUA_rtYrceULv8xMmT3--2KdZ0XCkPfWyb_6eiJg3KDLIYwQ=w640-h355"
            alt=""
          />
        </div>
      </li>
      <li>
        <h2 class="h2">2. 콜백지옥</h2>
        <div class="desc">
          <p>
            콜백으로 결과를 받은 뒤 순차적으로 다음 작업을 진행하고자 할 때 발생
          </p>
        </div>
        <div class="code">
          <pre>
<strong class="c1">loadLink</strong>(<strong>function</strong>(){
  <strong class="c1">loadLink</strong>(<strong>function</strong>(){
    <strong class="c1">loadLink</strong>(<strong>function</strong>(){
      <strong class="c1">loadLink</strong>(<strong>function</strong>(){
        <strong class="c1">loadLink</strong>(<strong>function</strong>(){
          <strong class="c1">loadLink</strong>(<strong>function</strong>(){})
        })
      })
    })
  })
})

function <strong class="c1">loadLink</strong>( <strong>callback</strong> ){
  setTimeout(() => {
    <strong>callback();</strong>
  }, 1000);
}</pre>
        </div>
      </li>
      <li>
        <h2 class="h2">3. Promise</h2>
        <div class="desc">
          <p>
            Promise는 라이브러리로 존재했는데, 현재 ES6에서 기본 스펙이 되었음.
          </p>
          <p>
            Promise는 "지금은 없는데 이상 없으면 이따가 주고 알려줄게" 라는
            약속.
          </p>
          <h3 class="h3">상태(state)</h3>
          <ul class="desc-list">
            <li>
              <h4 class="h4">pending</h4>
              <p>
                아직 약속을 <strong>수행중인 상태</strong>(fulfilled 혹은
                reject가 되기 전)
              </p>
            </li>
            <li>
              <h4 class="h4">fulfilled</h4>
              <p>약속(promise)이 <strong>지켜진 상태</strong></p>
            </li>
            <li>
              <h4 class="h4">rejected</h4>
              <p>
                약속(promise)이 어떤 이유에서 <strong>못 지켜진 상태</strong>
              </p>
            </li>
            <li>
              <h4 class="h4">settled</h4>
              <p>
                약속이 지켜졌든 안지켜졌든 일단
                <strong>결론이 난 상태</strong>
              </p>
            </li>
          </ul>
        </div>
        <div class="code">
          <pre>
var <strong class="c2">_promise</strong> = function(<strong class="c3">param</strong>){
  return <strong class="c2">new Promise</strong>(function(<strong>resolve, reject</strong>){
    // 비동기를 표현하기 위해 setTimeout 함수를 사용
    setTimeout(function(){
      <strong class="c1">// 파라미터가 참이면,</strong>
      if (<strong class="c3">param</strong>) {
        // 해결됨
        <strong>resolve('해결 완료);</strong>
      }
      <strong class="c1">// 파라미터가 거짓이면,</strong>
      else {
        <strong>reject(new Error('실패!'));</strong>
      }
    }, 3000);
  });
};

// Promise 실행
<strong class="c2">_promise(<strong class="c3">true</strong>)</strong>
  <strong class="c1">.then</strong>(<strong>function (text) {
    // 성공시
    console.log(text);
  }</strong>, <strong>function (error) {
    // 실패시
    console.error(error);
  }</strong>)<strong class="c1">.catch</strong>(error => console.log(error));
          </pre>
        </div>
        <div class="desc">
          <p>
            _promise()를 호출하면 Promise 객체가 리턴된다.<br />
            Promise 객체에는 정상적으로 비동기작업이 완료되었을 때 호출하는
            then이라는 API가 존재한다.<br />
            위의 예제는 하나의 then API를 호출해서 비동기작업이 완료되면 결과에
            따라 성공 혹은 실패 메세지를 콘솔로그로 찍어주게된다.
          </p>
          <p>
            then API는
            <strong
              >첫번째 파라미터에 성공시 호출할 함수를, 두번째 파라미터에 실패시
              호출할 함수를</strong
            >
            선언하면 Promise의 상태에 따라 수행하게된다.
          </p>
          <p>
            체이닝 형태로 연결된 상태에서 비동기 작업이 중간에 에러가 나면 catch
            API를 실행한다.
          </p>
          <p>resolve 시에는 then, reject 시에는 catch 가 실행된다.</p>
        </div>
        <div class="ex">
          <button class="btn" @click="activePromise(true)">
            promise 실행 - 성공
          </button>
          <button class="btn" @click="activePromise(false)">
            promise 실행 - 실패
          </button>
          <button class="btn" @click="activePromise(null)">
            promise 실행 - 에러
          </button>
        </div>
      </li>
      <li>
        <h2 class="h2">4. async & await</h2>
        <div class="desc">
          <p>
            기존의 비동기 처리방식인 콜백함수와 Promise의 단점을 보완하고,
            개발자가 읽기 좋은 코드를 작성할 수 있게 한다.
          </p>
          <p>
            <strong>함수 앞에 async</strong>라는 예약어를 붙인다. 그리고 나서
            함수의 내부 로직 중 HTTP통신을 하는
            <strong>비동기 처리 코드 앞에 await</strong>를 붙인다.
          </p>
          <p>여러개의 비동기 처리 코드를 다룰 때 유용하다.</p>
        </div>
        <div class="code">
          <pre>
// 사용자, 할 일 목록을 받아오는 HTTP 통신 코드

function <strong>fetchUser</strong>() {
  var url = 'https://jsonplaceholder.typicode.com/users/1'
  <strong class="c1">return fetch(url).then(function(response) {
    return response.json();
  });</strong>
}

function <strong>fetchTodo</strong>() {
  var url = 'https://jsonplaceholder.typicode.com/todos/1';
  <strong class="c1">return fetch(url).then(function(response) {
    return response.json();
  });</strong>
}</pre>
        </div>
        <div class="desc">
          <p><strong>* fetch는 promise 기반의 API.</strong></p>
        </div>
        <ol class="order-list">
          <li>fetchUser()를 이용하여 사용자 정보 호출</li>
          <li>받아온 사용자 아이디가 1이면 할 일 정보 호출</li>
          <li>받아온 할 일 정보의 제목을 콘솔에 출력</li>
        </ol>
        <div class="code">
          <pre>
<strong>async</strong> <strong class="c1">function logTodoTitle</strong>() {
  var user = <strong>await</strong> <strong class="c1">fetchUser</strong>();
  if (user.id === 1) {
    var todo = <strong>await</strong> <strong class="c1">fetchTodo</strong>();
    console.log(todo.title);
  }
}</pre>
        </div>
      </li>
      <li>
        <h2 class="h2">5. axios</h2>
        <div class="desc">
          <p>왜 axios를 쓸까요?</p>
        </div>
        <ul class="desc-list">
          <li>IE까지 대부분의 브라우저를 지원한다.</li>
          <li>JSON 데이터를 자동 변환해준다.</li>
          <li>Node.js에서도 사용 가능하다.</li>
          <li>요청을 중도 Cancel, 응답시간 초과 설정 등의 기능이 있다.</li>
        </ul>
        <div class="desc">
          <img
            src="https://blogger.googleusercontent.com/img/a/AVvXsEhSCLs6U_yrM7AczaWp-cKDOm7_Cad22RKpF3h3e6Ti2KcZ9QSGW7Jqpo_Z0Wh9GBuas03rvtB29fnxLPZbicKyDxst0k0N92kBwjFBf959MIN3ijrxCgITkx_0L4EDvfLA4rgpGvAp4QFuJgWwiFagTWwkSX9rkqU0tnn1ozPfD3pG4hhVNrQjlVcaLw=w688-h638"
            alt=""
          />
        </div>
        <h3 class="h3">axios 기본 사용법</h3>
        <div class="code">
          <pre>
<strong>axios</strong>
  <strong class="c1">.get</strong>('/user?ID=12345')
  // 응답(성공)
  <strong class="c1">.then</strong>(function(response) {
    console.log(response)
  })
  // 응답(실패)
  <strong class="c1">.catch</strong>(function(error) {
    console.log(error)
  })
  // 응답(항상 실행)
  .then(function() {
    // ...
  });</pre>
        </div>
        <h3 class="h3">async await를 함께 사용해서 좀 더 보기 좋게 쓰기</h3>
        <div class="code">
          <pre>
<strong>async function</strong> <strong class="c1">getUser</strong>() {
  <strong>try</strong> {
    const response = <strong>await axios.get</strong>('/user?ID=12345')
    console.log(response)
  } <strong>catch</strong> (error) {
    console.error(error)
  }
}
          </pre>
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
    getData(callbackFunction) {
      console.log("1. getData 실행");
      axios.get(this.url).then((res) => {
        console.log("2. data 받아오기 성공");
        callbackFunction(res.data);
      });
    },
    callBack(getdata) {
      console.log("3. callback함수 실행");
      this.results = getdata;
      console.log("4. 데이터 바인딩 성공");
    },
    test() {},
    // 콜백함수 끝
    actionAsync() {
      console.log("1 : 비동기 매서드 실행");

      setTimeout(function () {
        console.log("------- 2 : 2초 후 실행");
        alert("2초가 지났습니다.");
      }, 2000);

      console.log("3 : 실행 중");

      axios
        .get(this.url)
        .then((res) => {
          this.results = res.data;
          console.log("------- 4 : axios 완료");
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });

      console.log("5 : 실행 완료");
    },
    actionDelay() {
      this.delay(2000)
        .then(() => this.delay(1000))
        .then(() => Promise.resolve("끝"))
        .then(console.log);

      console.log("시작");
    },
    delay(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`${ms} 밀리초가 지났습니다.`);
          resolve();
        }, ms);
      });
    },
    promise(param) {
      return new Promise(function (resolve, reject) {
        // 비동기를 표현하기 위해 setTimeout 함수를 사용
        window.setTimeout(function () {
          // 파라메터가 참이면,
          if (param) {
            // 해결됨
            resolve("해결 완료");
          }

          // 파라메터가 거짓이면,
          else {
            // 실패
            reject(new Error("실패!!"));
          }
        }, 1500);
      });
    },
    activePromise(param) {
      this.promise(param)
        .then(
          function (text) {
            // 성공시
            console.log("성공", text);
          },
          function (error) {
            // 실패시
            console.error("실패", error);
          }
        )
        .catch(function (error) {
          console.error("에러", error);
        });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
}
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
        font-size: 24px;
      }
      .h3 {
        font-weight: 500;
        font-size: 20px;
      }
      .desc {
        margin: 10px 0 0;
        font-size: 16px;
        color: #000;
        p {
          & ~ p {
            margin-top: 10px;
          }
        }
        strong {
          color: orangered;
        }
      }

      * ~ .h3 {
        margin-top: 20px;
      }
      .h3 {
        margin-bottom: 10px;
        font-weight: 700;
      }
      .order-list {
        margin: 10px 0 0;
        li {
          position: relative;
          padding: 0 0 0 10px;
          list-style: number;
          & + li {
            margin: 5px 0 0;
          }
        }
      }
      .desc-list {
        margin: 10px 0 0;
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
        line-height: 1.4;
        strong {
          font-weight: 400;
          color: #0ef3c6;
          &.c1 {
            color: #ffd000;
          }
          &.c2 {
            color: #fabeab;
          }
          &.c3 {
            color: #6dc6ff;
          }
        }
        pre {
          text-align: left;
          font-family: D2Coding;
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
          background: #286e38;
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
  .news-header {
    display: flex;
    flex-wrap: wrap;
    li {
      overflow: hidden;
      box-sizing: border-box;
      width: 50%;
      border: 1px solid #969690;
      border-radius: 5px;
    }
  }
}
</style>
