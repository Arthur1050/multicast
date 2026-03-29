"use client";

import {
  Children,
  isValidElement,
  useRef,
  useState,
  type ChangeEvent,
  type ReactElement,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";

import {
  Select as SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type OptionElement = ReactElement<{
  children?: ReactNode;
  disabled?: boolean;
  value?: string;
}>;

type SelectOption = {
  disabled?: boolean;
  label: ReactNode;
  value: string;
};

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "children" | "size"> & {
  children?: ReactNode;
  onValueChange?: (value: string) => void;
  placeholder?: string;
};

function getOptions(children: ReactNode) {
  return Children.toArray(children).flatMap((child) => {
    if (!isValidElement(child) || child.type !== "option") {
      return [];
    }

    const option = child as OptionElement;
    const value = option.props.value ?? String(option.props.children ?? "");

    return [
      {
        disabled: option.props.disabled,
        label: option.props.children,
        value,
      } satisfies SelectOption,
    ];
  });
}

export function Select({
  children,
  defaultValue,
  disabled,
  name,
  onChange,
  onValueChange,
  placeholder,
  required,
  value,
  ...props
}: SelectProps) {
  const options = getOptions(children);
  const selectRef = useRef<HTMLSelectElement>(null);
  const isControlled = value !== undefined;
  const firstEnabledOption = options.find((option) => !option.disabled)?.value ?? "";
  const [internalValue, setInternalValue] = useState(
    String(defaultValue ?? value ?? firstEnabledOption),
  );

  const currentValue = isControlled ? String(value ?? "") : internalValue;

  const handleValueChange = (nextValue: string) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);

    if (onChange && selectRef.current) {
      const nativeSelect = selectRef.current;
      nativeSelect.value = nextValue;

      const event = new Event("change", { bubbles: true });
      nativeSelect.dispatchEvent(event);
    }
  };

  return (
    <>
      <SelectRoot
        defaultValue={isControlled ? undefined : String(defaultValue ?? undefined)}
        disabled={disabled}
        value={currentValue || undefined}
        onValueChange={handleValueChange}
      >
        <SelectTrigger aria-label={props["aria-label"]}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              disabled={option.disabled}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>

      <select
        {...props}
        ref={selectRef}
        className="sr-only"
        disabled={disabled}
        name={name}
        required={required}
        tabIndex={-1}
        value={currentValue}
        onChange={onChange as ((event: ChangeEvent<HTMLSelectElement>) => void) | undefined}
      >
        {children}
      </select>
    </>
  );
}
