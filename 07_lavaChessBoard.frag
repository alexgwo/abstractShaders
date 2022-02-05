// This code creates a chess board
//the white squares melt in a lava effect

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){

    vec2 coordi = gl_FragCoord.xy / u_resolution;
    // define the lava colour
    vec3 colour = vec3(0.5529, 0.2157, 0.1294);

    colour += cos(coordi.y * cos(u_time / 60.0) * 50.0) + cos(coordi.x * cos(u_time / 20.0) * 30.0);
    colour += sin(coordi.x * cos(u_time / 60.0) * 50.0) + sin(coordi.y * cos(u_time / 20.0) * 30.0);

	gl_FragColor = vec4(colour, 1.0);
}