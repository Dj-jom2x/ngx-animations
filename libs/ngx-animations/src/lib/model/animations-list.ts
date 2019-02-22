import {
  bounce,
  flash,
  headShake,
  heartBeat,
  pulse,
  rubberBand,
  shake,
  swing,
  tada,
  wobble,
  jello,
  bounceIn,
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOut,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp,
  fadeIn,
  fadeInDown,
  fadeInDownBig,
  fadeInLeft,
  fadeInLeftBig,
  fadeInRight,
  fadeInRightBig,
  fadeInUp,
  fadeInUpBig,
  fadeOut,
  fadeOutDown,
  fadeOutDownBig,
  fadeOutLeft,
  fadeOutLeftBig,
  fadeOutRight,
  fadeOutRightBig,
  fadeOutUp,
  fadeOutUpBig,
  flip,
  flipInX,
  flipInY,
  flipOutX,
  flipOutY,
  lightSpeedIn,
  lightSpeedOut,
  rotateIn,
  rotateInDownLeft,
  rotateInDownRight,
  rotateInUpLeft,
  rotateInUpRight,
  rotateOut,
  rotateOutDownLeft,
  rotateOutDownRight,
  rotateOutUpLeft,
  rotateOutUpRight,
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  slideOutUp,
  slideOutDown,
  slideOutLeft,
  slideOutRight,
  zoomIn,
  zoomInDown,
  zoomInLeft,
  zoomInRight,
  zoomInUp,
  zoomOut,
  zoomOutDown,
  zoomOutLeft,
  zoomOutRight,
  zoomOutUp,
  hinge,
  jackInTheBox,
  rollIn,
  rollOut
} from '../animations';
import {
  style,
  AnimationStyleMetadata,
  AnimationAnimateMetadata,
  animate
} from '@angular/animations';
import { AnimationDefinition } from './animation-definition';

export function stylesToAnimation(
  animationDefinition: AnimationDefinition
): (number) => (AnimationStyleMetadata | AnimationAnimateMetadata)[] {
  return (time: number) => [
    style(animationDefinition.start),
    ...animationDefinition.steps.map(_ =>
      animate(time / animationDefinition.denominator, style(_))
    )
  ];
}

export const animations = {
  bounce: stylesToAnimation(bounce),
  flash: stylesToAnimation(flash),
  headShake: stylesToAnimation(headShake),
  heartBeat: stylesToAnimation(heartBeat),
  pulse: stylesToAnimation(pulse),
  rubberBand: stylesToAnimation(rubberBand),
  shake: stylesToAnimation(shake),
  swing: stylesToAnimation(swing),
  tada: stylesToAnimation(tada),
  wobble: stylesToAnimation(wobble),
  jello: stylesToAnimation(jello),
  bounceIn: stylesToAnimation(bounceIn),
  bounceInDown: stylesToAnimation(bounceInDown),
  bounceInLeft: stylesToAnimation(bounceInLeft),
  bounceInRight: stylesToAnimation(bounceInRight),
  bounceInUp: stylesToAnimation(bounceInUp),
  bounceOut: stylesToAnimation(bounceOut),
  bounceOutDown: stylesToAnimation(bounceOutDown),
  bounceOutLeft: stylesToAnimation(bounceOutLeft),
  bounceOutRight: stylesToAnimation(bounceOutRight),
  bounceOutUp: stylesToAnimation(bounceOutUp),
  fadeIn: stylesToAnimation(fadeIn),
  fadeInDown: stylesToAnimation(fadeInDown),
  fadeInDownBig: stylesToAnimation(fadeInDownBig),
  fadeInLeft: stylesToAnimation(fadeInLeft),
  fadeInLeftBig: stylesToAnimation(fadeInLeftBig),
  fadeInRight: stylesToAnimation(fadeInRight),
  fadeInRightBig: stylesToAnimation(fadeInRightBig),
  fadeInUp: stylesToAnimation(fadeInUp),
  fadeInUpBig: stylesToAnimation(fadeInUpBig),
  fadeOut: stylesToAnimation(fadeOut),
  fadeOutDown: stylesToAnimation(fadeOutDown),
  fadeOutDownBig: stylesToAnimation(fadeOutDownBig),
  fadeOutLeft: stylesToAnimation(fadeOutLeft),
  fadeOutLeftBig: stylesToAnimation(fadeOutLeftBig),
  fadeOutRight: stylesToAnimation(fadeOutRight),
  fadeOutRightBig: stylesToAnimation(fadeOutRightBig),
  fadeOutUp: stylesToAnimation(fadeOutUp),
  fadeOutUpBig: stylesToAnimation(fadeOutUpBig),
  flip: stylesToAnimation(flip),
  flipInX: stylesToAnimation(flipInX),
  flipInY: stylesToAnimation(flipInY),
  flipOutX: stylesToAnimation(flipOutX),
  flipOutY: stylesToAnimation(flipOutY),
  lightSpeedIn: stylesToAnimation(lightSpeedIn),
  lightSpeedOut: stylesToAnimation(lightSpeedOut),
  rotateIn: stylesToAnimation(rotateIn),
  rotateInDownLeft: stylesToAnimation(rotateInDownLeft),
  rotateInDownRight: stylesToAnimation(rotateInDownRight),
  rotateInUpLeft: stylesToAnimation(rotateInUpLeft),
  rotateInUpRight: stylesToAnimation(rotateInUpRight),
  rotateOut: stylesToAnimation(rotateOut),
  rotateOutDownLeft: stylesToAnimation(rotateOutDownLeft),
  rotateOutDownRight: stylesToAnimation(rotateOutDownRight),
  rotateOutUpLeft: stylesToAnimation(rotateOutUpLeft),
  rotateOutUpRight: stylesToAnimation(rotateOutUpRight),
  slideInUp: stylesToAnimation(slideInUp),
  slideInDown: stylesToAnimation(slideInDown),
  slideInLeft: stylesToAnimation(slideInLeft),
  slideInRight: stylesToAnimation(slideInRight),
  slideOutUp: stylesToAnimation(slideOutUp),
  slideOutDown: stylesToAnimation(slideOutDown),
  slideOutLeft: stylesToAnimation(slideOutLeft),
  slideOutRight: stylesToAnimation(slideOutRight),
  zoomIn: stylesToAnimation(zoomIn),
  zoomInDown: stylesToAnimation(zoomInDown),
  zoomInLeft: stylesToAnimation(zoomInLeft),
  zoomInRight: stylesToAnimation(zoomInRight),
  zoomInUp: stylesToAnimation(zoomInUp),
  zoomOut: stylesToAnimation(zoomOut),
  zoomOutDown: stylesToAnimation(zoomOutDown),
  zoomOutLeft: stylesToAnimation(zoomOutLeft),
  zoomOutRight: stylesToAnimation(zoomOutRight),
  zoomOutUp: stylesToAnimation(zoomOutUp),
  hinge: stylesToAnimation(hinge),
  jackInTheBox: stylesToAnimation(jackInTheBox),
  rollIn: stylesToAnimation(rollIn),
  rollOut: stylesToAnimation(rollOut)
};
