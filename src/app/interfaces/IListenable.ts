export type ListenerCallback = (value: string) => void;

export interface IListemable {
  subscribe: (callback: ListenerCallback) => void;
  unsubscribe: (callback: ListenerCallback) => void;
}

export interface IListener {
  listenCallback: ListenerCallback;
}
