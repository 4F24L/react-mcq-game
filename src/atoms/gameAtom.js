import { atom } from 'recoil'

export const questionIndexAtom = atom({
  key: 'questionIndex',
  default: 0,
})

export const scoreAtom = atom({
  key: 'score',
  default: 0,
})

export const selectedOptionAtom = atom({
  key: 'selectedOption',
  default: null,
})
