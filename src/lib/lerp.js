export const lerp = (start, end, factor) => start + (end - start) * factor;
export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
