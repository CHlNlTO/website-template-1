"use client";

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ServiceList } from "./ServiceList"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { sendContactForm } from "@/lib/api";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Invalid email",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
})

export type formType = z.infer<typeof formSchema>;

export function ContactCard() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      service: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    await sendContactForm(values)
    console.log(values, "hatdog")

  }

  return (
    <Card className="w-[350px]">
      <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8 pt-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5 items-start">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="juandelacruz@gmail.com" {...field} />
                  </FormControl>
                <FormMessage />
                </div>

              </FormItem>
              
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5 items-start">
                  <FormLabel>Service</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent position="popper">
                      <SelectItem value="Others">Others..</SelectItem>
                      <SelectItem value="Aluminum Door Cabinet">Aluminum Door Cabinet</SelectItem>
                      <SelectItem value="Aluminum Kitchen">Aluminum Kitchen</SelectItem>
                      <SelectItem value="Aluminum Wardrobe Cabinet">Aluminum Wardrobe Cabinet</SelectItem>
                      <SelectItem value="Dog Houses">Dog Houses</SelectItem>
                      <SelectItem value="Estante Showcase">Estante Showcase</SelectItem>
                      <SelectItem value="Fence">Fence</SelectItem>
                      <SelectItem value="Fix Glass">Fix Glass</SelectItem>
                      <SelectItem value="Fix Window Screen">Fix Window Screen</SelectItem>
                      <SelectItem value="Frameless Doors">Frameless Doors</SelectItem>
                      <SelectItem value="Glass Railings">Glass Railings</SelectItem>
                      <SelectItem value="Mirror Glass">Mirror Glass</SelectItem>
                      <SelectItem value="Patch Fitting">Patch Fitting</SelectItem>
                      <SelectItem value="Signboard Aluminum Framing">Signboard Aluminum Framing</SelectItem>
                      <SelectItem value="Sliding Door">Sliding Door</SelectItem>
                      <SelectItem value="Sliding Screen Doors">Sliding Screen Doors</SelectItem>
                      <SelectItem value="Sliding Screen Windows">Sliding Screen Windows</SelectItem>
                      <SelectItem value="Stainless Gate">Stainless Gate</SelectItem>
                      <SelectItem value="Stainless Railings">Stainless Railings</SelectItem>
                      <SelectItem value="Steel Gate Door">Steel Gate Door</SelectItem>
                      <SelectItem value="Steel Trusses">Steel Trusses</SelectItem>
                      <SelectItem value="Steel Windows">Steel Windows</SelectItem>
                      <SelectItem value="Window Grills">Window Grills</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
      <CardFooter className="flex items-start justify-start">
        <Button type="submit">Contact Us</Button>
      </CardFooter>
        </form>
      </Form>
      </CardContent>
    </Card>
  )
}
