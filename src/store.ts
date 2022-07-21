import { reactive } from 'vue';
import { FeedLayout, IFeed, WebcamImageSize } from '@/utils';

export const store = reactive({
  currentFeed: { video: '', screen: '' },
  feed: { video: '', screen: '' },
  setCurrentFeed(feed: IFeed) {
    this.currentFeed = feed;
  },
  setFeed(feed: IFeed) {
    this.feed = feed;
  },
  webcamImageSize: WebcamImageSize.Full,
  setWebcamImageSize(size: WebcamImageSize) {
    this.webcamImageSize = size;
  },
  selectedLayout: FeedLayout.OneInOneRight,
  setSelectedLayout(layout: FeedLayout) {
    this.selectedLayout = layout;
  },
});
