// place files you want to import through the `$lib` alias in this folder.

import { writable } from "svelte/store";
import { animate, stagger, timeline,scroll, inView, type Easing, type TimelineDefinition, ScrollOffset } from "motion"


export const navIsOpen = writable(false)
export const mounted = writable(false)


export const animation = () => {
  const easing:Easing = [0.39, 0.575, 0.565, 1]
  
  
  
  
  
  // acceuil

  const acceuilRev =[...document.querySelectorAll('#acceuil .rev')]
  
  const acceuilSeq:TimelineDefinition = [
    [acceuilRev[0], {y: [-100, 0]}, {duration: .8, easing: easing, at:"-0.7",}],
    [acceuilRev[1], {y: [-100, 0]}, {duration: .8, easing: easing, at:"-0.7",}],
    [acceuilRev[2], {y: [-200, 0]}, {duration: .8, easing: easing, at:"-0.6",}],
    [acceuilRev[3], {y: [-200, 0]}, {duration: .8, easing: easing, at:"-0.6",}],
    [acceuilRev[4], {y: [-100, 0]}, {duration: .8, easing: easing, at:"-0.6",}],
    [acceuilRev[5], {y: [-100, 0]}, {duration: .8, easing: easing, at:"-0.7",}],
    ['.hero-bottom p', {y: [20, 0], opacity: [0, 1]}, {duration: 0.5, easing: easing, at: '-0.5'}],
    ['.hero-bottom h2', {y: [20, 0], opacity: [0, 1]}, {duration: 0.5, easing: easing, at: '-0.2'}],
  ]

  timeline(acceuilSeq, {
    delay: 2
  })


  // how

  const howEl = [...document.querySelectorAll('.how p')]

 inView(howEl[1], (info) => {
  animate(info.target, {y: [100, 0], opacity: [0,1]}, {duration: 1, easing: easing})
 })
 inView(howEl[2], (info) => {
  animate(info.target, {y: [100, 0], opacity: [0,1]}, {duration: 1, easing: easing})
 })
 inView(howEl[3], (info) => {
  animate(info.target, {y: [100, 0], opacity: [0,1]}, {duration: 1, easing: easing})
 })
 inView(howEl[4], (info) => {
  animate(info.target, {y: [100, 0], opacity: [0,1]}, {duration: 1, easing: easing})
 })

 // expertises

 const expertiseEl = document.querySelectorAll('#services a')
 inView(expertiseEl[0], (info) => {
  animate(info.target, {x: [-400, 0], opacity: [0,1]}, {duration: 1, easing: easing, delay:stagger(0.3) })
 })

//  method

 inView('.method-header span ', (info) => {
  animate(info.target, {y: [100, 0]}, {duration: 1, easing: easing})
 })

//  inView('#method .mtd-line', (info) => {
//   animate(info.target, {scaleY: [0,1]}, {duration: 2, easing: easing, delay: stagger(0.1)})

//  })

const methSection = document.querySelector('#approche') as HTMLElement
scroll(animate('.mtd-line', {scaleY: [0,1]}, {duration: 0.3, easing:easing}), {
  target: methSection
})

 // team 

 inView('#team p', (info) => {
  animate(info.target, {opacity: [0,1]}, {duration: 1.5, easing: easing, delay: stagger(0.1)})
 })


 // faq

 inView('.faq-left p span', (info) => {
  animate(info.target, {y: [100, 0]}, {duration: 1, easing: easing, delay: stagger(0.1)})
 })


  // text reveal
  
  const section = document.querySelector('#why') as HTMLElement
 scroll(animate('#why .reveal', {backgroundSize: ['0%' ,'100%']},  {  delay: stagger(0.03), easing: easing }), {
  target: section,
  offset: ["start end", "end end"],
 })


//  contact line

 inView('.c-line', (info) => {
  const controls = animate(info.target, {scaleX: [1,0], }, {duration: 1, easing:easing, delay: stagger(1) })
  // controls.play()
 })
 inView('.c-line-2', (info) => {
  const link = document.querySelector('.contact-h a') as HTMLAnchorElement
  const controls = animate(info.target, {scaleX:[0,1] }, {duration: 1, easing:easing, delay: 1.2 })
  // controls.play()
 
 })
}



