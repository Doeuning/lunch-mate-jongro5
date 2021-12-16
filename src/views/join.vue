<template>
  <div class="join-wrap">
    <ul class="join-info">
      <li>
        <div class="sort">아이디</div>
        <div class="cont">
          <input type="text" class="input" v-model="userInfo.id" />
        </div>
        <div v-if="validation.id" class="alert">
          아이디 양식이 맞지 않습니다.
        </div>
      </li>
      <li>
        <div class="sort">비밀번호</div>
        <div class="cont">
          <input type="password" class="input" v-model="userInfo.password" />
        </div>
        <div v-if="validation.password" class="alert">
          비밀번호 양식이 맞지 않습니다.
        </div>
      </li>
      <li>
        <div class="sort">비밀번호 확인</div>
        <div class="cont">
          <input
            type="password"
            class="input"
            v-model="userInfo.passwordConfirm"
          />
        </div>
        <div v-if="validation.passwordConfirm" class="alert">
          비밀번호 양식이 맞지 않습니다.
        </div>
      </li>
      <li>
        <div class="sort">이름</div>
        <div class="cont">
          <input type="text" class="input" v-model="userInfo.name" />
        </div>
        <div v-if="validation.name" class="alert">한글로 입력 바랍니다.</div>
      </li>
      <li>
        <div class="sort">전화번호</div>
        <div class="cont">
          <input
            type="tel"
            class="input"
            v-model="userInfo.cell"
            maxlength="11"
            @keyup="cellCheck"
          />
        </div>
        <div v-if="validation.cell" class="alert">
          전화번호 양식이 맞지 않습니다.
        </div>
      </li>
      <li>
        <div class="sort">이메일</div>
        <div class="cont">
          <input type="email" class="input" v-model="userInfo.email" />
        </div>
        <div v-if="validation.email" class="alert">
          이메일 양식이 맞지 않습니다.
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
        id: false,
        password: false,
        passwordConfirm: false,
        name: false,
        cell: false,
        email: false,
        gender: false,
      },
    };
  },
  methods: {
    cellCheck() {
      const reg = /\D/;
      const result = reg.test(this.userInfo.cell);
      if (result) {
        this.validation.cell = true;
        this.userInfo.cell = this.userInfo.cell.substr(
          0,
          this.userInfo.cell.length - 1
        );
      } else {
        this.validation.cell = false;
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
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      & + li {
        margin-top: 20px;
      }
      .sort {
        display: block;
        width: 100px;
        flex: 0 0 100px;
      }
      .cont {
        display: block;
        flex: 1 0 auto;
        .input {
          display: block;
          box-sizing: border-box;
          width: 100%;
          border: 1px solid #969690;
          border-radius: 5px;
          padding: 10px;
        }
      }
      .alert {
        margin: 10px 0 0 100px;
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
