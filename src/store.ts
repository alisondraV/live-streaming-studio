import { reactive } from 'vue';
import { WebcamImageSize } from '@/utils';

export const store = reactive({
  currentFeed: '',
  setCurrentFeed(feed: string) {
    this.currentFeed = feed;
  },
  webcamImageSize: WebcamImageSize.Full,
  setWebcamImageSize(size: WebcamImageSize) {
    this.webcamImageSize = size;
  },
});
