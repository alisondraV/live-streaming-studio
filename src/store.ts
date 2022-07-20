import { reactive } from 'vue';

export const store = reactive({
  currentFeed: '',
  setCurrentFeed(feed: string) {
    this.currentFeed = feed;
  },
  webcamImageSize: '',
  setWebcamImageSize(size: string) {
    this.webcamImageSize = size;
  },
});
