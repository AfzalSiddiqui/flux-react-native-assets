/**
 * Type-safe access to icon names, mapped to Ionicons.
 * SF Symbols → Ionicons equivalents.
 */
export const FluxImages = {
  System: {
    home: 'home' as const,
    profile: 'person' as const,
    settings: 'settings' as const,
    notifications: 'notifications' as const,
    search: 'search' as const,
    back: 'arrow-back' as const,
    forward: 'arrow-forward' as const,
    close: 'close' as const,
    check: 'checkmark' as const,
    plus: 'add' as const,
    minus: 'remove' as const,
    trash: 'trash' as const,
    edit: 'pencil' as const,
    share: 'share' as const,
    heart: 'heart' as const,
    star: 'star' as const,
    warning: 'warning' as const,
    error: 'close-circle' as const,
    success: 'checkmark-circle' as const,
    info: 'information-circle' as const,
    creditCard: 'card' as const,
    lock: 'lock-closed' as const,
    eye: 'eye' as const,
    eyeSlash: 'eye-off' as const,
  },
} as const;

export type FluxSystemIcon = typeof FluxImages.System[keyof typeof FluxImages.System];
