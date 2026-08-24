import { useRef, type ReactNode, type MouseEvent } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  as?: 'button' | 'a' | 'div';
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  onClick,
  href,
  as: Tag = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0) scale(1)';
  };

  const props = {
    ref: ref as React.Ref<HTMLElement>,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
    style: { transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
    ...(href ? { href } : {}),
  };

  // @ts-expect-error polymorphic tag
  return <Tag {...props}>{children}</Tag>;
}
