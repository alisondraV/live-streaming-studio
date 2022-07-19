import { reactive } from 'vue';

export const store = reactive({
  currentFeed: '',
  updateCurrentFeed(feed: string) {
    this.currentFeed = feed;
  }
});
