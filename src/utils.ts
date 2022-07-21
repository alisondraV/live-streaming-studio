export enum ButtonVariant {
  Primary,
  Secondary,
  Media,
}

export enum WebcamImageSize {
  Full,
  Eighty,
  Sixty,
}

export enum FeedLayout {
  OneInOneRight,
  OneInOneLeft,
  Both,
}

export interface IFeed {
  video: string
  screen: string
}

export function getImageLayoutClass(layout: FeedLayout): string {
  switch (layout) {
    case FeedLayout.OneInOneRight:
      return 'justify-end';
    case FeedLayout.OneInOneLeft:
      return 'justify-start';
    default:
      return '';
  }
}
