# deno_ffi_wasm_bench

```sh
root@108ea9196d60:/work# make bench
Building...
    Finished release [optimized] target(s) in 0.00s
    Finished release [optimized] target(s) in 0.00s
Check file:///work/fib_bench.ts
cpu: unknown
runtime: deno 1.32.5 (aarch64-unknown-linux-gnu)

file:///work/fib_bench.ts
benchmark                   time (avg)             (min … max)       p75       p99      p995
-------------------------------------------------------------- -----------------------------
warmup                  491.24 ps/iter(462.5 ps … 45.08 ns) 475 ps 537.5 ps 1.02 ns
call str join via FFI   515.88 µs/iter(505.29 µs … 599.79 µs) 516.29 µs 566.96 µs 572.25 µs
call str join via wasm  2.07 ms/iter(2.05 ms … 2.24 ms) 2.07 ms 2.21 ms 2.21 ms
```

## LICENSE
MIT
