// This code creates a stepped animation of stripes

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coordi = 9.0 * gl_FragCoord.xy  / u_resolution.xy;
    vec3 colour = vec3(0.2, 0.3882, 0.4196);

    float size = 6.0;
    float alfa = sin(floor(-coordi.x * size)+ u_time * 4.0) + 1.0 / 2.0;

    gl_FragColor = vec4(colour, alfa);
}