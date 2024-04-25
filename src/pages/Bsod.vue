<script>
export default {
  data() {
    return {
      progress: 0,
    };
  },

  mounted() {
    this.simulateProgress();
  },

  methods: {
    simulateProgress() {
      let remainingProgress = 100 - this.progress;

      const simulateStep = () => {
        if (remainingProgress === 0) {
          clearInterval(progressInterval);
          return;
        }

        const step = Math.min(remainingProgress, Math.floor(Math.random() * 6) + 1);
        this.progress += step;
        remainingProgress -= step;

        const randomDelay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(simulateStep, randomDelay);
      };

      const progressInterval = setInterval(simulateStep, Math.floor(Math.random() * 3000) + 1000);
    },
  },
};
</script>

<template>
  <div class="w-screen h-screen bg-[#3973AA] flex justify-center items-center">
    <div class="flex flex-col gap-3.5 max-w-[90%] p-2">
      <h1 class="text-9xl">:(</h1>
      <p>Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.</p>
      <p>{{ progress }}% complete</p>
      <div class="flex flex-col lg:flex-row gap-3.5">
        <img class="w-36" src="/images/errorqr.png" />
        <div>
          <p>For more information about this issue and possible fixes, visit https://leonardo.is/error</p>
          <p>If you call a support person, give them this info: Stop Code: <span class="inline lg:hidden">SCREEN_WIDTH_NOT_SUPPORTED</span><span class="hidden lg:inline">404_NOT_FOUND</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
