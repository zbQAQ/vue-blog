<template>
  <div
    class="timer"
    @mouseenter="changStyle('enter')"
    @mouseleave="changStyle('leave')"
    :class="{ hover: timerHover, leave: !timerHover }"
  >
    <h1>{{ time }}</h1>
  </div>
</template>

<script>
import { dateFormat } from "@/plugins/common.js";
export default {
  name: "timer",
  data() {
    return {
      timestamp: new Date(),
      timerHover: false,
      timer: null
    };
  },
  computed: {
    time() {
      return dateFormat(this.timestamp, "HH:mm");
    }
  },
  methods: {
    changStyle(type) {
      if (type === "enter") return (this.timerHover = true);
      if (type === "leave") return (this.timerHover = false);
    }
  },
  created() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.timestamp = new Date();
      }, 1000 * 60);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.timer {
  position: absolute;
  top: 110px;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  width: 100px;
  white-space: nowrap;
  transition: all 0.25s;
}
.timer h1 {
  color: #fff;
  font-size: 36px;
  font-weight: 100;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  margin: 0.5em 0;
}
.timer h1::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  bottom: -5px;
  background-color: #70c000;
  transform: scale3d(0, 1, 1);
  transition: all 0.25s;
  zoom: 1;
}
.timer.hover h1::after {
  transform: scale3d(1, 1, 1);
}
.timer.hover {
  animation: scaleIn 0.75s;
  animation-fill-mode: forwards;
}
.timer.leave {
  animation: scaleOut 0.75s;
  animation-fill-mode: forwards;
}

@keyframes scaleIn {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.185);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes scaleOut {
  from {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
</style>
