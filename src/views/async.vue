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
            <button type="button" class="btn" @click="actionSync">동기</button>
          </div>
          <!--          <ul v-if="results" class="news-header">-->
          <!--            <li v-for="item in results" :key="item.id">-->
          <!--              {{ item.title }}-->
          <!--            </li>-->
          <!--          </ul>-->
        </div>
        <div class="code">
          <pre>
function <strong class="c1">msg()</strong> {
  <strong>console.log("안녕하세요.");
  console.log("저는 김도은입니다.");</strong>
}

<strong>console.log("시작");</strong>
<strong class="c1">msg();</strong>
<strong>console.log("끝");</strong></pre>
        </div>
        <div class="ex">
          <div class="btn-wrap">
            <button type="button" class="btn" @click="actionAsync">
              비동기
            </button>
          </div>
        </div>
        <div class="code">
          <pre>
<strong>console.log("시작");</strong>

setTimeout(() => {
  <strong class="c1">console.log("2초가 지났습니다.");</strong>
}, 2000);

<strong>console.log("끝");</strong></pre>
        </div>
        <!--        <div class="ex">-->
        <!--          <div class="btn-wrap">-->
        <!--            <button type="button" class="btn" @click="getData(callBack)">-->
        <!--              콜백함수-->
        <!--            </button>-->
        <!--          </div>-->
        <!--        </div>-->
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
        <div class="ex">
          <div class="btn-wrap">
            <button class="btn" @click="callbackHell">콜백지옥</button>
          </div>
        </div>
        <div class="code">
          <pre>callbackHell();</pre>
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
        <div class="ex">
          <div class="btn-wrap">
            <button class="btn" @click="promiseAction">promise</button>
          </div>
        </div>
        <div class="code">
          <pre>
console.log("시작");

function <strong>loginUser</strong>(<strong class="c1">email</strong>, password) {
  return new Promise((<strong class="c2">resolve</strong>) => {
    setTimeout(() => {
      console.log("1. 데이터를 받았습니다", email, password);
      <strong class="c2">resolve</strong>({ userEmail: <strong class="c1">email</strong> });
    }, 2000);
  });
}

function <strong>getUserVideos</strong>(email) {
  return new Promise((<strong class="c2">resolve</strong>) => {
    setTimeout(() => {
      console.log("2. 이메일을 받았습니다", email);
      const <strong class="c1">movies</strong> = [
        { title: "타이타닉", type: "눈물샘 자극" },
        { title: "나 홀로 집에", type: "재미있음" },
        { title: "화이트칙스", type: "웃김" },
      ];
      <strong class="c2">resolve</strong>(<strong class="c1">movies</strong>);
    }, 2000);
  });
}

function <strong>videoDetails</strong>(<strong class="c1">video</strong>) {
  return new Promise((<strong class="c2">resolve</strong>) => {
    setTimeout(() => {
      console.log("3. 비디오를 받았습니다", video);
      <strong class="c2">resolve</strong>(<strong class="c1">video</strong>);
    }, 2000);
  });
}

const user = loginUser(<strong class="c1">"hahahoho@gmail.com", "fsdf"</strong>)
  .<strong class="c3">then</strong>((<strong class="c1">user</strong>) => getUserVideos(<strong class="c1">user</strong>.userEmail))
  .<strong class="c3">then</strong>((<strong class="c1">videos</strong>) => videoDetails(<strong class="c1">videos</strong>[0]))
  .<strong class="c3">then</strong>((<strong class="c1">movie</strong>) => console.log(<strong class="c1">movie</strong>.type))
  .<strong class="c3">catch</strong>((<strong class="c2">error</strong>) => console.log(<strong class="c2">error</strong>.message));

console.log(user);
console.log("끝");</pre>
        </div>
        <div class="desc">
          <p>
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
        <h3 class="h3">Promise All</h3>
        <div class="desc">
          <p>
            여러 정보를 받아와 사용할 때 데이터 수집의 순서가 상관 없으면 then
            체이닝으로 받는것은 시간낭비!
          </p>
          <p>
            병렬구조로 동시다발적으로 데이터를 받아, 데이터 수집이 완료되면
            결과를 보여준다.
          </p>
        </div>
        <div class="ex">
          <button class="btn" @click="promiseAll()">promise all</button>
        </div>
        <div class="code">
          <pre>
const <strong>apple</strong> = new Promise((resolve) => {
  setTimeout(() => {
    console.log("사과의 정보를 받았다.");
    resolve(["충주사과", "안동사과", "대구사과"]);
  }, 2000);
});

const <strong>mango</strong> = new Promise((resolve) => {
  setTimeout(() => {
    console.log("망고의 정보를 받았다.");
    resolve(["필리핀망고", "베트남망고", "태국망고"]);
  }, 2000);
});

<strong class="c1">Promise.all</strong>([<strong>apple, mango</strong>]).then((result) => console.log(result));
          </pre>
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
        <div class="ex">
          <div class="btn-wrap">
            <button class="btn" @click="asyncAwait">async await</button>
          </div>
        </div>
        <div class="code">
          <pre>
<strong>async</strong> function videoType() {
  const loggedUser = <strong class="c1">await</strong> loginUser("doeun@gmail.com", 1234);
  const videos = <strong class="c1">await</strong> getUserVideos(loggedUser.userEmail);
  const detail = <strong class="c1">await</strong> videoDetails(videos[0]);
  console.log(detail.type);
}</pre>
        </div>
        <!--        <div class="desc">-->
        <!--          <p><strong>* fetch는 promise 기반의 API.</strong></p>-->
        <!--        </div>-->
        <!--        <ol class="order-list">-->
        <!--          <li>fetchUser()를 이용하여 사용자 정보 호출</li>-->
        <!--          <li>받아온 사용자 아이디가 1이면 할 일 정보 호출</li>-->
        <!--          <li>받아온 할 일 정보의 제목을 콘솔에 출력</li>-->
        <!--        </ol>-->
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
<strong class="c3">async</strong> <strong>function</strong> <strong class="c1">getUser</strong>() {
  <strong>try</strong> {
    const response = <strong class="c3">await</strong> <strong>axios.get</strong>('/user?ID=12345')
    console.log(response)
  } <strong>catch</strong> (error) {
    console.error(error)
  }
}</pre>
        </div>
        <div class="ex">
          <div class="btn-wrap">
            <a
              href="https://kyun2da.dev/%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/axios-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC/"
              target="_blank"
              class="btn"
              >axios 더보기</a
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "async",
  data() {
    return {
      results: "",
      url: "https://api.hnpwa.com/v0/news/1.json",
    };
  },
  mounted() {},
  methods: {
    callbackHell() {
      console.log("시작");

      function loginUser(email, password, callback) {
        setTimeout(() => {
          console.log("1. 데이터를 받았습니다");
          callback({ userEmail: email });
        }, 2000);
      }

      function getUserVideos(email, callback) {
        setTimeout(() => {
          console.log("2. 이메일을 받았습니다", email);
          const movies = [
            { title: "타이타닉", type: "눈물샘 자극" },
            { title: "나 홀로 집에", type: "재미있음" },
            { title: "화이트칙스", type: "웃김" },
          ];
          callback(movies);
        }, 2000);
      }

      function videoDetails(video, callback) {
        setTimeout(() => {
          console.log("3. 비디오를 받았습니다", video);
          callback(video);
        }, 2000);
      }

      const user = loginUser("hahahoho@gmail.com", "haha1", (user) => {
        console.log(user);
        getUserVideos(user.userEmail, (videos) => {
          console.log(videos);
          videoDetails(videos[0], (movie) => {
            console.log(movie.type);
            videoDetails(videos[0], (movie) => {
              console.log(movie.type);
            videoDetails(videos[0], (movie) => {
              console.log(movie.type);
            videoDetails(videos[0], (movie) => {
              console.log(movie.type);
            });
            });
            });
          });
        });
      });

      console.log(user);
      console.log("끝");
    },
    promiseAction() {
      console.log("시작");

      function loginUser(email, password) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("1. 데이터를 받았습니다", email, password);
            resolve({ userEmail: email });
          }, 2000);
        });
      }

      function getUserVideos(email) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("2. 이메일을 받았습니다", email);
            const movies = [
              { title: "타이타닉", type: "눈물샘 자극" },
              { title: "나 홀로 집에", type: "재미있음" },
              { title: "화이트칙스", type: "웃김" },
            ];
            resolve(movies);
            // reject(new Error("에러입니다~~~~~~"));
          }, 2000);
        });
      }

      function videoDetails(video) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("3. 비디오를 받았습니다", video);
            resolve(video);
          }, 2000);
        });
      }

      const user = loginUser("hahahoho@gmail.com", "fsdf")
        .then((user) => getUserVideos(user.userEmail))
        .then((videos) => videoDetails(videos[0]))
        .then((movie) => console.log(movie.type))
        .catch((error) => console.log(error.message));

      console.log(user);
      console.log("끝");
    },
    promiseAll() {
      const apple = new Promise((resolve) => {
        setTimeout(() => {
          console.log("사과의 정보를 받았다.");
          resolve(["충주사과", "안동사과", "대구사과"]);
        }, 2000); // 4초로 바꿔보기
      });

      const mango = new Promise((resolve) => {
        setTimeout(() => {
          console.log("망고의 정보를 받았다.");
          resolve(["필리핀망고", "베트남망고", "태국망고"]);
        }, 2000);
      });

      Promise.all([apple, mango]).then((result) => console.log(result));
    },
    asyncAwait() {
      console.log("시작");

      function loginUser(email, password) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("1. 데이터를 받았습니다", email, password);
            resolve({ userEmail: email });
          }, 2000);
        });
      }

      function getUserVideos(email) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("2. 이메일을 받았습니다", email);
            const movies = [
              { title: "타이타닉", type: "눈물샘 자극" },
              { title: "나 홀로 집에", type: "재미있음" },
              { title: "화이트칙스", type: "웃김" },
            ];
            resolve(movies);
          }, 2000);
        });
      }

      function videoDetails(video) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("3. 비디오를 받았습니다", video);
            resolve(video);
          }, 2000);
        });
      }

      // async await 추가하기
      function videoType() {
        const loggedUser = loginUser("doeun@gmail.com", 1234);
        const videos = getUserVideos(loggedUser.userEmail);
        const detail = videoDetails(videos[0]);
        console.log(detail.type);
      }

      videoType();
      console.log("끝");
    },
    actionAsync() {
      console.log("시작");

      setTimeout(() => {
        console.log("2초가 지났습니다.");
      }, 2000);

      console.log("끝");
    },
    actionSync() {
      function msg() {
        console.log("안녕하세요.");
        console.log("저는 김도은입니다.");
      }

      console.log("시작");
      msg();
      console.log("끝");
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
            color: #ff8b7a;
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
          text-decoration: none;
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
