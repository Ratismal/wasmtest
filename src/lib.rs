extern crate wasm_bindgen;
extern crate console_error_panic_hook;

use std::cell::RefCell;
use std::rc::Rc;
use js_sys::WebAssembly;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{WebGlProgram, WebGlRenderingContext, WebGlShader};

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace=console)]
    fn log(s: &str);

    pub fn thingy(s: &str);
    #[wasm_bindgen(js_name = thingy)]
    pub fn thingy_string(s: String);

    fn now() -> f64;
}

fn window() -> web_sys::Window {
    return web_sys::window().expect("no global 'window' exists");
}

fn document() -> web_sys::Document {
    return window().document().expect("should have a document on window");
}

fn body() -> web_sys::HtmlElement {
    return document().body().expect("document should have a body");
}

fn context() -> Result<WebGlRenderingContext, JsValue> {
    let canvas = document().get_element_by_id("canvas").unwrap();
    let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into::<web_sys::HtmlCanvasElement>()?;
    return Ok(canvas.get_context("webgl")?.unwrap().dyn_into::<WebGlRenderingContext>()?);
}

fn request_animation_frame(f: &Closure<FnMut()>) {
    window()
        .request_animation_frame(f.as_ref().unchecked_ref())
        .expect("should register 'requestAnimationFrame' OK");
}

pub struct Context {
    rotation: f32
}

#[wasm_bindgen(start)]
pub fn start() -> Result<(), JsValue> {
    console_error_panic_hook::set_once();
    thingy("Starting rust thingy...");

    let context = context()?;

    thingy("Compiling shaders...");
    let vert_shader = compile_shader(
        &context,
        WebGlRenderingContext::VERTEX_SHADER,
        r#"
        attribute vec4 position;
        void main() {
            gl_Position = position;
        }
    "#,
    )?;

    let frag_shader = compile_shader(
        &context,
        WebGlRenderingContext::FRAGMENT_SHADER,
        r#"
        void main() {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
    "#,
    )?;

    thingy("Linking program...");
    let program = link_program(&context, &vert_shader, &frag_shader)?;
    context.use_program(Some(&program));

    thingy("Requesting animation frame...");
    let f = Rc::new(RefCell::new(None));
    let g = f.clone();

    let mut then_time: f64 = now() / 1000.0;

    let mut ctx = Context {
        rotation: 0.0
    };

    *g.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        let now_time = now() / 1000.0;
        let delta_time = now_time - then_time;
        let _ = render_scene(&mut ctx, delta_time);

        then_time = now_time;

        request_animation_frame(f.borrow().as_ref().unwrap());
    }) as Box<FnMut()>));

    request_animation_frame(g.borrow().as_ref().unwrap());

    thingy("Done!");
    
    Ok(())
}



pub fn render_scene(ctx: &mut Context, delta_time: f64) -> Result<(), JsValue> {
    // thingy("Doing rendering stuff...");
    let vertices: [f32; 9] = [-0.7 + ctx.rotation, -0.7, 0.0, 0.7 - ctx.rotation, -0.7, 0.0, 0.0, 0.7, 0.0];
    
    ctx.rotation = ctx.rotation + delta_time as f32;
    if ctx.rotation >= 1.4 {
        ctx.rotation = 0.0;
    }
    let memory_buffer = wasm_bindgen::memory()
        .dyn_into::<WebAssembly::Memory>()?
        .buffer();
    let vertices_location = vertices.as_ptr() as u32 / 4;
    let vert_array = js_sys::Float32Array::new(&memory_buffer)
        .subarray(vertices_location, vertices_location + vertices.len() as u32);

    let context = context()?;

    let buffer = context.create_buffer().ok_or("failed to create buffer")?;
    context.bind_buffer(WebGlRenderingContext::ARRAY_BUFFER, Some(&buffer));
    context.buffer_data_with_array_buffer_view(
        WebGlRenderingContext::ARRAY_BUFFER,
        &vert_array,
        WebGlRenderingContext::STATIC_DRAW,
    );

    context.vertex_attrib_pointer_with_i32(0, 3, WebGlRenderingContext::FLOAT, false, 0, 0);
    context.enable_vertex_attrib_array(0);

    context.clear_color(0.0, 0.0, 0.0, 1.0);
    context.clear(WebGlRenderingContext::COLOR_BUFFER_BIT);

    // thingy("Drawing...");
    context.draw_arrays(
        WebGlRenderingContext::TRIANGLES,
        0,
        (vertices.len() / 3) as i32,
    );

    Ok(())
}

pub fn compile_shader(context: &WebGlRenderingContext,
    shader_type: u32,
    source: &str,
) -> Result<WebGlShader, String> {
    let shader = context.create_shader(shader_type)
        .ok_or_else(|| String::from("Unable to create shader object"))?;
        context.shader_source(&shader, source);
        context.compile_shader(&shader);

    if context
        .get_shader_parameter(&shader, WebGlRenderingContext::COMPILE_STATUS)
        .as_bool()
        .unwrap_or(false) {
            Ok(shader)
        } else {
            Err(context
                .get_shader_info_log(&shader)
                .unwrap_or_else(|| String::from("Unknown error creating shader")))
        }
}

pub fn link_program(
    context: &WebGlRenderingContext,
    vert_shader: &WebGlShader,
    frag_shader: &WebGlShader,
) -> Result<WebGlProgram, String> {
    let program = context
        .create_program()
        .ok_or_else(|| String::from("Unable to create program object"))?;

    context.attach_shader(&program, vert_shader);
    context.attach_shader(&program, frag_shader);
    context.link_program(&program);

    if context
        .get_program_parameter(&program, WebGlRenderingContext::LINK_STATUS)
        .as_bool()
        .unwrap_or(false) 
    {
            Ok(program)
    } else {
        Err(context
            .get_program_info_log(&program)
            .unwrap_or_else(|| String::from("Unknown error creating program object")))
    }
}



#[wasm_bindgen]
pub fn add(a: u32, b: u32) -> u32 {
    a + b
}