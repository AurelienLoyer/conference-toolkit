<template>
  <div>
    <div class="card card--top" v-if="contest1Title">
      <div class="card__left"></div>
      <img class="card__image" :src="contest1Image" alt="Contest image 1" />
      <div class="card__right">
        <h1 v-html="contest1Title"></h1>
        <h2>{{ contest1Content }}</h2>
        <h2 class="text-red">{{ contest1SubContent }}</h2>
      </div>
    </div>

    <div class="card card--bottom" v-if="contest2Title">
      <div class="card__right">
        <h1 v-html="contest2Title"></h1>
        <h2>{{ contest2Content }}</h2>
        <h2 class="text-red">{{ contest2SubContent }}</h2>
      </div>
      <img class="card__image" :src="contest2Image" alt="Contest image 1" />
      <div class="card__left"></div>
    </div>

    <div class="card top" v-if="0 && contest1Title">
      <div class="left"></div>
      <div class="right">
        <img class="helmet" :src="contest1Image" alt="Contest image 1" />
        <div class="productInfo">
          <h1 v-html="contest1Title"></h1>
          <h2>{{ contest1Content }}</h2>
          <h2 class="text-red">{{ contest1SubContent }}</h2>
        </div>
      </div>
    </div>
    <div class="card bottom" v-if="0 && contest2Title">
      <div class="right">
        <img
          v-if="contest2Image"
          class="helmet"
          :src="contest2Image"
          alt="Contest image 2"
        />
        <div class="productInfo">
          <h1 v-html="contest2Title"></h1>
          <h2>{{ contest2Content }}</h2>
          <h2 class="text-red">{{ contest2SubContent }}</h2>
        </div>
      </div>
      <div class="left"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contest',
  data: function() {
      return {
        contests: [
        ],
      }
  },
  mounted: function () {
  },
  props: {
      'contest1Image' : {
        type: String,
        default: null,
      },
      'contest1Title': {
        type: String,
        default: 'Tee-shirt<br>C0d1ng Th3 W0rld',
      },
      'contest1Content': {
          type: String,
          default: 'Tente ta chance et repars avec notre tee-shirt !'
      },
        'contest1SubContent': {
            type: String,
            default: '@AurelienLoyer @Vue.js @JavaScript'
        },
      'contest2Image' : {
        type: String,
        default: null,
      },
      'contest2Title': {
        type: String,
        default: 'Un super cadeau !',
      },
      'contest2Content': {
          type: String,
          default: 'Un tirage tous les soirs (17h) parmi les tweets contenant:'
      },
      'contest2SubContent': {
          type: String,
          default: '@AurelienLoyer @Vue.js @JavaScript'
      },
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:800");

@mixin object($width, $height, $bg) {
  width: $width;
  height: $height;
  background: $bg;
}

@mixin transPos($top, $right, $bottom, $left, $transX, $transY) {
  position: absolute;
  top: $top;
  left: $left;
  right: $right;
  bottom: $bottom;
  transform: translate($transX, $transY);
}

.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

* {
  // box-sizing: border-box;
  // margin: 0;
  // padding: 0;
  transition: all 0.5s;
}

::-webkit-scrollbar {
  display: none;
}

button {
  border: none;
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.text-red {
  color: #de223d;
}

.card {
  top: 12vh;
  right: 10vw;
  display: flex;
  align-items: center;
  position: absolute;
  color: #fff;
  font-family: "Open Sans", sans-serif;

  &--bottom {
    top: auto;
    bottom: 20vh;

    .card__image {
      left: auto;
      right: -3vw;
    }

    .card__right {
      transform: translateX(3vw);
    }
  }

  &__left {
    width: 25vh;
    height: 25vh;
    background: #cc3843;
    border-radius: 23px;
    transform: translateX(2vw);
    z-index: -1;
  }

  &__image {
    position: absolute;
    left: 3vw;
    height: 20vh;
  }

  &__right {
    color: white;
    height: 30vh;
    width: 25vw;
    background: #0c1f2c;
    border-radius: 23px;
    padding: 3vh 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  h1 {
    font-weight: 800;
    line-height: 2vw;
    font-size: 2vw;
    // margin-bottom: 15px;
    text-align: center;
    text-transform: uppercase;
  }

  h2 {
    font-weight: 300;
    font-size: 1.5vw;
    letter-spacing: 1.6px;
    // margin-bottom: 30px;
  }
}

.slider {
  @include object(60px, 60px, #fff);
  border-radius: 50%;
  line-height: 70px;
  text-align: center;
  margin-left: -30px;
  box-shadow: 0 0 60px rgba(#000, 0.2);
  color: #cb1f40;
  cursor: pointer;
  position: absolute;
  right: -30px;
  top: calc(50% - 30px);
  &.slider-left {
    right: auto;
    left: 0px;
    z-index: 10;
  }
  &:nth-of-type(2) {
    @include transPos(50%, -60px, null, null, -50%, -50%);
  }
}

@media screen and (max-width: 576px) {
  // .card {
  //   transform: rotate(90deg) scale(0.7) translate(calc(50% - 25vh), 50%);
  //   position: static;
  // }
}
</style>
