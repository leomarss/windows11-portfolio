<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="notepad-container absolute w-full flex justify-center items-center">
    <div class="notepad-content relative flex flex-col">
      <div class="window-info flex justify-between">
        <div class="window-name h-full flex items-center">
          <img src="/images/notepad/notepad.png" />
          <span>Notepad</span>
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
      <div class="window-edit">
        <button>
          <span>File</span>
        </button>
        <button>
          <span>Edit</span>
        </button>
        <button>
          <span>View</span>
        </button>
      </div>

      <div class="notepad flex flex-grow flex-col">
        <!-- Text Area -->
        <textarea class="notepad-text h-full" spellcheck="false">
Hello, my name is Leonardo! 👋

I'm 20 years old and I'm from Rome, Italy.
I have been passionate about the world of technology and programming for years.
Feel free to check out all my links by clicking the "Links" folder! 👀

This website was created using Vue.js and other frameworks :D

Source code available: https://github.com/LeonardoMartignoni/windows11-portfolio</textarea
        >

        <div class="notepad-footer mt-auto flex justify-between">
          <div class="notepad-lines">
            <span>Ln 1, Col 1</span>
          </div>

          <div class="notepad-info flex">
            <span>100%</span>
            <span>Windows (CRLF)</span>
            <span>UTF-8</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.notepad-container {
  height: $desktop-h;
}

.notepad-content {
  width: 850px;
  height: 500px;
  background-color: #191919;
  border: 1px solid #323232;
  border-radius: 10px;
  z-index: 2;

  .window-info {
    padding-left: 5px;
    height: 2rem;
    background-color: #202020;

    .window-name {
      gap: 5px;

      & > img {
        height: 20px;
      }

      & > span {
        font-size: 0.7rem;
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

  .window-edit {
    font-size: 0.9rem;
    font-weight: 300;
    background-color: #202020;
    & > button {
      padding: 10px;
      &:hover {
        background-color: #2e2e2e;
      }
    }
  }

  .notepad {
    font-size: 0.8rem;
    .notepad-text {
      padding: 10px;
      resize: none;
      outline: none;
      background-color: transparent;
    }
  }

  .notepad-footer {
    background-color: #202020;
    color: gray;
    padding: 5px 0;
    .notepad-lines {
      padding: 0 10px;
    }
    .notepad-info {
      gap: 15px;
      & > span {
        padding: 0 10px;
        border-left: 1px solid gray;
      }
    }
  }
}
</style>
