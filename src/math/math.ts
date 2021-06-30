import { Vector } from "./Vector"

const epsilon = 0.00001

export function equals( a: number, b: number ) {
    return Math.abs( a - b ) < epsilon
}

export function randomFloor( upperLimit: number ) {
    return Math.floor( Math.random() * upperLimit )
}

export function contains( min: number, max: number, x: number ) {
    return x >= min && x <= max
}

export function contains2D( pos: Vector, width: number, height: number, pt: Vector ) {
    return contains( pos.x, pos.x + width, pt.x ) && contains( pos.y, pos.y + height, pt.y )
}

export function clamp( min: number, max: number, x: number ) {
    return ( x < min ) ? min : ( ( x > max ) ? max : x )
}

export function lerp( start: number, end: number, alpha: number ) {
    return ( end - start ) * alpha + start
}

export function modulus( quotient: number, divisor: number ) {
    return ( ( quotient % divisor ) + divisor ) % divisor
}