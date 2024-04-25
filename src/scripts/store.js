import { reactive } from "vue";

export const store = reactive({
  routeCount: 0,
  isFirstRoute: true,
  isDragging: false,
});
