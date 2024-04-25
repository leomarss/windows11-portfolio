<script>
import { store } from "../../scripts/store";
import { draggingVariables, handleMouseDown, handleMouseUp, handleMouseMove } from "../../scripts/draggableWindows";

export default {
  data() {
    return {
      store,
      ...draggingVariables,
    };
  },

  props: {
    currentUser: String,
  },

  methods: {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  },
};
</script>

<template>
  <div class="project-container absolute w-full flex justify-center items-center">
    <div class="project-content relative flex flex-col" :style="{ left: projectContentX + 'px', top: projectContentY + 'px' }">
      <div class="window-info flex">
        <div class="window-name flex items-center flex-grow" @mousedown="handleMouseDown">
          <div class="terminal-name h-full flex items-center">
            <img src="/images/menu-bar/terminal.png" />
            <span>MINGW64:/c/User/{{ currentUser }}</span>
            <span class="close-terminal">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path></svg>
            </span>
          </div>
          <div class="terminal-options flex items-center">
            <button>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
              </svg>
            </button>
            <button>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div class="window-buttons flex">
          <button class="btn">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 8v1H3V8h11z"></path></svg>
          </button>
          <button class="btn">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"></path></svg>
          </button>
          <router-link class="btn" :to="{ name: 'home' }">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path></svg>
          </router-link>
        </div>
      </div>
      <div class="terminal relative">
        <div class="terminal-messages h-full overflow-y-auto">
          <!-- Messages here -->
          <slot></slot>
        </div>
        <div class="terminal-bg absolute top-0 left-0 w-full h-full"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/partials/variables";

.project-container {
  height: $desktop-h;
}

.project-content {
  overflow: hidden;
  width: 850px;
  min-height: auto;
  max-height: 600px;
  border: 1px solid #323232;
  border-radius: 10px;
  z-index: 2;

  .window-info {
    min-height: 2rem;
    max-height: 2rem;
    background-color: #202020;

    .window-name {
      gap: 5px;
      padding: 3px 0 0 3px;

      img {
        height: 20px;
      }

      span {
        font-size: 0.7rem;
      }

      .terminal-name {
        border-radius: 10px 10px 0 0;
        padding: 0px 10px 0 18px;
        gap: 5px;
        background-color: #131313;

        .close-terminal {
          margin-left: 10px;
          border-radius: 5px;
          &:hover {
            background-color: #2e2e2e;
          }
        }
      }

      .terminal-options {
        padding: 0 8px;
        gap: 5px;
        & > button {
          cursor: default;
          border-radius: 5px;
          &:hover {
            background-color: #2e2e2e;
          }
        }
      }
    }

    .window-buttons {
      gap: 5px;

      & > .btn {
        display: flex;
        align-items: center;
        padding: 0 10px;
        &:hover {
          background-color: #2e2e2e;
        }
      }
      & > .btn:last-child {
        border-top-right-radius: 10px;
        padding: 0 15px;
        &:hover {
          background-color: red;
        }
      }
    }
  }

  .terminal {
    position: relative;
    height: 400px;
    padding: 10px;
    font-size: 0.9rem;

    .terminal-messages {
      position: relative;
      z-index: 1;
    }

    .terminal-bg {
      background-image: url("/images/terminal/noisebg.png");
      opacity: 0.9;
    }
  }
}
</style>
