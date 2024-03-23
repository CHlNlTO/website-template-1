"use client";

import * as React from "react"
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { sendContactForm } from "@/lib/api";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Invalid email",
  }),
  name: z.string().min(1, {
    message: "Invalid name",
  }),
  subject: z.string().min(1, {
    message: "Invalid subject",
  }),
  message: z.string().min(1, {
    message: "Invalid inquiry",
  }),
})

export type formType = z.infer<typeof formSchema>;

export function ContactCard() {

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    try {
      await sendContactForm(values)

    } catch (error) {
      
    }
    toast({
      description: "Form has been sent.",
    });
  }

  return (
    <Card className="w-[500px]">
      <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8 pt-5">
          <div className="grid grid-cols-1 gap-7">
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col space-y-1.5 items-start">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Dela Cruz" {...field} />
                    </FormControl>
                  <FormMessage />
                  </div>
                </FormItem>
                
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5 items-start">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="An inquiry about..." {...field} />
                  </FormControl>
                <FormMessage />
                </div>
              </FormItem>
              
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5 items-start">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[150px]" placeholder="Enter your message" {...field} />
                  </FormControl>
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


{/* <Card className="w-[350px]">
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
    </Card> */}