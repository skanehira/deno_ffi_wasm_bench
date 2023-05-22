# deno_ffi_wasm_bench

```sh
root@108ea9196d60:/work# make bench
Building...
    Finished release [optimized] target(s) in 0.01s
    Finished release [optimized] target(s) in 0.00s
Check file:///work/fib_bench.ts
cpu: unknown
runtime: deno 1.32.5 (aarch64-unknown-linux-gnu)

file:///work/fib_bench.ts
benchmark                   time (avg)             (min … max)       p75       p99      p995
-------------------------------------------------------------- -----------------------------
warmup                  491.46 ps/iter(462.5 ps … 47.26 ns) 475 ps 537.5 ps 1.05 ns
call str join via FFI   213.19 ns/iter(202.73 ns … 248.4 ns) 215.72 ns 232.62 ns 233.66 ns
call str join via wasm  224.83 ns/iter(220.1 ns … 269.4 ns) 226.97 ns 237.45 ns 237.91 ns
```

## LICENSE
MIT
