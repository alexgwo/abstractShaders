// This code creates a polygon that moves in a circular way
// This polygon also rotates and scales during the translation

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;

const float pi = 3.1415926535;

// polygon shape
float polySp(vec2 position, float radius, float sides){
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice= pi * 2.0 / sides;
    return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

//rotate
mat2 rotate(float angle){
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

//scale
mat2 scale(vec2 scale){
    return mat2(scale.x, 0.0, 0.0, scale.y);
}

void main(){

    vec2 coordi = gl_FragCoord.xy / u_resolution;

    // define the polygon colour
    vec3 colour = vec3(0.5529, 0.1294, 0.3922);

    // translate
    vec2 translate = vec2(sin(u_time / 0.3), cos(u_time / 0.3));
    coordi += translate * 0.4;

    // scale and rotate
    coordi -= vec2(0.5);
    coordi = scale(vec2(sin(u_time / 0.4) + 2.0 )) * coordi;
    coordi = rotate(sin(u_time / 0.1)) * coordi;
    coordi += vec2(0.5);

    // create polygon
    float polygon = polySp(coordi, 0.6, 6.0);

    colour += vec3(polySp(coordi, 0.6, 6.0));
    gl_FragColor = vec4(colour, 1.0);
	
}