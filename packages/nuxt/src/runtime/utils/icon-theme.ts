export { generateColorVariable };

// TODO-NEW-DESIGN-SYSTEM: move this to @reteach/ui if used elsewhere
function generateColorVariable(color: string) {
  return `var(--${color})`;
}
