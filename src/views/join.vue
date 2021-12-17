<template>
  <div class="join-wrap">
    <ul class="join-info">
      <li>
        <div class="sort">아이디</div>
        <div class="cont">
          <div class="row">
            <input type="text" class="input" v-model="userInfo.id" />
          </div>
          <div class="row" v-if="!validation.id">
            <div class="alert">아이디 양식이 맞지 않습니다.</div>
          </div>
        </div>
      </li>
      <li>
        <div class="sort">비밀번호</div>
        <div class="cont">
          <div class="row">
            <input
              type="password"
              class="input"
              v-model="userInfo.password"
              @keyup="passwordCheck"
            />
          </div>
          <div class="row" v-if="!validation.password">
            <div class="alert">
              ※ 비밀번호는 영문/숫자/특수문자 2가지 이상 조합으로 6~12자이어야
              합니다.
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="sort">비밀번호 확인</div>
        <div class="cont">
          <div class="row">
            <input
              type="password"
              class="input"
              v-model="userInfo.passwordConfirm"
            />
          </div>
          <div class="row" v-if="!validation.passwordConfirm">
            <div class="alert">※ 비밀번호가 동일하지 않습니다.</div>
          </div>
        </div>
      </li>
      <li>
        <div class="sort">이름</div>
        <div class="cont">
          <div class="row">
            <input type="text" class="input" v-model="userInfo.name" />
          </div>
          <div class="row" v-if="!validation.name">
            <div class="alert">※ 한글로 입력 바랍니다.</div>
          </div>
        </div>
      </li>
      <li>
        <div class="sort">전화번호</div>
        <div class="cont">
          <div class="row">
            <input
              type="tel"
              class="input"
              v-model="userInfo.cell"
              maxlength="11"
              @keyup="cellCheck"
              @keydown="cellCheck"
            />
          </div>
          <div class="row" v-if="!validation.cell">
            <div class="alert">※ 전화번호 양식이 맞지 않습니다.</div>
          </div>
        </div>
      </li>
      <li>
        <div class="sort">이메일</div>
        <div class="cont">
          <div class="row">
            <input
              type="email"
              class="input"
              v-model="userInfo.email"
              @keyup="emailCheck"
            />
          </div>
          <div class="row" v-if="!validation.email">
            <div class="alert">※ 이메일 양식이 맞지 않습니다.</div>
          </div>
        </div>
      </li>
      <li>
        <div class="sort">성별</div>
        <div class="cont">
          <div class="row">
            <label for="genderMale">
              <input type="radio" id="genderMale" name="genderSelect" />
              <span>남자</span>
            </label>
            <label for="genderFemale">
              <input type="radio" id="genderFemale" name="genderSelect" />
              <span>여자</span>
            </label>
          </div>
        </div>
      </li>
      <li>
        <div class="sort">주소</div>
        <div class="cont">
          <div class="row">
            <input
              type="email"
              class="input"
              v-model="userInfo.email"
              @keyup="emailCheck"
            />
            <button class="btn">우편번호 찾기</button>
          </div>
          <div class="row">
            <input type="text" class="input" />
          </div>
        </div>
      </li>
    </ul>
    <div class="btn-wrap">
      <button class="btn" :disabled="disabled" @click="sendData">
        가입하기
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "check-all",
  data() {
    return {
      disabled: true,
      userInfo: {
        id: "",
        password: "",
        passwordConfirm: "",
        name: "",
        cell: "",
        email: "",
        gender: "",
      },
      validation: {
        id: true,
        password: true,
        passwordConfirm: true,
        name: true,
        cell: true,
        email: true,
        gender: true,
      },
    };
  },
  methods: {
    passwordCheck() {
      const reg = /a-zA-Z{2,}/g;
      let password = reg.test(this.userInfo.password);
      console.log(password);
      if (password) {
        this.validation.password = true;
      } else {
        this.validation.password = false;
      }
    },
    cellCheck() {
      const reg = /\D/;
      let cell = reg.test(this.userInfo.cell);
      if (cell) {
        this.validation.cell = false;
        this.userInfo.cell = this.userInfo.cell.substr(
          0,
          this.userInfo.cell.length - 1
        );
      } else {
        this.validation.cell = true;
      }
    },
    emailCheck() {
      const reg = /^\S+@\S+\.\S+$/;
      let email = reg.test(this.userInfo.email);
      console.log(email);

      if (email) {
        this.validation.email = true;
      } else {
        this.validation.email = false;
      }
    },
    sendData() {
      axios
        .post("/posts", {
          params: this.userInfo,
        })
        .then((response) => {
          console.log(response);
        });
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
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      & + li {
        margin-top: 20px;
      }
      .sort {
        display: block;
        width: 120px;
        flex: 0 0 120px;
        padding: 5px 0;
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
        .btn {
          display: block;
          flex: 1 0 auto;
          margin-left: 10px;
          border: none;
          border-radius: 5px;
          padding: 8px 10px;
          background: #969690;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
        .row {
          display: flex;
          & ~ .row {
            margin-top: 10px;
          }
        }
      }
      .alert {
        color: red;
        font-size: 14px;
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
