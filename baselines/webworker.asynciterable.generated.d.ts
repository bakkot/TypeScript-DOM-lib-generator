/////////////////////////////
/// Worker Async Iterable APIs
/////////////////////////////

interface FileSystemDirectoryHandle {
    [Symbol.asyncIterator](): AsyncBuiltinIterator<[string, FileSystemHandle]>;
    entries(): AsyncBuiltinIterator<[string, FileSystemHandle]>;
    keys(): AsyncBuiltinIterator<string>;
    values(): AsyncBuiltinIterator<FileSystemHandle>;
}

interface ReadableStream<R = any> {
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): AsyncBuiltinIterator<R>;
    values(options?: ReadableStreamIteratorOptions): AsyncBuiltinIterator<R>;
}
