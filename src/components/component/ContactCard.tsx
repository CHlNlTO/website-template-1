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

export function ContactCard() {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <form>
          <div className="grid w-full items-start gap-4 pt-8">
            <div className="flex flex-col space-y-1.5 items-start">
              <Label htmlFor="email" className="ml-3">Email</Label>
              <Input id="email" type="email" placeholder="juandelacruz@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5 items-start">
              <Label htmlFor="Service" className="ml-3">Service</Label>
            </div>
            <ServiceList />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-start">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}
