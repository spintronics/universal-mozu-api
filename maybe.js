import sanctuaryMaybe from 'sanctuary-maybe'
import type from 'ramda/src/type'
import curry from 'ramda/src/curry'

let {
  Just,
  Nothing
} = sanctuaryMaybe

export let Maybe = (def, fn) => val =>
  type(val) === def ? Just(fn ? fn(val) : val) : Nothing

export default {
  Maybe
}