<script>
import { store } from "./scripts/store";

import MenuBar from "./components/MenuBar.vue";
import Desktop from "./components/Desktop.vue";
import Bsod from "./pages/Bsod.vue";
import { router } from "./router/router";

export default {
  data() {
    return {
      store,
      routeExists: true,
      isSelecting: false,
      selectionBox: {
        startX: NaN,
        startY: NaN,
        endX: NaN,
        endY: NaN,
      },

      currentRoute: window.location.pathname,
      screenWidth: window.innerWidth,
    };
  },

  components: {
    MenuBar,
    Desktop,
    Bsod,
  },

  mounted() {
    console.log(window.location.pathname);
    router.getRoutes().map((route) => {
      console.log(route.path);
      if (window.location.pathname != route.path) {
        this.routeExists = false;
        console.log("path does not exist");
      } else {
        console.log("path exist");
      }
    });
    console.log(this.routeExists);
    window.addEventListener("mousemove", this.handleMouseMoveOutside);
    window.addEventListener("resize", this.handleWindowResize);
  },

  beforeDestroy() {
    window.removeEventListener("mousemove", this.handleMouseMoveOutside);
    window.removeEventListener("resize", this.handleWindowResize);
  },

  methods: {
    startSelection(event) {
      if (!this.store.isDragging && event.button === 0) {
        this.isSelecting = true;
        this.selectionBox.startX = event.clientX;
        this.selectionBox.startY = event.clientY;
      }
    },
    endSelection(event) {
      if (!this.store.isDragging && event.button === 0) {
        this.isSelecting = false;
        this.selectionBox.endX = event.clientX;
        this.selectionBox.endY = event.clientY;
        this.updateSelectedItems();
      }
    },
    handleMouseMove(event) {
      if (this.isSelecting && !this.store.isDragging) {
        this.updateSelection(event);
        this.updateSelectedItems();
      }
    },
    handleMouseMoveOutside(event) {
      if (this.isSelecting && !this.store.isDragging && (event.buttons === 1 || event.buttons === undefined)) {
        this.updateSelection(event);
        this.updateSelectedItems();
      }
    },
    updateSelection(event) {
      this.selectionBox.endX = event.clientX;
      this.selectionBox.endY = event.clientY;
    },
    updateSelectedItems() {
      const items = document.getElementsByClassName("item");
      const selectionRect = this.getSelectionRect();

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemRect = item.getBoundingClientRect();

        if (this.isRectIntersecting(itemRect, selectionRect)) {
          item.classList.add("item-selected");
        } else {
          item.classList.remove("item-selected");
        }
      }
    },
    getSelectionRect() {
      const { startX, startY, endX, endY } = this.selectionBox;

      const left = Math.min(startX, endX);
      const top = Math.min(startY, endY);
      const width = Math.abs(endX - startX);
      const height = Math.abs(endY - startY);

      return { left, top, width, height };
    },
    isRectIntersecting(rect1, rect2) {
      return rect1.left < rect2.left + rect2.width && rect1.left + rect1.width > rect2.left && rect1.top < rect2.top + rect2.height && rect1.top + rect1.height > rect2.top;
    },
    startDragging(event) {
      this.store.isDragging = true;
    },
    endDragging(event) {
      this.store.isDragging = false;
    },

    handleWindowResize() {
      this.screenWidth = window.innerWidth;
    },
  },

  watch: {
    $route(to, from) {
      if (to.name === "home") {
        this.store.routeCount = 0;
        this.store.isFirstRoute = true;
      } else {
        if (this.store.routeCount >= 1) {
          this.store.isFirstRoute = false;
        } else {
          this.store.isFirstRoute = true;
        }
        this.store.routeCount++;
      }
    },
  },

  computed: {
    selectionBoxStyle() {
      const style = {
        left: `${Math.min(this.selectionBox.startX, this.selectionBox.endX)}px`,
        top: `${Math.min(this.selectionBox.startY, this.selectionBox.endY)}px`,
        width: `${Math.abs(this.selectionBox.endX - this.selectionBox.startX)}px`,
        height: `${Math.abs(this.selectionBox.endY - this.selectionBox.startY)}px`,
      };
      return style;
    },
  },
};
</script>

<template>
  <div v-if="currentRoute == '/error' || screenWidth <= 580">
    <Bsod />
  </div>
  <div v-else @mousedown="startSelection" @mouseup="endSelection" @mousemove="updateSelection">
    <!-- Mouse selector -->
    <div class="mouse-selection fixed" v-if="isSelecting" :style="selectionBoxStyle"></div>

    <router-view v-slot="{ Component }">
      <transition name="scale" :css="store.isFirstRoute">
        <component :is="Component" />
      </transition>
    </router-view>

    <Desktop />
    <MenuBar />
  </div>
</template>

<style lang="scss">
@import "./assets/partials/variables";

.mouse-selection {
  border: 1px solid #4af;
  background: rgba(68, 170, 255, 0.5);
  z-index: 2;
  pointer-events: none;
}

.scale-enter-from {
  z-index: 1;
  transform: scale(0);
}

.scale-enter-active {
  z-index: 1;
  transition: 0.15s;
}

.scale-leave-to {
  z-index: 1;
  transform: scale(0);
}

.scale-leave-active {
  z-index: 1;
  transition: 0.15s;
}
</style>
