<template>
  <div class="join-wrap">
    <transition-group tag="ul" name="alert" class="join-info">
      <li key="userInfo.id">
        <div class="sort">아이디</div>
        <div class="cont">
          <div class="row">
            <input type="text" class="input" v-model="userInfo.id" />
          </div>
          <transition name="alert" mode="out-in">
            <div class="row" v-if="validation.id === false">
              <div class="alert">
                ※ 아이디는 영문 또는 숫자만 입력 가능합니다.
              </div>
            </div>
          </transition>
        </div>
      </li>
      <li key="userInfo.password">
        <div class="sort">비밀번호</div>
        <div class="cont">
          <div class="row">
            <input
              type="password"
              class="input"
              maxlength="12"
              v-model="userInfo.password"
            />
          </div>
          <transition name="alert" mode="out-in">
            <div class="row" v-if="validation.password === false">
              <div class="alert">
                ※ 비밀번호는 영문/숫자/특수문자 2가지 이상 조합으로 6~12자이어야
                합니다.
              </div>
            </div>
          </transition>
        </div>
      </li>
      <li key="userInfo.passwordConfirm">
        <div class="sort">비밀번호 확인</div>
        <div class="cont">
          <div class="row">
            <input
              type="password"
              class="input"
              maxlength="12"
              v-model="userInfo.passwordConfirm"
            />
          </div>
          <transition name="alert" mode="out-in">
            <div class="row" v-if="validation.passwordConfirm === false">
              <div class="alert">※ 비밀번호가 동일하지 않습니다.</div>
            </div>
          </transition>
        </div>
      </li>
      <li key="userInfo.name">
        <div class="sort">이름</div>
        <div class="cont">
          <div class="row">
            <input
              type="text"
              class="input"
              maxlength="20"
              :value="userInfo.name"
            />
            <!-- 현재 가장 긴 이름은 최대 17자. 1993년부터 성을 제외하고 5자 이내로 제한. -->
          </div>
          <transition name="alert" mode="out-in">
            <div class="row" v-if="validation.name === false">
              <div class="alert">※ 한글로 입력 바랍니다.</div>
            </div>
          </transition>
        </div>
      </li>
      <li key="userInfo.cell">
        <div class="sort">전화번호</div>
        <div class="cont">
          <div class="row">
            <input
              type="tel"
              class="input"
              :value="userInfo.cell"
              maxlength="11"
            />
          </div>
          <transition name="alert" mode="out-in">
            <div class="row" v-if="validation.cell === false">
              <div class="alert">※ 전화번호 양식이 맞지 않습니다.</div>
            </div>
          </transition>
        </div>
      </li>
      <li key="userInfo.email">
        <div class="sort">이메일</div>
        <div class="cont">
          <div class="row">
            <input type="email" class="input" v-model="userInfo.email" />
          </div>
          <transition name="alert" mode="out-in">
            <div class="row" v-if="validation.email === false">
              <div class="alert">※ 이메일 양식이 맞지 않습니다.</div>
            </div>
          </transition>
        </div>
      </li>
      <li key="userInfo.address">
        <div class="sort">주소</div>
        <div class="cont">
          <div class="row">
            <input
              type="email"
              :class="{
                input: true,
                done: validation.address === true,
              }"
              readonly
              v-model="userInfo.postCode"
              @click.prevent="openLayer"
            />
            <button class="btn" @click.prevent="openLayer">
              우편번호 찾기
            </button>
          </div>
          <div class="row">
            <input
              type="text"
              :class="{
                input: true,
                done: validation.address === true,
              }"
              v-model="userInfo.address"
              readonly
            />
          </div>
          <div class="row">
            <input type="text" class="input" v-model="userInfo.extraAddress" />
          </div>
          <transition name="alert" mode="out-in">
            <div class="row" v-if="validation.addressDone === false">
              <div class="alert">※ 상세 주소를 입력해주세요.</div>
            </div>
          </transition>
        </div>
      </li>
    </transition-group>
    <div class="btn-wrap">
      <button class="btn" @click="validate">가입하기</button>
    </div>
    <transition name="alert">
      <modal-box v-if="modalOpen" @modal-close="modalClose"
        ><find-address @modal-close="modalClose"></find-address
      ></modal-box>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "/src/eventBus";
import modalBox from "/src/components/modal-box";
import findAddress from "/src/components/find-address";
import validate from "validate.js";

export default {
  name: "check-all",
  data() {
    return {
      modalOpen: false,
      userInfo: {
        id: "",
        password: "",
        passwordConfirm: "",
        name: "",
        cell: "",
        email: "",
        postCode: "",
        address: "",
        extraAddress: "",
      },
      validation: {
        id: "",
        password: "",
        passwordConfirm: "",
        name: "",
        cell: "",
        email: "",
        address: "",
        extraAddress: "",
        addressDone: "",
      },
    };
  },
  components: {
    "modal-box": modalBox,
    "find-address": findAddress,
  },
  computed: {
    disabled() {
      const valueCheck = Object.values(this.validation).every((value) => {
        return value === true;
      });
      return !valueCheck;
      // if (valueCheck) {
      //   return Object.values(this.validation).every((value) => value);
      // } else {
      //   return false;
      // }
    },
  },
  created() {
    this.validate();
  },
  updated() {
    EventBus.$on(
      "get-data",
      function (data) {
        this.userInfo.postCode = data.postCode;
        this.userInfo.address = data.address;
        this.validation.address = true;
        this.validation.addressDone = false;
        this.modalClose();
      }.bind(this)
    );
  },
  methods: {
    validate() {
      const checkInfo = {
        rules: {
          id: {
            required: true,
            remote: {
              url: "/isDuplicated",
              type: "POST",
              data: {
                id: function () {
                  return this.userInfo.id;
                },
              },
            },
          },
          password: {
            required: true,
            length: 12,
            minimum: 6,
          },
          passwordConfirm: {
            required: true,
            equalTo: this.userInfo.password,
          },
          email: {
            required: true,
            presence: true,
            email: true,
          },
          name: {
            required: true,
            length: {
              minimum: 2,
              maximum: 20,
            },
            format: {
              pattern: "[가-힣]",
              flags: "i",
              message: "can only contain a-z and 0-9",
            },
          },
          cell: {
            required: true,
            digits: true,
          },
          postCode: {
            required: true,
            format: {
              pattern: "\\d{5}",
            },
          },
          address: {
            required: true,
          },
          extraAddress: {
            required: true,
          },
        },
        submitHandler: function () {
          axios
            .post("/join", {
              params: this.userInfo,
            })
            .then((response) => {
              console.log(response);
            });
        },
      };
      console.log(validate(this.userInfo.password, checkInfo.password));
    },
    sendData() {
      // axios
      //   .post("/posts", {
      //     params: this.userInfo,
      //   })
      //   .then((response) => {
      //     console.log(response);
      //   });
    },
    openLayer() {
      this.modalOpen = true;
    },
    modalClose() {
      this.modalOpen = false;
    },
  },
};
</script>

<style lang="scss">
.join-wrap {
  width: 500px;
  margin: 0 auto;
  padding: 100px 0;
  text-align: left;
  .join-info {
    position: relative;
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
        &.done {
          color: cornflowerblue;
        }
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
          &.done {
            background: #e9e9e9;
          }
        }
        .btn {
          display: block;
          flex: 1 0 auto;
          width: 140px;
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
          transition: all 0.3s;
          & ~ .row {
            margin-top: 10px;
          }
        }
      }
      .alert {
        padding: 0 0 0 20px;
        text-indent: -20px;
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
      background: cornflowerblue;
      font-weight: 700;
      font-size: 16px;
      color: #fff;
      cursor: pointer;
      &:disabled {
        background: #969690;
      }
    }
  }
}
.alert-enter-from {
  opacity: 0;
}
.alert-enter-to {
  opacity: 1;
}
.alert-enter-active {
  transition: all 0.3s ease;
}

.alert-leave-from {
  opacity: 1;
}
.alert-leave-to {
  opacity: 0;
}
.alert-leave-active {
  position: absolute;
  transition: all 0.3s ease;
}
.alert-move {
  transition: all 0.3s ease;
}
</style>
