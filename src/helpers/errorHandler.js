export function errorHandler (error, component, info) {
  console.group(`${error}\n(${info})`)
  console.log('  In component: ', component.$options._componentTag)
  const parentLevelOne = component.$options.parent.$options._componentTag
  parentLevelOne && console.log('    From: ', parentLevelOne)
  const parentLevelTwo = component.$options.parent.$options.parent.$options._componentTag
  parentLevelTwo && console.log('      From: ', parentLevelTwo)
  const parentLevelThree = component.$options.parent.$options.parent.$options.parent.$options._componentTag
  parentLevelThree && console.log('        From: ', parentLevelThree)
  console.groupEnd(`${error}\n(${info})`)
  return false
}
