import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const name = "Quân Nguyễn";

  return { name };
});
