"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login:", { email, password })
    }

    return (
        <Card className="w-full max-w-md bg-card border-none shadow-xl">
            <CardHeader className="space-y-4 text-center pb-8">
                <div className="flex justify-center">
                    <div className="bg-primary text-primary-foreground px-8 py-3 rounded-md">
                        <h1 className="text-4xl font-bold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                            TATAMI
                        </h1>
                    </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Welcome Back</CardTitle>
                <CardDescription className="text-muted-foreground">
                    Enter your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-11"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-11"
                            required
                        />
                    </div>

                    <Button type="submit" className="w-full h-12 text-base font-semibold bg-primary hover:bg-secondary">
                        Sign In
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
