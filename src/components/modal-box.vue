<template>
  <div class="modal-wrap" @click.self="modalClose">
    <div class="modal-inner">
      <div class="area">
        <label class="label">
          <span class="sort">도로명(동/읍/면)</span>
          <input type="text" @keypress.enter="fetchData" v-model="getKey" />
        </label>
        <button class="btn-search" @click="fetchData">검색</button>
      </div>
      <div class="area">
        <ul v-if="getList" class="list">
          <li v-for="item in getList" :key="item.bdMgtSn">
            <button @click="sendData(item)">
              <span class="zip">{{ item.zipNo }}</span>
              <span class="address">{{ item.jibunAddr }}</span>
            </button>
          </li>
        </ul>
        <div class="nodata" v-else>검색 결과가 없습니다.</div>
      </div>
      <div class="area" v-show="hasMorePages">
        <!--        <v-pagination-->
        <!--          :current="currentPage"-->
        <!--          :total="totalPages"-->
        <!--          :per-page="showingPages"-->
        <!--          :disabled="true"-->
        <!--          :has-more-pages="hasMorePages"-->
        <!--          @page-changed="onPageClick($event)"-->
        <!--        />-->
      </div>
      <!--      <div class="area" v-show="commonInfo">-->
      <!--        <div class="pagination">-->
      <!--          <button @click="toFirst">&lt;&lt;</button>-->
      <!--          <button @click="toPrev">&lt;</button>-->
      <!--          <ul class="pages">-->
      <!--            <li v-for="page in showingPages" :key="page">-->
      <!--              <button>{{ page }}</button>-->
      <!--            </li>-->
      <!--          </ul>-->
      <!--          <button @click="toNext">&gt;</button>-->
      <!--          <button @click="toLast">&gt;&gt;</button>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="btn-wrap">
        <button @click="modalClose" class="btn-close">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-box",
  props: ["postCode", "address"],
  data() {
    return {
      getKey: "", // 검색어
      getList: "", // 가져오는 리스트
      currentPage: 1,
      totalPages: 1,
      showingPages: 5,
      hasMorePages: false,
    };
  },
  // components: { "v-pagination": VueTailwindPagination },
  methods: {
    onPageClick(event) {
      this.currentPage = event;
      this.fetchData();
    },
    sendData(item) {
      console.log("데이터 보내기");
      //this.$emit("get-data", item.zipNo, item.jibunAddr);
      this.$emit("update:postCode", item.zipNo);
      this.$emit("update:address", item.jibunAddr);
      this.$emit("get-data");
    },
    modalClose() {
      console.log("그냥 닫기");
      this.$emit("modal-close");
    },
    fetchData: function () {
      let baseUrl = "https://www.juso.go.kr/addrlink/addrLinkApi.do";
      this.axios
        .get(baseUrl, {
          params: {
            confmKey: "devU01TX0FVVEgyMDIxMTEyNTE3MjM1ODExMTk1MjA=",
            currentPage: this.currentPage,
            countPerPage: 5,
            keyword: this.getKey,
            resultType: "json",
          },
        })
        .then((res) => {
          const response = res.data;
          this.getList = response.results.juso;
          this.totalPages = Math.ceil(
            parseFloat(response.results.common.totalCount) / 5
          );
          this.hasMorePages = this.totalPages > 1;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // pageChangeHandler(selectedPage) {
    //   this.currentPage = selectedPage;
    // },
    // toFirst() {
    //   this.currentPage = 1;
    //   console.log(this.currentPage);
    //   this.fetchData();
    // },
    // toPrev() {
    //   // if (this.currentPage > this.showingPages) {
    //   //   this.currentPage = this.currentPage - this.showingPages;
    //   // }
    //   if (this.currentPage > 1) {
    //     this.currentPage = this.currentPage - 1;
    //   }
    //   console.log(this.currentPage);
    //   this.fetchData();
    // },
    // toNext() {
    //   // if (this.currentPage <= this.totalPages - this.showingPages) {
    //   //   this.currentPage = this.currentPage + this.showingPages;
    //   // }
    //   if (this.currentPage < this.totalPages) {
    //     this.currentPage = this.currentPage + 1;
    //   }
    //   console.log(this.currentPage);
    //   this.fetchData();
    // },
    // toLast() {
    //   this.currentPage = this.totalPages;
    //   console.log(this.currentPage);
    //   this.fetchData();
    // },
  },
};
</script>

<style lang="scss">
.modal-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000000;
    opacity: 0.3;
  }
}
.overlay {
}

.modal-inner {
  position: relative;
  width: 80%;
  max-width: 800px;
  border-radius: 5px;
  padding: 30px;
  background: #fff;
  z-index: 10;
  opacity: 1;
  .area {
    & + .area {
      margin: 20px 0 0;
      border-top: 1px solid #969690;
    }
    .label {
      display: inline-block;
      text-align: left;
      .sort {
        display: inline-block;
        width: 130px;
        font-size: 16px;
      }
      input {
        border: 1px solid #969690;
        border-radius: 5px;
        padding: 10px;
        line-height: 20px;
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
    .list {
      margin: 0;
      padding: 20px 0 0;
      li {
        & + li {
          margin: 10px 0 0;
        }
        border-radius: 3px;
        background: #eee;
        list-style: none;
        text-align: left;
        button {
          display: flex;
          align-items: flex-start;
          width: 100%;
          border: none;
          padding: 10px;
          background: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s;
          &:hover,
          &:focus {
            background: #ddd;
          }
          .zip {
            padding: 5px 10px;
            background: #fff;
            font-size: 16px;
            line-height: 1.5;
          }
          .address {
            margin-left: 10px;
            padding: 5px;
            font-size: 16px;
            line-height: 1.5;
          }
        }
      }
    }
    .pagination {
      padding: 20px 0 0;
      text-align: center;
      .pages {
        display: inline-block;
        margin: 0 20px;
        padding: 0;
      }
      button {
        display: inline-block;
        padding: 10px;
        border: none;
        border-radius: 50%;
        background: #eee;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
        & + button {
          margin-left: 10px;
        }
      }
      li {
        display: inline-block;
        list-style: none;
        text-align: center;
        button {
          background: none;
        }
      }
    }
  }
  .btn-wrap {
    margin: 20px 0 0;
    .btn-close {
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
.nodata {
  text-align: center;
  background: none;
  border-bottom: 1px solid #969690;
  padding: 50px 0;
}
</style>
