#[no_mangle]
pub extern "C" fn str_join(n: usize) {
    let mut s = String::new();
    for _ in 0..n {
        s += "foo"
    }
}
