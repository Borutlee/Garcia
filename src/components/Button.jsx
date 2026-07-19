import React from 'react'

/**
 * Button.jsx
 * Reusable CTA button with two visual variants matching the Garcia brand:
 *  - "primary": solid gold background (main CTAs like "Order Now")
 *  - "outline": transparent with cream border (secondary CTAs like "Reserve a Table")
 *
 * Props:
 *  - children: button label/content
 *  - variant: "primary" | "outline"
 *  - icon: optional Lucide icon component to render before the label
 *  - onClick: click handler
 *  - className: optional extra classes
 *  - as: render as "button" (default) or "a" (link)
 *  - href: used when as="a"
 */
export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  onClick,
  className = '',
  as = 'button',
  href,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap'

  const variants = {
    primary:
      'bg-gold text-garcia-900 hover:bg-gold-light hover:shadow-gold active:scale-[0.98]',
    outline:
      'border border-cream/40 text-cream hover:border-gold hover:text-gold active:scale-[0.98]',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (as === 'a') {
    return (
      <a href={href} className={classes} {...rest}>
        {Icon && <Icon size={16} />}
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {Icon && <Icon size={16} />}
      {children}
    </button>
  )
}
