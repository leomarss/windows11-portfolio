<script>
import MenuBar from "./components/MenuBar.vue";

export default {
  data() {
    return {
      isSelecting: false,
      selectionBox: {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
      },
    };
  },

  components: {
    MenuBar,
  },

  mounted() {
    window.addEventListener("mousemove", this.handleMouseMoveOutside);
  },

  beforeDestroy() {
    window.removeEventListener("mousemove", this.handleMouseMoveOutside);
  },

  methods: {
    startSelection(event) {
      if (event.button === 0) {
        this.isSelecting = true;
        this.selectionBox.startX = event.clientX;
        this.selectionBox.startY = event.clientY;
      }
    },
    endSelection(event) {
      if (event.button === 0) {
        this.isSelecting = false;
        this.selectionBox.endX = event.clientX;
        this.selectionBox.endY = event.clientY;
        this.updateSelectedItems();
      }
    },
    handleMouseMove(event) {
      if (this.isSelecting) {
        this.updateSelection(event);
        this.updateSelectedItems();
      }
    },
    handleMouseMoveOutside(event) {
      if (this.isSelecting && (event.buttons === 1 || event.buttons === undefined)) {
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
  <div @mousedown="startSelection" @mouseup="endSelection" @mousemove="updateSelection">
    <div class="desktop flex flex-col relative">
      <div class="mouse-selection fixed" v-if="isSelecting" :style="selectionBoxStyle"></div>
      <div class="item-list flex items-start gap-2 h-full">
        <div class="item flex flex-col items-center">
          <img src="/images/desktop/notes.png" />
          <p>About me</p>
        </div>
        <div class="item flex flex-col items-center">
          <img src="/images/desktop/folder.png" />
          <p>Projects</p>
        </div>
        <div class="item flex flex-col items-center">
          <img src="/images/desktop/folder.png" />
          <p>Technologies</p>
        </div>
      </div>
      <div class="item-list">
        <!-- Recycle bin -->
        <div class="item flex flex-col items-center">
          <img src="/images/desktop/trash.png" />
          <p>Recycle Bin</p>
        </div>
      </div>
    </div>
    <MenuBar />
  </div>
</template>

<style lang="scss">
@import "./assets/partials/variables";

.mouse-selection {
  width: 500px;
  height: 500px;
  border: 1px solid #4af;
  background: rgba(68, 170, 255, 0.5);
  z-index: 1;
}

.desktop {
  background-image: url("/images/wallpaper-waves.jpg");
  background-size: cover;
  background-position: center;

  height: calc(100vh - $menu-bar-h);
  padding: 8px;

  .item {
    cursor: pointer;
    width: 80px;
    padding: 0 5px;
    transition: 0.1s;

    &:hover {
      background-color: #2e2e2e;
      border-radius: 5px;
    }

    img {
      width: 40px;
    }
    p {
      font-size: 0.7rem;
    }
  }
}

.item-selected {
  background-color: #2e2e2e;
  border-radius: 5px;
}
</style>
