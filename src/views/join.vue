<template>
  <div class="join-wrap">
    <ul class="join-info">
      <li>
        <div class="sort">아이디</div>
        <div class="cont">
          <input type="text" class="input" v-model="userInfo.id" />
        </div>
      </li>
      <li>
        <div class="sort">비밀번호</div>
        <div class="cont">
          <input type="password" class="input" v-model="userInfo.password" />
        </div>
      </li>
      <li>
        <div class="sort">이름</div>
        <div class="cont">
          <input type="text" class="input" v-model="userInfo.name" />
        </div>
      </li>
      <li>
        <div class="sort">전화번호</div>
        <div class="cont">
          <input type="tel" class="input" v-model="userInfo.cell" />
        </div>
      </li>
      <li>
        <div class="sort">이메일</div>
        <div class="cont">
          <input type="email" class="input" v-model="userInfo.email" />
        </div>
      </li>
      <li>
        <div class="sort">성별</div>
        <div class="cont">
          <label for="genderMale">
            <input type="radio" id="genderMale" name="genderSelect" />
            <span>남자</span>
          </label>
          <label for="genderFemale">
            <input type="radio" id="genderFemale" name="genderSelect" />
            <span>여자</span>
          </label>
        </div>
      </li>
    </ul>
    <div class="btn-wrap">
      <button class="btn" @click="sendData">가입하기</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "check-all",
  data() {
    return {
      baseUrl: "https://jsonplaceholder.typicode.com/posts",
      userInfo: {
        id: "",
        password: "",
        name: "",
        cell: "",
        email: "",
        gender: "",
      },
    };
  },
  methods: {
    sendData() {
      axios
        .post(this.baseUrl, {
          params: this.userInfo,
        })
        .then(console.log);
    },
  },
};
</script>

<style lang="scss">
.join-wrap {
  width: 400px;
  margin: 0 auto;
  padding: 100px 0;
  text-align: left;
  .join-info {
    li {
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      width: 100%;
      & + li {
        margin-top: 20px;
      }
      .sort {
        display: block;
        width: 100px;
      }
      .cont {
        display: block;
        flex: 1;
        .input {
          display: block;
          box-sizing: border-box;
          width: 100%;
          border: 1px solid #969690;
          border-radius: 5px;
          padding: 10px;
        }
      }
    }
  }
  .btn-wrap {
    margin: 30px 0 0;
    .btn {
      display: block;
      width: 100%;
      border: none;
      border-radius: 5px;
      padding: 20px;
      background: #969690;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
