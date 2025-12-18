"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type LoginPayload = {
    email: string
    password: string
}

export function LoginForm() {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const payload: LoginPayload = { email, password }
        setIsSubmitting(true)

        try {
            // TODO: aquí conectamos backend después (auth service)
            console.log("Login payload:", payload)

            // ✅ Por ahora: simular login exitoso
            router.push("/dashboard")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="w-full max-w-md bg-[color:var(--card)] text-[color:var(--foreground)] border-none shadow-2xl">
            <CardHeader className="space-y-4 text-center pb-8">
                <div className="flex justify-center">
                    <div className="bg-[color:var(--orange-primary)] text-white px-8 py-3 rounded-md shadow-md">
                        <h1 className="text-4xl font-bold tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                            TATAMI
                        </h1>
                    </div>
                </div>

                <CardTitle className="text-2xl font-bold">¡Bienvenido!</CardTitle>
                <CardDescription className="text-[color:var(--muted-foreground)]">
                    Ingrese sus credenciales para acceder a su cuenta
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                            Correo electrónico
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-11"
                            autoComplete="email"
                            inputMode="email"
                            autoCapitalize="none"
                            spellCheck={false}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">
                            Contraseña
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-11"
                            autoComplete="current-password"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full h-12 text-base font-semibold bg-[color:var(--orange-primary)] hover:bg-[color:var(--orange-secondary)] text-white"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
                    </Button>

                    <div className="text-center text-sm">
                        <Link
                            href="#"
                            className="text-[color:var(--orange-primary)] hover:text-[color:var(--orange-secondary)] font-medium"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
