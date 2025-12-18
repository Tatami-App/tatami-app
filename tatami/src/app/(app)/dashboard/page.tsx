import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
    return (
        <div className="p-4 lg:p-8 space-y-4">
            <h1 className="text-2xl">Dashboard</h1>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Clases de hoy</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        (Luego: lista desde backend)
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Pagos por vencer</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        (Luego: alertas de vencimiento)
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Alumnos penalizados</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        (Luego: checks y penalizaciones)
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
