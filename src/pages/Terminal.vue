<script>
import { store } from "../store/store";
import TerminalBase from "../components/partials/TerminalBase.vue";

export default {
  data() {
    return {
      store,
      currentUser: "leo",
      userInput: "",

      // Terminal history
      terminalHistory: [],
    };
  },

  components: {
    TerminalBase,
  },

  methods: {
    sendInput() {
      const input = this.userInput;
      let output = "";

      // Command 'help'
      if (input == "help") {
        output = "help: Display this help message\r\nclear: Clear the terminal screen\necho: Displays text/string that are passed as an argument\nwhoami: Display the name of the current user";
      }

      // Command 'clear'
      else if (input == "clear") {
        this.terminalHistory = [];
        this.userInput = "";
        return;
      }

      // Command 'whoami'
      else if (input == "whoami") {
        output = this.currentUser;
      }

      // Command 'echo'
      else if (input.startsWith("echo")) {
        output = input.replace("echo ", "");
      }

      // Empty input
      else if (input == "") {
        this.terminalHistory.push({
          inputMsg: input,
        });
        return;
      }

      // Command not found
      else {
        output = `bash: ${input}: command not found`;
      }

      const message = {
        inputMsg: input,
        outputMsg: output,
      };

      this.terminalHistory.push(message);
      this.userInput = "";
    },
  },
};
</script>

<template>
  <TerminalBase :currentUser="currentUser">
    <div v-for="history in terminalHistory" class="terminal-message relative">
      <p class="terminal-command">{{ currentUser }}@Leonardo <span class="purple-text">MINGW64</span> <span class="tilde">~</span></p>
      <div class="user-input flex">
        <span>$</span>
        <span>{{ history.inputMsg }}</span>
      </div>
      <span class="mb-4 block whitespace-pre">{{ history.outputMsg }}</span>
    </div>
    <div class="terminal-message relative">
      <p class="terminal-command">{{ currentUser }}@Leonardo <span class="purple-text">MINGW64</span> <span class="tilde">~</span></p>
      <div class="user-input flex">
        <span>$</span>
        <input v-model="userInput" class="w-full" type="text" spellcheck="false" @keyup.enter="sendInput()" />
      </div>
    </div>
  </TerminalBase>
</template>

<style lang="scss" scoped>
@import "../assets/partials/variables";

.terminal-message {
  z-index: 1;
  font-weight: 500;
  .terminal-command {
    color: #40c840;
    .purple-text {
      color: #c840ff;
    }
    .tilde {
      color: #bebe00;
    }
  }

  .user-input {
    gap: 10px;
    input {
      outline: none;
      background-color: transparent;
    }
  }
}
</style>
