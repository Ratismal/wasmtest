
const __exports = {};
let wasm;

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbg_thingy_8eabeb3ab3ddac12(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    thingy(varg0);
}

__exports.__wbg_thingy_8eabeb3ab3ddac12 = __wbg_thingy_8eabeb3ab3ddac12;

function __wbg_now_981d09bfe0170d2d() {
    return now();
}

__exports.__wbg_now_981d09bfe0170d2d = __wbg_now_981d09bfe0170d2d;
/**
* @returns {void}
*/
export function start() {
    return wasm.start();
}

__exports.start = start;

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a, b) {
    return wasm.add(a, b) >>> 0;
}

__exports.add = add;

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);

    const val = getObject(arg0).getElementById(varg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

__exports.__widl_f_get_element_by_id_Document = __widl_f_get_element_by_id_Document;

function __widl_instanceof_HTMLCanvasElement(idx) { return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0; }

__exports.__widl_instanceof_HTMLCanvasElement = __widl_instanceof_HTMLCanvasElement;

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

function __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = getObject(arg0).getContext(varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        handleError(exnptr, e);
    }
}

__exports.__widl_f_get_context_HTMLCanvasElement = __widl_f_get_context_HTMLCanvasElement;

function __widl_instanceof_WebGLRenderingContext(idx) { return getObject(idx) instanceof WebGLRenderingContext ? 1 : 0; }

__exports.__widl_instanceof_WebGLRenderingContext = __widl_instanceof_WebGLRenderingContext;

function __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
}

__exports.__widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext = __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext;

function __widl_f_attach_shader_WebGLRenderingContext(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
}

__exports.__widl_f_attach_shader_WebGLRenderingContext = __widl_f_attach_shader_WebGLRenderingContext;

function __widl_f_bind_buffer_WebGLRenderingContext(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
}

__exports.__widl_f_bind_buffer_WebGLRenderingContext = __widl_f_bind_buffer_WebGLRenderingContext;

function __widl_f_clear_WebGLRenderingContext(arg0, arg1) {
    getObject(arg0).clear(arg1 >>> 0);
}

__exports.__widl_f_clear_WebGLRenderingContext = __widl_f_clear_WebGLRenderingContext;

function __widl_f_clear_color_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
}

__exports.__widl_f_clear_color_WebGLRenderingContext = __widl_f_clear_color_WebGLRenderingContext;

function __widl_f_compile_shader_WebGLRenderingContext(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
}

__exports.__widl_f_compile_shader_WebGLRenderingContext = __widl_f_compile_shader_WebGLRenderingContext;

function __widl_f_create_buffer_WebGLRenderingContext(arg0) {

    const val = getObject(arg0).createBuffer();
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

__exports.__widl_f_create_buffer_WebGLRenderingContext = __widl_f_create_buffer_WebGLRenderingContext;

function __widl_f_create_program_WebGLRenderingContext(arg0) {

    const val = getObject(arg0).createProgram();
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

__exports.__widl_f_create_program_WebGLRenderingContext = __widl_f_create_program_WebGLRenderingContext;

function __widl_f_create_shader_WebGLRenderingContext(arg0, arg1) {

    const val = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

__exports.__widl_f_create_shader_WebGLRenderingContext = __widl_f_create_shader_WebGLRenderingContext;

function __widl_f_draw_arrays_WebGLRenderingContext(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
}

__exports.__widl_f_draw_arrays_WebGLRenderingContext = __widl_f_draw_arrays_WebGLRenderingContext;

function __widl_f_enable_vertex_attrib_array_WebGLRenderingContext(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
}

__exports.__widl_f_enable_vertex_attrib_array_WebGLRenderingContext = __widl_f_enable_vertex_attrib_array_WebGLRenderingContext;

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {

        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let writeOffset = 0;
        while (true) {
            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);
            const { read, written } = cachedTextEncoder.encodeInto(arg, view);
            writeOffset += written;
            if (read === arg.length) {
                break;
            }
            arg = arg.substring(read);
            ptr = wasm.__wbindgen_realloc(ptr, size, size += arg.length * 3);
        }
        WASM_VECTOR_LEN = writeOffset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {

        const buf = cachedTextEncoder.encode(arg);
        const ptr = wasm.__wbindgen_malloc(buf.length);
        getUint8Memory().set(buf, ptr);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    };
}

function __widl_f_get_program_info_log_WebGLRenderingContext(ret, arg0, arg1) {
    const val = getObject(arg0).getProgramInfoLog(getObject(arg1));
    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

}

__exports.__widl_f_get_program_info_log_WebGLRenderingContext = __widl_f_get_program_info_log_WebGLRenderingContext;

function __widl_f_get_program_parameter_WebGLRenderingContext(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0));
}

__exports.__widl_f_get_program_parameter_WebGLRenderingContext = __widl_f_get_program_parameter_WebGLRenderingContext;

function __widl_f_get_shader_info_log_WebGLRenderingContext(ret, arg0, arg1) {
    const val = getObject(arg0).getShaderInfoLog(getObject(arg1));
    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

}

__exports.__widl_f_get_shader_info_log_WebGLRenderingContext = __widl_f_get_shader_info_log_WebGLRenderingContext;

function __widl_f_get_shader_parameter_WebGLRenderingContext(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0));
}

__exports.__widl_f_get_shader_parameter_WebGLRenderingContext = __widl_f_get_shader_parameter_WebGLRenderingContext;

function __widl_f_link_program_WebGLRenderingContext(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
}

__exports.__widl_f_link_program_WebGLRenderingContext = __widl_f_link_program_WebGLRenderingContext;

function __widl_f_shader_source_WebGLRenderingContext(arg0, arg1, arg2, arg3) {
    let varg2 = getStringFromWasm(arg2, arg3);
    getObject(arg0).shaderSource(getObject(arg1), varg2);
}

__exports.__widl_f_shader_source_WebGLRenderingContext = __widl_f_shader_source_WebGLRenderingContext;

function __widl_f_use_program_WebGLRenderingContext(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
}

__exports.__widl_f_use_program_WebGLRenderingContext = __widl_f_use_program_WebGLRenderingContext;

function __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
}

__exports.__widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext = __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext;

function __widl_instanceof_Window(idx) { return getObject(idx) instanceof Window ? 1 : 0; }

__exports.__widl_instanceof_Window = __widl_instanceof_Window;

function __widl_f_request_animation_frame_Window(arg0, arg1, exnptr) {
    try {
        return getObject(arg0).requestAnimationFrame(getObject(arg1));
    } catch (e) {
        handleError(exnptr, e);
    }
}

__exports.__widl_f_request_animation_frame_Window = __widl_f_request_animation_frame_Window;

function __widl_f_document_Window(arg0) {

    const val = getObject(arg0).document;
    return isLikeNone(val) ? 0 : addHeapObject(val);

}

__exports.__widl_f_document_Window = __widl_f_document_Window;

function __wbg_newnoargs_9fab447a311888a5(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
}

__exports.__wbg_newnoargs_9fab447a311888a5 = __wbg_newnoargs_9fab447a311888a5;

function __wbg_call_001e26aeb2fdef67(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        handleError(exnptr, e);
    }
}

__exports.__wbg_call_001e26aeb2fdef67 = __wbg_call_001e26aeb2fdef67;

function __wbg_new_903c20206a19ce91(arg0) {
    return addHeapObject(new Float32Array(getObject(arg0)));
}

__exports.__wbg_new_903c20206a19ce91 = __wbg_new_903c20206a19ce91;

function __wbg_subarray_cd8dd34c830bb552(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0));
}

__exports.__wbg_subarray_cd8dd34c830bb552 = __wbg_subarray_cd8dd34c830bb552;

function __wbg_instanceof_Memory_3d957e67f0684d53(idx) { return getObject(idx) instanceof WebAssembly.Memory ? 1 : 0; }

__exports.__wbg_instanceof_Memory_3d957e67f0684d53 = __wbg_instanceof_Memory_3d957e67f0684d53;

function __wbg_buffer_85e60d809f6cd4e8(arg0) {
    return addHeapObject(getObject(arg0).buffer);
}

__exports.__wbg_buffer_85e60d809f6cd4e8 = __wbg_buffer_85e60d809f6cd4e8;

function __wbg_error_4bb6c2a97407129a(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);

    varg0 = varg0.slice();
    wasm.__wbindgen_free(arg0, arg1 * 1);

    console.error(varg0);
}

__exports.__wbg_error_4bb6c2a97407129a = __wbg_error_4bb6c2a97407129a;

function __wbg_new_59cb74e423758ede() {
    return addHeapObject(new Error());
}

__exports.__wbg_new_59cb74e423758ede = __wbg_new_59cb74e423758ede;

function __wbg_stack_558ba5917b466edd(ret, arg0) {

    const retptr = passStringToWasm(getObject(arg0).stack);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

}

__exports.__wbg_stack_558ba5917b466edd = __wbg_stack_558ba5917b466edd;

function __wbindgen_string_new(p, l) { return addHeapObject(getStringFromWasm(p, l)); }

__exports.__wbindgen_string_new = __wbindgen_string_new;

function __wbindgen_boolean_get(i) {
    let v = getObject(i);
    return typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
}

__exports.__wbindgen_boolean_get = __wbindgen_boolean_get;

function __wbindgen_debug_string(i, len_ptr) {
    const debug_str =
    val => {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debug_str(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debug_str(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
        return `${val.name}: ${val.message}
        ${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
;
const toString = Object.prototype.toString;
const val = getObject(i);
const debug = debug_str(val);
const ptr = passStringToWasm(debug);
getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
return ptr;
}

__exports.__wbindgen_debug_string = __wbindgen_debug_string;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function __wbindgen_cb_drop(i) {
    const obj = takeObject(i).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
}

__exports.__wbindgen_cb_drop = __wbindgen_cb_drop;

function __wbindgen_memory() { return addHeapObject(wasm.memory); }

__exports.__wbindgen_memory = __wbindgen_memory;

function __wbindgen_rethrow(idx) { throw takeObject(idx); }

__exports.__wbindgen_rethrow = __wbindgen_rethrow;

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

__exports.__wbindgen_throw = __wbindgen_throw;

function __wbindgen_closure_wrapper75(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(12);
    const d = wasm.__wbg_function_table.get(13);
    const cb = function() {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b);

        } finally {
            if (--this.cnt === 0) d(a, b);
            else this.a = a;

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
}

__exports.__wbindgen_closure_wrapper75 = __wbindgen_closure_wrapper75;

function __wbindgen_object_clone_ref(idx) {
    return addHeapObject(getObject(idx));
}

__exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;

function __wbindgen_object_drop_ref(i) { dropObject(i); }

__exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;

function init(module) {
    let result;
    const imports = { './wasm_test': __exports };
    if (module instanceof URL || typeof module === 'string' || module instanceof Request) {

        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                return response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {

        result = WebAssembly.instantiate(module, imports)
        .then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;
        wasm.__wbindgen_start();
        return wasm;
    });
}

export default init;

