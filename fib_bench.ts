const wasm = new WebAssembly.Instance(
  new WebAssembly.Module(
    Deno.readFileSync(
      "./target/wasm32-unknown-unknown/release/deno_ffi_wasm_bench.wasm",
    ),
  ),
);
const wasmStrJoin = wasm.exports.str_join as CallableFunction;

const libName = "./target/release/libdeno_ffi_wasm_bench.so";
const dylib = Deno.dlopen(
  libName,
  {
    "str_join": { parameters: ["usize"], result: "void" },
  } as const,
);
const ffiStrJoin = dylib.symbols.str_join;

const N = 35;

Deno.bench({
  name: "warmup",
}, () => {
  // do nothing
});

Deno.bench({
  name: "call str join via FFI",
}, () => {
  ffiStrJoin(N);
});

Deno.bench({
  name: "call str join via wasm",
}, () => {
  wasmStrJoin(N);
});
