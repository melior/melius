import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SidenavState } from './sidenav-state.model';

const sidenavTransition = transition(
  `${SidenavState.Indeterminate} => ${SidenavState.Closed},
   ${SidenavState.Indeterminate} => ${SidenavState.Open},
   ${SidenavState.Closed} <=> ${SidenavState.Open}`,
  animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'),
);

export const sidenavAnimations = [
  trigger('sidenavTrigger', [
    state(
      SidenavState.Closed,
      style({
        transform: 'translate3d(-100%, 0, 0)',
      }),
    ),

    state(
      SidenavState.Open,
      style({
        transform: 'translate3d(0, 0, 0)',
      }),
    ),

    sidenavTransition,
  ]),

  trigger('sidenavBackdropTrigger', [
    state(
      SidenavState.Closed,
      style({
        visibility: 'hidden',
        opacity: 0,
      }),
    ),

    state(
      SidenavState.Open,
      style({
        visibility: 'visible',
        opacity: 0.6,
      }),
    ),

    sidenavTransition,
  ]),
];
