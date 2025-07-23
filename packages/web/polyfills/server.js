// Server-side polyfills for global objects that don't exist in Node.js
if (typeof globalThis.self === 'undefined') {
  globalThis.self = globalThis
}

if (typeof globalThis.window === 'undefined') {
  globalThis.window = undefined
}

if (typeof globalThis.document === 'undefined') {
  globalThis.document = undefined
}

if (typeof globalThis.navigator === 'undefined') {
  globalThis.navigator = undefined
}
