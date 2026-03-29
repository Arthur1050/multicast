"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

type SegmentedValue = string;

type SegmentedControlProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  defaultValue?: SegmentedValue;
  onValueChange?: (value: SegmentedValue) => void;
  value?: SegmentedValue;
};

export type SegmentedControlItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  value?: SegmentedValue;
};

type SegmentedControlItemInternalProps = SegmentedControlItemProps & {
  itemValue?: SegmentedValue;
  onSelectValue?: (value: SegmentedValue) => void;
};

function resolveItemValue(
  child: ReactElement<SegmentedControlItemProps>,
  index: number,
) {
  if (typeof child.props.value === "string" && child.props.value.length > 0) {
    return child.props.value;
  }

  if (typeof child.props.children === "string" && child.props.children.length > 0) {
    return child.props.children;
  }

  return `segment-${index}`;
}

export function SegmentedControl({
  children,
  className,
  defaultValue,
  onValueChange,
  value,
  ...props
}: SegmentedControlProps) {
  const items = Children.toArray(children).filter((child): child is ReactElement<SegmentedControlItemProps> =>
    isValidElement<SegmentedControlItemProps>(child),
  );
  const initialValue =
    defaultValue ??
    (items.find((child) => child.props.active)
      ? resolveItemValue(items.find((child) => child.props.active)!, 0)
      : items[0]
        ? resolveItemValue(items[0], 0)
        : "");
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(initialValue);
  const currentValue = isControlled ? value : internalValue;

  const handleSelectValue = (nextValue: SegmentedValue) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <div
      className={cn(
        "inline-flex rounded-[calc(var(--radius)+2px)] border border-border bg-card p-1 shadow-soft",
        className,
      )}
      role="tablist"
      {...props}
    >
      {items.map((child, index) => {
        const itemValue = resolveItemValue(child, index);
        const item = child as ReactElement<SegmentedControlItemInternalProps>;

        return cloneElement(item, {
          active: itemValue === currentValue,
          itemValue,
          onSelectValue: handleSelectValue,
        });
      })}
    </div>
  );
}

export function SegmentedControlItem({
  className,
  active,
  itemValue,
  onClick,
  onSelectValue,
  type = "button",
  ...props
}: SegmentedControlItemInternalProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !itemValue) {
      return;
    }

    onSelectValue?.(itemValue);
  };

  return (
    <button
      type={type}
      role="tab"
      aria-selected={active}
      data-state={active ? "active" : "inactive"}
      className={cn(
        "inline-flex min-w-24 items-center justify-center rounded-[calc(var(--radius)-4px)] px-4 py-2.5 text-sm font-semibold transition-[background-color,color,box-shadow,opacity,transform] duration-200 outline-none cursor-pointer focus-visible:[box-shadow:var(--shadow-focus)] active:scale-[0.985]",
        active
          ? "bg-primary text-primary-foreground shadow-soft"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        className,
      )}
      onClick={handleClick}
      {...props}
    />
  );
}
