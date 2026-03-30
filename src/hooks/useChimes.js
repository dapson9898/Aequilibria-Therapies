import CHIME_B64 from '../assets/chime.js'

let audioCtx = null

function getCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  return audioCtx
}

export function playChime() {
  try {
    const ctx = getCtx()
    const bytes = atob(CHIME_B64)
    const buf   = new Uint8Array(bytes.length)
    for (let i = 0; i < bytes.length; i++) buf[i] = bytes.charCodeAt(i)

    ctx.decodeAudioData(buf.buffer, (decoded) => {
      const src    = ctx.createBufferSource()
      const gainNd = ctx.createGain()
      gainNd.gain.value = 0.7
      src.buffer = decoded
      src.connect(gainNd)
      gainNd.connect(ctx.destination)
      src.start(0)
    })
  } catch (e) {
    // Silently fail if audio not available
  }
}
