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

type TabValue = string;

type TabsListProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  defaultValue?: TabValue;
  onValueChange?: (value: TabValue) => void;
  value?: TabValue;
};

export type TabsTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  value?: TabValue;
};

type TabsTriggerInternalProps = TabsTriggerProps & {
  itemValue?: TabValue;
  onSelectValue?: (value: TabValue) => void;
};

function resolveTabValue(child: ReactElement<TabsTriggerProps>, index: number) {
  if (typeof child.props.value === "string" && child.props.value.length > 0) {
    return child.props.value;
  }

  if (typeof child.props.children === "string" && child.props.children.length > 0) {
    return child.props.children;
  }

  return `tab-${index}`;
}

export function TabsList({
  children,
  className,
  defaultValue,
  onValueChange,
  value,
  ...props
}: TabsListProps) {
  const items = Children.toArray(children).filter((child): child is ReactElement<TabsTriggerProps> =>
    isValidElement<TabsTriggerProps>(child),
  );
  const initialValue =
    defaultValue ??
    (items.find((child) => child.props.active)
      ? resolveTabValue(items.find((child) => child.props.active)!, 0)
      : items[0]
        ? resolveTabValue(items[0], 0)
        : "");
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(initialValue);
  const currentValue = isControlled ? value : internalValue;

  const handleSelectValue = (nextValue: TabValue) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-secondary p-1 shadow-soft",
        className,
      )}
      role="tablist"
      {...props}
    >
      {items.map((child, index) => {
        const itemValue = resolveTabValue(child, index);
        const item = child as ReactElement<TabsTriggerInternalProps>;

        return cloneElement(item, {
          active: itemValue === currentValue,
          itemValue,
          onSelectValue: handleSelectValue,
        });
      })}
    </div>
  );
}

export function TabsTrigger({
  className,
  active,
  itemValue,
  onClick,
  onSelectValue,
  type = "button",
  ...props
}: TabsTriggerInternalProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !itemValue) {
      return;
    }

    onSelectValue?.(itemValue);
  };

  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold tracking-[-0.01em] transition-[background-color,color,box-shadow,opacity,transform] duration-200 outline-none cursor-pointer focus-visible:[box-shadow:var(--shadow-focus)] active:scale-[0.985]",
        active
          ? "bg-card text-card-foreground shadow-soft"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
      type={type}
      role="tab"
      aria-selected={active}
      data-state={active ? "active" : "inactive"}
      onClick={handleClick}
      {...props}
    />
  );
}
