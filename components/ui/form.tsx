"use client"

import * as React from "react"
import {
  Controller,
  FormProvider,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

type FormProps<TFieldValues extends FieldValues> = {
  children: React.ReactNode
  form: UseFormReturn<TFieldValues>
}

function Form<TFieldValues extends FieldValues>({ children, form }: FormProps<TFieldValues>) {
  return <FormProvider {...form}>{children}</FormProvider>
}

const FormFieldContext = React.createContext<{ name: string }>({ name: "" })
const FormItemContext = React.createContext<{ id: string } | null>(null)

function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: ControllerProps<TFieldValues, TName>
) {
  return (
    <FormFieldContext.Provider value={{ name: String(props.name) }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()
  const fieldName = React.useContext(FormFieldContext).name

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn("space-y-2", className)}
        data-name={fieldName}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof Label>) {
  const itemContext = React.useContext(FormItemContext)

  return (
    <Label
      data-slot="form-label"
      className={cn("", className)}
      htmlFor={itemContext?.id}
      {...props}
    />
  )
}

function FormControl({ children, ...props }: React.ComponentProps<"div"> & { children: React.ReactElement }) {
  const itemContext = React.useContext(FormItemContext)
  const fieldContext = React.useContext(FormFieldContext)
  const { formState } = useFormContext()

  const child = React.Children.only(children)
  const error = (formState.errors as Record<string, { message?: string }> | undefined)?.[fieldContext.name]

  const childProps = child.props as Record<string, unknown>

  return React.cloneElement(child, {
    id: itemContext?.id,
    "aria-invalid": error ? true : undefined,
    ...props,
    ...childProps,
  })
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const itemContext = React.useContext(FormItemContext)
  const fieldContext = React.useContext(FormFieldContext)
  const { formState } = useFormContext()
  const error = (formState.errors as Record<string, { message?: string }> | undefined)?.[fieldContext.name]

  if (!error?.message) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={`${itemContext?.id}-message`}
      className={cn("text-sm text-destructive", className)}
      {...props}
    >
      {error.message}
    </p>
  )
}

export { Form, FormControl, FormField, FormItem, FormLabel, FormMessage }
