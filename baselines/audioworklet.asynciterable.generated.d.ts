/////////////////////////////
/// AudioWorklet Async Iterable APIs
/////////////////////////////

interface ReadableStream<R = any> {
    [Symbol.asyncIterator](options?: ReadableStreamIteratorOptions): AsyncBuiltinIterator<R>;
    values(options?: ReadableStreamIteratorOptions): AsyncBuiltinIterator<R>;
}
