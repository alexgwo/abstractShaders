// This code creates animated pixels 
// that ressembles sparks

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

float random_2D(vec2 coordi){
    return fract(sin(dot(coordi.xy, vec2(12.9898,78.233))) * 43758.5453);
}

void main(){
    vec2 coordi = (gl_FragCoord.xy * 0.08);
    coordi -= u_time + vec2(sin(coordi.y), cos(coordi.x));

    float rand00 = fract(random_2D(floor(coordi)) + u_time / 60.0);
    float rand01 = fract(random_2D(floor(coordi)) + u_time / 40.0);

    // colour value
    rand00 *= 0.4 - length(fract(coordi));

    gl_FragColor = vec4(rand00* 6.0 ,rand01 * rand00 *4.0 , 0.1, 1.0);
}