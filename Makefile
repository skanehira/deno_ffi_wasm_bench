.PHONY: build
build:
	@echo "Building..."
	@cargo build --release --target wasm32-unknown-unknown
	@cargo build --release

.PHONY: bench
bench: build
	@deno bench fib_bench.ts -A --unstable
