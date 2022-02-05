// This code creates a animated spiral with multiple colours
// The output ressembles a lollipop

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){
    vec2 coordi = gl_FragCoord.xy  / u_resolution.xy;
    vec3 colour = vec3(1.0);

    // create circles
    float angle = atan(-coordi.y + 0.25, coordi.x - 0.5) * 0.1;
    float len = length(coordi - vec2(0.5,0.25));
    // define colour
    colour.r += sin(len * 40.0 + angle *40.0 + u_time); 
    colour.g += cos(len * 40.0 + angle *60.0 - u_time); 
    colour.b += cos(len * 30.0+ angle *50.0 + 2.0); 

    gl_FragColor = vec4(colour, 1.0);
}