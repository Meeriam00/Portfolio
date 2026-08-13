import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { cn } from "../../utils/cn";

interface InfiniteCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyOf: (item: T, index: number) => string;
  speed?: number;
  className?: string;
}

export function InfiniteCarousel<T>({
  items,
  renderItem,
  keyOf,
  speed = 45,
  className,
}: InfiniteCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [setWidth, setSetWidth] = useState(0);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function measure() {
      if (trackRef.current) {
        setSetWidth(trackRef.current.scrollWidth / 2);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items]);

  useMotionValueEvent(x, "change", (latest) => {
    if (!setWidth) return;
    if (latest <= -setWidth) x.set(latest + setWidth);
    else if (latest > 0) x.set(latest - setWidth);
  });

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || isPaused.current || isDragging.current || !setWidth) return;
    x.set(x.get() - (speed * delta) / 1000);
  });

  const doubledItems = [...items, ...items];

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <motion.div
        ref={trackRef}
        className="flex w-max cursor-grab items-stretch gap-4 active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragMomentum={false}
        onDragStart={() => (isDragging.current = true)}
        onDragEnd={() => (isDragging.current = false)}
      >
        {doubledItems.map((item, index) => (
          <div key={keyOf(item, index)} className="shrink-0">
            {renderItem(item, index)}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
