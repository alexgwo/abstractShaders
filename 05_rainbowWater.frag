// This code creates a multicolour water effect

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

void main(){

    vec2 coordi = gl_FragCoord.xy * 10.0 / u_resolution;
    
    // define the multi-colour and water effect
    for(int a = 1; a < 15; a++){
        float n = float(a);
        coordi += vec2(0.7 / n * sin( n * coordi.y + u_time + 0.3 * n) + 0.8, 0.4 / n * sin(coordi.x + u_time + 0.3 * n) + 1.5);
    }

    vec3 colour = vec3(0.5 * sin(coordi.x) + 0.5, 0.5 * sin(coordi.y) + 0.5, sin(coordi.x + coordi.y));

	gl_FragColor = vec4(colour, 1.0);
}