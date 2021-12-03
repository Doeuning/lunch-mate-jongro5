<template>
  <div class="body">
    <div class="start">
      <h1 class="tit">친절한 점심봇과</h1>
      <div class="desc">
        <strong>종로5가</strong>에서 점심을 고르러 가볼까요?
      </div>
      <router-link class="btn-choose" to="/question"
        ><span class="txt"
          ><span class="small">Normal 모드로</span>가자!</span
        ></router-link
      >
      <router-link class="btn-choose ty2" to="/question-hard"
        ><span class="txt"
          ><span class="small">Hard 모드로</span>가자!</span
        ></router-link
      >
      <!--      <router-link class="btn-address" to="/address"-->
      <!--        ><span class="tit">도로명주소 API</span></router-link-->
      <!--      >-->
      <!--      <router-link class="btn-address" to="/transition"-->
      <!--        ><span class="tit">Transition</span></router-link-->
      <!--      >-->
    </div>
  </div>
</template>

<script>
export default {
  name: "bridge-intro",
};
</script>

<style lang="scss">
.tit {
  font-size: 30px;
  color: #286e38;
}
.desc {
  font-size: 24px;
  color: #969690;
}
.btn-choose {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  margin: 30px;
  box-shadow: 10px 10px 30px 0px rgba(0, 0, 0, 0.15);
  border: 3px solid #f9a734;
  border-radius: 50%;
  background: #fff;
  font-size: 50px;
  line-height: 1;
  color: #f9a734;
  text-decoration: none;
  transition: all 0.3s;
  .txt {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 100;
    width: 150%;
    transform: translate(-50%, -50%);
    transition: color, font-size 0.6s;
    .small {
      display: block;
      font-size: 24px;
      transition: color, font-size 0.6s;
    }
  }
  &:hover,
  &:focus {
    background: #f9a734;
    font-weight: 700;
    color: #fff;
    transform: translate(5px, 5px);
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0);
    .txt {
      font-size: 80px;
      .small {
        font-size: 36px;
      }
    }
  }
  &.ty2 {
    border-color: #fb8b24;
    .txt {
      color: #fb8b24;
      .small {
        color: #fb8b24;
      }
    }
    &:hover,
    &:focus {
      background: #fb8b24;
      .txt {
        color: #fff;
        .small {
          color: #fff;
        }
      }
    }
  }
}

.btn-address {
  display: block;
  margin: 30px 0 0;
  text-decoration: none;
  color: inherit;
  & + .btn-address {
    margin: 10px 0 0;
  }
}

:root {
  --caterpillar-color: #fabeab;
}
/* Color Palette */

$softPink: #f9d8d4;
$yellow: #f9a734;
$DarkYellow: #fb8b24;
$green: #36964c;
$DarkGreen: #286e38;

/* Background styles */

.body {
  background: radial-gradient(
      circle closest-side at 50px 50px,
      $DarkYellow 3px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 40px 60px,
      $DarkYellow 3px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 60px 60px,
      $DarkYellow 3px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 50px 70px,
      $DarkYellow 3px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 150px 165px,
      $DarkYellow 3px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 140px 175px,
      $DarkYellow 3px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 160px 175px,
      $DarkYellow 3px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 150px 185px,
      $DarkYellow 3px,
      transparent 0
    ),
    /* Pineapple base */
      radial-gradient(
        ellipse closest-side at 50px 60px,
        $yellow 18px,
        transparent 0
      ),
    radial-gradient(
      ellipse closest-side at 150px 175px,
      $yellow 18px,
      transparent 0
    ),
    /* Pineapple leafs */
      radial-gradient(
        circle closest-side at 30px 40px,
        $softPink 15px,
        transparent 0
      ),
    radial-gradient(
      circle closest-side at 40px 35px,
      $green 15px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 70px 40px,
      $softPink 15px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 60px 35px,
      $DarkGreen 15px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 130px 155px,
      $softPink 15px,
      transparent 0
    ),
    radial-gradient(
      circle closest-side at 140px 150px,
      $green 15px,
      transparent 0
    ),
    radial-gradient(circle at 170px 155px, $softPink 15px, transparent 0),
    radial-gradient(circle at 160px 150px, $DarkGreen 15px, transparent 0);
  background-color: $softPink;
  background-size: 180px 210px;
  animation: animatedBackground 0.5s cubic-bezier(0.61, -0.64, 0.58, 1.46)
    forwards;
}

/* Animation */

@keyframes animatedBackground {
  from {
    background-position: 0 50%;
  }
  to {
    background-position: 0 0;
  }
}

.body {
  // background: #f4e7ca;
  //background: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start {
  position: relative;
  z-index: 10;
}

div {
  box-sizing: border-box;
}
</style>
