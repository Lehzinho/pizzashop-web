import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Dialog = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogPrimitive.Root>
>(({ ...props }, ref) => {
  return <DialogPrimitive.Root ref={ref} data-slot="dialog" {...props} />;
});

const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof DialogPrimitive.Trigger>
>(({ ...props }, ref) => {
  return (
    <DialogPrimitive.Trigger ref={ref} data-slot="dialog-trigger" {...props} />
  );
});

const DialogPortal = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogPrimitive.Portal>
>(({ ...props }, ref) => {
  return (
    <DialogPrimitive.Portal ref={ref} data-slot="dialog-portal" {...props} />
  );
});

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof DialogPrimitive.Close>
>(({ ...props }, ref) => {
  return (
    <DialogPrimitive.Close ref={ref} data-slot="dialog-close" {...props} />
  );
});

const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogPrimitive.Overlay>
>(
  (
    {
      className,
      ...props
    }: React.ComponentProps<typeof DialogPrimitive.Overlay>,
    ref
  ) => {
    return (
      <DialogPrimitive.Overlay
        ref={ref} // Forward the ref here
        data-slot="dialog-overlay"
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
          className
        )}
        {...props}
      />
    );
  }
);

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogPrimitive.Content>
>(
  (
    {
      className,
      children,
      ...props
    }: React.ComponentProps<typeof DialogPrimitive.Content>,
    ref
  ) => {
    return (
      <DialogPortal data-slot="dialog-portal">
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={ref} // Forward the ref here
          data-slot="dialog-content"
          className={cn(
            "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
            className
          )}
          {...props}
        >
          {children}
          <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4">
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  }
);

const DialogHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref} // Forward the ref here
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
});

const DialogFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref} // Forward the ref here
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
});

const DialogTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogPrimitive.Title>
>(
  (
    { className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>,
    ref
  ) => {
    return (
      <DialogPrimitive.Title
        ref={ref} // Forward the ref here
        data-slot="dialog-title"
        className={cn("text-lg leading-none font-semibold", className)}
        {...props}
      />
    );
  }
);

const DialogDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogPrimitive.Description>
>(
  (
    {
      className,
      ...props
    }: React.ComponentProps<typeof DialogPrimitive.Description>,
    ref
  ) => {
    return (
      <DialogPrimitive.Description
        ref={ref} // Forward the ref here
        data-slot="dialog-description"
        className={cn("text-muted-foreground text-sm", className)}
        {...props}
      />
    );
  }
);

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
