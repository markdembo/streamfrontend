export interface Status {
  state: string;
  pctComplete: string;
  errorReasonCode: string;
  errorReasonText: string;
}

export interface Meta {
  filename: string;
  filetype: string;
  name: string;
  relativePath: string;
  type: string;
}

export interface Input {
  width: number;
  height: number;
}

export interface Playback {
  hls: string;
  dash: string;
}

export interface PublicDetails {
  title: string;
  share_link: string;
  channel_link: string;
  logo: string;
}

export interface Video {
  uid: string;
  creator: string;
  thumbnail: string;
  thumbnailTimestampPct: number;
  readyToStream: boolean;
  status: Status;
  meta: Meta;
  created: Date;
  modified: Date;
  size: number;
  preview: string;
  allowedOrigins: any[];
  requireSignedURLs: boolean;
  uploaded: Date;
  uploadExpiry: Date;
  maxSizeBytes?: any;
  maxDurationSeconds?: any;
  duration: number;
  input: Input;
  playback: Playback;
  watermark?: any;
  clippedFrom?: any;
  publicDetails: PublicDetails;
}
