
export type Options = Partial<CreateStorageParams>;

export interface CreateStorageParams {
    prefixKey: string;
    storage: Storage;
    hasEncrypt: boolean;
    timeout?: Nullable<number>;
}

const createOptions = (storage: Storage, options: Options = {}): Options => {
    return {
      hasEncrypt: true,
      storage,
      prefixKey:'',
      ...options,
    };
  };