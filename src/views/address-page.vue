<template>
  <div class="address-wrap">
    <div class="inner">
      <form>
        <div class="row">
          <label for="zipNo">
            <span class="sort">우편번호</span>
            <input
              @click.prevent="openLayer"
              id="zipNo"
              type="text"
              readonly
              v-model="postCode"
            />
          </label>
          <button class="btn-search" @click.prevent="openLayer">검색</button>
        </div>
        <div class="row">
          <label for="roadAddrPart1">
            <span class="sort">주소</span>
            <input type="text" id="roadAddrPart1" readonly v-model="address" />
          </label>
        </div>
        <div class="row">
          <label for="roadAddrPart2">
            <span class="sort">상세주소</span>
            <input type="text" id="roadAddrPart2" v-model="extraAddress" />
          </label>
        </div>
      </form>
    </div>
    <div ref="embed">{{ returnData }}</div>
    <transition name="fade">
      <modal-box
        v-if="modalOpen"
        @modal-close="modalClose"
        @get-data="getData"
        :postCode="postCode"
        :address="address"
        slot="body"
      >
        <find-address></find-address>
      </modal-box>
    </transition>
  </div>
</template>

<script>
import modalBox from "/src/components/modal-box";
import findAddress from "/src/components/find-address";

export default {
  name: "address-page",
  components: {
    "modal-box": modalBox,
    "find-address": findAddress,
  },
  data() {
    return {
      postCode: "",
      address: "",
      extraAddress: "",
      returnData: "",
      modalOpen: false,
    };
  },
  methods: {
    openLayer() {
      this.modalOpen = true;
    },
    modalClose() {
      this.modalOpen = false;
    },
    getData() {
      this.modalOpen = false;
      /* this.postCode = a;
      this.address = b;*/
    },
  },
};
</script>
<style lang="scss">
.address-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .inner {
    margin: 0 auto;
    width: 500px;

    .row {
      text-align: left;
      & + .row {
        margin: 10px 0 0;
      }
      label {
        display: inline-block;
        text-align: left;
        .sort {
          display: inline-block;
          width: 100px;
          font-size: 16px;
        }
        input {
          overflow: hidden;
          width: 250px;
          border: 1px solid #969690;
          border-radius: 5px;
          padding: 10px;
          line-height: 20px;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:read-only {
            background: #eee;
            cursor: default;
          }
        }
      }
      .btn-search {
        display: inline-block;
        width: 100px;
        height: 100%;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        background: #000;
        font-size: 16px;
        color: #fff;
        line-height: 42px;
        cursor: pointer;
      }
    }
  }
  * {
    outline: none;
    max-width: 100%;
  }
}
</style>
