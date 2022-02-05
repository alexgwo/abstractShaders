// This code creates a animated zebra skin

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coordi = gl_FragCoord.xy  / u_resolution.xy;
    float colour = 0.5;

    // creating black and white stripes
    colour += sin(coordi.x * 80.0 + cos(u_time + coordi.y * 10.0 + sin(coordi.x * 50.0))) * 2.0;

    gl_FragColor = vec4(vec3(colour + coordi.x, colour +coordi.y,colour), 1.0);
}