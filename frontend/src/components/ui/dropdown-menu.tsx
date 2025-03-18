import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const DropdownMenu = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Root>
>(({ ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Root
      ref={ref}
      data-slot="dropdown-menu"
      {...props}
    />
  );
});

const DropdownMenuPortal = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Portal>
>(({ ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Portal
      ref={ref}
      data-slot="dropdown-menu-portal"
      {...props}
    />
  );
});

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>
>(
  (
    { ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>,
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.Trigger
        ref={ref} // Forward the ref here
        data-slot="dropdown-menu-trigger"
        {...props}
      />
    );
  }
);

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Content>
>(
  (
    {
      className,
      sideOffset = 4,
      ...props
    }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>,
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          ref={ref} // Forward the ref here
          data-slot="dropdown-menu-content"
          sideOffset={sideOffset}
          className={cn(
            "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
            className
          )}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    );
  }
);

const DropdownMenuGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Group>
>(({ ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Group
      ref={ref}
      data-slot="dropdown-menu-group"
      {...props}
    />
  );
});

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Item>
>(
  (
    {
      className,
      inset,
      variant = "default",
      ...props
    }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
      inset?: boolean;
      variant?: "default" | "destructive";
    },
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.Item
        ref={ref} // Forward the ref here
        data-slot="dropdown-menu-item"
        data-inset={inset}
        data-variant={variant}
        className={cn(
          "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      />
    );
  }
);

const DropdownMenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>
>(
  (
    {
      className,
      children,
      checked,
      ...props
    }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>,
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.CheckboxItem
        ref={ref} // Forward the ref here
        data-slot="dropdown-menu-checkbox-item"
        className={cn(
          "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        checked={checked}
        {...props}
      >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <CheckIcon className="size-4" />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.CheckboxItem>
    );
  }
);

const DropdownMenuRadioGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>
>(({ ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.RadioGroup
      ref={ref}
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
});

const DropdownMenuRadioItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>
>(
  (
    {
      className,
      children,
      ...props
    }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>,
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.RadioItem
        ref={ref} // Forward the ref here
        data-slot="dropdown-menu-radio-item"
        className={cn(
          "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className
        )}
        {...props}
      >
        <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <CircleIcon className="size-2 fill-current" />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.RadioItem>
    );
  }
);

const DropdownMenuLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Label>
>(
  (
    {
      className,
      inset,
      ...props
    }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
      inset?: boolean;
    },
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.Label
        ref={ref} // Forward the ref here
        data-slot="dropdown-menu-label"
        data-inset={inset}
        className={cn(
          "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
          className
        )}
        {...props}
      />
    );
  }
);

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Separator>
>(
  (
    {
      className,
      ...props
    }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>,
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.Separator
        ref={ref} // Forward the ref here
        data-slot="dropdown-menu-separator"
        className={cn("bg-border -mx-1 my-1 h-px", className)}
        {...props}
      />
    );
  }
);

const DropdownMenuShortcut = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span">
>(({ className, ...props }: React.ComponentProps<"span">, ref) => {
  return (
    <span
      ref={ref} // Forward the ref here
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
});

const DropdownMenuSub = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.Sub>
>(({ ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Sub
      ref={ref}
      data-slot="dropdown-menu-sub"
      {...props}
    />
  );
});

const DropdownMenuSubTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>
>(
  (
    {
      className,
      inset,
      children,
      ...props
    }: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
      inset?: boolean;
    },
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.SubTrigger
        ref={ref} // Forward the ref here
        data-slot="dropdown-menu-sub-trigger"
        data-inset={inset}
        className={cn(
          "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
          className
        )}
        {...props}
      >
        {children}
        <ChevronRightIcon className="ml-auto size-4" />
      </DropdownMenuPrimitive.SubTrigger>
    );
  }
);

const DropdownMenuSubContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>
>(
  (
    {
      className,
      ...props
    }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>,
    ref
  ) => {
    return (
      <DropdownMenuPrimitive.SubContent
        ref={ref} // Forward the ref here
        data-slot="dropdown-menu-sub-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
          className
        )}
        {...props}
      />
    );
  }
);

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
